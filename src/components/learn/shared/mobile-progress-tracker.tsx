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
  const [expandedModule, setExpandedModule] = useState<string | null>(null);
  const { getModuleProgress, getSectionProgress, isSectionLocked } = useLearningProgress();

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
  
  // Find the next section to complete
  const findNextIncompleteSection = () => {
    for (const module of modules) {
      for (const section of module.sections) {
        const progress = getSectionProgress(pathPrefix, module.id, section.id);
        const isLocked = isSectionLocked(pathPrefix, module.id, section.id);
        if (!isLocked && progress < 100) {
          return { moduleId: module.id, sectionId: section.id };
        }
      }
    }
    return null;
  };

  const nextIncomplete = findNextIncompleteSection();

  // Toggle expanded module
  const toggleModule = (moduleId: string) => {
    setExpandedModule(expandedModule === moduleId ? null : moduleId);
  };
  
  return (
    <div className="lg:hidden sticky top-0 z-30 w-full bg-background/80 backdrop-blur-sm border-b border-border/40">
      <div className="px-3 py-2">
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
                  const isModuleExpanded = expandedModule === module.id;
                  
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

                  // Check if this module is next to be completed
                  const isNextModule = nextIncomplete?.moduleId === module.id;
                  
                  return (
                    <div key={module.id} className="rounded-md overflow-hidden bg-muted/10">
                      <button 
                        onClick={() => toggleModule(module.id)}
                        className="w-full flex items-center justify-between p-2"
                      >
                        <div className="flex items-center gap-1.5">
                          {pathPrefix === 'bitcoin' ? (
                            <span className="text-[var(--primary-light)] mr-1">₿</span>
                          ) : (
                            <span className="text-lightning-purple mr-1">⚡</span>
                          )}
                          <span className="text-xs font-medium truncate">{module.title}</span>
                          <span className={cn(
                            "inline-flex items-center rounded-full px-1.5 py-0.5 text-[10px]",
                            getBadgeColor(module.difficulty)
                          )}>
                            {module.difficulty}
                          </span>
                          {isNextModule && (
                            <span className="ml-1 text-[10px] text-emerald-500 font-medium">NEXT</span>
                          )}
                        </div>
                        <div className="flex items-center gap-2">
                          <span className="text-xs text-muted-foreground">
                            {formattedProgress}
                          </span>
                          {isModuleExpanded ? (
                            <ChevronUp className="h-3 w-3 text-muted-foreground" />
                          ) : (
                            <ChevronDown className="h-3 w-3 text-muted-foreground" />
                          )}
                        </div>
                      </button>
                      
                      <Progress 
                        value={progressPercentage} 
                        className="h-1 mx-2"
                        indicatorClassName={`bg-[${primaryColor}]`}
                      />
                      
                      <AnimatePresence>
                        {isModuleExpanded && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: 'auto', opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.2 }}
                            className="overflow-hidden"
                          >
                            <div className="px-2 py-2 space-y-1.5">
                              {module.sections.map(section => {
                                const sectionProgress = getSectionProgress(pathPrefix, module.id, section.id);
                                const isLocked = isSectionLocked(pathPrefix, module.id, section.id);
                                const isNextSection = nextIncomplete?.moduleId === module.id && nextIncomplete?.sectionId === section.id;
                                
                                return (
                                  <div key={section.id} className="flex items-center justify-between py-1 px-2 rounded-sm bg-muted/20">
                                    <div className="flex items-center">
                                      {sectionProgress === 100 ? (
                                        <Check className={`h-3 w-3 mr-1.5 ${pathPrefix === 'bitcoin' ? 'text-[var(--primary-light)]' : 'text-lightning-purple'}`} />
                                      ) : isLocked ? (
                                        <Lock className="h-3 w-3 mr-1.5 text-muted-foreground" />
                                      ) : isNextSection ? (
                                        <ArrowRight className="h-3 w-3 mr-1.5 text-emerald-500" />
                                      ) : (
                                        <div className="w-3 h-3 mr-1.5" />
                                      )}
                                      <span className={cn(
                                        "text-xs",
                                        isLocked && "text-muted-foreground",
                                        isNextSection && "text-emerald-500 font-medium"
                                      )}>
                                        {section.title}
                                      </span>
                                    </div>
                                    {!isLocked && (
                                      <span className="text-[10px] text-muted-foreground">{sectionProgress}%</span>
                                    )}
                                  </div>
                                );
                              })}
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
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
