import { FC } from 'react';
import { useLearningProgress } from '@/contexts/learning-progress-context';
import { toast } from '@/components/ui/use-toast';

interface LearningSidebarProps {
  path: 'bitcoin' | 'lightning';
  moduleId: string;
  sectionId: string;
}

export const LearningSidebar: FC<LearningSidebarProps> = ({ path, moduleId, sectionId }) => {
  const { getModuleProgress, markModuleStarted, updateSectionProgress } = useLearningProgress();

  const handleStartModule = async () => {
    try {
      await markModuleStarted(path, moduleId, sectionId);
      toast({
        title: "Module started",
        description: "Your progress will be tracked as you complete sections."
      });
    } catch (error) {
      toast({
        title: "Error starting module",
        description: "Failed to start module. Please try again.",
        variant: "destructive"
      });
    }
  };

  const handleProgressUpdate = async (stepId: string) => {
    try {
      await updateSectionProgress(path, moduleId, sectionId, stepId);
    } catch (error) {
      toast({
        title: "Error updating progress",
        description: "Failed to update progress. Please try again.",
        variant: "destructive"
      });
    }
  };

  const moduleProgress = getModuleProgress(path, moduleId);

  return (
    <aside className="sidebar">
      {/* Existing sidebar content */}
    </aside>
  );
};