'use client';

import { ModuleLayout } from '@/components/learn/shared/module-layout';
import { ModuleContent } from '@/components/learn/shared/module-content';
import { LightningSidebar } from '@/components/learn/lightning/lightning-sidebar';
import { Card } from '@/components/ui/card';
import { Save, Database, ArrowDownToLine, AlertTriangle } from 'lucide-react';

export default function BackupStrategies() {
  return (
    <ModuleLayout>
      <ModuleContent
        moduleId="lightning-node-operations"
        sectionId="backup-strategies"
        checkpoints={3}
      >
        {/* Introduction */}
        <div className="mb-8">
          <h2 className="mb-4 text-2xl font-bold">Backup Strategies</h2>
          <p className="text-muted-foreground">
            Proper backup strategies are crucial for Lightning node operators. 
            Learn how to secure your channels, maintain data integrity, and 
            implement reliable recovery procedures.
          </p>
        </div>

        {/* Backup Types */}
        <Card className="mb-8 p-6">
          <h3 className="mb-4 text-lg font-medium flex items-center gap-2">
            <Save className="h-5 w-5" />
            Types of Backups
          </h3>
          <div className="space-y-4">
            <p className="text-muted-foreground">
              Essential backups:
            </p>
            <ul className="list-disc list-inside space-y-2 text-muted-foreground">
              <li>Static Channel Backups (SCB)</li>
              <li>Channel state data</li>
              <li>Node configuration</li>
              <li>Wallet data</li>
            </ul>
            <div className="mt-4 p-4 bg-muted/50 rounded-lg">
              <h4 className="font-medium mb-2">Critical Components</h4>
              <ul className="list-disc list-inside space-y-1 text-sm text-muted-foreground">
                <li>Channel.backup file</li>
                <li>channel.db</li>
                <li>wallet.db</li>
                <li>lnd.conf</li>
              </ul>
            </div>
          </div>
        </Card>

        {/* Backup Methods */}
        <Card className="mb-8 p-6">
          <h3 className="mb-4 text-lg font-medium flex items-center gap-2">
            <Database className="h-5 w-5" />
            Backup Methods
          </h3>
          <div className="space-y-4">
            <div className="grid gap-4 sm:grid-cols-2">
              <div className="p-4 rounded-lg bg-muted/50">
                <h4 className="font-medium mb-2">Automated Backups</h4>
                <ul className="list-disc list-inside space-y-1 text-sm text-muted-foreground">
                  <li>Scheduled scripts</li>
                  <li>Remote storage sync</li>
                  <li>Real-time replication</li>
                  <li>Cloud integration</li>
                </ul>
              </div>
              <div className="p-4 rounded-lg bg-muted/50">
                <h4 className="font-medium mb-2">Manual Backups</h4>
                <ul className="list-disc list-inside space-y-1 text-sm text-muted-foreground">
                  <li>File copying</li>
                  <li>Database dumps</li>
                  <li>Config exports</li>
                  <li>Cold storage</li>
                </ul>
              </div>
            </div>
            <div className="mt-4 p-4 bg-muted/50 rounded-lg border-l-4 border-warning">
              <h4 className="font-medium mb-2">Security Note</h4>
              <p className="text-sm text-muted-foreground">
                Always encrypt backups before storing them remotely. Use strong 
                encryption and secure key management.
              </p>
            </div>
          </div>
        </Card>

        {/* Recovery Procedures */}
        <Card className="mb-8 p-6">
          <h3 className="mb-4 text-lg font-medium flex items-center gap-2">
            <ArrowDownToLine className="h-5 w-5" />
            Recovery Procedures
          </h3>
          <div className="space-y-4">
            <div className="grid gap-4 sm:grid-cols-2">
              <div className="p-4 rounded-lg bg-muted/50">
                <h4 className="font-medium mb-2">Channel Recovery</h4>
                <ul className="list-disc list-inside space-y-1 text-sm text-muted-foreground">
                  <li>SCB restoration</li>
                  <li>Force-close handling</li>
                  <li>Fund recovery</li>
                  <li>Peer reconnection</li>
                </ul>
              </div>
              <div className="p-4 rounded-lg bg-muted/50">
                <h4 className="font-medium mb-2">Node Recovery</h4>
                <ul className="list-disc list-inside space-y-1 text-sm text-muted-foreground">
                  <li>Config restoration</li>
                  <li>Database recovery</li>
                  <li>Wallet restoration</li>
                  <li>Service restart</li>
                </ul>
              </div>
            </div>
            <div className="mt-4 p-4 bg-muted/50 rounded-lg">
              <h4 className="font-medium mb-2">Recovery Steps</h4>
              <ol className="list-decimal list-inside space-y-1 text-sm text-muted-foreground">
                <li>Stop lightning service</li>
                <li>Restore configuration</li>
                <li>Replace database files</li>
                <li>Verify permissions</li>
                <li>Restart services</li>
              </ol>
            </div>
          </div>
        </Card>

        {/* Best Practices */}
        <Card className="p-6">
          <h3 className="mb-4 text-lg font-medium flex items-center gap-2">
            <AlertTriangle className="h-5 w-5" />
            Best Practices
          </h3>
          <div className="space-y-4">
            <div className="grid gap-6 sm:grid-cols-2">
              <div className="space-y-2">
                <h4 className="font-medium">Backup Schedule</h4>
                <ul className="list-disc list-inside space-y-1 text-sm text-muted-foreground">
                  <li>Regular SCB updates</li>
                  <li>Daily database backups</li>
                  <li>Config change backups</li>
                  <li>Version control</li>
                </ul>
              </div>
              <div className="space-y-2">
                <h4 className="font-medium">Storage Security</h4>
                <ul className="list-disc list-inside space-y-1 text-sm text-muted-foreground">
                  <li>Encryption standards</li>
                  <li>Access controls</li>
                  <li>Redundant storage</li>
                  <li>Secure transport</li>
                </ul>
              </div>
            </div>

            <div className="mt-4 p-4 bg-muted/50 rounded-lg">
              <h4 className="font-medium mb-2">Maintenance Checklist</h4>
              <ul className="list-disc list-inside space-y-2 text-sm text-muted-foreground">
                <li>Verify backup integrity</li>
                <li>Test recovery procedures</li>
                <li>Update documentation</li>
                <li>Review security measures</li>
                <li>Monitor storage space</li>
              </ul>
            </div>
          </div>
        </Card>
      </ModuleContent>
    </ModuleLayout>
  );
}
