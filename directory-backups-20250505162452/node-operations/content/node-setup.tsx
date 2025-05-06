import React from 'react';
import { ModuleContent } from '@/components/learn/shared/components/module-content';
import { Server, HardDrive, Cpu, Wifi, Code, ShieldCheck, Settings, Terminal, Database, Shield, FileCode, Workflow, AlertCircle, Network } from 'lucide-react';
import VerifyCheckbox from '@/components/learn/shared/components/verify-checkbox';
import SatoshiQuote from '@/components/learn/shared/components/satoshi-quote';

export default function NodeSetup() {
  return (
    <ModuleContent
      moduleId="lightning-node-operations"
      moduleTitle="Node Setup"
      moduleDescription="Setting up your Lightning node"
      difficulty="Intermediate"
      icon={Server}
    >
      <div className="space-y-8">
        <SatoshiQuote
          quote="The root problem with conventional currency is all the trust that's required to make it work. The central bank must be trusted not to debase the currency, but the history of fiat currencies is full of breaches of that trust."
          source="Satoshi Nakamoto"
          date="February 11, 2009"
        />

        <div className="bg-card p-6 rounded-lg border border-border">
          <h4 className="font-medium mb-4 text-lg">A Note from Satoshi</h4>
          <div className="p-5 bg-muted/50 rounded-lg border border-border text-sm text-muted-foreground italic leading-relaxed">
            <p>
              "When I designed Bitcoin, one of my core principles was decentralization—the idea that anyone should be able to participate in the network as a fully sovereign entity. Running a node is the purest expression of this principle, as it allows individuals to personally validate the entire blockchain rather than trusting someone else to do it for them.
            </p>
            <p className="mt-3">
              The Lightning Network extends this philosophy. By running a Lightning node, you're not just a participant in the network; you become part of its infrastructure. Your node helps route payments, provides liquidity, and strengthens the resilience of the entire ecosystem. Just as Bitcoin nodes collectively enforce the consensus rules, Lightning nodes collectively create a robust payment network.
            </p>
            <p className="mt-3">
              I always envisioned a future where individuals could operate their own financial infrastructure without relying on third parties. The fact that today's Lightning nodes can be run on affordable hardware within a home environment is a remarkable achievement—it's financial sovereignty accessible to anyone with the motivation to pursue it."
            </p>
          </div>
        </div>
        
        <div className="bg-card p-6 rounded-lg border border-border">
          <h3 className="text-lg font-medium mb-4">Node Setup Fundamentals</h3>
          <div className="space-y-6">
            <p className="text-muted-foreground leading-relaxed">
              A Lightning Network node enables direct participation in this second-layer scaling solution. By running your own node, you gain sovereignty over your Bitcoin transactions, contribute to network capacity, and potentially earn routing fees.
            </p>
            
            <div className="p-5 bg-background rounded-lg border border-border">
              <h4 className="font-medium mb-4 flex items-center">
                <Shield className="h-5 w-5 text-primary mr-2" />
                Why Run Your Own Node?
              </h4>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h5 className="font-medium mb-2">Benefits to You</h5>
                  <div className="p-4 bg-muted/30 rounded-lg">
                    <ul className="list-disc pl-5 text-sm text-muted-foreground space-y-2">
                      <li><span className="font-medium">Financial Sovereignty:</span> Complete control over your Lightning funds</li>
                      <li><span className="font-medium">Privacy:</span> No need to trust third parties with your transaction data</li>
                      <li><span className="font-medium">Reduced Fees:</span> Direct channel connections to services you use</li>
                      <li><span className="font-medium">Fee Income:</span> Potential earnings from routing payments</li>
                      <li><span className="font-medium">Security:</span> Less risk than custodial solutions</li>
                    </ul>
                  </div>
                </div>
                
                <div>
                  <h5 className="font-medium mb-2">Benefits to the Network</h5>
                  <div className="p-4 bg-muted/30 rounded-lg">
                    <ul className="list-disc pl-5 text-sm text-muted-foreground space-y-2">
                      <li><span className="font-medium">Increased Capacity:</span> More channels means more pathways for payments</li>
                      <li><span className="font-medium">Improved Reliability:</span> More nodes create redundancy</li>
                      <li><span className="font-medium">Better Decentralization:</span> Diverse node operators prevent centralization</li>
                      <li><span className="font-medium">Reduced Network Fees:</span> Competition keeps routing fees in check</li>
                      <li><span className="font-medium">Network Resilience:</span> More robust against disruptions</li>
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
                  "When running a Lightning node, you're actually operating two interconnected systems: a Bitcoin full node that validates and stores the blockchain, and a Lightning node that manages payment channels and routes payments. This layered architecture exemplifies the way that Bitcoin was designed to serve as a foundation for additional protocols and services."
                </p>
              </div>
            </div>
          </div>
        </div>
        
        <div className="bg-card p-6 rounded-lg border border-border">
          <h3 className="text-lg font-medium mb-4">Hardware Requirements</h3>
          <div className="space-y-6">
            <p className="text-muted-foreground leading-relaxed">
              Your Lightning node's hardware requirements depend on your goals, budget, and technical expertise. Different setups offer various tradeoffs between cost, performance, and maintenance requirements.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-background p-6 rounded-lg border border-border">
                <div className="mb-4 flex items-center">
                  <HardDrive className="h-6 w-6 mr-3 text-primary" />
                  <h4 className="font-medium">Storage</h4>
                </div>
                <div className="space-y-3">
                  <div className="p-3 bg-muted/30 rounded-lg">
                    <p className="font-medium text-sm">Minimum Requirement</p>
                    <p className="text-xs text-muted-foreground">500GB SSD</p>
                    <p className="text-xs text-muted-foreground mt-1">
                      Sufficient for Bitcoin blockchain storage with pruning enabled
                    </p>
                  </div>
                  
                  <div className="p-3 bg-muted/30 rounded-lg">
                    <p className="font-medium text-sm">Recommended</p>
                    <p className="text-xs text-muted-foreground">1TB+ SSD</p>
                    <p className="text-xs text-muted-foreground mt-1">
                      Provides room for full blockchain and future growth
                    </p>
                  </div>
                  
                  <div className="p-3 bg-muted/30 rounded-lg">
                    <p className="font-medium text-sm">Technical Note</p>
                    <p className="text-xs text-muted-foreground">
                      SSDs are strongly preferred over HDDs due to significantly better random read/write performance, which is critical for blockchain validation and retrieval.
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="bg-background p-6 rounded-lg border border-border">
                <div className="mb-4 flex items-center">
                  <Cpu className="h-6 w-6 mr-3 text-primary" />
                  <h4 className="font-medium">Processing Power</h4>
                </div>
                <div className="space-y-3">
                  <div className="p-3 bg-muted/30 rounded-lg">
                    <p className="font-medium text-sm">Minimum Requirement</p>
                    <p className="text-xs text-muted-foreground">2-core CPU, 1.4GHz+</p>
                    <p className="text-xs text-muted-foreground mt-1">
                      Adequate for basic operation and small number of channels
                    </p>
                  </div>
                  
                  <div className="p-3 bg-muted/30 rounded-lg">
                    <p className="font-medium text-sm">Recommended</p>
                    <p className="text-xs text-muted-foreground">4-core CPU, 2GHz+</p>
                    <p className="text-xs text-muted-foreground mt-1">
                      Better handling of channel operations and routing calculations
                    </p>
                  </div>
                  
                  <div className="p-3 bg-muted/30 rounded-lg">
                    <p className="font-medium text-sm">Technical Note</p>
                    <p className="text-xs text-muted-foreground">
                      CPU becomes more important when handling many channels or during high-volume routing periods. Initial blockchain sync also benefits from stronger CPUs.
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="bg-background p-6 rounded-lg border border-border">
                <div className="mb-4 flex items-center">
                  <Database className="h-6 w-6 mr-3 text-primary" />
                  <h4 className="font-medium">Memory (RAM)</h4>
                </div>
                <div className="space-y-3">
                  <div className="p-3 bg-muted/30 rounded-lg">
                    <p className="font-medium text-sm">Minimum Requirement</p>
                    <p className="text-xs text-muted-foreground">4GB RAM</p>
                    <p className="text-xs text-muted-foreground mt-1">
                      Functional but may struggle during peak activity
                    </p>
                  </div>
                  
                  <div className="p-3 bg-muted/30 rounded-lg">
                    <p className="font-medium text-sm">Recommended</p>
                    <p className="text-xs text-muted-foreground">8GB+ RAM</p>
                    <p className="text-xs text-muted-foreground mt-1">
                      Provides smooth operation even during high activity
                    </p>
                  </div>
                  
                  <div className="p-3 bg-muted/30 rounded-lg">
                    <p className="font-medium text-sm">Technical Note</p>
                    <p className="text-xs text-muted-foreground">
                      RAM requirements increase with the number of channels you manage and the number of unconfirmed transactions in the mempool. Memory impacts both Bitcoin and Lightning node performance.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-4">
              <div className="bg-background p-6 rounded-lg border border-border">
                <div className="mb-4 flex items-center">
                  <Wifi className="h-6 w-6 mr-3 text-primary" />
                  <h4 className="font-medium">Network Requirements</h4>
                </div>
                <div className="space-y-3">
                  <div className="p-3 bg-muted/30 rounded-lg">
                    <p className="font-medium text-sm">Internet Connection</p>
                    <ul className="list-disc pl-4 space-y-1 text-xs text-muted-foreground mt-1">
                      <li><span className="font-medium">Speed:</span> 5 Mbps download/1 Mbps upload minimum</li>
                      <li><span className="font-medium">Stability:</span> Consistent connection with minimal downtime</li>
                      <li><span className="font-medium">Data Usage:</span> 20-100GB monthly depending on network activity</li>
                    </ul>
                  </div>
                  
                  <div className="p-3 bg-muted/30 rounded-lg">
                    <p className="font-medium text-sm">Networking Considerations</p>
                    <ul className="list-disc pl-4 space-y-1 text-xs text-muted-foreground mt-1">
                      <li><span className="font-medium">Port Forwarding:</span> Ability to configure router for inbound connections</li>
                      <li><span className="font-medium">Static IP:</span> Preferred, or dynamic DNS solution</li>
                      <li><span className="font-medium">Peer Connections:</span> Higher upload bandwidth enables more connections</li>
                    </ul>
                  </div>
                </div>
              </div>
              
              <div className="bg-background p-6 rounded-lg border border-border">
                <div className="mb-4 flex items-center">
                  <AlertCircle className="h-6 w-6 mr-3 text-primary" />
                  <h4 className="font-medium">Additional Considerations</h4>
                </div>
                <div className="space-y-3">
                  <div className="p-3 bg-muted/30 rounded-lg">
                    <p className="font-medium text-sm">Power Reliability</p>
                    <ul className="list-disc pl-4 space-y-1 text-xs text-muted-foreground mt-1">
                      <li><span className="font-medium">UPS:</span> Uninterruptible power supply recommended</li>
                      <li><span className="font-medium">Energy Consumption:</span> 5-15W for SBC nodes, 50-100W+ for PC-based nodes</li>
                      <li><span className="font-medium">Cooling:</span> Adequate ventilation to prevent overheating</li>
                    </ul>
                  </div>
                  
                  <div className="p-3 bg-muted/30 rounded-lg">
                    <p className="font-medium text-sm">Physical Security</p>
                    <ul className="list-disc pl-4 space-y-1 text-xs text-muted-foreground mt-1">
                      <li><span className="font-medium">Location:</span> Secure place with limited physical access</li>
                      <li><span className="font-medium">Backups:</span> Offsite storage for seed words and channel backups</li>
                      <li><span className="font-medium">Form Factor:</span> Consider noise and heat if located in living space</li>
                    </ul>
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
                "In the early days of Bitcoin, running a full node was possible on most consumer hardware. As the blockchain grew, resource requirements increased significantly. The Lightning Network returns to Bitcoin's roots by making node operation accessible to anyone with modest hardware. A Raspberry Pi can now participate in a global payment network—something unimaginable with traditional financial infrastructure."
              </p>
            </div>
          </div>
        </div>
        
        <div className="bg-card p-6 rounded-lg border border-border">
          <h3 className="text-lg font-medium mb-4">Node Implementation Options</h3>
          <div className="space-y-6">
            <p className="text-muted-foreground leading-relaxed">
              There are several Lightning Network implementations to choose from, each with its own philosophy, features, and tradeoffs. The right choice depends on your technical expertise, goals, and preferences.
            </p>
            
            <div className="overflow-hidden rounded-lg border border-border">
              <div className="p-4 bg-primary-foreground border-b border-border">
                <h4 className="font-medium">Major Lightning Implementations</h4>
              </div>
              <div className="divide-y divide-border">
                <div className="p-4 bg-background">
                  <div className="flex flex-col md:flex-row gap-4">
                    <div className="flex-shrink-0 w-full md:w-1/4">
                      <h5 className="font-medium mb-1">LND (Lightning Network Daemon)</h5>
                      <p className="text-xs text-muted-foreground mb-2">By Lightning Labs</p>
                      <div className="p-1.5 bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-400 rounded text-xs inline-block">
                        Most Widely Used
                      </div>
                    </div>
                    <div className="flex-grow space-y-3">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                          <h6 className="text-xs font-medium mb-1">Strengths</h6>
                          <ul className="list-disc pl-4 text-xs text-muted-foreground space-y-1">
                            <li>Extensive documentation and community support</li>
                            <li>Rich API and wide integration support</li>
                            <li>User-friendly command line interface</li>
                            <li>Well-tested in production environments</li>
                          </ul>
                        </div>
                        <div>
                          <h6 className="text-xs font-medium mb-1">Technical Details</h6>
                          <ul className="list-disc pl-4 text-xs text-muted-foreground space-y-1">
                            <li>Written in Go language</li>
                            <li>Requires Bitcoin Core</li>
                            <li>Uses Neutrino for light clients (optional)</li>
                            <li>Actively developed with frequent updates</li>
                          </ul>
                        </div>
                      </div>
                      <div className="p-2 bg-muted/30 rounded-lg">
                        <p className="text-xs text-muted-foreground">
                          <span className="font-medium">Best For:</span> New Lightning node operators, developers building Lightning applications, users seeking the most community support.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="p-4 bg-background">
                  <div className="flex flex-col md:flex-row gap-4">
                    <div className="flex-shrink-0 w-full md:w-1/4">
                      <h5 className="font-medium mb-1">Core Lightning (CLN)</h5>
                      <p className="text-xs text-muted-foreground mb-2">By Blockstream</p>
                      <div className="p-1.5 bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-400 rounded text-xs inline-block">
                        Highly Configurable
                      </div>
                    </div>
                    <div className="flex-grow space-y-3">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                          <h6 className="text-xs font-medium mb-1">Strengths</h6>
                          <ul className="list-disc pl-4 text-xs text-muted-foreground space-y-1">
                            <li>Modular architecture with plugin system</li>
                            <li>Lighter resource requirements</li>
                            <li>Strong focus on reliability and security</li>
                            <li>Deep integration with Bitcoin Core</li>
                          </ul>
                        </div>
                        <div>
                          <h6 className="text-xs font-medium mb-1">Technical Details</h6>
                          <ul className="list-disc pl-4 text-xs text-muted-foreground space-y-1">
                            <li>Written in C language</li>
                            <li>Plugin system using any language</li>
                            <li>Supports experimental features via plugins</li>
                            <li>Lower memory footprint than other implementations</li>
                          </ul>
                        </div>
                      </div>
                      <div className="p-2 bg-muted/30 rounded-lg">
                        <p className="text-xs text-muted-foreground">
                          <span className="font-medium">Best For:</span> Advanced users comfortable with command line, developers wanting to extend functionality with plugins, systems with limited resources.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="p-4 bg-background">
                  <div className="flex flex-col md:flex-row gap-4">
                    <div className="flex-shrink-0 w-full md:w-1/4">
                      <h5 className="font-medium mb-1">Eclair</h5>
                      <p className="text-xs text-muted-foreground mb-2">By ACINQ</p>
                      <div className="p-1.5 bg-purple-100 dark:bg-purple-900/30 text-purple-800 dark:text-purple-400 rounded text-xs inline-block">
                        Mobile-Friendly
                      </div>
                    </div>
                    <div className="flex-grow space-y-3">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                          <h6 className="text-xs font-medium mb-1">Strengths</h6>
                          <ul className="list-disc pl-4 text-xs text-muted-foreground space-y-1">
                            <li>Available for desktop and mobile platforms</li>
                            <li>Powers Phoenix mobile wallet</li>
                            <li>Strong performance for routing</li>
                            <li>Good balance of features and resource usage</li>
                          </ul>
                        </div>
                        <div>
                          <h6 className="text-xs font-medium mb-1">Technical Details</h6>
                          <ul className="list-disc pl-4 text-xs text-muted-foreground space-y-1">
                            <li>Written in Scala language</li>
                            <li>JVM-based for cross-platform compatibility</li>
                            <li>Can use Electrum instead of full Bitcoin node</li>
                            <li>Optimized database performance</li>
                          </ul>
                        </div>
                      </div>
                      <div className="p-2 bg-muted/30 rounded-lg">
                        <p className="text-xs text-muted-foreground">
                          <span className="font-medium">Best For:</span> Mobile developers, users who value performance and efficiency, those prioritizing payment routing capabilities.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="p-5 bg-background rounded-lg border border-border">
              <h4 className="font-medium mb-4 flex items-center">
                <Settings className="h-5 w-5 text-primary mr-2" />
                Node Deployment Methods
              </h4>
              
              <div className="space-y-4">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                  <div className="p-4 bg-muted/30 rounded-lg">
                    <div className="flex items-center mb-3">
                      <Terminal className="h-5 w-5 text-primary mr-2" />
                      <h5 className="font-medium">Manual Installation</h5>
                    </div>
                    
                    <div className="space-y-3 text-sm text-muted-foreground">
                      <p><strong>Difficulty:</strong> Advanced</p>
                      <p className="text-xs">
                        Install and configure Bitcoin Core and Lightning software directly on your machine, handling all dependencies and configuration manually.
                      </p>
                      <div className="mt-3 p-2 bg-background rounded text-xs">
                        <p className="font-medium mb-1">Advantages:</p>
                        <ul className="list-disc pl-4 space-y-0.5">
                          <li>Complete control over all aspects</li>
                          <li>Latest features from source</li>
                          <li>Customizable configuration</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  
                  <div className="p-4 bg-muted/30 rounded-lg">
                    <div className="flex items-center mb-3">
                      <Code className="h-5 w-5 text-primary mr-2" />
                      <h5 className="font-medium">Node Software Packages</h5>
                    </div>
                    
                    <div className="space-y-3 text-sm text-muted-foreground">
                      <p><strong>Difficulty:</strong> Intermediate</p>
                      <p className="text-xs">
                        Use software packages like Umbrel, RaspiBlitz, myNode, or Start9 that simplify installation while providing a management interface.
                      </p>
                      <div className="mt-3 p-2 bg-background rounded text-xs">
                        <p className="font-medium mb-1">Advantages:</p>
                        <ul className="list-disc pl-4 space-y-0.5">
                          <li>Streamlined setup process</li>
                          <li>User-friendly web interface</li>
                          <li>Included additional services</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  
                  <div className="p-4 bg-muted/30 rounded-lg">
                    <div className="flex items-center mb-3">
                      <ShieldCheck className="h-5 w-5 text-primary mr-2" />
                      <h5 className="font-medium">Dedicated Hardware Solutions</h5>
                    </div>
                    
                    <div className="space-y-3 text-sm text-muted-foreground">
                      <p><strong>Difficulty:</strong> Beginner</p>
                      <p className="text-xs">
                        Purchase purpose-built hardware like NODL, RaspiBlitz kits, or Umbrel Home that comes pre-configured with node software.
                      </p>
                      <div className="mt-3 p-2 bg-background rounded text-xs">
                        <p className="font-medium mb-1">Advantages:</p>
                        <ul className="list-disc pl-4 space-y-0.5">
                          <li>Nearly plug-and-play setup</li>
                          <li>Hardware optimized for node operation</li>
                          <li>Support often included</li>
                        </ul>
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
                    "The emergence of node packages represents a significant step forward in Lightning Network adoption. These solutions abstract away much of the technical complexity while still preserving the core benefits of running your own node. They strike an important balance between user experience and the core principles of self-sovereignty."
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="bg-card p-6 rounded-lg border border-border">
          <h3 className="text-lg font-medium mb-4">Setup Process Overview</h3>
          <div className="space-y-6">
            <p className="text-muted-foreground leading-relaxed">
              While specific steps vary by implementation and deployment method, most Lightning node setups follow this general process:
            </p>
            
            <div className="relative overflow-hidden rounded-lg bg-background p-6 border border-border">
              <div className="space-y-8">
                {/* Step 1 */}
                <div className="relative flex gap-4">
                  <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-primary text-primary-foreground shadow-md">
                    <span className="text-sm font-bold">1</span>
                  </div>
                  <div className="absolute left-5 top-10 h-[calc(100%-2.5rem)] w-px bg-border" />
                  <div className="pb-8">
                    <h4 className="font-medium mb-2">Bitcoin Node Setup</h4>
                    <div className="space-y-3 text-sm text-muted-foreground">
                      <p>
                        Most Lightning implementations require a Bitcoin full node for on-chain validation and transaction processing.
                      </p>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="p-3 bg-muted/30 rounded-lg text-xs">
                          <h5 className="font-medium mb-1">Key Tasks</h5>
                          <ul className="list-disc pl-4 space-y-1">
                            <li>Install Bitcoin Core or compatible node software</li>
                            <li>Configure node for security and connectivity</li>
                            <li>Synchronize the full blockchain (may take days)</li>
                            <li>Set up RPC access for Lightning node</li>
                          </ul>
                        </div>
                        <div className="p-3 bg-muted/30 rounded-lg text-xs">
                          <h5 className="font-medium mb-1">Technical Considerations</h5>
                          <ul className="list-disc pl-4 space-y-1">
                            <li>Full vs. pruned mode (storage tradeoff)</li>
                            <li>Testnet vs. mainnet (start with testnet)</li>
                            <li>Tor connectivity for better privacy</li>
                            <li>Proper backup of wallet.dat file</li>
                          </ul>
                        </div>
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
                    <h4 className="font-medium mb-2">Lightning Implementation Installation</h4>
                    <div className="space-y-3 text-sm text-muted-foreground">
                      <p>
                        Install your chosen Lightning Network implementation and connect it to your Bitcoin node.
                      </p>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="p-3 bg-muted/30 rounded-lg text-xs">
                          <h5 className="font-medium mb-1">Key Tasks</h5>
                          <ul className="list-disc pl-4 space-y-1">
                            <li>Install Lightning implementation software</li>
                            <li>Generate and secure Lightning wallet</li>
                            <li>Configure for Bitcoin node connection</li>
                            <li>Set up network connectivity</li>
                          </ul>
                        </div>
                        <div className="p-3 bg-muted/30 rounded-lg text-xs">
                          <h5 className="font-medium mb-1">Critical Security Steps</h5>
                          <ul className="list-disc pl-4 space-y-1">
                            <li>Backup seed words (12-24 words, offline storage)</li>
                            <li>Configure passwords and encryption</li>
                            <li>Set up static channel backups (SCBs)</li>
                            <li>Secure API and RPC endpoints</li>
                          </ul>
                        </div>
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
                    <h4 className="font-medium mb-2">Node Funding</h4>
                    <div className="space-y-3 text-sm text-muted-foreground">
                      <p>
                        Transfer Bitcoin to your Lightning node's on-chain wallet to provide capital for channel creation.
                      </p>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="p-3 bg-muted/30 rounded-lg text-xs">
                          <h5 className="font-medium mb-1">Key Tasks</h5>
                          <ul className="list-disc pl-4 space-y-1">
                            <li>Generate on-chain Bitcoin address</li>
                            <li>Send Bitcoin to this address (start small)</li>
                            <li>Wait for transaction confirmations</li>
                            <li>Verify funds are available in node wallet</li>
                          </ul>
                        </div>
                        <div className="p-3 bg-muted/30 rounded-lg text-xs">
                          <h5 className="font-medium mb-1">Planning Considerations</h5>
                          <ul className="list-disc pl-4 space-y-1">
                            <li>Channel allocations strategy</li>
                            <li>Reserve funds for fees and emergency closures</li>
                            <li>Balance between channel size and diversification</li>
                            <li>Consider on-chain fee market conditions</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* Step 4 */}
                <div className="relative flex gap-4">
                  <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-primary text-primary-foreground shadow-md">
                    <span className="text-sm font-bold">4</span>
                  </div>
                  <div className="absolute left-5 top-10 h-[calc(100%-2.5rem)] w-px bg-border" />
                  <div className="pb-8">
                    <h4 className="font-medium mb-2">Channel Establishment</h4>
                    <div className="space-y-3 text-sm text-muted-foreground">
                      <p>
                        Open payment channels with other Lightning nodes to join the network and enable payment routing.
                      </p>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="p-3 bg-muted/30 rounded-lg text-xs">
                          <h5 className="font-medium mb-1">Key Tasks</h5>
                          <ul className="list-disc pl-4 space-y-1">
                            <li>Research potential peers using node explorers</li>
                            <li>Connect to peer nodes</li>
                            <li>Open channels with desired capacity</li>
                            <li>Wait for channel confirmation (3+ blocks)</li>
                          </ul>
                        </div>
                        <div className="p-3 bg-muted/30 rounded-lg text-xs">
                          <h5 className="font-medium mb-1">Node Selection Criteria</h5>
                          <ul className="list-disc pl-4 space-y-1">
                            <li>Node reliability and uptime</li>
                            <li>Connection quality to the broader network</li>
                            <li>Fee policies of potential peers</li>
                            <li>Consider liquidity providers for inbound capacity</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* Step 5 */}
                <div className="relative flex gap-4">
                  <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-primary text-primary-foreground shadow-md">
                    <span className="text-sm font-bold">5</span>
                  </div>
                  <div className="pb-8">
                    <h4 className="font-medium mb-2">Node Management Setup</h4>
                    <div className="space-y-3 text-sm text-muted-foreground">
                      <p>
                        Configure tools and processes to monitor and manage your node on an ongoing basis.
                      </p>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="p-3 bg-muted/30 rounded-lg text-xs">
                          <h5 className="font-medium mb-1">Key Tasks</h5>
                          <ul className="list-disc pl-4 space-y-1">
                            <li>Set up channel backup process</li>
                            <li>Install monitoring tools or dashboard</li>
                            <li>Configure alerts for critical events</li>
                            <li>Set routing fee policy</li>
                          </ul>
                        </div>
                        <div className="p-3 bg-muted/30 rounded-lg text-xs">
                          <h5 className="font-medium mb-1">Management Tools</h5>
                          <ul className="list-disc pl-4 space-y-1">
                            <li>Ride The Lightning (RTL)</li>
                            <li>ThunderHub</li>
                            <li>LND management apps</li>
                            <li>Balance of Satoshis (BoS)</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="p-5 bg-yellow-50 dark:bg-yellow-900/20 rounded-lg border border-yellow-200 dark:border-yellow-800">
              <h4 className="font-medium mb-2 flex items-center text-yellow-800 dark:text-yellow-300">
                <AlertCircle className="h-5 w-5 mr-2" />
                Critical Security Warnings
              </h4>
              <div className="space-y-3 text-sm text-yellow-700 dark:text-yellow-400">
                <p>
                  Running a Lightning node involves managing actual Bitcoin funds. The following risks should be carefully considered:
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="p-3 bg-yellow-100/50 dark:bg-yellow-900/40 rounded-lg">
                    <h5 className="font-medium mb-1 text-xs">Channel State Data Loss</h5>
                    <p className="text-xs">
                      If you lose your channel state data without proper backups, funds in channels may become irrecoverable. Static Channel Backups (SCBs) are essential but have limitations.
                    </p>
                  </div>
                  <div className="p-3 bg-yellow-100/50 dark:bg-yellow-900/40 rounded-lg">
                    <h5 className="font-medium mb-1 text-xs">Force Closure Risks</h5>
                    <p className="text-xs">
                      If your node is offline for extended periods, counterparties might force-close channels, potentially leading to higher fees or complex recovery processes.
                    </p>
                  </div>
                  <div className="p-3 bg-yellow-100/50 dark:bg-yellow-900/40 rounded-lg">
                    <h5 className="font-medium mb-1 text-xs">Implementation Vulnerabilities</h5>
                    <p className="text-xs">
                      Software bugs or security vulnerabilities could potentially result in fund loss. Stay updated with security patches and follow best practices.
                    </p>
                  </div>
                  <div className="p-3 bg-yellow-100/50 dark:bg-yellow-900/40 rounded-lg">
                    <h5 className="font-medium mb-1 text-xs">Remote Access Security</h5>
                    <p className="text-xs">
                      If you enable remote access to your node, ensure proper authentication, encryption, and network security to prevent unauthorized access.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="bg-card p-6 rounded-lg border border-border">
          <h3 className="text-lg font-medium mb-4">Network Connectivity</h3>
          <div className="space-y-6">
            <p className="text-muted-foreground leading-relaxed">
              Proper network configuration is essential for Lightning node operation. Your node must be able to communicate reliably with peers to function effectively.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="p-5 bg-background rounded-lg border border-border h-full">
                <h4 className="font-medium mb-3 flex items-center">
                  <Network className="h-5 w-5 text-primary mr-2" />
                  Clearnet vs. Tor
                </h4>
                <div className="space-y-4 text-sm">
                  <p className="text-muted-foreground">
                    Lightning nodes can operate over standard internet connections (clearnet) or via The Onion Router (Tor) network for enhanced privacy.
                  </p>
                  
                  <div className="grid grid-cols-1 gap-4">
                    <div className="p-3 bg-muted/30 rounded-lg">
                      <h5 className="font-medium text-sm mb-2">Clearnet</h5>
                      <div className="grid grid-cols-2 gap-2 text-xs text-muted-foreground">
                        <div>
                          <p className="font-medium text-primary">Advantages</p>
                          <ul className="list-disc pl-4 space-y-1 mt-1">
                            <li>Better performance and reliability</li>
                            <li>Lower latency for routing</li>
                            <li>Better connectivity with other nodes</li>
                          </ul>
                        </div>
                        <div>
                          <p className="font-medium text-red-500">Disadvantages</p>
                          <ul className="list-disc pl-4 space-y-1 mt-1">
                            <li>Exposes your IP address</li>
                            <li>Less privacy for node operator</li>
                            <li>Requires port forwarding setup</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                    
                    <div className="p-3 bg-muted/30 rounded-lg">
                      <h5 className="font-medium text-sm mb-2">Tor</h5>
                      <div className="grid grid-cols-2 gap-2 text-xs text-muted-foreground">
                        <div>
                          <p className="font-medium text-primary">Advantages</p>
                          <ul className="list-disc pl-4 space-y-1 mt-1">
                            <li>Enhanced privacy protection</li>
                            <li>IP address is masked</li>
                            <li>No need for port forwarding</li>
                          </ul>
                        </div>
                        <div>
                          <p className="font-medium text-red-500">Disadvantages</p>
                          <ul className="list-disc pl-4 space-y-1 mt-1">
                            <li>Higher latency and slower connections</li>
                            <li>May impact payment reliability</li>
                            <li>Some nodes don't connect to Tor peers</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                    
                    <div className="p-3 bg-muted/50 rounded-lg text-xs text-muted-foreground">
                      <p className="font-medium">Best Practice</p>
                      <p className="mt-1">
                        Many advanced node operators use dual-stack configuration with both clearnet and Tor connectivity to maximize both connectivity and privacy.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="p-5 bg-background rounded-lg border border-border h-full">
                <h4 className="font-medium mb-3 flex items-center">
                  <Network className="h-5 w-5 text-primary mr-2" />
                  Port Forwarding & Access
                </h4>
                <div className="space-y-4 text-sm">
                  <p className="text-muted-foreground">
                    To allow inbound connections from other nodes on the Lightning Network, you'll need to configure your router to forward specific ports.
                  </p>
                  
                  <div className="space-y-3">
                    <div className="p-3 bg-muted/30 rounded-lg text-xs">
                      <h5 className="font-medium mb-1">Required Ports</h5>
                      <ul className="list-disc pl-4 space-y-1 text-muted-foreground">
                        <li><span className="font-medium">Bitcoin Core:</span> 8333 (mainnet), 18333 (testnet)</li>
                        <li><span className="font-medium">LND:</span> 9735 for Lightning protocol, 10009 for gRPC</li>
                        <li><span className="font-medium">Core Lightning:</span> 9735 (configurable)</li>
                        <li><span className="font-medium">Eclair:</span> 9735 by default</li>
                      </ul>
                    </div>
                    
                    <div className="p-3 bg-muted/30 rounded-lg text-xs">
                      <h5 className="font-medium mb-1">Configuration Steps</h5>
                      <ol className="list-decimal pl-4 space-y-1 text-muted-foreground">
                        <li>Access your router's administration panel</li>
                        <li>Find the port forwarding section</li>
                        <li>Create rules for each required port</li>
                        <li>Forward to your node's internal IP address</li>
                        <li>Use TCP protocol for all ports</li>
                        <li>Verify with online port checking tools</li>
                      </ol>
                    </div>
                    
                    <div className="p-3 bg-muted/30 rounded-lg text-xs">
                      <h5 className="font-medium mb-1">IP Addressing</h5>
                      <ul className="list-disc pl-4 space-y-1 text-muted-foreground">
                        <li><span className="font-medium">Static Internal IP:</span> Configure your node with a static local IP</li>
                        <li><span className="font-medium">Dynamic DNS:</span> If your ISP provides dynamic external IPs, use a DDNS service to maintain consistent connectivity</li>
                        <li><span className="font-medium">IPv4 vs. IPv6:</span> Configure both when possible for maximum compatibility</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="p-6 bg-card rounded-lg border border-border">
          <h4 className="font-medium mb-4 text-lg">Satoshi's Perspective</h4>
          <div className="p-5 bg-muted/50 rounded-lg border border-border text-sm text-muted-foreground italic leading-relaxed">
            <p>
              "The Lightning Network represents the evolution of Bitcoin into a multi-layered system—a direction I always anticipated would be necessary for global scale. Running a Lightning node embodies the ethos of 'being your own bank' that was central to Bitcoin's creation.
            </p>
            <p className="mt-3">
              What's particularly satisfying is how the node ecosystem has developed to serve different levels of technical ability. From command-line tools for power users to simplified node packages for beginners, there's a path for nearly anyone to participate directly in the network.
            </p>
            <p className="mt-3">
              The choice to run your own Lightning node is ultimately about freedom—freedom from intermediaries, freedom to connect directly with a global payment network, and freedom to control your own financial infrastructure. It embodies the cypherpunk principle that technology should empower individuals rather than institutions. Every self-hosted Lightning node strengthens the network's resilience against centralization."
            </p>
          </div>
        </div>

        <div className="mt-6 border-t border-border/40 pt-4">
          <VerifyCheckbox
            moduleId="lightning-node-operations"
            verificationId="node-setup"
            label="I understand the requirements and process for setting up a Lightning Network node"
          />
        </div>
      </div>
    </ModuleContent>
  );
}