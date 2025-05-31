'use client';

import { useState, useMemo, useCallback } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { cn } from '@/lib/utils';
import { Progress } from '@/components/ui/progress';
import { Badge } from '@/components/ui/badge';
// Remove ScrollArea import as it's causing update loops
import { ArrowRight, Check, ChevronDown, ChevronRight, Lock } from 'lucide-react';
import { useRouter } from 'next/navigation';
import { useLearningProgress } from '@/contexts/learning-progress-context';
import { LearningModule, Section } from '@/types/learning';

interface LearningSidebarProps {
  modules: LearningModule[];
  pathPrefix: 'bitcoin' | 'lightning';
  onModuleSelect?: (moduleId: string, sectionId: string) => void;
  showDifficultyFilter?: boolean;
}

export function LearningSidebar({ 
  modules, 
  pathPrefix,
  onModuleSelect,
  showDifficultyFilter = true 
}: LearningSidebarProps) {
  const router = useRouter();
  const pathname = usePathname();
  const pathSegments = pathname.split('/').filter(Boolean);
  const currentModule = pathSegments[pathSegments.indexOf(pathPrefix) + 1] || '';
  const currentSection = pathSegments[pathSegments.indexOf(pathPrefix) + 2] || '';

  // Track expanded sections
  const [expandedSections, setExpandedSections] = useState<string[]>([currentModule]);

  const { 
    getSectionProgress, 
    isSectionLocked, 
    resetProgress,
    updateSkillLevel,
    getModuleProgress 
  } = useLearningProgress();
  
  const [difficultyFilter, setDifficultyFilter] = useState<'all' | 'beginner' | 'intermediate' | 'advanced'>('all');

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty.toLowerCase()) {
      case 'beginner':
        return 'bg-emerald-500/20 text-emerald-500 border-emerald-500/30';
      case 'intermediate':
        return 'bg-bitcoin-orange/20 text-bitcoin-orange border-bitcoin-orange/30';
      case 'advanced':
        return 'bg-red-500/20 text-red-500 border-red-500/30';
      default:
        return '';
    }
  };

  const handleResetProgress = () => {
    if (window.confirm('Are you sure you want to reset all progress? This cannot be undone.')) {
      resetProgress(pathPrefix);
    }
  };

  const toggleSection = (moduleId: string) => {
    setExpandedSections((prev) =>
      prev.includes(moduleId)
        ? prev.filter((id) => id !== moduleId)
        : [...prev, moduleId]
    );
  };

  const handleModuleClick = useCallback((moduleId: string, sectionId: string) => {
    if (onModuleSelect) { // 'onModuleSelect' is a prop
      onModuleSelect(moduleId, sectionId);
    }
  }, [onModuleSelect]);

  const calculateSectionInfo = useCallback((moduleId: string, sectionId: string) => {
    const progress = getSectionProgress(pathPrefix, moduleId, sectionId);
    const isLocked = isSectionLocked(pathPrefix, moduleId, sectionId);
    return {
      progress,
      isComplete: progress === 100,
      locked: isLocked
    };
  }, [getSectionProgress, isSectionLocked, pathPrefix]);

  const findNextIncompleteSection = useCallback(() => {
    for (const module of modules) { // 'modules' is a prop
      for (const section of module.sections) {
        const { progress, locked } = calculateSectionInfo(module.id, section.id);
        if (!locked && progress < 100) {
          return { moduleId: module.id, sectionId: section.id };
        }
      }
    }
    return null;
  }, [modules, calculateSectionInfo]); // Depends on modules prop and memoized calculateSectionInfo
  
  // We no longer redirect completed sections to the main learning path
  // This allows users to revisit completed sections

  const renderSection = useCallback((module: LearningModule, section: Section) => {
    const isActive = currentModule === module.id && currentSection === section.id;
    const { isComplete, locked, progress } = calculateSectionInfo(module.id, section.id);
    const nextIncomplete = findNextIncompleteSection();
    const isNextSection = nextIncomplete?.moduleId === module.id && nextIncomplete?.sectionId === section.id;
    
    // Determine theme colors using our standardized CSS variables
    const activeColor = pathPrefix === 'bitcoin' 
      ? 'text-[var(--primary-light)] bg-[var(--primary-light)]/5' 
      : 'text-lightning-purple bg-lightning-purple/5';
    const completedColor = pathPrefix === 'bitcoin' 
      ? 'text-[var(--primary-light)]' 
      : 'text-lightning-purple';

    return (
      <Link
        key={`${module.id}-${section.id}`}
        href={`/learn/${pathPrefix}/${module.id}/${section.id}`}
        className={cn(
          'group flex items-center gap-1 sm:gap-2 py-2 px-3 rounded transition-colors',
          isActive ? activeColor : 'hover:bg-muted/50'
        )}
        onClick={(e) => {
          // Allow navigation to all sections
          handleModuleClick(module.id, section.id);
        }}
      >
        {isComplete ? (
          <Check className={`h-3.5 w-3.5 mr-2 ${completedColor}`} />
        ) : isNextSection ? (
          <ArrowRight className="h-3.5 w-3.5 mr-2 text-emerald-500" />
        ) : (
          <div className="w-3.5 h-3.5 mr-2" />
        )}
        <span className={cn(
          'text-sm',
          isActive && 'font-medium',
          isNextSection && 'text-emerald-500'
        )}>
          {section.title}
        </span>
      </Link>
    );
  }, [
    currentModule, 
    currentSection, 
    pathPrefix, 
    calculateSectionInfo, 
    findNextIncompleteSection, 
    handleModuleClick,
    router
  ]);

  return (
    <>
      <div className="h-full py-6 overflow-y-auto">
        <div className="flex flex-col px-4 space-y-6">
          {showDifficultyFilter && (
            <div className="space-y-2 mb-4">
              <div className="flex flex-wrap gap-2">
                <Badge
                  variant={difficultyFilter === 'all' ? 'default' : 'outline'}
                  className="cursor-pointer"
                  onClick={() => setDifficultyFilter('all')}
                >
                  All
                </Badge>
                <Badge
                  variant={difficultyFilter === 'beginner' ? 'default' : 'outline'}
                  className={cn(
                    'cursor-pointer',
                    difficultyFilter === 'beginner' ? 'bg-emerald-500 hover:bg-emerald-600' : 'border-emerald-500/20 text-emerald-500'
                  )}
                  onClick={() => {
                    setDifficultyFilter('beginner');
                    updateSkillLevel('beginner');
                  }}
                >
                  Beginner
                </Badge>
                <Badge
                  variant={difficultyFilter === 'intermediate' ? 'default' : 'outline'}
                  className={cn(
                    'cursor-pointer',
                    difficultyFilter === 'intermediate' ? 'bg-blue-500 hover:bg-blue-600' : 'border-blue-500/20 text-blue-500'
                  )}
                  onClick={() => {
                    setDifficultyFilter('intermediate');
                    updateSkillLevel('intermediate');
                  }}
                >
                  Intermediate
                </Badge>
                <Badge
                  variant={difficultyFilter === 'advanced' ? 'default' : 'outline'}
                  className={cn(
                    'cursor-pointer',
                    difficultyFilter === 'advanced' ? 'bg-red-500 hover:bg-red-600' : 'border-red-500/20 text-red-500'
                  )}
                  onClick={() => {
                    setDifficultyFilter('advanced');
                    updateSkillLevel('advanced');
                  }}
                >
                  Advanced
                </Badge>
              </div>
            </div>
          )}

          <div className="flex flex-col space-y-5">
            {modules
            .filter(module => 
              difficultyFilter === 'all' || 
              module.difficulty?.toLowerCase() === difficultyFilter
            )
            .map((module) => {
              const isExpanded = expandedSections.includes(module.id);
              const isLocked = isSectionLocked(pathPrefix, module.id, module.sections[0]?.id || '');
              const moduleProgress = getModuleProgress(pathPrefix, module.id);
              
              // Calculate module progress
              const progressPercentage = moduleProgress ? 
                Object.values(moduleProgress.completedSections).reduce((acc, s) => acc + (s?.progress || 0), 0) / 
                (module.sections.length > 0 ? module.sections.length : 1) : 0;
              
              const formattedProgress = `${Math.round(progressPercentage)}%`;
              
              // Different styling based on light/dark mode is handled by Tailwind's dark class
              const backgroundColor = pathPrefix === 'bitcoin' 
                ? 'bg-[var(--primary-light)]/5 dark:bg-[var(--primary-light)]/10' 
                : 'bg-lightning-purple/5 dark:bg-lightning-purple/10';
                
              const progressBarColor = pathPrefix === 'bitcoin' 
                ? 'bg-[var(--primary-light)]' 
                : 'bg-lightning-purple';
                
              const badgeColor = getDifficultyColor(module.difficulty);

              return (
                <div 
                  key={module.id} 
                  className={cn(
                    "rounded-md overflow-hidden",
                    backgroundColor,
                    isLocked && "opacity-75"
                  )}
                >
                  <button
                    onClick={() => toggleSection(module.id)}
                    className="w-full flex items-center justify-between px-3 py-3 text-left"
                  >
                    <div className="flex flex-col space-y-1">
                      <div className="flex items-center">
                        {pathPrefix === 'bitcoin' ? (
                          <span className="text-[var(--primary-light)] mr-2">₿</span>
                        ) : (
                          <span className="text-lightning-purple mr-2">⚡</span>
                        )}
                        <span className="font-medium">{module.title}</span>
                      </div>
                      
                      <Badge 
                        variant="outline" 
                        className={cn("text-xs px-1.5 py-0", badgeColor)}
                      >
                        {module.difficulty}
                      </Badge>
                    </div>
                    
                    <div className="flex items-center gap-2">
                      <span className="text-xs text-muted-foreground">{formattedProgress}</span>
                      {isExpanded ? (
                        <ChevronDown className="h-4 w-4" />
                      ) : (
                        <ChevronRight className="h-4 w-4" />
                      )}
                    </div>
                  </button>
                  
                  {/* Progress bar */}
                  <div className="px-3 -mt-1 mb-2">
                    <Progress 
                      value={progressPercentage} 
                      className="h-1"
                      indicatorClassName={progressBarColor}
                    />
                  </div>
                  
                  {/* Module sections */}
                  {isExpanded && (
                    <div className="px-3 pb-3 space-y-0.5">
                      {module.sections.map((section) => (
                        <div key={`${module.id}-${section.id}`}>
                          {renderSection(module, section)}
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
}