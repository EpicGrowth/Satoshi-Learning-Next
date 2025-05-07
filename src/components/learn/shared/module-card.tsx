'use client';

import React from 'react';
import { Card } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { LearningModule } from '@/types/learning';
import { useLearningProgress } from '@/contexts/learning-progress-context';
import { Lock } from 'lucide-react';
import { cn } from '@/lib/utils';

interface ModuleCardProps {
  module: LearningModule;
  onClick: (moduleId: string) => void;
  isLocked?: boolean;
}

export const ModuleCard = ({ module, onClick, isLocked: dynamicIsLocked }: ModuleCardProps) => {
  // Get progress state and determine lock status from module prop
  const { progress } = useLearningProgress();
  const isLocked = dynamicIsLocked ?? module.locked;

  // Determine path type (bitcoin or lightning) based on module ID prefix
  const pathType = module.id.startsWith('lightning-') ? 'lightning' : 'bitcoin';
  
  // Calculate progress by checking completed sections in the context state
  const moduleProgressData = progress[pathType]?.[module.id];
  const completedCount = module.sections.reduce((count, section) => {
    if (moduleProgressData?.completedSections[section.id]?.completedAt) {
      return count + 1;
    }
    return count;
  }, 0);
  const totalSections = module.sections.length;
  const progressPercentage = totalSections > 0 ? (completedCount / totalSections) * 100 : 0;

  const Icon = module.icon;

  return (
    <Card
      className={cn(
        'relative p-6 transition-all hover:shadow-lg cursor-pointer',
        isLocked && 'opacity-50 cursor-not-allowed'
      )}
      onClick={() => !isLocked && onClick(module.id)}
    >
      <div className="flex items-start gap-4">
        <div className="rounded-lg bg-primary/10 p-2">
          <Icon className="h-6 w-6 text-primary" />
        </div>
        <div className="flex-1">
          <div className="flex items-center gap-2">
            <h3 className="font-semibold">{module.title}</h3>
            {isLocked && <Lock className="h-4 w-4 text-muted-foreground" />}
          </div>
          <p className="mt-1 text-sm text-muted-foreground">{module.description}</p>
          <p className="mt-1 text-xs text-muted-foreground">{module.sections.length} Sections</p>
          <div className="mt-4">
            <div className="flex justify-between text-sm">
              <span className="text-muted-foreground">Progress</span>
              <span className="font-medium">{Math.round(progressPercentage)}%</span>
            </div>
            <Progress value={progressPercentage} className="mt-2" />
          </div>
        </div>
      </div>
    </Card>
  );
};
