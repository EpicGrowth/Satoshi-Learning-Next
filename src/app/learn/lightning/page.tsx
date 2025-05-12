'use client';

import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { ModuleCard } from '@/components/learn/shared/module-card';
import { useLearningProgress } from '@/contexts/learning-progress-context';
import { lightningModules } from '@/config/learning-modules'; 
import { Button } from '@/components/ui/button';
import { Trash2, PlayCircle, CheckCircle, Award } from 'lucide-react'; 
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

export default function LightningLearningPath() {
  const router = useRouter();
  const { progress, isSectionLocked, resetProgress, getModuleProgress } = useLearningProgress();

  let nextSectionUrl: string | null = null;
  const lastModuleId = lightningModules[lightningModules.length - 1].id;
  const isPathComplete = !!getModuleProgress('lightning', lastModuleId)?.completedAt;

  if (!isPathComplete) {
    for (const module of lightningModules) {
      for (const section of module.sections) {
        const isLocked = isSectionLocked('lightning', module.id, section.id);
        const isCompleted = !!progress.lightning?.[module.id]?.completedSections?.[section.id]?.completedAt;
        if (!isLocked && !isCompleted) {
          // Extract the module part by removing the 'lightning-' prefix
          const pathSegment = module.id.replace('lightning-', '');
          nextSectionUrl = `/learn/lightning/${pathSegment}/${section.id}`;
          break; 
        }
      }
      if (nextSectionUrl) break; 
    }
  }

  const handleModuleClick = (moduleId: string, isDynamicallyLocked: boolean) => {
    const module = lightningModules.find(m => m.id === moduleId);
    if (!module) return;
    if (isDynamicallyLocked) return;

    // Extract the module part from the moduleId by removing the 'lightning-' prefix
    const pathSegment = moduleId.replace('lightning-', '');
    
    const firstSection = module.sections[0];
    if (firstSection) {
      router.push(`/learn/lightning/${pathSegment}/${firstSection.id}`);
    }
  };

  const handleReset = () => {
    if (window.confirm('Are you sure you want to reset all Lightning Network learning progress? This cannot be undone.')) {
      resetProgress('lightning'); 
      router.refresh(); 
    }
  };

  const learningObjectives = [
    'Grasp the fundamentals of the Lightning Network and its purpose.',
    'Understand payment channels, HTLCs, and onion routing.',
    'Learn to set up, manage, and monitor a Lightning node.',
    'Master channel opening, balancing, and closing techniques.',
    'Explore payment routing, fee management, and path optimization.',
    'Understand security considerations for nodes and channels.',
    'Discover advanced concepts like watchtowers and atomic swaps.'
  ];

  const primaryColorClass = 'text-lightning-purple'; 
  const borderColorClass = 'border-lightning-purple/20';
  const bgColorClass = 'bg-lightning-purple/5';

  return (
    <div className="container py-8 space-y-8">
      <div className="flex items-center justify-between flex-wrap gap-4">
        <div>
          <h1 className={`text-4xl font-extrabold tracking-tight scroll-m-20 ${primaryColorClass}`}>
            Lightning Network Path
          </h1>
          <p className="mt-2 text-muted-foreground">
            Dive deep into Bitcoin's Layer 2 scaling solution.
          </p>
        </div>
        <div className="flex items-center gap-2">
          {!isPathComplete && nextSectionUrl && (
            <Button asChild className="bg-lightning-purple hover:bg-lightning-purple/80 text-white"> 
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
           <p className="text-muted-foreground mb-6">You have successfully completed the Lightning Network Learning Path.</p>
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
           <Button asChild variant="link" className={`mt-4 ${primaryColorClass}`}>
              <Link href="/learn/bitcoin">Revisit the Bitcoin Path</Link>
           </Button>
        </Card>
      ) : (
        <div className="grid gap-6 sm:grid-cols-2">
          {lightningModules.map((module) => {
            const firstSectionId = module.sections[0]?.id;
            // The first module (fundamentals) should never be locked, any other module might be
            // depending on the progress state
            const isDynamicallyLocked = firstSectionId 
              ? isSectionLocked('lightning', module.id, firstSectionId) 
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
