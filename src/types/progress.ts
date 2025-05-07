export interface ModuleProgress {
  id: string;
  completedSections: Record<string, SectionProgress>;
  startedAt?: string;
  completedAt?: string;
  currentSection?: string;
}

export interface SectionProgress {
  id: string;
  progress: number;
  completedSteps: string[];
  startedAt: string;
  completedAt?: string;
  quizScores?: Record<string, number>;
}

export interface UserProgress {
  bitcoin: Record<string, ModuleProgress>;
  lightning: Record<string, ModuleProgress>;
  lastActiveModule?: {
    type: 'bitcoin' | 'lightning';
    moduleId: string;
    sectionId: string;
  };
  skillLevel: 'beginner' | 'intermediate' | 'advanced';
}
