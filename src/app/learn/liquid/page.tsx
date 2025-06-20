'use client';

import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { ModuleCard } from '@/components/learn/shared/module-card';
import { useLearningProgress } from '@/contexts/learning-progress-context';
import { liquidModules } from '@/config/learning-modules'; 
import { Button } from '@/components/ui/button';
import { Trash2, PlayCircle, CheckCircle, Award } from 'lucide-react'; 
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

export default function LiquidLearningPath() {
  const router = useRouter();
  const { progress, isSectionLocked, resetProgress, getModuleProgress } = useLearningProgress();

  let nextSectionUrl: string | null = null;
  const lastModuleId = liquidModules[liquidModules.length - 1].id;
  const isPathComplete = !!getModuleProgress('liquid', lastModuleId)?.completedAt;

  if (!isPathComplete) {
    for (const module of liquidModules) {
      const moduleId = module.id.includes('-') ? module.id : `liquid-${module.id}`;
      for (const section of module.sections) {
        const isLocked = isSectionLocked('liquid', moduleId, section.id);
        const isCompleted = !!progress.liquid?.[moduleId]?.completedSections?.[section.id]?.completedAt;
        if (!isLocked && !isCompleted) {
          // Use the module ID without the prefix in the URL
          const urlModuleId = moduleId.replace('liquid-', '');
          nextSectionUrl = `/learn/liquid/${urlModuleId}/${section.id}`;
          break;
        }
      }
      if (nextSectionUrl) break;
    }
  }

  const handleModuleClick = (moduleId: string, isDynamicallyLocked: boolean) => {
    const module = liquidModules.find(m => m.id === moduleId);
    if (!module) return;

    if (isDynamicallyLocked) return;

    const firstSection = module.sections[0];
    if (firstSection) {
      router.push(`/learn/liquid/${moduleId}/${firstSection.id}`);
    }
  };

  const handleReset = () => {
    if (window.confirm('Are you sure you want to reset all Liquid Network learning progress? This cannot be undone.')) {
      resetProgress('liquid'); 
      router.refresh(); 
    }
  };

  const learningObjectives = [
    'Understand what the Liquid Network is and its relationship to Bitcoin.',
    'Learn how federated sidechains work and provide security.',
    'Explore Confidential Transactions for enhanced privacy.',
    'Master asset issuance on the Liquid Network.',
    'Understand the technical aspects of the Liquid federation.',
    'Learn about practical applications of Liquid for exchanges and finance.',
    'Discover how to create and manage tokens on Liquid.'
  ];

  const primaryColorClass = 'text-cyan-600'; 
  const borderColorClass = 'border-cyan-600/20';
  const bgColorClass = 'bg-cyan-600/5';

  return (
    <div className="container py-8 space-y-8">
      <div className="flex items-center justify-between flex-wrap gap-4">
        <div>
          <h1 className={`text-4xl font-extrabold tracking-tight scroll-m-20 ${primaryColorClass}`}>
            Liquid Network Path
          </h1>
          <p className="mt-2 text-muted-foreground">
            Learn about Bitcoin's federated sidechain for asset issuance and private transactions.
          </p>
        </div>
        <div className="flex items-center gap-2">
          {!isPathComplete && nextSectionUrl && (
            <Button asChild className="bg-cyan-600 hover:bg-cyan-700 text-white"> 
              <Link href={nextSectionUrl} className="flex items-center gap-2">
                <PlayCircle className="h-4 w-4" />
                Continue Learning
              </Link>
            </Button>
          )}
          <Button 
            variant="destructive" 
            size="sm" 
            onClick={handleReset}
            className="flex items-center gap-2"
          >
            <Trash2 className="h-4 w-4" />
            Reset Progress
          </Button>
        </div>
      </div>

      <Card className={`bg-muted/30 ${borderColorClass}`}> 
        <CardHeader>
          <CardTitle className={`text-lg ${primaryColorClass}`}>What You'll Learn</CardTitle>
        </CardHeader>
        <CardContent>
          <ul className="space-y-2 list-disc list-inside text-muted-foreground">
            {learningObjectives.map((obj, index) => (
              <li key={index}>{obj}</li>
            ))}
          </ul>
        </CardContent>
      </Card>

      {isPathComplete ? (
        <Card className={`border-green-500 ${bgColorClass} text-center p-8`}>
           <CheckCircle className="h-16 w-16 text-green-600 mx-auto mb-4" />
           <h2 className="text-2xl font-semibold mb-2 text-green-700 dark:text-green-300">Congratulations!</h2>
           <p className="text-muted-foreground mb-6">You have successfully completed the Liquid Network Learning Path.</p>
           <Card className={`mt-4 border-dashed ${primaryColorClass}/50 p-4 max-w-md mx-auto`}>
             <CardHeader className="p-2">
               <CardTitle className={`flex items-center justify-center gap-2 ${primaryColorClass} text-lg`}>
                 <Award className="h-5 w-5"/> Certificate Placeholder
               </CardTitle>
             </CardHeader>
             <CardContent className="p-2">
               <p className="text-sm text-muted-foreground">
                 Support Satoshi Station to unlock your certificate! (Donation link coming soon)
               </p>
             </CardContent>
           </Card>
           <div className="flex justify-center gap-4 mt-4">
             <Button asChild variant="link" className="text-cyan-600">
                <Link href="/learn/bitcoin">Visit Bitcoin Path</Link>
             </Button>
             <Button asChild variant="link" className="text-lightning-purple">
                <Link href="/learn/lightning">Visit Lightning Path</Link>
             </Button>
           </div>
        </Card>
      ) : (
        <div className="grid gap-6 sm:grid-cols-2">
          {liquidModules.map((module) => {
            const firstSectionId = module.sections[0]?.id;
            // The first module (fundamentals) should never be locked, any other module might be
            // depending on the progress state
            const isDynamicallyLocked = firstSectionId 
              ? isSectionLocked('liquid', module.id, firstSectionId) 
              : false; 
              
            return (
              <ModuleCard
                key={module.id}
                module={module}
                isLocked={isDynamicallyLocked} 
                onClick={(id) => handleModuleClick(id, isDynamicallyLocked)}
                accentColor="text-cyan-600"
                hoverColor="hover:border-cyan-600/50"
              />
            );
          })}
        </div>
      )}
    </div>
  );
}