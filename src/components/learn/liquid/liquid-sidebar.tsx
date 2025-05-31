'use client';

import { LearningSidebar } from '../shared/learning-sidebar';
import { liquidModules } from '@/config/learning-modules';
import { useLearningProgress } from '@/contexts/learning-progress-context';

export function LiquidSidebar() {
  const { progress } = useLearningProgress();

  const handleModuleSelect = (moduleId: string, sectionId: string) => {
    // Track Liquid-specific analytics or handle Liquid-specific navigation
    console.log('Liquid module selected:', moduleId, sectionId);
  };

  // Always show difficulty filter for Liquid path
  const showDifficultyFilter = true;

  return (
    <LearningSidebar 
      modules={liquidModules} 
      pathPrefix="liquid"
      onModuleSelect={handleModuleSelect}
      showDifficultyFilter={showDifficultyFilter}
      accentColor="text-cyan-500"
      hoverColor="hover:bg-cyan-100 dark:hover:bg-cyan-900/20"
    />
  );
}