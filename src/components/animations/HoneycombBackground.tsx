'use client';

import React, { useEffect, useState } from 'react';
import { useTheme } from 'next-themes';

interface HoneycombBackgroundProps {
  fullHeight?: boolean;
  opacity?: number;
}

export function HoneycombBackground({ 
  fullHeight = false,
  opacity = 0.9 // Increased default opacity for better visibility
}: HoneycombBackgroundProps) {
  const { theme, systemTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  
  // Wait for component to be mounted to access theme
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;
  
  // Get current theme
  const currentTheme = theme === 'system' ? systemTheme : theme;
  const isDarkMode = currentTheme === 'dark';
  
  // Define standardized Bitcoin orange colors
  // Primary color - official Bitcoin orange
  const primaryHex = 'F7931A'; // Standard Bitcoin orange
  // Secondary color - pure white for maximum contrast
  const secondaryHex = 'FFFFFF';
  
  return (
    <div
      className={`fixed inset-0 -z-10 overflow-hidden pointer-events-none ${
        fullHeight ? 'min-h-screen' : ''
      }`}
    >
      {/* Honeycomb pattern background with standardized Bitcoin orange */}
      <div 
        className={`absolute inset-0 w-full h-full ${isDarkMode ? 'opacity-30' : 'opacity-20'}`}
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='28' height='49' viewBox='0 0 28 49' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cg opacity='0.25'%3E%3Cpath d='M13.9998 24.4996L27.9996 16.3328V0L13.9998 8.16674L0 0V16.3328L13.9998 24.4996Z' fill='%23${primaryHex}'/%3E%3Cpath d='M13.9998 24.4996L27.9996 16.3328V0L13.9998 8.16674L0 0V16.3328L13.9998 24.4996Z' fill='%23${primaryHex}'/%3E%3Cpath d='M13.9998 48.9992L27.9996 40.8324V24.4996L13.9998 32.6664L0 24.4996V40.8324L13.9998 48.9992Z' fill='%23${primaryHex}'/%3E%3Cpath d='M13.9998 48.9992L27.9996 40.8324V24.4996L13.9998 32.6664L0 24.4996V40.8324L13.9998 48.9992Z' fill='%23${primaryHex}'/%3E%3C/g%3E%3C/svg%3E")`,
          backgroundSize: '46px 80px', // Slightly smaller pattern
          backgroundPosition: '0 0',
          backgroundRepeat: 'repeat',
        }}
      />
      
      {/* Diagonal grid overlay with Bitcoin orange */}
      <div className={`absolute inset-0 ${isDarkMode ? 'opacity-15' : 'opacity-10'}`} 
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23${primaryHex}' fill-opacity='0.15' fill-rule='evenodd'%3E%3Cpath d='M0 40L40 0H20L0 20M40 40V20L20 40'/%3E%3C/g%3E%3C/svg%3E")`,
          backgroundSize: '28px 28px'
        }}
      />

      {/* Floating gradient orbs with Bitcoin orange */}
      <div className="absolute top-[18%] right-[15%] w-80 h-80 rounded-full bg-bitcoin-orange/25 filter blur-3xl animate-float-slow"></div>
      
      <div className="absolute bottom-[12%] left-[15%] w-96 h-96 rounded-full bg-bitcoin-orange/20 filter blur-3xl animate-float-slow" 
        style={{ animationDelay: '-7s' }}></div>
      
      <div className="absolute top-[58%] left-[28%] w-64 h-64 rounded-full bg-bitcoin-orange/30 filter blur-3xl animate-float-slow" 
        style={{ animationDelay: '-3s' }}></div>
      
      {/* Stronger radial gradient overlay */}
      <div
        className="absolute inset-0"
        style={{
          background: isDarkMode
            ? `radial-gradient(circle at 25% 25%, rgba(247, 147, 26, 0.08) 0%, rgba(13, 18, 34, 0) 70%)`
            : `radial-gradient(circle at 25% 25%, rgba(247, 147, 26, 0.06) 0%, rgba(255, 255, 255, 0) 70%)`
        }}
      />
      
      {/* Secondary gradient for visual interest */}
      <div
        className="absolute inset-0"
        style={{
          background: isDarkMode
            ? `radial-gradient(circle at 75% 65%, rgba(232, 125, 24, 0.07) 0%, rgba(13, 18, 34, 0) 70%)`
            : `radial-gradient(circle at 75% 65%, rgba(232, 125, 24, 0.05) 0%, rgba(255, 255, 255, 0) 70%)`
        }}
      />
      
      {/* Very minimal blur overlay for improved contrast with content */}
      <div className={`absolute inset-0 ${isDarkMode ? 'bg-background/0' : 'bg-background/0'} backdrop-blur-[0.5px]`}></div>
    </div>
  );
}