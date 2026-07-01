'use client';

import { useState, useEffect } from 'react';
import { HeartPulse } from 'lucide-react';

export default function WelcomeSplash({ doctorName }: { doctorName: string }) {
  const [show, setShow] = useState(false);
  const [isFadingOut, setIsFadingOut] = useState(false);

  useEffect(() => {
    // Check if we've already shown the splash this session
    const hasSeenSplash = sessionStorage.getItem('hasSeenWelcomeSplash');
    
    if (!hasSeenSplash) {
      setShow(true);
      sessionStorage.setItem('hasSeenWelcomeSplash', 'true');
      
      // Start fading out after 2s
      const fadeTimer = setTimeout(() => {
        setIsFadingOut(true);
      }, 2000);

      // Completely remove from DOM after fade finishes
      const removeTimer = setTimeout(() => {
        setShow(false);
      }, 2700); // Wait for the transition to finish

      return () => {
        clearTimeout(fadeTimer);
        clearTimeout(removeTimer);
      };
    }
  }, []);

  if (!show) return null;

  return (
    <div 
      className={`fixed inset-0 z-[100] flex items-center justify-center bg-clinic-navy/95 backdrop-blur-md transition-opacity duration-700 ease-in-out ${
        isFadingOut ? 'opacity-0' : 'opacity-100'
      }`}
    >
      <div 
        className={`text-center text-white p-8 max-w-lg transform transition-all duration-700 ease-in-out ${
          isFadingOut ? 'scale-110 opacity-0' : 'scale-100 opacity-100 animate-scale-in'
        }`}
      >
        <HeartPulse className="h-24 w-24 mx-auto mb-6 text-clinic-emerald animate-pulse-soft" />
        <h1 className="text-4xl md:text-5xl font-extrabold mb-4 tracking-tight">
          Hello Doctor,
        </h1>
        <p className="text-xl md:text-2xl font-medium text-white/90">
          welcome to another day of saving lives
        </p>
      </div>
    </div>
  );
}
