'use client';

import { useRouter } from 'next/navigation';
import { useEffect } from 'react';

// Client component to handle redirects
export default function ContentRedirect({ params }: { params: { path: string, module: string, section: string } }) {
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
      console.log(`[ContentRedirect] Redirecting to: ${redirectPath}`);
      router.push(redirectPath);
    }
  }, [path, module, section, router]);
  
  return null; // This component doesn't render anything
}
