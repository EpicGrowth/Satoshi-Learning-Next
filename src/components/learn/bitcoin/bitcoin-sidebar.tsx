'use client';

import { useMemo } from 'react';
import { LearningSidebar } from '../shared/learning-sidebar';
import { bitcoinModules } from '@/config/learning-modules';

// Use a memoized version to prevent unnecessary re-renders
export function BitcoinSidebar() {
  // Memoize the modules array to prevent it from changing on re-renders
  const modules = useMemo(() => bitcoinModules, []);

  const handleModuleSelect = (moduleId: string, sectionId: string) => {
    // Track Bitcoin-specific analytics or handle Bitcoin-specific navigation
    console.log('Bitcoin module selected:', moduleId, sectionId);
  };

  return (
    <LearningSidebar 
      modules={modules}
      pathPrefix="bitcoin"
      onModuleSelect={handleModuleSelect}
      showDifficultyFilter={true}
    />
  );
}
