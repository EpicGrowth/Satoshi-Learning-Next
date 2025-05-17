'use client';

import { useState, useEffect } from 'react';
import { ModuleLayout } from '@/components/learn/shared/module-layout';
import { ModuleContent } from '@/components/learn/shared/module-content';
import { Card } from '@/components/ui/card';
import { Bot, Settings, Zap, LineChart } from 'lucide-react';
import VerifyCheckbox from '@/components/learn/shared/verify-checkbox';
import SatoshiQuote from '@/components/learn/shared/satoshi-quote';

export default function NodeAutopilotClient() {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
    return () => setIsMounted(false);
  }, []);

  if (!isMounted) {
    return null;
  }

  return (
    <ModuleLayout>
      <ModuleContent
        moduleId="lightning-node-operations"
        sectionId="autopilot"
        moduleTitle="Node Operations"
        moduleDescription="Learn how to automate Lightning node management"
        difficulty="Intermediate"
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
            <p className="text-muted-foreground">Key features:</p>
            <ul className="list-disc pl-5 space-y-2 text-muted-foreground">
              <li>Automated channel management</li>
              <li>Dynamic fee adjustments</li>
              <li>Liquidity optimization</li>
              <li>Peer selection automation</li>
            </ul>
          </div>
        </Card>

        {/* Configuration */}
        <Card className="mb-8 p-6">
          <h3 className="mb-4 text-lg font-medium flex items-center gap-2">
            <Settings className="h-5 w-5" />
            Configuration Options
          </h3>
          <div className="space-y-4">
            <div className="grid gap-6 md:grid-cols-2">
              <div className="p-4 rounded-lg border bg-card">
                <h4 className="font-medium mb-2 flex items-center gap-2">
                  <Zap className="h-4 w-4 text-primary" />
                  Channel Management
                </h4>
                <ul className="list-disc pl-5 space-y-2 text-sm text-muted-foreground">
                  <li>Auto channel opening thresholds</li>
                  <li>Maximum channel size limits</li>
                  <li>Minimum peer requirements</li>
                  <li>Channel close conditions</li>
                </ul>
              </div>

              <div className="p-4 rounded-lg border bg-card">
                <h4 className="font-medium mb-2 flex items-center gap-2">
                  <LineChart className="h-4 w-4 text-primary" />
                  Fee Management
                </h4>
                <ul className="list-disc pl-5 space-y-2 text-sm text-muted-foreground">
                  <li>Dynamic fee adjustment rules</li>
                  <li>Fee range constraints</li>
                  <li>Update frequency settings</li>
                  <li>Market-based adjustments</li>
                </ul>
              </div>
            </div>
          </div>
        </Card>

        <VerifyCheckbox
          moduleId="lightning-node-operations"
          sectionId="autopilot"
          verificationId="autopilot-config"
          label="I understand the key autopilot features and configuration options"
        />

        <div className="mt-6">
          <SatoshiQuote quote="Automation is the key to scaling node operations efficiently." />
        </div>
      </ModuleContent>
    </ModuleLayout>
  );
}