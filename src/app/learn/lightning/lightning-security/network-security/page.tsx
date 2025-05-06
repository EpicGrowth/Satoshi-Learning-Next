'use client';

import React from 'react';
import { ModuleLayout } from '@/components/learn/shared/module-layout';
import { ModuleContent } from '@/components/learn/shared/module-content';
import VerifyCheckbox from '@/components/learn/shared/verify-checkbox';
import { Card } from '@/components/ui/card';
import { Network, Lock, Globe, Shield, Users } from 'lucide-react';

const moduleId = 'lightning-security';
const sectionId = 'network-security';

export default function NetworkSecurityPage() {
  return (
    <ModuleLayout>
      <ModuleContent moduleId={moduleId} sectionId={sectionId}>
        <div className="space-y-8">
          <Card className="p-6">
            <h2 className="text-xl font-bold mb-4">Network Security in Lightning Network</h2>
            
            <div className="space-y-6">
              <div className="prose dark:prose-invert max-w-none">
                <h3>Understanding Network Security</h3>
                <p>
                  Network security in Lightning Network focuses on protecting communication channels, 
                  preventing network attacks, and ensuring secure peer connections. Strong network 
                  security is essential for maintaining a reliable payment network.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-muted p-6 rounded-lg">
                  <h4 className="font-medium mb-4">Security Components</h4>
                  <ul className="list-disc pl-4 space-y-2">
                    <li><strong>TLS Encryption:</strong> Secure comms</li>
                    <li><strong>Peer Authentication:</strong> Node identity</li>
                    <li><strong>DDoS Protection:</strong> Attack defense</li>
                    <li><strong>Network Privacy:</strong> Data protection</li>
                  </ul>
                </div>
                
                <div className="bg-muted p-6 rounded-lg">
                  <h4 className="font-medium mb-4">Common Threats</h4>
                  <ul className="list-disc pl-4 space-y-2">
                    <li>Network partitioning</li>
                    <li>Eclipse attacks</li>
                    <li>Sybil attacks</li>
                    <li>Man-in-the-middle</li>
                  </ul>
                </div>
              </div>
            </div>
          </Card>

          <Card className="p-6">
            <h2 className="text-xl font-bold mb-4">Network Attack Vectors</h2>
            
            <div className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-purple-50 dark:bg-purple-900/20 p-6 rounded-lg">
                  <div className="flex items-center gap-2 mb-3">
                    <Users className="h-5 w-5 text-purple-600" />
                    <h4 className="font-medium">Sybil Attacks</h4>
                  </div>
                  <div className="space-y-3 text-sm text-muted-foreground">
                    <p>
                      When an attacker creates multiple fake identities to gain disproportionate influence:
                    </p>
                    <ul className="list-disc pl-4 space-y-2">
                      <li>Can lead to network mapping and deanonymization</li>
                      <li>May manipulate routing decisions by controlling multiple nodes</li>
                      <li>Potentially enables denial of service by controlling routing paths</li>
                      <li>Mitigated by using reputation systems and careful peer selection</li>
                    </ul>
                  </div>
                </div>

                <div className="bg-purple-50 dark:bg-purple-900/20 p-6 rounded-lg">
                  <div className="flex items-center gap-2 mb-3">
                    <Globe className="h-5 w-5 text-purple-600" />
                    <h4 className="font-medium">Eclipse Attacks</h4>
                  </div>
                  <div className="space-y-3 text-sm text-muted-foreground">
                    <p>
                      When an attacker isolates a node from the rest of the network:
                    </p>
                    <ul className="list-disc pl-4 space-y-2">
                      <li>Forces victim to connect only to attacker-controlled nodes</li>
                      <li>Can manipulate victim's view of the network</li>
                      <li>May lead to payment failures or loss of funds</li>
                      <li>Mitigated by connecting to diverse, reputable peers</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-purple-50 dark:bg-purple-900/20 p-6 rounded-lg">
                  <div className="flex items-center gap-2 mb-3">
                    <Lock className="h-5 w-5 text-purple-600" />
                    <h4 className="font-medium">Man-in-the-Middle</h4>
                  </div>
                  <div className="space-y-3 text-sm text-muted-foreground">
                    <p>
                      When an attacker intercepts communication between nodes:
                    </p>
                    <ul className="list-disc pl-4 space-y-2">
                      <li>Can eavesdrop on unencrypted communication</li>
                      <li>May manipulate data being transmitted</li>
                      <li>Potentially redirect payments or leak sensitive information</li>
                      <li>Mitigated through TLS encryption and proper node authentication</li>
                    </ul>
                  </div>
                </div>

                <div className="bg-purple-50 dark:bg-purple-900/20 p-6 rounded-lg">
                  <div className="flex items-center gap-2 mb-3">
                    <Shield className="h-5 w-5 text-purple-600" />
                    <h4 className="font-medium">Denial of Service</h4>
                  </div>
                  <div className="space-y-3 text-sm text-muted-foreground">
                    <p>
                      When an attacker disrupts normal network operation:
                    </p>
                    <ul className="list-disc pl-4 space-y-2">
                      <li>Can overwhelm nodes with excessive requests</li>
                      <li>May cause channel jamming through stuck payments</li>
                      <li>Potentially isolate parts of the network</li>
                      <li>Mitigated through rate limiting, proper resource allocation, and fee policies</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </Card>

          <Card className="p-6">
            <h2 className="text-xl font-bold mb-4">Network Security Best Practices</h2>
            
            <div className="prose dark:prose-invert max-w-none">
              <p>
                Implement these best practices to enhance network security:
              </p>
              
              <ul>
                <li>
                  <strong>TLS Encryption:</strong> Always use TLS 1.3+ for all node communications.
                </li>
                <li>
                  <strong>Peer Authentication:</strong> Verify node identities before establishing 
                  connections.
                </li>
                <li>
                  <strong>Tor Integration:</strong> Consider running your node over Tor to enhance 
                  privacy and prevent IP-based attacks.
                </li>
                <li>
                  <strong>Diverse Peer Selection:</strong> Connect to multiple reputable peers across 
                  different geographic locations and network operators.
                </li>
                <li>
                  <strong>Resource Limits:</strong> Configure resource limits to prevent DoS attacks 
                  from overwhelming your node.
                </li>
                <li>
                  <strong>Regular Updates:</strong> Keep network software updated to benefit from the 
                  latest security patches and protocol improvements.
                </li>
                <li>
                  <strong>Private Channels:</strong> Use private channels for sensitive transactions 
                  to prevent network analysis.
                </li>
              </ul>
              
              <h3>Tor Integration Benefits</h3>
              <p>
                Running a Lightning node over Tor provides several security advantages:
              </p>
              <ul>
                <li>Hides your IP address, preventing targeted attacks</li>
                <li>Adds a layer of anonymity, protecting your privacy</li>
                <li>Makes geographical targeting more difficult</li>
                <li>Helps bypass restrictive network environments</li>
                <li>Reduces the risk of network analysis and transaction correlation</li>
              </ul>
              
              <p>
                Remember that network security is interconnected with node and channel security. 
                A comprehensive security approach addresses all three aspects to provide robust 
                protection for your Lightning Network operations.
              </p>
            </div>
          </Card>

          <div className="mt-6 border-t border-border/40 pt-4">
            <VerifyCheckbox
              moduleId={moduleId}
              sectionId={sectionId}
              verificationId="network-security-concepts"
              label="I understand network security concepts in the Lightning Network"
            />
          </div>
        </div>
      </ModuleContent>
    </ModuleLayout>
  );
}
