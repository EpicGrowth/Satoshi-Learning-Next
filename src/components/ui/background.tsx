'use client';

import React, { useState, useEffect } from 'react';
import { useTheme } from '@/components/theme/theme-provider';

export function Background() {
  // For safer client-side rendering
  const [mounted, setMounted] = useState(false);
  
  useEffect(() => {
    setMounted(true);
  }, []);

  const { theme } = useTheme() || { theme: 'light' };
  
  // Only check for dark mode after component is mounted
  const isDark = mounted && (
    theme === 'dark' || 
    (theme === 'system' && 
      typeof window !== 'undefined' && 
      window.matchMedia('(prefers-color-scheme: dark)').matches)
  );
  
  // Return a simpler version during server rendering or hydration
  if (!mounted) {
    return (
      <div className="fixed inset-0 -z-10 h-full w-full bg-background">
        <div className="absolute h-full w-full bg-[linear-gradient(to_right,hsl(var(--border))_1px,transparent_1px),linear-gradient(to_bottom,hsl(var(--border))_1px,transparent_1px)] bg-[size:80px_80px] [mask-image:radial-gradient(ellipse_60%_60%_at_50%_50%,#000_50%,transparent_100%)]"></div>
      </div>
    );
  }
  
  return (
    <div className="fixed inset-0 -z-10 h-full w-full bg-background overflow-hidden">
      {/* Enhanced grid for better educational content backdrop */}
      <div className="absolute h-full w-full bg-[linear-gradient(to_right,hsl(var(--border))_1px,transparent_1px),linear-gradient(to_bottom,hsl(var(--border))_1px,transparent_1px)] bg-[size:80px_80px] [mask-image:radial-gradient(ellipse_60%_60%_at_50%_50%,#000_50%,transparent_100%)]"></div>
      
      {/* Main branded glow */}
      <div className="absolute top-0 left-[10%] w-[800px] h-[600px] rounded-full bg-primary-light/5 dark:bg-primary-light/3 blur-[120px] opacity-70"></div>
      
      {/* Secondary glow for contrast */}
      <div className="absolute bottom-[-5%] right-[5%] w-[600px] h-[600px] rounded-full bg-primary-dark/4 dark:bg-primary-dark/3 blur-[100px] opacity-60"></div>
      
      {/* Tertiary glow for depth */}
      <div className="absolute top-[30%] right-[25%] w-[400px] h-[400px] rounded-full bg-learning-beginner/3 dark:bg-learning-beginner/2 blur-[80px] opacity-50 animate-pulse-subtle"></div>
      
      {/* Floating elements for visual interest */}
      <div className="absolute top-[15%] left-[45%] w-32 h-32 rounded-full bg-primary-light/5 dark:bg-primary-light/3 blur-xl animate-float" style={{ animationDuration: '8s' }}></div>
      <div className="absolute bottom-[25%] right-[30%] w-40 h-40 rounded-full bg-primary-dark/4 dark:bg-primary-dark/3 blur-xl animate-float" style={{ animationDuration: '12s', animationDelay: '-4s' }}></div>
      
      {/* Subtle hexagon pattern overlay - Bitcoin themed */}
      <div className="absolute inset-0 bg-[url('/images/hex-pattern.svg')] bg-[length:300px_300px] opacity-[0.03] dark:opacity-[0.05]"></div>
      
      {/* Light mode only small accents */}
      {!isDark && (
        <>
          <div className="absolute top-[25%] right-[45%] w-8 h-8 rounded-full bg-learning-intermediate/30 blur-sm"></div>
          <div className="absolute bottom-[15%] left-[35%] w-6 h-6 rounded-full bg-learning-reference/30 blur-sm"></div>
          <div className="absolute top-[60%] left-[20%] w-10 h-10 rounded-full bg-learning-advanced/20 blur-sm"></div>
        </>
      )}
      
      {/* Dark mode only elements */}
      {isDark && (
        <>
          <div className="absolute bottom-0 left-0 w-full h-[300px] bg-gradient-to-t from-primary-dark/5 to-transparent opacity-30"></div>
          <div className="absolute top-[10%] left-[20%] w-4 h-4 rounded-full bg-learning-beginner/30 blur-sm animate-pulse-slow"></div>
          <div className="absolute top-[70%] right-[10%] w-3 h-3 rounded-full bg-learning-intermediate/30 blur-sm animate-pulse-slow" style={{ animationDelay: '-2s' }}></div>
          <div className="absolute top-[40%] left-[80%] w-5 h-5 rounded-full bg-learning-reference/30 blur-sm animate-pulse-slow" style={{ animationDelay: '-4s' }}></div>
        </>
      )}
    </div>
  );
}