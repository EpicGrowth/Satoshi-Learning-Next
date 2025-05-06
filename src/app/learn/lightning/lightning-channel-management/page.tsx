'use client';

import { ModuleLayout } from '@/components/learn/shared/module-layout';
import { LightningSidebar } from '@/components/learn/lightning/lightning-sidebar';
import { ModuleContent } from '@/components/learn/shared/module-content';
import { ModuleMetadata } from '@/components/learn/shared/module-metadata';
import { generateModuleMetadata } from '@/lib/metadata';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Zap, ArrowLeftRight, BarChart2, Power } from 'lucide-react';

const channelManagement = [
  {
    title: 'Channel Capacity',
    description: 'Understanding Lightning Network channel capacity and liquidity.',
    icon: BarChart2,
    content: [
      'Channel capacity basics',
      'Inbound vs outbound liquidity',
      'Capacity planning',
      'Channel sizing strategies'
    ]
  },
  {
    title: 'Opening Channels',
    description: 'Learn how to open Lightning Network channels effectively.',
    icon: Power,
    content: [
      'Channel opening process',
      'Selecting peers',
      'Funding transactions',
      'Channel confirmation'
    ]
  },
  {
    title: 'Channel Balancing',
    description: 'Techniques for maintaining optimal channel liquidity.',
    icon: ArrowLeftRight,
    content: [
      'Rebalancing strategies',
      'Circular rebalancing',
      'Fee management',
      'Automated tools'
    ]
  },
  {
    title: 'Closing Channels',
    description: 'Understanding different channel closure scenarios.',
    icon: Power,
    content: [
      'Cooperative closures',
      'Force closures',
      'Fee considerations',
      'Channel backup strategies'
    ]
  }
];

const metadata = generateModuleMetadata({
  title: 'Lightning Channel Management',
  description: 'Master the art of managing Lightning Network channels effectively.',
  path: '/learn/lightning/channels',
  difficulty: 'Intermediate',
  timeToComplete: '3 hours',
  prerequisites: ['Lightning Fundamentals'],
  keywords: ['lightning network', 'channels', 'liquidity', 'capacity', 'management']
});

export default function LightningChannelsPage() {
  return (
    <ModuleMetadata metadata={metadata}>
      <ModuleLayout>
        <ModuleContent
          moduleId="lightning-channels"
          sectionId="channels"
          checkpoints={4}
        >
          <div className="container py-10">
            <div className="text-center mb-16">
              <Badge variant="outline" className="mb-4 border-[#e44c41]/20 text-[#e44c41]">
                <Zap className="mr-1 h-3 w-3" />
                Channel Management
              </Badge>
              <h1 className="text-4xl font-bold mb-4">Lightning Channel Management</h1>
              <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                Learn how to effectively manage Lightning Network channels, from opening and balancing to monitoring and closing.
              </p>
            </div>

            <div className="grid gap-6 md:grid-cols-2">
              {channelManagement.map((module) => (
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
