'use client';

import React from 'react';
import { ModuleLayout } from '@/components/learn/shared/module-layout';
import { ModuleContent } from '@/components/learn/shared/module-content';
import { ModuleMetadata } from '@/components/learn/shared/module-metadata';
import type { ModuleMetadata as ModuleMetadataType } from '@/components/learn/shared/module-metadata';
import SatoshiQuote from '@/components/learn/shared/satoshi-quote';
import VerifyCheckbox from '@/components/learn/shared/verify-checkbox';
import { Card } from '@/components/ui/card';
import { Network, Share2, Router, ExternalLink, ArrowRight } from 'lucide-react'; // Added required icons

const moduleId = 'technical'; // Corrected moduleId
const sectionId = 'network-architecture';

const moduleInfo: ModuleMetadataType = {
  title: 'Network Architecture | Bitcoin',
  description: 'Delving into the peer-to-peer network structure, node types, and communication protocols that power Bitcoin.',
  keywords: ['bitcoin', 'network', 'p2p', 'peer-to-peer', 'nodes', 'full node', 'light node', 'spv', 'gossip protocol', 'block propagation', 'transaction propagation', 'dns seed', 'tor'],
  canonical: `/learn/bitcoin/technical/${sectionId}`,
  ogImage: '/images/og/bitcoin-network-architecture.png',
  lastUpdated: '2024-07-30',
  difficulty: 'Advanced',
  timeToComplete: '40 minutes',
  prerequisites: ['mining-consensus'],
};

