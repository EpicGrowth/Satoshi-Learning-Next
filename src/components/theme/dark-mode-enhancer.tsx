'use client';

import { useEffect, useState } from 'react';
import { useTheme } from '@/components/theme/theme-provider';

/**
 * DarkModeEnhancer component
 * Conditionally loads the enhanced dark mode styles when the theme is dark
 */
export function DarkModeEnhancer() {
  const { theme } = useTheme();
  const [mounted, setMounted] = useState(false);
  
  // Only run after client-side hydration
  useEffect(() => {
    setMounted(true);
  }, []);

  // Only render once mounted to avoid hydration mismatch
  if (!mounted) return null;
  
  // Check if theme is dark or system dark mode is active
  const isDarkActive = 
    theme === 'dark' || 
    (theme === 'system' && 
      typeof window !== 'undefined' && 
      window.matchMedia('(prefers-color-scheme: dark)').matches);

  if (!isDarkActive) return null;
  
  return (
    <>
      {/* Import the dark mode enhancements CSS */}
      {/*
      <link 
        rel="stylesheet" 
        href="/styles/dark-mode-enhancements.css" 
        precedence="high"
      />
      */}
    </>
  );
}
