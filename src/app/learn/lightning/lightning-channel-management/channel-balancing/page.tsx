'use client';

import React from 'react';
import { ModuleLayout } from '@/components/learn/shared/module-layout';
import { ModuleContent } from '@/components/learn/shared/module-content';
import VerifyCheckbox from '@/components/learn/shared/verify-checkbox';
import {
  Link,
  ArrowLeftRight,
  Zap,
  BarChart3,
  BarChart4,
  ArrowRightLeft,
  RefreshCw,
  Scale,
  CircleDollarSign,
  AlertCircle,
  Terminal,
  Settings,
  Database,
  ArrowUpDown,
  Wallet,
  ChevronRight,
} from 'lucide-react';
import SatoshiQuote from '@/components/learn/shared/satoshi-quote';

const moduleId = 'lightning-channel-management';
const sectionId = 'channel-balancing';

export default function ChannelBalancingPage() {
  return (
    <ModuleLayout>
      <ModuleContent 
        moduleId={moduleId} 
        sectionId={sectionId}
        moduleTitle="Channel Balancing"
        moduleDescription="Balancing channel liquidity"
        difficulty="Intermediate"
        icon={ArrowLeftRight}
        checkpoints={1}
      >
        <div className="space-y-8">
          <SatoshiQuote
            quote="The Lightning Network introduces a more fluid economic system, where value flows bidirectionally through channels."
            source="Lightning Network Whitepaper"
            date="January 2016"
          />

          <div className="bg-card p-6 rounded-lg border border-border">
            <h2 className="text-2xl font-semibold mb-4 flex items-center">
              <ArrowLeftRight className="h-6 w-6 mr-2 text-primary" />
              Channel Balancing
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              Channel balancing is the strategic process of managing the distribution of funds between the local and 
              remote sides of your Lightning channels. The goal is to optimize your node's liquidity to efficiently 
              send, receive, and route payments based on your specific needs and node strategy.
            </p>
          </div>

          {/* Channel Balancing Fundamentals */}
          <div className="bg-card p-6 rounded-lg border border-border">
            <h3 className="text-xl font-semibold mb-4 flex items-center">
              <Scale className="h-5 w-5 mr-2 text-primary" />
              Why Channel Balance Matters
            </h3>
            <div className="space-y-6">
              <p className="text-muted-foreground">
                Think of a Lightning channel as a two-way street with a fixed width (the total capacity), where the 
                available space in each direction determines how much value can flow. Balancing ensures that both 
                directions remain viable for the traffic you expect.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-background p-5 rounded-lg border border-border">
                  <h4 className="font-medium mb-3 flex items-center">
                    <Scale className="h-4 w-4 mr-2 text-blue-500" />
                    Balance Impact
                  </h4>
                  <ul className="list-disc pl-5 text-sm text-muted-foreground space-y-2">
                    <li><strong>Payment Success Rate:</strong> Well-balanced channels increase the likelihood of successful payments</li>
                    <li><strong>Routing Effectiveness:</strong> Balanced channels can route payments in both directions</li>
                    <li><strong>Capital Efficiency:</strong> Proper balancing maximizes the utility of your committed capital</li>
                    <li><strong>Fee Generation:</strong> Balanced routing channels earn more fees by serving traffic in both directions</li>
                    <li><strong>User Experience:</strong> Merchants need inbound capacity, spenders need outbound capacity</li>
                  </ul>
                </div>
                
                <div className="bg-background p-5 rounded-lg border border-border">
                  <h4 className="font-medium mb-3 flex items-center">
                    <BarChart3 className="h-4 w-4 mr-2 text-green-500" />
                    Balance States
                  </h4>
                  <div className="space-y-4">
                    <div className="p-3 bg-muted/30 rounded-lg flex flex-col">
                      <div className="flex items-center mb-2">
                        <div className="h-3 w-full rounded-full bg-muted overflow-hidden">
                          <div className="h-full bg-blue-500" style={{ width: '50%' }}></div>
                        </div>
                      </div>
                      <div className="flex justify-between text-xs">
                        <span>50% Local</span>
                        <span>50% Remote</span>
                      </div>
                      <p className="text-xs mt-1"><strong>Balanced:</strong> Optimal for routing nodes</p>
                    </div>
                    
                    <div className="p-3 bg-muted/30 rounded-lg flex flex-col">
                      <div className="flex items-center mb-2">
                        <div className="h-3 w-full rounded-full bg-muted overflow-hidden">
                          <div className="h-full bg-blue-500" style={{ width: '90%' }}></div>
                        </div>
                      </div>
                      <div className="flex justify-between text-xs">
                        <span>90% Local</span>
                        <span>10% Remote</span>
                      </div>
                      <p className="text-xs mt-1"><strong>Local-heavy:</strong> Good for sending, poor for receiving</p>
                    </div>
                    
                    <div className="p-3 bg-muted/30 rounded-lg flex flex-col">
                      <div className="flex items-center mb-2">
                        <div className="h-3 w-full rounded-full bg-muted overflow-hidden">
                          <div className="h-full bg-blue-500" style={{ width: '10%' }}></div>
                        </div>
                      </div>
                      <div className="flex justify-between text-xs">
                        <span>10% Local</span>
                        <span>90% Remote</span>
                      </div>
                      <p className="text-xs mt-1"><strong>Remote-heavy:</strong> Good for receiving, poor for sending</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-background p-5 rounded-lg border border-border">
                <h4 className="font-medium mb-3">Channel Balance Economics</h4>
                <p className="text-sm text-muted-foreground mb-3">
                  Different node types require different optimal balancing strategies:
                </p>
                <div className="overflow-x-auto">
                  <table className="min-w-full text-sm">
                    <thead>
                      <tr className="border-b border-border">
                        <th className="text-left font-medium p-2">Node Type</th>
                        <th className="text-left font-medium p-2">Ideal Balance</th>
                        <th className="text-left font-medium p-2">Rationale</th>
                      </tr>
                    </thead>
                    <tbody className="text-xs text-muted-foreground">
                      <tr className="border-b border-border/50">
                        <td className="p-2">Merchant Node</td>
                        <td className="p-2">10-30% Local / 70-90% Remote</td>
                        <td className="p-2">Primarily receiving payments from customers</td>
                      </tr>
                      <tr className="border-b border-border/50">
                        <td className="p-2">Consumer Node</td>
                        <td className="p-2">70-90% Local / 10-30% Remote</td>
                        <td className="p-2">Primarily sending payments to merchants</td>
                      </tr>
                      <tr className="border-b border-border/50">
                        <td className="p-2">Routing Node</td>
                        <td className="p-2">40-60% Local / 40-60% Remote</td>
                        <td className="p-2">Needs to support payments in both directions</td>
                      </tr>
                      <tr>
                        <td className="p-2">Exchange Node</td>
                        <td className="p-2">60-80% Local / 20-40% Remote</td>
                        <td className="p-2">Primarily serving customer withdrawals</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>

          {/* Detecting Imbalances */}
          <div className="bg-card p-6 rounded-lg border border-border">
            <h3 className="text-xl font-semibold mb-4 flex items-center">
              <BarChart4 className="h-5 w-5 mr-2 text-primary" />
              Detecting Imbalances
            </h3>
            <div className="space-y-6">
              <p className="text-muted-foreground">
                The first step in channel balancing is recognizing when your channels need rebalancing and which ones to prioritize.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-background p-5 rounded-lg border border-border">
                  <h4 className="font-medium mb-3 flex items-center">
                    <AlertCircle className="h-4 w-4 mr-2 text-amber-500" />
                    Imbalance Indicators
                  </h4>
                  <ul className="list-disc pl-5 text-sm text-muted-foreground space-y-2">
                    <li><strong>Failed Payments:</strong> Consistent payment failures in one direction</li>
                    <li><strong>Extreme Ratios:</strong> Channels with more than 80% capacity on one side</li>
                    <li><strong>Unused Capacity:</strong> Large channels with minimal payment activity</li>
                    <li><strong>Routing Failures:</strong> HTLC failures due to insufficient liquidity</li>
                    <li><strong>Missed Opportunity:</strong> Failed routing attempts due to balance constraints</li>
                  </ul>
                </div>
                
                <div className="bg-background p-5 rounded-lg border border-border">
                  <h4 className="font-medium mb-3 flex items-center">
                    <Terminal className="h-4 w-4 mr-2 text-purple-500" />
                    Monitoring Commands
                  </h4>
                  <div className="space-y-3">
                    <div>
                      <h5 className="text-xs font-medium">List all channel balances (LND)</h5>
                      <div className="mt-1 bg-muted/30 p-2 rounded-md text-xs font-mono text-muted-foreground overflow-x-auto">
                        lncli listchannels | jq '.channels[] | .channel_point, .local_balance, .remote_balance, .capacity'
                      </div>
                    </div>
                    <div>
                      <h5 className="text-xs font-medium">Calculate balance ratios</h5>
                      <div className="mt-1 bg-muted/30 p-2 rounded-md text-xs font-mono text-muted-foreground overflow-x-auto">
                        lncli listchannels | jq '.channels[] | .channel_point, (.local_balance|tonumber)/(.capacity|tonumber)*100'
                      </div>
                    </div>
                    <div>
                      <h5 className="text-xs font-medium">View channels with extreme balance</h5>
                      <div className="mt-1 bg-muted/30 p-2 rounded-md text-xs font-mono text-muted-foreground overflow-x-auto">
                        bos balanced --below 0.2
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg border border-blue-200 dark:border-blue-800">
                <h5 className="font-medium mb-2">Visual Monitoring Tools</h5>
                <p className="text-sm text-muted-foreground mb-3">
                  Several graphical interfaces can help visualize channel balance status:
                </p>
                <ul className="list-disc pl-5 text-sm text-muted-foreground space-y-1">
                  <li><strong>RTL (Ride The Lightning):</strong> Color-coded channel balance visualization</li>
                  <li><strong>ThunderHub:</strong> Interactive channel balance charts</li>
                  <li><strong>Balance of Satoshis:</strong> Command-line reporting with visual elements</li>
                  <li><strong>LND Connect:</strong> Basic channel information dashboard</li>
                  <li><strong>Grafana + Prometheus:</strong> Custom dashboards for advanced monitoring</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Rebalancing Techniques */}
          <div className="bg-card p-6 rounded-lg border border-border">
            <h3 className="text-xl font-semibold mb-4 flex items-center">
              <RefreshCw className="h-5 w-5 mr-2 text-primary" />
              Rebalancing Techniques
            </h3>
            <div className="space-y-6">
              <p className="text-muted-foreground">
                Once you've identified channels that need rebalancing, several techniques can help redistribute liquidity to achieve optimal balance.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-background p-5 rounded-lg border border-border">
                  <h4 className="font-medium mb-3 flex items-center">
                    <ArrowRightLeft className="h-4 w-4 mr-2 text-green-500" />
                    Circular Rebalancing
                  </h4>
                  <div className="p-4 bg-muted/30 rounded-lg">
                    <p className="text-sm text-muted-foreground mb-3">
                      The most common rebalancing technique where you send a payment to yourself through a circular route, effectively moving funds from one channel to another.
                    </p>
                    <div className="space-y-2">
                      <div className="flex items-center text-xs text-muted-foreground">
                        <div className="p-1 bg-blue-100 dark:bg-blue-900/20 rounded border border-blue-200 dark:border-blue-800 flex-shrink-0 w-28 text-center">
                          Channel A<br/>(Local-heavy)
                        </div>
                        <ChevronRight className="mx-2 h-4 w-4" />
                        <div className="p-1 bg-purple-100 dark:bg-purple-900/20 rounded border border-purple-200 dark:border-purple-800 flex-shrink-0 w-16 text-center">
                          Peer X
                        </div>
                        <ChevronRight className="mx-2 h-4 w-4" />
                        <div className="p-1 bg-red-100 dark:bg-red-900/20 rounded border border-red-200 dark:border-red-800 flex-shrink-0 w-28 text-center">
                          Channel B<br/>(Remote-heavy)
                        </div>
                      </div>
                      <p className="text-xs text-muted-foreground">
                        Command (using Balance of Satoshis):
                      </p>
                      <div className="bg-background p-2 rounded-md text-xs font-mono text-muted-foreground overflow-x-auto">
                        bos rebalance --out [channel_id_A] --in [channel_id_B] --amount [sats]
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-background p-5 rounded-lg border border-border">
                  <h4 className="font-medium mb-3 flex items-center">
                    <Wallet className="h-4 w-4 mr-2 text-blue-500" />
                    Submarine Swaps
                  </h4>
                  <div className="p-4 bg-muted/30 rounded-lg">
                    <p className="text-sm text-muted-foreground mb-3">
                      Combines on-chain and off-chain transactions to rebalance liquidity, using services like Loop Out and Loop In.
                    </p>
                    <div className="space-y-3">
                      <div>
                        <h5 className="text-xs font-medium">Loop Out (Get Inbound Capacity)</h5>
                        <p className="text-xs text-muted-foreground mt-1">
                          Sends Lightning funds out to receive on-chain BTC, increasing inbound capacity.
                        </p>
                        <div className="flex items-center text-xs text-muted-foreground mt-1">
                          <div className="p-1 bg-green-100 dark:bg-green-900/20 rounded border border-green-200 dark:border-green-800 w-24 text-center">
                            Lightning
                          </div>
                          <ArrowRightLeft className="mx-2 h-3 w-3" />
                          <div className="p-1 bg-amber-100 dark:bg-amber-900/20 rounded border border-amber-200 dark:border-amber-800 w-24 text-center">
                            On-chain BTC
                          </div>
                        </div>
                      </div>
                      <div>
                        <h5 className="text-xs font-medium">Loop In (Get Outbound Capacity)</h5>
                        <p className="text-xs text-muted-foreground mt-1">
                          Sends on-chain BTC to receive Lightning funds, increasing outbound capacity.
                        </p>
                        <div className="flex items-center text-xs text-muted-foreground mt-1">
                          <div className="p-1 bg-amber-100 dark:bg-amber-900/20 rounded border border-amber-200 dark:border-amber-800 w-24 text-center">
                            On-chain BTC
                          </div>
                          <ArrowRightLeft className="mx-2 h-3 w-3" />
                          <div className="p-1 bg-green-100 dark:bg-green-900/20 rounded border border-green-200 dark:border-green-800 w-24 text-center">
                            Lightning
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-background p-5 rounded-lg border border-border">
                  <h4 className="font-medium mb-3 flex items-center">
                    <CircleDollarSign className="h-4 w-4 mr-2 text-green-500" />
                    Fee Management
                  </h4>
                  <div className="p-4 bg-muted/30 rounded-lg">
                    <p className="text-sm text-muted-foreground mb-3">
                      Using fee policies to incentivize the flow of payments in desired directions.
                    </p>
                    <ul className="list-disc pl-5 text-xs text-muted-foreground space-y-2">
                      <li><strong>Higher fees</strong> on channels with excessive local balance to discourage outgoing payments</li>
                      <li><strong>Lower fees</strong> on channels with excessive remote balance to attract incoming payments</li>
                      <li><strong>Dynamic fee adjustment</strong> based on current balance state</li>
                      <li>Command example:</li>
                    </ul>
                    <div className="mt-2 bg-background p-2 rounded-md text-xs font-mono text-muted-foreground overflow-x-auto">
                      lncli updatechanpolicy --base_fee_msat 1000 --fee_rate 0.000100 --time_lock_delta 40 --chan_point=[channel_point]
                    </div>
                  </div>
                </div>

                <div className="bg-background p-5 rounded-lg border border-border">
                  <h4 className="font-medium mb-3 flex items-center">
                    <Settings className="h-4 w-4 mr-2 text-purple-500" />
                    Advanced Techniques
                  </h4>
                  <div className="p-4 bg-muted/30 rounded-lg">
                    <ul className="list-disc pl-5 text-xs text-muted-foreground space-y-2">
                      <li>
                        <strong>Channel splicing:</strong> Adding or removing funds from existing channels without closing them (requires protocol support)
                      </li>
                      <li>
                        <strong>JIT routing:</strong> Just-in-time rebalancing triggered by routing attempts
                      </li>
                      <li>
                        <strong>Automated rebalancing:</strong> Using tools like Lightning Terminal or custom scripts for automatic balance management
                      </li>
                      <li>
                        <strong>Balance of Satoshis autopilot:</strong> Scheduled rebalancing based on set parameters
                      </li>
                      <li>
                        <strong>Multi-path rebalance:</strong> Splitting rebalance payments across multiple routes
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="p-4 bg-amber-50 dark:bg-amber-900/20 rounded-lg border border-amber-200 dark:border-amber-800">
                <h5 className="font-medium mb-2 flex items-center">
                  <AlertCircle className="h-4 w-4 text-amber-600 dark:text-amber-400 mr-2" />
                  Rebalancing Cost Considerations
                </h5>
                <p className="text-sm text-muted-foreground mb-2">
                  Rebalancing incurs routing fees, so it's important to evaluate whether the cost is justified:
                </p>
                <ul className="list-disc pl-5 text-sm text-muted-foreground space-y-1">
                  <li>Calculate the fee cost vs. the opportunity cost of locked, unusable capital</li>
                  <li>Consider the potential routing revenue from a well-balanced channel</li>
                  <li>Use fee limits when rebalancing to avoid overpaying (e.g., <code>--max-fee 100</code>)</li>
                  <li>Rebalance during periods of lower network activity when fees may be lower</li>
                  <li>For routing nodes, rebalancing costs are a business expense for maintaining service quality</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Balance Management Strategy */}
          <div className="bg-card p-6 rounded-lg border border-border">
            <h3 className="text-xl font-semibold mb-4 flex items-center">
              <Database className="h-5 w-5 mr-2 text-primary" />
              Developing a Balance Management Strategy
            </h3>
            <div className="space-y-4">
              <p className="text-muted-foreground">
                An effective channel balancing strategy depends on your node's purpose and the network topology around it.
              </p>
              
              <div className="bg-background p-5 rounded-lg border border-border">
                <h4 className="font-medium mb-3">Strategy Components</h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="p-3 bg-muted/30 rounded-lg">
                    <h5 className="text-sm font-medium mb-1">Monitoring Framework</h5>
                    <ul className="list-disc pl-4 text-xs text-muted-foreground space-y-1">
                      <li>Set balance thresholds that trigger rebalancing actions</li>
                      <li>Schedule regular balance reviews (daily or weekly)</li>
                      <li>Monitor routing success rates and failed HTLCs</li>
                      <li>Track rebalancing costs over time</li>
                      <li>Analyze payment flow patterns to anticipate needs</li>
                    </ul>
                  </div>
                  <div className="p-3 bg-muted/30 rounded-lg">
                    <h5 className="text-sm font-medium mb-1">Intervention Guidelines</h5>
                    <ul className="list-disc pl-4 text-xs text-muted-foreground space-y-1">
                      <li>Determine which channels to prioritize for rebalancing</li>
                      <li>Set maximum fee limits for rebalancing operations</li>
                      <li>Decide between manual and automated rebalancing approaches</li>
                      <li>Select preferred rebalancing techniques for different scenarios</li>
                      <li>Define criteria for channel closure when rebalancing isn't viable</li>
                    </ul>
                  </div>
                </div>
              </div>
              
              <div className="p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg border border-blue-200 dark:border-blue-800">
                <h5 className="font-medium mb-2">Sample Balancing Strategy - Routing Node</h5>
                <ol className="list-decimal pl-5 text-sm text-muted-foreground space-y-1">
                  <li>Maintain 40-60% local/remote balance on all high-value channels</li>
                  <li>Schedule weekly review of all channel balances</li>
                  <li>Automate rebalancing for channels exceeding 70/30 ratio in either direction</li>
                  <li>Set rebalancing fee limit to 0.5% of amount being rebalanced</li>
                  <li>Adjust channel fees weekly based on current balance state</li>
                  <li>Maintain a reserve of on-chain funds for loop operations when circular rebalancing is too expensive</li>
                  <li>Consider closing persistently imbalanced channels after 3 months if rebalancing remains cost-prohibitive</li>
                </ol>
              </div>
            </div>
          </div>

        </div>

        {/* Verification Checkbox */}
        <VerifyCheckbox 
          moduleId={moduleId} 
          sectionId={sectionId} 
          verificationId={`${sectionId}-complete`} 
          label="I understand the importance of Lightning channel balancing and the various techniques to optimize channel liquidity."
        />
      </ModuleContent>
    </ModuleLayout>
  );
}
