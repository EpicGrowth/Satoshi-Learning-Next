'use client';

import { ModuleLayout } from '@/components/learn/shared/module-layout';
import { ModuleContent } from '@/components/learn/shared/module-content';
import { ModuleMetadata } from '@/components/learn/shared/module-metadata';
import { generateModuleMetadata } from '@/lib/metadata';
import { LightningSidebar } from '@/components/learn/lightning/lightning-sidebar';
import { Card } from '@/components/ui/card';
import { Shield, Eye, Zap, Lock } from 'lucide-react';

const metadata = generateModuleMetadata({
  title: 'Lightning Network Security',
  description: 'Learn about Lightning Network security principles, attack vectors, and protection mechanisms. Understand how to secure channels and transactions.',
  path: '/learn/lightning/security/network',
  difficulty: 'Advanced',
  timeToComplete: '60 minutes',
  prerequisites: ['Payment Channels', 'Network Topology'],
  keywords: ['lightning security', 'channel security', 'network attacks', 'watchtowers', 'payment security'],
});

export default function NetworkSecurity() {
  return (
    <ModuleMetadata metadata={metadata}>
      <ModuleLayout>
        <ModuleContent
          moduleId="lightning-security"
          sectionId="network"
          checkpoints={4}
        >
          {/* Introduction */}
          <div className="mb-8">
            <h2 className="mb-4 text-2xl font-bold">Lightning Network Security</h2>
            <p className="text-muted-foreground">
              Security is crucial for the Lightning Network's operation. Learn about 
              key security concepts, potential threats, and protection mechanisms.
            </p>
          </div>

          {/* Channel Security */}
          <Card className="mb-8 p-6">
            <h3 className="mb-4 text-lg font-medium flex items-center gap-2">
              <Shield className="h-5 w-5" />
              Channel Security
            </h3>
            <div className="space-y-4">
              <p className="text-muted-foreground">
                Key security aspects:
              </p>
              <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                <li>Channel state management</li>
                <li>Commitment transactions</li>
                <li>Revocation mechanisms</li>
                <li>Timelock security</li>
              </ul>
              <div className="mt-4 p-4 bg-muted/50 rounded-lg">
                <h4 className="font-medium mb-2">Protection Mechanisms</h4>
                <ul className="list-disc list-inside space-y-1 text-sm text-muted-foreground">
                  <li>Penalty transactions</li>
                  <li>CSV timelock</li>
                  <li>HTLC management</li>
                  <li>Channel backups</li>
                </ul>
              </div>
            </div>
          </Card>

          {/* Network Monitoring */}
          <Card className="mb-8 p-6">
            <h3 className="mb-4 text-lg font-medium flex items-center gap-2">
              <Eye className="h-5 w-5" />
              Network Monitoring
            </h3>
            <div className="space-y-4">
              <div className="grid gap-4 sm:grid-cols-2">
                <div className="p-4 rounded-lg bg-muted/50">
                  <h4 className="font-medium mb-2">Watchtowers</h4>
                  <ul className="list-disc list-inside space-y-1 text-sm text-muted-foreground">
                    <li>Channel monitoring</li>
                    <li>Breach detection</li>
                    <li>Penalty enforcement</li>
                    <li>Service providers</li>
                  </ul>
                </div>
                <div className="p-4 rounded-lg bg-muted/50">
                  <h4 className="font-medium mb-2">Network Analysis</h4>
                  <ul className="list-disc list-inside space-y-1 text-sm text-muted-foreground">
                    <li>Graph analysis</li>
                    <li>Node behavior</li>
                    <li>Channel monitoring</li>
                    <li>Traffic patterns</li>
                  </ul>
                </div>
              </div>
              <div className="mt-4 p-4 bg-muted/50 rounded-lg border-l-4 border-warning">
                <h4 className="font-medium mb-2">Monitoring Strategy</h4>
                <p className="text-sm text-muted-foreground">
                  Effective monitoring requires a combination of automated tools and 
                  manual oversight. Consider using multiple watchtowers for 
                  redundancy.
                </p>
              </div>
            </div>
          </Card>

          {/* Attack Vectors */}
          <Card className="mb-8 p-6">
            <h3 className="mb-4 text-lg font-medium flex items-center gap-2">
              <Zap className="h-5 w-5" />
              Attack Vectors
            </h3>
            <div className="space-y-4">
              <div className="grid gap-4 sm:grid-cols-2">
                <div className="p-4 rounded-lg bg-muted/50">
                  <h4 className="font-medium mb-2">Channel Attacks</h4>
                  <ul className="list-disc list-inside space-y-1 text-sm text-muted-foreground">
                    <li>Force closures</li>
                    <li>State breaches</li>
                    <li>Balance stealing</li>
                    <li>Griefing attacks</li>
                  </ul>
                </div>
                <div className="p-4 rounded-lg bg-muted/50">
                  <h4 className="font-medium mb-2">Network Attacks</h4>
                  <ul className="list-disc list-inside space-y-1 text-sm text-muted-foreground">
                    <li>Routing attacks</li>
                    <li>Eclipse attacks</li>
                    <li>DoS attempts</li>
                    <li>Privacy leaks</li>
                  </ul>
                </div>
              </div>
              <div className="mt-4 p-4 bg-muted/50 rounded-lg">
                <h4 className="font-medium mb-2">Mitigation Strategies</h4>
                <ul className="list-disc list-inside space-y-1 text-sm text-muted-foreground">
                  <li>Channel management</li>
                  <li>Node configuration</li>
                  <li>Network policies</li>
                  <li>Security updates</li>
                </ul>
              </div>
            </div>
          </Card>

          {/* Best Practices */}
          <Card className="p-6">
            <h3 className="mb-4 text-lg font-medium flex items-center gap-2">
              <Lock className="h-5 w-5" />
              Security Best Practices
            </h3>
            <div className="space-y-4">
              <div className="grid gap-6 sm:grid-cols-2">
                <div className="space-y-2">
                  <h4 className="font-medium">Node Security</h4>
                  <ul className="list-disc list-inside space-y-1 text-sm text-muted-foreground">
                    <li>Secure configuration</li>
                    <li>Access control</li>
                    <li>Update management</li>
                    <li>Backup procedures</li>
                  </ul>
                </div>
                <div className="space-y-2">
                  <h4 className="font-medium">Channel Management</h4>
                  <ul className="list-disc list-inside space-y-1 text-sm text-muted-foreground">
                    <li>Peer selection</li>
                    <li>Balance management</li>
                    <li>Monitoring setup</li>
                    <li>Emergency procedures</li>
                  </ul>
                </div>
              </div>

              <div className="mt-4 p-4 bg-muted/50 rounded-lg">
                <h4 className="font-medium mb-2">Security Checklist</h4>
                <ul className="list-disc list-inside space-y-2 text-sm text-muted-foreground">
                  <li>Regular backups</li>
                  <li>Watchtower setup</li>
                  <li>Channel monitoring</li>
                  <li>Emergency funds</li>
                  <li>Incident response plan</li>
                </ul>
              </div>
            </div>
          </Card>
        </ModuleContent>
      </ModuleLayout>
    </ModuleMetadata>
  );
}
