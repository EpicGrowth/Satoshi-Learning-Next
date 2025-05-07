'use client';

import React, { useEffect, useState } from 'react';
import { useTheme } from 'next-themes';

interface HoneycombBackgroundProps {
  fullHeight?: boolean;
  opacity?: number;
}

export function HoneycombBackground({ 
  fullHeight = false,
  opacity = 0.3
}: HoneycombBackgroundProps) {
  const { theme } = useTheme();
  const [mounted, setMounted] = useState(false);
  
  // Wait for component to be mounted to access theme
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <div
      className={`fixed inset-0 -z-10 overflow-hidden pointer-events-none ${
        fullHeight ? 'min-h-screen' : ''
      }`}
    >
      {/* Honeycomb pattern background - matches the screenshots */}
      <div 
        className="absolute inset-0 w-full h-full opacity-40"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='28' height='49' viewBox='0 0 28 49' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cg opacity='0.15'%3E%3Cpath d='M13.9998 24.4996L27.9996 16.3328V0L13.9998 8.16674L0 0V16.3328L13.9998 24.4996Z' fill='%23${theme === 'dark' ? 'FF4500' : 'FF4500'}'/%3E%3Cpath d='M13.9998 24.4996L27.9996 16.3328V0L13.9998 8.16674L0 0V16.3328L13.9998 24.4996Z' fill='%23${theme === 'dark' ? 'FF4500' : 'FF4500'}'/%3E%3Cpath d='M13.9998 48.9992L27.9996 40.8324V24.4996L13.9998 32.6664L0 24.4996V40.8324L13.9998 48.9992Z' fill='%23${theme === 'dark' ? 'FF4500' : 'FF4500'}'/%3E%3Cpath d='M13.9998 48.9992L27.9996 40.8324V24.4996L13.9998 32.6664L0 24.4996V40.8324L13.9998 48.9992Z' fill='%23${theme === 'dark' ? 'FF4500' : 'FF4500'}'/%3E%3C/g%3E%3C/svg%3E")`,
          backgroundSize: '56px 98px',
          backgroundPosition: '0 0',
          backgroundRepeat: 'repeat',
        }}
      />

      {/* Floating orbs */}
      <div className="absolute top-[10%] right-[15%] w-64 h-64 rounded-full bg-bitcoin-orange/5 filter blur-3xl animate-float-slow"></div>
      <div className="absolute bottom-[20%] left-[10%] w-80 h-80 rounded-full bg-bitcoin-orange/5 filter blur-3xl animate-float-slow" style={{ animationDelay: '-7s' }}></div>
      
      {/* Gradient overlay */}
      <div
        className="absolute inset-0"
        style={{
          background: theme === 'dark'
            ? 'radial-gradient(circle at 30% 30%, rgba(255, 69, 0, 0.08) 0%, rgba(13, 18, 34, 0) 70%)'
            : 'radial-gradient(circle at 30% 30%, rgba(255, 69, 0, 0.05) 0%, rgba(255, 255, 255, 0) 70%)'
        }}
      />
    </div>
  );
}

export default HoneycombBackground;