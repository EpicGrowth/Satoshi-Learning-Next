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
  
  // Check for special implemented content sections
  useEffect(() => {
    // This checks if we're running in the browser environment
    if (typeof window !== 'undefined') {
      try {
        // Handle available specific content
        if (path === 'bitcoin' && moduleId === 'bitcoin-fundamentals' && sectionId === 'what-is-bitcoin') {
          setIsContentAvailable(true);
          // Removed redirect that was causing routing inconsistencies between environments
        }
        // Handle Lightning content which is organized differently
        else if (path === 'lightning') {
          // For Lightning, look in the module's content folder
          const availableLightningContent = [
            'channel-balancing', 'channel-capacity', 'closing-channels', 'opening-channels',  // channel management
            'backups', 'basic-configuration', 'channel-management', 'maintenance-tasks',
            'monitoring', 'node-setup', 'security-setup',  // node operations
            'htlc-deep-dive', 'multipath-payments', 'routing', 'security-practices',
            'submarine-swaps', 'watchtowers'  // advanced concepts
          ];

          if (availableLightningContent.includes(sectionId)) {
            setIsContentAvailable(true);
          } else {
            setIsContentAvailable(false);
          }
        } else {
          setIsContentAvailable(false);
        }
      } catch (error) {
        console.error("Error checking content availability:", error);
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

  // Handle content paths based on what's available in the repository
  // Note: The way content is organized has changed, so we need to handle different paths
  let ContentComponent;

  try {
    // Specific handling for different module types
    if (path === 'lightning') {
      // Lightning content may be in the module directory under content folder
      ContentComponent = dynamic(() =>
        import(`../../../${path}/${moduleId}/content/${sectionId}`).catch(() => {
          console.log('Could not load lightning content for', sectionId);
          return Promise.resolve(() => (
            <div className="bg-muted p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-2">Content loading error</h3>
              <p>The content for this section couldn't be loaded. Please try another section.</p>
            </div>
          ));
        }), {
        ssr: false,
        loading: () => <p>Loading content...</p>
      });
    } else {
      // Default fallback for other paths
      ContentComponent = () => (
        <div className="prose prose-lg dark:prose-invert max-w-none">
          <p className="text-lg mb-6">{currentSection.description}</p>
          <div className="bg-muted p-6 rounded-lg">
            <h3 className="text-xl font-semibold mb-2">Content not yet available</h3>
            <p>The full content for this section is being prepared.</p>
          </div>
        </div>
      );
    }
  } catch (error) {
    ContentComponent = () => (
      <div className="bg-muted p-6 rounded-lg">
        <h3 className="text-xl font-semibold mb-2">Content error</h3>
        <p>There was an error loading this content. Please try another section.</p>
      </div>
    );
  }

  return (
    <div className="container mx-auto p-8">
      <h1 className="mb-6 text-3xl font-bold">{currentSection.title}</h1>
      <ContentComponent />
    </div>
  );
}
