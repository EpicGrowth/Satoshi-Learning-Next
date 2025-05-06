'use client';

import { useParams } from 'next/navigation';
import { bitcoinModules, lightningModules } from '@/config/learning-modules';

export default function SectionContent() {
  const params = useParams();
  const path = params.path as string;
  const moduleId = params.module as string;
  const sectionId = params.section as string;

  const modules = path === 'bitcoin' ? bitcoinModules : lightningModules;
  const currentModule = modules.find((m) => m.id === moduleId);
  const currentSection = currentModule?.sections.find((s) => s.id === sectionId);

  if (!currentModule || !currentSection) {
    return (
      <div className="flex h-full items-center justify-center">
        <p className="text-lg text-muted-foreground">Section not found</p>
      </div>
    );
  }

  // Ensure "Satoshi Station" text follows brand requirements:
  // - Exo 2 font (weight 700)
  // - #FF523C orange color
  // - whitespace-nowrap to prevent wrapping

  return (
    <div className="container mx-auto p-8">
      <h1 className="mb-6 text-3xl font-bold">{currentSection.title}</h1>

      {/* Placeholder content for section page */}
      <div className="prose prose-lg dark:prose-invert max-w-none">
        <p className="text-lg mb-6">{currentSection.description}</p>
        
        {/* This demonstrates our brand styling adherence */}
        <p className="mb-6">
          Welcome to <span className="font-brand whitespace-nowrap" style={{color: '#FF523C', fontWeight: 700, letterSpacing: '0.01em', textShadow: '0 0 1px rgba(255, 82, 60, 0.1)'}}>Satoshi Station</span>'s learning content. This section will be populated with the appropriate learning materials.
        </p>
        
        <div className="bg-muted p-6 rounded-lg">
          <h3 className="text-xl font-semibold mb-2">Content coming soon</h3>
          <p>The full content for this section is being migrated from the original site.</p>
        </div>
      </div>
    </div>
  );
}