export default function NetworkArchitecturePage() {
  return (
    <ModuleLayout>
      <ModuleMetadata metadata={moduleInfo} />
      <ModuleContent
        moduleId={moduleId} // Use the corrected variable
        sectionId={sectionId}
        checkpoints={1}
        moduleTitle={moduleInfo.title}
        moduleDescription={moduleInfo.description}
        difficulty={moduleInfo.difficulty}
        icon={Network}
      >
        <div className="space-y-8">
          <SatoshiQuote
            quote="A purely peer-to-peer version of electronic cash would allow online payments to be sent directly from one party to another without going through a financial institution."
            date="October 31, 2008"
            source="Bitcoin Whitepaper"
            sourceUrl="https://bitcoin.org/bitcoin.pdf"
          />

          <div className="bg-card p-6 rounded-lg border border-border">
            <h3 className="text-lg font-semibold mb-4">Network Components</h3>
            <div className="grid gap-4">
              {[ // Corrected structure for mapping
                {
                  icon: Network,
                  title: 'Node Types',
                  description:
                    'Full nodes, miners, and lightweight clients form the network backbone',
                },
                {
                  icon: Share2,
                  title: 'Network Topology',
                  description: 'Nodes connect to multiple peers in a mesh network structure',
                },
                {
                  icon: Router,
                  title: 'Message Propagation',
                  description: 'Transactions and blocks are relayed through the peer network (gossip protocol)',
                },
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-4 p-4 bg-muted rounded-lg">
                  <item.icon className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-medium mb-1">{item.title}</h4>
                    <p className="text-sm text-muted-foreground">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-card p-6 rounded-lg border border-border">
            <h3 className="text-lg font-semibold mb-4">Node Types</h3>
            <div className="space-y-4">
              <Card className="p-4 bg-muted">
                <h4 className="font-medium mb-2">Full Nodes</h4>
                <p className="text-sm text-muted-foreground">
                  Download and validate the entire blockchain independently. They enforce all consensus rules, maintain the mempool, and relay transactions/blocks. Crucial for network health and decentralization.
                </p>
              </Card>
              <Card className="p-4 bg-muted">
                <h4 className="font-medium mb-2">Lightweight (SPV) Clients</h4>
                <p className="text-sm text-muted-foreground">
                  Download only block headers. Rely on full nodes for transaction verification using Simplified Payment Verification (SPV). Offer convenience and reduced resource usage but trust assumptions on full nodes.
                </p>
              </Card>
              <Card className="p-4 bg-muted">
                <h4 className="font-medium mb-2">Mining Nodes</h4>
                <p className="text-sm text-muted-foreground">
                  Typically run full node software and specialized hardware to perform Proof-of-Work. Compete to create new blocks and validate transactions within those blocks.
                </p>
              </Card>
            </div>
          </div>

          <div className="bg-card p-6 rounded-lg border border-border">
            <h3 className="text-lg font-semibold mb-4">Network Security Considerations</h3>
            <div className="space-y-4">
              <p className="text-sm text-muted-foreground">
                Bitcoin's P2P network employs several mechanisms for resilience:
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <Card className="p-4 bg-muted">
                  <h4 className="font-medium mb-2">Sybil Resistance</h4>
                  <p className="text-sm text-muted-foreground">
                    Proof-of-Work makes creating vast numbers of fake nodes computationally expensive, mitigating attacks that rely on overwhelming the network with malicious peers.
                  </p>
                </Card>
                <Card className="p-4 bg-muted">
                  <h4 className="font-medium mb-2">Eclipse Protection</h4>
                  <p className="text-sm text-muted-foreground">
                    Nodes connect to multiple, diverse peers (often 8-10 outgoing connections). This randomness makes it difficult for an attacker to surround and isolate a specific node from the honest network.
                  </p>
                </Card>
                <Card className="p-4 bg-muted md:col-span-2">
                  <h4 className="font-medium mb-2">Message Authentication</h4>
                  <p className="text-sm text-muted-foreground">
                    Network messages contain checksums to detect corruption. While core P2P messages aren't encrypted by default, connections can be routed through Tor for enhanced privacy.
                  </p>
                </Card>
              </div>
            </div>
          </div>

          <div className="bg-primary/5 p-6 rounded-lg">
            <h3 className="text-lg font-semibold mb-4">Simplified Protocol Stack</h3>
            <div className="space-y-3">
              <div className="flex items-center justify-between p-3 bg-background rounded-lg">
                <div className="flex items-center gap-2">
                  <ArrowRight className="h-4 w-4 text-primary flex-shrink-0" />
                  <span className="text-sm font-medium">P2P Network Protocol (Message Types)</span>
                </div>
                <span className="text-xs text-muted-foreground">version, verack, addr, inv, getdata, block, tx, etc.</span>
              </div>
              <div className="flex items-center justify-between p-3 bg-background rounded-lg">
                <div className="flex items-center gap-2">
                  <ArrowRight className="h-4 w-4 text-primary flex-shrink-0" />
                  <span className="text-sm font-medium">Data Structures</span>
                </div>
                <span className="text-xs text-muted-foreground">Blocks, Transactions, Merkle Trees</span>
              </div>
              <div className="flex items-center justify-between p-3 bg-background rounded-lg">
                <div className="flex items-center gap-2">
                  <ArrowRight className="h-4 w-4 text-primary flex-shrink-0" />
                  <span className="text-sm font-medium">Transport Layer</span>
                </div>
                 <span className="text-xs text-muted-foreground">TCP/IP (Default Port: 8333)</span>
              </div>
            </div>
          </div>

          <Card className="p-4 bg-secondary/10">
            <h4 className="font-medium mb-2">Explore the Live Network</h4>
            <a
              href="https://bitnodes.io/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary hover:underline flex items-center gap-1.5 text-sm"
            >
              View Global Reachable Node Distribution on Bitnodes
              <ExternalLink className="h-4 w-4" />
            </a>
            <p className="text-xs text-muted-foreground mt-2">Bitnodes provides real-time statistics about the Bitcoin P2P network.</p>
          </Card>

          {/* Verification Checkbox */}
          <div className="mt-6 border-t border-border/40 pt-4">
            <VerifyCheckbox
              moduleId={moduleId}
              verificationId={sectionId}
              label="I understand the different Bitcoin node types, how the P2P network operates, propagates messages, and maintains security."
            />
          </div>
        </div>
      </ModuleContent>
    </ModuleLayout>
  );
}
