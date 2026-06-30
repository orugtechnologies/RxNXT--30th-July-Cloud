const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

async function main() {
  const user = await prisma.user.updateMany({
    where: { email: 'doctor@rxnxt.com' },
    data: { fullName: 'Dr. Paani Datta' }
  });
  console.log('Updated user:', user);
}

main()
  .catch(console.error)
  .finally(() => prisma.$disconnect());
