'use client';

import React from 'react';
import { ModuleLayout } from '@/components/learn/shared/module-layout';
import { ModuleContent } from '@/components/learn/shared/module-content';
import VerifyCheckbox from '@/components/learn/shared/verify-checkbox';
import {
  Cpu,
  Activity,
  LineChart,
  AlertTriangle,
  FileCode,
  Shield,
  Workflow,
  BarChart,
  Terminal,
  PieChart,
  Archive,
  Bell,
  Laptop,
  Clock,
  Router,
  Zap,
  Eye, 
  Server, 
  Database, 
  Network, 
  Thermometer, 
  HeartPulse, 
  ListChecks, 
  Link2, 
  BarChartHorizontal, 
  Layers, 
  Info, 
} from 'lucide-react';
import SatoshiQuote from '@/components/learn/shared/satoshi-quote';

const moduleId = 'lightning-node-operations';
const sectionId = 'monitoring';

export default function MonitoringPage() {
  return (
    <ModuleLayout>
      <ModuleContent 
        moduleId={moduleId} 
        sectionId={sectionId}
        moduleTitle="Node Monitoring"
        moduleDescription="Monitoring your Lightning node"
        difficulty="Intermediate"
        icon={Activity}
        checkpoints={1}
      >
        <div className="space-y-8">
          <SatoshiQuote
            quote="Without 100% confidence in the node being online, there is a risk of getting a channel force closed in a non-favorable state. Monitoring is essential for ensuring uptime and preventing unexpected channel closures."
            source="Adapted from Lightning Network discussions"
            date="circa 2018"
          />

          <div className="bg-card p-6 rounded-lg border border-border">
            <h2 className="text-2xl font-semibold mb-4 flex items-center">
              <Eye className="h-6 w-6 mr-2 text-primary" />
              Lightning Node Monitoring
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              Keeping a close eye on your Lightning node is crucial for its health, security, and performance. Effective monitoring allows you to detect issues early, optimize routing, and ensure the reliability of your operations.
            </p>
          </div>

          {/* Section 1: Why Monitor? */}
          <div className="bg-card p-6 rounded-lg border border-border">
            <h3 className="text-xl font-semibold mb-4 flex items-center">
              <Shield className="h-5 w-5 mr-2 text-primary" />
              The Importance of Monitoring
            </h3>
            <div className="space-y-6">
              <p className="text-muted-foreground">
                Operating a Lightning node without monitoring is risky. It's essential for safeguarding funds, ensuring uptime, and contributing positively to the network.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-background p-4 rounded-lg border border-border">
                  <h5 className="font-medium mb-2 flex items-center">
                    <ListChecks className="h-4 w-4 mr-2 text-green-500" />
                    Key Objectives
                  </h5>
                  <ul className="list-disc pl-5 text-sm text-muted-foreground space-y-1">
                    <li><strong>Prevent Downtime:</strong> Maximize node and channel availability.</li>
                    <li><strong>Enhance Security:</strong> Detect suspicious activity or vulnerabilities.</li>
                    <li><strong>Optimize Performance:</strong> Identify and resolve routing bottlenecks.</li>
                    <li><strong>Manage Liquidity:</strong> Track channel balances and flow.</li>
                    <li><strong>Ensure Profitability:</strong> Monitor routing fees earned vs. costs.</li>
                  </ul>
                </div>
                <div className="bg-background p-4 rounded-lg border border-border">
                  <h5 className="font-medium mb-2 flex items-center">
                    <AlertTriangle className="h-4 w-4 mr-2 text-red-500" />
                    Risks of Poor Monitoring
                  </h5>
                  <ul className="list-disc pl-5 text-sm text-muted-foreground space-y-1">
                    <li>Stuck or failed payments.</li>
                    <li>Loss of funds due to outdated channel states (justice transactions).</li>
                    <li>Unnecessary force closures.</li>
                    <li>Missed routing fee opportunities.</li>
                    <li>Damage to node reputation.</li>
                  </ul>
                </div>
              </div>
              <div className="mt-4 p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg border border-blue-200 dark:border-blue-800">
                <h5 className="font-medium mb-2 flex items-center">
                  <Info className="h-5 w-5 text-blue-600 dark:text-blue-400 mr-2" />
                  Continuous Vigilance
                </h5>
                <p className="text-sm text-muted-foreground">
                  Lightning is a dynamic system. Channel states, peer connectivity, and network conditions change constantly. Continuous monitoring is necessary to adapt and maintain a healthy node.
                </p>
              </div>
            </div>
          </div>

          {/* Section 2: Key Monitoring Areas */}
          <div className="bg-card p-6 rounded-lg border border-border">
            <h3 className="text-xl font-semibold mb-4 flex items-center">
              <Layers className="h-5 w-5 mr-2 text-primary" />
              Key Monitoring Categories
            </h3>
            <div className="space-y-6">
              <p className="text-muted-foreground">
                A holistic monitoring approach covers multiple layers, from the underlying hardware to the Lightning application itself.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* System Health */}
                <div className="bg-background p-4 rounded-lg border border-border space-y-3">
                  <h4 className="font-medium flex items-center">
                    <Server className="h-5 w-5 mr-2 text-indigo-500" />
                    System Health
                  </h4>
                  <p className="text-xs text-muted-foreground">Monitor the server/machine running the node.</p>
                  <ul className="list-disc pl-4 text-xs text-muted-foreground space-y-1">
                    <li><strong>CPU/Memory Usage:</strong> Ensure sufficient resources.</li>
                    <li><strong>Disk Space/IO:</strong> Avoid storage issues, monitor performance.</li>
                    <li><strong>Network Connectivity:</strong> Check bandwidth and latency.</li>
                    <li><strong>Temperature:</strong> Critical for hardware nodes (e.g., Raspberry Pi).</li>
                  </ul>
                  <p className="text-xs font-semibold">Tools: <code className="text-muted-foreground">htop</code>, <code className="text-muted-foreground">df</code>, <code className="text-muted-foreground">ping</code>, Prometheus/Grafana</p>
                </div>

                {/* Bitcoin Core Node */}
                <div className="bg-background p-4 rounded-lg border border-border space-y-3">
                  <h4 className="font-medium flex items-center">
                    <Database className="h-5 w-5 mr-2 text-orange-500" />
                    Bitcoin Backend
                  </h4>
                  <p className="text-xs text-muted-foreground">Monitor the underlying Bitcoin full node (e.g., Bitcoin Core).</p>
                  <ul className="list-disc pl-4 text-xs text-muted-foreground space-y-1">
                    <li><strong>Sync Status:</strong> Ensure it's fully synced to the blockchain.</li>
                    <li><strong>Peer Count:</strong> Maintain good connection to the Bitcoin network.</li>
                    <li><strong>Resource Usage:</strong> Monitor its impact on system resources.</li>
                    <li><strong>Log Files:</strong> Check for errors or warnings.</li>
                  </ul>
                  <p className="text-xs font-semibold">Tools: <code className="text-muted-foreground">bitcoin-cli getblockchaininfo</code>, Logs</p>
                </div>

                {/* Lightning Node Process */}
                <div className="bg-background p-4 rounded-lg border border-border space-y-3">
                  <h4 className="font-medium flex items-center">
                    <Zap className="h-5 w-5 mr-2 text-yellow-500" />
                    Lightning Daemon
                  </h4>
                  <p className="text-xs text-muted-foreground">Monitor the Lightning node software process itself (LND, CLN, Eclair).</p>
                  <ul className="list-disc pl-4 text-xs text-muted-foreground space-y-1">
                    <li><strong>Process Uptime:</strong> Ensure the daemon is running.</li>
                    <li><strong>Version:</strong> Keep software up-to-date.</li>
                    <li><strong>Peer Connectivity:</strong> Monitor connections to Lightning peers.</li>
                    <li><strong>Graph Sync:</strong> Check if the network graph is current.</li>
                    <li><strong>Log Files:</strong> Crucial for diagnosing issues.</li>
                  </ul>
                  <p className="text-xs font-semibold">Tools: <code className="text-muted-foreground">lncli getinfo</code>, <code className="text-muted-foreground">lightning-cli getinfo</code>, Logs</p>
                </div>

                {/* Channel Health */}
                <div className="bg-background p-4 rounded-lg border border-border space-y-3">
                  <h4 className="font-medium flex items-center">
                    <HeartPulse className="h-5 w-5 mr-2 text-red-500" />
                    Channel Health
                  </h4>
                  <p className="text-xs text-muted-foreground">Monitor the status and liquidity of individual channels.</p>
                  <ul className="list-disc pl-4 text-xs text-muted-foreground space-y-1">
                    <li><strong>Channel Status:</strong> Active, inactive, pending open/close.</li>
                    <li><strong>Local/Remote Balance:</strong> Track liquidity distribution.</li>
                    <li><strong>Uptime:</strong> Monitor peer connectivity for each channel.</li>
                    <li><strong>Pending HTLCs:</strong> Watch for stuck payments.</li>
                    <li><strong>Fee Settings:</strong> Ensure policies are applied correctly.</li>
                  </ul>
                  <p className="text-xs font-semibold">Tools: <code className="text-muted-foreground">lncli listchannels</code>, <code className="text-muted-foreground">lightning-cli listchannels</code>, RTL, ThunderHub</p>
                </div>

                 {/* Routing Performance */}
                <div className="bg-background p-4 rounded-lg border border-border space-y-3">
                  <h4 className="font-medium flex items-center">
                    <BarChartHorizontal className="h-5 w-5 mr-2 text-purple-500" />
                    Routing Performance
                  </h4>
                  <p className="text-xs text-muted-foreground">Analyze forwarding activity and fee generation.</p>
                  <ul className="list-disc pl-4 text-xs text-muted-foreground space-y-1">
                    <li><strong>Forwarding Events:</strong> Track successful and failed forwards.</li>
                    <li><strong>Fees Earned:</strong> Monitor revenue per channel/overall.</li>
                    <li><strong>Volume Routed:</strong> Analyze traffic flow through channels.</li>
                    <li><strong>Channel Flow Direction:</strong> Identify imbalances needing rebalancing.</li>
                    <li><strong>Failed HTLC Analysis:</strong> Understand reasons for failed routing attempts.</li>
                  </ul>
                  <p className="text-xs font-semibold">Tools: <code className="text-muted-foreground">lncli fwdinghistory</code>, <code className="text-muted-foreground">lightning-cli listforwards</code>, Node management UIs</p>
                </div>

                 {/* Alerting */}
                <div className="bg-background p-4 rounded-lg border border-border space-y-3">
                  <h4 className="font-medium flex items-center">
                    <Bell className="h-5 w-5 mr-2 text-teal-500" />
                    Alerting
                  </h4>
                  <p className="text-xs text-muted-foreground">Set up notifications for critical events.</p>
                  <ul className="list-disc pl-4 text-xs text-muted-foreground space-y-1">
                    <li>Node offline / unresponsive.</li>
                    <li>Bitcoin backend unsynced.</li>
                    <li>Channel becomes inactive / force closing.</li>
                    <li>Low disk space / high resource usage.</li>
                    <li>Significant number of failed forwards.</li>
                    <li>New software vulnerabilities announced.</li>
                  </ul>
                  <p className="text-xs font-semibold">Tools: Bos Watchtower Client, Prometheus Alertmanager, Custom Scripts</p>
                </div>
              </div>
            </div>
          </div>

          {/* Section 3: Monitoring Tools */}
          <div className="bg-card p-6 rounded-lg border border-border">
            <h3 className="text-xl font-semibold mb-4 flex items-center">
              <Terminal className="h-5 w-5 mr-2 text-primary" />
              Common Monitoring Tools
            </h3>
            <div className="space-y-4">
              <p className="text-muted-foreground">
                Several tools can help you monitor your node effectively, ranging from command-line utilities to graphical dashboards.
              </p>
              <ul className="list-disc pl-5 text-sm text-muted-foreground space-y-2">
                <li><strong>Command Line Interface (CLI):</strong> Direct interaction via `lncli`, `lightning-cli`, `eclair-cli`. Essential for scripting and basic checks.</li>
                <li><strong>Ride The Lightning (RTL):</strong> Popular web UI for managing LND and Core Lightning nodes, offering comprehensive monitoring and channel management features.</li>
                <li><strong>ThunderHub:</strong> Another powerful web UI for LND, focused on routing node operators with detailed analytics and automation features.</li>
                <li><strong>Prometheus & Grafana:</strong> Advanced time-series database and visualization platform. Requires setup (e.g., using lndmon or similar exporters) but offers deep insights and customizable dashboards.</li>
                <li><strong>Log Files:</strong> Raw source of information. Regularly check logs (`journalctl`, specific log files) for errors and warnings.</li>
                <li><strong>Custom Scripts:</strong> Tailor monitoring checks and alerts to your specific needs using node APIs or CLI commands.</li>
                <li><strong>Telegram Bots / Alerting Services:</strong> Receive notifications for critical events (e.g., node downtime, channel issues) via services like Opago or custom bot integrations.</li>
              </ul>
              <p className="text-sm text-muted-foreground italic">
                Choose tools that match your technical skill level and monitoring requirements. Often, a combination of tools provides the best coverage.
              </p>
            </div>
          </div>

        </div>
        {/* Content migration ends here */}

        {/* Verification Checkpoint */}
        <VerifyCheckbox 
          moduleId={moduleId} 
          sectionId={sectionId} 
          verificationId={`${sectionId}-complete`} 
          label="I understand the importance of monitoring, the key areas to watch, and common tools used for Lightning node monitoring."
        />
      </ModuleContent>
    </ModuleLayout>
  );
}
