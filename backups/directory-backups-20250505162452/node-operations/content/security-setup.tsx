import React from 'react';
import { ModuleContent } from '@/components/learn/shared/components/module-content';
import { Shield } from 'lucide-react';

const sections = [
  {
    id: 'access-control',
    title: 'Access Control',
    content: (
      <div className="space-y-4">
        <p>Set up proper access controls to secure your Lightning node.</p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-8">
          <div className="bg-muted p-6 rounded-lg">
            <h4 className="font-medium mb-4">Authentication</h4>
            <ul className="space-y-2 list-disc pl-4">
              <li>Password protection</li>
              <li>API keys</li>
              <li>TLS certificates</li>
              <li>SSH access</li>
            </ul>
          </div>

          <div className="bg-muted p-6 rounded-lg">
            <h4 className="font-medium mb-4">Authorization</h4>
            <ul className="space-y-2 list-disc pl-4">
              <li>Permission levels</li>
              <li>Role-based access</li>
              <li>IP restrictions</li>
              <li>Command limitations</li>
            </ul>
          </div>
        </div>
      </div>
    ),
  },
  {
    id: 'encryption',
    title: 'Encryption Setup',
    content: (
      <div className="space-y-4">
        <p>Implement encryption to protect sensitive data and communications.</p>

        <div className="bg-amber-50 dark:bg-amber-900/20 p-6 rounded-lg my-8">
          <h4 className="font-medium mb-4">Encryption Configuration</h4>
          <div className="space-y-8">
            <div className="relative pl-8">
              <div className="absolute left-0 top-1.5 h-4 w-4 rounded-full border-2 border-primary bg-background" />
              <div className="absolute left-[9px] top-[24px] bottom-[-24px] w-0.5 bg-border" />
              <div>
                <div className="flex flex-col sm:flex-row sm:items-center gap-2 mb-2">
                  <h5 className="font-medium">Data Encryption</h5>
                </div>
                <div className="text-sm text-muted-foreground">
                  <p>Protect sensitive node data.</p>
                </div>
              </div>
            </div>

            <div className="relative pl-8">
              <div className="absolute left-0 top-1.5 h-4 w-4 rounded-full border-2 border-primary bg-background" />
              <div className="absolute left-[9px] top-[24px] bottom-[-24px] w-0.5 bg-border" />
              <div>
                <div className="flex flex-col sm:flex-row sm:items-center gap-2 mb-2">
                  <h5 className="font-medium">Communication Security</h5>
                </div>
                <div className="text-sm text-muted-foreground">
                  <p>Secure network communications.</p>
                </div>
              </div>
            </div>

            <div className="relative pl-8">
              <div className="absolute left-0 top-1.5 h-4 w-4 rounded-full border-2 border-primary bg-background" />
              <div className="absolute left-[9px] top-[24px] bottom-[-24px] w-0.5 bg-border" />
              <div>
                <div className="flex flex-col sm:flex-row sm:items-center gap-2 mb-2">
                  <h5 className="font-medium">Key Management</h5>
                </div>
                <div className="text-sm text-muted-foreground">
                  <p>Secure storage of cryptographic keys.</p>
                </div>
              </div>
            </div>

            <div className="relative pl-8">
              <div className="absolute left-0 top-1.5 h-4 w-4 rounded-full border-2 border-primary bg-background" />
              <div>
                <div className="flex flex-col sm:flex-row sm:items-center gap-2 mb-2">
                  <h5 className="font-medium">Backup Encryption</h5>
                </div>
                <div className="text-sm text-muted-foreground">
                  <p>Protect backup data.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    ),
  },
  {
    id: 'firewall-setup',
    title: 'Firewall Configuration',
    content: (
      <div className="space-y-4">
        <p>Configure firewall rules to protect your node from unauthorized access.</p>

        <div className="bg-primary/5 p-6 rounded-lg">
          <h4 className="font-medium mb-4">Firewall Rules</h4>
          <ul className="space-y-2">
            <li>
              <strong>Port Access:</strong> Control incoming connections
            </li>
            <li>
              <strong>IP Filtering:</strong> Restrict access by IP
            </li>
            <li>
              <strong>Service Rules:</strong> Define allowed services
            </li>
            <li>
              <strong>Rate Limiting:</strong> Prevent DDoS attacks
            </li>
          </ul>
        </div>
      </div>
    ),
  },
  {
    id: 'monitoring-alerts',
    title: 'Security Monitoring',
    content: (
      <div className="space-y-4">
        <p>Set up security monitoring and alerts for your node.</p>

        <div className="bg-primary/5 p-6 rounded-lg">
          <h4 className="font-medium mb-4">Monitoring Setup</h4>
          <ul className="space-y-2">
            <li>
              <strong>Log Monitoring:</strong> Track security events
            </li>
            <li>
              <strong>Alert System:</strong> Configure notifications
            </li>
            <li>
              <strong>Access Logs:</strong> Monitor authentication
            </li>
            <li>
              <strong>System Audits:</strong> Regular security checks
            </li>
          </ul>
        </div>
      </div>
    ),
  },
];

export default function SecuritySetup() {
  return (
    <ModuleContent
      moduleId="lightning-node-operations"
      moduleTitle="Security Setup"
      moduleDescription="Secure your Lightning node"
      difficulty="Intermediate"
      icon={Shield}
    >
      <div className="space-y-8">
        {/* Content sections */}
        {sections.map((section) => (
          <div key={section.id} className="bg-card p-6 rounded-lg border border-border">
            <h2 className="text-xl font-bold mb-4">{section.title}</h2>
            <div className="space-y-4">{section.content}</div>
          </div>
        ))}

        <div className="mt-6 border-t border-border/40 pt-4">
          <VerifyCheckbox
            moduleId="lightning-node-operations"
            verificationId="security-setup"
            label="I understand how to secure a Lightning node"
          />
        </div>
      </div>
    </ModuleContent>
  );
}
