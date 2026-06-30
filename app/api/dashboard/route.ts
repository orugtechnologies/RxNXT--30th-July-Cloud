import { NextResponse } from 'next/server';
import { getAuthenticatedUser } from '@/lib/auth-server';
import { prisma } from '@/lib/prisma';

export async function GET() {
  try {
    const user = await getAuthenticatedUser();
    if (!user) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });

    const clinicId = user.clinicId;
    const today = new Date();
    today.setHours(0, 0, 0, 0);

    // Run all counts in parallel
    const [
      totalPatients,
      totalPrescriptions,
      todayPrescriptions,
      recentPrescriptions,
      followUps,
      frequentMeds,
    ] = await Promise.all([
      // Total patients in clinic
      prisma.patient.count({ where: { clinicId } }),

      // Total prescriptions in clinic
      prisma.prescription.count({ where: { clinicId } }),

      // Today's prescriptions
      prisma.prescription.count({
        where: { clinicId, createdAt: { gte: today } },
      }),

      // Recent prescriptions (last 10)
      prisma.prescription.findMany({
        where: { clinicId },
        orderBy: { createdAt: 'desc' },
        take: 10,
        include: {
          patient: { select: { name: true, age: true, gender: true } },
          encounter: { select: { chiefComplaint: true, diagnosis: true, followUpDate: true } },
          medicines: { select: { id: true } },
        },
      }),

      // Upcoming follow-ups (next 7 days)
      prisma.encounter.findMany({
        where: {
          clinicId,
          followUpDate: {
            gte: today.toISOString().split('T')[0],
            lte: new Date(Date.now() + 7 * 86400000).toISOString().split('T')[0],
          },
        },
        orderBy: { followUpDate: 'asc' },
        take: 10,
        include: {
          patient: { select: { name: true, phone: true, age: true, gender: true } },
        },
      }),

      // Frequent medicines (top 10 by usage count)
      prisma.drug.findMany({
        where: { prescriptionCount: { gt: 0 } },
        orderBy: { prescriptionCount: 'desc' },
        take: 10,
      }),
    ]);

    // Format recent prescriptions
    const formattedRecentRx = recentPrescriptions.map((rx) => ({
      id: rx.id,
      created_at: rx.createdAt.toISOString(),
      patient_id: rx.patientId,
      patient_name: rx.patient.name,
      patient_age: rx.patient.age,
      patient_gender: rx.patient.gender,
      chief_complaint: rx.encounter?.chiefComplaint ?? null,
      diagnosis: rx.encounter?.diagnosis ?? null,
      follow_up_date: rx.encounter?.followUpDate ?? null,
      medicine_count: rx.medicines.length,
    }));

    // Format follow-ups
    const formattedFollowUps = followUps.map((enc) => {
      const followDate = new Date(enc.followUpDate!);
      const daysUntil = Math.ceil((followDate.getTime() - Date.now()) / 86400000);
      return {
        encounter_id: enc.id,
        follow_up_date: enc.followUpDate,
        chief_complaint: enc.chiefComplaint,
        diagnosis: enc.diagnosis,
        visit_date: enc.createdAt.toISOString(),
        patient_id: enc.patientId,
        patient_name: enc.patient.name,
        patient_phone: enc.patient.phone,
        patient_age: enc.patient.age,
        patient_gender: enc.patient.gender,
        days_until: daysUntil,
      };
    });

    // Format frequent medicines
    const formattedFreqMeds = frequentMeds.map((d) => ({
      medicine_id: d.id,
      medicine_name: d.brandName ?? d.genericName,
      dosage_form: d.dosageForm,
      strength: d.strength,
      route: d.route,
      prescription_count: d.prescriptionCount,
    }));

    return NextResponse.json({
      stats: {
        total_patients: totalPatients,
        today_patients: 0, // Not tracked at patient level; use rx count
        total_prescriptions: totalPrescriptions,
        prescriptions_today: todayPrescriptions,
        follow_ups_due: followUps.length,
        recent_activity: [],
      },
      recentPrescriptions: formattedRecentRx,
      followUps: formattedFollowUps,
      frequentMedicines: formattedFreqMeds,
    });

  } catch (error: any) {
    console.error('Dashboard API Error:', error);
    return NextResponse.json({ error: error.message || 'Internal Server Error' }, { status: 500 });
  }
}
