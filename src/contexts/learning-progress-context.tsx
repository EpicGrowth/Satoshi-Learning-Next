'use client';

import React, { createContext, useContext, useState, useEffect, useCallback } from 'react';
import { UserProgress, ModuleProgress, SectionProgress } from '@/types/progress';
import { bitcoinModules, lightningModules } from '@/config/learning-modules';

// Debounce helper
function debounce<T extends (...args: any[]) => void>(func: T, wait: number): T {
  let timeout: NodeJS.Timeout;
  return function executedFunction(...args: Parameters<T>) {
    const later = () => {
      clearTimeout(timeout);
      func(...args);
    };
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
  } as T;
}

interface LearningProgressContextType {
  progress: UserProgress;
  updateSectionProgress: (type: 'bitcoin' | 'lightning', moduleId: string, sectionId: string, stepId: string) => void;
  markSectionComplete: (type: 'bitcoin' | 'lightning', moduleId: string, sectionId: string) => void;
  resetProgress: (type?: 'bitcoin' | 'lightning') => void;
  getSectionProgress: (type: 'bitcoin' | 'lightning', moduleId: string, sectionId: string) => number;
  isSectionLocked: (type: 'bitcoin' | 'lightning', moduleId: string, sectionId: string) => boolean;
  updateSkillLevel: (level: 'beginner' | 'intermediate' | 'advanced') => void;
  getModuleProgress: (type: 'bitcoin' | 'lightning', moduleId: string) => ModuleProgress | undefined;
}

const LearningProgressContext = createContext<LearningProgressContextType | undefined>(undefined);

