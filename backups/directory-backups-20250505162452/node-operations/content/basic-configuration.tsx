import React from 'react';
import { ModuleContent } from '@/components/learn/shared/components/module-content';
import VerifyCheckbox from '@/components/learn/shared/components/verify-checkbox';
import { Settings } from 'lucide-react';

const content = {
  title: 'Basic Configuration',
  description: 'Learn how to configure your Lightning node for optimal performance',
  sections: [
    {
      id: 'config-files',
      title: 'Configuration Files',
      content: (
        <div className="space-y-4">
          <p>
            Understanding your node's configuration files is essential for proper setup and
            maintenance.
          </p>

          <div className="bg-muted p-6 rounded-lg my-4">
            <h4 className="font-medium mb-4">Key Configuration Areas</h4>
            <ul className="space-y-2 list-disc pl-4">
              <li>Network settings (mainnet/testnet)</li>
              <li>RPC configuration</li>
              <li>Security parameters</li>
              <li>Data directory location</li>
            </ul>
          </div>
        </div>
      ),
      checkboxes: [
        {
          id: 'understand-config',
          label: 'I understand the purpose of each main configuration section',
        },
      ],
    },
    {
      id: 'network-settings',
      title: 'Network Settings',
      content: (
        <div className="space-y-4">
          <p>Configure your node's network settings to ensure proper connectivity and security.</p>

          <div className="bg-muted p-6 rounded-lg my-4">
            <h4 className="font-medium mb-4">Important Network Parameters</h4>
            <ul className="space-y-2 list-disc pl-4">
              <li>Listen port configuration</li>
              <li>Peer connection limits</li>
              <li>Network type selection</li>
              <li>Connection handling</li>
            </ul>
          </div>
        </div>
      ),
      checkboxes: [
        {
          id: 'understand-network',
          label: 'I understand the key network parameters and their impact',
        },
      ],
    },
    {
      id: 'rpc-setup',
      title: 'RPC Configuration',
      content: (
        <div className="space-y-4">
          <p>
            Set up Remote Procedure Call (RPC) access to interact with your node programmatically.
          </p>

          <div className="bg-muted p-6 rounded-lg my-4">
            <h4 className="font-medium mb-4">RPC Setup Steps</h4>
            <ul className="space-y-2 list-disc pl-4">
              <li>RPC authentication</li>
              <li>Access control</li>
              <li>API endpoints</li>
              <li>Security considerations</li>
            </ul>
          </div>
        </div>
      ),
      checkboxes: [
        {
          id: 'understand-rpc',
          label: 'I understand how RPC enables node interaction and its security implications',
        },
      ],
    },
  ],
};

export default function BasicConfiguration() {
  return (
    <ModuleContent
      moduleId="lightning-node-operations"
      moduleTitle="Basic Configuration"
      moduleDescription="Configure your Lightning node for optimal performance"
      difficulty="Intermediate"
      icon={Settings}
    >
      <div className="space-y-8">
        {/* Content sections */}
        <div className="bg-card p-6 rounded-lg border border-border">
          <h2 className="text-xl font-bold mb-4">{content.title}</h2>
          <div className="space-y-4">
            <p>{content.description}</p>
            {content.sections.map((section) => (
              <div key={section.id} className="mt-6">
                <h3 className="text-lg font-semibold mb-2">{section.title}</h3>
                <div>{section.content}</div>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-6 border-t border-border/40 pt-4">
          <VerifyCheckbox
            moduleId="lightning-node-operations"
            verificationId="basic-configuration"
            label="I understand how to configure a Lightning node"
          />
        </div>
      </div>
    </ModuleContent>
  );
}
