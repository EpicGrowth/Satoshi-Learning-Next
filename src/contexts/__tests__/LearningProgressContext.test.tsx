import { renderHook, act } from '@testing-library/react';
import React from 'react';
import { LearningProgressProvider, useLearningProgress } from '../learning-progress-context';
import { bitcoinModules, lightningModules } from '@/config/learning-modules'; // Adjust path if necessary
import { UserProgress } from '@/types/progress';

// Helper component to easily access context values
const wrapper = ({ children }: { children: React.ReactNode }) => (
  <LearningProgressProvider>{children}</LearningProgressProvider>
);

describe('LearningProgressContext - Bitcoin Path', () => {
  beforeEach(() => {
    // Clear localStorage before each test to ensure a clean state
    localStorage.clear();
    // Reset any mocks if necessary, e.g., if you spyOn localStorage.setItem
    jest.clearAllMocks(); 
  });

  it('initial state: first Bitcoin module section should be unlocked', () => {
    const { result } = renderHook(() => useLearningProgress(), { wrapper });

    const firstModuleId = bitcoinModules[0].id;
    const firstSectionId = bitcoinModules[0].sections[0].id;

    expect(result.current.isSectionLocked('bitcoin', firstModuleId, firstSectionId)).toBe(false);
  });

  it('updateSectionProgress: should update progress for one step in a Bitcoin section', () => {
    const { result } = renderHook(() => useLearningProgress(), { wrapper });
    const moduleId = bitcoinModules[0].id;
    const sectionId = bitcoinModules[0].sections[0].id; // Assumes checkboxCount >= 1
    const stepId = 'step1'; // Generic step ID

    act(() => {
      result.current.updateSectionProgress('bitcoin', moduleId, sectionId, stepId);
    });

    const progress = result.current.progress.bitcoin[moduleId]?.completedSections[sectionId];
    expect(progress?.completedSteps).toContain(stepId);
    
    const sectionConfig = bitcoinModules[0].sections.find(s => s.id === sectionId);
    const expectedPercentage = Math.round((1 / (sectionConfig?.checkboxCount || 1)) * 100);
    expect(progress?.progress).toBe(expectedPercentage);
  });
  
  it('markSectionComplete: should mark a Bitcoin section as complete and update module progress', () => {
    const { result } = renderHook(() => useLearningProgress(), { wrapper });
    const moduleId = bitcoinModules[0].id;
    const sectionId = bitcoinModules[0].sections[0].id;

    // First, ensure some progress is made (e.g., by completing steps or just starting it)
    // The current markSectionComplete implementation initializes the section if it doesn't exist, 
    // which is helpful. If it required prior progress, we'd add calls to updateSectionProgress here.
      const stepId = 'step1'; // A generic step ID for initialization

      act(() => {
        // Initialize the section by updating progress for one step
        result.current.updateSectionProgress('bitcoin', moduleId, sectionId, stepId); 
      });

    act(() => {
      result.current.markSectionComplete('bitcoin', moduleId, sectionId);
    });

    const sectionProgress = result.current.progress.bitcoin[moduleId]?.completedSections[sectionId];
    expect(sectionProgress?.progress).toBe(100);
    expect(sectionProgress?.completedAt).toBeDefined();

    // Check if module completion is updated if this was the only section
    const moduleConfig = bitcoinModules.find(m => m.id === moduleId);
    const isModuleComplete = moduleConfig?.sections.every(
      s => result.current.progress.bitcoin[moduleId]?.completedSections[s.id]?.progress === 100
    );

    if (isModuleComplete) {
      expect(result.current.progress.bitcoin[moduleId]?.completedAt).toBeDefined();
    } else {
      expect(result.current.progress.bitcoin[moduleId]?.completedAt).toBeUndefined();
    }
  });

  it('section locking: second section in a Bitcoin module should be accessible with open access model', () => {
    const { result } = renderHook(() => useLearningProgress(), { wrapper });
    // Ensure the module has at least two sections for this test
    if (bitcoinModules[0].sections.length < 2) {
      console.warn("Skipping test: First Bitcoin module has less than 2 sections.");
      return;
    }
    const moduleId = bitcoinModules[0].id;
    const secondSectionId = bitcoinModules[0].sections[1].id;
    
    // With open access model, all sections should be unlocked
    expect(result.current.isSectionLocked('bitcoin', moduleId, secondSectionId)).toBe(false);
  });

  it('section progress: completing first section in a Bitcoin module should track progress correctly', () => {
    const { result } = renderHook(() => useLearningProgress(), { wrapper });
    if (bitcoinModules.length === 0 || bitcoinModules[0].sections.length < 2) {
      console.warn("Skipping test: Not enough Bitcoin modules or sections defined.");
      return;
    }
    const moduleId = bitcoinModules[0].id;
    const firstSectionId = bitcoinModules[0].sections[0].id;
    const secondSectionId = bitcoinModules[0].sections[1].id;
    
    act(() => {
      const steps = Array.from({ length: bitcoinModules[0].sections[0].checkboxCount || 1 }, (_, i) => `step${i + 1}`);
      steps.forEach(stepId => {
        result.current.updateSectionProgress('bitcoin', moduleId, firstSectionId, stepId);
      });
      result.current.markSectionComplete('bitcoin', moduleId, firstSectionId);
    });
    
    // With open access model, all sections are unlocked regardless of completion status
    expect(result.current.isSectionLocked('bitcoin', moduleId, secondSectionId)).toBe(false);
    // But we should still track progress correctly
    expect(result.current.progress.bitcoin[moduleId].completedSections[firstSectionId]).toBeDefined();
  });

  it('module access: later Bitcoin modules should be accessible with open access model regardless of previous module completion', () => {
    const { result } = renderHook(() => useLearningProgress(), { wrapper });
    if (bitcoinModules.length < 3) {
      console.warn("Skipping test: Less than 3 Bitcoin modules defined for this test.");
      return;
    }
    const firstModuleId = bitcoinModules[0].id;
    const secondModuleId = bitcoinModules[1].id; 
    const thirdModuleId = bitcoinModules[2].id;
    const firstSectionOfThirdModuleId = bitcoinModules[2].sections[0].id;

    act(() => {
      bitcoinModules[0].sections.forEach(section => {
        const steps = Array.from({ length: section.checkboxCount || 1 }, (_, i) => `step${i + 1}`);
        steps.forEach(stepId => {
          result.current.updateSectionProgress('bitcoin', firstModuleId, section.id, stepId);
        });
        result.current.markSectionComplete('bitcoin', firstModuleId, section.id);
      });
    });

    // With open access model, all modules and sections should be accessible regardless of completion status
    expect(result.current.isSectionLocked('bitcoin', secondModuleId, bitcoinModules[1].sections[0].id)).toBe(false);
    expect(result.current.isSectionLocked('bitcoin', thirdModuleId, firstSectionOfThirdModuleId)).toBe(false);
  });
});

