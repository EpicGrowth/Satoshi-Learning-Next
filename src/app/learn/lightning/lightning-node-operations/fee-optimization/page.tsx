'use client';

import { ModuleLayout } from '@/components/learn/shared/module-layout';
import { ModuleMetadata } from '@/components/learn/shared/module-metadata';
import { generateModuleMetadata } from '@/lib/metadata';
import { ModuleContent } from '@/components/learn/shared/module-content';
import { LightningSidebar } from '@/components/learn/lightning/lightning-sidebar';
import { Card } from '@/components/ui/card';
import { Coins, TrendingUp, Scale, LineChart } from 'lucide-react';

const metadata = generateModuleMetadata({
  title: 'Lightning Network Fee Optimization',
  description: 'Master Lightning Network fee strategies to maximize routing revenue while maintaining competitive rates. Learn advanced fee management techniques.',
  path: '/learn/lightning/node/fee-optimization',
  difficulty: 'Intermediate',
  timeToComplete: '45 minutes',
  prerequisites: ['Lightning Node Setup', 'Channel Management Basics'],
  keywords: ['lightning network', 'routing fees', 'node operation', 'fee management', 'revenue optimization'],
});

export default function FeeOptimization() {
  return (
    <ModuleMetadata metadata={metadata}>
    <ModuleLayout>
      <ModuleContent
        moduleId="lightning-node-operations"
        sectionId="fee-optimization"
        checkpoints={3}
      >
        {/* Introduction */}
        <div className="mb-8">
          <h2 className="mb-4 text-2xl font-bold">Fee Optimization</h2>
          <p className="text-muted-foreground">
            Learn how to optimize your node's fee strategy to maximize routing 
            revenue while maintaining competitive rates and high forwarding 
            success rates.
          </p>
        </div>

        {/* Fee Structure */}
        <Card className="mb-8 p-6">
          <h3 className="mb-4 text-lg font-medium flex items-center gap-2">
            <Coins className="h-5 w-5" />
            Understanding Fee Structure
          </h3>
          <div className="space-y-4">
            <div className="grid gap-4 sm:grid-cols-2">
              <div className="p-4 rounded-lg bg-muted/50">
                <h4 className="font-medium mb-2">Base Fee</h4>
                <ul className="list-disc list-inside space-y-1 text-sm text-muted-foreground">
                  <li>Fixed fee per forward</li>
                  <li>Covers operational costs</li>
                  <li>Typically 1-1000 sats</li>
                  <li>Set per channel</li>
                </ul>
              </div>
              <div className="p-4 rounded-lg bg-muted/50">
                <h4 className="font-medium mb-2">Fee Rate</h4>
                <ul className="list-disc list-inside space-y-1 text-sm text-muted-foreground">
                  <li>Percentage of amount</li>
                  <li>Risk compensation</li>
                  <li>Usually 0.0001% - 0.1%</li>
                  <li>Market-driven</li>
                </ul>
              </div>
            </div>
            <div className="mt-4 p-4 bg-muted/50 rounded-lg">
              <h4 className="font-medium mb-2">Fee Components</h4>
              <p className="text-sm text-muted-foreground">
                Total Fee = Base Fee + (Amount × Fee Rate)
                Example: 1 sat + (1000 sats × 0.001) = 2 sats
              </p>
            </div>
          </div>
        </Card>

        {/* Market Analysis */}
        <Card className="mb-8 p-6">
          <h3 className="mb-4 text-lg font-medium flex items-center gap-2">
            <TrendingUp className="h-5 w-5" />
            Market Analysis
          </h3>
          <div className="space-y-4">
            <p className="text-muted-foreground">
              Consider these factors:
            </p>
            <ul className="list-disc list-inside space-y-2 text-muted-foreground">
              <li>Competitor fee policies</li>
              <li>Channel capacity utilization</li>
              <li>Payment flow patterns</li>
              <li>Network position</li>
            </ul>
            <div className="mt-4 grid gap-4 sm:grid-cols-2">
              <div className="p-4 rounded-lg bg-muted/50">
                <h4 className="font-medium mb-2">Market Research</h4>
                <p className="text-sm text-muted-foreground">
                  Tools for analysis:
                  • Terminal web
                  • 1ML statistics
                  • Amboss Space
                  • Network visualizers
                </p>
              </div>
              <div className="p-4 rounded-lg bg-muted/50">
                <h4 className="font-medium mb-2">Competition</h4>
                <p className="text-sm text-muted-foreground">
                  Monitor:
                  • Similar capacity nodes
                  • Regional competitors
                  • Major routing nodes
                  • Fee trends
                </p>
              </div>
            </div>
          </div>
        </Card>

        {/* Optimization Strategies */}
        <Card className="mb-8 p-6">
          <h3 className="mb-4 text-lg font-medium flex items-center gap-2">
            <Scale className="h-5 w-5" />
            Optimization Strategies
          </h3>
          <div className="space-y-4">
            <div className="grid gap-4 sm:grid-cols-2">
              <div className="p-4 rounded-lg bg-muted/50">
                <h4 className="font-medium mb-2">Dynamic Fees</h4>
                <ul className="list-disc list-inside space-y-1 text-sm text-muted-foreground">
                  <li>Adjust based on demand</li>
                  <li>Balance utilization</li>
                  <li>Time-based variation</li>
                  <li>Flow-based pricing</li>
                </ul>
              </div>
              <div className="p-4 rounded-lg bg-muted/50">
                <h4 className="font-medium mb-2">Channel Strategy</h4>
                <ul className="list-disc list-inside space-y-1 text-sm text-muted-foreground">
                  <li>Size-based fees</li>
                  <li>Direction pricing</li>
                  <li>Peer quality factors</li>
                  <li>Rebalancing costs</li>
                </ul>
              </div>
            </div>
            <div className="mt-4 p-4 bg-muted/50 rounded-lg border-l-4 border-warning">
              <h4 className="font-medium mb-2">Important Considerations</h4>
              <p className="text-sm text-muted-foreground">
                Balance fee revenue with forwarding success rate. High fees may 
                generate more revenue per forward but reduce total forwards.
              </p>
            </div>
          </div>
        </Card>

        {/* Performance Monitoring */}
        <Card className="p-6">
          <h3 className="mb-4 text-lg font-medium flex items-center gap-2">
            <LineChart className="h-5 w-5" />
            Performance Monitoring
          </h3>
          <div className="space-y-4">
            <div className="grid gap-6 sm:grid-cols-2">
              <div className="space-y-2">
                <h4 className="font-medium">Key Metrics</h4>
                <ul className="list-disc list-inside space-y-1 text-sm text-muted-foreground">
                  <li>Forward success rate</li>
                  <li>Revenue per forward</li>
                  <li>Channel utilization</li>
                  <li>Competitive position</li>
                </ul>
              </div>
              <div className="space-y-2">
                <h4 className="font-medium">Adjustments</h4>
                <ul className="list-disc list-inside space-y-1 text-sm text-muted-foreground">
                  <li>Regular fee reviews</li>
                  <li>A/B testing</li>
                  <li>Market adaptation</li>
                  <li>Strategy refinement</li>
                </ul>
              </div>
            </div>

            <div className="mt-4 p-4 bg-muted/50 rounded-lg">
              <h4 className="font-medium mb-2">Optimization Tools</h4>
              <ul className="list-disc list-inside space-y-2 text-sm text-muted-foreground">
                <li>Charge-lnd: Automated fee adjustment</li>
                <li>Balance of Satoshis: Fee analysis</li>
                <li>RTL: Fee management interface</li>
                <li>Custom scripts for automation</li>
              </ul>
            </div>
          </div>
        </Card>
      </ModuleContent>
    </ModuleLayout>
    </ModuleMetadata>
  );
}
