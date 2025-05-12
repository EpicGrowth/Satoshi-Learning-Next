'use client';

import { Link, ArrowLeftRight, Zap, BarChart3, BarChart4, ArrowRightLeft, RefreshCw, Scale, CircleDollarSign } from 'lucide-react';
import { ModuleLayout } from '@/components/learn/shared/module-layout';
import { ModuleContent } from '@/components/learn/shared/module-content';
import VerifyCheckbox from '@/components/learn/shared/verify-checkbox';
import { Card } from '@/components/ui/card';
import SatoshiQuote from '@/components/learn/shared/satoshi-quote';

export default function ChannelBalancing() {
  return (
    <ModuleLayout>
      <ModuleContent
      moduleId="lightning-channel-management"
      moduleTitle="Channel Balancing"
      moduleDescription="Mastering Lightning channel liquidity management"
      difficulty="Intermediate"
      icon={Link}
    >
      <div className="space-y-8">
        {/* A Note from Satoshi */}
        <div className="bg-muted/50 p-6 rounded-lg border border-border/50">
          <h2 className="text-xl font-bold mb-4">A Note from Satoshi</h2>
          
          <div className="prose dark:prose-invert max-w-none">
            <p>
              When I designed Bitcoin, each transaction represented a distinct, atomic transfer of value. 
              The Lightning Network introduces a more fluid economic system, where value flows bidirectionally 
              through channels. This introduces an interesting new dimension: liquidity management.
            </p>

            <p>
              Channel balancing is where the Lightning Network transforms from a simple payment system into a 
              sophisticated economic network. It's akin to how rivers naturally find the optimal path through a landscape, 
              with each channel operator playing the role of a watershed manager, carefully directing flows to maintain 
              the system's overall health.
            </p>

            <p>
              For node operators, mastering channel balancing isn't just a technical skill—it's an art form that 
              combines economics, game theory, and network topology. It's the practice of ensuring that your slice of 
              the Lightning Network remains efficient, profitable, and ready to service payments in all directions.
              Let me guide you through this essential aspect of Lightning operations.
            </p>
          </div>
        </div>

        {/* Main Content */}
        <div className="bg-card p-6 rounded-lg border border-border">
          <h2 className="text-xl font-bold mb-4">Channel Balancing Fundamentals</h2>
          
          <div className="space-y-6">
            <div className="prose dark:prose-invert max-w-none">
              <h3>What is Channel Balancing?</h3>
              <p>
                Channel balancing is the strategic process of managing the distribution of funds between the local and 
                remote sides of your Lightning channels. The goal is to optimize your node's liquidity to efficiently 
                send, receive, and route payments based on your specific needs and node strategy.
              </p>
              
              <p>
                Think of a Lightning channel as a two-way street with a fixed width (the total capacity), where the 
                available space in each direction determines how much value can flow. Balancing ensures that both 
                directions remain viable for the traffic you expect.
              </p>
            </div>

            <SubSectionContent title="Why Channel Balance Matters">
              <div className="space-y-4">
                <p>
                  Proper balance management directly impacts your Lightning node's functionality, efficiency, and potential profitability.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="bg-muted p-6 rounded-lg">
                    <h4 className="font-medium mb-4 flex items-center">
                      <Scale className="h-5 w-5 text-primary mr-2" />
                      Balance Impact
                    </h4>
                    <ul className="list-disc pl-4 space-y-2 text-sm">
                      <li><strong>Payment Success Rate:</strong> Well-balanced channels increase the likelihood of successful payments</li>
                      <li><strong>Routing Effectiveness:</strong> Balanced channels can route payments in both directions</li>
                      <li><strong>Capital Efficiency:</strong> Proper balancing maximizes the utility of your committed capital</li>
                      <li><strong>Fee Generation:</strong> Balanced routing channels earn more fees by serving traffic in both directions</li>
                      <li><strong>User Experience:</strong> Merchants need inbound capacity, spenders need outbound capacity</li>
                    </ul>
                  </div>
                  
                  <div className="bg-muted p-6 rounded-lg">
                    <h4 className="font-medium mb-4 flex items-center">
                      <BarChart3 className="h-5 w-5 text-primary mr-2" />
                      Balance States
                    </h4>
                    <div className="space-y-4">
                      <div className="p-3 bg-background rounded-lg flex flex-col">
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
                      
                      <div className="p-3 bg-background rounded-lg flex flex-col">
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
                      
                      <div className="p-3 bg-background rounded-lg flex flex-col">
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

                <div className="bg-muted/50 p-4 rounded-lg">
                  <h4 className="font-medium mb-3">Channel Balance Economics</h4>
                  <p className="text-sm mb-3">
                    Different node types require different optimal balancing strategies:
                  </p>
                  <table className="min-w-full text-sm">
                    <thead>
                      <tr className="border-b border-border">
                        <th className="text-left font-medium p-2">Node Type</th>
                        <th className="text-left font-medium p-2">Ideal Balance</th>
                        <th className="text-left font-medium p-2">Rationale</th>
                      </tr>
                    </thead>
                    <tbody className="text-xs">
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
            </SubSectionContent>

            <SubSectionContent title="Detecting Imbalances">
              <div className="space-y-4">
                <p>
                  The first step in channel balancing is recognizing when your channels need rebalancing and which ones to prioritize.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="bg-muted p-6 rounded-lg">
                    <h4 className="font-medium mb-4 flex items-center">
                      <BarChart4 className="h-5 w-5 text-primary mr-2" />
                      Imbalance Indicators
                    </h4>
                    <ul className="list-disc pl-4 space-y-2 text-sm">
                      <li><strong>Failed Payments:</strong> Consistent payment failures in one direction</li>
                      <li><strong>Extreme Ratios:</strong> Channels with more than 80% capacity on one side</li>
                      <li><strong>Unused Capacity:</strong> Large channels with minimal payment activity</li>
                      <li><strong>Routing Failures:</strong> HTLC failures due to insufficient liquidity</li>
                      <li><strong>Missed Opportunity:</strong> Failed routing attempts due to balance constraints</li>
                    </ul>
                  </div>
                  
                  <div className="bg-muted p-6 rounded-lg">
                    <h4 className="font-medium mb-4">Monitoring Commands</h4>
                    <div className="space-y-3">
                      <div>
                        <h5 className="text-sm font-medium">List all channel balances (LND)</h5>
                        <div className="mt-1 bg-background p-3 rounded-md">
                          <pre className="overflow-x-auto text-[9px]">
                            <code className="text-muted-foreground">
                              lncli listchannels | jq '.channels[] | .channel_point, .local_balance, .remote_balance, .capacity'
                            </code>
                          </pre>
                        </div>
                      </div>
                      <div>
                        <h5 className="text-sm font-medium">See balance percentages</h5>
                        <div className="mt-1 bg-background p-3 rounded-md">
                          <pre className="overflow-x-auto text-[9px]">
                            <code className="text-muted-foreground">
                              lncli listchannels | jq '.channels[] | .channel_point, 
                              (.local_balance|tonumber) as $lb | 
                              (.capacity|tonumber) as $cap | 
                              ($lb / $cap * 100 | floor | tostring + "%") + " local"'
                            </code>
                          </pre>
                        </div>
                      </div>
                      <div>
                        <h5 className="text-sm font-medium">Find imbalanced channels</h5>
                        <div className="mt-1 bg-background p-3 rounded-md">
                          <pre className="overflow-x-auto text-[9px]">
                            <code className="text-muted-foreground">
                              lncli listchannels | jq '.channels[] | select(
                              (.local_balance|tonumber) / (.capacity|tonumber) &gt; 0.8 or
                              (.local_balance|tonumber) / (.capacity|tonumber) &lt; 0.2)'
                            </code>
                          </pre>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-muted/50 p-4 rounded-lg">
                  <h4 className="font-medium mb-2">Channel Health Assessment Framework</h4>
                  <p className="text-sm mb-2">
                    A systematic approach to measure channel health and prioritize balancing efforts:
                  </p>
                  <div className="overflow-x-auto">
                    <table className="min-w-full text-sm">
                      <thead>
                        <tr className="border-b border-border">
                          <th className="text-left font-medium p-2">Balance State</th>
                          <th className="text-left font-medium p-2">Percentage Range</th>
                          <th className="text-left font-medium p-2">Health Status</th>
                          <th className="text-left font-medium p-2">Action Needed</th>
                        </tr>
                      </thead>
                      <tbody className="text-xs">
                        <tr className="border-b border-border/50">
                          <td className="p-2">Severely Local-Heavy</td>
                          <td className="p-2">90-100% Local</td>
                          <td className="p-2 text-red-500">Critical</td>
                          <td className="p-2">Urgent rebalancing required</td>
                        </tr>
                        <tr className="border-b border-border/50">
                          <td className="p-2">Local-Heavy</td>
                          <td className="p-2">70-90% Local</td>
                          <td className="p-2 text-amber-500">Concerning</td>
                          <td className="p-2">Rebalance soon or for routing nodes</td>
                        </tr>
                        <tr className="border-b border-border/50">
                          <td className="p-2">Slightly Local-Heavy</td>
                          <td className="p-2">60-70% Local</td>
                          <td className="p-2 text-yellow-500">Monitor</td>
                          <td className="p-2">OK for spenders, not ideal for routing</td>
                        </tr>
                        <tr className="border-b border-border/50">
                          <td className="p-2">Balanced</td>
                          <td className="p-2">40-60% Local</td>
                          <td className="p-2 text-green-500">Optimal</td>
                          <td className="p-2">Maintain, perfect for routing</td>
                        </tr>
                        <tr className="border-b border-border/50">
                          <td className="p-2">Slightly Remote-Heavy</td>
                          <td className="p-2">30-40% Local</td>
                          <td className="p-2 text-yellow-500">Monitor</td>
                          <td className="p-2">OK for receivers, not ideal for routing</td>
                        </tr>
                        <tr className="border-b border-border/50">
                          <td className="p-2">Remote-Heavy</td>
                          <td className="p-2">10-30% Local</td>
                          <td className="p-2 text-amber-500">Concerning</td>
                          <td className="p-2">Rebalance soon for routing nodes</td>
                        </tr>
                        <tr>
                          <td className="p-2">Severely Remote-Heavy</td>
                          <td className="p-2">0-10% Local</td>
                          <td className="p-2 text-red-500">Critical</td>
                          <td className="p-2">Urgent rebalancing required</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </SubSectionContent>

            <SubSectionContent title="Channel Balancing Techniques">
              <div className="space-y-4">
                <p>
                  There are several techniques for rebalancing channels, each with specific use cases, costs, and considerations.
                </p>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                  <Card className="p-5">
                    <h4 className="text-md font-medium mb-3 flex items-center">
                      <RefreshCw className="h-5 w-5 text-primary mr-2" />
                      Circular Rebalancing
                    </h4>
                    <div className="space-y-3 text-sm">
                      <p>
                        The most common technique where you send a payment to yourself through other channels, 
                        effectively moving liquidity within your node's channel network.
                      </p>
                      
                      <div className="p-3 bg-muted/30 rounded-lg text-xs">
                        <h5 className="font-medium mb-1">How It Works</h5>
                        <ul className="list-disc pl-4 space-y-1">
                          <li>Select a local-heavy channel for outbound</li>
                          <li>Select a remote-heavy channel for inbound</li>
                          <li>Route a payment from yourself back to yourself</li>
                          <li>Funds move from one channel to another</li>
                        </ul>
                      </div>
                      
                      <div className="bg-muted p-3 rounded-md">
                        <h5 className="text-xs font-medium mb-1">LND Command Example</h5>
                        <pre className="overflow-x-auto text-[8px]">
                          <code className="text-muted-foreground">
                            # Get channels to rebalance
                            OUTGOING_CHAN=123456:0
                            LAST_HOP=789101:1
                            AMOUNT=1000000
                            
                            # Manual rebalance (simplified for display)
                            lncli sendtoroute --payment_hash=$(openssl rand -hex 32) \
                            --routes=$(lncli buildroute --outgoing_chan_id=$OUTGOING_CHAN \
                            --amt=$AMOUNT --final_cltv_delta=144 \
                            --hops=$LAST_HOP)
                          </code>
                        </pre>
                      </div>
                    </div>
                  </Card>

                  <Card className="p-5">
                    <h4 className="text-md font-medium mb-3 flex items-center">
                      <ArrowRightLeft className="h-5 w-5 text-primary mr-2" />
                      Submarine Swaps
                    </h4>
                    <div className="space-y-3 text-sm">
                      <p>
                        An atomic exchange between on-chain bitcoin and off-chain Lightning funds, using HTLCs 
                        to ensure the swap happens safely and trustlessly.
                      </p>
                      
                      <div className="p-3 bg-muted/30 rounded-lg text-xs">
                        <h5 className="font-medium mb-1">Types of Swaps</h5>
                        <ul className="list-disc pl-4 space-y-1">
                          <li><strong>Loop Out:</strong> Lightning → on-chain BTC</li>
                          <li><strong>Loop In:</strong> On-chain BTC → Lightning</li>
                          <li>Reduces on-chain tx costs vs. closing/reopening</li>
                          <li>Can be done through third-party services</li>
                        </ul>
                      </div>
                      
                      <div className="bg-muted p-3 rounded-md">
                        <h5 className="text-xs font-medium mb-1">Loop Out Example (LND)</h5>
                        <pre className="overflow-x-auto text-[8px]">
                          <code className="text-muted-foreground">
                            # Using Lightning Loop
                            loop out --amt=1000000 \
                            --channel=123456 \
                            --conf_target=3
                          </code>
                        </pre>
                      </div>
                    </div>
                  </Card>

                  <Card className="p-5">
                    <h4 className="text-md font-medium mb-3 flex items-center">
                      <CircleDollarSign className="h-5 w-5 text-primary mr-2" />
                      Paid Services
                    </h4>
                    <div className="space-y-3 text-sm">
                      <p>
                        Several specialized services exist that help node operators acquire inbound liquidity or
                        balance channels for a fee.
                      </p>
                      
                      <div className="p-3 bg-muted/30 rounded-lg text-xs">
                        <h5 className="font-medium mb-1">Service Types</h5>
                        <ul className="list-disc pl-4 space-y-1">
                          <li><strong>Lightning Pool:</strong> Marketplace for channel leases</li>
                          <li><strong>Magma by Amboss:</strong> Liquidity service</li>
                          <li><strong>Voltage Flow:</strong> Automated balancing</li>
                          <li><strong>Liquidity Ads:</strong> Protocol for leasing channels</li>
                          <li><strong>Bitrefill Thor:</strong> Inbound capacity service</li>
                        </ul>
                      </div>
                      
                      <div className="bg-muted p-3 rounded-md">
                        <h5 className="text-xs font-medium mb-1">Pool Example</h5>
                        <pre className="overflow-x-auto text-[8px]">
                          <code className="text-muted-foreground">
                            # Lightning Pool (LND)
                            pool accounts deposit --amt=5000000
                            
                            # Lease a channel
                            pool leases request --amt=2000000 \
                            --rate=1500 --min_node_tier=1
                          </code>
                        </pre>
                      </div>
                    </div>
                  </Card>
                </div>

                <div className="p-4 bg-muted/50 rounded-lg">
                  <h4 className="font-medium mb-3">Practical Rebalancing Workflow</h4>
                  <div className="relative overflow-hidden">
                    <div className="relative z-10 space-y-6">
                      {/* Step 1 */}
                      <div className="flex gap-4">
                        <div className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-primary text-primary-foreground shadow-md">
                          <span className="text-sm">1</span>
                        </div>
                        <div className="pt-1.5 space-y-1">
                          <h3 className="text-sm font-medium">Identify Imbalanced Channels</h3>
                          <p className="text-xs text-muted-foreground">
                            Find channels with severe imbalances (typically &lt;20% or &gt;80% local balance).
                          </p>
                          <div className="mt-1 p-2 bg-background rounded text-[10px]">
                            <code className="text-muted-foreground">
                              lncli listchannels | jq '.channels[] | 
                              (.local_balance|tonumber) as $lb | 
                              (.capacity|tonumber) as $cap | 
                              $lb, $cap, ($lb/$cap*100) | 
                              select(($lb/$cap) &lt; 0.2 or ($lb/$cap) &gt; 0.8)'
                            </code>
                          </div>
                        </div>
                      </div>

                      {/* Step 2 */}
                      <div className="flex gap-4">
                        <div className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-primary text-primary-foreground shadow-md">
                          <span className="text-sm">2</span>
                        </div>
                        <div className="pt-1.5 space-y-1">
                          <h3 className="text-sm font-medium">Find Compatible Channel Pairs</h3>
                          <p className="text-xs text-muted-foreground">
                            Identify a local-heavy channel and a remote-heavy channel that can be paired for rebalancing.
                          </p>
                          <div className="flex items-center mt-1">
                            <div className="p-2 bg-background rounded text-[10px] flex-grow">
                              <code className="text-muted-foreground">
                                # Identify local-heavy outbound channel (for source)
                                OUTBOUND_CHAN="123456:0"
                                
                                # Identify remote-heavy inbound channel (for destination)
                                INBOUND_CHAN="789101:0"
                              </code>
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* Step 3 */}
                      <div className="flex gap-4">
                        <div className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-primary text-primary-foreground shadow-md">
                          <span className="text-sm">3</span>
                        </div>
                        <div className="pt-1.5 space-y-1">
                          <h3 className="text-sm font-medium">Calculate Rebalance Amount</h3>
                          <p className="text-xs text-muted-foreground">
                            Determine optimal amount to move based on current balances and target balance ratio.
                          </p>
                          <div className="mt-1 p-2 bg-background rounded text-[10px]">
                            <code className="text-muted-foreground">
                              # Example: move amount to reach 50/50 balance in both channels
                              # For a local-heavy channel with 800K local, 200K remote, 1M capacity:
                              # Target is 500K local, so move 300K
                              
                              AMOUNT=300000
                            </code>
                          </div>
                        </div>
                      </div>

                      {/* Step 4 */}
                      <div className="flex gap-4">
                        <div className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-primary text-primary-foreground shadow-md">
                          <span className="text-sm">4</span>
                        </div>
                        <div className="pt-1.5 space-y-1">
                          <h3 className="text-sm font-medium">Execute Rebalance</h3>
                          <p className="text-xs text-muted-foreground">
                            Use built-in tools or specialized rebalancing software to execute the operation.
                          </p>
                          <div className="mt-1 p-2 bg-background rounded text-[10px]">
                            <code className="text-muted-foreground">
                              # Using Balance of Satoshis (bos)
                              bos rebalance --in-channel $INBOUND_CHAN \
                              --out-channel $OUTBOUND_CHAN \
                              --amount $AMOUNT
                              
                              # Alternative: direct LND approach with custom routing
                              lncli sendtoroute --payment_hash=$(openssl rand -hex 32) \
                              --routes=$(lncli buildroute --outgoing_chan_id=$OUTBOUND_CHAN \
                              --amt=$AMOUNT --final_cltv_delta=144 \
                              --hops=$INBOUND_CHAN)
                            </code>
                          </div>
                        </div>
                      </div>

                      {/* Step 5 */}
                      <div className="flex gap-4">
                        <div className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-primary text-primary-foreground shadow-md">
                          <span className="text-sm">5</span>
                        </div>
                        <div className="pt-1.5 space-y-1">
                          <h3 className="text-sm font-medium">Verify and Document</h3>
                          <p className="text-xs text-muted-foreground">
                            Confirm successful rebalance and document the process for future optimization.
                          </p>
                          <div className="mt-1 p-2 bg-background rounded text-[10px]">
                            <code className="text-muted-foreground">
                              # Verify new channel balances
                              lncli listchannels | jq '.channels[] | 
                              select(.channel_point=="$OUTBOUND_CHAN" or 
                                    .channel_point=="$INBOUND_CHAN")'
                              
                              # Calculate fees paid
                              lncli listpayments | jq '.payments[-1].fee'
                            </code>
                          </div>
                        </div>
                      </div>
                    </div>
                    
                    {/* Background line */}
                    <div className="absolute top-0 bottom-0 left-4 w-px bg-border" style={{zIndex: 5}}></div>
                  </div>
                </div>
              </div>
            </SubSectionContent>

            <SubSectionContent title="Advanced Balancing Tools">
              <div className="space-y-4">
                <p>
                  Several specialized tools have been developed to make channel balancing easier, more efficient, and more cost-effective.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="bg-muted p-6 rounded-lg">
                    <h4 className="font-medium mb-4 flex items-center">
                      <Zap className="h-5 w-5 text-primary mr-2" />
                      Rebalancing Tools
                    </h4>
                    <div className="space-y-4">
                      <div className="p-3 bg-background rounded">
                        <h5 className="font-medium text-sm">Balance of Satoshis (BOS)</h5>
                        <p className="text-xs mt-1 text-muted-foreground">
                          Feature-rich command-line utility with advanced rebalancing capabilities, fee optimization, and 
                          automated peer selection.
                        </p>
                        <pre className="overflow-x-auto text-[9px] mt-2">
                          <code className="text-muted-foreground">
                            # Balance two channels
                            bos rebalance --in-channel [SHORT_CHAN_ID] \
                            --out-channel [SHORT_CHAN_ID] --amount 1000000
                            
                            # Balanced target node
                            bos rebalance --target [NODE_ID] \
                            --amount 500000 --max-fee 100
                          </code>
                        </pre>
                      </div>
                      
                      <div className="p-3 bg-background rounded">
                        <h5 className="font-medium text-sm">Charge-LND</h5>
                        <p className="text-xs mt-1 text-muted-foreground">
                          Automated fee management and channel rebalancing tool that responds to channel states.
                        </p>
                        <pre className="overflow-x-auto text-[9px] mt-2">
                          <code className="text-muted-foreground">
                            # Add to charge-lnd config.json rebalancer section:
                            # (simplified for display)
                            
                            rebalancer.enabled = true
                            rebalancer.minOutboundLiquidityRatio = 0.1
                            rebalancer.minInboundLiquidityRatio = 0.1
                            rebalancer.feeLimit = 100
                          </code>
                        </pre>
                      </div>
                    </div>
                  </div>
                  
                  <div className="bg-muted p-6 rounded-lg">
                    <h4 className="font-medium mb-4 flex items-center">
                      <ArrowLeftRight className="h-5 w-5 text-primary mr-2" />
                      Visual & Web-Based Tools
                    </h4>
                    <div className="space-y-4">
                      <div className="p-3 bg-background rounded">
                        <h5 className="font-medium text-sm">RTL (Ride The Lightning)</h5>
                        <p className="text-xs mt-1 text-muted-foreground">
                          Web interface with visual channel balancing features, offering graphical representation of channel states.
                        </p>
                        <div className="text-xs mt-2 p-2 bg-muted/30 rounded">
                          RTL provides a "Balancing" tab in the Channels section where you can visually select source and target 
                          channels, specify amounts, and execute circular rebalancing operations through a graphical interface.
                        </div>
                      </div>
                      
                      <div className="p-3 bg-background rounded">
                        <h5 className="font-medium text-sm">ThunderHub</h5>
                        <p className="text-xs mt-1 text-muted-foreground">
                          Node management dashboard with visual rebalancing tools and channel health metrics.
                        </p>
                        <div className="text-xs mt-2 p-2 bg-muted/30 rounded">
                          ThunderHub offers a rebalancing tool where you can find optimal routes, visualize channel liquidity, 
                          and execute rebalances with fee optimization. The visual indicators help identify imbalanced channels 
                          at a glance.
                        </div>
                      </div>
                      
                      <div className="p-3 bg-background rounded">
                        <h5 className="font-medium text-sm">Lightning Terminal (LiT)</h5>
                        <p className="text-xs mt-1 text-muted-foreground">
                          Terminal interface by Lightning Labs with Loop, Pool, and Faraday for liquidity management.
                        </p>
                        <div className="text-xs mt-2 p-2 bg-muted/30 rounded">
                          Lightning Terminal combines Loop (for submarine swaps), Pool (for liquidity marketplace), and Faraday 
                          (for channel analysis) into a unified interface for comprehensive liquidity management.
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-muted/50 p-4 rounded-lg">
                  <h4 className="font-medium mb-3">Balancing Strategy Comparison</h4>
                  <p className="text-sm mb-3">
                    Different tools and approaches have different trade-offs:
                  </p>
                  <table className="min-w-full text-sm">
                    <thead>
                      <tr className="border-b border-border">
                        <th className="text-left font-medium p-2">Strategy</th>
                        <th className="text-left font-medium p-2">Cost Efficiency</th>
                        <th className="text-left font-medium p-2">Complexity</th>
                        <th className="text-left font-medium p-2">Best For</th>
                      </tr>
                    </thead>
                    <tbody className="text-xs">
                      <tr className="border-b border-border/50">
                        <td className="p-2">Manual Rebalancing (CLI)</td>
                        <td className="p-2">High (full control)</td>
                        <td className="p-2">High (technical)</td>
                        <td className="p-2">Experienced operators, fine-tuning</td>
                      </tr>
                      <tr className="border-b border-border/50">
                        <td className="p-2">BOS</td>
                        <td className="p-2">High (customizable)</td>
                        <td className="p-2">Medium</td>
                        <td className="p-2">Most node operators, routing nodes</td>
                      </tr>
                      <tr className="border-b border-border/50">
                        <td className="p-2">Visual Tools (RTL/ThunderHub)</td>
                        <td className="p-2">Medium</td>
                        <td className="p-2">Low</td>
                        <td className="p-2">New operators, occasional rebalancing</td>
                      </tr>
                      <tr className="border-b border-border/50">
                        <td className="p-2">Automated (charge-lnd)</td>
                        <td className="p-2">Medium-High</td>
                        <td className="p-2">Low (after setup)</td>
                        <td className="p-2">Busy operators, consistent management</td>
                      </tr>
                      <tr>
                        <td className="p-2">Paid Services (Loop, Pool)</td>
                        <td className="p-2">Low (premium pricing)</td>
                        <td className="p-2">Low</td>
                        <td className="p-2">Merchants, new nodes needing liquidity</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </SubSectionContent>

            <SubSectionContent title="Balancing Economics and Best Practices">
              <div className="space-y-4">
                <p>
                  Channel balancing is both a technical operation and an economic decision. Understanding the costs
                  and benefits is crucial for optimizing your Lightning node's efficiency.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="bg-muted p-6 rounded-lg">
                    <h4 className="font-medium mb-4 flex items-center">
                      <Scale className="h-5 w-5 text-primary mr-2" />
                      Economic Considerations
                    </h4>
                    <ul className="list-disc pl-4 space-y-2 text-sm">
                      <li><strong>Rebalancing Costs:</strong> Fees paid when executing rebalances</li>
                      <li><strong>Opportunity Cost:</strong> Capital locked in channels vs. other uses</li>
                      <li><strong>Expected Revenue:</strong> Potential routing fees from balanced channels</li>
                      <li><strong>Time Value:</strong> Cost of waiting for natural rebalancing</li>
                      <li><strong>Path Availability:</strong> Cheaper paths reduce rebalancing costs</li>
                      <li><strong>Cost of Capital:</strong> Interest or opportunity cost of funds</li>
                    </ul>
                  </div>
                  
                  <div className="bg-muted p-6 rounded-lg">
                    <h4 className="font-medium mb-4">Cost Calculation Example</h4>
                    <div className="p-3 bg-muted/30 rounded-lg text-xs">
                      <p className="mb-2">For a 1,000,000 sat rebalance operation:</p>
                      <div className="space-y-2">
                        <div className="flex items-center justify-between">
                          <span>Rebalance amount:</span>
                          <span className="font-mono">1,000,000 sats</span>
                        </div>
                        <div className="flex items-center justify-between">
                          <span>Rebalance fee (0.1%):</span>
                          <span className="font-mono">1,000 sats</span>
                        </div>
                        <div className="flex items-center justify-between">
                          <span>Monthly routing revenue (0.05%):</span>
                          <span className="font-mono">500 sats/month</span>
                        </div>
                        <div className="border-t border-border pt-2">
                          <p>Break-even: ~2 months of routing this amount</p>
                          <p>If rebalance fee &gt; expected revenue, may not be economical</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-muted/50 p-4 rounded-lg">
                  <h4 className="font-medium mb-2">Channel Balancing Best Practices</h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <h5 className="text-sm font-medium">Strategic Approach</h5>
                      <ul className="list-disc pl-4 text-xs space-y-1 mt-2">
                        <li><strong>Rebalance Optimal Amounts:</strong> Don't aim for perfect 50/50 in all channels</li>
                        <li><strong>Target Key Routes:</strong> Prioritize channels with high routing potential</li>
                        <li><strong>Rebalance During Low-Fee Periods:</strong> Monitor network fee conditions</li>
                        <li><strong>Maintain Reserves:</strong> Keep some channels ready for unexpected payments</li>
                        <li><strong>Document Patterns:</strong> Track which channels tend to become imbalanced</li>
                        <li><strong>Coordinate with Peers:</strong> Discuss balancing needs with channel partners</li>
                      </ul>
                    </div>
                    <div>
                      <h5 className="text-sm font-medium">Technical Tips</h5>
                      <ul className="list-disc pl-4 text-xs space-y-1 mt-2">
                        <li><strong>Set Fee Limits:</strong> Always specify maximum fees for rebalancing operations</li>
                        <li><strong>Batch Operations:</strong> Rebalance multiple channels in one session</li>
                        <li><strong>Use Fee Rate Anchoring:</strong> Pay proportionally lower fees for larger rebalances</li>
                        <li><strong>Prefer Circular Rebalancing:</strong> When possible, avoid on-chain fees</li>
                        <li><strong>Consider Multiple Paths:</strong> Try various routes to find cheaper options</li>
                        <li><strong>Automate Routine Balancing:</strong> Set up scripts for regular maintenance</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="p-4 bg-background rounded-lg border border-border">
                  <h4 className="font-medium mb-3">Sample Rebalancing Policy</h4>
                  <div className="text-sm">
                    <p className="mb-2">A balanced approach for routing node operators:</p>
                    <ol className="list-decimal pl-5 space-y-1 text-sm">
                      <li>Monitor channel balance ratios weekly, focusing on channels over 1M sats in capacity</li>
                      <li>Identify channels with local balance &lt;20% or &gt;80% of total capacity</li>
                      <li>For routing-critical channels, rebalance when local balance &lt;30% or &gt;70%</li>
                      <li>Set fee limit of 0.1% for rebalancing operations</li>
                      <li>Perform rebalancing during network low-fee periods (typically weekends)</li>
                      <li>Document rebalance operations and costs to analyze return on investment</li>
                      <li>For persistent imbalance issues, consider channel restructuring</li>
                      <li>Maintain at least 3 well-balanced channels at all times for routing redundancy</li>
                    </ol>
                  </div>
                </div>
              </div>
            </SubSectionContent>

            <div className="bg-muted/50 p-6 rounded-lg">
              <h3 className="font-medium mb-4">Satoshi's Perspective: Liquidity as a Network Resource</h3>
              
              <SatoshiQuote quote="Channel balancing is the art of distributed liquidity management. It's a crucial evolution of Bitcoin's fixed UTXO model - a dynamic system where value isn't just transferred, but flows like water seeking equilibrium across the network.">
                <p className="text-sm">
                  Channel capacity management represents the economic innovation at the heart of the Lightning Network. It transforms static bitcoin holdings into a dynamic, flowing system of liquidity that constantly rebalances according to market forces. Where Bitcoin's blockchain gave us a permanent record of ownership, Lightning gives us an efficient marketplace of temporary liquidity allocations.
                </p>
                <p className="text-sm mt-2">
                  As you master channel balancing, remember that you're not just optimizing your own node—you're contributing to the efficiency of the entire network. Each well-balanced channel improves payment reliability and reduces costs for everyone. This collective optimization embodies the decentralized ethos that Bitcoin was founded upon—individual actions creating systemic benefits without central coordination.
                </p>
              </SatoshiQuote>
            </div>
          </div>
        </div>

        <div className="mt-6 border-t border-border/40 pt-4">
          <VerifyCheckbox
            moduleId="lightning-channel-management"
            verificationId="channel-balancing"
            label="I understand how to balance Lightning channels and manage liquidity effectively"
          />
        </div>
      </div>
      </ModuleContent>
    </ModuleLayout>
  );
}