'use client';

import { useState } from 'react';
import { useLearningProgress } from '@/contexts/learning-progress-context';
import { LearningModule } from '@/types/learning';
import { Progress } from '@/components/ui/progress';
import { cn } from '@/lib/utils';
import { 
  ArrowRight, 
  Check, 
  ChevronDown, 
  ChevronUp, 
  Lock, 
  CircleDashed, 
  CircleCheck, 
  RefreshCw, 
  Bitcoin, 
  Zap 
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useRouter } from 'next/navigation';
import { Button } from '@/components/ui/button';

interface MobileProgressTrackerProps {
  modules: LearningModule[];
  pathPrefix: 'bitcoin' | 'lightning';
}

export function MobileProgressTracker({ modules, pathPrefix }: MobileProgressTrackerProps) {
  const router = useRouter();
  const [isExpanded, setIsExpanded] = useState(false);
  const [expandedModule, setExpandedModule] = useState<string | null>(null);
  const [showResetConfirm, setShowResetConfirm] = useState(false);
  const { getModuleProgress, getSectionProgress, isSectionLocked, resetProgress } = useLearningProgress();

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
    ? 'var(--bitcoin-orange)' 
    : 'var(--lightning-purple)';

  // Handle reset confirmation
  const handleReset = () => {
    resetProgress(pathPrefix);
    setShowResetConfirm(false);
    setIsExpanded(false);
  };

  // Toggle module expansion
  const toggleModule = (moduleId: string) => {
    setExpandedModule(expandedModule === moduleId ? null : moduleId);
  };

  // Navigate to a specific section
  const navigateToSection = (moduleId: string, sectionId: string) => {
    // Close the expanded navigation when navigating to a section
    setIsExpanded(false);
    setExpandedModule(null);
    router.push(`/learn/${pathPrefix}/${moduleId}/${sectionId}`);
  };

  // Handle reset button click
  const handleResetClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    setShowResetConfirm(true);
  };

  // Handle path title click
  const handlePathTitleClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    router.push(`/learn/${pathPrefix}`);
  };

  return (
    <div className="fixed top-14 left-0 right-0 z-30 bg-background border-b border-border/50 shadow-sm lg:hidden overflow-visible w-full max-w-[100vw]">
      {/* Reset confirmation dialog */}
      {showResetConfirm && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
          <div className="bg-card border border-border rounded-lg p-4 m-4 max-w-xs w-full">
            <h3 className="font-semibold mb-2">Reset Progress</h3>
            <p className="text-sm text-muted-foreground mb-4">
              Are you sure you want to reset your {pathPrefix === 'bitcoin' ? 'Bitcoin' : 'Lightning'} learning progress? 
              This action cannot be undone.
            </p>
            <div className="flex justify-end gap-2">
              <Button 
                variant="outline" 
                size="sm" 
                onClick={() => setShowResetConfirm(false)}
              >
                Cancel
              </Button>
              <Button 
                variant="destructive" 
                size="sm" 
                onClick={handleReset}
              >
                Reset
              </Button>
            </div>
          </div>
        </div>
      )}

      {/* Header with path info and toggle */}
      <div className="px-3 py-2">
        <div className="w-full flex items-center justify-between p-2 rounded-md relative">
          {/* Left side - Path info */}
          <div className="flex items-center gap-2">
            <div className="relative h-8 w-8 rounded-full overflow-hidden border border-border/50 flex items-center justify-center bg-muted/20">
              {pathPrefix === 'bitcoin' ? (
                <Bitcoin className="h-4 w-4 text-bitcoin-orange" />
              ) : (
                <Zap className="h-4 w-4 text-lightning-purple" />
              )}
            </div>
            
            <div className="flex flex-col">
              <div className="flex items-center">
                {/* Path title - clickable */}
                <a
                  href={`/learn/${pathPrefix}`}
                  className="text-sm font-medium hover:underline flex items-center gap-1"
                  onClick={handlePathTitleClick}
                >
                  {pathPrefix === 'bitcoin' ? 'Bitcoin Learning Path' : 'Lightning Learning Path'}
                </a>
                
                {/* Reset button - separate from the toggle */}
                <div className="ml-1">
                  <Button
                    variant="ghost"
                    size="icon"
                    className="h-6 w-6 rounded-full p-0 bg-muted/30 hover:bg-muted/50"
                    onClick={handleResetClick}
                    title="Reset progress"
                  >
                    <RefreshCw className="h-3.5 w-3.5 text-foreground" />
                  </Button>
                </div>
              </div>
            </div>
          </div>
          
          {/* Right side - Toggle button */}
          <Button
            variant="ghost"
            size="sm"
            className="p-0 relative z-10"
            onClick={() => setIsExpanded(!isExpanded)}
            aria-expanded={isExpanded}
            aria-controls="mobile-progress-details"
          >
            <div className={cn(
              "flex items-center justify-center h-6 w-6 rounded-full transition-colors",
              "border border-border/50",
              isExpanded ? "bg-muted/50" : "bg-muted/30 hover:bg-muted/50"
            )}>
              {isExpanded ? (
                <ChevronUp className="h-3.5 w-3.5 text-foreground" />
              ) : (
                <ChevronDown className="h-3.5 w-3.5 text-foreground" />
              )}
            </div>
          </Button>
        </div>
        
        {/* Expandable content */}
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
                  
                  // Calculate module progress - properly capped at 100%
                  let progressPercentage = 0;
                  
                  if (moduleProgress && module.sections.length > 0) {
                    // Count completed sections (those with 100% progress)
                    const completedSections = Object.values(moduleProgress.completedSections || {}).filter(s => s?.progress === 100).length;
                    progressPercentage = (completedSections / module.sections.length);
                  }
                  
                  // Ensure progress is between 0-100%
                  progressPercentage = Math.min(Math.max(progressPercentage, 0), 1);
                  
                  // Format progress for display
                  const formattedProgress = `${Math.round(progressPercentage * 100)}%`;
                  
                  // Badge color based on difficulty
                  const getBadgeColor = (difficulty: string) => {
                    switch (difficulty.toLowerCase()) {
                      case 'beginner':
                        return 'bg-emerald-500/20 text-emerald-500 border border-emerald-500/30';
                      case 'intermediate':
                        return 'bg-blue-500/20 text-blue-500 border border-blue-500/30';
                      case 'advanced':
                        return 'bg-purple-500/20 text-purple-500 border border-purple-500/30';
                      default:
                        return 'bg-muted text-muted-foreground border border-border/50';
                    }
                  };

                  return (
                    <div key={module.id} className="px-1">
                      {/* Module header - clickable to expand */}
                      <div 
                        className="flex items-center justify-between cursor-pointer p-2 rounded-md hover:bg-muted/30 transition-colors"
                        onClick={() => toggleModule(module.id)}
                      >
                        <div className="flex items-center gap-2">
                          <div className={cn(
                            "flex items-center justify-center h-6 w-6 rounded-full",
                            progressPercentage >= 1 
                              ? "bg-green-500/20 text-green-500" 
                              : progressPercentage > 0 
                                ? "bg-amber-500/20 text-amber-500" 
                                : "bg-muted/30 text-muted-foreground"
                          )}>
                            {progressPercentage >= 1 ? (
                              <Check className="h-3.5 w-3.5" />
                            ) : (
                              <div className="h-1.5 w-1.5 rounded-full bg-current" />
                            )}
                          </div>
                          
                          <div className="flex-1 min-w-0">
                            <div className="flex items-center gap-1.5">
                              <span className="text-sm font-medium truncate">{module.title}</span>
                              <span className={cn(
                                "text-xs px-1.5 py-0.5 rounded-full",
                                getBadgeColor(module.difficulty || 'intermediate')
                              )}>
                                {module.difficulty || 'Intermediate'}
                              </span>
                            </div>
                          </div>
                        </div>
                        
                        <div className="flex items-center gap-2">
                          <span className="text-xs text-muted-foreground">{formattedProgress}</span>
                          <div className={cn(
                            "flex items-center justify-center h-5 w-5 rounded-full transition-colors",
                            isModuleExpanded ? "bg-muted/50" : "bg-transparent"
                          )}>
                            {isModuleExpanded ? (
                              <ChevronUp className="h-3 w-3 text-muted-foreground" />
                            ) : (
                              <ChevronDown className="h-3 w-3 text-muted-foreground" />
                            )}
                          </div>
                        </div>
                      </div>
                      
                      {/* Module sections - expandable */}
                      <AnimatePresence>
                        {isModuleExpanded && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: 'auto', opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.2 }}
                            className="overflow-hidden"
                          >
                            <div className="pl-8 py-2 space-y-2">
                              {module.sections.map(section => {
                                const sectionProgress = getSectionProgress(pathPrefix, module.id, section.id);
                                const isComplete = sectionProgress === 100;
                                const isLocked = isSectionLocked(pathPrefix, module.id, section.id);
                                
                                return (
                                  <div 
                                    key={section.id}
                                    className={cn(
                                      "flex items-center gap-2 p-1.5 rounded-md transition-colors",
                                      isLocked 
                                        ? "opacity-60 cursor-not-allowed" 
                                        : "cursor-pointer hover:bg-muted/30"
                                    )}
                                    onClick={() => !isLocked && navigateToSection(module.id, section.id)}
                                  >
                                    <div className={cn(
                                      "flex items-center justify-center h-5 w-5 rounded-full",
                                      isComplete 
                                        ? "bg-green-500/20 text-green-500" 
                                        : isLocked 
                                          ? "bg-muted/20 text-muted-foreground" 
                                          : "bg-muted/30 text-muted-foreground"
                                    )}>
                                      {isComplete ? (
                                        <CircleCheck className="h-3.5 w-3.5" />
                                      ) : isLocked ? (
                                        <Lock className="h-3 w-3" />
                                      ) : (
                                        <CircleDashed className="h-3.5 w-3.5" />
                                      )}
                                    </div>
                                    
                                    <span className={cn(
                                      "text-sm",
                                      isComplete 
                                        ? "text-foreground" 
                                        : "text-muted-foreground"
                                    )}>
                                      {section.title}
                                    </span>
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
