'use client';

import { BitcoinSidebar } from '@/components/learn/bitcoin/bitcoin-sidebar';
import { MobileLearningSidebar } from '@/components/learn/shared/mobile-learning-sidebar';
import { MobileProgressTracker } from '@/components/learn/shared/mobile-progress-tracker';
import { bitcoinModules } from '@/config/learning-modules';

export default function BitcoinLearningLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex min-h-screen flex-col">
      {/* Mobile learning sidebar - only visible on mobile */}
      <MobileLearningSidebar modules={bitcoinModules} pathPrefix="bitcoin" />
      
      {/* Mobile progress tracker - only visible on mobile */}
      <MobileProgressTracker modules={bitcoinModules} pathPrefix="bitcoin" />
      
      <div className="flex-1 lg:grid lg:grid-cols-[300px_1fr] xl:grid-cols-[350px_1fr]">
        {/* Desktop sidebar - hidden on mobile */}
        <aside className="fixed left-0 top-14 hidden h-[calc(100vh-3.5rem)] w-[300px] border-r lg:sticky lg:block xl:w-[350px]">
          <BitcoinSidebar />
        </aside>

        <main className="w-full pt-[3.5rem] lg:pt-0 mobile-safe">
          <div className="mx-auto max-w-4xl space-y-8 px-4 py-6 lg:px-8 lg:py-8">
            {children}
          </div>
        </main>
      </div>
    </div>
  );
}
