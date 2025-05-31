'use client';

import React from 'react';
import { ModuleLayout } from '@/components/learn/shared/module-layout';
import { ModuleContent } from '@/components/learn/shared/module-content';
import { Server, HardDrive, Cpu, Wifi, Code, ShieldCheck, Settings, Terminal, Database, Shield, FileCode, Workflow, AlertCircle, Network } from 'lucide-react';
import VerifyCheckbox from '@/components/learn/shared/verify-checkbox';
import SatoshiQuote from '@/components/learn/shared/satoshi-quote'; // Assuming this exists

const moduleId = 'lightning-node-operations';
const sectionId = 'node-setup';

export default function NodeSetupPage() {
  return (
    <ModuleLayout>
      <ModuleContent 
        moduleId={moduleId} 
        sectionId={sectionId}
        moduleTitle="Node Setup"
        moduleDescription="Setting up your Lightning node"
        difficulty="Intermediate"
        icon={Server}
        checkpoints={1}
      >
        {/* Content migrated from SatsSV node-setup.tsx starts here */}
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
                      <p className="font-medium text-sm">Bandwidth</p>
                      <p className="text-xs text-muted-foreground">Reliable, low-latency internet</p>
                      <p className="text-xs text-muted-foreground mt-1">
                        Minimum 10 Mbps download/upload recommended
                      </p>
                    </div>
                    
                    <div className="p-3 bg-muted/30 rounded-lg">
                      <p className="font-medium text-sm">Data Cap</p>
                      <p className="text-xs text-muted-foreground">Unlimited or high data cap</p>
                      <p className="text-xs text-muted-foreground mt-1">
                        Bitcoin nodes can consume 200GB+/month (outbound) and 20GB+/month (inbound). Lightning traffic adds to this.
                      </p>
                    </div>
                    
                    <div className="p-3 bg-muted/30 rounded-lg">
                      <p className="font-medium text-sm">Connectivity</p>
                      <p className="text-xs text-muted-foreground">Always-on internet connection</p>
                      <p className="text-xs text-muted-foreground mt-1">
                        Node needs to be online to route payments and monitor channels.
                      </p>
                    </div>
                  </div>
                </div>
                
                <div className="bg-background p-6 rounded-lg border border-border">
                  <div className="mb-4 flex items-center">
                    <ShieldCheck className="h-6 w-6 mr-3 text-primary" />
                    <h4 className="font-medium">Power Supply</h4>
                  </div>
                  <div className="space-y-3">
                    <div className="p-3 bg-muted/30 rounded-lg">
                      <p className="font-medium text-sm">Reliability</p>
                      <p className="text-xs text-muted-foreground">Uninterruptible Power Supply (UPS)</p>
                      <p className="text-xs text-muted-foreground mt-1">
                        Highly recommended to prevent data corruption from power outages.
                      </p>
                    </div>
                    
                    <div className="p-3 bg-muted/30 rounded-lg">
                      <p className="font-medium text-sm">Efficiency</p>
                      <p className="text-xs text-muted-foreground">Consider energy-efficient hardware</p>
                      <p className="text-xs text-muted-foreground mt-1">
                        Node runs 24/7, so power consumption matters.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-card p-6 rounded-lg border border-border">
            <h3 className="text-lg font-medium mb-4">Common Hardware Choices</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {/* Raspberry Pi */}
              <div className="bg-background p-6 rounded-lg border border-border flex flex-col">
                <h4 className="font-medium mb-3 text-center">Raspberry Pi</h4>
                <img src="/images/raspberry-pi.png" alt="Raspberry Pi" className="w-24 h-24 mx-auto mb-4 object-contain"/>
                <div className="flex-grow space-y-3 text-sm">
                  <p className="text-muted-foreground">Low-cost, low-power option. Ideal for beginners and basic nodes.</p>
                  <p><span className="font-medium">Pros:</span> Affordable, small, energy-efficient, large community support.</p>
                  <p><span className="font-medium">Cons:</span> Lower performance, potential bottlenecks with many channels, reliant on SD card/external SSD.</p>
                  <p><span className="font-medium">Ideal For:</span> Hobbyists, personal use, small routing nodes.</p>
                </div>
              </div>
              {/* Mini PC / NUC */}
              <div className="bg-background p-6 rounded-lg border border-border flex flex-col">
                <h4 className="font-medium mb-3 text-center">Mini PC / NUC</h4>
                <img src="/images/nuc.png" alt="Mini PC / NUC" className="w-24 h-24 mx-auto mb-4 object-contain"/>
                <div className="flex-grow space-y-3 text-sm">
                  <p className="text-muted-foreground">Compact, powerful, and efficient. Good balance of performance and cost.</p>
                  <p><span className="font-medium">Pros:</span> Better performance than Pi, often includes faster storage options (NVMe), relatively low power.</p>
                  <p><span className="font-medium">Cons:</span> More expensive than Pi, may require some assembly/setup.</p>
                  <p><span className="font-medium">Ideal For:</span> Serious hobbyists, moderate routing nodes, users wanting better performance.</p>
                </div>
              </div>
              {/* Dedicated Server / Old PC */}
              <div className="bg-background p-6 rounded-lg border border-border flex flex-col">
                <h4 className="font-medium mb-3 text-center">Dedicated Server / Old PC</h4>
                <img src="/images/server.png" alt="Dedicated Server / Old PC" className="w-24 h-24 mx-auto mb-4 object-contain"/>
                <div className="flex-grow space-y-3 text-sm">
                  <p className="text-muted-foreground">Highest performance potential, often repurposing existing hardware.</p>
                  <p><span className="font-medium">Pros:</span> Potentially high performance, can utilize existing hardware, easily upgradeable.</p>
                  <p><span className="font-medium">Cons:</span> Higher power consumption, larger physical size, can be noisy.</p>
                  <p><span className="font-medium">Ideal For:</span> Large routing nodes, businesses, users with existing spare hardware.</p>
                </div>
              </div>
            </div>
            <div className="mt-6 p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
              <h5 className="font-medium mb-2 flex items-center">
                <AlertCircle className="h-5 w-5 text-blue-600 dark:text-blue-400 mr-2" />
                Important Consideration
              </h5>
              <p className="text-sm text-muted-foreground">
                Regardless of your hardware choice, ensuring adequate cooling is essential for long-term stability and performance, especially for devices running 24/7. Proper airflow and avoiding enclosed spaces are key.
              </p>
            </div>
          </div>

          <div className="bg-card p-6 rounded-lg border border-border">
            <h3 className="text-lg font-medium mb-4">Software Requirements</h3>
            <div className="space-y-6">
              <p className="text-muted-foreground leading-relaxed">
                Running a Lightning node requires several software components working together. The core pieces are the Bitcoin Core software and a Lightning Network implementation.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Bitcoin Core */}
                <div className="bg-background p-6 rounded-lg border border-border">
                  <div className="mb-4 flex items-center">
                    <Code className="h-6 w-6 mr-3 text-primary" />
                    <h4 className="font-medium">Bitcoin Core</h4>
                  </div>
                  <div className="space-y-3 text-sm text-muted-foreground">
                    <p>The reference implementation of the Bitcoin protocol. It acts as the foundation, providing blockchain data and transaction capabilities to the Lightning node.</p>
                    <p><span className="font-medium">Key Functions:</span></p>
                    <ul className="list-disc pl-5 space-y-1">
                      <li>Downloads and validates the entire Bitcoin blockchain.</li>
                      <li>Maintains a connection to the Bitcoin P2P network.</li>
                      <li>Provides an interface (RPC/ZMQ) for the Lightning node to interact with.</li>
                      <li>Broadcasts channel opening and closing transactions.</li>
                    </ul>
                    <p className="font-medium mt-2">Configuration Note:</p>
                    <p>Requires specific configurations (e.g., `txindex=1`, `server=1`, ZMQ settings) to work correctly with Lightning implementations.</p>
                  </div>
                </div>
                
                {/* Lightning Implementation */}
                <div className="bg-background p-6 rounded-lg border border-border">
                  <div className="mb-4 flex items-center">
                    <Network className="h-6 w-6 mr-3 text-primary" />
                    <h4 className="font-medium">Lightning Implementation</h4>
                  </div>
                  <div className="space-y-3 text-sm text-muted-foreground">
                    <p>Software that implements the Lightning Network protocol (BOLTs). Popular choices include:</p>
                    <ul className="list-disc pl-5 space-y-1 font-medium">
                      <li>LND (Lightning Network Daemon - Go)</li>
                      <li>Core Lightning (CLN - C)</li>
                      <li>Eclair (Scala)</li>
                      <li>LDK (Rust - Library, not full node)</li>
                    </ul>
                    <p><span className="font-medium">Key Functions:</span></p>
                    <ul className="list-disc pl-5 space-y-1">
                      <li>Manages payment channels (opening, closing, state updates).</li>
                      <li>Connects to other Lightning nodes in the P2P network.</li>
                      <li>Routes payments across the network using HTLCs.</li>
                      <li>Interacts with Bitcoin Core for on-chain actions.</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="bg-background p-6 rounded-lg border border-border">
                <div className="mb-4 flex items-center">
                  <Terminal className="h-6 w-6 mr-3 text-primary" />
                  <h4 className="font-medium">Operating System (OS)</h4>
                </div>
                <div className="space-y-3 text-sm text-muted-foreground">
                  <p>Most Lightning implementations run best on Linux distributions (e.g., Ubuntu, Debian). macOS and Windows are sometimes supported but Linux is generally preferred for server environments.</p>
                  <p><span className="font-medium">Considerations:</span></p>
                  <ul className="list-disc pl-5 space-y-1">
                    <li><span className="font-medium">Stability:</span> Choose a stable, long-term support (LTS) version.</li>
                    <li><span className="font-medium">Security:</span> Keep the OS updated with security patches.</li>
                    <li><span className="font-medium">Command-Line Interface (CLI):</span> Comfort with the CLI is often necessary for setup and maintenance.</li>
                  </ul>
                </div>
              </div>

              <div className="p-5 bg-green-50 dark:bg-green-900/20 rounded-lg border border-green-200 dark:border-green-800">
                <h5 className="font-medium mb-2 flex items-center">
                  <FileCode className="h-5 w-5 text-green-600 dark:text-green-400 mr-2" />
                  Node Management Software (Optional but Recommended)
                </h5>
                <p className="text-sm text-muted-foreground">
                  Several platforms simplify node setup and management by bundling Bitcoin Core, a Lightning implementation, and a user-friendly web interface. Examples include:
                </p>
                <ul className="list-disc pl-5 mt-2 text-sm text-muted-foreground space-y-1">
                  <li><span className="font-medium">Umbrel:</span> Popular, user-friendly OS focused on self-hosting Bitcoin/Lightning nodes and other apps.</li>
                  <li><span className="font-medium">Start9:</span> Privacy-focused sovereign computing platform.</li>
                  <li><span className="font-medium">RaspiBlitz:</span> Feature-rich option primarily for Raspberry Pi, focused on power users.</li>
                  <li><span className="font-medium">MyNodeBTC:</span> Easy-to-use platform offering premium features.</li>
                  <li><span className="font-medium">Citadel:</span> Fork of Umbrel focused on FOSS principles.</li>
                </ul>
                <p className="text-sm text-muted-foreground mt-2">
                  These solutions abstract away much of the command-line complexity, making node operation accessible to a wider audience.
                </p>
              </div>
            </div>
          </div>

          <div className="bg-card p-6 rounded-lg border border-border">
            <h3 className="text-lg font-medium mb-4">Initial Blockchain Download (IBD)</h3>
            <div className="space-y-4">
              <p className="text-muted-foreground leading-relaxed">
                Before your Lightning node can operate, your Bitcoin node needs to download and validate the entire Bitcoin blockchain. This process, known as the Initial Blockchain Download (IBD), is resource-intensive and can take significant time.
              </p>
              <div className="p-5 bg-background rounded-lg border border-border">
                <h4 className="font-medium mb-3">Factors Affecting IBD Time</h4>
                <ul className="list-disc pl-5 text-sm text-muted-foreground space-y-2">
                  <li><span className="font-medium">Internet Speed:</span> Faster download speeds reduce the time to fetch block data.</li>
                  <li><span className="font-medium">CPU Speed:</span> Faster CPUs validate block signatures and transactions more quickly.</li>
                  <li><span className="font-medium">Storage Speed (SSD vs HDD):</span> SSDs drastically speed up block processing and database writes.</li>
                  <li><span className="font-medium">RAM Availability:</span> More RAM allows for larger caches, improving validation speed.</li>
                  <li><span className="font-medium">Network Conditions:</span> Quality of peers and overall Bitcoin network activity.</li>
                </ul>
              </div>
              <div className="p-4 bg-orange-50 dark:bg-orange-900/20 rounded-lg">
                <h5 className="font-medium mb-2 flex items-center">
                  <Settings className="h-5 w-5 text-orange-600 dark:text-orange-400 mr-2" />
                  Optimization Tips
                </h5>
                <p className="text-sm text-muted-foreground">
                  While IBD is unavoidable, you can optimize it:
                </p>
                <ul className="list-disc pl-5 mt-2 text-sm text-muted-foreground space-y-1">
                  <li>Use an SSD for storage.</li>
                  <li>Ensure a fast and stable internet connection (wired preferred).</li>
                  <li>Allocate sufficient RAM to Bitcoin Core (adjust `dbcache` setting).</li>
                  <li>Perform IBD during periods of low computer usage if using a shared machine.</li>
                  <li>Be patient! Depending on hardware, IBD can take anywhere from a few hours to several days.</li>
                </ul>
              </div>
              <p className="text-muted-foreground text-sm leading-relaxed">
                Your Lightning node cannot fully function until the IBD is complete and the Bitcoin node is synced with the network tip.
              </p>
            </div>
          </div>

        </div>
        {/* Content migrated from SatsSV node-setup.tsx ends here */}

        {/* Verification Checkpoint */}
        <VerifyCheckbox 
          moduleId={moduleId} 
          sectionId={sectionId} 
          verificationId={`${sectionId}-complete`} 
          label="I understand the requirements for setting up a Lightning node."
        />
      </ModuleContent>
    </ModuleLayout>
  );
}
