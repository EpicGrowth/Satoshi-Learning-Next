import React from 'react';
import { ModuleContent } from '@/components/learn/shared/components/module-content';
import { Cpu, Activity, LineChart, AlertTriangle, FileCode, Shield, Workflow, BarChart, Terminal, PieChart, Archive, Bell, Laptop, Clock, Router, Zap } from 'lucide-react';
import VerifyCheckbox from '@/components/learn/shared/components/verify-checkbox';
import SatoshiQuote from '@/components/learn/shared/components/satoshi-quote';

export default function MonitoringModule() {
  return (
    <ModuleContent
      moduleId="lightning-node-operations"
      moduleTitle="Node Monitoring"
      moduleDescription="Monitoring node performance"
      difficulty="Intermediate"
      icon={Cpu}
    >
      <div className="space-y-8">
        <SatoshiQuote
          quote="Without 100% confidence in the node being online, there is a risk of getting a channel force closed in a non-favorable state."
          source="A Bitcoin Developer"
          date="2018"
        />

        <div className="bg-card p-6 rounded-lg border border-border">
          <h4 className="font-medium mb-4 text-lg">A Note from Satoshi</h4>
          <div className="p-5 bg-muted/50 rounded-lg border border-border text-sm text-muted-foreground italic leading-relaxed">
            <p>
              "In Bitcoin's earliest days, monitoring primarily meant watching your wallet balance and keeping an eye on the console output. As the system evolved, operators created increasingly sophisticated tools to observe the health of nodes and the broader network.
            </p>
            <p className="mt-3">
              The Lightning Network takes this need for monitoring to an entirely new level. Unlike Bitcoin's relatively static blockchain, Lightning is a dynamic, always-on network where channels can change state at any moment. Operating a Lightning node without proper monitoring is like sailing a ship without navigational instruments—you might stay afloat, but you're essentially flying blind.
            </p>
            <p className="mt-3">
              Robust monitoring isn't just about technical diligence—it's about financial security. Every channel represents a financial relationship with real value at stake. The time and attention invested in proper monitoring directly correlates to the reliability and safety of your node operations. It's an essential part of the responsibility that comes with being your own bank."
            </p>
          </div>
        </div>
        
        <div className="bg-card p-6 rounded-lg border border-border">
          <h3 className="text-lg font-medium mb-4">Monitoring Fundamentals</h3>
          <div className="space-y-6">
            <p className="text-muted-foreground leading-relaxed">
              Effective monitoring of your Lightning node ensures optimal performance, security, and profitability. A well-monitored node allows you to identify and address issues before they become critical problems.
            </p>
            
            <div className="p-5 bg-background rounded-lg border border-border">
              <h4 className="font-medium mb-4 flex items-center">
                <Shield className="h-5 w-5 text-primary mr-2" />
                Why Monitor Your Node?
              </h4>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h5 className="font-medium mb-2">Core Objectives</h5>
                  <div className="p-4 bg-muted/30 rounded-lg">
                    <ul className="list-disc pl-5 text-sm text-muted-foreground space-y-2">
                      <li><span className="font-medium">Downtime Prevention:</span> Ensure node availability and channel uptime</li>
                      <li><span className="font-medium">Security Vigilance:</span> Detect potential security threats or anomalies</li>
                      <li><span className="font-medium">Performance Optimization:</span> Identify bottlenecks and improve routing efficiency</li>
                      <li><span className="font-medium">Economic Analysis:</span> Track routing revenue and channel profitability</li>
                      <li><span className="font-medium">Capacity Management:</span> Monitor liquidity distribution across channels</li>
                    </ul>
                  </div>
                </div>
                
                <div>
                  <h5 className="font-medium mb-2">Monitoring Challenges</h5>
                  <div className="p-4 bg-muted/30 rounded-lg">
                    <ul className="list-disc pl-5 text-sm text-muted-foreground space-y-2">
                      <li><span className="font-medium">Continuous Operation:</span> Lightning nodes must operate 24/7</li>
                      <li><span className="font-medium">Dynamic State:</span> Channel states change constantly</li>
                      <li><span className="font-medium">Technical Complexity:</span> Multiple systems require monitoring</li>
                      <li><span className="font-medium">Resource Constraints:</span> Balanced monitoring without overload</li>
                      <li><span className="font-medium">Alert Fatigue:</span> Distinguishing critical from routine alerts</li>
                    </ul>
                  </div>
                </div>
              </div>
              
              <div className="mt-6 p-4 bg-amber-50 dark:bg-amber-900/20 rounded-lg">
                <h5 className="font-medium mb-2 flex items-center">
                  <Workflow className="h-5 w-5 text-amber-600 dark:text-amber-400 mr-2" />
                  Technical Insight
                </h5>
                <p className="text-sm text-muted-foreground">
                  "The Lightning Network operates as a complex distributed system where each node must maintain consistent state across multiple channels. This creates a unique monitoring challenge: a node must be aware of both its own internal state and the broader network state. Many critical issues in Lightning operation stem from state inconsistencies that might not be immediately apparent without comprehensive monitoring."
                </p>
              </div>
            </div>
          </div>
        </div>
        
        <div className="bg-card p-6 rounded-lg border border-border">
          <h3 className="text-lg font-medium mb-4">Key Monitoring Categories</h3>
          <div className="space-y-6">
            <p className="text-muted-foreground leading-relaxed">
              A comprehensive monitoring strategy covers several distinct areas of node operation, each requiring specific metrics and tools.
            </p>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <div className="bg-background p-6 rounded-lg border border-border">
                <div className="mb-4 flex items-center">
                  <Activity className="h-6 w-6 mr-3 text-primary" />
                  <h4 className="font-medium">System Health Monitoring</h4>
                </div>
                <div className="space-y-3">
                  <p className="text-sm text-muted-foreground">
                    Track the underlying system resources that support your Lightning node.
                  </p>
                  
                  <div className="p-3 bg-muted/30 rounded-lg">
                    <p className="font-medium text-sm">Key Metrics</p>
                    <ul className="list-disc pl-4 space-y-1 text-xs text-muted-foreground mt-1">
                      <li><span className="font-medium">CPU Usage:</span> Overall and per-process utilization</li>
                      <li><span className="font-medium">Memory Usage:</span> RAM consumption and swap usage</li>
                      <li><span className="font-medium">Disk Space:</span> Free space and I/O performance</li>
                      <li><span className="font-medium">Network Bandwidth:</span> Inbound and outbound traffic</li>
                      <li><span className="font-medium">Temperature:</span> For hardware nodes or SBCs</li>
                    </ul>
                  </div>
                  
                  <div className="p-3 bg-muted/30 rounded-lg">
                    <p className="font-medium text-sm">Common Tools</p>
                    <ul className="list-disc pl-4 space-y-1 text-xs text-muted-foreground mt-1">
                      <li><span className="font-medium">Prometheus + Grafana:</span> Comprehensive system metrics</li>
                      <li><span className="font-medium">htop/top:</span> Real-time process monitoring</li>
                      <li><span className="font-medium">iotop:</span> Disk I/O monitoring</li>
                      <li><span className="font-medium">vnstat:</span> Network traffic monitoring</li>
                      <li><span className="font-medium">logwatch:</span> System log analysis</li>
                    </ul>
                  </div>
                  
                  <div className="p-2 bg-muted/30 rounded-lg">
                    <p className="font-medium text-xs mb-1">Basic System Monitoring Command</p>
                    <div className="p-2 bg-background rounded-lg border border-border/50 text-xs">
                      <pre className="overflow-x-auto text-[10px]">
                        <code className="text-muted-foreground">
                          # Combined system monitoring in a single command
                          echo "System Load: $(cat /proc/loadavg | awk '&#123;print $1, $2, $3&#125;')" && \
                          echo "Memory Usage: $(free -m | grep Mem | awk '&#123;print $3"MB used/"$2"MB total"&#125;')" && \
                          echo "Disk Space: $(df -h / | grep / | awk '&#123;print $5" used ("$3"/"$2")"&#125;')" && \
                          echo "Bitcoin Chain: $(bitcoin-cli getblockchaininfo | grep blocks | head -1 | awk '&#123;print $2&#125;' | sed 's/,//')"
                        </code>
                      </pre>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="bg-background p-6 rounded-lg border border-border">
                <div className="mb-4 flex items-center">
                  <Zap className="h-6 w-6 mr-3 text-primary" />
                  <h4 className="font-medium">Lightning Node Status</h4>
                </div>
                <div className="space-y-3">
                  <p className="text-sm text-muted-foreground">
                    Monitor the operational status of your Lightning node software.
                  </p>
                  
                  <div className="p-3 bg-muted/30 rounded-lg">
                    <p className="font-medium text-sm">Key Metrics</p>
                    <ul className="list-disc pl-4 space-y-1 text-xs text-muted-foreground mt-1">
                      <li><span className="font-medium">Node Uptime:</span> Total time since last restart</li>
                      <li><span className="font-medium">Version:</span> Current software version</li>
                      <li><span className="font-medium">Peer Count:</span> Number of connected peers</li>
                      <li><span className="font-medium">Sync Status:</span> Graph/chain synchronization</li>
                      <li><span className="font-medium">Error Rates:</span> API errors and internal exceptions</li>
                    </ul>
                  </div>
                  
                  <div className="p-3 bg-muted/30 rounded-lg">
                    <p className="font-medium text-sm">Implementation Commands</p>
                    <ul className="list-disc pl-4 space-y-1 text-xs text-muted-foreground mt-1">
                      <li><span className="font-medium">LND:</span> <code>lncli getinfo</code>, <code>lncli debuglevel</code></li>
                      <li><span className="font-medium">Core Lightning:</span> <code>lightning-cli getinfo</code></li>
                      <li><span className="font-medium">Eclair:</span> <code>eclair-cli getinfo</code></li>
                      <li><span className="font-medium">All:</span> Check log files for errors and warnings</li>
                    </ul>
                  </div>
                  
                  <div className="p-2 bg-muted/30 rounded-lg">
                    <p className="font-medium text-xs mb-1">LND Status Check Command</p>
                    <div className="p-2 bg-background rounded-lg border border-border/50 text-xs">
                      <pre className="overflow-x-auto text-[10px]">
                        <code className="text-muted-foreground">
                          # Get comprehensive node status
                          lncli getinfo | jq '&#123;
                            "version": .version,
                            "identity_pubkey": .identity_pubkey,
                            "num_peers": .num_peers,
                            "num_active_channels": .num_active_channels,
                            "num_inactive_channels": .num_inactive_channels,
                            "block_height": .block_height,
                            "synced_to_chain": .synced_to_chain
                          &#125;'
                        </code>
                      </pre>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="bg-background p-6 rounded-lg border border-border">
                <div className="mb-4 flex items-center">
                  <Router className="h-6 w-6 mr-3 text-primary" />
                  <h4 className="font-medium">Channel Monitoring</h4>
                </div>
                <div className="space-y-3">
                  <p className="text-sm text-muted-foreground">
                    Track the health, balance, and activity of your Lightning channels.
                  </p>
                  
                  <div className="p-3 bg-muted/30 rounded-lg">
                    <p className="font-medium text-sm">Key Metrics</p>
                    <ul className="list-disc pl-4 space-y-1 text-xs text-muted-foreground mt-1">
                      <li><span className="font-medium">Channel Status:</span> Active vs. inactive channels</li>
                      <li><span className="font-medium">Balance Distribution:</span> Local vs. remote balance</li>
                      <li><span className="font-medium">Channel Activity:</span> Payment routing frequency</li>
                      <li><span className="font-medium">Pending HTLCs:</span> Number and value of in-flight payments</li>
                      <li><span className="font-medium">Channel Health:</span> Error rates and stability</li>
                    </ul>
                  </div>
                  
                  <div className="p-3 bg-muted/30 rounded-lg">
                    <p className="font-medium text-sm">Implementation Commands</p>
                    <ul className="list-disc pl-4 space-y-1 text-xs text-muted-foreground mt-1">
                      <li><span className="font-medium">LND:</span> <code>lncli listchannels</code>, <code>lncli pendingchannels</code></li>
                      <li><span className="font-medium">Core Lightning:</span> <code>lightning-cli listchannels</code></li>
                      <li><span className="font-medium">Eclair:</span> <code>eclair-cli channels</code></li>
                      <li><span className="font-medium">Channel Health Checks:</span> Test payments through critical channels</li>
                    </ul>
                  </div>
                  
                  <div className="p-2 bg-muted/30 rounded-lg">
                    <p className="font-medium text-xs mb-1">Channel Balance Summary Command</p>
                    <div className="p-2 bg-background rounded-lg border border-border/50 text-xs">
                      <pre className="overflow-x-auto text-[10px]">
                        <code className="text-muted-foreground">
                          # Get channel balance summary
                          lncli listchannels | jq '
                          .channels | 
                          reduce .[] as $channel 
                          (&#123;"total_capacity": 0, "total_local": 0, "total_remote": 0, "count": 0&#125;; 
                          &#123;
                            "total_capacity": (.total_capacity + ($channel.capacity | tonumber)),
                            "total_local": (.total_local + ($channel.local_balance | tonumber)),
                            "total_remote": (.total_remote + ($channel.remote_balance | tonumber)),
                            "count": (.count + 1)
                          &#125;)'
                        </code>
                      </pre>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="bg-background p-6 rounded-lg border border-border">
                <div className="mb-4 flex items-center">
                  <LineChart className="h-6 w-6 mr-3 text-primary" />
                  <h4 className="font-medium">Routing Performance</h4>
                </div>
                <div className="space-y-3">
                  <p className="text-sm text-muted-foreground">
                    Track the routing activity and fee income of your node.
                  </p>
                  
                  <div className="p-3 bg-muted/30 rounded-lg">
                    <p className="font-medium text-sm">Key Metrics</p>
                    <ul className="list-disc pl-4 space-y-1 text-xs text-muted-foreground mt-1">
                      <li><span className="font-medium">Routing Volume:</span> Total amount forwarded</li>
                      <li><span className="font-medium">Success Rate:</span> Successful vs. failed forwards</li>
                      <li><span className="font-medium">Fee Income:</span> Revenue from routing fees</li>
                      <li><span className="font-medium">Channel Utilization:</span> Which channels route most</li>
                      <li><span className="font-medium">Routing Patterns:</span> Time-based or peer-based patterns</li>
                    </ul>
                  </div>
                  
                  <div className="p-3 bg-muted/30 rounded-lg">
                    <p className="font-medium text-sm">Implementation Commands</p>
                    <ul className="list-disc pl-4 space-y-1 text-xs text-muted-foreground mt-1">
                      <li><span className="font-medium">LND:</span> <code>lncli fwdinghistory</code>, <code>lncli feereport</code></li>
                      <li><span className="font-medium">Core Lightning:</span> <code>lightning-cli listforwards</code></li>
                      <li><span className="font-medium">Eclair:</span> <code>eclair-cli audit</code></li>
                      <li><span className="font-medium">Specialized:</span> Balance of Satoshis (BoS) reporting</li>
                    </ul>
                  </div>
                  
                  <div className="p-2 bg-muted/30 rounded-lg">
                    <p className="font-medium text-xs mb-1">Forwarding Statistics Command</p>
                    <div className="p-2 bg-background rounded-lg border border-border/50 text-xs">
                      <pre className="overflow-x-auto text-[10px]">
                        <code className="text-muted-foreground">
                          # Get forwarding statistics
                          lncli fwdinghistory --start_time="$(date -d '30 days ago' +%s)" --end_time="$(date +%s)" | jq '
                          .forwarding_events | 
                          reduce .[] as $event 
                          (&#123;"total_forwarded": 0, "total_fee": 0, "count": 0&#125;; 
                          &#123;
                            "total_forwarded": (.total_forwarded + ($event.amt_out | tonumber)),
                            "total_fee": (.total_fee + ($event.fee | tonumber)),
                            "count": (.count + 1)
                          &#125;)'
                        </code>
                      </pre>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="p-4 bg-amber-50 dark:bg-amber-900/20 rounded-lg mt-4">
              <h5 className="font-medium mb-2 flex items-center">
                <FileCode className="h-5 w-5 text-amber-600 dark:text-amber-400 mr-2" />
                Historical Context
              </h5>
              <p className="text-sm text-muted-foreground">
                "The evolution of Lightning Network monitoring mirrors the professionalization of the network itself. Early adopters managed nodes using basic command-line tools and manual checks. As more capital flowed into the network and nodes became more sophisticated, operators developed increasingly powerful monitoring suites. Today's leading Lightning operators often employ enterprise-grade monitoring systems similar to those used in traditional finance, reflecting the network's transition from experimental technology to critical financial infrastructure."
              </p>
            </div>
          </div>
        </div>
        
        <div className="bg-card p-6 rounded-lg border border-border">
          <h3 className="text-lg font-medium mb-4">Monitoring Tools & Dashboards</h3>
          <div className="space-y-6">
            <p className="text-muted-foreground leading-relaxed">
              A variety of tools exist to help you monitor your Lightning node, from simple command-line utilities to comprehensive dashboards.
            </p>
            
            <div className="overflow-hidden rounded-lg border border-border">
              <div className="p-4 bg-primary-foreground border-b border-border">
                <h4 className="font-medium">Lightning Node Monitoring Solutions</h4>
              </div>
              <div className="divide-y divide-border">
                <div className="p-4 bg-background">
                  <div className="flex flex-col md:flex-row gap-4">
                    <div className="flex-shrink-0 w-full md:w-1/4">
                      <div className="flex items-center mb-2">
                        <Terminal className="h-5 w-5 text-blue-500 mr-2" />
                        <h5 className="font-medium">Command-Line Tools</h5>
                      </div>
                      <div className="p-1.5 bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-400 rounded text-xs inline-block">
                        Built-In Options
                      </div>
                    </div>
                    <div className="flex-grow space-y-3">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                          <h6 className="text-xs font-medium mb-1">Features</h6>
                          <ul className="list-disc pl-4 text-xs text-muted-foreground space-y-1">
                            <li>Direct node interaction through native commands</li>
                            <li>Low resource overhead for constrained systems</li>
                            <li>Scriptable for custom monitoring solutions</li>
                            <li>Universally available with all implementations</li>
                          </ul>
                        </div>
                        <div>
                          <h6 className="text-xs font-medium mb-1">Examples</h6>
                          <ul className="list-disc pl-4 text-xs text-muted-foreground space-y-1">
                            <li>LND CLI commands with <code>jq</code> for processing</li>
                            <li>Balance of Satoshis (BoS) for LND</li>
                            <li>Custom bash scripts combining multiple commands</li>
                            <li>Cron jobs for scheduled checks and notifications</li>
                          </ul>
                        </div>
                      </div>
                      <div className="p-2 bg-muted/30 rounded-lg">
                        <p className="text-xs text-muted-foreground">
                          <span className="font-medium">Best For:</span> Technical users comfortable with command-line interfaces, resource-constrained systems, custom monitoring requirements, and scripted automation.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="p-4 bg-background">
                  <div className="flex flex-col md:flex-row gap-4">
                    <div className="flex-shrink-0 w-full md:w-1/4">
                      <div className="flex items-center mb-2">
                        <BarChart className="h-5 w-5 text-green-500 mr-2" />
                        <h5 className="font-medium">Web Dashboards</h5>
                      </div>
                      <div className="p-1.5 bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-400 rounded text-xs inline-block">
                        Visual Monitoring
                      </div>
                    </div>
                    <div className="flex-grow space-y-3">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                          <h6 className="text-xs font-medium mb-1">Features</h6>
                          <ul className="list-disc pl-4 text-xs text-muted-foreground space-y-1">
                            <li>Visual representation of node status and metrics</li>
                            <li>User-friendly interfaces with charts and graphs</li>
                            <li>Often includes node management capabilities</li>
                            <li>Remote monitoring through web interfaces</li>
                          </ul>
                        </div>
                        <div>
                          <h6 className="text-xs font-medium mb-1">Examples</h6>
                          <ul className="list-disc pl-4 text-xs text-muted-foreground space-y-1">
                            <li>RTL (Ride The Lightning) - Multi-implementation</li>
                            <li>ThunderHub - For LND</li>
                            <li>Lightning Terminal (LiT) - For LND</li>
                            <li>Sparko - For Core Lightning</li>
                          </ul>
                        </div>
                      </div>
                      <div className="p-2 bg-muted/30 rounded-lg">
                        <p className="text-xs text-muted-foreground">
                          <span className="font-medium">Best For:</span> Node operators who prefer graphical interfaces, those who need at-a-glance status views, users managing multiple channels, and those accessing their node remotely.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="p-4 bg-background">
                  <div className="flex flex-col md:flex-row gap-4">
                    <div className="flex-shrink-0 w-full md:w-1/4">
                      <div className="flex items-center mb-2">
                        <PieChart className="h-5 w-5 text-purple-500 mr-2" />
                        <h5 className="font-medium">Metrics Platforms</h5>
                      </div>
                      <div className="p-1.5 bg-purple-100 dark:bg-purple-900/30 text-purple-800 dark:text-purple-400 rounded text-xs inline-block">
                        Enterprise-Grade
                      </div>
                    </div>
                    <div className="flex-grow space-y-3">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                          <h6 className="text-xs font-medium mb-1">Features</h6>
                          <ul className="list-disc pl-4 text-xs text-muted-foreground space-y-1">
                            <li>Comprehensive system and application monitoring</li>
                            <li>Time-series data for historical analysis</li>
                            <li>Custom dashboards and visualizations</li>
                            <li>Advanced alerting with multiple notification channels</li>
                          </ul>
                        </div>
                        <div>
                          <h6 className="text-xs font-medium mb-1">Examples</h6>
                          <ul className="list-disc pl-4 text-xs text-muted-foreground space-y-1">
                            <li>Prometheus + Grafana - Open-source metrics stack</li>
                            <li>Telegraf + InfluxDB + Grafana - TIG Stack</li>
                            <li>Zabbix - Enterprise monitoring platform</li>
                            <li>Nagios - Legacy monitoring system</li>
                          </ul>
                        </div>
                      </div>
                      <div className="p-2 bg-muted/30 rounded-lg">
                        <p className="text-xs text-muted-foreground">
                          <span className="font-medium">Best For:</span> Professional node operators, routing node businesses, users managing large liquidity, operators requiring historical metrics and trend analysis.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="p-4 bg-background">
                  <div className="flex flex-col md:flex-row gap-4">
                    <div className="flex-shrink-0 w-full md:w-1/4">
                      <div className="flex items-center mb-2">
                        <Bell className="h-5 w-5 text-red-500 mr-2" />
                        <h5 className="font-medium">Alerting Systems</h5>
                      </div>
                      <div className="p-1.5 bg-red-100 dark:bg-red-900/30 text-red-800 dark:text-red-400 rounded text-xs inline-block">
                        Proactive Notification
                      </div>
                    </div>
                    <div className="flex-grow space-y-3">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                          <h6 className="text-xs font-medium mb-1">Features</h6>
                          <ul className="list-disc pl-4 text-xs text-muted-foreground space-y-1">
                            <li>Real-time notifications for critical events</li>
                            <li>Multiple delivery channels (email, SMS, messaging)</li>
                            <li>Configurable thresholds and conditions</li>
                            <li>Escalation procedures for severe issues</li>
                          </ul>
                        </div>
                        <div>
                          <h6 className="text-xs font-medium mb-1">Examples</h6>
                          <ul className="list-disc pl-4 text-xs text-muted-foreground space-y-1">
                            <li>AlertManager - Works with Prometheus</li>
                            <li>Pager Duty - Enterprise incident response</li>
                            <li>Telegram/Discord bots for notifications</li>
                            <li>Custom scripts with email/SMS integration</li>
                          </ul>
                        </div>
                      </div>
                      <div className="p-2 bg-muted/30 rounded-lg">
                        <p className="text-xs text-muted-foreground">
                          <span className="font-medium">Best For:</span> Node operators requiring immediate notification of issues, those managing nodes with significant liquidity, operators who cannot constantly monitor dashboards, business-critical node operations.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="p-5 bg-background rounded-lg border border-border">
              <h4 className="font-medium mb-4 flex items-center">
                <Laptop className="h-5 w-5 text-primary mr-2" />
                Setting Up Basic Monitoring
              </h4>
              
              <div className="space-y-4">
                <p className="text-sm text-muted-foreground">
                  For those new to Lightning node monitoring, here's a simple approach to get started:
                </p>
                
                <div className="relative overflow-hidden rounded-lg bg-muted/20 p-6">
                  <div className="space-y-8">
                    {/* Step 1 */}
                    <div className="relative flex gap-4">
                      <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-primary text-primary-foreground shadow-md">
                        <span className="text-sm font-bold">1</span>
                      </div>
                      <div className="absolute left-5 top-10 h-[calc(100%-2.5rem)] w-px bg-border" />
                      <div className="pb-8">
                        <h4 className="font-medium mb-2">Install a Web Dashboard</h4>
                        <div className="p-4 bg-background rounded-lg text-sm text-muted-foreground">
                          <p>Start with a user-friendly web dashboard to get visual feedback on your node's status.</p>
                          <div className="p-3 bg-muted/30 rounded-lg mt-3 text-xs">
                            <p className="font-medium">RTL (Ride The Lightning) Installation</p>
                            <pre className="overflow-x-auto mt-2 text-[10px]">
                              <code className="text-muted-foreground">
                                # Install RTL for LND
                                git clone https://github.com/Ride-The-Lightning/RTL.git
                                cd RTL
                                npm install --only=prod
                                
                                # Configure RTL (create RTL-Config.json)
                                # Start RTL
                                node rtl
                              </code>
                            </pre>
                          </div>
                        </div>
                      </div>
                    </div>
                    
                    {/* Step 2 */}
                    <div className="relative flex gap-4">
                      <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-primary text-primary-foreground shadow-md">
                        <span className="text-sm font-bold">2</span>
                      </div>
                      <div className="absolute left-5 top-10 h-[calc(100%-2.5rem)] w-px bg-border" />
                      <div className="pb-8">
                        <h4 className="font-medium mb-2">Create Simple Monitoring Scripts</h4>
                        <div className="p-4 bg-background rounded-lg text-sm text-muted-foreground">
                          <p>Develop basic scripts to check critical metrics and alert you to problems.</p>
                          <div className="p-3 bg-muted/30 rounded-lg mt-3 text-xs">
                            <p className="font-medium">Example Basic Monitoring Script</p>
                            <pre className="overflow-x-auto mt-2 text-[10px]">
                              <code className="text-muted-foreground">
                                #!/bin/bash
                                # Simple LND monitoring script
                                
                                # Check if LND is running
                                pgrep -x "lnd" &gt; /dev/null || echo "ALERT: LND is not running!"
                                
                                # Check sync status 
                                lncli getinfo | grep "synced_to_chain"
                                
                                # Check active channels
                                lncli getinfo | grep "num_active_channels"
                                
                                # Example email alert (commented out)
                                # echo "ALERT: Node issue" | mail -s "LND Alert" admin@example.com
                                
                                # Add to crontab to run every 15 minutes
                                # */15 * * * * /path/to/monitor_lnd.sh
                              </code>
                            </pre>
                          </div>
                        </div>
                      </div>
                    </div>
                    
                    {/* Step 3 */}
                    <div className="relative flex gap-4">
                      <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-primary text-primary-foreground shadow-md">
                        <span className="text-sm font-bold">3</span>
                      </div>
                      <div className="absolute left-5 top-10 h-[calc(100%-2.5rem)] w-px bg-border" />
                      <div className="pb-8">
                        <h4 className="font-medium mb-2">Set Up Mobile Notifications</h4>
                        <div className="p-4 bg-background rounded-lg text-sm text-muted-foreground">
                          <p>Configure alerts to be delivered to your mobile device for critical issues.</p>
                          <div className="p-3 bg-muted/30 rounded-lg mt-3 text-xs">
                            <p className="font-medium">Telegram Bot Notification Example</p>
                            <pre className="overflow-x-auto mt-2 text-[10px]">
                              <code className="text-muted-foreground">
                                #!/bin/bash
                                # Script to send Lightning node alerts via Telegram
                                
                                # For security, tokens are stored in environment variables
                                # BOT_TOKEN and CHAT_ID would be set in your environment
                                
                                # Basic node status check
                                lncli getinfo &gt; /dev/null || echo "ERROR: Cannot connect to LND"
                                
                                # Check blockchain sync status
                                lncli getinfo | grep "synced_to_chain"
                                
                                # Check number of peers
                                lncli getinfo | grep "num_peers"
                                
                                # Check active channels
                                lncli getinfo | grep "num_active_channels"
                                
                                # Example of how you'd send a Telegram message
                                # (actual implementation would use curl with proper tokens)
                                echo "Sending alert: Node status check complete"
                                
                                # Exit with success
                                exit 0
                              </code>
                            </pre>
                          </div>
                        </div>
                      </div>
                    </div>
                    
                    {/* Step 4 */}
                    <div className="relative flex gap-4">
                      <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-primary text-primary-foreground shadow-md">
                        <span className="text-sm font-bold">4</span>
                      </div>
                      <div className="pb-8">
                        <h4 className="font-medium mb-2">Implement Scheduled Health Checks</h4>
                        <div className="p-4 bg-background rounded-lg text-sm text-muted-foreground">
                          <p>Set up regular checks to verify your node's health and performance.</p>
                          <div className="p-3 bg-muted/30 rounded-lg mt-3 text-xs">
                            <p className="font-medium">Cron Schedule Example</p>
                            <pre className="overflow-x-auto mt-2 text-[10px]">
                              <code className="text-muted-foreground">
                                # Example crontab entries for regular monitoring
                                
                                # Check node status every 15 minutes
                                */15 * * * * /home/lightning/scripts/check_node_status.sh
                                
                                # Generate daily channel report at 7 AM
                                0 7 * * * /home/lightning/scripts/channel_report.sh
                                
                                # Check disk space hourly
                                0 * * * * /home/lightning/scripts/check_disk_space.sh
                                
                                # Weekly backup verification
                                0 0 * * 0 /home/lightning/scripts/verify_backup.sh
                              </code>
                            </pre>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="p-4 bg-amber-50 dark:bg-amber-900/20 rounded-lg">
                  <h5 className="font-medium mb-2 flex items-center">
                    <Workflow className="h-5 w-5 text-amber-600 dark:text-amber-400 mr-2" />
                    Technical Insight
                  </h5>
                  <p className="text-sm text-muted-foreground">
                    "Monitoring isn't just about watching metrics—it's about developing a system that extends your ability to respond to issues. A well-designed monitoring setup functions as a force multiplier, allowing a single operator to effectively manage multiple nodes or channels. As you gain experience, your monitoring should evolve from simple uptime checks to sophisticated systems that can detect subtle issues before they impact operations."
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="bg-card p-6 rounded-lg border border-border">
          <h3 className="text-lg font-medium mb-4">Advanced Monitoring Strategies</h3>
          <div className="space-y-6">
            <p className="text-muted-foreground leading-relaxed">
              For operators managing larger nodes or multiple nodes, more sophisticated monitoring approaches may be necessary.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="p-5 bg-background rounded-lg border border-border h-full">
                <h4 className="font-medium mb-3 flex items-center">
                  <Clock className="h-5 w-5 text-primary mr-2" />
                  Predictive Monitoring
                </h4>
                <div className="space-y-4 text-sm">
                  <p className="text-muted-foreground">
                    Use historical data and trends to anticipate potential issues before they occur.
                  </p>
                  
                  <div className="grid grid-cols-1 gap-4">
                    <div className="p-3 bg-muted/30 rounded-lg">
                      <h5 className="font-medium text-sm mb-2">Implementation Techniques</h5>
                      <ul className="list-disc pl-4 space-y-1 text-xs text-muted-foreground">
                        <li><span className="font-medium">Trend Analysis:</span> Track metrics over time to identify potential problems</li>
                        <li><span className="font-medium">Capacity Planning:</span> Project when disk space or channel capacity will become critical</li>
                        <li><span className="font-medium">Pattern Recognition:</span> Identify recurring patterns that precede node issues</li>
                        <li><span className="font-medium">Resource Forecasting:</span> Predict when system resources might become constraining</li>
                      </ul>
                    </div>
                    
                    <div className="p-3 bg-muted/30 rounded-lg">
                      <h5 className="font-medium text-sm mb-2">Example Predictive Checks</h5>
                      <ul className="list-disc pl-4 space-y-1 text-xs text-muted-foreground">
                        <li>Disk space growth rate analysis to predict future storage needs</li>
                        <li>Channel balance trend analysis to anticipate rebalancing needs</li>
                        <li>Fee income projections based on historical routing data</li>
                        <li>Peer connection stability patterns to identify problematic nodes</li>
                      </ul>
                    </div>
                    
                    <div className="p-3 bg-muted/30 rounded-lg">
                      <h5 className="font-medium text-sm mb-2">Tools & Approaches</h5>
                      <ul className="list-disc pl-4 space-y-1 text-xs text-muted-foreground">
                        <li>Time-series databases (InfluxDB, Prometheus) with retention policies</li>
                        <li>Statistical analysis in Python or R for trend identification</li>
                        <li>Custom anomaly detection scripts for unusual patterns</li>
                        <li>Regular reporting with projections and forecasts</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="p-5 bg-background rounded-lg border border-border h-full">
                <h4 className="font-medium mb-3 flex items-center">
                  <AlertTriangle className="h-5 w-5 text-primary mr-2" />
                  Critical Path Monitoring
                </h4>
                <div className="space-y-4 text-sm">
                  <p className="text-muted-foreground">
                    Focus monitoring resources on the most important components and channels.
                  </p>
                  
                  <div className="grid grid-cols-1 gap-4">
                    <div className="p-3 bg-muted/30 rounded-lg">
                      <h5 className="font-medium text-sm mb-2">Identifying Critical Paths</h5>
                      <ul className="list-disc pl-4 space-y-1 text-xs text-muted-foreground">
                        <li><span className="font-medium">High-Value Channels:</span> Channels with the largest capacity</li>
                        <li><span className="font-medium">Revenue-Generating Routes:</span> Paths that generate significant fee income</li>
                        <li><span className="font-medium">Strategic Connections:</span> Channels connecting different network segments</li>
                        <li><span className="font-medium">Service Dependencies:</span> Channels required for your services or applications</li>
                      </ul>
                    </div>
                    
                    <div className="p-3 bg-muted/30 rounded-lg">
                      <h5 className="font-medium text-sm mb-2">Enhanced Monitoring Techniques</h5>
                      <ul className="list-disc pl-4 space-y-1 text-xs text-muted-foreground">
                        <li>Higher frequency checks for critical channels and connections</li>
                        <li>Active probing with test payments to verify channel functionality</li>
                        <li>Redundant monitoring systems for critical infrastructure</li>
                        <li>Dedicated alerting paths with escalation procedures</li>
                      </ul>
                    </div>
                    
                    <div className="p-3 bg-muted/30 rounded-lg">
                      <h5 className="font-medium text-sm mb-2">Implementation Example</h5>
                      <pre className="overflow-x-auto text-[10px]">
                        <code className="text-muted-foreground">
                          #!/bin/bash
                          # Monitor critical channels with higher scrutiny
                          
                          # Example of checking specific channels by ID
                          
                          # Check first critical channel
                          lncli getchaninfo 123456789:0 | grep "active"
                          
                          # Check second critical channel
                          lncli getchaninfo 987654321:1 | grep "active"
                          
                          # Example high priority alert (would use your notification system)
                          echo "Checking critical channels for activity status"
                          
                          # You could add more specific checks for important channels
                          # such as fee policies, balances, etc.
                          
                          # Example of advanced monitoring
                        </code>
                      </pre>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-4">
              <div className="p-5 bg-background rounded-lg border border-border h-full">
                <h4 className="font-medium mb-3 flex items-center">
                  <Archive className="h-5 w-5 text-primary mr-2" />
                  Logging & Metrics Retention
                </h4>
                <div className="space-y-4 text-sm">
                  <p className="text-muted-foreground">
                    Develop strategies for long-term storage and analysis of monitoring data.
                  </p>
                  
                  <div className="grid grid-cols-1 gap-4">
                    <div className="p-3 bg-muted/30 rounded-lg">
                      <h5 className="font-medium text-sm mb-2">Logging Strategy</h5>
                      <ul className="list-disc pl-4 space-y-1 text-xs text-muted-foreground">
                        <li><span className="font-medium">Log Levels:</span> Configure appropriate verbosity for different components</li>
                        <li><span className="font-medium">Log Rotation:</span> Prevent logs from consuming excessive disk space</li>
                        <li><span className="font-medium">Centralized Logging:</span> Aggregate logs from multiple systems</li>
                        <li><span className="font-medium">Structured Logging:</span> Use formats that facilitate automated analysis</li>
                      </ul>
                    </div>
                    
                    <div className="p-3 bg-muted/30 rounded-lg">
                      <h5 className="font-medium text-sm mb-2">Metrics Storage</h5>
                      <ul className="list-disc pl-4 space-y-1 text-xs text-muted-foreground">
                        <li><span className="font-medium">Time-Series DB:</span> Store metrics with appropriate retention policies</li>
                        <li><span className="font-medium">Downsampling:</span> Reduce resolution of older data to save space</li>
                        <li><span className="font-medium">Data Export:</span> Archive important metrics for long-term storage</li>
                        <li><span className="font-medium">Backup Strategy:</span> Ensure metrics survival across system failures</li>
                      </ul>
                    </div>
                    
                    <div className="p-3 bg-muted/30 rounded-lg">
                      <h5 className="font-medium text-sm mb-2">Implementation Example</h5>
                      <pre className="overflow-x-auto text-[10px]">
                        <code className="text-muted-foreground">
                          # Prometheus retention configuration example
                          
                          # In prometheus.yml
                          storage:
                            tsdb:
                              path: /var/lib/prometheus
                              retention.time: 90d     # Keep data for 90 days
                              retention.size: 10GB   # Maximum storage size
                            
                          # LND log configuration (lnd.conf)
                          [Application Options]
                          debuglevel=info
                          maxlogfiles=10
                          maxlogfilesize=20
                        </code>
                      </pre>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="p-5 bg-background rounded-lg border border-border h-full">
                <h4 className="font-medium mb-3 flex items-center">
                  <Router className="h-5 w-5 text-primary mr-2" />
                  Multi-Node Monitoring
                </h4>
                <div className="space-y-4 text-sm">
                  <p className="text-muted-foreground">
                    Strategies for monitoring multiple Lightning nodes from a centralized system.
                  </p>
                  
                  <div className="grid grid-cols-1 gap-4">
                    <div className="p-3 bg-muted/30 rounded-lg">
                      <h5 className="font-medium text-sm mb-2">Centralization Approaches</h5>
                      <ul className="list-disc pl-4 space-y-1 text-xs text-muted-foreground">
                        <li><span className="font-medium">Monitoring Server:</span> Dedicated system for aggregating node metrics</li>
                        <li><span className="font-medium">Push vs. Pull:</span> Consider which model works best for your infrastructure</li>
                        <li><span className="font-medium">Secure Access:</span> Implement appropriate security for cross-node monitoring</li>
                        <li><span className="font-medium">Unified Dashboards:</span> Single view across all nodes</li>
                      </ul>
                    </div>
                    
                    <div className="p-3 bg-muted/30 rounded-lg">
                      <h5 className="font-medium text-sm mb-2">Multi-Node Metrics</h5>
                      <ul className="list-disc pl-4 space-y-1 text-xs text-muted-foreground">
                        <li><span className="font-medium">Comparison Metrics:</span> Track relative performance across nodes</li>
                        <li><span className="font-medium">Aggregate Statistics:</span> Combined metrics from all nodes</li>
                        <li><span className="font-medium">Node Ranking:</span> Compare node performance by key metrics</li>
                        <li><span className="font-medium">Network Position:</span> Understand each node's place in your infrastructure</li>
                      </ul>
                    </div>
                    
                    <div className="p-3 bg-muted/30 rounded-lg">
                      <h5 className="font-medium text-sm mb-2">Implementation Example</h5>
                      <pre className="overflow-x-auto text-[10px]">
                        <code className="text-muted-foreground">
                          # Prometheus multi-node scrape configuration
                          
                          scrape_configs:
                            - job_name: 'lightning_nodes'
                              scrape_interval: 15s
                              static_configs:
                                - targets: ['node1:9090', 'node2:9090', 'node3:9090']
                                  labels:
                                    group: 'production'
                                
                                - targets: ['testnode1:9090', 'testnode2:9090']
                                  labels:
                                    group: 'testing'
                        </code>
                      </pre>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="p-4 bg-amber-50 dark:bg-amber-900/20 rounded-lg mt-4">
              <h5 className="font-medium mb-2 flex items-center">
                <FileCode className="h-5 w-5 text-amber-600 dark:text-amber-400 mr-2" />
                Advanced Strategy
              </h5>
              <p className="text-sm text-muted-foreground">
                "The most sophisticated Lightning node operators typically employ a multi-layered monitoring strategy. At the foundation is a robust metrics platform like Prometheus/Grafana for historical data and visualization. This is complemented by active monitoring through test payments and channel probes to verify real-world functionality. On top of this sits a carefully tuned alerting system with different severity levels and notification channels. The entire system is regularly audited and tested through simulated failures to ensure it captures all critical scenarios."
              </p>
            </div>
          </div>
        </div>
        
        <div className="p-6 bg-card rounded-lg border border-border">
          <h4 className="font-medium mb-4 text-lg">Satoshi's Perspective</h4>
          <div className="p-5 bg-muted/50 rounded-lg border border-border text-sm text-muted-foreground italic leading-relaxed">
            <p>
              "The attention given to monitoring reflects a node operator's commitment to the network. When I designed Bitcoin, I emphasized the need for nodes to maintain the network's integrity. With Lightning, this responsibility is even more pronounced, as each node actively contributes to the network's routing capacity and reliability.
            </p>
            <p className="mt-3">
              What fascinates me is how monitoring systems mirror the evolution I envisioned for Bitcoin—from simple hobbyist tools to professional infrastructure. The progression from basic command-line checks to sophisticated monitoring platforms reflects the network's maturation. This professionalization doesn't centralize control; rather, it strengthens the decentralized foundation by enabling more robust node operations.
            </p>
            <p className="mt-3">
              Remember that monitoring isn't just a technical exercise—it's an expression of the core values that underpin Bitcoin and Lightning: self-sovereignty, personal responsibility, and trustless verification. By rigorously monitoring your node, you're not just protecting your own funds; you're contributing to the resilience of a financial system that operates without centralized oversight."
            </p>
          </div>
        </div>

        <div className="mt-6 border-t border-border/40 pt-4">
          <VerifyCheckbox
            moduleId="lightning-node-operations"
            verificationId="monitoring"
            label="I understand how to monitor a Lightning node"
          />
        </div>
      </div>
    </ModuleContent>
  );
}