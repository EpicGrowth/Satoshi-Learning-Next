'use client';

import React from 'react';
import { ModuleLayout } from '@/components/learn/shared/module-layout';
import { ModuleContent } from '@/components/learn/shared/module-content';
import VerifyCheckbox from '@/components/learn/shared/verify-checkbox';
import { Network, Router, Workflow, Shield, Lock, FileCode, AlertCircle, ZapOff, ArrowRightLeft, Settings, CircuitBoard, Settings2, Filter, TrendingUp, Map, Search, Route, Coins, Info, Zap, ArrowLeftRight } from 'lucide-react'; 
import SatoshiQuote from '@/components/learn/shared/satoshi-quote';

const moduleId = 'lightning-node-operations';
const sectionId = 'routing';

export default function RoutingPage() {
  return (
    <ModuleLayout>
      <ModuleContent moduleId={moduleId} sectionId={sectionId}>
        <div className="space-y-8">
          <SatoshiQuote
            quote="The result is a distributed timestamped server which provides proof for financial records without exposing information beyond what is necessary."
            source="Satoshi Nakamoto, Bitcoin Whitepaper (adapted context)"
            date="October 31, 2008"
          />
          
           <div className="bg-card p-6 rounded-lg border border-border">
            <h2 className="text-2xl font-semibold mb-4 flex items-center">
              <Route className="h-6 w-6 mr-2 text-primary" />
              Lightning Routing & Forwarding
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              Routing is the process of finding a path across the Lightning Network to send a payment between two nodes that don't have a direct channel. Nodes that participate in relaying these payments are called routing nodes, and they earn small fees for providing this service.
            </p>
          </div>

          {/* Section 1: Routing Fundamentals */}
          <div className="bg-card p-6 rounded-lg border border-border">
            <h3 className="text-xl font-semibold mb-4 flex items-center">
              <Network className="h-5 w-5 mr-2 text-primary" />
              Routing Fundamentals
            </h3>
            <div className="space-y-6">
              <p className="text-muted-foreground">
                Understanding how routing works is essential for both sending payments efficiently and operating a successful routing node.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                 <div className="bg-background p-4 rounded-lg border border-border">
                    <h5 className="font-medium mb-2 flex items-center">
                      <CircuitBoard className="h-4 w-4 mr-2 text-blue-500"/>
                      Key Concepts
                    </h5>
                    <ul className="list-disc pl-5 text-sm text-muted-foreground space-y-1">
                      <li><strong>Network Graph:</strong> Nodes maintain a map of public channels and their policies (fees, capacity, etc.).</li>
                      <li><strong>Source Routing:</strong> The *sender's* node calculates the entire path before sending the payment.</li>
                      <li><strong>Onion Routing:</strong> Payment instructions are encrypted layer-by-layer, so each hop only knows the previous and next node, enhancing privacy.</li>
                      <li><strong>HTLCs:</strong> Payments along the route are secured by Hashed Time-Locked Contracts, ensuring atomicity (either the whole payment succeeds or fails).</li>
                      <li><strong>Liquidity:</strong> A route is only viable if every channel along the path has sufficient balance in the correct direction.</li>
                    </ul>
                 </div>
                 <div className="bg-background p-4 rounded-lg border border-border">
                    <h5 className="font-medium mb-2 flex items-center">
                      <Settings2 className="h-4 w-4 mr-2 text-purple-500"/>
                      Routing Fees
                    </h5>
                     <ul className="list-disc pl-5 text-sm text-muted-foreground space-y-1">
                       <li><strong>Base Fee:</strong> A flat fee charged per forwarded payment (HTLC), regardless of amount.</li>
                       <li><strong>Fee Rate:</strong> A proportional fee based on the payment amount (usually measured in ppm - parts per million).</li>
                       <li><strong>Node Policy:</strong> Each node sets its own fee policy for its channels.</li>
                       <li><strong>Market Dynamics:</strong> Fees are influenced by supply (available liquidity) and demand (payment volume).</li>
                       <li><strong>Sender Pays:</strong> The total fee for the route is included in the amount the sender initially sends.</li>
                    </ul>
                 </div>
              </div>
               <div className="mt-4 p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg border border-blue-200 dark:border-blue-800">
                <h5 className="font-medium mb-2 flex items-center">
                  <Info className="h-5 w-5 text-blue-600 dark:text-blue-400 mr-2" />
                  Pathfinding Challenge
                </h5>
                <p className="text-sm text-muted-foreground">
                  Finding the optimal route involves balancing low fees, sufficient capacity, node reliability (uptime), and path length. This is a complex calculation performed by the sender's node using its view of the network graph.
                </p>
              </div>
            </div>
          </div>
          
          {/* Section 2: The Routing Process */}
           <div className="bg-card p-6 rounded-lg border border-border">
            <h3 className="text-xl font-semibold mb-4 flex items-center">
              <Workflow className="h-5 w-5 mr-2 text-primary" />
              The Routing Process Step-by-Step
            </h3>
             <ol className="relative border-l border-border dark:border-gray-700 ml-4 space-y-6">
                <li className="ml-6">
                    <span className="absolute flex items-center justify-center w-6 h-6 bg-primary/20 rounded-full -left-3 ring-4 ring-background dark:ring-gray-900 dark:bg-blue-900">
                       <Search className="w-3 h-3 text-primary dark:text-blue-300" />
                    </span>
                    <h4 className="font-medium">1. Pathfinding</h4>
                    <p className="text-sm text-muted-foreground">Sender's node queries its network graph data to find potential paths to the recipient, considering fees, capacity, and hop count.</p>
                </li>
                 <li className="ml-6">
                    <span className="absolute flex items-center justify-center w-6 h-6 bg-primary/20 rounded-full -left-3 ring-4 ring-background dark:ring-gray-900 dark:bg-green-900">
                       <Route className="w-3 h-3 text-primary dark:text-green-300" />
                    </span>
                    <h4 className="font-medium">2. Onion Construction</h4>
                    <p className="text-sm text-muted-foreground">Sender creates the layered 'onion' packet containing encrypted instructions for each hop (next peer, amount to forward, CLTV delta).</p>
                </li>
                <li className="ml-6">
                    <span className="absolute flex items-center justify-center w-6 h-6 bg-primary/20 rounded-full -left-3 ring-4 ring-background dark:ring-gray-900 dark:bg-yellow-900">
                         <Coins className="w-3 h-3 text-primary dark:text-yellow-300" />
                    </span>
                    <h4 className="font-medium">3. HTLC Forwarding</h4>
                    <p className="text-sm text-muted-foreground">Sender adds an HTLC to the first channel. Each intermediate node receives the onion, decrypts its layer, learns the next hop, updates the HTLC (lowers amount by its fee, reduces CLTV), and forwards to the next peer.</p>
                </li>
                 <li className="ml-6">
                    <span className="absolute flex items-center justify-center w-6 h-6 bg-primary/20 rounded-full -left-3 ring-4 ring-background dark:ring-gray-900 dark:bg-purple-900">
                        <Lock className="w-3 h-3 text-primary dark:text-purple-300" />
                    </span>
                    <h4 className="font-medium">4. Preimage Release</h4>
                    <p className="text-sm text-muted-foreground">Recipient receives the final HTLC. To claim the funds, they reveal the payment preimage (secret) to the last intermediate node.</p>
                </li>
                 <li className="ml-6">
                    <span className="absolute flex items-center justify-center w-6 h-6 bg-primary/20 rounded-full -left-3 ring-4 ring-background dark:ring-gray-900 dark:bg-red-900">
                         <ArrowRightLeft className="w-3 h-3 text-primary dark:text-red-300" />
                    </span>
                    <h4 className="font-medium">5. Settlement Cascade</h4>
                    <p className="text-sm text-muted-foreground">The preimage travels back along the route. Each node uses it to claim the incoming HTLC from the previous node, effectively settling the payment hop-by-hop back to the sender.</p>
                </li>
            </ol>
            <p className="text-sm text-muted-foreground italic mt-6">
                If any hop fails (e.g., insufficient capacity, node offline), an error message propagates back, the HTLCs time out or are cancelled, and the sender can attempt a different route. The funds are never lost due to the HTLC mechanism.
              </p>
          </div>

          {/* Section 3: Being a Good Routing Node */}
          <div className="bg-card p-6 rounded-lg border border-border">
            <h3 className="text-xl font-semibold mb-4 flex items-center">
              <TrendingUp className="h-5 w-5 mr-2 text-primary" />
              Operating a Routing Node
            </h3>
            <div className="space-y-6">
              <p className="text-muted-foreground">
                Running a successful routing node involves more than just being online. It requires active management and optimization.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  <div className="bg-background p-4 rounded-lg border border-border">
                      <h5 className="font-medium mb-2 flex items-center">
                        <Zap className="h-4 w-4 mr-2 text-green-500"/>
                        Uptime & Reliability
                      </h5>
                      <p className="text-sm text-muted-foreground">Consistent uptime is paramount. Offline nodes can't route payments and hurt the reliability of paths involving them.</p>
                  </div>
                  <div className="bg-background p-4 rounded-lg border border-border">
                      <h5 className="font-medium mb-2 flex items-center">
                         <Coins className="h-4 w-4 mr-2 text-yellow-500"/>
                        Capital & Liquidity
                      </h5>
                       <p className="text-sm text-muted-foreground">Sufficient capital allocated to well-placed, balanced channels is crucial for handling routing volume.</p>
                  </div>
                  <div className="bg-background p-4 rounded-lg border border-border">
                      <h5 className="font-medium mb-2 flex items-center">
                         <Settings className="h-4 w-4 mr-2 text-blue-500"/>
                        Fee Strategy
                      </h5>
                       <p className="text-sm text-muted-foreground">Set competitive but sustainable fees. Monitor flows and adjust fees to manage liquidity and maximize earnings.</p>
                  </div>
                   <div className="bg-background p-4 rounded-lg border border-border">
                      <h5 className="font-medium mb-2 flex items-center">
                         <ArrowLeftRight className="h-4 w-4 mr-2 text-purple-500"/>
                        Balanced Channels
                      </h5>
                       <p className="text-sm text-muted-foreground">Actively manage channel liquidity (rebalancing) so channels can forward payments in both directions.</p>
                  </div>
                   <div className="bg-background p-4 rounded-lg border border-border">
                      <h5 className="font-medium mb-2 flex items-center">
                         <Map className="h-4 w-4 mr-2 text-red-500"/>
                        Connectivity
                      </h5>
                       <p className="text-sm text-muted-foreground">Connect to diverse, well-connected peers to position your node strategically within the network graph.</p>
                  </div>
                   <div className="bg-background p-4 rounded-lg border border-border">
                      <h5 className="font-medium mb-2 flex items-center">
                         <Filter className="h-4 w-4 mr-2 text-indigo-500"/>
                        Monitoring & Automation
                      </h5>
                       <p className="text-sm text-muted-foreground">Use tools (RTL, Thunderhub, scripts) to monitor performance, automate fee adjustments, and manage channels.</p>
                  </div>
              </div>
                <p className="text-sm text-muted-foreground italic mt-4">
                Running a routing node can be complex and requires ongoing effort. Start small, learn the dynamics, and gradually scale your operations.
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
          label="I understand the basic principles of Lightning routing, the process involved, and the factors for running a routing node."
        />
      </ModuleContent>
    </ModuleLayout>
  );
}
