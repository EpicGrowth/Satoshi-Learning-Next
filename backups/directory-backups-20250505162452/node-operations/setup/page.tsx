'use client';

import { ModuleLayout } from '@/components/learn/shared/module-layout';
import { ModuleContent } from '@/components/learn/shared/module-content';
import { LightningSidebar } from '@/components/learn/lightning/lightning-sidebar';
import { Card } from '@/components/ui/card';
import { Server, Settings, Network, Shield } from 'lucide-react';

export default function NodeSetup() {
  return (
    <ModuleLayout>
      <ModuleContent
        moduleId="lightning-node"
        sectionId="node-setup"
        checkpoints={3}
      >
        {/* Introduction */}
        <div className="mb-8">
          <h2 className="mb-4 text-2xl font-bold">Setting Up a Lightning Node</h2>
          <p className="text-muted-foreground">
            Running your own Lightning node gives you maximum control and privacy 
            while contributing to network decentralization. This guide will help 
            you understand the requirements and process.
          </p>
        </div>

        {/* Node Requirements */}
        <Card className="mb-8 p-6">
          <h3 className="mb-4 text-lg font-medium flex items-center gap-2">
            <Server className="h-5 w-5" />
            Node Requirements
          </h3>
          <div className="space-y-4">
            <p className="text-muted-foreground">
              To run a Lightning node, you need:
            </p>
            <ul className="list-disc list-inside space-y-2 text-muted-foreground">
              <li>A Bitcoin full node (synchronized)</li>
              <li>Stable internet connection</li>
              <li>Storage for blockchain data (~500GB)</li>
              <li>RAM (minimum 4GB, recommended 8GB+)</li>
              <li>Some bitcoin for opening channels</li>
            </ul>
            <div className="mt-4 p-4 bg-muted/50 rounded-lg">
              <h4 className="font-medium mb-2">Hardware Options</h4>
              <p className="text-sm text-muted-foreground">
                You can run a node on:
                • Dedicated hardware (like RaspiBlitz)
                • Personal computer
                • Virtual private server (VPS)
                Each option has different trade-offs in terms of cost, maintenance, 
                and security.
              </p>
            </div>
          </div>
        </Card>

        {/* Software Setup */}
        <Card className="mb-8 p-6">
          <h3 className="mb-4 text-lg font-medium flex items-center gap-2">
            <Settings className="h-5 w-5" />
            Software Setup
          </h3>
          <div className="space-y-4">
            <p className="text-muted-foreground">
              Common Lightning implementations:
            </p>
            <div className="grid gap-4 sm:grid-cols-2">
              <div className="p-4 rounded-lg bg-muted/50">
                <h4 className="font-medium mb-2">LND (Lightning Network Daemon)</h4>
                <ul className="list-disc list-inside space-y-1 text-sm text-muted-foreground">
                  <li>Most popular implementation</li>
                  <li>Good documentation</li>
                  <li>Many tools available</li>
                </ul>
              </div>
              <div className="p-4 rounded-lg bg-muted/50">
                <h4 className="font-medium mb-2">c-lightning</h4>
                <ul className="list-disc list-inside space-y-1 text-sm text-muted-foreground">
                  <li>Developed by Blockstream</li>
                  <li>More lightweight</li>
                  <li>Plugin system</li>
                </ul>
              </div>
            </div>
            <p className="mt-4 text-muted-foreground">
              Most implementations require:
            </p>
            <ul className="list-disc list-inside space-y-2 text-muted-foreground">
              <li>Bitcoin Core for blockchain data</li>
              <li>Configuration file setup</li>
              <li>Port forwarding (if running at home)</li>
              <li>Backup system for channel states</li>
            </ul>
          </div>
        </Card>

        {/* Network Connectivity */}
        <Card className="mb-8 p-6">
          <h3 className="mb-4 text-lg font-medium flex items-center gap-2">
            <Network className="h-5 w-5" />
            Network Connectivity
          </h3>
          <div className="space-y-4">
            <p className="text-muted-foreground">
              Your node needs to:
            </p>
            <ul className="list-disc list-inside space-y-2 text-muted-foreground">
              <li>Maintain constant internet connectivity</li>
              <li>Be accessible to other nodes (port forwarding)</li>
              <li>Have sufficient bandwidth for routing</li>
              <li>Stay synchronized with the network</li>
            </ul>
            <div className="mt-4 p-4 bg-muted/50 rounded-lg">
              <h4 className="font-medium mb-2">Port Requirements</h4>
              <p className="text-sm text-muted-foreground">
                • Bitcoin: 8333 (incoming)
                • Lightning: 9735 (incoming)
                • RPC access: usually local only
              </p>
            </div>
          </div>
        </Card>

        {/* Security Considerations */}
        <Card className="p-6">
          <h3 className="mb-4 text-lg font-medium flex items-center gap-2">
            <Shield className="h-5 w-5" />
            Security Considerations
          </h3>
          <div className="grid gap-6 sm:grid-cols-2">
            <div className="space-y-2">
              <h4 className="font-medium">System Security</h4>
              <p className="text-sm text-muted-foreground">
                Keep your system updated, use strong passwords, and limit access 
                to your node. Consider using a firewall.
              </p>
            </div>
            <div className="space-y-2">
              <h4 className="font-medium">Channel Backups</h4>
              <p className="text-sm text-muted-foreground">
                Regularly back up your channel state data. Loss of this data 
                could result in lost funds.
              </p>
            </div>
            <div className="space-y-2">
              <h4 className="font-medium">Watchtowers</h4>
              <p className="text-sm text-muted-foreground">
                Consider using watchtowers to monitor your channels when your 
                node is offline.
              </p>
            </div>
            <div className="space-y-2">
              <h4 className="font-medium">Remote Access</h4>
              <p className="text-sm text-muted-foreground">
                If enabling remote access, use strong authentication and 
                encryption (SSH keys, VPN).
              </p>
            </div>
          </div>
        </Card>
      </ModuleContent>
    </ModuleLayout>
  );
}