describe('LearningProgressContext - Lightning Path', () => {
  beforeEach(() => {
    // Clear localStorage before each test to ensure a clean state
    localStorage.clear();
    // Reset any mocks if necessary
    jest.clearAllMocks();
  });

  it('initial state: first Lightning module section should be unlocked', () => {
    const { result } = renderHook(() => useLearningProgress(), { wrapper });

    const firstModuleId = lightningModules[0].id;
    const firstSectionId = lightningModules[0].sections[0].id;

    expect(result.current.isSectionLocked('lightning', firstModuleId, firstSectionId)).toBe(false);
  });

  it('updateSectionProgress: should update progress for one step in a Lightning section', () => {
    const { result } = renderHook(() => useLearningProgress(), { wrapper });
    const moduleId = lightningModules[0].id;
    const sectionId = lightningModules[0].sections[0].id;
    const stepId = 'step1';

    act(() => {
      result.current.updateSectionProgress('lightning', moduleId, sectionId, stepId);
    });

    const progress = result.current.progress.lightning[moduleId]?.completedSections[sectionId];
    expect(progress?.completedSteps).toContain(stepId);

    const sectionConfig = lightningModules[0].sections.find(s => s.id === sectionId);
    const expectedPercentage = Math.round((1 / (sectionConfig?.checkboxCount || 1)) * 100);
    expect(progress?.progress).toBe(expectedPercentage);
  });

  it('markSectionComplete: should mark a Lightning section as complete and update module progress', () => {
    const { result } = renderHook(() => useLearningProgress(), { wrapper });
    const moduleId = lightningModules[0].id;
    const sectionId = lightningModules[0].sections[0].id;

      const stepId = 'step1'; // A generic step ID for initialization

      act(() => {
        // Initialize the section by updating progress for one step
        result.current.updateSectionProgress('lightning', moduleId, sectionId, stepId); 
      });

    act(() => {
      result.current.markSectionComplete('lightning', moduleId, sectionId);
    });

    const sectionProgress = result.current.progress.lightning[moduleId]?.completedSections[sectionId];
    expect(sectionProgress?.progress).toBe(100);
    expect(sectionProgress?.completedAt).toBeDefined();

    const moduleConfig = lightningModules.find(m => m.id === moduleId);
    const isModuleComplete = moduleConfig?.sections.every(
      s => result.current.progress.lightning[moduleId]?.completedSections[s.id]?.progress === 100
    );

    if (isModuleComplete) {
      expect(result.current.progress.lightning[moduleId]?.completedAt).toBeDefined();
    } else {
      expect(result.current.progress.lightning[moduleId]?.completedAt).toBeUndefined();
    }
  });

  it('section locking: second section in a Lightning module should be accessible with open access model', () => {
    const { result } = renderHook(() => useLearningProgress(), { wrapper });
    if (lightningModules.length === 0 || lightningModules[0].sections.length < 2) {
      console.warn("Skipping test: Not enough Lightning modules or sections defined.");
      return;
    }
    const moduleId = lightningModules[0].id;
    const secondSectionId = lightningModules[0].sections[1].id;
    
    // With open access model, all sections should be unlocked
    expect(result.current.isSectionLocked('lightning', moduleId, secondSectionId)).toBe(false);
  });

  it('section progress: completing first section in a Lightning module should track progress correctly', () => {
    const { result } = renderHook(() => useLearningProgress(), { wrapper });
    if (lightningModules.length === 0 || lightningModules[0].sections.length < 2) {
      console.warn("Skipping test: Not enough Lightning modules or sections defined.");
      return;
    }
    const moduleId = lightningModules[0].id;
    const firstSectionId = lightningModules[0].sections[0].id;
    const secondSectionId = lightningModules[0].sections[1].id;
    
    act(() => {
      const steps = Array.from({ length: lightningModules[0].sections[0].checkboxCount || 1 }, (_, i) => `step${i + 1}`);
      steps.forEach(stepId => {
        result.current.updateSectionProgress('lightning', moduleId, firstSectionId, stepId);
      });
      result.current.markSectionComplete('lightning', moduleId, firstSectionId);
    });
    
    // With open access model, all sections are unlocked regardless of completion status
    expect(result.current.isSectionLocked('lightning', moduleId, secondSectionId)).toBe(false);
    // But we should still track progress correctly
    expect(result.current.progress.lightning[moduleId].completedSections[firstSectionId]).toBeDefined();
  });

  it('module access: second Lightning module should be accessible with open access model', () => {
    const { result } = renderHook(() => useLearningProgress(), { wrapper });
    if (lightningModules.length < 2) {
      console.warn("Skipping test: Less than 2 Lightning modules defined.");
      return;
    }
    const secondModuleId = lightningModules[1].id;
    const firstSectionOfSecondModuleId = lightningModules[1].sections[0].id;

    // With open access model, all modules and sections should be unlocked
    expect(result.current.isSectionLocked('lightning', secondModuleId, firstSectionOfSecondModuleId)).toBe(false);
  });

  it('module progress: completing first Lightning module should track module completion correctly', () => {
    const { result } = renderHook(() => useLearningProgress(), { wrapper });
    if (lightningModules.length < 2) {
      console.warn("Skipping test: Less than 2 Lightning modules defined.");
      return;
    }
    const firstModuleId = lightningModules[0].id;
    const secondModuleId = lightningModules[1].id;
    const firstSectionOfSecondModuleId = lightningModules[1].sections[0].id;

    act(() => {
      lightningModules[0].sections.forEach(section => {
        const steps = Array.from({ length: section.checkboxCount || 1 }, (_, i) => `step${i + 1}`);
        steps.forEach(stepId => {
          result.current.updateSectionProgress('lightning', firstModuleId, section.id, stepId);
        });
        result.current.markSectionComplete('lightning', firstModuleId, section.id);
      });
    });
    
    // Module completion should be tracked correctly
    expect(result.current.progress.lightning[firstModuleId]?.completedAt).toBeDefined();
    // With open access model, all modules and sections should be unlocked regardless of prior completion
    expect(result.current.isSectionLocked('lightning', secondModuleId, firstSectionOfSecondModuleId)).toBe(false);
  });

  it('module access: later Lightning modules should be accessible with open access model regardless of previous module completion', () => {
    const { result } = renderHook(() => useLearningProgress(), { wrapper });
    if (lightningModules.length < 3) {
      console.warn("Skipping test: Less than 3 Lightning modules defined for this test.");
      return;
    }
    const firstModuleId = lightningModules[0].id;
    const secondModuleId = lightningModules[1].id; 
    const thirdModuleId = lightningModules[2].id;
    const firstSectionOfThirdModuleId = lightningModules[2].sections[0].id;

    act(() => {
      lightningModules[0].sections.forEach(section => {
        const steps = Array.from({ length: section.checkboxCount || 1 }, (_, i) => `step${i + 1}`);
        steps.forEach(stepId => {
          result.current.updateSectionProgress('lightning', firstModuleId, section.id, stepId);
        });
        result.current.markSectionComplete('lightning', firstModuleId, section.id);
      });
    });

    // With open access model, all modules and sections should be accessible regardless of completion status
    expect(result.current.isSectionLocked('lightning', secondModuleId, lightningModules[1].sections[0].id)).toBe(false);
    expect(result.current.isSectionLocked('lightning', thirdModuleId, firstSectionOfThirdModuleId)).toBe(false);
  });
});

