'use client';

import { useRouter } from 'next/navigation';
import Link from 'next/link'; 
import { ModuleCard } from '@/components/learn/shared/module-card';
import { useLearningProgress } from '@/contexts/learning-progress-context';
import { bitcoinModules } from '@/config/learning-modules';
import { Button } from '@/components/ui/button';
import { Trash2, PlayCircle, CheckCircle, Award } from 'lucide-react'; 
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'; 

export default function BitcoinLearningPath() {
  const router = useRouter();
  const { progress, isSectionLocked, resetProgress, getModuleProgress } = useLearningProgress();

  let nextSectionUrl: string | null = null;
  const lastModuleId = bitcoinModules[bitcoinModules.length - 1].id;
  const isPathComplete = !!getModuleProgress('bitcoin', lastModuleId)?.completedAt;

  if (!isPathComplete) {
    for (const module of bitcoinModules) {
      const moduleId = module.id.includes('-') ? module.id : `bitcoin-${module.id}`;
      for (const section of module.sections) {
        const isLocked = isSectionLocked('bitcoin', moduleId, section.id);
        const isCompleted = !!progress.bitcoin?.[moduleId]?.completedSections?.[section.id]?.completedAt;
        if (!isLocked && !isCompleted) {
          // Use the module ID without the prefix in the URL
          const urlModuleId = moduleId.replace('bitcoin-', '');
          nextSectionUrl = `/learn/bitcoin/${urlModuleId}/${section.id}`;
          break;
        }
      }
      if (nextSectionUrl) break;
    }
  }

  const handleModuleClick = (moduleId: string, isDynamicallyLocked: boolean) => {
    const module = bitcoinModules.find(m => m.id === moduleId);
    if (!module) return;

    if (isDynamicallyLocked) return;

    const firstSection = module.sections[0];
    if (firstSection) {
      // Use the full module ID for consistent routing
      router.push(`/learn/bitcoin/${moduleId}/${firstSection.id}`);
    }
  };

  const handleReset = () => {
    if (window.confirm('Are you sure you want to reset all Bitcoin learning progress? This cannot be undone.')) {
      resetProgress('bitcoin');
      router.refresh(); 
    }
  };

  const learningObjectives = [
    'Understand the core concepts and history of Bitcoin.',
    'Learn how the Blockchain works and its key components.',
    'Master secure Bitcoin storage using private keys and wallets.',
    'Analyze Bitcoin\'s unique economic model and monetary policy.',
    'Explore the game theory and market dynamics driving Bitcoin adoption.',
    'Gain insights into the technical aspects like scripting, mining, and consensus.',
  ];

  return (
    <div className="container py-8 space-y-8">
      <div className="flex items-center justify-between flex-wrap gap-4">
        <div>
          <h1 className="text-4xl font-extrabold tracking-tight scroll-m-20 text-primary">
            Bitcoin Learning Path
          </h1>
          <p className="mt-2 text-muted-foreground">
            Master Bitcoin from fundamentals to advanced technicals.
          </p>
        </div>
        <div className="flex items-center gap-2">
          {!isPathComplete && nextSectionUrl && (
            <Button asChild>
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

      <Card className="bg-muted/30 border-primary/20">
        <CardHeader>
          <CardTitle className="text-lg text-primary">What You'll Learn</CardTitle>
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
        <Card className="border-green-500 bg-green-50 dark:bg-green-900/20 text-center p-8">
           <CheckCircle className="h-16 w-16 text-green-600 mx-auto mb-4" />
           <h2 className="text-2xl font-semibold mb-2 text-green-700 dark:text-green-300">Congratulations!</h2>
           <p className="text-muted-foreground mb-6">You have successfully completed the Bitcoin Learning Path.</p>
           <Card className="mt-4 border-dashed border-primary/50 p-4 max-w-md mx-auto">
             <CardHeader className="p-2">
               <CardTitle className="flex items-center justify-center gap-2 text-primary text-lg">
                 <Award className="h-5 w-5"/> Certificate Placeholder
               </CardTitle>
             </CardHeader>
             <CardContent className="p-2">
               <p className="text-sm text-muted-foreground">
                 Support Satoshi Station to unlock your certificate! (Donation link coming soon)
               </p>
             </CardContent>
           </Card>
           <Button asChild variant="link" className="mt-4 text-primary">
              <Link href="/learn/lightning">Start the Lightning Network Path next!</Link>
           </Button>
        </Card>
      ) : (
        <div className="grid gap-6 sm:grid-cols-2">
          {bitcoinModules.map((module) => {
            const firstSectionId = module.sections[0]?.id;
            const isDynamicallyLocked = module.id !== 'fundamentals' && firstSectionId 
              ? isSectionLocked('bitcoin', module.id, firstSectionId) 
              : false; 
              
            return (
              <ModuleCard
                key={module.id}
                module={module}
                isLocked={isDynamicallyLocked} 
                onClick={(id) => handleModuleClick(id, isDynamicallyLocked)}
              />
            );
          })}
        </div>
      )}
    </div>
  );
}
