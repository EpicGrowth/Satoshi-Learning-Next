'use client';

import { LearningSidebar } from '../shared/learning-sidebar';
import { lightningModules } from '@/config/learning-modules';
import { useLearningProgress } from '@/contexts/learning-progress-context';

export function LightningSidebar() {
  const { progress } = useLearningProgress();

  const handleModuleSelect = (moduleId: string, sectionId: string) => {
    // Track Lightning-specific analytics or handle Lightning-specific navigation
    console.log('Lightning module selected:', moduleId, sectionId);
  };

  // Always show difficulty filter for Lightning path
  const showDifficultyFilter = true;

  return (
    <LearningSidebar 
      modules={lightningModules} 
      pathPrefix="lightning"
      onModuleSelect={handleModuleSelect}
      showDifficultyFilter={showDifficultyFilter}
    />
  );
}
