'use client';

import { ModuleLayout } from '@/components/learn/shared/module-layout';
import { LightningSidebar } from '@/components/learn/lightning/lightning-sidebar';
import { ModuleContent } from '@/components/learn/shared/module-content';
import { ModuleMetadata } from '@/components/learn/shared/module-metadata';
import { generateModuleMetadata } from '@/lib/metadata';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Zap, Lock, Route, Anchor, Shield } from 'lucide-react';

const advancedConcepts = [
  {
    title: 'HTLCs Deep Dive',
    description: 'Understanding Hash Time-Locked Contracts in detail.',
    icon: Lock,
    content: [
      'HTLC mechanics',
      'Timelock implementations',
      'Hash preimage verification',
      'Failure scenarios'
    ]
  },
  {
    title: 'Multipath Payments',
    description: 'Learn about splitting payments across multiple routes.',
    icon: Route,
    content: [
      'AMP vs MPP',
      'Route selection',
      'Payment splitting',
      'Success probability'
    ]
  },
  {
    title: 'Submarine Swaps',
    description: 'Explore atomic swaps between on-chain and Lightning.',
    icon: Anchor,
    content: [
      'Swap mechanics',
      'Loop in/out',
      'Liquidity management',
      'Fee considerations'
    ]
  },
  {
    title: 'Security Practices',
    description: 'Advanced security considerations for Lightning nodes.',
    icon: Shield,
    content: [
      'Watchtowers',
      'Channel backups',
      'Key management',
      'Attack vectors'
    ]
  }
];

const metadata = generateModuleMetadata({
  title: 'Advanced Lightning Concepts',
  description: 'Explore advanced Lightning Network concepts and implementations.',
  path: '/learn/lightning/advanced',
  difficulty: 'Advanced',
  timeToComplete: '4 hours',
  prerequisites: ['Lightning Fundamentals', 'Channel Management'],
  keywords: ['lightning network', 'htlc', 'multipath', 'submarine swaps', 'security']
});

export default function LightningAdvancedPage() {
  return (
    <ModuleMetadata metadata={metadata}>
      <ModuleLayout>
        <ModuleContent
          moduleId="lightning-advanced"
          sectionId="advanced"
          checkpoints={5}
        >
          <div className="container py-10">
            <div className="text-center mb-16">
              <Badge variant="outline" className="mb-4 border-[#e44c41]/20 text-[#e44c41]">
                <Zap className="mr-1 h-3 w-3" />
                Advanced Concepts
              </Badge>
              <h1 className="text-4xl font-bold mb-4">Advanced Lightning Concepts</h1>
              <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                Dive deep into advanced Lightning Network concepts, from HTLCs and multipath payments to submarine swaps and security practices.
              </p>
            </div>

            <div className="grid gap-6 md:grid-cols-2">
              {advancedConcepts.map((module) => (
                <Card key={module.title} className="p-6">
                  <div className="mb-4 flex items-center gap-4">
                    <div className="rounded-lg bg-[#e44c41]/10 p-2">
                      <module.icon className="h-6 w-6 text-[#e44c41]" />
                    </div>
                    <h2 className="text-xl font-semibold">{module.title}</h2>
                  </div>
                  <p className="mb-4 text-muted-foreground">{module.description}</p>
                  <ul className="space-y-2">
                    {module.content.map((item) => (
                      <li key={item} className="flex items-center gap-2 text-sm text-muted-foreground">
                        <div className="h-1.5 w-1.5 rounded-full bg-[#e44c41]" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </Card>
              ))}
            </div>
          </div>
        </ModuleContent>
      </ModuleLayout>
    </ModuleMetadata>
  );
}
