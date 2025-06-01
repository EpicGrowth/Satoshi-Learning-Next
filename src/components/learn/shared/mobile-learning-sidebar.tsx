'use client';

import { useState, useCallback, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { cn } from '@/lib/utils';
import { Progress } from '@/components/ui/progress';
import { Badge } from '@/components/ui/badge';
import { 
  ArrowRight, 
  Check, 
  ChevronDown, 
  ChevronRight, 
  Lock, 
  X, 
  Menu,
  Bitcoin,
  Zap,
  Droplet // Added for Liquid
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useLearningProgress } from '@/contexts/learning-progress-context';
import { LearningModule, Section } from '@/types/learning';
import { motion, AnimatePresence } from 'framer-motion';
import { ResetProgressButton } from './reset-progress-button';

interface MobileLearningSidebarProps {
  modules: LearningModule[];
  pathPrefix: 'bitcoin' | 'lightning' | 'liquid'; // Updated
  onModuleSelect?: (moduleId: string, sectionId: string) => void;
}

export function MobileLearningSidebar({ 
  modules, 
  pathPrefix,
  onModuleSelect
}: MobileLearningSidebarProps) {
  const pathname = usePathname();
  const pathSegments = pathname.split('/').filter(Boolean);
  const currentModule = pathSegments[pathSegments.indexOf(pathPrefix) + 1] || '';
  const currentSection = pathSegments[pathSegments.indexOf(pathPrefix) + 2] || '';

  const [isOpen, setIsOpen] = useState(false);
  const [expandedModules, setExpandedModules] = useState<string[]>([currentModule]);
  const [difficultyFilter, setDifficultyFilter] = useState<'all' | 'beginner' | 'intermediate' | 'advanced'>('all');

  const { 
    getSectionProgress, 
    isSectionLocked, 
    updateSkillLevel,
    getModuleProgress 
  } = useLearningProgress();

  // Handle body scroll when menu is open
  useEffect(() => {
    if (typeof document !== 'undefined') {
      if (isOpen) {
        document.body.style.overflow = 'hidden';
      } else {
        document.body.style.overflow = 'unset';
      }
    }
    return () => {
      if (typeof document !== 'undefined') {
        document.body.style.overflow = 'unset';
      }
    };
  }, [isOpen]);

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

  const toggleModule = (moduleId: string) => {
    setExpandedModules((prev) =>
      prev.includes(moduleId)
        ? prev.filter((id) => id !== moduleId)
        : [...prev, moduleId]
    );
  };

  const handleSectionClick = useCallback((moduleId: string, sectionId: string) => {
    if (onModuleSelect) {
      onModuleSelect(moduleId, sectionId);
    } else {
      // Default behavior: navigate to the section
      window.location.href = `/learn/${pathPrefix}/${moduleId}/${sectionId}`;
    }
    // Always close the sidebar after selection
    setIsOpen(false);
  }, [onModuleSelect, pathPrefix]);

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
    for (const module of modules) {
      for (const section of module.sections) {
        const { progress, locked } = calculateSectionInfo(module.id, section.id);
        if (!locked && progress < 100) {
          return { moduleId: module.id, sectionId: section.id };
        }
      }
    }
    return null;
  }, [modules, calculateSectionInfo]);

  const renderSection = useCallback((module: LearningModule, section: Section) => {
    // Validate module and section IDs to prevent errors
    if (!module?.id || !section?.id) {
      console.error('Invalid module or section data:', { module, section });
      return null;
    }

    const isActive = currentModule === module.id && currentSection === section.id;
    const { isComplete, locked, progress } = calculateSectionInfo(module.id, section.id);
    const nextIncomplete = findNextIncompleteSection();
    const isNextSection = nextIncomplete?.moduleId === module.id && nextIncomplete?.sectionId === section.id;
    
    // Determine theme colors using our standardized CSS variables
    const activeColor = pathPrefix === 'bitcoin'
      ? 'text-[var(--primary-light)] bg-[var(--primary-light)]/5'
      : pathPrefix === 'lightning'
      ? 'text-lightning-purple bg-lightning-purple/5'
      : 'text-cyan-500 bg-cyan-500/5'; // Liquid active color

    const completedColor = pathPrefix === 'bitcoin'
      ? 'text-[var(--primary-light)]'
      : pathPrefix === 'lightning'
      ? 'text-lightning-purple'
      : 'text-cyan-500'; // Liquid completed color

    // Ensure the path is valid
    const sectionPath = `/learn/${pathPrefix}/${module.id}/${section.id}`;

    return (
      <Link
        key={`${module.id}-${section.id}`}
        href={sectionPath}
        className={cn(
          'group flex items-center justify-between py-2 px-3 rounded-md transition-colors',
          isActive ? activeColor : 'hover:bg-muted/50'
        )}
        onClick={(e) => {
          try {
            // Close the mobile menu when navigating to a section
            setIsOpen(false);
            handleSectionClick(module.id, section.id);
          } catch (error) {
            console.error('Error navigating to section:', error);
            e.preventDefault();
          }
        }}
      >
        <div className="flex items-center">
          {isComplete ? (
            <Check className={`h-4 w-4 mr-2 ${completedColor}`} />
          ) : isNextSection ? (
            <ArrowRight className="h-4 w-4 mr-2 text-emerald-500" />
          ) : (
            <div className="w-4 h-4 mr-2" />
          )}
          <span className={cn(
            'text-sm',
            isActive && 'font-medium',
            isNextSection && 'text-emerald-500'
          )}>
            {section.title}
          </span>
        </div>
        
        {/* Section progress indicator */}
        {!locked && (
          <div className="flex items-center">
            <span className="text-xs text-muted-foreground mr-2">{progress}%</span>
            <div className="w-8 h-1.5 rounded-full bg-muted overflow-hidden">
              <div
                className={`h-full ${
                  pathPrefix === 'bitcoin'
                    ? 'bg-[var(--primary-light)]'
                    : pathPrefix === 'lightning'
                    ? 'bg-lightning-purple'
                    : 'bg-cyan-500' // Liquid progress bar color
                }`}
                style={{ width: `${progress}%` }}
              />
            </div>
          </div>
        )}
      </Link>
    );
  }, [
    currentModule, 
    currentSection, 
    pathPrefix, 
    calculateSectionInfo, 
    findNextIncompleteSection, 
    handleSectionClick 
  ]);

  // FAB button that opens the mobile sidebar
  const FloatingActionButton = () => (
    <Button
      onClick={() => setIsOpen(true)}
      className={cn(
        "fixed bottom-6 right-6 z-40 rounded-full shadow-lg p-3 lg:hidden",
        pathPrefix === 'bitcoin'
          ? 'bg-white hover:bg-gray-100 dark:bg-gray-800 dark:hover:bg-gray-700 border border-gray-300 dark:border-gray-600'
          : pathPrefix === 'lightning'
          ? 'bg-white hover:bg-gray-100 dark:bg-gray-800 dark:hover:bg-gray-700 border border-gray-300 dark:border-gray-600'
          : 'bg-cyan-500 hover:bg-cyan-500/90' // Liquid - unchanged
      )}
      aria-label="Open learning path navigation"
    >
      {pathPrefix === 'bitcoin' ? (
        <Bitcoin className="h-6 w-6 text-bitcoin-orange" /> // Icon color changed
      ) : pathPrefix === 'lightning' ? (
        <Zap className="h-6 w-6 text-yellow-400" /> // Icon color changed
      ) : (
        <Droplet className="h-6 w-6 text-white" /> // Liquid - unchanged
      )}
    </Button>
  );

  return (
    <>
      <FloatingActionButton />
      
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop */}
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="fixed inset-0 z-50 bg-black/50 backdrop-blur-sm lg:hidden"
              onClick={() => setIsOpen(false)}
              aria-hidden="true"
            />
            
            {/* Mobile sidebar panel */}
            <motion.div 
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              className="fixed right-0 top-0 z-50 h-full w-[85%] max-w-sm bg-background p-4 shadow-xl lg:hidden flex flex-col"
            >
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center">
                  {pathPrefix === 'bitcoin' ? (
                    <Bitcoin className="h-5 w-5 text-[var(--primary-light)] mr-2" />
                  ) : pathPrefix === 'lightning' ? (
                    <Zap className="h-5 w-5 text-lightning-purple mr-2" />
                  ) : (
                    <Droplet className="h-5 w-5 text-cyan-500 mr-2" /> // Liquid header icon
                  )}
                  <span className="font-bold text-base">
                    {pathPrefix === 'bitcoin'
                      ? 'Bitcoin Learning'
                      : pathPrefix === 'lightning'
                      ? 'Lightning Learning'
                      : 'Liquid Learning'} {/* Liquid header title */}
                  </span>
                </div>
                <Button 
                  variant="ghost" 
                  size="icon"
                  onClick={() => setIsOpen(false)}
                  className="focus-visible:ring-2 focus-visible:ring-offset-2"
                  aria-label="Close menu"
                >
                  <X className="h-5 w-5" />
                </Button>
              </div>

              {/* Difficulty filter */}
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
              
              {/* Module list with collapsible sections */}
              <div className="flex-1 overflow-y-auto pb-6">
                <div className="flex flex-col space-y-3">
                  {modules
                  .filter(module => 
                    difficultyFilter === 'all' || 
                    module.difficulty?.toLowerCase() === difficultyFilter
                  )
                  .map((module) => {
                    const isExpanded = expandedModules.includes(module.id);
                    const isLocked = isSectionLocked(pathPrefix, module.id, module.sections[0]?.id || '');
                    const moduleProgress = getModuleProgress(pathPrefix, module.id);
                    
                    // Calculate module progress - properly capped at 100%
                    let progressPercentage = 0;
                    
                    if (moduleProgress && module.sections.length > 0) {
                      // Count completed sections
                      const completedSections = Object.values(moduleProgress.completedSections || {}).filter(s => s?.progress === 100).length;
                      progressPercentage = (completedSections / module.sections.length) * 100;
                    }
                    
                    // Ensure progress is between 0-100%
                    progressPercentage = Math.min(Math.max(progressPercentage, 0), 100);
                    const formattedProgress = `${Math.round(progressPercentage)}%`;
                    
                    // Different styling based on light/dark mode is handled by Tailwind's dark class
                    const backgroundColor = pathPrefix === 'bitcoin'
                      ? 'bg-[var(--primary-light)]/5 dark:bg-[var(--primary-light)]/10'
                      : pathPrefix === 'lightning'
                      ? 'bg-lightning-purple/5 dark:bg-lightning-purple/10'
                      : 'bg-cyan-500/5 dark:bg-cyan-500/10'; // Liquid module background
                      
                    const progressBarColor = pathPrefix === 'bitcoin'
                      ? 'bg-[var(--primary-light)]'
                      : pathPrefix === 'lightning'
                      ? 'bg-lightning-purple'
                      : 'bg-cyan-500'; // Liquid module progress bar
                      
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
                          onClick={() => toggleModule(module.id)}
                          className="w-full flex items-center justify-between px-3 py-3 text-left"
                        >
                          <div className="flex flex-col space-y-1">
                            <div className="flex items-center">
                              {pathPrefix === 'bitcoin' ? (
                                <span className="text-[var(--primary-light)] mr-2">₿</span>
                              ) : pathPrefix === 'lightning' ? (
                                <span className="text-lightning-purple mr-2">⚡</span>
                              ) : (
                                <Droplet className="h-4 w-4 text-cyan-500 mr-2" /> // Liquid module title icon
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
                            <span className="text-xs text-muted-foreground">{Math.min(Math.round(progressPercentage), 100)}%</span>
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
                        <AnimatePresence>
                          {isExpanded && (
                            <motion.div
                              initial={{ height: 0, opacity: 0 }}
                              animate={{ height: 'auto', opacity: 1 }}
                              exit={{ height: 0, opacity: 0 }}
                              transition={{ duration: 0.2 }}
                              className="overflow-hidden"
                            >
                              <div className="px-3 pb-3 space-y-0.5">
                                {module.sections.map((section) => (
                                  <div key={`${module.id}-${section.id}`}>
                                    {renderSection(module, section)}
                                  </div>
                                ))}
                              </div>
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </div>
                    );
                  })}
                </div>
              </div>
              
              {/* Reset Progress Button */}
              <div className="mt-4 border-t pt-4">
                <ResetProgressButton pathPrefix={pathPrefix} />
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
