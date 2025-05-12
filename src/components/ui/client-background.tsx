'use client';

import React, { useState, useEffect } from 'react';
import { useTheme } from '@/components/theme/theme-provider';
import { StaticBackground } from './static-background';

export function ClientBackground() {
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

  // Return the static background during server rendering or hydration
  if (!mounted) {
    return null;
  }

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Client-side dark/light mode specific elements */}
      {!isDark && (
        <>
          <div className="absolute top-[25%] right-[45%] w-8 h-8 rounded-full bg-learning-intermediate/30 blur-sm"></div>
          <div className="absolute bottom-[15%] left-[35%] w-6 h-6 rounded-full bg-learning-reference/30 blur-sm"></div>
          <div className="absolute top-[60%] left-[20%] w-10 h-10 rounded-full bg-learning-advanced/20 blur-sm"></div>
        </>
      )}

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