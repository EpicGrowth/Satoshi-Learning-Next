'use client';

import { ReactNode, useCallback } from 'react';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { ArrowLeft, ArrowRight, ArrowUp, Check } from 'lucide-react';
import { usePathname, useRouter } from 'next/navigation';
import { bitcoinModules, lightningModules } from '@/config/learning-modules';
import { useLearningProgress } from '@/contexts/learning-progress-context';
import { Progress } from '@/components/ui/progress';

interface ModuleLayoutProps {
  children: ReactNode;
}

export function ModuleLayout({ children }: ModuleLayoutProps) {
  const router = useRouter();
  const pathname = usePathname();
  const { updateSectionProgress, getSectionProgress, markSectionComplete, getModuleProgress } = useLearningProgress();

  // Parse the current path to get module and section info
  const pathParts = pathname.split('/').filter(Boolean);
  const pathType = pathParts[1] as 'bitcoin' | 'lightning';
  const moduleId = pathParts[2];
  const sectionId = pathParts[3];
  
  // Check if the current section is completed
  const sectionProgress = getSectionProgress(pathType, moduleId, sectionId);
  const isSectionCompleted = sectionProgress >= 100;

  // Get the current module and section
  const modules = pathType === 'bitcoin' ? bitcoinModules : lightningModules;
  const currentModule = modules.find(m => m.id === moduleId);
  const currentSection = currentModule?.sections.find(s => s.id === sectionId);

  // Get badge color based on difficulty
  const getDifficultyBadgeColor = (difficulty: string) => {
    switch (difficulty?.toLowerCase()) {
      case 'beginner':
        return 'bg-emerald-500/20 text-emerald-500 border-emerald-500/30';
      case 'intermediate':
        return 'bg-blue-500/20 text-blue-500 border-blue-500/30';
      case 'advanced':
        return 'bg-purple-500/20 text-purple-500 border-purple-500/30';
      default:
        return 'bg-muted text-muted-foreground border-muted';
    }
  };

  // Get the next and previous sections
  const getAdjacentSections = () => {
    if (!currentModule || !currentSection) return { prev: null, next: null };

    const currentSectionIndex = currentModule.sections.findIndex(s => s.id === sectionId);
    const currentModuleIndex = modules.findIndex(m => m.id === moduleId);

    let prev = null;
    let next = null;

    // Previous section
    if (currentSectionIndex > 0) {
      // Previous section in the same module
      prev = {
        moduleId,
        sectionId: currentModule.sections[currentSectionIndex - 1].id
      };
    } else if (currentModuleIndex > 0) {
      // Last section of the previous module
      const prevModule = modules[currentModuleIndex - 1];
      prev = {
        moduleId: prevModule.id,
        sectionId: prevModule.sections[prevModule.sections.length - 1].id
      };
    }

    // Next section
    if (currentSectionIndex < currentModule.sections.length - 1) {
      // Next section in the same module
      next = {
        moduleId,
        sectionId: currentModule.sections[currentSectionIndex + 1].id
      };
    } else if (currentModuleIndex < modules.length - 1) {
      // First section of the next module
      const nextModule = modules[currentModuleIndex + 1];
      next = {
        moduleId: nextModule.id,
        sectionId: nextModule.sections[0].id
      };
    }

    return { prev, next };
  };

  const { prev, next } = getAdjacentSections();

  // Check if all modules in the current learning path are completed
  const checkPathCompletion = useCallback(() => {
    const allModules = pathType === 'bitcoin' ? bitcoinModules : lightningModules;
    const allModulesCompleted = allModules.every(module => {
      const moduleProgress = getModuleProgress(pathType, module.id);
      return moduleProgress?.completedAt !== undefined;
    });
    
    if (allModulesCompleted) {
      // Redirect to the main learning path page where the certificate is displayed
      router.push(`/learn/${pathType}`);
    }
  }, [pathType, getModuleProgress, router]);

  // Function to navigate to another section
  const navigate = (moduleId: string, sectionId: string) => {
    // First check if this was the last section in the last module
    const currentModuleIndex = modules.findIndex(m => m.id === moduleId);
    const currentModule = modules[currentModuleIndex];
    const currentSectionIndex = currentModule?.sections.findIndex(s => s.id === sectionId) || -1;
    
    // If this is the last section of the last module, check if all modules are completed
    if (currentModuleIndex === modules.length - 1 && 
        currentSectionIndex === currentModule.sections.length - 1) {
      checkPathCompletion();
    } else {
      // Otherwise, navigate to the next section
      router.push(`/learn/${pathType}/${moduleId}/${sectionId}`);
    }
  };

  // Determine theme colors based on path type
  const primaryColor = pathType === 'bitcoin' ? 'var(--primary-light)' : 'var(--lightning-purple)';
  
  return (
    <div className="w-full max-w-6xl pt-0 pb-4 sm:pb-6 md:pb-8 px-0 sm:px-4 md:px-6 mx-auto overflow-hidden">
          {/* Content */}
          <div className="w-full max-w-full mobile-optimized-content mobile-text-container">
            {children}
          </div>
          
          {/* Module navigation - mobile friendly version */}
          <div className="mt-8 sm:mt-10 md:mt-12 border-t border-border/40 pt-6 sm:pt-8">
            {/* Module title */}
            <div className="mb-4 text-center">
              <h4 className="font-medium text-sm sm:text-base">{currentModule?.title}</h4>
            </div>
            
            {/* Navigation buttons */}
            <div className="w-full px-2 sm:px-0">
              {/* Navigation section */}
              
              {/* Elegant navigation header with section info and status */}
              <div className="mb-4 flex flex-col">
                {/* Module path indicator */}
                <div className="text-xs text-muted-foreground mb-1 flex items-center justify-center">
                  <span>{currentModule?.title || ''}</span>
                  {currentSection && (
                    <>
                      <span className="mx-1.5">→</span>
                      <span>{currentSection.title}</span>
                    </>
                  )}
                </div>
                
                {/* Status card with verification and difficulty */}
                <div className="flex items-center justify-between p-3 bg-card border border-border rounded-md">
                  {/* Difficulty badge */}
                  {currentModule && (
                    <div className="flex items-center">
                      <span className={`text-xs px-2 py-0.5 rounded-full border ${getDifficultyBadgeColor(currentModule.difficulty)}`}>
                        {currentModule.difficulty}
                      </span>
                    </div>
                  )}
                  
                  {/* Verification status */}
                  {next && (
                    <div className="text-xs">
                      {isSectionCompleted ? (
                        <span className="text-emerald-500 flex items-center">
                          <Check className="h-3 w-3 mr-1" />
                          Verification complete
                        </span>
                      ) : (
                        <span className="flex items-center">
                          <ArrowUp className="h-3 w-3 mr-1" />
                          Complete verification first
                        </span>
                      )}
                    </div>
                  )}
                </div>
              </div>
              
              {/* Button container - full width on mobile */}
              <div className="flex items-center justify-between gap-2 sm:gap-4 w-full max-w-full overflow-hidden">
                <Button
                  variant="ghost"
                  size="sm"
                  className={cn(
                    'flex items-center gap-1 sm:gap-2 px-1 sm:px-4 py-1 sm:py-2 sm:min-w-[120px] max-w-[45%] justify-center border border-border rounded-md',
                    !prev && 'invisible'
                  )}
                  onClick={() => prev && navigate(prev.moduleId, prev.sectionId)}
                  disabled={!prev}
                >
                  <ArrowLeft className="h-4 w-4 flex-shrink-0" />
                  <span className="text-xs sm:text-sm truncate">Prev</span>
                </Button>
                
                <Button
                  variant="ghost"
                  size="sm"
                  className={cn(
                    'flex items-center gap-1 sm:gap-2 px-1 sm:px-4 py-1 sm:py-2 sm:min-w-[120px] max-w-[45%] justify-center border border-border rounded-md',
                    !next && 'invisible'
                  )}
                  onClick={() => {
                    if (next && isSectionCompleted) {
                      // Only navigate if the section is completed
                      navigate(next.moduleId, next.sectionId);
                    }
                  }}
                  disabled={!next || !isSectionCompleted}
                  title={!isSectionCompleted ? 'Complete the verification checkbox first' : 'Continue to next section'}
                >
                  <span className="text-xs sm:text-sm truncate">Next</span>
                  <ArrowRight className="h-4 w-4 flex-shrink-0" />
                </Button>
              </div>
            </div>
          </div>
    </div>
  );
}
