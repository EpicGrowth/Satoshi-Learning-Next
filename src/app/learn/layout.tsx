'use client';

import { LearningProgressProvider } from '@/contexts/learning-progress-context';

export default function LearnLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <LearningProgressProvider>
      <div className="flex min-h-screen">
        {children}
      </div>
    </LearningProgressProvider>
  );
}
