'use client';

import React from 'react';
import { ModuleLayout } from '@/components/learn/shared/module-layout';
import { ModuleContent } from '@/components/learn/shared/module-content';
import VerifyCheckbox from '@/components/learn/shared/verify-checkbox';
import { Card } from '@/components/ui/card';
import { Link2, Clock, Eye, Database, AlertTriangle } from 'lucide-react';

const moduleId = 'lightning-security';
const sectionId = 'channel-security';

export default function ChannelSecurityPage() {
  return (
    <ModuleLayout>
      <ModuleContent moduleId={moduleId} sectionId={sectionId}>
        <div className="space-y-8">
          <Card className="p-6">
            <h2 className="text-xl font-bold mb-4">Channel Security in Lightning Network</h2>
            
            <div className="space-y-6">
              <div className="prose dark:prose-invert max-w-none">
                <h3>Understanding Channel Security</h3>
                <p>
                  Channel security is critical for protecting funds and ensuring reliable payment routing. 
                  Proper security measures help prevent channel breaches, unauthorized closures, and 
                  fund theft.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-muted p-6 rounded-lg">
                  <h4 className="font-medium mb-4">Security Aspects</h4>
                  <ul className="list-disc pl-4 space-y-2">
                    <li><strong>Channel State:</strong> Balance protection</li>
                    <li><strong>Timelock:</strong> Force-close defense</li>
                    <li><strong>Backups:</strong> SCB management</li>
                    <li><strong>Watchtowers:</strong> Breach protection</li>
                  </ul>
                </div>
                
                <div className="bg-muted p-6 rounded-lg">
                  <h4 className="font-medium mb-4">Common Threats</h4>
                  <ul className="list-disc pl-4 space-y-2">
                    <li>Force closure attacks</li>
                    <li>Channel jamming</li>
                    <li>Balance manipulation</li>
                    <li>Data corruption</li>
                  </ul>
                </div>
              </div>
            </div>
          </Card>

          <Card className="p-6">
            <h2 className="text-xl font-bold mb-4">Key Security Mechanisms</h2>
            
            <div className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-purple-50 dark:bg-purple-900/20 p-6 rounded-lg">
                  <div className="flex items-center gap-2 mb-3">
                    <Clock className="h-5 w-5 text-purple-600" />
                    <h4 className="font-medium">Timelocks</h4>
                  </div>
                  <div className="space-y-3 text-sm text-muted-foreground">
                    <p>
                      Timelocks protect against malicious channel closures:
                    </p>
                    <ul className="list-disc pl-4 space-y-2">
                      <li>Create a delay period before funds can be claimed</li>
                      <li>Allow time to detect and respond to unauthorized closure attempts</li>
                      <li>Prevent an attacker from immediately accessing funds</li>
                      <li>Enable dispute resolution during the timelock period</li>
                    </ul>
                    <div className="bg-muted p-3 rounded-lg text-xs">
                      <strong>Technical note:</strong> Implemented using CLTV (CheckLockTimeVerify) 
                      in the Bitcoin script to enforce time-based conditions.
                    </div>
                  </div>
                </div>

                <div className="bg-purple-50 dark:bg-purple-900/20 p-6 rounded-lg">
                  <div className="flex items-center gap-2 mb-3">
                    <Eye className="h-5 w-5 text-purple-600" />
                    <h4 className="font-medium">Watchtowers</h4>
                  </div>
                  <div className="space-y-3 text-sm text-muted-foreground">
                    <p>
                      Watchtowers monitor channels even when your node is offline:
                    </p>
                    <ul className="list-disc pl-4 space-y-2">
                      <li>Monitor the blockchain for outdated channel states</li>
                      <li>Detect and respond to breach attempts automatically</li>
                      <li>Broadcast justice transactions to reclaim funds</li>
                      <li>Provide 24/7 protection without requiring your node to be online</li>
                      <li>Can be self-hosted or third-party services</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-purple-50 dark:bg-purple-900/20 p-6 rounded-lg">
                  <div className="flex items-center gap-2 mb-3">
                    <Database className="h-5 w-5 text-purple-600" />
                    <h4 className="font-medium">Static Channel Backups (SCBs)</h4>
                  </div>
                  <div className="space-y-3 text-sm text-muted-foreground">
                    <p>
                      SCBs provide recovery options if channel data is lost:
                    </p>
                    <ul className="list-disc pl-4 space-y-2">
                      <li>Contain information needed to recover funds during force-close</li>
                      <li>Much smaller than full channel state backups</li>
                      <li>Should be updated and secured after each channel operation</li>
                      <li>Enable secure fund recovery without risking channel breaches</li>
                    </ul>
                    <div className="bg-muted p-3 rounded-lg text-xs">
                      <strong>Best practice:</strong> Store multiple copies of SCBs in different 
                      secure locations, including encrypted cloud storage.
                    </div>
                  </div>
                </div>

                <div className="bg-purple-50 dark:bg-purple-900/20 p-6 rounded-lg">
                  <div className="flex items-center gap-2 mb-3">
                    <AlertTriangle className="h-5 w-5 text-purple-600" />
                    <h4 className="font-medium">Breach Remedy</h4>
                  </div>
                  <div className="space-y-3 text-sm text-muted-foreground">
                    <p>
                      Mechanisms to handle malicious channel breaches:
                    </p>
                    <ul className="list-disc pl-4 space-y-2">
                      <li>Penalty transactions to reclaim all channel funds</li>
                      <li>Automated response to outdated state broadcasts</li>
                      <li>Time-sensitive breach detection and response</li>
                      <li>Justice transactions that enforce penalties for malicious behavior</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </Card>

          <Card className="p-6">
            <h2 className="text-xl font-bold mb-4">Best Practices for Channel Security</h2>
            
            <div className="prose dark:prose-invert max-w-none">
              <p>
                Follow these best practices to maintain secure Lightning channels:
              </p>
              
              <ul>
                <li>
                  <strong>Peer Selection:</strong> Open channels with reputable, stable nodes to 
                  reduce the risk of malicious behavior.
                </li>
                <li>
                  <strong>Regular Backups:</strong> Keep updated static channel backups (SCBs) 
                  in multiple secure locations.
                </li>
                <li>
                  <strong>Watchtower Protection:</strong> Use watchtower services to monitor your 
                  channels when your node is offline.
                </li>
                <li>
                  <strong>Channel Size Management:</strong> Balance security risks with opportunity 
                  costs when determining channel sizes.
                </li>
                <li>
                  <strong>Channel Monitoring:</strong> Regularly check channel status and balance 
                  distribution.
                </li>
                <li>
                  <strong>Proper Channel Closure:</strong> Use cooperative channel closures whenever 
                  possible to avoid timelock delays.
                </li>
                <li>
                  <strong>Stay Informed:</strong> Keep up with security updates and best practices 
                  in the Lightning community.
                </li>
              </ul>
              
              <p>
                Remember that channel security is directly tied to the security of your overall node. 
                Strong node security practices complement and enhance your channel security.
              </p>
            </div>
          </Card>

          <div className="mt-6 border-t border-border/40 pt-4">
            <VerifyCheckbox
              moduleId={moduleId}
              sectionId={sectionId}
              verificationId="channel-security-concepts"
              label="I understand the importance of channel security in the Lightning Network"
            />
          </div>
        </div>
      </ModuleContent>
    </ModuleLayout>
  );
}
