export interface Certificate {
  id: string;
  recipientName: string;
  pathType: 'bitcoin' | 'lightning' | 'liquid';
  issuedAt: string;
  completedModules: string[];
  moduleDetails: Array<{
    id: string;
    title: string;
    completedAt: string;
    sections: Array<{
      id: string;
      title: string;
      completedAt: string;
    }>;
  }>;
  verificationHash: string;
}

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
  liquid: Record<string, ModuleProgress>;
  lastActiveModule?: {
    type: 'bitcoin' | 'lightning' | 'liquid';
    moduleId: string;
    sectionId: string;
  };
  skillLevel: 'beginner' | 'intermediate' | 'advanced';
  certificates?: Record<string, Certificate>;
}
