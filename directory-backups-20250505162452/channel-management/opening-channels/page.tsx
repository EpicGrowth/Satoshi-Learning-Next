'use client';

import React from 'react';
import { ModuleLayout } from '@/components/learn/shared/module-layout';
import { ModuleContent } from '@/components/learn/shared/module-content';
import VerifyCheckbox from '@/components/learn/shared/verify-checkbox';
import {
  Link,
  ShieldCheck,
  FileCode,
  Workflow,
  AlertCircle,
  Wallet,
  Scale,
  Zap,
  Settings,
  Bitcoin,
  CircleDollarSign,
  Layers,
  Database,
  Clock,
  ArrowRight,
  User,
  Network,
  BarChart,
  CheckCircle,
  ChevronRight,
} from 'lucide-react';
import SatoshiQuote from '@/components/learn/shared/satoshi-quote';

const moduleId = 'lightning-channel-management';
const sectionId = 'opening-channels';

export default function OpeningChannelsPage() {
  return (
    <ModuleLayout>
      <ModuleContent moduleId={moduleId} sectionId={sectionId}>
        <div className="space-y-8">
          <SatoshiQuote
            quote="The main benefits are privacy, instant confirmation, extremely low fees and the ability to do micropayments."
            source="Joseph Poon and Thaddeus Dryja, Lightning Network Whitepaper"
            date="January 14, 2016"
          />

          <div className="bg-card p-6 rounded-lg border border-border">
            <h2 className="text-2xl font-semibold mb-4 flex items-center">
              <Link className="h-6 w-6 mr-2 text-primary" />
              Opening Lightning Channels
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              A Lightning channel is a bilateral payment pathway secured by on-chain Bitcoin
              transactions. Opening channels is the fundamental action that allows you to participate in the Lightning Network, enabling instant, low-fee payments and potential routing revenue.
            </p>
          </div>

          {/* Channel Fundamentals */}
          <div className="bg-card p-6 rounded-lg border border-border">
            <h3 className="text-xl font-semibold mb-4 flex items-center">
              <Layers className="h-5 w-5 mr-2 text-primary" />
              Channel Fundamentals
            </h3>
            <div className="space-y-6">
              <p className="text-muted-foreground">
                Before opening your first channel, it's essential to understand what Lightning channels actually are and how they work at a technical level.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-background p-4 rounded-lg border border-border">
                  <h4 className="font-medium mb-3">What Is a Channel?</h4>
                  <div className="p-4 bg-muted/30 rounded-lg">
                    <p className="text-sm text-muted-foreground mb-3">
                      A Lightning channel is a secured, bilateral financial relationship between two
                      Lightning nodes. It uses a 2-of-2 multisignature Bitcoin output to create an
                      off-chain mechanism for instant, low-cost transactions.
                    </p>
                    <ul className="list-disc pl-5 text-sm text-muted-foreground space-y-2">
                      <li>
                        <strong>Funding Transaction:</strong> On-chain Bitcoin
                        transaction that creates the channel
                      </li>
                      <li>
                        <strong>Commitment Transactions:</strong> Off-chain
                        transactions that update channel balances
                      </li>
                      <li>
                        <strong>Closing Transaction:</strong> On-chain
                        transaction that settles final channel balances
                      </li>
                      <li>
                        <strong>Channel Capacity:</strong> Total amount of
                        Bitcoin locked in the channel
                      </li>
                      <li>
                        <strong>Channel State:</strong> The current balance
                        distribution between parties
                      </li>
                    </ul>
                  </div>
                </div>

                <div className="bg-background p-4 rounded-lg border border-border">
                  <h4 className="font-medium mb-3">Technical Properties</h4>
                  <div className="p-4 bg-muted/30 rounded-lg">
                    <ul className="list-disc pl-5 text-sm text-muted-foreground space-y-2">
                      <li>
                        <strong>Multisignature Security:</strong> 2-of-2
                        multisig requires both parties to agree on any balance changes
                      </li>
                      <li>
                        <strong>Trustless Design:</strong> Cryptographic
                        enforcement prevents theft or cheating
                      </li>
                      <li>
                        <strong>Bi-directional Flow:</strong> Payments can move
                        in either direction within capacity limits
                      </li>
                      <li>
                        <strong>Timelock Mechanisms:</strong> Penalty systems
                        prevent invalid channel state broadcasts
                      </li>
                      <li>
                        <strong>Channel Bandwidth:</strong> Defined by the
                        amount of Bitcoin that can flow in each direction
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg border border-blue-200 dark:border-blue-800">
                <h5 className="font-medium mb-2 flex items-center">
                  <Workflow className="h-5 w-5 text-blue-600 dark:text-blue-400 mr-2" />
                  Technical Insight
                </h5>
                <p className="text-sm text-muted-foreground">
                  A Lightning channel opening transaction creates a unique type of Bitcoin UTXO—one
                  controlled by a 2-of-2 multisignature script. This script requires signatures from
                  both channel participants to spend funds. What makes Lightning innovative is that
                  this multisig output is complemented by a complex series of pre-signed commitment
                  transactions that allow either party to unilaterally close the channel if needed,
                  while penalizing any party that attempts to broadcast an outdated channel state.
                </p>
              </div>
            </div>
          </div>

          {/* Channel Opening Process */}
          <div className="bg-card p-6 rounded-lg border border-border">
            <h3 className="text-xl font-semibold mb-4 flex items-center">
              <Workflow className="h-5 w-5 mr-2 text-primary" />
              Channel Opening Process
            </h3>
            <div className="space-y-6">
              <p className="text-muted-foreground">
                Opening a Lightning channel involves several technical steps and careful planning to
                ensure optimal performance and security.
              </p>

              {/* Step 1: Node Selection */}
              <div className="bg-background p-5 rounded-lg border border-border">
                <div className="flex items-center gap-3 mb-3">
                  <div className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-primary text-primary-foreground shadow-sm">
                    <span className="text-sm font-bold">1</span>
                  </div>
                  <h4 className="font-medium">Node Selection</h4>
                </div>
                
                <div className="ml-11 space-y-4">
                  <p className="text-sm text-muted-foreground">
                    The first step is selecting the right peer node with which to establish a
                    channel. This decision significantly impacts the channel's utility.
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="p-3 bg-muted/30 rounded-lg">
                      <h5 className="text-sm font-medium mb-1">Selection Criteria</h5>
                      <ul className="list-disc pl-4 text-xs text-muted-foreground space-y-1">
                        <li>
                          <strong>Connectivity:</strong> Nodes with many
                          quality channels
                        </li>
                        <li>
                          <strong>Reliability:</strong> Nodes with high
                          uptime and stability
                        </li>
                        <li>
                          <strong>Fees:</strong> Reasonable routing fee
                          policies
                        </li>
                        <li>
                          <strong>Liquidity:</strong> Sufficient outbound
                          capacity
                        </li>
                        <li>
                          <strong>Purpose:</strong> Merchant node, exchange,
                          or routing node
                        </li>
                      </ul>
                    </div>
                    <div className="p-3 bg-muted/30 rounded-lg">
                      <h5 className="text-sm font-medium mb-1">Finding Quality Peers</h5>
                      <ul className="list-disc pl-4 text-xs text-muted-foreground space-y-1">
                        <li>
                          <strong>Network Explorers:</strong> 1ML, Amboss,
                          Lightning Terminal
                        </li>
                        <li>
                          <strong>Community Resources:</strong> Forums, LN
                          Twitter communities
                        </li>
                        <li>
                          <strong>Service Providers:</strong> Connect
                          directly to services you use
                        </li>
                        <li>
                          <strong>Lightning Pool:</strong> Marketplace for
                          channel liquidity
                        </li>
                        <li>
                          <strong>Node Lists:</strong> Curated directories
                          of reliable nodes
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>

              {/* Step 2: Capacity Planning */}
              <div className="bg-background p-5 rounded-lg border border-border">
                <div className="flex items-center gap-3 mb-3">
                  <div className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-primary text-primary-foreground shadow-sm">
                    <span className="text-sm font-bold">2</span>
                  </div>
                  <h4 className="font-medium">Capacity Planning</h4>
                </div>
                
                <div className="ml-11 space-y-4">
                  <p className="text-sm text-muted-foreground">
                    Determining the appropriate channel capacity is a critical decision that
                    balances multiple factors.
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="p-3 bg-muted/30 rounded-lg">
                      <h5 className="text-sm font-medium mb-1">Capacity Considerations</h5>
                      <ul className="list-disc pl-4 text-xs text-muted-foreground space-y-1">
                        <li>
                          <strong>Intended Usage:</strong> Payment, routing,
                          or both
                        </li>
                        <li>
                          <strong>Transaction Sizes:</strong> Expected
                          payment amounts
                        </li>
                        <li>
                          <strong>Capital Allocation:</strong>{' '}
                          Diversification across channels
                        </li>
                        <li>
                          <strong>Opportunity Cost:</strong> Locked vs.
                          liquid funds
                        </li>
                        <li>
                          <strong>On-chain Fees:</strong> Higher fees for
                          larger channels
                        </li>
                      </ul>
                    </div>
                    <div className="p-3 bg-muted/30 rounded-lg">
                      <h5 className="text-sm font-medium mb-1">Typical Channel Sizes</h5>
                      <ul className="list-disc pl-4 text-xs text-muted-foreground space-y-1">
                        <li>
                          <strong>Small (≤1M sats):</strong> Testing,
                          micropayments
                        </li>
                        <li>
                          <strong>Medium (1-5M sats):</strong> Regular user,
                          small routing
                        </li>
                        <li>
                          <strong>Large (5-10M sats):</strong> Active
                          routing, merchant
                        </li>
                        <li>
                          <strong>XL (10M+ sats):</strong> Professional
                          routing nodes
                        </li>
                        <li>
                          <strong>Wumbo (16.7M+ sats):</strong> Requires
                          opt-in from both peers
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>

              {/* Step 3: Fee Consideration */}
              <div className="bg-background p-5 rounded-lg border border-border">
                <div className="flex items-center gap-3 mb-3">
                  <div className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-primary text-primary-foreground shadow-sm">
                    <span className="text-sm font-bold">3</span>
                  </div>
                  <h4 className="font-medium">Fee Consideration</h4>
                </div>
                
                <div className="ml-11 space-y-4">
                  <p className="text-sm text-muted-foreground">
                    Channel opening requires an on-chain Bitcoin transaction, which incurs
                    mining fees that should be carefully considered.
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="p-3 bg-muted/30 rounded-lg">
                      <h5 className="text-sm font-medium mb-1">Fee Factors</h5>
                      <ul className="list-disc pl-4 text-xs text-muted-foreground space-y-1">
                        <li>
                          <strong>Transaction Size:</strong> Channel opening
                          tx is ~250 bytes
                        </li>
                        <li>
                          <strong>Mempool Conditions:</strong> Current
                          Bitcoin fee market
                        </li>
                        <li>
                          <strong>Urgency:</strong> How quickly channel is
                          needed
                        </li>
                        <li>
                          <strong>Batching:</strong> Opening multiple
                          channels in one tx
                        </li>
                        <li>
                          <strong>Timing:</strong> Fee market cycles and
                          fluctuations
                        </li>
                      </ul>
                    </div>
                    <div className="p-3 bg-muted/30 rounded-lg">
                      <h5 className="text-sm font-medium mb-1">Fee Strategy</h5>
                      <ul className="list-disc pl-4 text-xs text-muted-foreground space-y-1">
                        <li>
                          <strong>Fee Rate Selection:</strong> Balance speed
                          vs. cost
                        </li>
                        <li>
                          <strong>Fee Estimators:</strong> mempool.space,
                          node fee estimation
                        </li>
                        <li>
                          <strong>Opportunity Windows:</strong>{' '}
                          Weekend/night lower fees
                        </li>
                        <li>
                          <strong>Fee Bumping:</strong> RBF/CPFP if
                          necessary
                        </li>
                        <li>
                          <strong>Economic Analysis:</strong> Weigh fee
                          against channel value
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>

              {/* Step 4: Channel Opening Command */}
              <div className="bg-background p-5 rounded-lg border border-border">
                <div className="flex items-center gap-3 mb-3">
                  <div className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-primary text-primary-foreground shadow-sm">
                    <span className="text-sm font-bold">4</span>
                  </div>
                  <h4 className="font-medium">Channel Opening Command</h4>
                </div>
                
                <div className="ml-11 space-y-4">
                  <p className="text-sm text-muted-foreground">
                    With planning complete, it's time to execute the channel opening process using your Lightning node's interface.
                  </p>
                  <div className="grid grid-cols-1 gap-4">
                    <div className="p-3 bg-muted/30 rounded-lg">
                      <h5 className="text-sm font-medium mb-2">LND Command Example</h5>
                      <div className="p-3 bg-background rounded-lg border border-border/50 font-mono text-xs text-muted-foreground">
                        <pre className="overflow-x-auto">
                          # Open a channel with 1,000,000 satoshis to a peer<br />
                          lncli openchannel --node_key=021c97a90a411ff2b10dc2a8e32de2f29d2fa49d41bfbb52bd416e460db0747d0d --local_amt=1000000 --sat_per_byte=5
                        </pre>
                      </div>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="p-3 bg-muted/30 rounded-lg">
                        <h5 className="text-sm font-medium mb-1">Command Parameters</h5>
                        <ul className="list-disc pl-4 text-xs text-muted-foreground space-y-1">
                          <li><strong>node_key:</strong> Public key of the target node</li>
                          <li><strong>local_amt:</strong> Amount in satoshis to fund the channel with</li>
                          <li><strong>sat_per_byte:</strong> On-chain fee rate</li>
                          <li><strong>push_amt:</strong> Optional amount to push to peer when opening</li>
                          <li><strong>private:</strong> Flag to make the channel private (not announced)</li>
                        </ul>
                      </div>
                      <div className="p-3 bg-muted/30 rounded-lg">
                        <h5 className="text-sm font-medium mb-1">Opening Process Stages</h5>
                        <ol className="list-decimal pl-4 text-xs text-muted-foreground space-y-1">
                          <li>Command execution and parameter validation</li>
                          <li>Funding transaction creation and signing</li>
                          <li>Broadcasting funding transaction to Bitcoin network</li>
                          <li>Waiting for blockchain confirmations (typically 3+)</li>
                          <li>Channel established and ready for use</li>
                        </ol>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Best Practices */}
          <div className="bg-card p-6 rounded-lg border border-border">
            <h3 className="text-xl font-semibold mb-4 flex items-center">
              <CheckCircle className="h-5 w-5 mr-2 text-primary" />
              Channel Opening Best Practices
            </h3>
            <div className="space-y-4">
              <p className="text-muted-foreground">
                Following these best practices will help ensure successful and effective channel management:
              </p>
              
              <div className="bg-background p-4 rounded-lg border border-border">
                <ul className="list-disc pl-5 text-sm text-muted-foreground space-y-3">
                  <li>
                    <strong>Start Small:</strong> Begin with smaller channels to learn the system before committing large amounts.
                  </li>
                  <li>
                    <strong>Diversify Channel Partners:</strong> Open multiple channels with different types of nodes rather than concentrating on a single peer.
                  </li>
                  <li>
                    <strong>Consider Private Channels:</strong> Use private channels for personal payment paths to enhance privacy and reduce routing competition.
                  </li>
                  <li>
                    <strong>Balance Inbound/Outbound Capacity:</strong> Plan for both sending and receiving funds by ensuring you have inbound capacity.
                  </li>
                  <li>
                    <strong>Maintain On-chain Reserves:</strong> Keep some Bitcoin outside of channels for fees, new channels, and emergency operations.
                  </li>
                  <li>
                    <strong>Back Up Channel States:</strong> Always keep current Static Channel Backups (SCBs) to protect your funds.
                  </li>
                  <li>
                    <strong>Document Your Channels:</strong> Keep records of channel IDs, capacities, and partner nodes for future reference.
                  </li>
                  <li>
                    <strong>Monitor Channel Health:</strong> Regularly check channel status, balance, and performance metrics.
                  </li>
                </ul>
              </div>
              
              <div className="p-4 bg-amber-50 dark:bg-amber-900/20 rounded-lg border border-amber-200 dark:border-amber-800">
                <h5 className="font-medium mb-2 flex items-center">
                  <AlertCircle className="h-5 w-5 text-amber-600 dark:text-amber-400 mr-2" />
                  Common Pitfalls to Avoid
                </h5>
                <ul className="list-disc pl-5 text-sm text-muted-foreground space-y-1">
                  <li>Opening channels without proper research on potential peers</li>
                  <li>Creating channels that are too small to be practical (dust limits)</li>
                  <li>Neglecting inbound capacity needs for receiving payments</li>
                  <li>Using fee rates that are too low, causing opening transactions to be stuck</li>
                  <li>Opening too many channels at once, stretching liquidity too thin</li>
                  <li>Failing to back up channel state information</li>
                </ul>
              </div>
            </div>
          </div>

        </div>

        {/* Verification Checkbox */}
        <VerifyCheckbox 
          moduleId={moduleId} 
          sectionId={sectionId} 
          verificationId={`${sectionId}-complete`} 
          label="I understand the fundamentals of Lightning channels and the process for opening them effectively."
        />
      </ModuleContent>
    </ModuleLayout>
  );
}
