'use client';

import React, { useEffect, useState } from 'react';
import { useParams } from 'next/navigation';
import { bitcoinModules, lightningModules } from '@/config/learning-modules';
import Link from 'next/link';
import { useLearningProgress } from '@/contexts/learning-progress-context';
import { Award, Download, ExternalLink } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';

export default function PathContent() {
  const params = useParams();
  const path = params.path as string;
  const pathType = path as 'bitcoin' | 'lightning';
  const { getModuleProgress } = useLearningProgress();
  const [isPathCompleted, setIsPathCompleted] = useState(false);

  const modules = path === 'bitcoin' ? bitcoinModules : lightningModules;
  const pathTitle = path === 'bitcoin' ? 'Bitcoin' : 'Lightning Network';
  const pathColor = path === 'bitcoin' ? 'text-bitcoin-orange' : 'text-lightning-purple';
  const pathBgColor = path === 'bitcoin' ? 'bg-bitcoin-orange/10' : 'bg-lightning-purple/10';
  const pathBorderColor = path === 'bitcoin' ? 'border-bitcoin-orange/30' : 'border-lightning-purple/30';

  // Check if all modules in the path are completed
  useEffect(() => {
    const checkPathCompletion = () => {
      const allModulesCompleted = modules.every(module => {
        const moduleProgress = getModuleProgress(pathType, module.id);
        if (!moduleProgress) return false;
        
        // Check if all sections in the module are completed
        return module.sections.every(section => {
          const sectionProgress = moduleProgress.completedSections[section.id];
          return sectionProgress?.completedAt !== undefined;
        });
      });
      
      setIsPathCompleted(allModulesCompleted);
    };
    
    checkPathCompletion();
  }, [modules, getModuleProgress, pathType]);

  return (
    <div className="container mx-auto p-4 sm:p-8">
      <h1 className="mb-4 sm:mb-6 text-2xl sm:text-3xl font-bold">{pathTitle} Learning Path</h1>
      <p className="text-base sm:text-lg text-muted-foreground mb-6 sm:mb-8">
        Choose a module to begin your {pathTitle} learning journey
      </p>
      
      {/* Certificate Card - Displayed when path is completed */}
      {isPathCompleted && (
        <Card className={`p-4 sm:p-6 mb-8 border ${pathBorderColor} ${pathBgColor}`}>
          <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-6">
            <div className="flex-shrink-0 w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-background flex items-center justify-center border-2 border-primary">
              <Award className={`w-8 h-8 sm:w-10 sm:h-10 ${pathColor}`} />
            </div>
            <div className="flex-grow text-center sm:text-left">
              <h3 className="text-xl sm:text-2xl font-bold mb-2">
                {pathTitle} Learning Path Completed!
              </h3>
              <p className="text-sm sm:text-base text-muted-foreground mb-4">
                Congratulations! You've completed all modules in the {pathTitle} learning path.
                Download your certificate or share your achievement.
              </p>
              <div className="flex flex-col sm:flex-row gap-2 sm:gap-4">
                <Button className="flex items-center gap-2" variant="outline">
                  <Download className="h-4 w-4" />
                  Download Certificate
                </Button>
                <Button className="flex items-center gap-2" variant="outline">
                  <ExternalLink className="h-4 w-4" />
                  Share Achievement
                </Button>
              </div>
            </div>
          </div>
        </Card>
      )}
      
      <div className="grid gap-4 sm:gap-6 md:grid-cols-2 lg:grid-cols-3">
        {modules.map((module) => (
          <Link
            key={module.id}
            href={`/learn/${path}/${module.id}`}
            className="group rounded-lg border p-4 sm:p-6 hover:border-primary transition-colors"
          >
            <div className="mb-3 sm:mb-4">
              <div className="h-8 w-8 text-primary">
                {React.createElement(module.icon)}
              </div>
            </div>
            <h3 className="mb-2 text-lg sm:text-xl font-semibold group-hover:text-primary transition-colors">
              {module.title}
            </h3>
            <p className="text-sm sm:text-base text-muted-foreground">{module.description}</p>
            <div className="mt-3 sm:mt-4">
              <span className={`px-2 sm:px-3 py-1 rounded-full text-xs sm:text-sm ${
                module.difficulty === 'Beginner' ? 'bg-emerald-500/20 text-emerald-500' :
                module.difficulty === 'Intermediate' ? 'bg-blue-500/20 text-blue-500' :
                'bg-red-500/20 text-red-500'
              }`}>
                {module.difficulty}
              </span>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
