import React from 'react';
import Link from 'next/link';
import { Bitcoin, ArrowLeft, ArrowRight, CheckCircle, Github } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useLearningProgress } from '@/contexts/learning-progress-context';
import { Callout } from '@/components/learn/shared/callout';

interface ArticleLayoutProps {
  children: React.ReactNode;
  title: string;
  description?: string;
  path: string;
  module: string;
  lesson: string;
  prevLesson?: {
    title: string;
    href: string;
  };
  nextLesson?: {
    title: string;
    href: string;
  };
  sourceUrl?: string;
  updatedAt?: string;
}

export function ArticleLayout({
  children,
  title,
  description,
  path,
  module,
  lesson,
  prevLesson,
  nextLesson,
  sourceUrl,
  updatedAt,
}: ArticleLayoutProps) {
  const { getProgress, markComplete } = useLearningProgress();
  const isComplete = getProgress(`${path}:${module}:${lesson}`);
  
  const handleMarkComplete = () => {
    markComplete(`${path}:${module}:${lesson}`);
  };
  
  return (
    <div className="container py-8 md:py-12">
      <div className="mx-auto max-w-3xl">
        <div className="mb-8">
          <Link
            href={`/learn/${path}`}
            className="inline-flex items-center text-sm text-muted-foreground hover:text-foreground mb-4"
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Learning Path
          </Link>
          
          <h1 className="font-display text-3xl md:text-4xl font-bold mb-4">{title}</h1>
          {description && (
            <p className="text-lg text-muted-foreground">{description}</p>
          )}
          
          {updatedAt && (
            <p className="text-sm text-muted-foreground mt-4">
              Last updated: {new Date(updatedAt).toLocaleDateString()}
            </p>
          )}
        </div>
        
        <div className="prose max-w-none dark:prose-invert prose-headings:font-display prose-headings:font-bold
          prose-a:text-bitcoin-orange prose-a:no-underline hover:prose-a:underline
          prose-pre:bg-code-bg prose-pre:text-code-text
          prose-code:bg-muted prose-code:text-foreground prose-code:font-mono">
          {children}
        </div>
        
        <div className="mt-12 pt-4 border-t">
          <div className="flex items-center justify-between mb-8">
            <Button
              variant="outline"
              size="sm"
              onClick={handleMarkComplete}
              disabled={isComplete}
              className={isComplete ? 'bg-green-500/10 border-green-500/30 text-green-600 dark:text-green-400' : ''}
            >
              {isComplete ? (
                <>
                  <CheckCircle className="mr-2 h-4 w-4" />
                  Completed
                </>
              ) : (
                <>
                  <CheckCircle className="mr-2 h-4 w-4" />
                  Mark as Complete
                </>
              )}
            </Button>
            
            {sourceUrl && (
              <a 
                href={sourceUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center text-sm text-muted-foreground hover:text-foreground"
              >
                <Github className="mr-2 h-4 w-4" />
                View Source
              </a>
            )}
          </div>
          
          <div className="flex flex-col sm:flex-row justify-between gap-4">
            {prevLesson ? (
              <Button variant="outline" className="justify-start" asChild>
                <Link href={prevLesson.href}>
                  <ArrowLeft className="mr-2 h-4 w-4" />
                  <div className="flex flex-col items-start">
                    <span className="text-xs text-muted-foreground">Previous</span>
                    <span className="text-sm">{prevLesson.title}</span>
                  </div>
                </Link>
              </Button>
            ) : (
              <div></div>
            )}
            
            {nextLesson && (
              <Button variant="outline" className="justify-end sm:ml-auto" asChild>
                <Link href={nextLesson.href}>
                  <div className="flex flex-col items-end">
                    <span className="text-xs text-muted-foreground">Next</span>
                    <span className="text-sm">{nextLesson.title}</span>
                  </div>
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            )}
          </div>
          
          <div className="mt-8">
            <Callout type="bitcoin" title="Don't Trust, Verify">
              <p>
                Remember that Bitcoin's power comes from verification, not trust. Apply critical thinking to everything you read, including this article.
              </p>
            </Callout>
          </div>
        </div>
      </div>
    </div>
  );
}
