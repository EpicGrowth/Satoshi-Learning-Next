import React from 'react';
import { ModuleContent } from '@/components/learn/shared/module-content';
import { Link, ArrowLeftRight, BarChart2, Settings, AlertCircle, Signal, FileCode, Workflow, RefreshCw, Layers, Eye, Clock, Shield, Zap } from 'lucide-react';
import VerifyCheckbox from '@/components/learn/shared/verify-checkbox';
import SatoshiQuote from '@/components/learn/shared/satoshi-quote';

export default function ChannelManagement() {
  return (
    <ModuleContent
      moduleId="lightning-node-operations"
      moduleTitle="Channel Management"
      moduleDescription="Managing Lightning channels"
      difficulty="Intermediate"
      icon={Link}
    >
      <div className="space-y-8">
        <SatoshiQuote
          quote="Anyone, anywhere can make transactions. The fee isn't a percentage of the transaction, but rather it's based on the number of bytes to transmit."
          source="Satoshi Nakamoto"
          date="November 14, 2008"
        />

        <div className="bg-card p-6 rounded-lg border border-border">
          <h4 className="font-medium mb-4 text-lg">A Note from Satoshi</h4>
          <div className="p-5 bg-muted/50 rounded-lg border border-border text-sm text-muted-foreground italic leading-relaxed">
            <p>
              "When designing Bitcoin, I included several features specifically intended to enable layers atop the base protocol. Payment channels represent one of the most powerful applications of these capabilities. They transform Bitcoin from a settlement system into a true payment network capable of global scale.
            </p>
            <p className="mt-3">
              Effective channel management on the Lightning Network is akin to managing a miniature financial system. The decisions about where to allocate capital, how to balance liquidity, and which connections to establish all affect not only your own experience but the network as a whole. This introduces a fascinating economic dynamic where individual participants, acting in their own interest, collectively strengthen the network's resilience and capacity.
            </p>
            <p className="mt-3">
              The most elegant aspect of Lightning's channel design is how it preserves Bitcoin's security model while extending its capabilities. Even though transactions occur off-chain, the threat of on-chain settlement ensures honest behavior. This game-theoretic approach to scaling demonstrates how cryptographic incentives can replace trusted third parties—the fundamental innovation that makes Bitcoin possible."
            </p>
          </div>
        </div>
        
        <div className="bg-card p-6 rounded-lg border border-border">
          <h3 className="text-lg font-medium mb-4">Channel Management Fundamentals</h3>
          <div className="space-y-6">
            <p className="text-muted-foreground leading-relaxed">
              Lightning Network channels are bidirectional payment pathways secured by on-chain Bitcoin transactions. Effective management of these channels is essential for maintaining liquidity, minimizing fees, and ensuring reliable payment routing.
            </p>
            
            <div className="p-5 bg-background rounded-lg border border-border">
              <h4 className="font-medium mb-4 flex items-center">
                <ArrowLeftRight className="h-5 w-5 text-primary mr-2" />
                The Role of Channels in Lightning
              </h4>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h5 className="font-medium mb-2">Core Concepts</h5>
                  <div className="p-4 bg-muted/30 rounded-lg">
                    <ul className="list-disc pl-5 text-sm text-muted-foreground space-y-2">
                      <li><span className="font-medium">Payment Channels:</span> Secure connections between two Lightning nodes</li>
                      <li><span className="font-medium">Channel Capacity:</span> Total funds locked in the channel (measured in satoshis)</li>
                      <li><span className="font-medium">Local Balance:</span> Funds available to spend from your side of the channel</li>
                      <li><span className="font-medium">Remote Balance:</span> Funds available to receive from the other party</li>
                      <li><span className="font-medium">Channel State:</span> The current distribution of funds between parties</li>
                    </ul>
                  </div>
                </div>
                
                <div>
                  <h5 className="font-medium mb-2">Channel Characteristics</h5>
                  <div className="p-4 bg-muted/30 rounded-lg">
                    <ul className="list-disc pl-5 text-sm text-muted-foreground space-y-2">
                      <li><span className="font-medium">Bidirectional:</span> Funds can flow in either direction within a channel</li>
                      <li><span className="font-medium">Trustless:</span> No counterparty risk due to cryptographic enforcement</li>
                      <li><span className="font-medium">Dynamic:</span> Balance shifts with each transaction</li>
                      <li><span className="font-medium">Rebalanceable:</span> Liquidity can be adjusted through various techniques</li>
                      <li><span className="font-medium">Capital-Intensive:</span> Requires Bitcoin to be locked up in channels</li>
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
                  "Lightning channels are implemented using 2-of-2 multisignature addresses on the Bitcoin blockchain. This construction ensures that both parties must agree to any change in fund allocation. The innovation lies in how this agreement happens off-chain through the exchange of valid but unbroadcast Bitcoin transactions, allowing thousands of state updates without touching the blockchain."
                </p>
              </div>
            </div>
          </div>
        </div>
        
        <div className="bg-card p-6 rounded-lg border border-border">
          <h3 className="text-lg font-medium mb-4">Strategic Channel Planning</h3>
          <div className="space-y-6">
            <p className="text-muted-foreground leading-relaxed">
              Successful Lightning node operation begins with strategic planning of your channel portfolio. Each channel represents a capital investment and should be established with clear objectives.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-background p-6 rounded-lg border border-border">
                <div className="mb-4 flex items-center">
                  <Signal className="h-6 w-6 mr-3 text-primary" />
                  <h4 className="font-medium">Channel Portfolio Strategy</h4>
                </div>
                <div className="space-y-4">
                  <div className="p-3 bg-muted/30 rounded-lg">
                    <p className="font-medium text-sm mb-2">Channel Types by Purpose</p>
                    <div className="space-y-2 text-xs text-muted-foreground">
                      <div className="p-2 bg-gradient-to-r from-green-50 to-transparent dark:from-green-900/20 dark:to-transparent border-l-2 border-green-500 pl-3">
                        <p className="font-medium text-green-700 dark:text-green-400">Service Channels</p>
                        <p>Direct connections to services you frequently use (e.g., exchanges, merchants)</p>
                        <p className="mt-1"><span className="font-medium">Goal:</span> Reduce routing fees, improve payment reliability</p>
                      </div>
                      
                      <div className="p-2 bg-gradient-to-r from-blue-50 to-transparent dark:from-blue-900/20 dark:to-transparent border-l-2 border-blue-500 pl-3">
                        <p className="font-medium text-blue-700 dark:text-blue-400">Routing Channels</p>
                        <p>Connections to well-connected nodes to facilitate payment routing</p>
                        <p className="mt-1"><span className="font-medium">Goal:</span> Generate routing fee income, improve network connectivity</p>
                      </div>
                      
                      <div className="p-2 bg-gradient-to-r from-purple-50 to-transparent dark:from-purple-900/20 dark:to-transparent border-l-2 border-purple-500 pl-3">
                        <p className="font-medium text-purple-700 dark:text-purple-400">Liquidity Channels</p>
                        <p>Connections specifically for rebalancing or providing inbound liquidity</p>
                        <p className="mt-1"><span className="font-medium">Goal:</span> Maintain balanced channels, support overall liquidity needs</p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="p-3 bg-muted/30 rounded-lg">
                    <p className="font-medium text-sm mb-2">Channel Allocation Strategy</p>
                    <div className="space-y-2 text-xs text-muted-foreground">
                      <p>When planning your channel allocation, consider these distributions based on your node's purpose:</p>
                      
                      <div className="relative h-16 bg-muted rounded-lg overflow-hidden mt-3">
                        <div className="absolute left-0 top-0 h-full w-[40%] bg-green-200 dark:bg-green-900/50 flex items-center justify-center">
                          <span className="text-[10px] font-medium">40% Services</span>
                        </div>
                        <div className="absolute left-[40%] top-0 h-full w-[35%] bg-blue-200 dark:bg-blue-900/50 flex items-center justify-center">
                          <span className="text-[10px] font-medium">35% Routing</span>
                        </div>
                        <div className="absolute left-[75%] top-0 h-full w-[25%] bg-purple-200 dark:bg-purple-900/50 flex items-center justify-center">
                          <span className="text-[10px] font-medium">25% Liquidity</span>
                        </div>
                        <div className="absolute bottom-0 w-full h-4 flex text-[8px] text-center">
                          <div className="w-[40%]">Personal Use</div>
                          <div className="w-[35%]">Routing Focus</div>
                          <div className="w-[25%]">Balanced</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="bg-background p-6 rounded-lg border border-border">
                <div className="mb-4 flex items-center">
                  <BarChart2 className="h-6 w-6 mr-3 text-primary" />
                  <h4 className="font-medium">Channel Sizing Considerations</h4>
                </div>
                <div className="space-y-4">
                  <div className="p-3 bg-muted/30 rounded-lg">
                    <p className="font-medium text-sm mb-2">Size Categories</p>
                    <div className="space-y-3 text-xs text-muted-foreground">
                      <div className="flex items-center">
                        <div className="w-20 h-4 bg-gradient-to-r from-blue-100 to-blue-300 dark:from-blue-900/30 dark:to-blue-700/30 rounded mr-3"></div>
                        <div>
                          <p className="font-medium">Small Channels (≤1M sats)</p>
                          <p>Good for personal use, testing, or non-critical services</p>
                        </div>
                      </div>
                      
                      <div className="flex items-center">
                        <div className="w-32 h-4 bg-gradient-to-r from-green-100 to-green-300 dark:from-green-900/30 dark:to-green-700/30 rounded mr-3"></div>
                        <div>
                          <p className="font-medium">Medium Channels (1M-5M sats)</p>
                          <p>Balance of capital efficiency and routing utility</p>
                        </div>
                      </div>
                      
                      <div className="flex items-center">
                        <div className="w-48 h-4 bg-gradient-to-r from-purple-100 to-purple-300 dark:from-purple-900/30 dark:to-purple-700/30 rounded mr-3"></div>
                        <div>
                          <p className="font-medium">Large Channels (5M+ sats)</p>
                          <p>Best for routing nodes, high-volume pathways</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="p-3 bg-muted/30 rounded-lg">
                    <p className="font-medium text-sm mb-2">Practical Considerations</p>
                    <ul className="list-disc pl-4 space-y-2 text-xs text-muted-foreground">
                      <li><span className="font-medium">On-chain Fee Impact:</span> Larger channels amortize opening/closing fees over more capacity</li>
                      <li><span className="font-medium">Capital Efficiency:</span> Smaller, more numerous channels can provide better network connectivity for the same capital</li>
                      <li><span className="font-medium">Routing Attractiveness:</span> Larger channels attract more routing opportunities</li>
                      <li><span className="font-medium">Risk Management:</span> Distributing funds across more channels reduces impact of individual channel problems</li>
                    </ul>
                  </div>
                  
                  <div className="p-3 bg-muted/50 rounded-lg">
                    <p className="font-medium text-xs">Channel Size Formula</p>
                    <p className="text-xs mt-1 text-muted-foreground">
                      A common rule of thumb for routing-focused nodes:
                    </p>
                    <div className="mt-2 p-2 bg-background rounded">
                      <p className="text-center font-mono text-xs">
                        Optimal Channel Size ≈ (Monthly Node Volume ÷ Number of Channels) × 2
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="p-4 bg-amber-50 dark:bg-amber-900/20 rounded-lg">
              <h5 className="font-medium mb-2 flex items-center">
                <FileCode className="h-5 w-5 text-amber-600 dark:text-amber-400 mr-2" />
                Historical Context
              </h5>
              <p className="text-sm text-muted-foreground">
                "In the early days of Lightning Network (2018-2019), channels of just 100,000 sats were common. As the network has matured, the average channel capacity has increased significantly, with many routing nodes establishing channels in the millions of satoshis. This evolution reflects growing confidence in the technology and a better understanding of the economics of channel management."
              </p>
            </div>
          </div>
        </div>
        
        <div className="bg-card p-6 rounded-lg border border-border">
          <h3 className="text-lg font-medium mb-4">Channel Lifecycle Management</h3>
          <div className="space-y-6">
            <p className="text-muted-foreground leading-relaxed">
              Lightning channels have distinct lifecycle stages that require different management approaches. Understanding these stages is essential for maintaining an efficient node.
            </p>
            
            <div className="overflow-hidden rounded-lg border border-border bg-background">
              <div className="p-4 bg-primary-foreground border-b border-border">
                <h4 className="font-medium">Channel Lifecycle Stages</h4>
              </div>
              <div className="divide-y divide-border">
                <div className="p-5">
                  <div className="flex flex-col md:flex-row gap-4">
                    <div className="flex-shrink-0 w-full md:w-1/4">
                      <h5 className="font-medium mb-1 flex items-center text-primary">
                        <Zap className="h-4 w-4 mr-2" />
                        Channel Establishment
                      </h5>
                    </div>
                    <div className="flex-grow space-y-3">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="p-3 bg-muted/30 rounded-lg text-xs">
                          <h6 className="font-medium mb-1">Key Tasks</h6>
                          <ul className="list-disc pl-4 text-muted-foreground space-y-1">
                            <li>Research potential peers using node explorers</li>
                            <li>Connect to node (add peer command)</li>
                            <li>Determine appropriate channel size</li>
                            <li>Open channel with optimal parameters</li>
                            <li>Wait for confirmation (3+ blocks)</li>
                          </ul>
                        </div>
                        <div className="p-3 bg-muted/30 rounded-lg text-xs">
                          <h6 className="font-medium mb-1">Technical Considerations</h6>
                          <ul className="list-disc pl-4 text-muted-foreground space-y-1">
                            <li>Set appropriate fee rate for opening transaction</li>
                            <li>Consider timing based on mempool conditions</li>
                            <li>Configure channel parameters (private/public)</li>
                            <li>Determine initial push amount (if any)</li>
                            <li>Set commitment type (anchors vs. legacy)</li>
                          </ul>
                        </div>
                      </div>
                      <div className="p-2 bg-background rounded-lg border border-border/50 text-xs">
                        <pre className="overflow-x-auto text-[10px]">
                          <code className="text-muted-foreground">
                            # LND command example
                            lncli openchannel --node_key=03a5...f89 --local_amt=2000000 --push_amt=100000 --sat_per_byte=10
                            
                            # CLN command example
                            lightning-cli fundchannel 03a5...f89 2000000 10 100000
                          </code>
                        </pre>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="p-5">
                  <div className="flex flex-col md:flex-row gap-4">
                    <div className="flex-shrink-0 w-full md:w-1/4">
                      <h5 className="font-medium mb-1 flex items-center text-blue-600 dark:text-blue-400">
                        <RefreshCw className="h-4 w-4 mr-2" />
                        Channel Maintenance
                      </h5>
                    </div>
                    <div className="flex-grow space-y-3">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="p-3 bg-muted/30 rounded-lg text-xs">
                          <h6 className="font-medium mb-1">Key Tasks</h6>
                          <ul className="list-disc pl-4 text-muted-foreground space-y-1">
                            <li>Monitor channel balance distribution</li>
                            <li>Implement rebalancing when necessary</li>
                            <li>Adjust routing fees based on market conditions</li>
                            <li>Check for stuck HTLCs or other issues</li>
                            <li>Verify channel backup status regularly</li>
                          </ul>
                        </div>
                        <div className="p-3 bg-muted/30 rounded-lg text-xs">
                          <h6 className="font-medium mb-1">Performance Metrics</h6>
                          <ul className="list-disc pl-4 text-muted-foreground space-y-1">
                            <li>Routing Volume: Total sats routed through channel</li>
                            <li>Revenue: Fees earned from routing payments</li>
                            <li>Success Rate: Percentage of successful forwards</li>
                            <li>Liquidity Ratio: Balance of local/remote funds</li>
                            <li>Uptime: Channel availability percentage</li>
                          </ul>
                        </div>
                      </div>
                      <div className="p-2 bg-background rounded-lg border border-border/50 text-xs">
                        <pre className="overflow-x-auto text-[10px]">
                          <code className="text-muted-foreground">
                            # LND command examples
                            lncli feereport                   # Show current fee settings and revenue
                            lncli updatechanpolicy 5 500 0.5  # Update fee policy (base 5 sat, rate 500ppm)
                            
                            # CLN command examples
                            lightning-cli listforwards        # Check forwarding statistics
                            lightning-cli setchannelfee 0123.. 5 500  # Update fees
                          </code>
                        </pre>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="p-5">
                  <div className="flex flex-col md:flex-row gap-4">
                    <div className="flex-shrink-0 w-full md:w-1/4">
                      <h5 className="font-medium mb-1 flex items-center text-amber-600 dark:text-amber-400">
                        <Layers className="h-4 w-4 mr-2" />
                        Channel Rebalancing
                      </h5>
                    </div>
                    <div className="flex-grow space-y-3">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="p-3 bg-muted/30 rounded-lg text-xs">
                          <h6 className="font-medium mb-1">Rebalancing Methods</h6>
                          <ul className="list-disc pl-4 text-muted-foreground space-y-1">
                            <li><span className="font-medium">Circular Rebalancing:</span> Routing payments to yourself through other channels</li>
                            <li><span className="font-medium">Submarine Swaps:</span> Exchanging on-chain for off-chain funds</li>
                            <li><span className="font-medium">JIT (Just-In-Time) Rebalancing:</span> Rebalancing right before/during payment routing</li>
                            <li><span className="font-medium">Fee Adjustment:</span> Setting asymmetric fees to encourage flow in desired direction</li>
                          </ul>
                        </div>
                        <div className="p-3 bg-muted/30 rounded-lg text-xs">
                          <h6 className="font-medium mb-1">Rebalancing Considerations</h6>
                          <ul className="list-disc pl-4 text-muted-foreground space-y-1">
                            <li>Cost vs. benefit of rebalancing operation</li>
                            <li>Maximum fee to pay for rebalancing (typically 50-200ppm)</li>
                            <li>Optimal timing based on network fee conditions</li>
                            <li>Batching multiple rebalances for efficiency</li>
                            <li>Automated vs. manual rebalancing strategies</li>
                          </ul>
                        </div>
                      </div>
                      <div className="p-2 bg-background rounded-lg border border-border/50 text-xs">
                        <pre className="overflow-x-auto text-[10px]">
                          <code className="text-muted-foreground">
                            # Using Balance of Satoshis (BoS) for circular rebalance:
                            bos rebalance --in-channel 012345 --out-channel 678901 --amount 1000000
                            
                            # Using Lightning Terminal (Lit) for JIT rebalancing:
                            litcli autopilot set-rule --chan_id 123456 --min_local_msat 35% --trigger on-outbound
                          </code>
                        </pre>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="p-5">
                  <div className="flex flex-col md:flex-row gap-4">
                    <div className="flex-shrink-0 w-full md:w-1/4">
                      <h5 className="font-medium mb-1 flex items-center text-red-600 dark:text-red-400">
                        <Eye className="h-4 w-4 mr-2" />
                        Channel Monitoring
                      </h5>
                    </div>
                    <div className="flex-grow space-y-3">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="p-3 bg-muted/30 rounded-lg text-xs">
                          <h6 className="font-medium mb-1">Key Metrics to Track</h6>
                          <ul className="list-disc pl-4 text-muted-foreground space-y-1">
                            <li>Channel Balance Distribution</li>
                            <li>Peer Availability (Uptime)</li>
                            <li>Forwarding Activity (Volume, Success Rate)</li>
                            <li>Fee Revenue</li>
                            <li>Pending/Stuck HTLCs</li>
                            <li>Force Close Attempts</li>
                          </ul>
                        </div>
                        <div className="p-3 bg-muted/30 rounded-lg text-xs">
                          <h6 className="font-medium mb-1">Monitoring Tools</h6>
                          <ul className="list-disc pl-4 text-muted-foreground space-y-1">
                            <li><span className="font-medium">RTL (Ride The Lightning):</span> Web interface for node management</li>
                            <li><span className="font-medium">ThunderHub:</span> Dashboard for Lightning node monitoring</li>
                            <li><span className="font-medium">BoS (Balance of Satoshis):</span> CLI utility with monitoring features</li>
                            <li><span className="font-medium">Grafana/Prometheus:</span> Professional monitoring setup</li>
                            <li><span className="font-medium">Custom Scripts:</span> Tailored monitoring for specific metrics</li>
                          </ul>
                        </div>
                      </div>
                      <div className="p-2 bg-background rounded-lg border border-border/50 text-xs">
                        <pre className="overflow-x-auto text-[10px]">
                          <code className="text-muted-foreground">
                            # LND commands for monitoring
                            lncli channelbalance          # Check overall channel balance
                            lncli pendingchannels         # View channels being opened/closed
                            lncli getchaninfo [chan_id]   # Get detailed info about a specific channel
                            lncli fwdinghistory --max_events=100  # View recent forwarding activity
                          </code>
                        </pre>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="p-5">
                  <div className="flex flex-col md:flex-row gap-4">
                    <div className="flex-shrink-0 w-full md:w-1/4">
                      <h5 className="font-medium mb-1 flex items-center text-purple-600 dark:text-purple-400">
                        <Clock className="h-4 w-4 mr-2" />
                        Channel Closure
                      </h5>
                    </div>
                    <div className="flex-grow space-y-3">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="p-3 bg-muted/30 rounded-lg text-xs">
                          <h6 className="font-medium mb-1">Closure Types</h6>
                          <div className="space-y-2">
                            <div>
                              <p className="font-medium text-green-600 dark:text-green-400">Cooperative Close</p>
                              <p className="text-muted-foreground">Both parties agree to close the channel; funds are available immediately after confirmation.</p>
                            </div>
                            <div>
                              <p className="font-medium text-amber-600 dark:text-amber-400">Force Close (Unilateral)</p>
                              <p className="text-muted-foreground">One party closes without cooperation; funds are subject to timelock delays.</p>
                            </div>
                            <div>
                              <p className="font-medium text-red-600 dark:text-red-400">Breach Close (Penalty)</p>
                              <p className="text-muted-foreground">Occurs when a node tries to broadcast an outdated channel state; counterparty can claim all funds.</p>
                            </div>
                          </div>
                        </div>
                        <div className="p-3 bg-muted/30 rounded-lg text-xs">
                          <h6 className="font-medium mb-1">When to Close Channels</h6>
                          <ul className="list-disc pl-4 text-muted-foreground space-y-1">
                            <li>Consistently poor peer uptime</li>
                            <li>Minimal or no routing activity for extended periods</li>
                            <li>Unbalanced channel resistant to rebalancing</li>
                            <li>Need to reallocate capital to better opportunities</li>
                            <li>Uncooperative peer or potential security concerns</li>
                            <li>Depleted channel reserves</li>
                          </ul>
                        </div>
                      </div>
                      <div className="p-2 bg-background rounded-lg border border-border/50 text-xs">
                        <pre className="overflow-x-auto text-[10px]">
                          <code className="text-muted-foreground">
                            # LND command for cooperative close
                            lncli closechannel --chan_point=txid:output_index
                            
                            # LND command for force close
                            lncli closechannel --chan_point=txid:output_index --force
                            
                            # CLN command for cooperative close
                            lightning-cli close channel_id
                            
                            # CLN command for force close
                            lightning-cli close channel_id true
                          </code>
                        </pre>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="bg-card p-6 rounded-lg border border-border">
          <h3 className="text-lg font-medium mb-4">Channel Economics & Fee Management</h3>
          <div className="space-y-6">
            <p className="text-muted-foreground leading-relaxed">
              Lightning Network routing fees represent both a cost for sending payments and a potential revenue source for node operators. Understanding fee dynamics is essential for optimizing channel economics.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="p-5 bg-background rounded-lg border border-border h-full">
                <h4 className="font-medium mb-3 flex items-center">
                  <Settings className="h-5 w-5 text-primary mr-2" />
                  Fee Structure
                </h4>
                <div className="space-y-4 text-sm">
                  <p className="text-muted-foreground">
                    Lightning Network routing fees consist of two components:
                  </p>
                  
                  <div className="space-y-3">
                    <div className="p-3 bg-muted/30 rounded-lg text-xs">
                      <h5 className="font-medium mb-1">Base Fee</h5>
                      <div className="space-y-2 text-muted-foreground">
                        <p>Fixed fee charged per forwarded payment regardless of size</p>
                        <p><span className="font-medium">Typical Range:</span> 0-10 satoshis</p>
                        <p><span className="font-medium">Recommended:</span> 1 satoshi for most channels</p>
                        <div className="mt-2 p-2 bg-background rounded-lg">
                          <p className="font-medium text-xs">Use Case Optimization</p>
                          <ul className="list-disc pl-4 mt-1 text-[10px] space-y-1">
                            <li>Set to 0 for high-volume channels (prioritize throughput)</li>
                            <li>Set higher (5-10 sats) to discourage microtransactions</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                    
                    <div className="p-3 bg-muted/30 rounded-lg text-xs">
                      <h5 className="font-medium mb-1">Fee Rate (PPM - Parts Per Million)</h5>
                      <div className="space-y-2 text-muted-foreground">
                        <p>Proportional fee charged as a percentage of the payment amount</p>
                        <p><span className="font-medium">Typical Range:</span> 1-5000 PPM (0.0001% - 0.5%)</p>
                        <p><span className="font-medium">Recommended:</span> 100-500 PPM for balanced channels</p>
                        <div className="mt-2 p-2 bg-background rounded-lg">
                          <p className="font-medium text-xs">PPM to Percentage Conversion</p>
                          <ul className="list-disc pl-4 mt-1 text-[10px] space-y-1">
                            <li>100 PPM = 0.01%</li>
                            <li>500 PPM = 0.05%</li>
                            <li>1000 PPM = 0.1%</li>
                            <li>10000 PPM = 1%</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="p-5 bg-background rounded-lg border border-border h-full">
                <h4 className="font-medium mb-3 flex items-center">
                  <BarChart2 className="h-5 w-5 text-primary mr-2" />
                  Fee Optimization Strategies
                </h4>
                <div className="space-y-4 text-sm">
                  <p className="text-muted-foreground">
                    Fee strategy should balance income potential against payment success rate and channel utilization:
                  </p>
                  
                  <div className="space-y-3">
                    <div className="p-3 bg-muted/30 rounded-lg text-xs">
                      <h5 className="font-medium mb-1">Dynamic Fee Adjustment</h5>
                      <ul className="list-disc pl-4 space-y-1 text-muted-foreground">
                        <li><span className="font-medium">Market-based:</span> Adjust fees based on network averages</li>
                        <li><span className="font-medium">Balance-based:</span> Higher fees in the direction where liquidity is scarce</li>
                        <li><span className="font-medium">Time-based:</span> Adjust fees during high/low demand periods</li>
                        <li><span className="font-medium">Congestion-based:</span> Increase fees when Bitcoin network fees rise</li>
                      </ul>
                    </div>
                    
                    <div className="p-3 bg-muted/30 rounded-lg text-xs">
                      <h5 className="font-medium mb-1">Competitive Analysis</h5>
                      <p className="text-muted-foreground mb-2">
                        Regularly analyze peers and competitors to ensure your fees remain competitive:
                      </p>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                        <div className="p-1.5 bg-background rounded">
                          <p className="font-medium text-center">High-Volume Node Fees</p>
                          <div className="flex justify-between px-2 mt-1 text-muted-foreground">
                            <span>Base: 0-1 sat</span>
                            <span>Rate: 50-200 PPM</span>
                          </div>
                        </div>
                        <div className="p-1.5 bg-background rounded">
                          <p className="font-medium text-center">Average Node Fees</p>
                          <div className="flex justify-between px-2 mt-1 text-muted-foreground">
                            <span>Base: 1-3 sats</span>
                            <span>Rate: 200-500 PPM</span>
                          </div>
                        </div>
                      </div>
                    </div>
                    
                    <div className="p-3 bg-muted/30 rounded-lg text-xs">
                      <h5 className="font-medium mb-1">Automation Tools</h5>
                      <ul className="list-disc pl-4 space-y-1 text-muted-foreground">
                        <li><span className="font-medium">Charge-lnd:</span> Fee automation tool based on channel balance</li>
                        <li><span className="font-medium">Lightning Terminal (Lit):</span> Automated fee and liquidity management</li>
                        <li><span className="font-medium">Balance of Satoshis (BoS):</span> Fee management command-line tools</li>
                        <li><span className="font-medium">Custom Scripts:</span> Tailored fee adjustment based on your strategy</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="p-5 bg-yellow-50 dark:bg-yellow-900/20 rounded-lg border border-yellow-200 dark:border-yellow-800">
              <h4 className="font-medium mb-2 flex items-center text-yellow-800 dark:text-yellow-300">
                <AlertCircle className="h-5 w-5 mr-2" />
                Common Fee Mistakes
              </h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm text-yellow-700 dark:text-yellow-400">
                <div className="p-3 bg-yellow-100/50 dark:bg-yellow-900/40 rounded-lg">
                  <h5 className="font-medium mb-1 text-xs">Setting Fees Too High</h5>
                  <p className="text-xs">
                    Excessively high fees can cause your node to be bypassed by routing algorithms, resulting in unused capacity and missed revenue opportunities. Most payments will choose the cheapest reliable path.
                  </p>
                </div>
                <div className="p-3 bg-yellow-100/50 dark:bg-yellow-900/40 rounded-lg">
                  <h5 className="font-medium mb-1 text-xs">Setting Fees Too Low</h5>
                  <p className="text-xs">
                    Very low fees may attract traffic but result in depleted liquidity with minimal compensation. This can make channel maintenance costly relative to income.
                  </p>
                </div>
                <div className="p-3 bg-yellow-100/50 dark:bg-yellow-900/40 rounded-lg">
                  <h5 className="font-medium mb-1 text-xs">Not Adjusting for Channel Direction</h5>
                  <p className="text-xs">
                    Using identical fees in both directions ignores liquidity differences. Higher fees should typically be charged in the direction where your liquidity is lower to preserve balanced channels.
                  </p>
                </div>
                <div className="p-3 bg-yellow-100/50 dark:bg-yellow-900/40 rounded-lg">
                  <h5 className="font-medium mb-1 text-xs">Ignoring Network Conditions</h5>
                  <p className="text-xs">
                    Static fees that don't adapt to changing network conditions can lead to missed opportunities during high-demand periods or unnecessary route blockage during low-demand times.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="bg-card p-6 rounded-lg border border-border">
          <h3 className="text-lg font-medium mb-4">Channel Security Best Practices</h3>
          <div className="space-y-6">
            <p className="text-muted-foreground leading-relaxed">
              Lightning channels represent locked Bitcoin value and require appropriate security measures to protect against loss.
            </p>
            
            <div className="p-5 bg-background rounded-lg border border-border">
              <h4 className="font-medium mb-4 flex items-center">
                <Shield className="h-5 w-5 text-primary mr-2" />
                Critical Security Considerations
              </h4>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="p-4 bg-muted/30 rounded-lg">
                  <h5 className="font-medium mb-2 text-sm flex items-center">
                    <Clock className="h-4 w-4 text-primary mr-1.5" />
                    Channel Backups
                  </h5>
                  <div className="space-y-2 text-xs text-muted-foreground">
                    <p>
                      Regular backups of channel state are critical to prevent fund loss. Most implementations provide Static Channel Backups (SCBs):
                    </p>
                    <ul className="list-disc pl-4 space-y-1">
                      <li>LND: channel.backup file</li>
                      <li>CLN: channel backup data in hsm_secret</li>
                      <li>Eclair: Database backups</li>
                    </ul>
                    <div className="p-2 bg-background rounded-md mt-2">
                      <p className="font-medium">Best Practice</p>
                      <p className="mt-1">
                        Store backups in multiple secure locations, update after every channel open/close, and test recovery procedures regularly.
                      </p>
                    </div>
                  </div>
                </div>
                
                <div className="p-4 bg-muted/30 rounded-lg">
                  <h5 className="font-medium mb-2 text-sm flex items-center">
                    <Eye className="h-4 w-4 text-primary mr-1.5" />
                    Watchtowers
                  </h5>
                  <div className="space-y-2 text-xs text-muted-foreground">
                    <p>
                      Watchtowers monitor the blockchain for channel breaches when your node is offline:
                    </p>
                    <ul className="list-disc pl-4 space-y-1">
                      <li>Monitor for outdated channel state broadcasts</li>
                      <li>Automatically publish justice transactions</li>
                      <li>Provide protection during node downtime</li>
                      <li>Multiple watchtowers recommended for redundancy</li>
                    </ul>
                    <div className="p-2 bg-background rounded-md mt-2">
                      <p className="font-medium">Implementation Options</p>
                      <p className="mt-1">
                        LND built-in watchtower, Eye of Satoshi (for CLN), or third-party services like ACINQ's watchtower.
                      </p>
                    </div>
                  </div>
                </div>
                
                <div className="p-4 bg-muted/30 rounded-lg">
                  <h5 className="font-medium mb-2 text-sm flex items-center">
                    <Shield className="h-4 w-4 text-primary mr-1.5" />
                    Private Channels
                  </h5>
                  <div className="space-y-2 text-xs text-muted-foreground">
                    <p>
                      Consider using private channels for enhanced privacy and security:
                    </p>
                    <ul className="list-disc pl-4 space-y-1">
                      <li>Not announced to the network's gossip protocol</li>
                      <li>Invisible to external network analysis</li>
                      <li>Cannot be used for routing (except with explicit hints)</li>
                      <li>Reduced attack surface for targeted attacks</li>
                    </ul>
                    <div className="p-2 bg-background rounded-md mt-2">
                      <p className="font-medium">Use Cases</p>
                      <p className="mt-1">
                        High-value channels, channels exclusively for personal use, or connections to sensitive services.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="mt-4 p-4 bg-amber-50 dark:bg-amber-900/20 rounded-lg">
                <h5 className="font-medium mb-2 flex items-center">
                  <Workflow className="h-5 w-5 text-amber-600 dark:text-amber-400 mr-2" />
                  Technical Insight
                </h5>
                <p className="text-sm text-muted-foreground">
                  "The penalty-based security model of Lightning channels is a brilliant application of game theory. By making the cost of cheating (losing all funds) significantly higher than any potential gain, the system ensures honest behavior without requiring trust. This approach transforms economic incentives into a security mechanism, similar to how proof-of-work secures the Bitcoin blockchain."
                </p>
              </div>
            </div>
            
            <div className="p-4 text-xs bg-red-50 dark:bg-red-900/20 rounded-lg border border-red-200 dark:border-red-700">
              <h5 className="flex items-center text-red-700 dark:text-red-400 font-medium mb-2">
                <AlertCircle className="h-4 w-4 mr-2" />
                Critical Warning
              </h5>
              <p className="text-red-600 dark:text-red-300">
                Never attempt to recover funds by importing a Lightning wallet's seed phrase into a regular Bitcoin wallet. This will NOT recover your channel funds and may cause loss of funds through breach penalties. Always use the proper channel recovery mechanisms provided by your Lightning implementation.
              </p>
            </div>
          </div>
        </div>
        
        <div className="p-6 bg-card rounded-lg border border-border">
          <h4 className="font-medium mb-4 text-lg">Satoshi's Perspective</h4>
          <div className="p-5 bg-muted/50 rounded-lg border border-border text-sm text-muted-foreground italic leading-relaxed">
            <p>
              "Channel management represents the art and science of operating within the Lightning Network ecosystem. While the technology is brilliant, it's the human operators who make strategic decisions that shape the network's capabilities and evolution.
            </p>
            <p className="mt-3">
              I find it particularly fascinating how Lightning's channel structure creates a natural incentive for operators to maintain balanced channels. When capital is efficiently allocated and channels are well-balanced, both the individual node and the broader network benefit. This emergent property means that rational self-interest naturally strengthens the overall system—a key principle of how I designed Bitcoin itself.
            </p>
            <p className="mt-3">
              As the Lightning Network continues to mature, we'll likely see increasing specialization of nodes and channels for different purposes. Some will focus on providing reliable routing services, others on offering liquidity to specific regions or services, and still others on facilitating specific types of payments. This ecosystem of specialized participants, each finding their niche, will create a more robust and capable network than any centrally designed system could achieve."
            </p>
          </div>
        </div>

        <div className="mt-6 border-t border-border/40 pt-4">
          <VerifyCheckbox
            moduleId="lightning-node-operations"
            verificationId="channel-management"
            label="I understand how to manage Lightning channels"
          />
        </div>
      </div>
    </ModuleContent>
  );
}