import { FC } from 'react';
import { useLearningProgress } from '@/contexts/learning-progress-context';
import { toast } from '@/components/ui/use-toast';

interface ModuleContentProps {
  path: 'bitcoin' | 'lightning';
  moduleId: string;
  sectionId: string;
}

export const ModuleContent: FC<ModuleContentProps> = ({ path, moduleId, sectionId }) => {
  const { updateSectionProgress, markModuleStarted, getModuleProgress } = useLearningProgress();

  const handleInitializeModule = async () => {
    try {
      await markModuleStarted(path, moduleId, sectionId);
    } catch (error) {
      toast({
        title: "Error starting module",
        description: "Failed to initialize module progress. Please try again.",
        variant: "destructive"
      });
    }
  };

  const handleComplete = async (stepId: string) => {
    try {
      await updateSectionProgress(path, moduleId, sectionId, stepId);
      toast({
        title: "Progress saved",
        description: "Your progress has been updated."
      });
    } catch (error) {
      toast({
        title: "Error saving progress",
        description: "Failed to save your progress. Please try again.",
        variant: "destructive"
      });
    }
  };

  const moduleProgress = getModuleProgress(path, moduleId);

  return (
    <div className="module-content">
      {/* Existing module content */}
    </div>
  );
};