import React from 'react';
import { ModuleContent } from '@/components/learn/shared/components/module-content';
import { Link } from 'lucide-react';
import VerifyCheckbox from '@/components/learn/shared/components/verify-checkbox';
import { Card } from '@/components/ui/card';
import { SubSectionContent } from '@/components/learn/shared/components/sub-section-content';
import SatoshiQuote from '@/components/learn/shared/components/satoshi-quote';

export default function ChannelCapacity() {
  console.log('Rendering ChannelCapacity component');

  // Add a debug message to the window
  React.useEffect(() => {
    console.log('ChannelCapacity component mounted');

    // Add a debug message to the window
    const debugElement = document.createElement('div');
    debugElement.style.position = 'fixed';
    debugElement.style.top = '5px';
    debugElement.style.right = '5px';
    debugElement.style.background = 'green';
    debugElement.style.color = 'white';
    debugElement.style.padding = '5px';
    debugElement.style.zIndex = '9999';
    debugElement.textContent = 'Channel Capacity Component Loaded';
    document.body.appendChild(debugElement);

    return () => {
      document.body.removeChild(debugElement);
    };
  }, []);
  return (
    <ModuleContent
      moduleId="lightning-channel-management"
      moduleTitle="Channel Capacity"
      moduleDescription="Understanding and optimizing Lightning channel capacity"
      difficulty="Intermediate"
      icon={Link}
    >
      <div className="space-y-8">
        {/* A Note from Satoshi */}
        <div className="bg-muted/50 p-6 rounded-lg border border-border/50">
          <h2 className="text-xl font-bold mb-4">A Note from Satoshi</h2>

          <div className="prose dark:prose-invert max-w-none">
            <p>
              When I designed Bitcoin, I was constrained by the fundamental trade-offs between
              decentralization, security, and scalability. The block size limit was a necessary
              design choice to maintain decentralization, but it came at the cost of throughput. The
              Lightning Network elegantly addresses this limitation through its channel-based
              architecture.
            </p>

            <p>
              Channel capacity is a fascinating economic concept within the Lightning Network.
              Unlike Bitcoin's on-chain transactions, where the entire UTXO set determines what's
              possible, Lightning's capacity is localized to individual channels. This creates a
              complex economic system where liquidity allocation becomes a critical factor in the
              network's overall efficiency.
            </p>

            <p>
              Understanding capacity management is essential for operating successful Lightning
              nodes. It represents a return to the fundamental principles of banking and liquidity
              management, but in a decentralized, permission-less, and trust-minimized framework.
              Let me show you how Lightning channel capacity works and how to optimize it for your
              specific needs.
            </p>
          </div>
        </div>

        {/* Main Content */}
        <div className="bg-card p-6 rounded-lg border border-border">
          <h2 className="text-xl font-bold mb-4">Understanding Channel Capacity</h2>

          <div className="space-y-6">
            <div className="prose dark:prose-invert max-w-none">
              <h3>What is Channel Capacity?</h3>
              <p>
                Channel capacity refers to the total amount of bitcoin that can be transferred
                through a Lightning channel. It's determined by the initial funding amount when the
                channel is opened and represents the maximum amount that can move within that
                channel at any point in time.
              </p>

              <p>
                The capacity of a Lightning channel is backed by actual bitcoin in a 2-of-2
                multisignature address on the Bitcoin blockchain. This on-chain UTXO serves as the
                "anchor" or "settlement layer" for the Lightning channel, allowing for secure
                off-chain transactions to occur between the channel participants.
              </p>
            </div>

            <SubSectionContent title="The Channel State and Capacity Balance">
              <div className="space-y-4">
                <p>
                  When thinking about Lightning channel capacity, it's essential to understand that
                  a channel has two sides, each with its own balance. These balances determine what
                  each party can do within the channel.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="bg-muted p-6 rounded-lg">
                    <h4 className="font-medium mb-4">Types of Capacity</h4>
                    <ul className="list-disc pl-4 space-y-2">
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

                  <div className="bg-muted p-6 rounded-lg">
                    <h4 className="font-medium mb-4">Channel Balance States</h4>
                    <ul className="list-disc pl-4 space-y-2">
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
                </div>

                <div className="bg-muted/50 p-4 rounded-lg">
                  <h5 className="text-sm font-medium mb-2">Technical Example: Channel State</h5>
                  <p className="text-sm mb-2">
                    A 1,000,000 satoshi channel might have the following state:
                  </p>
                  <div className="overflow-x-auto">
                    <table className="min-w-full text-sm">
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
            </SubSectionContent>

            <SubSectionContent title="How Channel Capacity Changes">
              <div className="space-y-4">
                <p>
                  Unlike traditional payment systems, Lightning Network channel capacity is dynamic.
                  It shifts as payments flow through the channel, but always maintains the same
                  total sum (minus any routing fees).
                </p>

                <div className="bg-muted p-6 rounded-lg">
                  <h4 className="font-medium mb-4">Events That Change Channel Balance</h4>
                  <div className="space-y-4">
                    <div>
                      <h5 className="font-medium">1. Sending a Payment</h5>
                      <p className="text-sm mt-1">
                        When you send a payment, your local balance decreases and remote balance
                        increases by that amount.
                      </p>
                      <div className="mt-2 p-3 bg-background rounded text-sm">
                        Before: Local (700K) / Remote (300K)
                        <br />
                        Send 100K payment
                        <br />
                        After: Local (600K) / Remote (400K)
                      </div>
                    </div>

                    <div>
                      <h5 className="font-medium">2. Receiving a Payment</h5>
                      <p className="text-sm mt-1">
                        When you receive a payment, your local balance increases and remote balance
                        decreases.
                      </p>
                      <div className="mt-2 p-3 bg-background rounded text-sm">
                        Before: Local (600K) / Remote (400K)
                        <br />
                        Receive 200K payment
                        <br />
                        After: Local (800K) / Remote (200K)
                      </div>
                    </div>

                    <div>
                      <h5 className="font-medium">3. Routing a Payment</h5>
                      <p className="text-sm mt-1">
                        When routing, one channel's local balance decreases while another's
                        increases (minus fees).
                      </p>
                      <div className="mt-2 p-3 bg-background rounded text-sm">
                        Channel A: Local (500K) / Remote (500K)
                        <br />
                        Channel B: Local (500K) / Remote (500K)
                        <br />
                        Route 100K payment from A to B<br />
                        After: A: Local (400K) / Remote (600K), B: Local (600K) / Remote (400K)
                      </div>
                    </div>
                  </div>
                </div>

                <div className="prose dark:prose-invert max-w-none">
                  <p>
                    <strong>Important:</strong> The total channel capacity cannot be changed without
                    closing and reopening the channel. This is because the capacity is determined by
                    the on-chain funding transaction, which is locked in a 2-of-2 multisig address.
                  </p>
                </div>
              </div>
            </SubSectionContent>

            <SubSectionContent title="Strategic Channel Capacity Planning">
              <div className="space-y-4">
                <p>
                  Deciding on channel capacity isn't just a technical decision; it's an economic one
                  that directly impacts your node's effectiveness and profitability.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="bg-muted p-6 rounded-lg">
                    <h4 className="font-medium mb-4">Capacity Planning Factors</h4>
                    <ul className="list-disc pl-4 space-y-2">
                      <li>
                        <strong>Payment Patterns:</strong> Frequency and size of payments you'll
                        make or receive
                      </li>
                      <li>
                        <strong>Routing Ambitions:</strong> Higher capacity needed for routing
                        larger payments
                      </li>
                      <li>
                        <strong>Capital Efficiency:</strong> Balance between capacity and locked
                        capital
                      </li>
                      <li>
                        <strong>Network Position:</strong> Strategic connections may require larger
                        channels
                      </li>
                      <li>
                        <strong>On-chain Fees:</strong> Larger channels are more cost-efficient
                        relative to opening fees
                      </li>
                    </ul>
                  </div>

                  <div className="bg-muted p-6 rounded-lg">
                    <h4 className="font-medium mb-4">Channel Size Considerations</h4>
                    <div className="space-y-4">
                      <div className="flex items-center justify-between p-3 bg-background rounded">
                        <span>
                          <strong>Small Channels</strong>
                          <br />
                          <span className="text-xs">Personal use, testing</span>
                        </span>
                        <span className="font-mono">100K - 500K sats</span>
                      </div>
                      <div className="flex items-center justify-between p-3 bg-background rounded">
                        <span>
                          <strong>Medium Channels</strong>
                          <br />
                          <span className="text-xs">Active users, small routing</span>
                        </span>
                        <span className="font-mono">500K - 2M sats</span>
                      </div>
                      <div className="flex items-center justify-between p-3 bg-background rounded">
                        <span>
                          <strong>Large Channels</strong>
                          <br />
                          <span className="text-xs">Major routing, businesses</span>
                        </span>
                        <span className="font-mono">2M+ sats</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-muted/50 p-4 rounded-lg">
                  <h4 className="font-medium mb-3">The Economics of Channel Size</h4>
                  <p className="text-sm mb-3">
                    Channel size decisions should factor in the economics of on-chain fees and
                    capital efficiency:
                  </p>
                  <table className="min-w-full text-sm">
                    <thead>
                      <tr className="border-b border-border">
                        <th className="text-left font-medium p-2">Channel Size</th>
                        <th className="text-left font-medium p-2">On-chain Fee Efficiency</th>
                        <th className="text-left font-medium p-2">Capital Commitment</th>
                        <th className="text-left font-medium p-2">Use Case</th>
                      </tr>
                    </thead>
                    <tbody className="text-xs">
                      <tr className="border-b border-border/50">
                        <td className="p-2">100K sats</td>
                        <td className="p-2">Low - High relative cost</td>
                        <td className="p-2">Low commitment</td>
                        <td className="p-2">Testing, learning, small payments</td>
                      </tr>
                      <tr className="border-b border-border/50">
                        <td className="p-2">1M sats</td>
                        <td className="p-2">Medium - Reasonable relative cost</td>
                        <td className="p-2">Moderate commitment</td>
                        <td className="p-2">Regular users, small routing nodes</td>
                      </tr>
                      <tr className="border-b border-border/50">
                        <td className="p-2">5M sats</td>
                        <td className="p-2">High - Low relative cost</td>
                        <td className="p-2">Significant commitment</td>
                        <td className="p-2">Active routing nodes, merchants</td>
                      </tr>
                      <tr>
                        <td className="p-2">10M+ sats</td>
                        <td className="p-2">Very high - Minimal relative cost</td>
                        <td className="p-2">Major commitment</td>
                        <td className="p-2">Professional routing nodes, large businesses</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </SubSectionContent>

            <div className="prose dark:prose-invert max-w-none">
              <h3>Implementation-Specific Channel Capacity Management</h3>
              <p>
                Different Lightning implementations provide various tools for monitoring and
                managing channel capacity. Let's look at how to check and manage capacity in three
                major implementations:
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              <Card className="p-5">
                <h4 className="text-md font-medium mb-3">LND</h4>
                <div className="space-y-3">
                  <div>
                    <h5 className="text-sm font-medium">List all channel capacities</h5>
                    <div className="mt-1 bg-muted p-3 rounded-md">
                      <pre className="overflow-x-auto text-[9px]">
                        <code className="text-muted-foreground">lncli listchannels</code>
                      </pre>
                    </div>
                  </div>
                  <div>
                    <h5 className="text-sm font-medium">View channel balance summary</h5>
                    <div className="mt-1 bg-muted p-3 rounded-md">
                      <pre className="overflow-x-auto text-[9px]">
                        <code className="text-muted-foreground">lncli channelbalance</code>
                      </pre>
                    </div>
                  </div>
                  <div>
                    <h5 className="text-sm font-medium">Get detailed channel info</h5>
                    <div className="mt-1 bg-muted p-3 rounded-md">
                      <pre className="overflow-x-auto text-[9px]">
                        <code className="text-muted-foreground">
                          lncli getchaninfo [CHANNEL_ID]
                        </code>
                      </pre>
                    </div>
                  </div>
                </div>
              </Card>

              <Card className="p-5">
                <h4 className="text-md font-medium mb-3">Core Lightning (CLN)</h4>
                <div className="space-y-3">
                  <div>
                    <h5 className="text-sm font-medium">List channels with capacity</h5>
                    <div className="mt-1 bg-muted p-3 rounded-md">
                      <pre className="overflow-x-auto text-[9px]">
                        <code className="text-muted-foreground">lightning-cli listfunds</code>
                      </pre>
                    </div>
                  </div>
                  <div>
                    <h5 className="text-sm font-medium">Get detailed peer info</h5>
                    <div className="mt-1 bg-muted p-3 rounded-md">
                      <pre className="overflow-x-auto text-[9px]">
                        <code className="text-muted-foreground">lightning-cli listpeers</code>
                      </pre>
                    </div>
                  </div>
                  <div>
                    <h5 className="text-sm font-medium">View channel details</h5>
                    <div className="mt-1 bg-muted p-3 rounded-md">
                      <pre className="overflow-x-auto text-[9px]">
                        <code className="text-muted-foreground">
                          lightning-cli listchannels [SHORT_CHANNEL_ID]
                        </code>
                      </pre>
                    </div>
                  </div>
                </div>
              </Card>

              <Card className="p-5">
                <h4 className="text-md font-medium mb-3">Eclair</h4>
                <div className="space-y-3">
                  <div>
                    <h5 className="text-sm font-medium">List all channels</h5>
                    <div className="mt-1 bg-muted p-3 rounded-md">
                      <pre className="overflow-x-auto text-[9px]">
                        <code className="text-muted-foreground">eclair-cli channels</code>
                      </pre>
                    </div>
                  </div>
                  <div>
                    <h5 className="text-sm font-medium">View channel details</h5>
                    <div className="mt-1 bg-muted p-3 rounded-md">
                      <pre className="overflow-x-auto text-[9px]">
                        <code className="text-muted-foreground">
                          eclair-cli channelinfo [CHANNEL_ID]
                        </code>
                      </pre>
                    </div>
                  </div>
                  <div>
                    <h5 className="text-sm font-medium">Get node information</h5>
                    <div className="mt-1 bg-muted p-3 rounded-md">
                      <pre className="overflow-x-auto text-[9px]">
                        <code className="text-muted-foreground">eclair-cli nodeinfo</code>
                      </pre>
                    </div>
                  </div>
                </div>
              </Card>
            </div>

            <SubSectionContent title="Advanced Capacity Management Techniques">
              <div className="space-y-4">
                <p>
                  Beyond basic channel opening, there are several advanced techniques for managing
                  channel capacity:
                </p>

                <div className="bg-muted p-6 rounded-lg">
                  <h4 className="font-medium mb-4">Capacity Optimization Techniques</h4>
                  <div className="space-y-5">
                    <div>
                      <h5 className="font-medium">1. Circular Rebalancing</h5>
                      <p className="text-sm mt-1">
                        Send payments to yourself through multiple channels to rebalance capacity
                        without closing channels. This technique shifts capacity from outbound-heavy
                        channels to inbound-heavy ones.
                      </p>
                      <div className="mt-2 p-3 bg-background rounded text-xs">
                        <pre className="overflow-x-auto">
                          <code className="text-muted-foreground">
                            # Example in LND lncli sendtoroute --payment_hash=[HASH]
                            --routes=[ENCODED_ROUTE] # Using tools like Lightning Terminal (LiT)
                            lit-cli loop out --amt=1000000 --dest=[YOUR_PUBKEY]
                          </code>
                        </pre>
                      </div>
                    </div>

                    <div>
                      <h5 className="font-medium">2. Dual-Funded Channels</h5>
                      <p className="text-sm mt-1">
                        Create channels where both parties contribute funds, providing immediate
                        bidirectional capacity. This is ideal for establishing balanced routing
                        channels.
                      </p>
                      <div className="mt-2 p-3 bg-background rounded text-xs">
                        <pre className="overflow-x-auto">
                          <code className="text-muted-foreground">
                            # Core Lightning dual-funding example lightning-cli fundchannel_start
                            [NODE_ID] [AMOUNT] [FEERATE] # Partner runs accept command # Then
                            complete with lightning-cli fundchannel_complete [NODE_ID] [TX_ID]
                          </code>
                        </pre>
                      </div>
                    </div>

                    <div>
                      <h5 className="font-medium">3. Submarine Swaps</h5>
                      <p className="text-sm mt-1">
                        Exchange on-chain funds for off-chain Lightning funds or vice versa to
                        adjust capacity without closing channels.
                      </p>
                      <div className="mt-2 p-3 bg-background rounded text-xs">
                        <pre className="overflow-x-auto">
                          <code className="text-muted-foreground">
                            # Using Loop service with LND loop out --amt=500000 --conf_target=6 # Or
                            Loop in loop in --amt=1000000 --conf_target=6
                          </code>
                        </pre>
                      </div>
                    </div>

                    <div>
                      <h5 className="font-medium">4. Channel Splicing</h5>
                      <p className="text-sm mt-1">
                        Add or remove funds from an existing channel without closing it. This
                        emerging feature allows dynamic capacity adjustment.
                      </p>
                      <div className="mt-2 p-3 bg-background rounded text-xs">
                        <pre className="overflow-x-auto">
                          <code className="text-muted-foreground">
                            # Note: Splicing is still in development for most implementations #
                            Example format for future implementation lncli splice [CHANNEL_POINT]
                            add [AMOUNT] # Or to remove funds lncli splice [CHANNEL_POINT] remove
                            [AMOUNT] [ADDRESS]
                          </code>
                        </pre>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-muted/50 p-4 rounded-lg">
                  <h4 className="font-medium mb-2">Capacity Trade-offs</h4>
                  <div className="space-y-3">
                    <p className="text-sm">
                      Every capacity decision comes with trade-offs that node operators must
                      consider:
                    </p>
                    <table className="min-w-full text-sm">
                      <thead>
                        <tr className="border-b border-border">
                          <th className="text-left font-medium p-2">Strategy</th>
                          <th className="text-left font-medium p-2">Advantages</th>
                          <th className="text-left font-medium p-2">Disadvantages</th>
                        </tr>
                      </thead>
                      <tbody className="text-xs">
                        <tr className="border-b border-border/50">
                          <td className="p-2">Many small channels</td>
                          <td className="p-2">
                            More network connections, redundancy, less risk per channel
                          </td>
                          <td className="p-2">
                            Higher total on-chain fees, fragmented liquidity, routing limitations
                          </td>
                        </tr>
                        <tr className="border-b border-border/50">
                          <td className="p-2">Few large channels</td>
                          <td className="p-2">
                            Lower relative opening costs, can route larger payments
                          </td>
                          <td className="p-2">Capital concentration risk, less path diversity</td>
                        </tr>
                        <tr className="border-b border-border/50">
                          <td className="p-2">Unbalanced channels</td>
                          <td className="p-2">
                            Optimized for specific payment flows, good for specialized use
                          </td>
                          <td className="p-2">
                            Limited bidirectional payment capability, potential bottlenecks
                          </td>
                        </tr>
                        <tr>
                          <td className="p-2">Balanced channels</td>
                          <td className="p-2">Good for routing in both directions, versatile</td>
                          <td className="p-2">May not be optimal for specific payment patterns</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </SubSectionContent>

            <SubSectionContent title="Monitoring and Optimizing Channel Capacity">
              <div className="space-y-4">
                <p>
                  Successful Lightning node operation requires ongoing monitoring and optimization
                  of your channel capacity.
                </p>

                <div className="bg-muted p-6 rounded-lg">
                  <h4 className="font-medium mb-4">Capacity Monitoring Tools</h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <h5 className="font-medium text-sm">Node Dashboards</h5>
                      <ul className="list-disc pl-4 mt-2 text-sm space-y-1">
                        <li>
                          <strong>RTL (Ride The Lightning):</strong> Visual channel capacity
                          management
                        </li>
                        <li>
                          <strong>ThunderHub:</strong> Detailed channel statistics and balance view
                        </li>
                        <li>
                          <strong>Lightning Terminal (LiT):</strong> Visual rebalancing tools
                        </li>
                      </ul>
                    </div>
                    <div>
                      <h5 className="font-medium text-sm">Analysis Tools</h5>
                      <ul className="list-disc pl-4 mt-2 text-sm space-y-1">
                        <li>
                          <strong>Balance of Satoshis (BOS):</strong> CLI tools for advanced
                          capacity analysis
                        </li>
                        <li>
                          <strong>LNDg:</strong> Channel management and metrics
                        </li>
                        <li>
                          <strong>Charge-lnd:</strong> Automated fee management based on channel
                          balance
                        </li>
                      </ul>
                    </div>
                  </div>

                  <div className="mt-4">
                    <h5 className="font-medium text-sm">Channel Health Script</h5>
                    <p className="text-xs mt-1 mb-2">
                      A simple bash script to analyze channel capacity distribution:
                    </p>
                    <div className="bg-background p-3 rounded">
                      <pre className="overflow-x-auto text-[10px]">
                        <code className="text-muted-foreground">
                          {`#!/bin/bash
# Channel capacity health check script

echo "=== Channel Capacity Distribution ==="
echo "Running channel analysis..."

# Get total capacity, local balance, and remote balance
TOTAL_LOCAL=\`lncli channelbalance | jq -r '.local_balance.sat'\`
TOTAL_REMOTE=\`lncli channelbalance | jq -r '.remote_balance.sat'\`
TOTAL_CAPACITY=$((TOTAL_LOCAL + TOTAL_REMOTE))

# Calculate percentages
LOCAL_PERCENT=$((TOTAL_LOCAL * 100 / TOTAL_CAPACITY))
REMOTE_PERCENT=$((TOTAL_REMOTE * 100 / TOTAL_CAPACITY))

echo "Total Capacity: $TOTAL_CAPACITY sats"
echo "Local Balance (Outbound): $TOTAL_LOCAL sats ($LOCAL_PERCENT%)"
echo "Remote Balance (Inbound): $TOTAL_REMOTE sats ($REMOTE_PERCENT%)"

# Check for imbalanced channels
echo -e "\n=== Imbalanced Channels ==="
lncli listchannels | jq -r '.channels[] | 
  select(.active==true) | 
  {
    peer: .remote_pubkey, 
    capacity: .capacity, 
    local_balance: .local_balance, 
    remote_balance: .remote_balance,
    local_percent: (.local_balance | tonumber) * 100 / (.capacity | tonumber),
    remote_percent: (.remote_balance | tonumber) * 100 / (.capacity | tonumber)
  } | 
  select(.local_percent < 20 or .local_percent > 80) | 
  "Channel with (.peer): (.capacity) sats - Local: (.local_percent | floor)%, Remote: (.remote_percent | floor)%"'`}
                        </code>
                      </pre>
                    </div>
                  </div>
                </div>

                <div className="prose dark:prose-invert max-w-none">
                  <h4>Best Practices for Capacity Management</h4>
                  <ul>
                    <li>
                      <strong>Regular rebalancing:</strong> Perform channel rebalancing when
                      channels become too skewed in one direction. Look for channels with less than
                      20% or more than 80% local balance.
                    </li>
                    <li>
                      <strong>Capital efficiency monitoring:</strong> Track how much of your
                      allocated capital is actually being utilized for forwarding payments versus
                      sitting idle.
                    </li>
                    <li>
                      <strong>Strategic channel placement:</strong> Connect to well-connected nodes
                      that complement your existing capacity distribution.
                    </li>
                    <li>
                      <strong>Diversify channel sizes:</strong> Maintain a mix of channel sizes
                      optimized for different payment amounts.
                    </li>
                    <li>
                      <strong>Document capacity decisions:</strong> Keep records of why you opened
                      channels at specific sizes to evaluate their performance over time.
                    </li>
                  </ul>
                </div>
              </div>
            </SubSectionContent>

            <div className="bg-muted/50 p-6 rounded-lg">
              <h4 className="font-medium mb-4">
                Satoshi's Perspective: The Economic Design of Channel Capacity
              </h4>

              <SatoshiQuote quote="Lightning channel capacity is where decentralized finance truly becomes an art form. It's a system where individual participants make local decisions about capital allocation that collectively create a global liquidity network. The economics are fascinating - each satoshi placed in a channel represents both utility and opportunity cost. Understanding these trade-offs is essential for the network's long-term efficiency.">
                <p className="text-sm">
                  Channel capacity represents the economic innovation at the heart of the Lightning
                  Network. It transforms Bitcoin's global consensus model into a localized economic
                  system where capital efficiency directly impacts network functionality. As the
                  network matures, we'll see increasingly sophisticated channel capacity management
                  strategies emerge, creating a more robust second layer for Bitcoin.
                </p>
                <p className="text-sm mt-2">
                  Remember that every satoshi of capacity you allocate to Lightning channels is
                  making Bitcoin more useful as a payment system. Your channel management decisions
                  directly contribute to Bitcoin's ability to scale and serve the world as an
                  efficient medium of exchange.
                </p>
              </SatoshiQuote>
            </div>
          </div>
        </div>

        <div className="mt-6 border-t border-border/40 pt-4">
          <VerifyCheckbox
            moduleId="lightning-channel-management"
            verificationId="channel-capacity"
            label="I understand Lightning channel capacity concepts and management strategies"
          />
        </div>
      </div>
    </ModuleContent>
  );
}
