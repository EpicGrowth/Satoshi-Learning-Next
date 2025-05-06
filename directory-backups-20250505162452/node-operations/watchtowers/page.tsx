'use client';

import { ModuleLayout } from '@/components/learn/shared/module-layout';
import { ModuleContent } from '@/components/learn/shared/module-content';
import { LightningSidebar } from '@/components/learn/lightning/lightning-sidebar';
import { Card } from '@/components/ui/card';
import { Eye, Server, Shield, Settings } from 'lucide-react';

export default function Watchtowers() {
  return (
    <ModuleLayout>
      <ModuleContent
        moduleId="lightning-node"
        sectionId="watchtowers"
        checkpoints={3}
      >
        {/* Introduction */}
        <div className="mb-8">
          <h2 className="mb-4 text-2xl font-bold">Watchtower Services</h2>
          <p className="text-muted-foreground">
            Watchtowers monitor the blockchain for potential channel breaches 
            when your node is offline, providing an essential security layer for 
            Lightning Network participants.
          </p>
        </div>

        {/* Watchtower Basics */}
        <Card className="mb-8 p-6">
          <h3 className="mb-4 text-lg font-medium flex items-center gap-2">
            <Eye className="h-5 w-5" />
            Understanding Watchtowers
          </h3>
          <div className="space-y-4">
            <p className="text-muted-foreground">
              Key functions:
            </p>
            <ul className="list-disc list-inside space-y-2 text-muted-foreground">
              <li>Monitor blockchain for breaches</li>
              <li>Store encrypted justice transactions</li>
              <li>Broadcast penalty transactions</li>
              <li>Protect offline nodes</li>
            </ul>
            <div className="mt-4 p-4 bg-muted/50 rounded-lg">
              <h4 className="font-medium mb-2">When You Need Watchtowers</h4>
              <ul className="list-disc list-inside space-y-1 text-sm text-muted-foreground">
                <li>Running a mobile node</li>
                <li>Intermittent connectivity</li>
                <li>High-value channels</li>
                <li>Extended offline periods</li>
              </ul>
            </div>
          </div>
        </Card>

        {/* Setting Up Watchtowers */}
        <Card className="mb-8 p-6">
          <h3 className="mb-4 text-lg font-medium flex items-center gap-2">
            <Server className="h-5 w-5" />
            Watchtower Setup
          </h3>
          <div className="space-y-4">
            <div className="grid gap-4 sm:grid-cols-2">
              <div className="p-4 rounded-lg bg-muted/50">
                <h4 className="font-medium mb-2">Running a Tower</h4>
                <ul className="list-disc list-inside space-y-1 text-sm text-muted-foreground">
                  <li>Hardware requirements</li>
                  <li>Software installation</li>
                  <li>Network configuration</li>
                  <li>Storage management</li>
                </ul>
              </div>
              <div className="p-4 rounded-lg bg-muted/50">
                <h4 className="font-medium mb-2">Client Configuration</h4>
                <ul className="list-disc list-inside space-y-1 text-sm text-muted-foreground">
                  <li>Tower selection</li>
                  <li>Backup scheduling</li>
                  <li>Justice transaction fees</li>
                  <li>Multiple tower setup</li>
                </ul>
              </div>
            </div>
            <div className="mt-4 p-4 bg-muted/50 rounded-lg border-l-4 border-warning">
              <h4 className="font-medium mb-2">Important Considerations</h4>
              <p className="text-sm text-muted-foreground">
                Always use multiple watchtowers for redundancy. Consider running 
                your own tower alongside third-party services.
              </p>
            </div>
          </div>
        </Card>

        {/* Security Model */}
        <Card className="mb-8 p-6">
          <h3 className="mb-4 text-lg font-medium flex items-center gap-2">
            <Shield className="h-5 w-5" />
            Security Model
          </h3>
          <div className="space-y-4">
            <div className="grid gap-4 sm:grid-cols-2">
              <div className="p-4 rounded-lg bg-muted/50">
                <h4 className="font-medium mb-2">Privacy Features</h4>
                <ul className="list-disc list-inside space-y-1 text-sm text-muted-foreground">
                  <li>Encrypted backups</li>
                  <li>Blinded justice txs</li>
                  <li>Data minimization</li>
                  <li>Tower privacy</li>
                </ul>
              </div>
              <div className="p-4 rounded-lg bg-muted/50">
                <h4 className="font-medium mb-2">Trust Model</h4>
                <ul className="list-disc list-inside space-y-1 text-sm text-muted-foreground">
                  <li>Trustless operation</li>
                  <li>Economic incentives</li>
                  <li>Redundancy benefits</li>
                  <li>Failure modes</li>
                </ul>
              </div>
            </div>
            <div className="mt-4 p-4 bg-muted/50 rounded-lg">
              <h4 className="font-medium mb-2">Security Guarantees</h4>
              <p className="text-sm text-muted-foreground">
                Watchtowers can only help if:
                • They receive timely backups
                • They remain online
                • They have sufficient fees
                • The breach is detectable
              </p>
            </div>
          </div>
        </Card>

        {/* Advanced Configuration */}
        <Card className="p-6">
          <h3 className="mb-4 text-lg font-medium flex items-center gap-2">
            <Settings className="h-5 w-5" />
            Advanced Configuration
          </h3>
          <div className="space-y-4">
            <div className="grid gap-6 sm:grid-cols-2">
              <div className="space-y-2">
                <h4 className="font-medium">Performance Tuning</h4>
                <ul className="list-disc list-inside space-y-1 text-sm text-muted-foreground">
                  <li>Resource allocation</li>
                  <li>Database optimization</li>
                  <li>Network settings</li>
                  <li>Monitoring setup</li>
                </ul>
              </div>
              <div className="space-y-2">
                <h4 className="font-medium">Redundancy Planning</h4>
                <ul className="list-disc list-inside space-y-1 text-sm text-muted-foreground">
                  <li>Multiple tower strategy</li>
                  <li>Backup verification</li>
                  <li>Fee management</li>
                  <li>Failure recovery</li>
                </ul>
              </div>
            </div>

            <div className="mt-4 p-4 bg-muted/50 rounded-lg">
              <h4 className="font-medium mb-2">Best Practices</h4>
              <ul className="list-disc list-inside space-y-2 text-sm text-muted-foreground">
                <li>Regular backup testing</li>
                <li>Monitor tower performance</li>
                <li>Update tower software</li>
                <li>Document recovery procedures</li>
                <li>Maintain sufficient fees</li>
              </ul>
            </div>
          </div>
        </Card>
      </ModuleContent>
    </ModuleLayout>
  );
}
