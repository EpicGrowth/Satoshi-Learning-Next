'use client';

import { LightningSidebar } from '@/components/learn/lightning/lightning-sidebar';
import ErrorBoundary from '@/components/layout/ErrorBoundary'; // Added import
// Removed: import { MobileNav } from '@/components/learn/shared/mobile-nav';

export default function LightningLearningLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex min-h-screen flex-col">
      {/* The div that previously wrapped MobileNav has been removed */}
      
      <div className="flex-1 lg:grid lg:grid-cols-[300px_1fr] xl:grid-cols-[350px_1fr]">
        {/* This aside is the desktop sidebar, already correctly configured */}
        <aside className="fixed left-0 top-14 hidden h-[calc(100vh-3.5rem)] w-[300px] border-r lg:sticky lg:block xl:w-[350px]">
          <LightningSidebar />
        </aside>

        <main className="w-full pt-[3.5rem] lg:pt-0">
          <div className="mx-auto max-w-4xl space-y-8 px-4 py-6 lg:px-8 lg:py-8">
            <ErrorBoundary fallbackMessage="There was an error loading the content for this Lightning learning page. Please try again or contact support if the issue persists.">
              {children}
            </ErrorBoundary>
          </div>
        </main>
      </div>
    </div>
  );
}
