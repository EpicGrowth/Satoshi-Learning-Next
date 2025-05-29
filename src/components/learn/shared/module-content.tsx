'use client';

import React, { useEffect } from 'react';
import { Card } from '@/components/ui/card';
import { Bitcoin, Zap, CheckCircle2 } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Progress } from '@/components/ui/progress';
import { useLearningProgress } from '@/contexts/learning-progress-context';

type Difficulty = 'Beginner' | 'Intermediate' | 'Advanced';

interface ModuleContentProps {
  moduleId: string;
  sectionId: string;
  checkpoints?: number;
  children: React.ReactNode;
  moduleTitle?: string;
  moduleDescription?: string;
  difficulty?: Difficulty;
  icon?: React.ElementType;
}

export function ModuleContent({
  moduleTitle,
  moduleId,
  sectionId,
  moduleDescription,
  difficulty = 'Intermediate',
  icon: Icon = Bitcoin,
  checkpoints = 1,
  children,
}: ModuleContentProps) {
  const { updateSectionProgress, getSectionProgress, markSectionComplete, getModuleProgress } = useLearningProgress();

  // Determine if we're using prefixed or unprefixed module IDs
  const pathType: 'bitcoin' | 'lightning' = moduleId.includes('lightning') ? 'lightning' : 'bitcoin';
  const isLightning = pathType === 'lightning';
  
  // Normalize the module ID by ensuring it has the correct prefix
  const normalizedModuleId = moduleId.includes('-') ? 
    moduleId : 
    `${pathType}-${moduleId}`;

  const progress = getSectionProgress(pathType, normalizedModuleId, sectionId);

  // Theme colors based on path type
  const themeColor = isLightning ? 
    'bg-lightning text-lightning-foreground' : 
    'bg-bitcoin text-bitcoin-foreground';

  const getDifficultyColor = (diff: Difficulty) => {
    switch (diff.toLowerCase()) {
      case 'beginner':
        return 'bg-emerald-500/20 text-emerald-500';
      case 'intermediate':
        return 'bg-amber-500/20 text-amber-500';
      case 'advanced':
        return 'bg-red-500/20 text-red-500';
      default:
        return 'bg-amber-500/20 text-amber-500';
    }
  };

  // Auto-complete section when all checkpoints are verified
  // Added safeguard against infinite loops by checking if the section is already completed
  useEffect(() => {
    // Create a flag to track if the component is mounted
    let isMounted = true;
    
    // Only attempt to mark section complete if progress is 100% AND the section isn't already completed
    if (progress >= 100) {
      try {
        // Check if this is the final section of the module
        const moduleProgress = getModuleProgress(pathType, normalizedModuleId);
        const isAlreadyCompleted = moduleProgress?.completedSections?.[sectionId]?.completedAt !== undefined;
        
        // Only mark complete if not already completed and component is still mounted
        if (!isAlreadyCompleted && isMounted) {
          markSectionComplete(pathType, normalizedModuleId, sectionId);
        }
      } catch (error) {
        console.error('Error in module content effect:', error);
      }
    }
    
    // Cleanup function to prevent state updates after unmount
    return () => {
      isMounted = false;
    };
  }, [progress, pathType, normalizedModuleId, sectionId, markSectionComplete, getModuleProgress]);

  return (
    <div className="space-y-6">
      {moduleTitle && (
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <div className="space-y-1">
            <h2 className="text-2xl font-semibold tracking-tight">{moduleTitle}</h2>
            {moduleDescription && (
              <p className="text-sm text-muted-foreground">{moduleDescription}</p>
            )}
          </div>
          
          <div className="flex items-center gap-4">
            {progress > 0 && (
              <div className="flex flex-col items-end gap-1">
                <div className="flex items-center gap-2">
                  <span className="text-xs text-muted-foreground">{Math.round(progress)}% complete</span>
                  {progress >= 100 && (
                    <CheckCircle2 className={`h-4 w-4 ${isLightning ? 'text-lightning-purple' : 'text-bitcoin-orange'}`} />
                  )}
                </div>
                <Progress 
                  value={progress} 
                  className={`h-1.5 w-24 ${
                    progress >= 100 
                      ? isLightning ? 'bg-lightning-purple/20' : 'bg-bitcoin-orange/20' 
                      : 'bg-muted'
                  }`} 
                />
              </div>
            )}
            
            <div className="flex items-center gap-2">
              <Badge variant="outline" className={getDifficultyColor(difficulty)}>
                {difficulty}
              </Badge>
              {Icon && (
                <div className={`h-8 w-8 rounded-full ${
                  isLightning ? 'bg-lightning-purple/10' : 'bg-bitcoin-orange/10'
                } flex items-center justify-center`}>
                  <Icon className={`h-4 w-4 ${
                    isLightning ? 'text-lightning-purple' : 'text-bitcoin-orange'
                  }`} />
                </div>
              )}
            </div>
          </div>
        </div>
      )}

      <Card className="relative border-border/50 overflow-hidden">
        <div className="p-3 sm:p-6 md:p-8 space-y-6 mobile-text-container">
          {children}
        </div>
      </Card>
    </div>
  );
}
