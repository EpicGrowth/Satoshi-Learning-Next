import { bitcoinModules, lightningModules } from '@/config/learning-modules';
import SectionContent from './section-content';

// This function is required for static site generation with dynamic routes
export function generateStaticParams() {
  // Generate all combinations of path, module, and section
  const params = [];
  
  // Add Bitcoin module sections
  for (const module of bitcoinModules) {
    for (const section of module.sections) {
      params.push({ 
        path: 'bitcoin', 
        module: module.id,
        section: section.id 
      });
    }
  }
  
  // Add Lightning module sections
  for (const module of lightningModules) {
    for (const section of module.sections) {
      params.push({ 
        path: 'lightning', 
        module: module.id,
        section: section.id 
      });
    }
  }
  
  return params;
}

// Main page component - server component that renders the client components
export default function SectionPage({ params }: { params: { path: string, module: string, section: string } }) {
  return (
    <>
      <DirectContentRouter params={params} />
      <SectionContent />
    </>
  );
}

// Client component to handle redirects
'use client';

import { useRouter } from 'next/navigation';
import { useEffect } from 'react';

function DirectContentRouter({ params }: { params: { path: string, module: string, section: string } }) {
  const router = useRouter();
  const { path, module, section } = params;
  
  useEffect(() => {
    // Known direct content pages with type safety
    const knownDirectPages: Record<string, Record<string, string[]>> = {
      'bitcoin': {
        'bitcoin-fundamentals': ['what-is-bitcoin', 'the-blockchain', 'private-keys-wallets', 'making-transactions'],
        'bitcoin-economics': ['market-cycles', 'supply-demand', 'store-of-value'],
        'bitcoin-technical': ['script-language', 'consensus-rules']
      },
      'lightning': {
        'lightning-fundamentals': ['what-is-lightning', 'channel-basics', 'routing-basics', 'htlc-basics'],
        'lightning-node-operations': ['node-setup', 'security-setup', 'monitoring'],
        'lightning-channel-management': ['opening-channels', 'closing-channels', 'channel-balancing']
      }
    };
    
    // Type-safe way to check if this is a known direct page
    const pathModules = knownDirectPages[path] || {};
    const sections = pathModules[module] || [];
    
    if (sections.includes(section)) {
      // Redirect to the actual page for this content
      const redirectPath = `/learn/${path}/${module.replace(`${path}-`, '')}/${section}`;
      console.log(`[DirectContentRouter] Redirecting to: ${redirectPath}`);
      router.push(redirectPath);
    }
  }, [path, module, section, router]);
  
  return null; // This component doesn't render anything
}
