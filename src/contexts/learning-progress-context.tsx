'use client';

import React, { createContext, useContext, useState, useEffect, useCallback, useMemo } from 'react';
import { UserProgress, ModuleProgress, SectionProgress } from '@/types/progress';
import { bitcoinModules, lightningModules, liquidModules } from '@/config/learning-modules';

// Debounce helper with proper cleanup
function debounce<T extends (...args: any[]) => void>(func: T, wait: number): (...args: Parameters<T>) => void {
  let timeout: NodeJS.Timeout | null = null;
  
  return (...args: Parameters<T>) => {
    if (timeout) clearTimeout(timeout);
    timeout = setTimeout(() => {
      func(...args);
      timeout = null;
    }, wait);
  };
}

interface LearningProgressContextType {
  progress: UserProgress;
  updateSectionProgress: (type: 'bitcoin' | 'lightning' | 'liquid', moduleId: string, sectionId: string, stepId: string) => void;
  markSectionComplete: (type: 'bitcoin' | 'lightning' | 'liquid', moduleId: string, sectionId: string) => void;
  resetProgress: (type?: 'bitcoin' | 'lightning' | 'liquid') => void;
  getSectionProgress: (type: 'bitcoin' | 'lightning' | 'liquid', moduleId: string, sectionId: string) => number;
  isSectionLocked: (type: 'bitcoin' | 'lightning' | 'liquid', moduleId: string, sectionId: string) => boolean;
  isContentLocked: (type: 'bitcoin' | 'lightning' | 'liquid', moduleId: string, sectionId: string) => boolean;
  updateSkillLevel: (level: 'beginner' | 'intermediate' | 'advanced') => void;
  getModuleProgress: (type: 'bitcoin' | 'lightning' | 'liquid', moduleId: string) => ModuleProgress | undefined;
}

const LearningProgressContext = createContext<LearningProgressContextType | undefined>(undefined);

// Helper function to normalize progress data
const normalizeProgressData = (data: UserProgress): UserProgress => {
  const normalized = { ...data };
  
  // Process both bitcoin and lightning paths
  ['bitcoin', 'lightning'].forEach(pathType => {
    const pathData = normalized[pathType as 'bitcoin' | 'lightning'];
    
    // Process each module
    Object.keys(pathData).forEach(moduleId => {
      const module = pathData[moduleId];
      if (!module || !module.completedSections) return;
      
      // Process each section
      Object.keys(module.completedSections).forEach(sectionId => {
        const section = module.completedSections[sectionId];
        if (!section) return;
        
        // Cap progress at 100%
        if (section.progress > 100) {
          section.progress = 100;
        }
      });
    });
  });
  
  return normalized;
};

