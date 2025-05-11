'use client';

import { useParams, useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import { bitcoinModules, lightningModules } from '@/config/learning-modules';
import dynamic from 'next/dynamic';

export default function SectionContent() {
  const params = useParams();
  const router = useRouter();
  const path = params.path as string;
  const moduleId = params.module as string;
  const sectionId = params.section as string;
  const [isContentAvailable, setIsContentAvailable] = useState(false);

  const modules = path === 'bitcoin' ? bitcoinModules : lightningModules;
  const currentModule = modules.find((m) => m.id === moduleId);
  const currentSection = currentModule?.sections.find((s) => s.id === sectionId);
  
  // Try to dynamically import the specific content component if it exists
  useEffect(() => {
    // This checks if we're running in the browser environment
    if (typeof window !== 'undefined') {
      try {
        // Mark special implemented content sections as available
        if (path === 'bitcoin' && moduleId === 'bitcoin-fundamentals' && sectionId === 'what-is-bitcoin') {
          setIsContentAvailable(true);
          router.push(`/learn/${path}/${moduleId.replace('bitcoin-', '')}/${sectionId}`);
        } else {
          setIsContentAvailable(false);
        }
      } catch (error) {
        setIsContentAvailable(false);
      }
    }
  }, [path, moduleId, sectionId, router]);

  if (!currentModule || !currentSection) {
    return (
      <div className="flex h-full items-center justify-center">
        <p className="text-lg text-muted-foreground">Section not found</p>
      </div>
    );
  }

  // If we're still checking or no specific implementation exists, show placeholder
  if (!isContentAvailable) {
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

  // If specific implementation exists, render it
  const ContentComponent = dynamic(() => import(`../../content/${path}/${moduleId}/${sectionId}`), {
    ssr: false,
  });

  return (
    <div className="container mx-auto p-8">
      <h1 className="mb-6 text-3xl font-bold">{currentSection.title}</h1>
      <ContentComponent />
    </div>
  );
}
