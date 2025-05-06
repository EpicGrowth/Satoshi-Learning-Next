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

  // Determine the path type based on the module ID prefix
  // Handle both prefixed and non-prefixed module IDs
  const pathType: 'bitcoin' | 'lightning' = 
    moduleId.startsWith('lightning-') || (moduleId === 'fundamentals' && sectionId?.includes('lightning'))
      ? 'lightning'
      : 'bitcoin';
  
  // If we're using an old non-prefixed moduleId, construct the new prefixed version
  const normalizedModuleId = moduleId.includes('-') ? moduleId : `${pathType}-${moduleId}`;
  const progress = getSectionProgress(pathType, normalizedModuleId, sectionId);
  
  // Determine theme colors based on path type
  const isLightning = pathType === 'lightning';
  
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
    // Only attempt to mark section complete if progress is 100% AND the section isn't already completed
    if (progress >= 100) {
      // Check if this is the final section of the module
      const moduleProgress = getModuleProgress(pathType, normalizedModuleId);
      const isAlreadyCompleted = moduleProgress?.completedSections?.[sectionId]?.completedAt !== undefined;
      
      // Only mark complete if not already completed
      if (!isAlreadyCompleted) {
        markSectionComplete(pathType, normalizedModuleId, sectionId);
      }
    }
  }, [progress, pathType, moduleId, sectionId, markSectionComplete, getModuleProgress]);

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

      <Card className="relative border-border/50">
        <ScrollArea className="h-[calc(100vh-15rem)] rounded-md border-border/50">
          <div className="p-6">{children}</div>
        </ScrollArea>
      </Card>
    </div>
  );
}
