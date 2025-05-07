import React from 'react';
import { useLearningProgress } from '@/contexts/learning-progress-context';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { CheckCircle, Circle, Lock, ArrowRight } from 'lucide-react';
import Link from 'next/link';

interface LearningPathProps {
  path: 'bitcoin' | 'lightning' | 'development';
  title: string;
  description?: string;
  modules: Array<{
    id: string;
    title: string;
    href: string;
    locked?: boolean;
    lessons: Array<{
      id: string;
      title: string;
      href: string;
    }>;
  }>;
  className?: string;
}

export function LearningProgress({
  path,
  title,
  description,
  modules,
  className,
}: LearningPathProps) {
  const { getProgress, markComplete } = useLearningProgress();
  
  // Calculate progress for this learning path
  const totalLessons = modules.reduce((acc, module) => acc + module.lessons.length, 0);
  const completedLessons = modules.reduce((acc, module) => {
    return acc + module.lessons.filter(lesson => getProgress(`${path}:${module.id}:${lesson.id}`)).length;
  }, 0);
  
  const progressPercentage = totalLessons > 0 ? (completedLessons / totalLessons) * 100 : 0;
  
  return (
    <Card className={className}>
      <CardHeader>
        <CardTitle className="font-display text-xl">{title}</CardTitle>
        {description && <CardDescription>{description}</CardDescription>}
        <div className="mt-2">
          <div className="flex items-center justify-between mb-2">
            <span className="text-sm text-muted-foreground">Progress</span>
            <span className="text-sm font-medium">{completedLessons}/{totalLessons} lessons</span>
          </div>
          <Progress value={progressPercentage} className="h-2 bg-muted" indicatorClassName="bg-bitcoin-orange" />
        </div>
      </CardHeader>
      
      <CardContent>
        <div className="space-y-6">
          {modules.map((module, moduleIndex) => {
            const moduleProgress = module.lessons.filter(lesson => 
              getProgress(`${path}:${module.id}:${lesson.id}`)
            ).length;
            
            const isModuleComplete = moduleProgress === module.lessons.length;
            const hasStarted = moduleProgress > 0;
            
            return (
              <div key={module.id} className="space-y-2">
                <div className="flex items-center gap-2 mb-3">
                  {isModuleComplete ? (
                    <CheckCircle className="h-5 w-5 text-green-500" />
                  ) : hasStarted ? (
                    <Circle className="h-5 w-5 text-yellow-500 fill-yellow-500/30" />
                  ) : (
                    <Circle className="h-5 w-5 text-muted-foreground/50" />
                  )}
                  
                  <h3 className="font-medium text-base">{module.title}</h3>
                </div>
                
                <div className="ml-7 space-y-2">
                  {module.lessons.map((lesson, lessonIndex) => {
                    const isComplete = getProgress(`${path}:${module.id}:${lesson.id}`);
                    const isLocked = module.locked;
                    
                    // Determine if previous module is complete for progression
                    const isPreviousComplete = moduleIndex === 0 || 
                      modules[moduleIndex - 1].lessons.every(l => 
                        getProgress(`${path}:${modules[moduleIndex - 1].id}:${l.id}`)
                      );
                    
                    return (
                      <div key={lesson.id} className="group flex items-center gap-2">
                        {isLocked && !isPreviousComplete ? (
                          <div className="flex items-center">
                            <Lock className="h-4 w-4 text-muted-foreground/50" />
                            <span className="ml-2 text-sm text-muted-foreground/70">{lesson.title}</span>
                          </div>
                        ) : (
                          <Link 
                            href={lesson.href}
                            className={`flex items-center ${isComplete ? 'text-foreground' : 'text-muted-foreground hover:text-foreground/80'}`}
                          >
                            {isComplete ? (
                              <CheckCircle className="h-4 w-4 text-green-500" />
                            ) : (
                              <Circle className="h-4 w-4 text-muted-foreground/50 group-hover:text-bitcoin-orange/50" />
                            )}
                            <span className="ml-2 text-sm">{lesson.title}</span>
                            <ArrowRight className="ml-1 h-3 w-3 opacity-0 transition-opacity group-hover:opacity-100" />
                          </Link>
                        )}
                      </div>
                    );
                  })}
                </div>
              </div>
            );
          })}
        </div>
      </CardContent>
    </Card>
  );
}
