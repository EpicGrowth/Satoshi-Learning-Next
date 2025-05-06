import { UserProgress, ModuleProgress, SectionProgress } from '@/types/progress';

interface LegacyProgress {
  completedModules: string[];
  completedSections: string[];
  currentModule?: string;
  currentSection?: string;
  skillLevel?: string;
}

export async function migrateProgress(): Promise<UserProgress | null> {
  try {
    // Try to load legacy progress from localStorage
    const legacyBitcoinProgress = localStorage.getItem('satoshi-station-bitcoin-progress');
    const legacyLightningProgress = localStorage.getItem('satoshi-station-lightning-progress');

    if (!legacyBitcoinProgress && !legacyLightningProgress) {
      return null;
    }

    const newProgress: UserProgress = {
      bitcoin: {},
      lightning: {},
      skillLevel: 'beginner'
    };

    // Migrate Bitcoin progress
    if (legacyBitcoinProgress) {
      const oldBitcoinData: LegacyProgress = JSON.parse(legacyBitcoinProgress);
      newProgress.bitcoin = migrateModuleProgress(oldBitcoinData, 'bitcoin');
      if (oldBitcoinData.skillLevel) {
        newProgress.skillLevel = oldBitcoinData.skillLevel as 'beginner' | 'intermediate' | 'advanced';
      }
    }

    // Migrate Lightning progress
    if (legacyLightningProgress) {
      const oldLightningData: LegacyProgress = JSON.parse(legacyLightningProgress);
      newProgress.lightning = migrateModuleProgress(oldLightningData, 'lightning');
      // Only update skill level if not already set and available in lightning data
      if (!newProgress.skillLevel && oldLightningData.skillLevel) {
        newProgress.skillLevel = oldLightningData.skillLevel as 'beginner' | 'intermediate' | 'advanced';
      }
    }

    // Set last active module if available
    if (legacyBitcoinProgress) {
      const oldBitcoinData: LegacyProgress = JSON.parse(legacyBitcoinProgress);
      if (oldBitcoinData.currentModule && oldBitcoinData.currentSection) {
        newProgress.lastActiveModule = {
          type: 'bitcoin',
          moduleId: oldBitcoinData.currentModule,
          sectionId: oldBitcoinData.currentSection
        };
      }
    } else if (legacyLightningProgress) {
      const oldLightningData: LegacyProgress = JSON.parse(legacyLightningProgress);
      if (oldLightningData.currentModule && oldLightningData.currentSection) {
        newProgress.lastActiveModule = {
          type: 'lightning',
          moduleId: oldLightningData.currentModule,
          sectionId: oldLightningData.currentSection
        };
      }
    }

    return newProgress;
  } catch (error) {
    console.error('Error migrating progress:', error);
    return null;
  }
}

function migrateModuleProgress(oldData: LegacyProgress, type: 'bitcoin' | 'lightning'): Record<string, ModuleProgress> {
  const result: Record<string, ModuleProgress> = {};

  // Convert completed modules
  for (const moduleId of oldData.completedModules || []) {
    result[moduleId] = {
      id: moduleId,
      completedSections: {},
      startedAt: new Date().toISOString(),
      completedAt: new Date().toISOString()
    };
  }

  // Convert completed sections
  for (const sectionId of oldData.completedSections || []) {
    // Extract moduleId from sectionId (assuming format: moduleId_sectionId)
    const [moduleId] = sectionId.split('_');
    
    if (!result[moduleId]) {
      result[moduleId] = {
        id: moduleId,
        completedSections: {},
        startedAt: new Date().toISOString()
      };
    }

    result[moduleId].completedSections[sectionId] = {
      id: sectionId,
      progress: 100,
      completedSteps: ['migrated'],
      startedAt: new Date().toISOString(),
      completedAt: new Date().toISOString()
    };
  }

  return result;
}

export function cleanupLegacyProgress(): void {
  try {
    localStorage.removeItem('satoshi-station-bitcoin-progress');
    localStorage.removeItem('satoshi-station-lightning-progress');
  } catch (error) {
    console.error('Error cleaning up legacy progress:', error);
  }
}