export function LearningProgressProvider({ children }: { children: React.ReactNode }) {
  const [progress, setProgress] = useState<UserProgress>({
    bitcoin: {},
    lightning: {},
    skillLevel: 'beginner'
  });
  const [isLoaded, setIsLoaded] = useState(false);

  // Debounced save function - will only execute after 1 second of no changes
  const debouncedSave = useCallback(
    debounce((data: UserProgress) => {
      if (typeof window !== 'undefined') {
        localStorage.setItem('satoshi-station-progress', JSON.stringify(data));
      }
    }, 1000),
    []
  );

  // Load progress from localStorage on initial render
  useEffect(() => {
    if (typeof window !== 'undefined') {
      try {
        const savedProgress = localStorage.getItem('satoshi-station-progress');
        if (savedProgress) {
          setProgress(JSON.parse(savedProgress));
        }
      } catch (error) {
        console.error('Failed to load learning progress:', error);
      }
      setIsLoaded(true);
    }
  }, []);

  // Save progress to localStorage whenever it changes, but debounced
  useEffect(() => {
    if (isLoaded) {
      debouncedSave(progress);
    }
  }, [progress, isLoaded, debouncedSave]);

  const updateSectionProgress = (type: 'bitcoin' | 'lightning', moduleId: string, sectionId: string, stepId: string) => {
    setProgress((prev) => {
      const moduleProgress = prev[type][moduleId] || {
        id: moduleId,
        completedSections: {},
        startedAt: new Date().toISOString(),
        currentSection: sectionId
      };

      const sectionProgress = moduleProgress.completedSections[sectionId] || {
        id: sectionId,
        progress: 0,
        completedSteps: [],
        startedAt: new Date().toISOString()
      };

      if (!sectionProgress.completedSteps.includes(stepId)) {
        sectionProgress.completedSteps.push(stepId);
      }

      // Calculate progress based on completed steps
      const totalSteps = type === 'bitcoin' 
        ? bitcoinModules.find(m => m.id === moduleId)?.sections.find(s => s.id === sectionId)?.checkboxCount || 1
        : lightningModules.find(m => m.id === moduleId)?.sections.find(s => s.id === sectionId)?.checkboxCount || 1;
      
      sectionProgress.progress = (sectionProgress.completedSteps.length / totalSteps) * 100;

      return {
        ...prev,
        [type]: {
          ...prev[type],
          [moduleId]: {
            ...moduleProgress,
            completedSections: {
              ...moduleProgress.completedSections,
              [sectionId]: sectionProgress
            }
          }
        },
        lastActiveModule: { type, moduleId, sectionId }
      };
    });
  };

  const markSectionComplete = (type: 'bitcoin' | 'lightning', moduleId: string, sectionId: string) => {
    setProgress((prev) => {
      const moduleProgress = prev[type][moduleId];
      if (!moduleProgress?.completedSections[sectionId]) return prev;

      moduleProgress.completedSections[sectionId].completedAt = new Date().toISOString();
      moduleProgress.completedSections[sectionId].progress = 100;

      // Check if all sections are complete
      const allSections = type === 'bitcoin'
        ? bitcoinModules.find(m => m.id === moduleId)?.sections || []
        : lightningModules.find(m => m.id === moduleId)?.sections || [];

      const allComplete = allSections.every(section => 
        moduleProgress.completedSections[section.id]?.completedAt
      );

      if (allComplete) {
        moduleProgress.completedAt = new Date().toISOString();
      }

      return {
        ...prev,
        [type]: {
          ...prev[type],
          [moduleId]: moduleProgress
        }
      };
    });
  };

  const isSectionLocked = (type: 'bitcoin' | 'lightning', moduleId: string, sectionId: string): boolean => {
    const modules = type === 'bitcoin' ? bitcoinModules : lightningModules;
    const module = modules.find(m => m.id === moduleId);
    if (!module) return true;

    // Each learning path is independent - no cross-path prerequisites
    // Bitcoin and Lightning paths can be completed separately

    // Check if previous sections in the same module are completed
    const sectionIndex = module.sections.findIndex(s => s.id === sectionId);
    if (sectionIndex === 0) {
      // First section is only unlocked if previous module is completed
      const moduleIndex = modules.findIndex(m => m.id === moduleId);
      if (moduleIndex === 0) return false;
      
      const prevModule = modules[moduleIndex - 1];
      return !progress[type][prevModule.id]?.completedAt;
    }

    const previousSection = module.sections[sectionIndex - 1];
    return !progress[type][moduleId]?.completedSections[previousSection.id]?.completedAt;
  };

  const getSectionProgress = (type: 'bitcoin' | 'lightning', moduleId: string, sectionId: string): number => {
    const sectionProgress = progress[type][moduleId]?.completedSections[sectionId];
    if (!sectionProgress) return 0;
    
    // If the section is completed, return 100%
    if (sectionProgress.completedAt) return 100;
    
    // Calculate progress based on completed steps
    const modules = type === 'bitcoin' ? bitcoinModules : lightningModules;
    const module = modules.find(m => m.id === moduleId);
    const section = module?.sections.find(s => s.id === sectionId);
    if (!section) return 0;
    
    const totalSteps = section.checkboxCount || 1;
    return Math.round((sectionProgress.completedSteps.length / totalSteps) * 100);
  };

  const getModuleProgress = (type: 'bitcoin' | 'lightning', moduleId: string): ModuleProgress | undefined => {
    return progress[type][moduleId];
  };

  const updateSkillLevel = (level: 'beginner' | 'intermediate' | 'advanced') => {
    setProgress(prev => ({ ...prev, skillLevel: level }));
  };

  const resetProgress = (type?: 'bitcoin' | 'lightning') => {
    if (type) {
      setProgress(prev => ({
        ...prev,
        [type]: {}
      }));
    } else {
      setProgress({
        bitcoin: {},
        lightning: {},
        skillLevel: 'beginner'
      });
    }
  };

  return (
    <LearningProgressContext.Provider
      value={{
        progress,
        updateSectionProgress,
        markSectionComplete,
        resetProgress,
        getSectionProgress,
        isSectionLocked,
        updateSkillLevel,
        getModuleProgress
      }}
    >
      {children}
    </LearningProgressContext.Provider>
  );
}

export function useLearningProgress() {
  const context = useContext(LearningProgressContext);
  if (context === undefined) {
    throw new Error('useLearningProgress must be used within a LearningProgressProvider');
  }
  return context;
}
