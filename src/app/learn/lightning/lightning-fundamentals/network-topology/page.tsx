'use client';

import React from 'react';
import { ModuleContent } from '@/components/learn/shared/module-content';
import {
  Network,
  Zap,
  Share2,
  Workflow,
  Radio,
  Database,
  GitBranch,
  Layers,
  Repeat,
  Lock,
  ShieldAlert,
  Users,
} from 'lucide-react';
import SatoshiQuote from '@/components/learn/shared/satoshi-quote';
import VerifyCheckbox from '@/components/learn/shared/verify-checkbox';

export default function NetworkTopology() {
  return (
    <ModuleContent
      moduleId="lightning-fundamentals"
      sectionId="network-topology"
      moduleTitle="Network Topology"
      moduleDescription="Understanding Lightning Network's structure and routing"
      difficulty="Beginner"
      icon={Network}
    >
      <div className="space-y-8">
        <SatoshiQuote
          quote="The Lightning Network can be viewed as a mesh network of payment channels, creating a robust and decentralized payment infrastructure."
          source="Lightning Network Whitepaper"
          date="2016"
        />

        <div className="bg-card p-6 rounded-lg border border-border">
          <h4 className="font-medium mb-4 text-lg">A Note from Satoshi</h4>
          <div className="p-5 bg-muted/50 rounded-lg border border-border text-sm text-muted-foreground italic leading-relaxed">
            <p>
              "When I designed Bitcoin, I purposely chose a topology where every node verifies every
              transaction. This provides maximum security but limits throughput. I always envisioned
              that scaling would require different network structures built on top of this secure
              foundation.
            </p>
            <p className="mt-3">
              The Lightning Network's mesh topology fascinates me—it's a perfect example of how
              specialized networks can evolve from general-purpose ones. By creating a dynamic
              network of payment channels with different routing characteristics, Lightning achieves
              vastly greater throughput while preserving Bitcoin's security guarantees at the
              settlement layer.
            </p>
            <p className="mt-3">
              This is evolutionary network design at its finest: the base layer provides robust
              security and final settlement, while higher layers optimize for specific use cases and
              performance characteristics. The small-world network properties that emerge naturally
              from Lightning's topology remind me of how human financial networks have traditionally
              formed around central hubs while still maintaining peripheral connections."
            </p>
          </div>
        </div>

        <div>
          <h2 className="text-2xl font-bold">Network Architecture</h2>
          <div className="mt-4 space-y-6">
            <div className="bg-card p-6 rounded-lg border border-border">
              <h4 className="font-medium mb-4 text-lg">Topology Fundamentals</h4>
              <div className="space-y-6">
                <p className="text-muted-foreground leading-relaxed">
                  The Lightning Network has a fundamentally different topology from Bitcoin's base
                  layer. While Bitcoin's network is relatively uniform with each node maintaining a
                  complete copy of the blockchain, Lightning creates a heterogeneous network of
                  payment channels optimized for routing funds efficiently.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="p-4 bg-background rounded-lg flex flex-col h-full">
                    <div className="flex items-center gap-2 mb-2">
                      <Layers className="h-5 w-5 text-primary flex-shrink-0" />
                      <h5 className="font-medium">Bitcoin vs. Lightning Topology</h5>
                    </div>
                    <div className="space-y-3 text-sm text-muted-foreground">
                      <div className="flex items-center gap-2 py-1 px-2 bg-muted/50 rounded">
                        <Zap className="h-4 w-4 text-amber-500" />
                        <span>
                          <strong>Bitcoin:</strong> Flat peer-to-peer network, all nodes equal
                        </span>
                      </div>
                      <div className="flex items-center gap-2 py-1 px-2 bg-muted/50 rounded">
                        <Share2 className="h-4 w-4 text-blue-500" />
                        <span>
                          <strong>Lightning:</strong> Mesh network with hub-and-spoke tendencies
                        </span>
                      </div>
                      <p className="mt-1">
                        Lightning nodes don't all need to connect to each other—they only need
                        routes to destinations. This creates a "small-world network" where most
                        nodes are reachable in 3-6 hops.
                      </p>
                    </div>
                  </div>

                  <div className="p-4 bg-background rounded-lg flex flex-col h-full">
                    <div className="flex items-center gap-2 mb-2">
                      <Database className="h-5 w-5 text-primary flex-shrink-0" />
                      <h5 className="font-medium">Network State Management</h5>
                    </div>
                    <div className="space-y-3 text-sm text-muted-foreground">
                      <div className="flex items-center gap-2 py-1 px-2 bg-muted/50 rounded">
                        <Zap className="h-4 w-4 text-amber-500" />
                        <span>
                          <strong>Bitcoin:</strong> All nodes store the complete blockchain
                        </span>
                      </div>
                      <div className="flex items-center gap-2 py-1 px-2 bg-muted/50 rounded">
                        <Share2 className="h-4 w-4 text-blue-500" />
                        <span>
                          <strong>Lightning:</strong> Nodes only store their own channels
                        </span>
                      </div>
                      <p className="mt-1">
                        Lightning nodes maintain a routing table of the network graph, but only keep
                        detailed state for their direct channels, making it highly scalable as the
                        network grows.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="relative w-full h-80 bg-background rounded-lg overflow-hidden border border-border">
                  <div className="absolute inset-0 opacity-15">
                    <svg
                      className="w-full h-full"
                      viewBox="0 0 800 600"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <g stroke="currentColor" fill="none" strokeWidth="2">
                        {/* Hub nodes */}
                        <circle
                          cx="400"
                          cy="300"
                          r="22"
                          className="fill-primary stroke-primary opacity-80"
                        />
                        <circle
                          cx="250"
                          cy="200"
                          r="16"
                          className="fill-primary stroke-primary opacity-60"
                        />
                        <circle
                          cx="550"
                          cy="200"
                          r="16"
                          className="fill-primary stroke-primary opacity-60"
                        />
                        <circle
                          cx="200"
                          cy="400"
                          r="16"
                          className="fill-primary stroke-primary opacity-60"
                        />
                        <circle
                          cx="600"
                          cy="400"
                          r="16"
                          className="fill-primary stroke-primary opacity-60"
                        />

                        {/* Regular nodes */}
                        <circle
                          cx="350"
                          cy="150"
                          r="8"
                          className="fill-muted-foreground stroke-muted-foreground"
                        />
                        <circle
                          cx="450"
                          cy="150"
                          r="8"
                          className="fill-muted-foreground stroke-muted-foreground"
                        />
                        <circle
                          cx="150"
                          cy="300"
                          r="8"
                          className="fill-muted-foreground stroke-muted-foreground"
                        />
                        <circle
                          cx="650"
                          cy="300"
                          r="8"
                          className="fill-muted-foreground stroke-muted-foreground"
                        />
                        <circle
                          cx="350"
                          cy="450"
                          r="8"
                          className="fill-muted-foreground stroke-muted-foreground"
                        />
                        <circle
                          cx="450"
                          cy="450"
                          r="8"
                          className="fill-muted-foreground stroke-muted-foreground"
                        />
                        <circle
                          cx="300"
                          cy="350"
                          r="8"
                          className="fill-muted-foreground stroke-muted-foreground"
                        />
                        <circle
                          cx="500"
                          cy="350"
                          r="8"
                          className="fill-muted-foreground stroke-muted-foreground"
                        />
                        <circle
                          cx="300"
                          cy="250"
                          r="8"
                          className="fill-muted-foreground stroke-muted-foreground"
                        />
                        <circle
                          cx="500"
                          cy="250"
                          r="8"
                          className="fill-muted-foreground stroke-muted-foreground"
                        />

                        {/* Leaf nodes */}
                        <circle
                          cx="100"
                          cy="150"
                          r="5"
                          className="fill-muted-foreground stroke-muted-foreground opacity-70"
                        />
                        <circle
                          cx="700"
                          cy="150"
                          r="5"
                          className="fill-muted-foreground stroke-muted-foreground opacity-70"
                        />
                        <circle
                          cx="100"
                          cy="450"
                          r="5"
                          className="fill-muted-foreground stroke-muted-foreground opacity-70"
                        />
                        <circle
                          cx="700"
                          cy="450"
                          r="5"
                          className="fill-muted-foreground stroke-muted-foreground opacity-70"
                        />
                        <circle
                          cx="270"
                          cy="100"
                          r="5"
                          className="fill-muted-foreground stroke-muted-foreground opacity-70"
                        />
                        <circle
                          cx="530"
                          cy="100"
                          r="5"
                          className="fill-muted-foreground stroke-muted-foreground opacity-70"
                        />
                        <circle
                          cx="270"
                          cy="500"
                          r="5"
                          className="fill-muted-foreground stroke-muted-foreground opacity-70"
                        />
                        <circle
                          cx="530"
                          cy="500"
                          r="5"
                          className="fill-muted-foreground stroke-muted-foreground opacity-70"
                        />

                        {/* Main hub connections */}
                        <line
                          x1="400"
                          y1="300"
                          x2="250"
                          y2="200"
                          className="stroke-primary opacity-80"
                          strokeWidth="3"
                        />
                        <line
                          x1="400"
                          y1="300"
                          x2="550"
                          y2="200"
                          className="stroke-primary opacity-80"
                          strokeWidth="3"
                        />
                        <line
                          x1="400"
                          y1="300"
                          x2="200"
                          y2="400"
                          className="stroke-primary opacity-80"
                          strokeWidth="3"
                        />
                        <line
                          x1="400"
                          y1="300"
                          x2="600"
                          y2="400"
                          className="stroke-primary opacity-80"
                          strokeWidth="3"
                        />

                        {/* Secondary hub connections */}
                        <line
                          x1="250"
                          y1="200"
                          x2="200"
                          y2="400"
                          className="stroke-primary opacity-60"
                          strokeWidth="2"
                        />
                        <line
                          x1="550"
                          y1="200"
                          x2="600"
                          y2="400"
                          className="stroke-primary opacity-60"
                          strokeWidth="2"
                        />

                        {/* Regular node connections */}
                        <line x1="400" y1="300" x2="300" y2="250" className="stroke-border" />
                        <line x1="400" y1="300" x2="500" y2="250" className="stroke-border" />
                        <line x1="400" y1="300" x2="300" y2="350" className="stroke-border" />
                        <line x1="400" y1="300" x2="500" y2="350" className="stroke-border" />
                        <line x1="250" y1="200" x2="350" y2="150" className="stroke-border" />
                        <line x1="550" y1="200" x2="450" y2="150" className="stroke-border" />
                        <line x1="200" y1="400" x2="350" y2="450" className="stroke-border" />
                        <line x1="600" y1="400" x2="450" y2="450" className="stroke-border" />
                        <line x1="250" y1="200" x2="300" y2="250" className="stroke-border" />
                        <line x1="550" y1="200" x2="500" y2="250" className="stroke-border" />
                        <line x1="200" y1="400" x2="300" y2="350" className="stroke-border" />
                        <line x1="600" y1="400" x2="500" y2="350" className="stroke-border" />
                        <line x1="250" y1="200" x2="150" y2="300" className="stroke-border" />
                        <line x1="550" y1="200" x2="650" y2="300" className="stroke-border" />

                        {/* Leaf node connections */}
                        <line
                          x1="250"
                          y1="200"
                          x2="100"
                          y2="150"
                          className="stroke-border opacity-60"
                        />
                        <line
                          x1="550"
                          y1="200"
                          x2="700"
                          y2="150"
                          className="stroke-border opacity-60"
                        />
                        <line
                          x1="200"
                          y1="400"
                          x2="100"
                          y2="450"
                          className="stroke-border opacity-60"
                        />
                        <line
                          x1="600"
                          y1="400"
                          x2="700"
                          y2="450"
                          className="stroke-border opacity-60"
                        />
                        <line
                          x1="250"
                          y1="200"
                          x2="270"
                          y2="100"
                          className="stroke-border opacity-60"
                        />
                        <line
                          x1="550"
                          y1="200"
                          x2="530"
                          y2="100"
                          className="stroke-border opacity-60"
                        />
                        <line
                          x1="200"
                          y1="400"
                          x2="270"
                          y2="500"
                          className="stroke-border opacity-60"
                        />
                        <line
                          x1="600"
                          y1="400"
                          x2="530"
                          y2="500"
                          className="stroke-border opacity-60"
                        />
                      </g>
                    </svg>
                  </div>

                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="bg-background/90 backdrop-blur-sm p-5 rounded-lg shadow-lg border border-border max-w-md">
                      <h3 className="text-lg font-medium mb-2 flex items-center">
                        <Share2 className="h-5 w-5 text-primary mr-2" /> Small-World Network
                        Structure
                      </h3>
                      <p className="text-sm text-muted-foreground">
                        The Lightning Network naturally forms a "small-world" topology with
                        well-connected hub nodes (larger) and less-connected nodes (smaller). This
                        structure enables efficient routing with just a few hops while maintaining
                        reasonable decentralization.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="p-4 bg-amber-50 dark:bg-amber-900/20 rounded-lg border border-amber-100 dark:border-amber-900/30">
                  <h5 className="font-medium mb-2 flex items-center">
                    <Workflow className="h-5 w-5 text-amber-600 dark:text-amber-400 mr-2" />
                    Technical Insight
                  </h5>
                  <p className="text-sm text-muted-foreground">
                    The Lightning Network's topology naturally tends toward a scale-free network
                    structure similar to other real-world networks like the internet, social
                    networks, and traditional financial systems. This happens organically as nodes
                    open channels based on economic incentives. Mathematically, this follows a power
                    law distribution where a small number of nodes have many connections while most
                    nodes have only a few.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-card p-6 rounded-lg border border-border">
              <h4 className="font-medium mb-4 text-lg">Network Components in Detail</h4>
              <div className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="p-4 bg-background rounded-lg flex flex-col h-full">
                    <div className="flex items-center gap-2 mb-3">
                      <Users className="h-5 w-5 text-primary flex-shrink-0" />
                      <h5 className="font-medium">Nodes</h5>
                    </div>
                    <div className="space-y-2 text-sm text-muted-foreground flex-grow">
                      <p>
                        Lightning nodes are the participants in the network that establish payment
                        channels, route payments, and manage channel state.
                      </p>
                      <ul className="list-disc pl-5 space-y-1">
                        <li>
                          <strong>Regular nodes:</strong> Users who primarily send and receive their
                          own payments
                        </li>
                        <li>
                          <strong>Routing nodes:</strong> Specialized nodes that focus on forwarding
                          payments
                        </li>
                        <li>
                          <strong>LSPs:</strong> Lightning Service Providers that offer channel
                          services to users
                        </li>
                      </ul>
                    </div>
                    <div className="mt-3 pt-3 border-t border-border/40 text-xs">
                      <strong>Node Identifier:</strong> A public key derived from a private key
                    </div>
                  </div>

                  <div className="p-4 bg-background rounded-lg flex flex-col h-full">
                    <div className="flex items-center gap-2 mb-3">
                      <GitBranch className="h-5 w-5 text-primary flex-shrink-0" />
                      <h5 className="font-medium">Channels</h5>
                    </div>
                    <div className="space-y-2 text-sm text-muted-foreground flex-grow">
                      <p>
                        Payment channels are the edges in the network graph that connect nodes and
                        enable value transfer.
                      </p>
                      <ul className="list-disc pl-5 space-y-1">
                        <li>
                          <strong>Public channels:</strong> Announced to the network for routing
                        </li>
                        <li>
                          <strong>Private channels:</strong> Hidden from the network for privacy
                        </li>
                        <li>
                          <strong>Balanced channels:</strong> Have funds on both sides for
                          bidirectional payments
                        </li>
                        <li>
                          <strong>Unbalanced channels:</strong> Have funds mostly on one side
                        </li>
                      </ul>
                    </div>
                    <div className="mt-3 pt-3 border-t border-border/40 text-xs">
                      <strong>Channel Identifier:</strong> A unique 32-byte channel ID
                    </div>
                  </div>

                  <div className="p-4 bg-background rounded-lg flex flex-col h-full">
                    <div className="flex items-center gap-2 mb-3">
                      <Radio className="h-5 w-5 text-primary flex-shrink-0" />
                      <h5 className="font-medium">Network Graph</h5>
                    </div>
                    <div className="space-y-2 text-sm text-muted-foreground flex-grow">
                      <p>
                        The global view of all public nodes and channels in the Lightning Network.
                      </p>
                      <ul className="list-disc pl-5 space-y-1">
                        <li>
                          <strong>Gossip messages:</strong> Propagate channel info through the
                          network
                        </li>
                        <li>
                          <strong>Channel announcements:</strong> Declare new channels to the
                          network
                        </li>
                        <li>
                          <strong>Channel updates:</strong> Share fee and policy changes
                        </li>
                        <li>
                          <strong>Node announcements:</strong> Broadcast node properties and
                          metadata
                        </li>
                      </ul>
                    </div>
                    <div className="mt-3 pt-3 border-t border-border/40 text-xs">
                      <strong>Size:</strong> ~18,000 nodes and ~80,000 channels (as of 2023)
                    </div>
                  </div>
                </div>

                <div className="p-4 bg-background rounded-lg">
                  <h5 className="font-medium mb-3">Channel Properties & Metrics</h5>
                  <div className="overflow-x-auto">
                    <table className="w-full text-sm">
                      <thead>
                        <tr className="border-b border-border">
                          <th className="text-left py-2 px-3 font-medium">Property</th>
                          <th className="text-left py-2 px-3 font-medium">Description</th>
                          <th className="text-left py-2 px-3 font-medium">Impact on Routing</th>
                        </tr>
                      </thead>
                      <tbody className="text-muted-foreground divide-y divide-border/50">
                        <tr>
                          <td className="py-2 px-3 font-medium">Capacity</td>
                          <td className="py-2 px-3">
                            Total amount of bitcoin locked in the channel
                          </td>
                          <td className="py-2 px-3">
                            Higher capacity allows larger payments to be routed
                          </td>
                        </tr>
                        <tr>
                          <td className="py-2 px-3 font-medium">Local/Remote Balance</td>
                          <td className="py-2 px-3">
                            Distribution of funds between the two endpoints
                          </td>
                          <td className="py-2 px-3">
                            Determines directionality of payment capacity
                          </td>
                        </tr>
                        <tr>
                          <td className="py-2 px-3 font-medium">Base Fee</td>
                          <td className="py-2 px-3">Fixed fee charged per payment</td>
                          <td className="py-2 px-3">
                            Affects routing decisions especially for small payments
                          </td>
                        </tr>
                        <tr>
                          <td className="py-2 px-3 font-medium">Fee Rate</td>
                          <td className="py-2 px-3">
                            Variable fee charged as a percentage of payment
                          </td>
                          <td className="py-2 px-3">
                            Affects routing decisions for larger payments
                          </td>
                        </tr>
                        <tr>
                          <td className="py-2 px-3 font-medium">CLTV Delta</td>
                          <td className="py-2 px-3">
                            Time lock delta required for forwarding HTLCs
                          </td>
                          <td className="py-2 px-3">
                            Impacts payment timeouts and route selection
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div>
          <h2 className="text-2xl font-bold">Network Discovery & Pathfinding</h2>
          <div className="mt-4 space-y-6">
            <div className="bg-card p-6 rounded-lg border border-border">
              <h4 className="font-medium mb-4 text-lg">Gossip Protocol</h4>
              <div className="space-y-4">
                <p className="text-muted-foreground leading-relaxed">
                  For nodes to route payments effectively, they need knowledge of the network
                  topology. Lightning uses a peer-to-peer gossip protocol to distribute this
                  information. This protocol is critical for ensuring that all nodes maintain a
                  reasonably consistent view of the network without requiring a centralized
                  coordinator.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="bg-background p-5 rounded-lg">
                    <h5 className="font-medium mb-3">Message Types</h5>
                    <div className="space-y-3">
                      <div className="bg-muted/50 p-3 rounded-lg">
                        <h6 className="font-medium text-sm">Channel Announcement</h6>
                        <p className="text-xs text-muted-foreground mt-1">
                          Broadcast when a new channel is opened. Contains channel ID, node
                          identifiers, Bitcoin transaction details, and signatures from both nodes.
                          All nodes verify this information before accepting the channel into their
                          graph.
                        </p>
                      </div>

                      <div className="bg-muted/50 p-3 rounded-lg">
                        <h6 className="font-medium text-sm">Channel Update</h6>
                        <p className="text-xs text-muted-foreground mt-1">
                          Sent when channel properties change. Includes fee policies, timelock
                          deltas, and flags indicating whether the channel can forward payments in a
                          particular direction. Each node issues updates for their own direction.
                        </p>
                      </div>

                      <div className="bg-muted/50 p-3 rounded-lg">
                        <h6 className="font-medium text-sm">Node Announcement</h6>
                        <p className="text-xs text-muted-foreground mt-1">
                          Contains metadata about nodes such as alias, color, supported features,
                          and network addresses. These announcements are only accepted after the
                          node has at least one public channel.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="bg-background p-5 rounded-lg">
                    <h5 className="font-medium mb-3">Technical Implementation</h5>
                    <div className="space-y-2 text-sm text-muted-foreground">
                      <p>
                        The gossip protocol in Lightning implements several optimizations to
                        maintain efficiency:
                      </p>
                      <ul className="list-disc pl-5 space-y-1">
                        <li>
                          <strong>Timestamps:</strong> Each message contains a timestamp to track
                          freshness
                        </li>
                        <li>
                          <strong>Signature verification:</strong> Ensures only authorized parties
                          can update channel information
                        </li>
                        <li>
                          <strong>Rate limiting:</strong> Prevents spam attacks on the gossip
                          network
                        </li>
                        <li>
                          <strong>Incremental updates:</strong> Nodes share only what's changed
                          since the last sync
                        </li>
                        <li>
                          <strong>Gossip queries:</strong> Allows nodes to request specific parts of
                          the graph
                        </li>
                      </ul>
                      <p className="mt-2">
                        When a node first joins the network, it performs an initial sync to download
                        the current network graph. This can involve hundreds of thousands of
                        messages for the full topology.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-background p-5 rounded-lg">
                  <h5 className="font-medium mb-3 flex items-center">
                    <Repeat className="h-5 w-5 text-primary mr-2" />
                    Gossip Message Flow
                  </h5>
                  <div className="relative pt-8 pb-4">
                    <div className="flex justify-between items-center">
                      <div className="text-center">
                        <div className="w-16 h-16 rounded-full bg-primary/10 border border-primary/30 flex items-center justify-center mx-auto">
                          <span className="font-medium">Node A</span>
                        </div>
                        <span className="text-xs text-muted-foreground block mt-1">Initiator</span>
                      </div>

                      <div className="text-center">
                        <div className="w-16 h-16 rounded-full bg-muted border border-border flex items-center justify-center mx-auto">
                          <span className="font-medium">Node B</span>
                        </div>
                        <span className="text-xs text-muted-foreground block mt-1">Peer</span>
                      </div>

                      <div className="text-center">
                        <div className="w-16 h-16 rounded-full bg-muted border border-border flex items-center justify-center mx-auto">
                          <span className="font-medium">Node C</span>
                        </div>
                        <span className="text-xs text-muted-foreground block mt-1">Peer</span>
                      </div>

                      <div className="text-center">
                        <div className="w-16 h-16 rounded-full bg-muted border border-border flex items-center justify-center mx-auto">
                          <span className="font-medium">Node D</span>
                        </div>
                        <span className="text-xs text-muted-foreground block mt-1">Peer</span>
                      </div>
                    </div>

                    {/* Arrows for step 1 */}
                    <div className="absolute top-12 left-[22%]">
                      <svg
                        width="56"
                        height="8"
                        viewBox="0 0 56 8"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M0 4H52" stroke="currentColor" strokeWidth="1.5" />
                        <path d="M50 1L55 4L50 7" stroke="currentColor" strokeWidth="1.5" />
                      </svg>
                    </div>

                    {/* Step 1 label */}
                    <div className="absolute top-3 left-[22%] text-xs text-primary font-medium">
                      1. Channel Announcement
                    </div>

                    {/* Arrows for step 2 */}
                    <div className="absolute top-12 left-[55%]">
                      <svg
                        width="56"
                        height="8"
                        viewBox="0 0 56 8"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M0 4H52" stroke="currentColor" strokeWidth="1.5" />
                        <path d="M50 1L55 4L50 7" stroke="currentColor" strokeWidth="1.5" />
                      </svg>
                    </div>

                    {/* Step 2 label */}
                    <div className="absolute top-3 left-[55%] text-xs text-primary font-medium">
                      2. Forward Announcement
                    </div>

                    {/* Recursive arrows */}
                    <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 text-xs text-muted-foreground">
                      3. Process repeats throughout the network
                    </div>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    When a new channel is established, its announcement propagates across the
                    network through this gossip mechanism. Each node verifies the message before
                    forwarding it to their peers, ensuring information integrity.
                  </p>
                </div>

                <pre className="text-xs overflow-x-auto p-3 bg-background rounded-md">
                  {`# Example of a channel_announcement message structure (simplified)
type: channel_announcement
short_channel_id: 684946x1584x0   # block_height x tx_index x output_index
node1_id: 03864ef025fde8fb587d989186ce6a4a186895ee44a926bfc370e2c366597a3f8f
node2_id: 027f31ebc5462c1fdce1b737ecff52d37d75dea43ce11c74d25aa297165faa2007
bitcoin_key1: 026e8c0c2a6801bd01db688a5353c64810138fae14ae3c2ed583afd11a30e03b5
bitcoin_key2: 0345f4dfc01326e24db7e0e0619e8ee24c4594cee104d09cac9c45e13e8cedbc8
signatures: [node1_signature, node2_signature, bitcoin_key1_signature, bitcoin_key2_signature]`}
                </pre>
              </div>
            </div>

            <div className="bg-card p-6 rounded-lg border border-border">
              <h4 className="font-medium mb-4 text-lg">Path Finding Algorithms</h4>
              <div className="space-y-4">
                <p className="text-muted-foreground leading-relaxed">
                  Finding efficient payment paths through the Lightning Network is a complex
                  optimization problem. Unlike Internet routing where the goal is simply to find the
                  shortest path, Lightning pathfinding must balance multiple competing factors.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="bg-background p-5 rounded-lg">
                    <h5 className="font-medium mb-3">Routing Considerations</h5>
                    <ul className="space-y-2 text-sm text-muted-foreground list-disc pl-5">
                      <li>
                        <strong>Channel capacity:</strong> Sufficient capacity to handle the payment
                        amount
                      </li>
                      <li>
                        <strong>Balance distribution:</strong> Channels need funds on the sending
                        side
                      </li>
                      <li>
                        <strong>Fees:</strong> Minimize the total fees paid along the route
                      </li>
                      <li>
                        <strong>Reliability:</strong> Preference for nodes with good uptime and
                        history
                      </li>
                      <li>
                        <strong>Timelocks:</strong> Manage the CLTV delta constraints along the path
                      </li>
                      <li>
                        <strong>Path length:</strong> Shorter paths generally have higher success
                        probability
                      </li>
                      <li>
                        <strong>Privacy:</strong> Avoid leaking sensitive information about payment
                        endpoints
                      </li>
                    </ul>
                  </div>

                  <div className="bg-background p-5 rounded-lg">
                    <h5 className="font-medium mb-3">Algorithm Evolution</h5>
                    <div className="space-y-3 text-sm text-muted-foreground">
                      <div className="space-y-1">
                        <h6 className="font-medium">Early Implementation: Dijkstra's Algorithm</h6>
                        <p>
                          Initial Lightning implementations used variants of Dijkstra's shortest
                          path algorithm, treating fees as "distance" to minimize. However, this
                          approach often failed because it couldn't account for channel balance
                          constraints.
                        </p>
                      </div>

                      <div className="space-y-1">
                        <h6 className="font-medium">Advanced: Probabilistic Models</h6>
                        <p>
                          Modern implementations use probabilistic models that factor in historical
                          payment success, estimated channel balances, and reliability metrics. Some
                          implementations use Monte Carlo simulations to test multiple candidate
                          paths.
                        </p>
                      </div>

                      <div className="space-y-1">
                        <h6 className="font-medium">Cutting Edge: Multi-part Payments (MPP)</h6>
                        <p>
                          The latest algorithms split larger payments into multiple smaller parts
                          that take different routes, significantly improving success rates by
                          avoiding liquidity constraints in any single channel.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="p-4 bg-background rounded-lg">
                  <h5 className="font-medium mb-2">The Pathfinding Challenge</h5>
                  <p className="text-sm text-muted-foreground mb-3">
                    The core challenge in Lightning routing is that senders cannot know the exact
                    balance state of channels they don't directly participate in. This creates an
                    information asymmetry problem:
                  </p>
                  <div className="p-3 border border-border/50 rounded-lg bg-muted/30">
                    <div className="flex items-start gap-3">
                      <Lock className="h-5 w-5 text-primary flex-shrink-0 mt-1" />
                      <div>
                        <h6 className="font-medium text-sm">The Balance Privacy Tradeoff</h6>
                        <p className="text-xs text-muted-foreground mt-1">
                          While channel capacities are public, the balance distribution within
                          channels is private information only known to the channel participants.
                          This privacy is important for security, but means routing algorithms must
                          operate with incomplete information.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="p-4 bg-amber-50 dark:bg-amber-900/20 rounded-lg">
                  <h5 className="font-medium mb-2 flex items-center">
                    <ShieldAlert className="h-5 w-5 text-amber-600 dark:text-amber-400 mr-2" />
                    Pathfinding & Probing Security Considerations
                  </h5>
                  <p className="text-sm text-muted-foreground">
                    While Lightning nodes try to find optimal payment paths, they must balance
                    performance with privacy and security concerns. Active probing techniques can
                    discover channel balances but might expose payment patterns. Defensive
                    implementations use obfuscation techniques like random route selection, dummy
                    payments, and variable payment sizes to prevent adversaries from mapping the
                    network too precisely.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-card p-6 rounded-lg border border-border">
          <h4 className="font-medium mb-4 text-lg">Satoshi's Perspective</h4>
          <div className="p-5 bg-muted/50 rounded-lg border border-border text-sm text-muted-foreground italic leading-relaxed">
            <p>
              "The Lightning Network's topology reminds me of how successful financial systems
              naturally organize—finding the balance between centralization for efficiency and
              decentralization for resilience.
            </p>
            <p className="mt-3">
              I always envisioned Bitcoin as a foundation for specialized payment networks. Just as
              the Internet has specialized into content delivery networks, VPNs, and other overlay
              networks, the financial infrastructure built on Bitcoin was destined to develop
              specialized topologies for specific use cases.
            </p>
            <p className="mt-3">
              What's fascinating is how Lightning's network structure emerges organically from
              economic incentives. Hub nodes aren't designated by authorities—they emerge because
              well-capitalized, reliable nodes naturally attract more connections. It's another
              example of how well-designed protocols can harness market forces to create efficient
              structures without central planning."
            </p>
          </div>
        </div>

        <div className="mt-6 border-t border-border/40 pt-4">
          <VerifyCheckbox
            moduleId="lightning-fundamentals"
            verificationId="network-topology"
            label="I understand how the Lightning Network topology works and how payments are routed"
          />
        </div>
      </div>
    </ModuleContent>
  );
}