describe('LearningProgressContext - Reset Progress', () => {
  beforeEach(() => {
    localStorage.clear();
    jest.clearAllMocks();
  });

  it('resetProgress: should reset progress for a specific path (bitcoin) only', () => {
    const { result } = renderHook(() => useLearningProgress(), { wrapper });

    // Set some initial progress for both paths and a skill level
    act(() => {
      result.current.updateSectionProgress('bitcoin', 'bitcoin-fundamentals', 'what-is-bitcoin', 'step1');
      result.current.updateSectionProgress('lightning', 'lightning-fundamentals', 'what-is-lightning', 'step1');
      result.current.updateSkillLevel('intermediate');
    });

    // Ensure initial progress is there
    expect(result.current.progress.bitcoin['bitcoin-fundamentals']).toBeDefined();
    expect(result.current.progress.lightning['lightning-fundamentals']).toBeDefined();
    expect(result.current.progress.skillLevel).toBe('intermediate');

    act(() => {
      result.current.resetProgress('bitcoin');
    });

    // Check Bitcoin path is reset
    expect(result.current.progress.bitcoin).toEqual({});
    // Check Lightning path and skillLevel are unaffected
    expect(result.current.progress.lightning['lightning-fundamentals']).toBeDefined();
    expect(result.current.progress.skillLevel).toBe('intermediate');
  });

  it('resetProgress: should reset all progress when no path is specified', () => {
    const { result } = renderHook(() => useLearningProgress(), { wrapper });

    // Set some initial progress
    act(() => {
      result.current.updateSectionProgress('bitcoin', 'bitcoin-fundamentals', 'what-is-bitcoin', 'step1');
      result.current.updateSectionProgress('lightning', 'lightning-fundamentals', 'what-is-lightning', 'step1');
      result.current.updateSkillLevel('advanced');
    });
    
    // Ensure initial progress is there
    expect(result.current.progress.bitcoin['bitcoin-fundamentals']).toBeDefined();
    expect(result.current.progress.lightning['lightning-fundamentals']).toBeDefined();
    expect(result.current.progress.skillLevel).toBe('advanced');

    act(() => {
      result.current.resetProgress(); // No argument
    });

    // Check both paths are reset and skillLevel is back to default ('beginner')
    expect(result.current.progress.bitcoin).toEqual({});
    expect(result.current.progress.lightning).toEqual({});
    expect(result.current.progress.skillLevel).toBe('beginner'); // Assuming 'beginner' is the default
  });
});

