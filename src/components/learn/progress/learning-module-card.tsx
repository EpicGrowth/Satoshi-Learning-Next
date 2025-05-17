import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { CheckCircle, Circle, Lock, ArrowRight, AlertCircle } from 'lucide-react';
import { useLearningProgress } from '@/contexts/learning-progress-context';

interface LearningModuleCardProps {
  module: {
    id: string;
    title: string;
    href: string;
    locked?: boolean;
    lessons: Array<{
      id: string;
      title: string;
      href: string;
    }>;
  };
  path: string;
  onProgress: (moduleId: string, lessonId: string) => Promise<void>;
}

export function LearningModuleCard({ module, path, onProgress }: LearningModuleCardProps) {
  const { getProgress } = useLearningProgress();
  const [error, setError] = useState<Error | null>(null);
  const [completedLessons, setCompletedLessons] = useState<string[]>([]);

  useEffect(() => {
    // Get completed lessons on mount
    try {
      const completed = module.lessons
        .filter(lesson => {
          try {
            return getProgress(`${path}:${module.id}:${lesson.id}`);
          } catch (err) {
            console.error('Error checking lesson progress:', err);
            return false;
          }
        })
        .map(lesson => lesson.id);
      
      setCompletedLessons(completed);
      setError(null);
    } catch (err) {
      console.error('Error getting module progress:', err);
      setError(err instanceof Error ? err : new Error('Failed to get module progress'));
    }
  }, [module, path, getProgress]);

  const handleLessonComplete = async (lessonId: string) => {
    try {
      await onProgress(module.id, lessonId);
      setCompletedLessons(prev => [...prev, lessonId]);
      setError(null);
    } catch (err) {
      console.error('Error updating lesson progress:', err);
      setError(err instanceof Error ? err : new Error('Failed to update lesson progress'));
    }
  };

  if (error) {
    return (
      <Card className="relative">
        <CardHeader className="pb-4">
          <CardTitle>{module.title}</CardTitle>
          <Alert variant="destructive" className="mt-2">
            <AlertCircle className="h-4 w-4" />
            <AlertDescription>{error.message}</AlertDescription>
          </Alert>
        </CardHeader>
      </Card>
    );
  }

  const progress = (completedLessons.length / module.lessons.length) * 100;

  return (
    <Card className="relative">
      <CardHeader className="pb-4">
        <CardTitle>{module.title}</CardTitle>
        <div className="mt-2 space-y-1">
          <div className="flex justify-between text-sm">
            <span>{completedLessons.length} of {module.lessons.length} Complete</span>
            <span>{Math.round(progress)}%</span>
          </div>
          <Progress value={progress} className="h-1" />
        </div>
      </CardHeader>

      <CardContent className="space-y-2">
        {module.lessons.map((lesson) => {
          const isCompleted = completedLessons.includes(lesson.id);

          return (
            <div
              key={lesson.id}
              className="flex items-center justify-between rounded-lg border p-3"
            >
              <div className="flex items-center space-x-3">
                {isCompleted ? (
                  <CheckCircle className="h-5 w-5 text-green-500" />
                ) : (
                  <Circle className="h-5 w-5 text-muted-foreground" />
                )}
                <span>{lesson.title}</span>
              </div>
              
              {!isCompleted && (
                <button
                  onClick={() => handleLessonComplete(lesson.id)}
                  className="text-primary hover:text-primary/80"
                >
                  <ArrowRight className="h-5 w-5" />
                </button>
              )}
            </div>
          );
        })}
      </CardContent>

      {module.locked && (
        <div className="absolute inset-0 flex items-center justify-center bg-background/80 backdrop-blur-sm rounded-lg">
          <div className="flex items-center space-x-2 text-muted-foreground">
            <Lock className="h-5 w-5" />
            <span>Complete previous modules first</span>
          </div>
        </div>
      )}
    </Card>
  );
}