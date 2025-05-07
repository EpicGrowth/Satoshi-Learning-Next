import React from 'react';
import { ModuleContent } from '@/components/learn/shared/components/module-content';
import { Waves } from 'lucide-react';
import type { ContentSection } from '@/components/learn/shared/types/learning.types';

const sections: ContentSection[] = [
  {
    id: 'submarine',
    title: 'Submarine Swaps',
    icon: Waves,
    content: 'Understanding submarine swaps and their role in the Lightning Network.',
    subsections: [
      {
        title: 'Submarine Swap Fundamentals',
        points: [
          'On-chain to Lightning swaps',
          'Hash Time Locked Contracts (HTLCs)',
          'Atomic transactions',
          'Liquidity management',
        ],
        technicalDetails:
          'Submarine swaps enable trustless exchange between on-chain and Lightning Network bitcoin using HTLCs, improving liquidity management.',
        practicalExample:
          'Using a submarine swap to refill a Lightning channel with on-chain bitcoin.',
      },
    ],
  },
];

import SEO from '@/components/SEO';

export default function SubmarineSwaps() {
  return (
    <>
      <SEO
        title="Submarine Swaps | Lightning Advanced Concepts | Satoshi Learning Path"
        description="Explore submarine swaps and their applications in Lightning Network."
      />
      <ModuleContent
        moduleId="advanced-concepts"
        title="Submarine Swaps"
        description="Learn about trustless exchanges between on-chain and Lightning Network bitcoin."
        sections={sections}
      />
    </>
  );
}