describe('LearningProgressContext - Other Functionalities and Edge Cases', () => {
  beforeEach(() => {
    localStorage.clear();
    jest.clearAllMocks(); // Clears mock usage data, including spyOn calls
    jest.useFakeTimers(); // Use fake timers for debounce testing
  });

  afterEach(() => {
    jest.runOnlyPendingTimers(); // Run any pending timers
    jest.useRealTimers(); // Restore real timers
  });

  it('getSectionProgress: should return correct progress for a section', () => {
    const { result } = renderHook(() => useLearningProgress(), { wrapper });
    const moduleId = bitcoinModules[0].id;
    const sectionId = bitcoinModules[0].sections[0].id;
    const sectionConfig = bitcoinModules[0].sections.find(s => s.id === sectionId);
    const totalSteps = sectionConfig?.checkboxCount || 1;

    // No progress initially
    expect(result.current.getSectionProgress('bitcoin', moduleId, sectionId)).toBe(0);

    // Add one step of progress
    act(() => {
      result.current.updateSectionProgress('bitcoin', moduleId, sectionId, 'step1');
    });
    const expectedPercentage = Math.round((1 / totalSteps) * 100);
    expect(result.current.getSectionProgress('bitcoin', moduleId, sectionId)).toBe(expectedPercentage);

    // Complete the section
    act(() => {
      for (let i = 0; i < totalSteps; i++) {
        result.current.updateSectionProgress('bitcoin', moduleId, sectionId, `step${i+1}`);
      }
      // Note: markSectionComplete also sets progress to 100 and completedAt
      // result.current.markSectionComplete('bitcoin', moduleId, sectionId);
    });
    // Re-calculating based on steps for getSectionProgress if not explicitly marked complete with completedAt
    expect(result.current.getSectionProgress('bitcoin', moduleId, sectionId)).toBe(100);
    
    // Explicitly mark complete to test the completedAt path in getSectionProgress
     act(() => {
        result.current.markSectionComplete('bitcoin', moduleId, sectionId);
     });
    expect(result.current.getSectionProgress('bitcoin', moduleId, sectionId)).toBe(100);


  });

  it('getModuleProgress: should return correct module progress data', () => {
    const { result } = renderHook(() => useLearningProgress(), { wrapper });
    const moduleId = bitcoinModules[0].id;
    const sectionId = bitcoinModules[0].sections[0].id;

    // No progress initially
    expect(result.current.getModuleProgress('bitcoin', moduleId)).toBeUndefined();

    act(() => {
      result.current.updateSectionProgress('bitcoin', moduleId, sectionId, 'step1');
    });

    const moduleProgress = result.current.getModuleProgress('bitcoin', moduleId);
    expect(moduleProgress).toBeDefined();
    expect(moduleProgress?.id).toBe(moduleId);
    expect(moduleProgress?.completedSections[sectionId]).toBeDefined();
    expect(moduleProgress?.completedAt).toBeUndefined();
  });
  
  it('getModuleProgress: should reflect module completion', () => {
    const { result } = renderHook(() => useLearningProgress(), { wrapper });
    const moduleId = bitcoinModules[0].id;

    act(() => {
      // Complete all sections of the first module
      bitcoinModules[0].sections.forEach(section => {
        const steps = Array.from({ length: section.checkboxCount || 1 }, (_, i) => `step${i + 1}`);
        steps.forEach(stepId => {
          result.current.updateSectionProgress('bitcoin', moduleId, section.id, stepId);
        });
        result.current.markSectionComplete('bitcoin', moduleId, section.id);
      });
    });
    
    const moduleProgress = result.current.getModuleProgress('bitcoin', moduleId);
    expect(moduleProgress?.completedAt).toBeDefined();
  });

  it('updateSectionProgress: should handle non-existent module/section gracefully', () => {
    const { result } = renderHook(() => useLearningProgress(), { wrapper });
    
    act(() => {
      // Attempt to update progress for a completely invalid path
      result.current.updateSectionProgress('bitcoin', 'non-existent-module', 'non-existent-section', 'step1');
    });
    
    const newModuleProgress = result.current.progress.bitcoin['non-existent-module'];
    expect(newModuleProgress).toBeDefined();
    expect(newModuleProgress.id).toBe('non-existent-module');
    expect(newModuleProgress.currentSection).toBe('non-existent-section');
    
    const newSectionProgress = newModuleProgress.completedSections['non-existent-section'];
    expect(newSectionProgress).toBeDefined();
    expect(newSectionProgress.id).toBe('non-existent-section');
    expect(newSectionProgress.completedSteps).toContain('step1');
    expect(newSectionProgress.progress).toBe(100);
  });

  it('markSectionComplete: should handle non-existent module/section gracefully', () => {
    const { result } = renderHook(() => useLearningProgress(), { wrapper });

    act(() => {
      // Attempt to mark complete for a completely invalid path
      result.current.markSectionComplete('bitcoin', 'non-existent-module', 'non-existent-section');
    });
    
    // Expect no error and progress for this invalid path not to be created
    expect(result.current.progress.bitcoin['non-existent-module']).toBeUndefined();
  });

  it('localStorage persistence: setItem should be called after progress update (debounced)', () => {
    const localStorageSetItemSpy = jest.spyOn(localStorage, 'setItem');
    const { result } = renderHook(() => useLearningProgress(), { wrapper });
    const moduleId = bitcoinModules[0].id;
    const sectionId = bitcoinModules[0].sections[0].id;

    act(() => {
      result.current.updateSectionProgress('bitcoin', moduleId, sectionId, 'step1');
    });

    // Initially, due to debounce, setItem might not have been called yet
    expect(localStorageSetItemSpy).not.toHaveBeenCalled();

    // Fast-forward timers to trigger the debounced save
    act(() => {
      jest.runAllTimers(); // Runs all timers to their completion
    });
    
    expect(localStorageSetItemSpy).toHaveBeenCalledTimes(1);
    expect(localStorageSetItemSpy).toHaveBeenCalledWith('satoshi-station-progress', expect.any(String));
    
    localStorageSetItemSpy.mockRestore();
  });
  
  it('localStorage persistence: setItem should be called after markSectionComplete (debounced)', () => {
    const localStorageSetItemSpy = jest.spyOn(localStorage, 'setItem');
    const { result } = renderHook(() => useLearningProgress(), { wrapper });
    const moduleId = bitcoinModules[0].id;
    const sectionId = bitcoinModules[0].sections[0].id;
      const stepId = 'step1'; // A generic step ID for initialization

      act(() => {
        // Initialize the section by updating progress for one step
        result.current.updateSectionProgress('bitcoin', moduleId, sectionId, stepId); 
      });

    act(() => {
      result.current.markSectionComplete('bitcoin', moduleId, sectionId);
    });

    act(() => {
      jest.runAllTimers();
    });
    
    expect(localStorageSetItemSpy).toHaveBeenCalledTimes(1);
    expect(localStorageSetItemSpy).toHaveBeenCalledWith('satoshi-station-progress', expect.any(String));
    
    localStorageSetItemSpy.mockRestore();
  });

   it('localStorage persistence: setItem should be called after skill level update (debounced)', () => {
    const localStorageSetItemSpy = jest.spyOn(localStorage, 'setItem');
    const { result } = renderHook(() => useLearningProgress(), { wrapper });

    act(() => {
      result.current.updateSkillLevel('intermediate');
    });

    act(() => {
      jest.runAllTimers();
    });
    
    expect(localStorageSetItemSpy).toHaveBeenCalledTimes(1);
    expect(localStorageSetItemSpy).toHaveBeenCalledWith('satoshi-station-progress', expect.stringContaining('"skillLevel":"intermediate"'));
    
    localStorageSetItemSpy.mockRestore();
  });
});