export function LearningProgressProvider({ children }: { children: React.ReactNode }) {
  const [progress, setProgress] = useState<UserProgress>({
    bitcoin: {},
    lightning: {},
    liquid: {},
    skillLevel: 'beginner'
  });
  const [isLoaded, setIsLoaded] = useState(false);

  // Memoize the debounced save function
  const debouncedSave = useMemo(
    () =>
      debounce((data: UserProgress) => {
        if (typeof window !== 'undefined') {
          try {
            localStorage.setItem('satoshi-station-progress', JSON.stringify(data));
          } catch (error) {
            console.error('Failed to save learning progress:', error);
          }
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
          // Parse and normalize the progress data to fix any incorrect values
          const parsedProgress = JSON.parse(savedProgress);
          const normalizedProgress = normalizeProgressData(parsedProgress);
          
          // Save the normalized data back to localStorage
          localStorage.setItem('satoshi-station-progress', JSON.stringify(normalizedProgress));
          
          // Update state with normalized data
          setProgress(normalizedProgress);
        }
      } catch (error) {
        console.error('Failed to load learning progress:', error);
      }
      setIsLoaded(true);
    }
  }, []);

  // Save progress to localStorage whenever it changes, with cleanup
  useEffect(() => {
    let isMounted = true;

    if (isLoaded && isMounted) {
      debouncedSave(progress);
    }

    return () => {
      isMounted = false;
    };
  }, [progress, isLoaded, debouncedSave]);

  const updateSectionProgress = useCallback((type: 'bitcoin' | 'lightning' | 'liquid', moduleId: string, sectionId: string, stepId: string) => {
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
      
      sectionProgress.progress = Math.round((sectionProgress.completedSteps.length / totalSteps) * 100);

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
  }, []);

  const markSectionComplete = useCallback((type: 'bitcoin' | 'lightning' | 'liquid', moduleId: string, sectionId: string) => {
    setProgress((prev) => {
      // Check if the module or section path is valid in the current progress state
      if (!prev[type] || !prev[type][moduleId] || !prev[type][moduleId].completedSections || !prev[type][moduleId].completedSections[sectionId]) {
        console.warn(`Attempted to mark section complete for an uninitialized or invalid path: ${type}/${moduleId}/${sectionId}`);
        // It's possible the section was started but not yet in completedSections if updateSectionProgress wasn't called first.
        // For robustness, let's try to initialize it if the module exists but section doesn't.
        if (prev[type]?.[moduleId] && !prev[type][moduleId].completedSections[sectionId]) {
          // Fall-through to allow initialization logic, or handle more gracefully.
          // For now, this path will be caught by the deep copy logic if prev[type][moduleId] is truthy.
        } else if (!prev[type]?.[moduleId]) {
           // If module itself doesn't exist, something is wrong, return prev.
          return prev;
        }
      }
      
      // Deep clone the specific module progress to ensure immutability.
      // Ensure moduleProgress itself exists before cloning.
      const originalModuleProgress = prev[type][moduleId];
      if (!originalModuleProgress) {
          console.warn(`Module progress not found for ${type}/${moduleId} during markSectionComplete.`);
          return prev; // Should not happen if path check above is robust
      }
      const updatedModuleProgress = JSON.parse(JSON.stringify(originalModuleProgress));

      // Ensure completedSections and the specific section exist in the cloned object
      updatedModuleProgress.completedSections = updatedModuleProgress.completedSections || {};
      updatedModuleProgress.completedSections[sectionId] = updatedModuleProgress.completedSections[sectionId] || {
        id: sectionId,
        progress: 0,
        completedSteps: [], // Assuming steps are not relevant for just marking complete
        startedAt: new Date().toISOString() // Or use existing startedAt if available
      };
      
      // Now update the cloned section
      updatedModuleProgress.completedSections[sectionId].completedAt = new Date().toISOString();
      updatedModuleProgress.completedSections[sectionId].progress = 100;

      // Check if all sections in this module are complete using the module configuration
      const moduleConfig = (type === 'bitcoin' ? bitcoinModules : lightningModules).find(m => m.id === moduleId);
      if (moduleConfig && moduleConfig.sections) { // Ensure moduleConfig and sections exist
        const allSectionsComplete = moduleConfig.sections.every(
          section => updatedModuleProgress.completedSections[section.id]?.progress === 100
        );
        if (allSectionsComplete) {
          updatedModuleProgress.completedAt = new Date().toISOString();
        }
      }

      return {
        ...prev,
        [type]: {
          ...prev[type],
          [moduleId]: updatedModuleProgress, // Use the deep-copied and updated module
        },
      };
    });
  }, []);

  const isSectionLocked = useCallback((type: 'bitcoin' | 'lightning' | 'liquid', moduleId: string, sectionId: string): boolean => {
    // All sections are now unlocked
    return false;
  }, []);

  const getSectionProgress = useCallback((type: 'bitcoin' | 'lightning' | 'liquid', moduleId: string, sectionId: string): number => {
    const sectionProgress = progress[type][moduleId]?.completedSections[sectionId];
    if (!sectionProgress) return 0;
    
    // If the section is completed, return 100%
    if (sectionProgress.completedAt) return 100;
    
    // Calculate progress based on completed steps
    let modules;
    if (type === 'bitcoin') {
      modules = bitcoinModules;
    } else if (type === 'lightning') {
      modules = lightningModules;
    } else {
      modules = liquidModules;
    }
    
    const module = modules.find(m => m.id === moduleId);
    const section = module?.sections.find(s => s.id === sectionId);
    if (!section) return 0;
    
    const totalSteps = section.checkboxCount || 1;
    // Calculate progress and ensure it's capped at 100%
    const calculatedProgress = Math.round((sectionProgress.completedSteps.length / totalSteps) * 100);
    return Math.min(calculatedProgress, 100);
  }, [progress]);

  const getModuleProgress = useCallback((type: 'bitcoin' | 'lightning' | 'liquid', moduleId: string): ModuleProgress | undefined => {
    return progress[type][moduleId];
  }, [progress]);

  const updateSkillLevel = useCallback((level: 'beginner' | 'intermediate' | 'advanced') => {
    setProgress(prev => ({ ...prev, skillLevel: level }));
  }, []);

  const resetProgress = useCallback((type?: 'bitcoin' | 'lightning' | 'liquid') => {
    if (type) {
      setProgress(prev => ({
        ...prev,
        [type]: {}
      }));
    } else {
      setProgress({
        bitcoin: {},
        lightning: {},
        liquid: {},
        skillLevel: 'beginner'
      });
    }
  }, []);

  // Function to check if content should be locked
  const isContentLocked = useCallback((type: 'bitcoin' | 'lightning' | 'liquid', moduleId: string, sectionId: string): boolean => {
    // All content is now unlocked
    return false;
  }, []);

  return (
    <LearningProgressContext.Provider
      value={{
        progress,
        updateSectionProgress,
        markSectionComplete,
        resetProgress,
        getSectionProgress,
        isSectionLocked,
        isContentLocked,
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
