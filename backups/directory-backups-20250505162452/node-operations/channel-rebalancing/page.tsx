'use client';

import { ModuleLayout } from '@/components/learn/shared/module-layout';
import { ModuleContent } from '@/components/learn/shared/module-content';
import { LightningSidebar } from '@/components/learn/lightning/lightning-sidebar';
import { Card } from '@/components/ui/card';
import { Scale, ArrowLeftRight, LineChart, Settings } from 'lucide-react';

export default function ChannelRebalancing() {
  return (
    <ModuleLayout>
      <ModuleContent
        moduleId="lightning-node"
        sectionId="channel-rebalancing"
        checkpoints={3}
      >
        {/* Introduction */}
        <div className="mb-8">
          <h2 className="mb-4 text-2xl font-bold">Channel Rebalancing</h2>
          <p className="text-muted-foreground">
            Learn how to effectively manage channel liquidity through rebalancing 
            strategies. Optimize your node's routing capacity and maintain 
            healthy channel states.
          </p>
        </div>

        {/* Understanding Rebalancing */}
        <Card className="mb-8 p-6">
          <h3 className="mb-4 text-lg font-medium flex items-center gap-2">
            <Scale className="h-5 w-5" />
            Understanding Rebalancing
          </h3>
          <div className="space-y-4">
            <p className="text-muted-foreground">
              Key concepts:
            </p>
            <ul className="list-disc list-inside space-y-2 text-muted-foreground">
              <li>Local vs remote balance</li>
              <li>Circular rebalancing</li>
              <li>Fee considerations</li>
              <li>Liquidity management</li>
            </ul>
            <div className="mt-4 p-4 bg-muted/50 rounded-lg">
              <h4 className="font-medium mb-2">When to Rebalance</h4>
              <ul className="list-disc list-inside space-y-1 text-sm text-muted-foreground">
                <li>Depleted local balance</li>
                <li>Depleted remote balance</li>
                <li>High routing demand</li>
                <li>New channel setup</li>
              </ul>
            </div>
          </div>
        </Card>

        {/* Rebalancing Methods */}
        <Card className="mb-8 p-6">
          <h3 className="mb-4 text-lg font-medium flex items-center gap-2">
            <ArrowLeftRight className="h-5 w-5" />
            Rebalancing Methods
          </h3>
          <div className="space-y-4">
            <div className="grid gap-4 sm:grid-cols-2">
              <div className="p-4 rounded-lg bg-muted/50">
                <h4 className="font-medium mb-2">Manual Methods</h4>
                <ul className="list-disc list-inside space-y-1 text-sm text-muted-foreground">
                  <li>Direct circular routes</li>
                  <li>Multi-hop rebalancing</li>
                  <li>Fee optimization</li>
                  <li>Path selection</li>
                </ul>
              </div>
              <div className="p-4 rounded-lg bg-muted/50">
                <h4 className="font-medium mb-2">Automated Tools</h4>
                <ul className="list-disc list-inside space-y-1 text-sm text-muted-foreground">
                  <li>Balance of Satoshis</li>
                  <li>Lightning Terminal</li>
                  <li>Custom scripts</li>
                  <li>Scheduling systems</li>
                </ul>
              </div>
            </div>
            <div className="mt-4 p-4 bg-muted/50 rounded-lg border-l-4 border-warning">
              <h4 className="font-medium mb-2">Cost Consideration</h4>
              <p className="text-sm text-muted-foreground">
                Always calculate rebalancing costs against potential routing 
                revenue. Sometimes it's better to wait for natural rebalancing 
                through routing.
              </p>
            </div>
          </div>
        </Card>

        {/* Performance Monitoring */}
        <Card className="mb-8 p-6">
          <h3 className="mb-4 text-lg font-medium flex items-center gap-2">
            <LineChart className="h-5 w-5" />
            Performance Monitoring
          </h3>
          <div className="space-y-4">
            <div className="grid gap-4 sm:grid-cols-2">
              <div className="p-4 rounded-lg bg-muted/50">
                <h4 className="font-medium mb-2">Key Metrics</h4>
                <ul className="list-disc list-inside space-y-1 text-sm text-muted-foreground">
                  <li>Channel balance ratios</li>
                  <li>Routing success rates</li>
                  <li>Fee earnings</li>
                  <li>Rebalancing costs</li>
                </ul>
              </div>
              <div className="p-4 rounded-lg bg-muted/50">
                <h4 className="font-medium mb-2">Analysis Tools</h4>
                <ul className="list-disc list-inside space-y-1 text-sm text-muted-foreground">
                  <li>Channel monitoring</li>
                  <li>Flow analysis</li>
                  <li>Cost tracking</li>
                  <li>ROI calculation</li>
                </ul>
              </div>
            </div>
            <div className="mt-4 p-4 bg-muted/50 rounded-lg">
              <h4 className="font-medium mb-2">Success Indicators</h4>
              <ul className="list-disc list-inside space-y-1 text-sm text-muted-foreground">
                <li>Increased routing volume</li>
                <li>Higher success rates</li>
                <li>Better fee revenue</li>
                <li>Optimal balance distribution</li>
              </ul>
            </div>
          </div>
        </Card>

        {/* Advanced Strategies */}
        <Card className="p-6">
          <h3 className="mb-4 text-lg font-medium flex items-center gap-2">
            <Settings className="h-5 w-5" />
            Advanced Strategies
          </h3>
          <div className="space-y-4">
            <div className="grid gap-6 sm:grid-cols-2">
              <div className="space-y-2">
                <h4 className="font-medium">Optimization</h4>
                <ul className="list-disc list-inside space-y-1 text-sm text-muted-foreground">
                  <li>Route optimization</li>
                  <li>Fee strategies</li>
                  <li>Timing optimization</li>
                  <li>Peer selection</li>
                </ul>
              </div>
              <div className="space-y-2">
                <h4 className="font-medium">Automation</h4>
                <ul className="list-disc list-inside space-y-1 text-sm text-muted-foreground">
                  <li>Threshold triggers</li>
                  <li>Custom algorithms</li>
                  <li>Schedule optimization</li>
                  <li>Error handling</li>
                </ul>
              </div>
            </div>

            <div className="mt-4 p-4 bg-muted/50 rounded-lg">
              <h4 className="font-medium mb-2">Best Practices</h4>
              <ul className="list-disc list-inside space-y-2 text-sm text-muted-foreground">
                <li>Regular monitoring</li>
                <li>Cost-benefit analysis</li>
                <li>Dynamic adjustments</li>
                <li>Documentation</li>
                <li>Backup strategies</li>
              </ul>
            </div>
          </div>
        </Card>
      </ModuleContent>
    </ModuleLayout>
  );
}
