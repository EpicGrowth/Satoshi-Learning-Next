'use client';

import { ModuleLayout } from '@/components/learn/shared/module-layout';
import { ModuleContent } from '@/components/learn/shared/module-content';
import { LightningSidebar } from '@/components/learn/lightning/lightning-sidebar';
import { Card } from '@/components/ui/card';
import { Bot, Settings, Zap, LineChart } from 'lucide-react';

export default function NodeAutopilot() {
  return (
    <ModuleLayout>
      <ModuleContent
        moduleId="lightning-node-operations"
        sectionId="autopilot"
        checkpoints={3}
      >
        {/* Introduction */}
        <div className="mb-8">
          <h2 className="mb-4 text-2xl font-bold">Node Autopilot</h2>
          <p className="text-muted-foreground">
            Autopilot helps automate Lightning node operations, from channel 
            management to fee adjustments. Learn how to configure and optimize 
            automated node management.
          </p>
        </div>

        {/* Autopilot Basics */}
        <Card className="mb-8 p-6">
          <h3 className="mb-4 text-lg font-medium flex items-center gap-2">
            <Bot className="h-5 w-5" />
            Understanding Autopilot
          </h3>
          <div className="space-y-4">
            <p className="text-muted-foreground">
              Key features:
            </p>
            <ul className="list-disc list-inside space-y-2 text-muted-foreground">
              <li>Automated channel opening</li>
              <li>Dynamic fee adjustment</li>
              <li>Balance management</li>
              <li>Peer selection</li>
            </ul>
            <div className="mt-4 p-4 bg-muted/50 rounded-lg">
              <h4 className="font-medium mb-2">Benefits</h4>
              <ul className="list-disc list-inside space-y-1 text-sm text-muted-foreground">
                <li>Reduced manual management</li>
                <li>Optimized channel allocation</li>
                <li>24/7 operation</li>
                <li>Data-driven decisions</li>
              </ul>
            </div>
          </div>
        </Card>

        {/* Configuration */}
        <Card className="mb-8 p-6">
          <h3 className="mb-4 text-lg font-medium flex items-center gap-2">
            <Settings className="h-5 w-5" />
            Autopilot Configuration
          </h3>
          <div className="space-y-4">
            <div className="grid gap-4 sm:grid-cols-2">
              <div className="p-4 rounded-lg bg-muted/50">
                <h4 className="font-medium mb-2">Channel Parameters</h4>
                <ul className="list-disc list-inside space-y-1 text-sm text-muted-foreground">
                  <li>Minimum channel size</li>
                  <li>Maximum channels</li>
                  <li>Allocation strategy</li>
                  <li>Channel distribution</li>
                </ul>
              </div>
              <div className="p-4 rounded-lg bg-muted/50">
                <h4 className="font-medium mb-2">Fee Settings</h4>
                <ul className="list-disc list-inside space-y-1 text-sm text-muted-foreground">
                  <li>Base fee range</li>
                  <li>Fee rate limits</li>
                  <li>Update frequency</li>
                  <li>Market adaptation</li>
                </ul>
              </div>
            </div>
            <div className="mt-4 p-4 bg-muted/50 rounded-lg border-l-4 border-warning">
              <h4 className="font-medium mb-2">Important Settings</h4>
              <p className="text-sm text-muted-foreground">
                Always set reasonable limits for:
                • Maximum funds allocation
                • Individual channel sizes
                • Fee adjustment ranges
                • Minimum peer requirements
              </p>
            </div>
          </div>
        </Card>

        {/* Optimization */}
        <Card className="mb-8 p-6">
          <h3 className="mb-4 text-lg font-medium flex items-center gap-2">
            <Zap className="h-5 w-5" />
            Performance Optimization
          </h3>
          <div className="space-y-4">
            <p className="text-muted-foreground">
              Optimization strategies:
            </p>
            <ul className="list-disc list-inside space-y-2 text-muted-foreground">
              <li>Node scoring algorithms</li>
              <li>Channel capacity optimization</li>
              <li>Fee market analysis</li>
              <li>Network topology awareness</li>
            </ul>
            <div className="grid gap-4 sm:grid-cols-2 mt-4">
              <div className="p-4 rounded-lg bg-muted/50">
                <h4 className="font-medium mb-2">Peer Selection</h4>
                <p className="text-sm text-muted-foreground">
                  Configure peer scoring based on:
                  • Uptime history
                  • Routing volume
                  • Fee policies
                  • Network position
                </p>
              </div>
              <div className="p-4 rounded-lg bg-muted/50">
                <h4 className="font-medium mb-2">Balance Management</h4>
                <p className="text-sm text-muted-foreground">
                  Optimize channel balances:
                  • Rebalancing thresholds
                  • Circular rebalancing
                  • Fee considerations
                  • Liquidity distribution
                </p>
              </div>
            </div>
          </div>
        </Card>

        {/* Monitoring */}
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
                  <li>Channel utilization</li>
                  <li>Routing success rate</li>
                  <li>Fee revenue</li>
                  <li>Balance distribution</li>
                </ul>
              </div>
              <div className="space-y-2">
                <h4 className="font-medium">Alerts</h4>
                <ul className="list-disc list-inside space-y-1 text-sm text-muted-foreground">
                  <li>Channel issues</li>
                  <li>Balance extremes</li>
                  <li>Fee anomalies</li>
                  <li>Peer problems</li>
                </ul>
              </div>
            </div>

            <div className="mt-4 p-4 bg-muted/50 rounded-lg">
              <h4 className="font-medium mb-2">Regular Review</h4>
              <ul className="list-disc list-inside space-y-2 text-sm text-muted-foreground">
                <li>Review autopilot decisions</li>
                <li>Adjust parameters as needed</li>
                <li>Monitor for unexpected behavior</li>
                <li>Validate optimization results</li>
              </ul>
            </div>
          </div>
        </Card>
      </ModuleContent>
    </ModuleLayout>
  );
}
