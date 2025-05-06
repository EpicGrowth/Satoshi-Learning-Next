import React from 'react';
import { ModuleContent } from '@/components/learn/shared/components/module-content';
import { Activity } from 'lucide-react';

const sections = [
  {
    id: 'routine-maintenance',
    title: 'Routine Maintenance',
    content: (
      <div className="space-y-4">
        <p>
          Regular maintenance tasks to keep your Lightning node running smoothly.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-8">
          <div className="bg-muted p-6 rounded-lg">
            <h4 className="font-medium mb-4">Daily Tasks</h4>
            <ul className="space-y-2 list-disc pl-4">
              <li>Check node status</li>
              <li>Monitor channels</li>
              <li>Review logs</li>
              <li>Verify connectivity</li>
            </ul>
          </div>
          
          <div className="bg-muted p-6 rounded-lg">
            <h4 className="font-medium mb-4">Weekly Tasks</h4>
            <ul className="space-y-2 list-disc pl-4">
              <li>Update software</li>
              <li>Backup verification</li>
              <li>Performance review</li>
              <li>Channel assessment</li>
            </ul>
          </div>
        </div>
      </div>
    )
  },
  {
    id: 'performance-monitoring',
    title: 'Performance Monitoring',
    content: (
      <div className="space-y-4">
        <p>
          Monitor and optimize your node's performance metrics.
        </p>

        <div className="bg-amber-50 dark:bg-amber-900/20 p-6 rounded-lg my-8">
          <h4 className="font-medium mb-4">Key Metrics</h4>
          <div className="space-y-8">
            <div className="relative pl-8">
              <div className="absolute left-0 top-1.5 h-4 w-4 rounded-full border-2 border-primary bg-background" />
              <div className="absolute left-[9px] top-[24px] bottom-[-24px] w-0.5 bg-border" />
              <div>
                <div className="flex flex-col sm:flex-row sm:items-center gap-2 mb-2">
                  <h5 className="font-medium">Channel Health</h5>
                </div>
                <div className="text-sm text-muted-foreground">
                  <p>Monitor channel balances and status.</p>
                </div>
              </div>
            </div>

            <div className="relative pl-8">
              <div className="absolute left-0 top-1.5 h-4 w-4 rounded-full border-2 border-primary bg-background" />
              <div className="absolute left-[9px] top-[24px] bottom-[-24px] w-0.5 bg-border" />
              <div>
                <div className="flex flex-col sm:flex-row sm:items-center gap-2 mb-2">
                  <h5 className="font-medium">Network Metrics</h5>
                </div>
                <div className="text-sm text-muted-foreground">
                  <p>Track connectivity and routing.</p>
                </div>
              </div>
            </div>

            <div className="relative pl-8">
              <div className="absolute left-0 top-1.5 h-4 w-4 rounded-full border-2 border-primary bg-background" />
              <div className="absolute left-[9px] top-[24px] bottom-[-24px] w-0.5 bg-border" />
              <div>
                <div className="flex flex-col sm:flex-row sm:items-center gap-2 mb-2">
                  <h5 className="font-medium">Payment Statistics</h5>
                </div>
                <div className="text-sm text-muted-foreground">
                  <p>Review payment success rates.</p>
                </div>
              </div>
            </div>

            <div className="relative pl-8">
              <div className="absolute left-0 top-1.5 h-4 w-4 rounded-full border-2 border-primary bg-background" />
              <div>
                <div className="flex flex-col sm:flex-row sm:items-center gap-2 mb-2">
                  <h5 className="font-medium">Resource Usage</h5>
                </div>
                <div className="text-sm text-muted-foreground">
                  <p>Monitor system resources.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  },
  {
    id: 'updates-upgrades',
    title: 'Updates & Upgrades',
    content: (
      <div className="space-y-4">
        <p>
          Keep your node software up to date and manage upgrades effectively.
        </p>

        <div className="bg-primary/5 p-6 rounded-lg">
          <h4 className="font-medium mb-4">Update Management</h4>
          <ul className="space-y-2">
            <li><strong>Version Control:</strong> Track software versions</li>
            <li><strong>Update Process:</strong> Safe upgrade procedures</li>
            <li><strong>Testing:</strong> Verify after updates</li>
            <li><strong>Rollback Plan:</strong> Emergency procedures</li>
          </ul>
        </div>
      </div>
    )
  },
  {
    id: 'troubleshooting',
    title: 'Troubleshooting',
    content: (
      <div className="space-y-4">
        <p>
          Common maintenance issues and their solutions.
        </p>

        <div className="bg-primary/5 p-6 rounded-lg">
          <h4 className="font-medium mb-4">Common Issues</h4>
          <ul className="space-y-2">
            <li><strong>Connection Problems:</strong> Network troubleshooting</li>
            <li><strong>Channel Issues:</strong> Balance and routing fixes</li>
            <li><strong>Performance Problems:</strong> Resource optimization</li>
            <li><strong>Update Failures:</strong> Recovery procedures</li>
          </ul>
        </div>
      </div>
    )
  }
];

export default function MaintenanceTasks() {
  return (
    <ModuleContent
      moduleId="lightning-node-operations"
      moduleTitle="Node Operations"
      sectionTitle="Maintenance Tasks"
      moduleDescription="Learn how to maintain and troubleshoot your Lightning node"
      sections={sections}
      difficulty="Intermediate"
      icon={Activity}
      verificationId="maintenance-tasks"
    />
  );
}
