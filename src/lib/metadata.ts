import { ModuleMetadata } from '@/components/learn/shared/module-metadata';

interface GenerateMetadataParams {
  title: string;
  description: string;
  path: string;
  difficulty: ModuleMetadata['difficulty'];
  timeToComplete: string;
  prerequisites: string[];
  keywords?: string[];
  lastUpdated?: string;
}

export function generateModuleMetadata({
  title,
  description,
  path,
  difficulty,
  timeToComplete,
  prerequisites,
  keywords = [],
  lastUpdated = new Date().toISOString(),
}: GenerateMetadataParams): ModuleMetadata {
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'https://satoshi-learning.com';
  const canonical = `${baseUrl}${path}`;
  const ogImage = `${baseUrl}/api/og?title=${encodeURIComponent(title)}`;

  // Combine custom keywords with default ones
  const defaultKeywords = [
    'bitcoin',
    'lightning network',
    'cryptocurrency',
    'blockchain',
    'education',
    'learning',
    difficulty.toLowerCase(),
  ];

  return {
    title,
    description,
    keywords: [...new Set([...keywords, ...defaultKeywords])],
    canonical,
    ogImage,
    lastUpdated,
    difficulty,
    timeToComplete,
    prerequisites,
  };
}

// Example usage for a module:
/*
const metadata = generateModuleMetadata({
  title: 'Hardware Security in Bitcoin',
  description: 'Learn about hardware wallets, secure elements, and best practices for maintaining physical security of your Bitcoin devices.',
  path: '/learn/bitcoin/security/hardware-security',
  difficulty: 'Intermediate',
  timeToComplete: '45 minutes',
  prerequisites: ['Basic Bitcoin Knowledge', 'Private Key Management'],
  keywords: ['hardware wallet', 'secure element', 'physical security', 'device security'],
});
*/
