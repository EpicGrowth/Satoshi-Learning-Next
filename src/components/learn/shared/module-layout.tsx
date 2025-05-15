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

  return (
    <div className="container max-w-5xl py-8">
          {/* Content */}
          {children}
          
          {/* Module navigation - moved to bottom */}
          <div className="mt-12 flex items-center justify-between border-t border-border/40 pt-8">
            <Button
              variant="ghost"
              className={cn(
                'flex items-center gap-2',
                !prev && 'invisible'
              )}
              onClick={() => prev && navigate(prev.moduleId, prev.sectionId)}
              disabled={!prev}
            >
              <ArrowLeft className="h-4 w-4" />
              Previous
            </Button>

            <div className="text-center">
              <h4 className="font-medium">{currentModule?.title}</h4>
              <Progress 
                value={currentSection ? getSectionProgress(pathType, moduleId, sectionId) : 0} 
                className="mt-2 w-32"
              />
            </div>

            <Button
              variant="ghost"
              className={cn(
                'flex items-center gap-2',
                !next && 'invisible'
              )}
              onClick={() => next && navigate(next.moduleId, next.sectionId)}
              disabled={!next}
            >
              Next
              <ArrowRight className="h-4 w-4" />
            </Button>
          </div>
    </div>
  );
}
