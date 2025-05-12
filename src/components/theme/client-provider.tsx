'use client';

import React from 'react';
import { useTheme } from './theme-provider';

// This component wraps client-side theme-dependent elements
export function ClientThemeProvider({ 
  children, 
  darkComponent, 
  lightComponent 
}: { 
  children?: React.ReactNode;
  darkComponent?: React.ReactNode;
  lightComponent?: React.ReactNode;
}) {
  const [mounted, setMounted] = React.useState(false);
  const { theme } = useTheme() || { theme: 'light' };
  
  // After hydration, we have access to the theme
  React.useEffect(() => {
    setMounted(true);
  }, []);
  
  // During server rendering and initial client render, show a common UI
  if (!mounted) {
    return <>{children}</>;
  }
  
  // Check if dark mode is active based on theme setting
  const isDarkMode = 
    theme === 'dark' || 
    (theme === 'system' && 
     typeof window !== 'undefined' && 
     window.matchMedia('(prefers-color-scheme: dark)').matches);
  
  return (
    <>
      {children}
      {isDarkMode ? darkComponent : lightComponent}
    </>
  );
}