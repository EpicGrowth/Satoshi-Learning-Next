'use client';

import React from 'react';
import { ModuleLayout } from '@/components/learn/shared/module-layout';
import { ModuleContent } from '@/components/learn/shared/module-content';
import VerifyCheckbox from '@/components/learn/shared/verify-checkbox';
import {
  Link,
  Scale,
  Wallet,
  ArrowLeftRight,
  Bitcoin,
  Layers,
  AlertCircle,
  BarChart2,
  Settings,
  ChevronRight,
  Zap,
  Database,
  Lock,
  Banknote,
} from 'lucide-react';
import SatoshiQuote from '@/components/learn/shared/satoshi-quote';

const moduleId = 'lightning-channel-management';
const sectionId = 'channel-capacity';

export default function ChannelCapacityPage() {
  return (
    <ModuleLayout>
      <ModuleContent 
        moduleId={moduleId} 
        sectionId={sectionId}
        moduleTitle="Channel Capacity"
        moduleDescription="Understanding channel capacity"
        difficulty="Intermediate"
        icon={Scale}
        checkpoints={1}
      >
        <div className="space-y-8">
          <SatoshiQuote
            quote="Moving a payment from one channel to another should work like something moving from one hand to the other."
            source="Lightning Network Developer"
            date="2018"
          />

          <div className="bg-card p-6 rounded-lg border border-border">
            <h2 className="text-2xl font-semibold mb-4 flex items-center">
              <Scale className="h-6 w-6 mr-2 text-primary" />
              Understanding Channel Capacity
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              Channel capacity is a fundamental concept in the Lightning Network that determines how much value can flow through payment channels. It defines the limits of your payment capabilities and affects your ability to send, receive, and route payments.
            </p>
          </div>

          {/* Channel Capacity Basics */}
          <div className="bg-card p-6 rounded-lg border border-border">
            <h3 className="text-xl font-semibold mb-4 flex items-center">
              <Layers className="h-5 w-5 mr-2 text-primary" />
              Channel Capacity Fundamentals
            </h3>
            <div className="space-y-6">
              <p className="text-muted-foreground">
                Channel capacity refers to the total amount of bitcoin that can be transferred through a Lightning channel. It's determined by the initial funding amount when the channel is opened and represents the maximum amount that can move within that channel at any point in time.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-background p-5 rounded-lg border border-border">
                  <h4 className="font-medium mb-3 flex items-center">
                    <Bitcoin className="h-4 w-4 mr-2 text-amber-500" />
                    What Creates Capacity
                  </h4>
                  <div className="p-4 bg-muted/30 rounded-lg text-sm text-muted-foreground">
                    <p className="mb-3">
                      The capacity of a Lightning channel is backed by actual bitcoin in a 2-of-2 multisignature address on the Bitcoin blockchain. This on-chain UTXO serves as the "anchor" or "settlement layer" for the Lightning channel, allowing for secure off-chain transactions to occur between the channel participants.
                    </p>
                    <ul className="list-disc pl-5 space-y-1">
                      <li><strong>Funding Transaction:</strong> Creates the capacity by locking bitcoin in a multisig address</li>
                      <li><strong>Fixed Total:</strong> The total capacity remains constant until a channel is closed</li>
                      <li><strong>On-chain Backing:</strong> Every satoshi in a channel is backed by real bitcoin on the blockchain</li>
                      <li><strong>Measured in Satoshis:</strong> Capacity is typically expressed in satoshis (1 BTC = 100,000,000 satoshis)</li>
                    </ul>
                  </div>
                </div>

                <div className="bg-background p-5 rounded-lg border border-border">
                  <h4 className="font-medium mb-3 flex items-center">
                    <ArrowLeftRight className="h-4 w-4 mr-2 text-blue-500" />
                    Types of Capacity
                  </h4>
                  <div className="p-4 bg-muted/30 rounded-lg">
                    <ul className="list-disc pl-5 text-sm text-muted-foreground space-y-2">
                      <li>
                        <strong>Local Capacity:</strong> The amount of funds on your side of the
                        channel that you can send to your channel partner
                      </li>
                      <li>
                        <strong>Remote Capacity:</strong> The amount of funds on your partner's side
                        of the channel that you can receive
                      </li>
                      <li>
                        <strong>Total Capacity:</strong> The sum of local and remote capacity,
                        established at channel opening
                      </li>
                      <li>
                        <strong>Inbound Capacity:</strong> Another term for remote capacity - your
                        ability to receive payments
                      </li>
                      <li>
                        <strong>Outbound Capacity:</strong> Another term for local capacity - your
                        ability to send payments
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="bg-background p-5 rounded-lg border border-border">
                <h4 className="font-medium mb-3">Channel Balance States</h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="p-4 bg-muted/30 rounded-lg">
                    <ul className="list-disc pl-5 text-sm text-muted-foreground space-y-2">
                      <li>
                        <strong>Balanced:</strong> Local and remote capacity are roughly equal
                      </li>
                      <li>
                        <strong>Depleted:</strong> All or most capacity is on one side
                      </li>
                      <li>
                        <strong>Local-heavy:</strong> More capacity on your side (good for sending)
                      </li>
                      <li>
                        <strong>Remote-heavy:</strong> More capacity on their side (good for
                        receiving)
                      </li>
                    </ul>
                  </div>
                  <div className="p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
                    <h5 className="text-sm font-medium mb-2">Technical Example: Channel State</h5>
                    <p className="text-xs text-muted-foreground mb-2">
                      A 1,000,000 satoshi channel might have the following state:
                    </p>
                    <div className="overflow-x-auto">
                      <table className="min-w-full text-xs">
                        <thead>
                          <tr className="border-b border-border">
                            <th className="text-left font-medium p-2">Type</th>
                            <th className="text-right font-medium p-2">Amount (sats)</th>
                            <th className="text-left font-medium p-2">Capability</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr className="border-b border-border/50">
                            <td className="p-2">Total Capacity</td>
                            <td className="text-right font-mono">1,000,000</td>
                            <td className="p-2">Channel Size</td>
                          </tr>
                          <tr className="border-b border-border/50">
                            <td className="p-2">Local Balance</td>
                            <td className="text-right font-mono">700,000</td>
                            <td className="p-2">Can send up to 700K</td>
                          </tr>
                          <tr>
                            <td className="p-2">Remote Balance</td>
                            <td className="text-right font-mono">300,000</td>
                            <td className="p-2">Can receive up to 300K</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* How Capacity Changes */}
          <div className="bg-card p-6 rounded-lg border border-border">
            <h3 className="text-xl font-semibold mb-4 flex items-center">
              <ArrowLeftRight className="h-5 w-5 mr-2 text-primary" />
              How Channel Capacity Changes
            </h3>
            <div className="space-y-6">
              <p className="text-muted-foreground">
                Unlike traditional payment systems, Lightning Network channel capacity is dynamic. It shifts as payments flow through the channel, but always maintains the same total sum (minus any routing fees).
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-background p-5 rounded-lg border border-border">
                  <h4 className="font-medium mb-3">Events That Change Channel Balance</h4>
                  <div className="space-y-4">
                    <div className="p-3 bg-muted/30 rounded-lg">
                      <h5 className="text-sm font-medium">1. Sending a Payment</h5>
                      <p className="text-xs text-muted-foreground mt-1">
                        When you send a payment, your local balance decreases and remote balance
                        increases by that amount.
                      </p>
                      <div className="mt-2 flex items-center text-xs">
                        <div className="bg-green-100 dark:bg-green-900/20 p-1 rounded border border-green-200 dark:border-green-800 w-16 text-center font-mono">700,000</div>
                        <ChevronRight className="h-4 w-4 mx-2 text-muted-foreground" />
                        <div className="bg-amber-100 dark:bg-amber-900/20 p-1 rounded border border-amber-200 dark:border-amber-800 w-16 text-center font-mono">600,000</div>
                        <div className="mx-2 text-muted-foreground">-100,000</div>
                      </div>
                    </div>
                    <div className="p-3 bg-muted/30 rounded-lg">
                      <h5 className="text-sm font-medium">2. Receiving a Payment</h5>
                      <p className="text-xs text-muted-foreground mt-1">
                        When you receive a payment, your local balance increases and remote balance
                        decreases by that amount.
                      </p>
                      <div className="mt-2 flex items-center text-xs">
                        <div className="bg-green-100 dark:bg-green-900/20 p-1 rounded border border-green-200 dark:border-green-800 w-16 text-center font-mono">300,000</div>
                        <ChevronRight className="h-4 w-4 mx-2 text-muted-foreground" />
                        <div className="bg-amber-100 dark:bg-amber-900/20 p-1 rounded border border-amber-200 dark:border-amber-800 w-16 text-center font-mono">400,000</div>
                        <div className="mx-2 text-muted-foreground">+100,000</div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-background p-5 rounded-lg border border-border">
                  <h4 className="font-medium mb-3">Routing Impacts on Capacity</h4>
                  <div className="space-y-4">
                    <div className="p-3 bg-muted/30 rounded-lg">
                      <h5 className="text-sm font-medium">1. Forwarding Payments</h5>
                      <p className="text-xs text-muted-foreground mt-1">
                        When routing a payment, you receive on one channel and send on another, shifting the capacity balance in both channels.
                      </p>
                      <div className="mt-2 flex flex-col gap-1 text-xs">
                        <div className="flex items-center">
                          <span className="w-20 text-right pr-2">Channel A:</span>
                          <div className="bg-blue-100 dark:bg-blue-900/20 p-1 rounded border border-blue-200 dark:border-blue-800 w-16 text-center font-mono">300,000</div>
                          <ChevronRight className="h-4 w-4 mx-2 text-muted-foreground" />
                          <div className="bg-blue-100 dark:bg-blue-900/20 p-1 rounded border border-blue-200 dark:border-blue-800 w-16 text-center font-mono">400,000</div>
                        </div>
                        <div className="flex items-center">
                          <span className="w-20 text-right pr-2">Channel B:</span>
                          <div className="bg-purple-100 dark:bg-purple-900/20 p-1 rounded border border-purple-200 dark:border-purple-800 w-16 text-center font-mono">500,000</div>
                          <ChevronRight className="h-4 w-4 mx-2 text-muted-foreground" />
                          <div className="bg-purple-100 dark:bg-purple-900/20 p-1 rounded border border-purple-200 dark:border-purple-800 w-16 text-center font-mono">400,000</div>
                        </div>
                      </div>
                    </div>
                    <div className="p-3 bg-muted/30 rounded-lg">
                      <h5 className="text-sm font-medium">2. Fee Collection</h5>
                      <p className="text-xs text-muted-foreground mt-1">
                        When you route payments, you collect fees which slightly increase your local balance compared to the amount forwarded.
                      </p>
                      <div className="mt-2 text-xs text-muted-foreground">
                        <p>Example: Routing 100,000 sats with a 1 sat base fee + 0.01% fee rate</p>
                        <p className="mt-1">Fee earned: 1 + (100,000 × 0.0001) = 11 satoshis</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="p-4 bg-amber-50 dark:bg-amber-900/20 rounded-lg border border-amber-200 dark:border-amber-800">
                <h5 className="font-medium mb-2 flex items-center">
                  <AlertCircle className="h-4 w-4 text-amber-600 dark:text-amber-400 mr-2" />
                  Important Capacity Limitations
                </h5>
                <ul className="list-disc pl-5 text-sm text-muted-foreground space-y-1">
                  <li>You can only send up to your local balance amount</li>
                  <li>You can only receive up to your remote balance amount</li>
                  <li>The total capacity cannot increase without closing and reopening the channel</li>
                  <li>HTLC minimums and maximums limit the smallest and largest payments</li>
                  <li>Reserve requirements may prevent spending the very last satoshis in a channel</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Capacity Management Strategies */}
          <div className="bg-card p-6 rounded-lg border border-border">
            <h3 className="text-xl font-semibold mb-4 flex items-center">
              <Settings className="h-5 w-5 mr-2 text-primary" />
              Capacity Management Strategies
            </h3>
            <div className="space-y-6">
              <p className="text-muted-foreground">
                Effective Lightning node operation requires strategic capacity management to ensure you have the right amount of inbound and outbound capacity.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-background p-5 rounded-lg border border-border">
                  <h4 className="font-medium mb-3 flex items-center">
                    <Wallet className="h-4 w-4 mr-2 text-green-500" />
                    Outbound Capacity Strategies
                  </h4>
                  <ul className="list-disc pl-5 text-sm text-muted-foreground space-y-2">
                    <li><strong>Opening New Channels:</strong> Fund new channels with peers who provide valuable connections</li>
                    <li><strong>Rebalancing:</strong> Move funds from remote-heavy channels to local-heavy ones</li>
                    <li><strong>Circular Rebalancing:</strong> Send a payment to yourself through multiple channels</li>
                    <li><strong>Channel Splicing:</strong> Add more funds to existing channels (if supported)</li>
                    <li><strong>On-chain Refills:</strong> Close depleted channels and open new ones with fresh funds</li>
                  </ul>
                </div>

                <div className="bg-background p-5 rounded-lg border border-border">
                  <h4 className="font-medium mb-3 flex items-center">
                    <Banknote className="h-4 w-4 mr-2 text-blue-500" />
                    Inbound Capacity Strategies
                  </h4>
                  <ul className="list-disc pl-5 text-sm text-muted-foreground space-y-2">
                    <li><strong>Receiving Payments:</strong> Natural usage over time increases inbound capacity</li>
                    <li><strong>Dual-Funded Channels:</strong> Both parties contribute funds to the channel</li>
                    <li><strong>Channel Marketplaces:</strong> Services like Lightning Pool to purchase inbound liquidity</li>
                    <li><strong>Liquidity Swaps:</strong> "Loop Out" to exchange on-chain funds for inbound capacity</li>
                    <li><strong>Asking for Channels:</strong> Requesting well-connected nodes to open channels to you</li>
                  </ul>
                </div>
              </div>

              <div className="bg-background p-5 rounded-lg border border-border">
                <h4 className="font-medium mb-3 flex items-center">
                  <BarChart2 className="h-4 w-4 mr-2 text-purple-500" />
                  Capacity Monitoring
                </h4>
                <div className="p-4 bg-muted/30 rounded-lg">
                  <p className="text-sm text-muted-foreground mb-3">
                    Regular monitoring of your channels' capacity distribution is essential for maintaining a healthy Lightning node.
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm text-muted-foreground">
                    <div>
                      <h5 className="font-medium mb-1">Key Metrics to Track</h5>
                      <ul className="list-disc pl-4 text-xs space-y-1">
                        <li>Local vs. remote balance ratio for each channel</li>
                        <li>Total inbound vs. outbound capacity</li>
                        <li>Historical capacity utilization patterns</li>
                        <li>Failed payment attempts due to capacity constraints</li>
                        <li>Routing success rates and capacity bottlenecks</li>
                      </ul>
                    </div>
                    <div>
                      <h5 className="font-medium mb-1">Monitoring Tools</h5>
                      <ul className="list-disc pl-4 text-xs space-y-1">
                        <li>Terminal: <code>lncli listchannels</code></li>
                        <li>RTL/Thunderhub: Graphical channel balance views</li>
                        <li>Balance of Satoshis (BoS): Advanced capacity reports</li>
                        <li>LNBig Tools: Capacity visualization</li>
                        <li>Custom scripts and dashboards for larger operations</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* Verification Checkbox */}
        <VerifyCheckbox 
          moduleId={moduleId} 
          sectionId={sectionId} 
          verificationId={`${sectionId}-complete`} 
          label="I understand Lightning channel capacity concepts and how to effectively manage channel balances."
        />
      </ModuleContent>
    </ModuleLayout>
  );
}
