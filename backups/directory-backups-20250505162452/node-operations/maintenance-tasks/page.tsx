'use client';

import React from 'react';
import { ModuleLayout } from '@/components/learn/shared/module-layout';
import { ModuleContent } from '@/components/learn/shared/module-content';
import VerifyCheckbox from '@/components/learn/shared/verify-checkbox';
import { Activity, Calendar, CheckSquare, AlertTriangle, BarChart2, RefreshCw, GitBranch, FileWarning, WrenchIcon, Workflow, RotateCw, Clock, Server } from 'lucide-react';
import SatoshiQuote from '@/components/learn/shared/satoshi-quote';

const moduleId = 'lightning-node-operations';
const sectionId = 'maintenance-tasks';

export default function MaintenanceTasksPage() {
  return (
    <ModuleLayout>
      <ModuleContent moduleId={moduleId} sectionId={sectionId}>
        <div className="space-y-8">
          <SatoshiQuote
            quote="The computer can be used as a tool to liberate and protect people, rather than to control them."
            source="Hal Finney"
            date="March 14, 2003"
          />

          <div className="bg-card p-6 rounded-lg border border-border">
            <h2 className="text-2xl font-semibold mb-4 flex items-center">
              <WrenchIcon className="h-6 w-6 mr-2 text-primary" />
              Lightning Node Maintenance
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              Regular maintenance of your Lightning node is crucial for ensuring optimal performance, security, and reliability. This section covers key maintenance tasks, performance monitoring, update management, and troubleshooting techniques.
            </p>
          </div>

          {/* Section 1: Routine Maintenance */}
          <div className="bg-card p-6 rounded-lg border border-border">
            <h3 className="text-xl font-semibold mb-4 flex items-center">
              <Calendar className="h-5 w-5 mr-2 text-primary" />
              Routine Maintenance Schedule
            </h3>
            <div className="space-y-6">
              <p className="text-muted-foreground">
                A consistent maintenance schedule helps prevent issues before they arise and ensures your node remains in optimal condition. Here are recommended maintenance tasks for different time intervals.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-4">
                <div className="bg-background p-5 rounded-lg border border-border">
                  <h4 className="font-medium mb-3 flex items-center">
                    <Clock className="h-4 w-4 mr-2 text-blue-500" />
                    Daily Tasks
                  </h4>
                  <ul className="list-disc pl-5 text-sm text-muted-foreground space-y-2">
                    <li><strong>Check Node Status:</strong> Verify your node is online and synced with both Bitcoin and Lightning networks.</li>
                    <li><strong>Monitor Channels:</strong> Review channel status to identify any inactive or problematic channels.</li>
                    <li><strong>Review Logs:</strong> Scan logs for errors, warnings, or unusual activity.</li>
                    <li><strong>Verify Connectivity:</strong> Ensure consistent connection to peers.</li>
                    <li><strong>Monitor Disk Space:</strong> Confirm sufficient space remains for blockchain and channel data.</li>
                  </ul>
                </div>
                
                <div className="bg-background p-5 rounded-lg border border-border">
                  <h4 className="font-medium mb-3 flex items-center">
                    <Calendar className="h-4 w-4 mr-2 text-purple-500" />
                    Weekly Tasks
                  </h4>
                  <ul className="list-disc pl-5 text-sm text-muted-foreground space-y-2">
                    <li><strong>Update Software:</strong> Apply necessary patches and updates to node software.</li>
                    <li><strong>Backup Verification:</strong> Verify that channel backups are current and recoverable.</li>
                    <li><strong>Performance Review:</strong> Analyze routing performance and adjust fee policies if needed.</li>
                    <li><strong>Channel Assessment:</strong> Evaluate channel quality and consider closing underperforming channels.</li>
                    <li><strong>Security Check:</strong> Review server access logs for unauthorized access attempts.</li>
                  </ul>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-2">
                <div className="bg-background p-5 rounded-lg border border-border">
                  <h4 className="font-medium mb-3 flex items-center">
                    <Calendar className="h-4 w-4 mr-2 text-green-500" />
                    Monthly Tasks
                  </h4>
                  <ul className="list-disc pl-5 text-sm text-muted-foreground space-y-2">
                    <li><strong>Channel Strategy Review:</strong> Analyze overall channel strategy and update as needed.</li>
                    <li><strong>Full Log Audit:</strong> Conduct comprehensive review of all logs.</li>
                    <li><strong>Backup Rotation:</strong> Create fresh SCB (Static Channel Backup) files.</li>
                    <li><strong>Fee Policy Assessment:</strong> Evaluate and adjust fee structure based on network trends.</li>
                    <li><strong>System Updates:</strong> Apply OS and security updates to your node's operating system.</li>
                  </ul>
                </div>
                
                <div className="bg-background p-5 rounded-lg border border-border">
                  <h4 className="font-medium mb-3 flex items-center">
                    <Calendar className="h-4 w-4 mr-2 text-red-500" />
                    Quarterly Tasks
                  </h4>
                  <ul className="list-disc pl-5 text-sm text-muted-foreground space-y-2">
                    <li><strong>Hardware Check:</strong> Inspect physical hardware for issues (if applicable).</li>
                    <li><strong>Database Pruning:</strong> Clean up database to prevent bloat (implementation-specific).</li>
                    <li><strong>Major Version Updates:</strong> Plan and execute major software version upgrades.</li>
                    <li><strong>Network Strategy Review:</strong> Reassess your node's position in the network topology.</li>
                    <li><strong>Disaster Recovery Test:</strong> Simulate recovery scenarios to verify procedures.</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Section 2: Performance Monitoring */}
          <div className="bg-card p-6 rounded-lg border border-border">
            <h3 className="text-xl font-semibold mb-4 flex items-center">
              <BarChart2 className="h-5 w-5 mr-2 text-primary" />
              Performance Monitoring
            </h3>
            <div className="space-y-6">
              <p className="text-muted-foreground">
                Effective performance monitoring helps identify issues early and optimize your node's operation. Here are the key metrics to watch and tools to use.
              </p>

              <div className="bg-background p-5 rounded-lg border border-border">
                <h4 className="font-medium mb-3">Key Performance Metrics</h4>
                <div className="space-y-4">
                  <div className="p-3 bg-muted/30 rounded-lg">
                    <h5 className="font-medium mb-2 flex items-center">
                      <Activity className="h-4 w-4 mr-2 text-green-500" />
                      Channel Health Metrics
                    </h5>
                    <ul className="list-disc pl-5 text-sm text-muted-foreground space-y-1">
                      <li><strong>Balance Distribution:</strong> Monitor inbound vs. outbound capacity ratios.</li>
                      <li><strong>Channel Uptime:</strong> Track percentage of time channels are active.</li>
                      <li><strong>Peer Reliability:</strong> Measure how often peers disconnect.</li>
                      <li><strong>Channel Age:</strong> Note which channels have remained stable over time.</li>
                    </ul>
                  </div>

                  <div className="p-3 bg-muted/30 rounded-lg">
                    <h5 className="font-medium mb-2 flex items-center">
                      <Server className="h-4 w-4 mr-2 text-blue-500" />
                      System Resource Metrics
                    </h5>
                    <ul className="list-disc pl-5 text-sm text-muted-foreground space-y-1">
                      <li><strong>CPU/Memory Usage:</strong> Track resource consumption to avoid bottlenecks.</li>
                      <li><strong>Disk Space:</strong> Monitor both free space and I/O performance.</li>
                      <li><strong>Network Bandwidth:</strong> Measure inbound and outbound traffic.</li>
                      <li><strong>DB Performance:</strong> Check database query times and sizes.</li>
                    </ul>
                  </div>

                  <div className="p-3 bg-muted/30 rounded-lg">
                    <h5 className="font-medium mb-2 flex items-center">
                      <Workflow className="h-4 w-4 mr-2 text-purple-500" />
                      Payment & Routing Metrics
                    </h5>
                    <ul className="list-disc pl-5 text-sm text-muted-foreground space-y-1">
                      <li><strong>Forward Success Rate:</strong> Percentage of successful forwards vs. attempts.</li>
                      <li><strong>Payment Volume:</strong> Amount of satoshis forwarded over time.</li>
                      <li><strong>Revenue:</strong> Track routing fees earned per channel and overall.</li>
                      <li><strong>HTLC Failures:</strong> Analyze why forwards fail and categorize failures.</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="mt-4 p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg border border-blue-200 dark:border-blue-800">
                <h5 className="font-medium mb-2">Monitoring Tools</h5>
                <ul className="list-disc pl-5 text-sm text-muted-foreground space-y-1">
                  <li><strong>Built-in Commands:</strong> <code>lncli getnodeinfo</code>, <code>lncli listchannels</code>, <code>lncli fwdinghistory</code></li>
                  <li><strong>GUI Interfaces:</strong> RTL (Ride The Lightning), ThunderHub, LND Connect</li>
                  <li><strong>Advanced Monitoring:</strong> Prometheus + Grafana dashboards</li>
                  <li><strong>Alerting:</strong> Telegram bots, email alerts, custom scripts</li>
                  <li><strong>Logging:</strong> Storing historical metrics to identify trends over time</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Section 3: Updates & Upgrades */}
          <div className="bg-card p-6 rounded-lg border border-border">
            <h3 className="text-xl font-semibold mb-4 flex items-center">
              <RefreshCw className="h-5 w-5 mr-2 text-primary" />
              Updates & Upgrades
            </h3>
            <div className="space-y-6">
              <p className="text-muted-foreground">
                Keeping your software up-to-date is essential for security and functionality. However, upgrading Lightning nodes requires careful planning due to the financial risk involved.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-background p-5 rounded-lg border border-border">
                  <h4 className="font-medium mb-3 flex items-center">
                    <GitBranch className="h-4 w-4 mr-2 text-orange-500" />
                    Update Planning
                  </h4>
                  <ul className="list-disc pl-5 text-sm text-muted-foreground space-y-2">
                    <li><strong>Update Announcements:</strong> Follow official channels (GitHub, Slack, Twitter) for update releases.</li>
                    <li><strong>Research Changes:</strong> Review release notes, understand breaking changes.</li>
                    <li><strong>Community Feedback:</strong> Wait for community testing/feedback on major upgrades.</li>
                    <li><strong>Timing:</strong> Schedule updates during low-activity periods.</li>
                    <li><strong>Backup:</strong> Always create fresh backups before updating.</li>
                  </ul>
                </div>
                
                <div className="bg-background p-5 rounded-lg border border-border">
                  <h4 className="font-medium mb-3 flex items-center">
                    <RotateCw className="h-4 w-4 mr-2 text-green-500" />
                    Safe Update Process
                  </h4>
                  <ol className="list-decimal pl-5 text-sm text-muted-foreground space-y-2">
                    <li>Create a full backup (SCB files, channel.db, wallet)</li>
                    <li>Temporarily disable automatic channel opening</li>
                    <li>Follow implementation-specific upgrade instructions</li>
                    <li>Verify node functionality after update</li>
                    <li>Monitor closely for 24-48 hours after upgrade</li>
                    <li>Update monitoring/tooling for new features</li>
                  </ol>
                </div>
              </div>

              <div className="p-4 bg-amber-50 dark:bg-amber-900/20 rounded-lg border border-amber-200 dark:border-amber-800">
                <h5 className="font-medium mb-2 flex items-center">
                  <AlertTriangle className="h-4 w-4 text-amber-600 dark:text-amber-400 mr-2" />
                  Rollback Plan
                </h5>
                <p className="text-sm text-muted-foreground">
                  Always have a rollback strategy ready. Know exactly how to revert to the previous version if problems arise. This includes keeping previous version binaries/source available and understanding the database compatibility issues between versions.
                </p>
                <div className="mt-2 p-3 bg-background rounded-lg text-xs text-muted-foreground">
                  <p className="font-medium">Example LND Rollback Process:</p>
                  <ol className="list-decimal pl-4 mt-1 space-y-1">
                    <li>Stop LND: <code>systemctl stop lnd</code></li>
                    <li>Replace binary with previous version</li>
                    <li>If DB schema changed, restore from backup</li>
                    <li>Restart: <code>systemctl start lnd</code></li>
                    <li>Verify channels and connectivity</li>
                  </ol>
                </div>
              </div>
            </div>
          </div>

          {/* Section 4: Troubleshooting */}
          <div className="bg-card p-6 rounded-lg border border-border">
            <h3 className="text-xl font-semibold mb-4 flex items-center">
              <FileWarning className="h-5 w-5 mr-2 text-primary" />
              Troubleshooting Common Issues
            </h3>
            <div className="space-y-6">
              <p className="text-muted-foreground">
                Even with careful maintenance, issues can arise. Here are solutions to common problems you might encounter.
              </p>

              <div className="space-y-4">
                <div className="bg-background p-4 rounded-lg border border-border">
                  <h4 className="font-medium mb-2">Connection Problems</h4>
                  <div className="p-3 bg-muted/30 rounded-lg">
                    <ul className="list-disc pl-5 text-sm text-muted-foreground space-y-2">
                      <li>
                        <strong>Unable to connect to peers:</strong>
                        <ul className="list-disc pl-5 mt-1 text-xs space-y-1">
                          <li>Check firewall rules (ports 9735-9737 typically need to be open)</li>
                          <li>Verify router port forwarding if behind NAT</li>
                          <li>Ensure correct node address in connection string</li>
                          <li>Check if peer is online and accepting connections</li>
                        </ul>
                      </li>
                      <li>
                        <strong>Frequent disconnections:</strong>
                        <ul className="list-disc pl-5 mt-1 text-xs space-y-1">
                          <li>Check for network stability issues</li>
                          <li>Increase connection timeout parameters</li>
                          <li>Consider upgrading bandwidth if saturated</li>
                        </ul>
                      </li>
                    </ul>
                  </div>
                </div>

                <div className="bg-background p-4 rounded-lg border border-border">
                  <h4 className="font-medium mb-2">Channel Issues</h4>
                  <div className="p-3 bg-muted/30 rounded-lg">
                    <ul className="list-disc pl-5 text-sm text-muted-foreground space-y-2">
                      <li>
                        <strong>Stuck pending channels:</strong>
                        <ul className="list-disc pl-5 mt-1 text-xs space-y-1">
                          <li>For opening: Check if funding transaction confirmed (may need fee bumping)</li>
                          <li>For closing: Wait for timelock expiry or check for broadcasting issues</li>
                        </ul>
                      </li>
                      <li>
                        <strong>Inactive channels:</strong>
                        <ul className="list-disc pl-5 mt-1 text-xs space-y-1">
                          <li>Try reconnecting to peer manually</li>
                          <li>Check if peer's node is online</li>
                          <li>Verify network connectivity</li>
                        </ul>
                      </li>
                      <li>
                        <strong>Force closing issues:</strong>
                        <ul className="list-disc pl-5 mt-1 text-xs space-y-1">
                          <li>Ensure Bitcoin node is synced</li>
                          <li>May need to bump fee on force-close transaction</li>
                          <li>Wait for timelock to expire before funds are available</li>
                        </ul>
                      </li>
                    </ul>
                  </div>
                </div>

                <div className="bg-background p-4 rounded-lg border border-border">
                  <h4 className="font-medium mb-2">Software and Performance Issues</h4>
                  <div className="p-3 bg-muted/30 rounded-lg">
                    <ul className="list-disc pl-5 text-sm text-muted-foreground space-y-2">
                      <li>
                        <strong>High CPU/memory usage:</strong>
                        <ul className="list-disc pl-5 mt-1 text-xs space-y-1">
                          <li>Check for zombie HTLCs or pathological routing patterns</li>
                          <li>Consider pruning database if implementation supports it</li>
                          <li>Upgrade hardware if consistently resource-constrained</li>
                        </ul>
                      </li>
                      <li>
                        <strong>Slow response times:</strong>
                        <ul className="list-disc pl-5 mt-1 text-xs space-y-1">
                          <li>Check disk I/O performance (SSD recommended)</li>
                          <li>Monitor database size and performance</li>
                          <li>Consider reducing logging verbosity</li>
                        </ul>
                      </li>
                      <li>
                        <strong>Update failures:</strong>
                        <ul className="list-disc pl-5 mt-1 text-xs space-y-1">
                          <li>Check for dependency issues</li>
                          <li>Review logs for specific error messages</li>
                          <li>Follow implementation-specific troubleshooting guides</li>
                          <li>Restore from backup if needed</li>
                        </ul>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* Verification Checkpoint */}
        <VerifyCheckbox 
          moduleId={moduleId} 
          sectionId={sectionId} 
          verificationId={`${sectionId}-complete`} 
          label="I understand the routine maintenance tasks, monitoring approaches, and troubleshooting techniques for Lightning nodes."
        />
      </ModuleContent>
    </ModuleLayout>
  );
}
