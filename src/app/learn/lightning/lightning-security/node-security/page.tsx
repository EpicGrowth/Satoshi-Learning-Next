'use client';

import React from 'react';
import { ModuleLayout } from '@/components/learn/shared/module-layout';
import { ModuleContent } from '@/components/learn/shared/module-content';
import VerifyCheckbox from '@/components/learn/shared/verify-checkbox';
import { Card } from '@/components/ui/card';
import { Server, Lock, ShieldAlert, Database, Shield } from 'lucide-react';

const moduleId = 'lightning-security';
const sectionId = 'node-security';

export default function NodeSecurityPage() {
  return (
    <ModuleLayout>
      <ModuleContent 
        moduleId={moduleId} 
        sectionId={sectionId}
        moduleTitle="Node Security"
        moduleDescription="Securing your Lightning node"
        difficulty="Advanced"
        icon={Shield}
        checkpoints={1}
      >
        <div className="space-y-8">
          <Card className="p-6">
            <h2 className="text-xl font-bold mb-4">Node Security in Lightning Network</h2>
            
            <div className="space-y-6">
              <div className="prose dark:prose-invert max-w-none">
                <h3>Understanding Node Security</h3>
                <p>
                  Node security is crucial for protecting your Lightning Network operations. A compromised 
                  node can lead to loss of funds, privacy breaches, and network disruption. Implementing 
                  proper security measures is essential.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-muted p-6 rounded-lg">
                  <h4 className="font-medium mb-4">Security Components</h4>
                  <ul className="list-disc pl-4 space-y-2">
                    <li><strong>Access Control:</strong> Authentication</li>
                    <li><strong>Network Security:</strong> Firewall rules</li>
                    <li><strong>Data Protection:</strong> Encryption</li>
                    <li><strong>System Hardening:</strong> Updates</li>
                  </ul>
                </div>
                
                <div className="bg-muted p-6 rounded-lg">
                  <h4 className="font-medium mb-4">Common Threats</h4>
                  <ul className="list-disc pl-4 space-y-2">
                    <li>Unauthorized access</li>
                    <li>DDoS attacks</li>
                    <li>Data breaches</li>
                    <li>System compromise</li>
                  </ul>
                </div>
              </div>
            </div>
          </Card>

          <Card className="p-6">
            <h2 className="text-xl font-bold mb-4">Key Security Measures</h2>
            
            <div className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-purple-50 dark:bg-purple-900/20 p-6 rounded-lg">
                  <div className="flex items-center gap-2 mb-3">
                    <Lock className="h-5 w-5 text-purple-600" />
                    <h4 className="font-medium">Access Control</h4>
                  </div>
                  <div className="space-y-3 text-sm text-muted-foreground">
                    <p>
                      Securing access to your Lightning node is the first line of defense:
                    </p>
                    <ul className="list-disc pl-4 space-y-2">
                      <li>Use strong, unique passwords for all services</li>
                      <li>Implement SSH key-based authentication</li>
                      <li>Disable password authentication where possible</li>
                      <li>Use multi-factor authentication (MFA) when available</li>
                      <li>Implement proper user permissions and role-based access</li>
                    </ul>
                  </div>
                </div>

                <div className="bg-purple-50 dark:bg-purple-900/20 p-6 rounded-lg">
                  <div className="flex items-center gap-2 mb-3">
                    <ShieldAlert className="h-5 w-5 text-purple-600" />
                    <h4 className="font-medium">Network Security</h4>
                  </div>
                  <div className="space-y-3 text-sm text-muted-foreground">
                    <p>
                      Protect your node from network-based threats:
                    </p>
                    <ul className="list-disc pl-4 space-y-2">
                      <li>Configure and maintain a proper firewall</li>
                      <li>Use a VPN for remote access</li>
                      <li>Restrict access to specific IP addresses when possible</li>
                      <li>Use a reverse proxy for web interfaces</li>
                      <li>Consider using Tor for increased privacy</li>
                      <li>Regularly monitor network traffic for anomalies</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-purple-50 dark:bg-purple-900/20 p-6 rounded-lg">
                  <div className="flex items-center gap-2 mb-3">
                    <Database className="h-5 w-5 text-purple-600" />
                    <h4 className="font-medium">Data Protection</h4>
                  </div>
                  <div className="space-y-3 text-sm text-muted-foreground">
                    <p>
                      Safeguard your node's data and funds:
                    </p>
                    <ul className="list-disc pl-4 space-y-2">
                      <li>Encrypt sensitive files and databases</li>
                      <li>Create secure, encrypted backups</li>
                      <li>Implement secure key management practices</li>
                      <li>Use static channel backups (SCBs)</li>
                      <li>Ensure proper permissions on configuration files</li>
                      <li>Consider using hardware security modules for keys</li>
                    </ul>
                  </div>
                </div>

                <div className="bg-purple-50 dark:bg-purple-900/20 p-6 rounded-lg">
                  <div className="flex items-center gap-2 mb-3">
                    <Shield className="h-5 w-5 text-purple-600" />
                    <h4 className="font-medium">System Hardening</h4>
                  </div>
                  <div className="space-y-3 text-sm text-muted-foreground">
                    <p>
                      Keep your system resilient against attacks:
                    </p>
                    <ul className="list-disc pl-4 space-y-2">
                      <li>Keep the operating system and all software up to date</li>
                      <li>Run Lightning node software with the principle of least privilege</li>
                      <li>Remove unnecessary services and applications</li>
                      <li>Implement host-based intrusion detection</li>
                      <li>Use application whitelisting</li>
                      <li>Consider running your node on dedicated hardware</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </Card>

          <Card className="p-6">
            <h2 className="text-xl font-bold mb-4">Security Best Practices</h2>
            
            <div className="prose dark:prose-invert max-w-none">
              <p>
                Follow these best practices to maintain a secure Lightning node:
              </p>
              
              <ul>
                <li>
                  <strong>Regular Audits:</strong> Periodically review access logs, permissions, and 
                  security settings to identify and address issues.
                </li>
                <li>
                  <strong>Security Updates:</strong> Stay informed about vulnerabilities in your 
                  node software and apply security patches promptly.
                </li>
                <li>
                  <strong>Backup Verification:</strong> Regularly test backups to ensure they are 
                  complete and can be restored successfully.
                </li>
                <li>
                  <strong>Physical Security:</strong> For dedicated hardware nodes, ensure physical 
                  access is restricted and secured.
                </li>
                <li>
                  <strong>Watchtowers:</strong> Consider using watchtower services to protect 
                  against channel breaches while your node is offline.
                </li>
                <li>
                  <strong>Defense in Depth:</strong> Implement multiple layers of security to 
                  protect against various types of threats.
                </li>
                <li>
                  <strong>Separate Concerns:</strong> Where possible, separate node operations 
                  from wallets with large balances.
                </li>
              </ul>
              
              <p>
                Remember that node security is an ongoing process, not a one-time setup. Regular 
                maintenance and staying informed about new security practices are essential for 
                keeping your Lightning node secure.
              </p>
            </div>
          </Card>

          <div className="mt-6 border-t border-border/40 pt-4">
            <VerifyCheckbox
              moduleId={moduleId}
              sectionId={sectionId}
              verificationId="node-security-concepts"
              label="I understand the importance of node security in the Lightning Network"
            />
          </div>
        </div>
      </ModuleContent>
    </ModuleLayout>
  );
}
