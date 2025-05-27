'use client';

import { ReactNode } from 'react';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { ArrowLeft, ArrowRight } from 'lucide-react';
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
  const { updateSectionProgress, getSectionProgress } = useLearningProgress();

  // Parse the current path to get module and section info
  const pathParts = pathname.split('/').filter(Boolean);
  const pathType = pathParts[1] as 'bitcoin' | 'lightning';
  const moduleId = pathParts[2];
  const sectionId = pathParts[3];

  // Get the current module and section
  const modules = pathType === 'bitcoin' ? bitcoinModules : lightningModules;
  const currentModule = modules.find(m => m.id === moduleId);
  const currentSection = currentModule?.sections.find(s => s.id === sectionId);

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

  const navigate = (moduleId: string, sectionId: string) => {
    router.push(`/learn/${pathType}/${moduleId}/${sectionId}`);
  };

  // Determine theme colors based on path type
  const primaryColor = pathType === 'bitcoin' ? 'var(--primary-light)' : 'var(--lightning-purple)';
  
  return (
    <div className="container max-w-5xl py-4 sm:py-6 md:py-8 px-3 sm:px-4 md:px-6">
          {/* Content */}
          <div className="prose dark:prose-invert prose-sm sm:prose-base md:prose-lg max-w-none overflow-x-hidden">
            {children}
          </div>
          
          {/* Module navigation - mobile friendly version */}
          <div className="mt-8 sm:mt-10 md:mt-12 border-t border-border/40 pt-6 sm:pt-8">
            {/* Progress indicator - more visible on mobile */}
            <div className="mb-4 text-center">
              <h4 className="font-medium text-sm sm:text-base">{currentModule?.title}</h4>
              <div className="flex items-center justify-center gap-2 mt-1">
                <Progress 
                  value={currentSection ? getSectionProgress(pathType, moduleId, sectionId) : 0} 
                  className="h-2 w-32 sm:w-40"
                  indicatorClassName={`bg-[${primaryColor}]`}
                />
                <span className="text-xs text-muted-foreground">
                  {Math.round(currentSection ? getSectionProgress(pathType, moduleId, sectionId) : 0)}%
                </span>
              </div>
            </div>
            
            {/* Navigation buttons */}
            <div className="flex items-center justify-between">
              <Button
                variant="ghost"
                size="sm"
                className={cn(
                  'flex items-center gap-1 sm:gap-2 px-2 sm:px-3',
                  !prev && 'invisible'
                )}
                onClick={() => prev && navigate(prev.moduleId, prev.sectionId)}
                disabled={!prev}
              >
                <ArrowLeft className="h-3 w-3 sm:h-4 sm:w-4" />
                <span className="hidden xs:inline">Previous</span>
              </Button>

              <Button
                variant="ghost"
                size="sm"
                className={cn(
                  'flex items-center gap-1 sm:gap-2 px-2 sm:px-3',
                  !next && 'invisible'
                )}
                onClick={() => next && navigate(next.moduleId, next.sectionId)}
                disabled={!next}
              >
                <span className="hidden xs:inline">Next</span>
                <ArrowRight className="h-3 w-3 sm:h-4 sm:w-4" />
              </Button>
            </div>
          </div>
    </div>
  );
}
