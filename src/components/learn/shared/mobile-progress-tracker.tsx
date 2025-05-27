'use client';

import { useState } from 'react';
import { useLearningProgress } from '@/contexts/learning-progress-context';
import { LearningModule } from '@/types/learning';
import { Progress } from '@/components/ui/progress';
import { cn } from '@/lib/utils';
import { ChevronDown, ChevronUp } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

interface MobileProgressTrackerProps {
  modules: LearningModule[];
  pathPrefix: 'bitcoin' | 'lightning';
}

export function MobileProgressTracker({ modules, pathPrefix }: MobileProgressTrackerProps) {
  const [isExpanded, setIsExpanded] = useState(false);
  const { getModuleProgress } = useLearningProgress();

  // Calculate overall progress across all modules
  const calculateOverallProgress = () => {
    let totalSections = 0;
    let completedSectionPercentage = 0;

    modules.forEach(module => {
      const moduleProgress = getModuleProgress(pathPrefix, module.id);
      
      if (moduleProgress) {
        const sectionCount = module.sections.length;
        totalSections += sectionCount;
        
        Object.values(moduleProgress.completedSections).forEach(section => {
          completedSectionPercentage += (section?.progress || 0) / 100;
        });
      }
    });

    return totalSections > 0 
      ? Math.round((completedSectionPercentage / totalSections) * 100) 
      : 0;
  };

  const overallProgress = calculateOverallProgress();
  
  // Theme colors based on path type
  const primaryColor = pathPrefix === 'bitcoin' 
    ? 'var(--primary-light)' 
    : 'var(--lightning-purple)';
  
  return (
    <div className="lg:hidden sticky top-0 z-30 w-full bg-background/80 backdrop-blur-sm border-b border-border/40">
      <div className="container px-4 py-2">
        <button 
          onClick={() => setIsExpanded(!isExpanded)}
          className="w-full flex items-center justify-between"
          aria-expanded={isExpanded}
          aria-controls="mobile-progress-details"
        >
          <div className="flex items-center gap-3">
            <div className="flex-1 min-w-0">
              <div className="flex items-center justify-between mb-1">
                <span className="text-sm font-medium">
                  {pathPrefix === 'bitcoin' ? 'Bitcoin' : 'Lightning'} Progress
                </span>
                <span className="text-xs text-muted-foreground">
                  {overallProgress}%
                </span>
              </div>
              <Progress 
                value={overallProgress} 
                className="h-1.5 w-36"
                indicatorClassName={`bg-[${primaryColor}]`}
              />
            </div>
          </div>
          
          {isExpanded ? (
            <ChevronUp className="h-4 w-4 text-muted-foreground" />
          ) : (
            <ChevronDown className="h-4 w-4 text-muted-foreground" />
          )}
        </button>
        
        <AnimatePresence>
          {isExpanded && (
            <motion.div
              id="mobile-progress-details"
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="overflow-hidden"
            >
              <div className="pt-3 pb-2 space-y-3">
                {modules.map(module => {
                  const moduleProgress = getModuleProgress(pathPrefix, module.id);
                  
                  // Calculate module progress
                  const progressPercentage = moduleProgress ? 
                    Object.values(moduleProgress.completedSections).reduce((acc, s) => acc + (s?.progress || 0), 0) / 
                    (module.sections.length > 0 ? module.sections.length : 1) : 0;
                  
                  // Format progress for display
                  const formattedProgress = `${Math.round(progressPercentage)}%`;
                  
                  // Badge color based on difficulty
                  const getBadgeColor = (difficulty: string) => {
                    switch (difficulty.toLowerCase()) {
                      case 'beginner':
                        return 'bg-emerald-500/20 text-emerald-500';
                      case 'intermediate':
                        return 'bg-bitcoin-orange/20 text-bitcoin-orange';
                      case 'advanced':
                        return 'bg-red-500/20 text-red-500';
                      default:
                        return 'bg-gray-500/20 text-gray-500';
                    }
                  };
                  
                  return (
                    <div key={module.id} className="flex items-center gap-2">
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-1.5">
                            <span className="text-xs font-medium truncate">{module.title}</span>
                            <span className={cn(
                              "inline-flex items-center rounded-full px-1.5 py-0.5 text-[10px]",
                              getBadgeColor(module.difficulty)
                            )}>
                              {module.difficulty}
                            </span>
                          </div>
                          <span className="text-xs text-muted-foreground">
                            {formattedProgress}
                          </span>
                        </div>
                        <Progress 
                          value={progressPercentage} 
                          className="h-1 mt-1"
                          indicatorClassName={`bg-[${primaryColor}]`}
                        />
                      </div>
                    </div>
                  );
                })}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
