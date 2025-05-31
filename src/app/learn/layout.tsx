'use client';

import { LearningProgressProvider } from '@/contexts/learning-progress-context';
import ErrorBoundary from '@/components/layout/ErrorBoundary';

export default function LearnLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <LearningProgressProvider>
      <ErrorBoundary fallbackMessage="A critical error occurred while trying to load this learning page. Please try refreshing or contact support.">
        <div className="flex min-h-screen"> {/* This div is the main container for children */}
          {children}
        </div>
      </ErrorBoundary>
    </LearningProgressProvider>
  );
}
