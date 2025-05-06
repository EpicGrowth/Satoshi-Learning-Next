import { LucideIcon } from 'lucide-react';

export type Difficulty = 'Beginner' | 'Intermediate' | 'Advanced';

export interface Section {
  id: string;
  title: string;
  description: string;
  difficulty: Difficulty;
  checkboxCount: number;
  steps?: string[];
  content?: React.ReactNode;
}

export interface LearningModule {
  id: string;
  title: string;
  description: string;
  difficulty: Difficulty;
  icon: LucideIcon;
  locked: boolean;
  sections: Section[];
}

export interface LearningProgress {
  [moduleId: string]: {
    [sectionId: string]: boolean[];
  };
}

export interface LearningProgressContextType {
  progress: LearningProgress;
  updateProgress: (moduleId: string, sectionId: string, checkboxIndex: number) => void;
  calculateSectionProgress: (moduleId: string, sectionId: string) => number;
  calculateModuleProgress: (moduleId: string) => number;
  isSectionLocked: (moduleId: string) => boolean;
  resetProgress: (pathType: 'bitcoin' | 'lightning') => void;
}
