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
            Welcome to <span className="font-brand whitespace-nowrap" style={{color: '#F7931A', fontWeight: 700, letterSpacing: '0.01em', textShadow: '0 0 1px rgba(247, 147, 26, 0.1)'}}>Satoshi Station</span>'s learning content. This section will be populated with the appropriate learning materials.
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
    // Specialized loading logic for different content structures
    if (path === 'bitcoin' || path === 'lightning') {
      // Determine correct path patterns based on module path
      const contentPaths = [
        // Direct path first - most likely to match in the current structure
        `../../../${path}/${moduleId}/content/${sectionId}`,
        // Alternative path without prefix in module folder name
        `@/app/learn/${path}/${moduleId.replace(`${path}-`, '')}/content/${sectionId}`,
        // Page-based structure (used by some Lightning modules)
        `../../../${path}/${moduleId}/${sectionId}/page`,
        // Fallback direct page path for Lightning direct content
        `../../../${path}/${sectionId}/page`
      ];
      
      // Lightning-specific paths
      if (path === 'lightning') {
        // Add Lightning-specific paths for better content discovery
        contentPaths.push(
          // Special case for lightning node operations
          `../../../${path}/lightning-node-operations/content/${sectionId}`,
          // Special case for lightning channel management
          `../../../${path}/lightning-channel-management/content/${sectionId}`,
          // Special case for lightning fundamentals
          `../../../${path}/lightning-fundamentals/${sectionId}/page`
        );
      }
      
      // Create dynamic component with cascading import attempts
      ContentComponent = dynamic(() => {
        // Start with the first path
        let importPromise = import(contentPaths[0])
          .catch(error => {
            console.log(`Could not load content from path: ${contentPaths[0]}`, error);
            
            // Try each remaining path in sequence using a chain of .catch handlers
            let chainedPromise: Promise<any> = Promise.reject(error);
            
            for (const contentPath of contentPaths.slice(1)) {
              chainedPromise = chainedPromise.catch(err => {
                console.log(`Trying alternate path: ${contentPath}`);
                return import(contentPath);
              });
            }
            
            return chainedPromise;
          })
          .catch(finalError => {
            // All paths failed, return a fallback component
            console.log(`All content loading attempts failed for ${path}/${moduleId}/${sectionId}`, finalError);
            
            return Promise.resolve(() => (
              <div className="prose prose-lg dark:prose-invert max-w-none">
                <p className="text-lg mb-6">{currentSection.description}</p>
                <div className="bg-muted p-6 rounded-lg border border-bitcoin-orange/20">
                  <h3 className="text-xl font-semibold mb-2 text-bitcoin-orange">Content not yet available</h3>
                  <p>The full content for this section is being prepared.</p>
                  <details className="mt-4">
                    <summary className="text-sm text-muted-foreground cursor-pointer">Technical Details</summary>
                    <p className="text-xs mt-2 text-muted-foreground">Path: {path}/{moduleId}/{sectionId}</p>
                  </details>
                </div>
              </div>
            ));
          });
          
        return importPromise;
      }, {
        ssr: false,
        loading: () => (
          <div className="flex justify-center items-center py-8">
            <div className="animate-pulse flex flex-col items-center">
              <div className="h-4 w-24 bg-muted rounded mb-2.5"></div>
              <div className="h-2 w-16 bg-muted/50 rounded"></div>
            </div>
          </div>
        )
      });
    } else {
      // Fallback for unknown paths
      ContentComponent = () => (
        <div className="prose prose-lg dark:prose-invert max-w-none">
          <p className="text-lg mb-6">{currentSection.description}</p>
          <div className="bg-muted p-6 rounded-lg border border-bitcoin-orange/20">
            <h3 className="text-xl font-semibold mb-2 text-bitcoin-orange">Content not yet available</h3>
            <p>The full content for this section is being prepared.</p>
          </div>
        </div>
      );
    }
  } catch (error) {
    ContentComponent = () => (
      <div className="bg-muted p-6 rounded-lg border border-red-500/20">
        <h3 className="text-xl font-semibold mb-2 text-red-500">Content error</h3>
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
