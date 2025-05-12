'use client';

import React from 'react';
import { ModuleLayout } from '@/components/learn/shared/module-layout';
import { ModuleContent } from '@/components/learn/shared/module-content';
import VerifyCheckbox from '@/components/learn/shared/verify-checkbox';
import { Link, ArrowLeftRight, BarChart2, Settings, AlertCircle, Signal, FileCode, Workflow, RefreshCw, Layers, Eye, Clock, Shield, Zap, HandCoins, Unlink, PlusCircle, MinusCircle, Info, CheckSquare } from 'lucide-react';
import SatoshiQuote from '@/components/learn/shared/satoshi-quote';

const moduleId = 'lightning-node-operations';
const sectionId = 'channel-management';

export default function ChannelManagementPage() {
  return (
    <ModuleLayout>
      <ModuleContent moduleId={moduleId} sectionId={sectionId}>
        <div className="space-y-8">
          <SatoshiQuote
            quote="The fee isn't a percentage of the transaction, but rather it's based on the number of bytes to transmit."
            source="Satoshi Nakamoto (adapted context)"
            date="November 14, 2008"
          />

          <div className="bg-card p-6 rounded-lg border border-border">
            <h2 className="text-2xl font-semibold mb-4 flex items-center">
              <Link className="h-6 w-6 mr-2 text-primary" />
              Channel Management Fundamentals
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              Lightning Network channels are the bidirectional payment pathways built on top of Bitcoin. Effective management of these channels is key to sending/receiving payments, routing payments for others, managing liquidity, and minimizing on-chain fees.
            </p>
          </div>

          {/* Section 1: Core Concepts */}
          <div className="bg-card p-6 rounded-lg border border-border">
            <h3 className="text-xl font-semibold mb-4 flex items-center">
              <Layers className="h-5 w-5 mr-2 text-primary" />
              Core Channel Concepts
            </h3>
            <div className="space-y-6">
              <p className="text-muted-foreground">
                Understanding these terms is fundamental to managing channels:
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                 <div className="bg-background p-4 rounded-lg border border-border">
                    <h5 className="font-medium mb-2 flex items-center">
                      <Zap className="h-4 w-4 mr-2 text-purple-500"/>
                      Capacity & Balances
                    </h5>
                    <ul className="list-disc pl-5 text-sm text-muted-foreground space-y-1">
                      <li><strong>Channel Capacity:</strong> Total Bitcoin locked in the 2-of-2 multisig address creating the channel.</li>
                      <li><strong>Local Balance:</strong> Amount *you* can currently push/send through the channel.</li>
                      <li><strong>Remote Balance:</strong> Amount your channel partner can currently push/send to you (your inbound liquidity).</li>
                       <li><strong>Relationship:</strong> Capacity = Local Balance + Remote Balance.</li>
                    </ul>
                 </div>
                 <div className="bg-background p-4 rounded-lg border border-border">
                    <h5 className="font-medium mb-2 flex items-center">
                      <Settings className="h-4 w-4 mr-2 text-blue-500"/>
                      State & Operations
                    </h5>
                     <ul className="list-disc pl-5 text-sm text-muted-foreground space-y-1">
                       <li><strong>Channel State:</strong> The current distribution of local/remote balances, secured by off-chain signed transactions.</li>
                       <li><strong>Opening a Channel:</strong> An on-chain transaction creating the multisig address and funding the initial state.</li>
                       <li><strong>Closing a Channel:</strong> An on-chain transaction settling the final channel state back to individual wallets. Can be cooperative (mutual) or forced (unilateral).</li>
                       <li><strong>Updates:</strong> Off-chain transactions that shift the balance without broadcasting to the blockchain.</li>
                    </ul>
                 </div>
              </div>
               <div className="mt-4 p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg border border-blue-200 dark:border-blue-800">
                <h5 className="font-medium mb-2 flex items-center">
                  <Info className="h-5 w-5 text-blue-600 dark:text-blue-400 mr-2" />
                  Liquidity is Key
                </h5>
                <p className="text-sm text-muted-foreground">
                  Your ability to send payments depends on your <strong>Local Balance</strong>. Your ability to receive payments depends on your <strong>Remote Balance</strong> (also called Inbound Liquidity). Managing both is crucial.
                </p>
              </div>
            </div>
          </div>

          {/* Section 2: Opening Channels */}
          <div className="bg-card p-6 rounded-lg border border-border">
            <h3 className="text-xl font-semibold mb-4 flex items-center">
              <PlusCircle className="h-5 w-5 mr-2 text-primary" />
              Opening Channels Strategically
            </h3>
            <div className="space-y-6">
              <p className="text-muted-foreground">
                Opening channels requires an on-chain transaction, so planning is important to minimize costs and maximize utility.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-background p-4 rounded-lg border border-border">
                  <h5 className="font-medium mb-2 flex items-center">
                    <HandCoins className="h-4 w-4 mr-2 text-green-500"/>
                    Who to Connect To?
                  </h5>
                  <ul className="list-disc pl-5 text-sm text-muted-foreground space-y-1">
                    <li><strong>Services You Use:</strong> Exchanges, shops, wallet providers (reduces hops/fees for your own payments).</li>
                    <li><strong>Well-Connected Nodes:</strong> Large, reliable nodes with many channels (good for routing potential). Look at node ranking sites (e.g., Amboss, 1ML).</li>
                    <li><strong>Peers Needing Inbound:</strong> Nodes specifically requesting inbound liquidity (often advertised in communities or liquidity swap platforms).</li>
                    <li><strong>Network Diversity:</strong> Connect to different parts of the network graph, not just one central hub.</li>
                  </ul>
                </div>
                <div className="bg-background p-4 rounded-lg border border-border">
                  <h5 className="font-medium mb-2 flex items-center">
                    <BarChart2 className="h-4 w-4 mr-2 text-yellow-500"/>
                    Channel Size?
                  </h5>
                  <ul className="list-disc pl-5 text-sm text-muted-foreground space-y-1">
                    <li><strong>Minimum Size:</strong> Consider the 'dust limit' and typical payment sizes. Very small channels have limited use.</li>
                    <li><strong>Routing vs. Spending:</strong> Larger channels (e.g., &gt; 1M-5M sats) are generally better for routing. Smaller channels might suffice for personal spending with specific services.</li>
                    <li><strong>Fee Amortization:</strong> The on-chain fee for opening/closing is fixed regardless of size. Larger channels make this fee relatively smaller per satoshi of capacity.</li>
                    <li><strong>Capital Lockup:</strong> Don't overcommit funds you might need on-chain soon.</li>
                  </ul>
                </div>
              </div>
               <p className="text-sm text-muted-foreground italic mt-4">
                Consider using tools or platforms that help identify good peers based on network centrality, uptime, and fee policies.
              </p>
            </div>
          </div>
          
           {/* Section 3: Closing Channels */}
          <div className="bg-card p-6 rounded-lg border border-border">
            <h3 className="text-xl font-semibold mb-4 flex items-center">
              <Unlink className="h-5 w-5 mr-2 text-primary" />
              Closing Channels
            </h3>
            <div className="space-y-6">
              <p className="text-muted-foreground">
                Closing channels also requires an on-chain transaction. It's done when a channel is no longer needed, needs resizing, or if a peer becomes unresponsive.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="bg-background p-4 rounded-lg border border-border">
                      <h5 className="font-medium mb-2 flex items-center">
                         <CheckSquare className="h-4 w-4 mr-2 text-green-600"/> 
                         Cooperative Close
                      </h5>
                       <ul className="list-disc pl-5 text-sm text-muted-foreground space-y-1">
                          <li>Both parties agree to close and sign the closing transaction.</li>
                          <li>Fastest and cheapest way to close.</li>
                          <li>Funds are immediately available on-chain (after confirmation).</li>
                       </ul>
                  </div>
                   <div className="bg-background p-4 rounded-lg border border-border">
                      <h5 className="font-medium mb-2 flex items-center">
                          <Clock className="h-4 w-4 mr-2 text-red-600"/>
                          Force Close (Unilateral)
                      </h5>
                      <ul className="list-disc pl-5 text-sm text-muted-foreground space-y-1">
                          <li>Initiated by one party if the other is unresponsive or uncooperative.</li>
                          <li>Broadcasts the latest agreed-upon channel state.</li>
                          <li>Requires a time lock delay (CSV delay) before funds can be swept by the initiator, giving the other party time to contest with an older, revoked state (punishment scenario).</li>
                          <li>More expensive (potentially higher fees) and slower.</li>
                      </ul>
                  </div>
              </div>
                <p className="text-sm text-muted-foreground italic mt-4">
                 Always prefer cooperative closes. Force closes are a fallback for problematic situations or unresponsive peers.
              </p>
            </div>
          </div>

          {/* Section 4: Liquidity Management */}
          <div className="bg-card p-6 rounded-lg border border-border">
            <h3 className="text-xl font-semibold mb-4 flex items-center">
              <RefreshCw className="h-5 w-5 mr-2 text-primary" />
              Liquidity Management (Rebalancing)
            </h3>
            <div className="space-y-6">
              <p className="text-muted-foreground">
                Channels become unbalanced over time (e.g., mostly local balance after sending many payments, or mostly remote after receiving many). Rebalancing aims to restore a healthier balance.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="bg-background p-4 rounded-lg border border-border">
                      <h5 className="font-medium mb-2 flex items-center">
                        <Workflow className="h-4 w-4 mr-2 text-cyan-500"/>
                        Circular Rebalancing (Self-Payment)
                      </h5>
                      <p className="text-sm text-muted-foreground">
                        Pay yourself through a loop involving other nodes. Send out from a channel with high local balance and receive back into a channel with low local balance. Requires finding a suitable path and incurs routing fees.
                      </p>
                  </div>
                  <div className="bg-background p-4 rounded-lg border border-border">
                      <h5 className="font-medium mb-2 flex items-center">
                         <ArrowLeftRight className="h-4 w-4 mr-2 text-indigo-500"/>
                         Liquidity Swaps
                      </h5>
                       <p className="text-sm text-muted-foreground">
                         Use services (e.g., Lightning Loop, Boltz) or peer-to-peer platforms (e.g., Lightning Pool, marketplaces) to swap on-chain funds for off-chain liquidity (Loop Out) or vice-versa (Loop In).
                       </p>
                  </div>
                  <div className="bg-background p-4 rounded-lg border border-border">
                      <h5 className="font-medium mb-2 flex items-center">
                         <Settings className="h-4 w-4 mr-2 text-orange-500"/>
                         Fee Management
                      </h5>
                       <p className="text-sm text-muted-foreground">
                         Adjusting your routing fees can incentivize payments to flow in a direction that naturally rebalances your channels (e.g., lower fees for payments going out of a channel with too much local balance).
                       </p>
                  </div>
                   <div className="bg-background p-4 rounded-lg border border-border">
                      <h5 className="font-medium mb-2 flex items-center">
                         <Eye className="h-4 w-4 mr-2 text-gray-500"/>
                         Monitoring
                      </h5>
                       <p className="text-sm text-muted-foreground">
                         Regularly monitor channel balances using node management tools (RTL, Thunderhub, `lncli listchannels`) to identify channels needing attention before they become completely depleted on one side.
                       </p>
                  </div>
              </div>
            </div>
          </div>

        </div>
        {/* Content migration ends here */}

        {/* Verification Checkpoint */}
        <VerifyCheckbox 
          moduleId={moduleId} 
          sectionId={sectionId} 
          verificationId={`${sectionId}-complete`} 
          label="I understand the basics of opening, closing, and managing liquidity in Lightning channels."
        />
      </ModuleContent>
    </ModuleLayout>
  );
}
