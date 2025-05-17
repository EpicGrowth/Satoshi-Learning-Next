import { FC } from 'react';
import { useLearningProgress } from '@/contexts/learning-progress-context';
import { toast } from '@/components/ui/use-toast';

interface LearningModuleCardProps {
  path: 'bitcoin' | 'lightning';
  moduleId: string;
  title: string;
  description: string;
}

export const LearningModuleCard: FC<LearningModuleCardProps> = ({
  path,
  moduleId,
  title,
  description
}) => {
  const { getModuleProgress, markModuleStarted } = useLearningProgress();

  const handleStartModule = async () => {
    try {
      await markModuleStarted(path, moduleId);
      toast({
        title: "Module started",
        description: "You can now begin your learning journey."
      });
    } catch (error) {
      toast({
        title: "Error starting module",
        description: "Failed to start the module. Please try again.",
        variant: "destructive"
      });
    }
  };

  const progress = getModuleProgress(path, moduleId);

  return (
    <div className="module-card">
      <h3>{title}</h3>
      <p>{description}</p>
      {!progress?.started && (
        <button onClick={handleStartModule}>Start Module</button>
      )}
      {progress?.started && (
        <div className="progress">
          Progress: {progress.completedSections} / {progress.totalSections}
        </div>
      )}
    </div>
  );
};