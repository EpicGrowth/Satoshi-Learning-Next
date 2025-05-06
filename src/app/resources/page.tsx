'use client';

import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import {
  Server,
  Zap,
  FileText,
  Search,
  Code,
  Book,
  Terminal,
  Cpu,
  Layers,
  Shield,
  Plug,
  Globe,
  Link,
  ExternalLink,
  Bitcoin,
} from 'lucide-react';

// Resource type definition
interface Resource {
  icon: React.ElementType;
  title: string;
  description: string;
  links: {
    text: string;
    url: string;
    isFeatured?: boolean;
    badge?: string;
  }[];
  category: 'node' | 'lightning' | 'documentation' | 'explorer';
}

// Comprehensive resource list
const resources: Resource[] = [
  // Bitcoin Node Resources
  {
    icon: Server,
    title: 'Bitcoin Core',
    description: 'The reference implementation of Bitcoin full node software',
    category: 'node',
    links: [
      { text: 'Official Website', url: 'https://bitcoincore.org/', isFeatured: true },
      { text: 'GitHub Repository', url: 'https://github.com/bitcoin/bitcoin' },
      { text: 'Installation Guide', url: 'https://bitcoin.org/en/full-node' },
      { text: 'Download Bitcoin Core', url: 'https://bitcoin.org/en/download', badge: 'Latest' },
    ],
  },
  {
    icon: Terminal,
    title: 'Bitcoin Node Manager',
    description: 'Tools for managing and monitoring your Bitcoin node',
    category: 'node',
    links: [
      { text: 'RaspiBlitz', url: 'https://github.com/rootzoll/raspiblitz', isFeatured: true },
      { text: 'Umbrel', url: 'https://getumbrel.com/' },
      { text: 'MyNode', url: 'https://mynodebtc.com/' },
      { text: 'RaspiBolt Guide', url: 'https://raspibolt.org/' },
    ],
  },
  {
    icon: Shield,
    title: 'Node Security',
    description: 'Security tools and practices for your Bitcoin node',
    category: 'node',
    links: [
      {
        text: 'Node Hardening Guide',
        url: 'https://bitcoin.org/en/secure-your-node',
        isFeatured: true,
      },
      {
        text: 'Bitcoin Firewall Setup',
        url: 'https://github.com/bitcoin/bitcoin/blob/master/doc/tor.md',
      },
      { text: 'Physical Security', url: 'https://bitcoin.org/en/securing-your-wallet' },
    ],
  },

  // Lightning Network Resources
  {
    icon: Zap,
    title: 'Lightning Network Nodes',
    description: 'Software implementations for running Lightning Network nodes',
    category: 'lightning',
    links: [
      {
        text: 'LND (Lightning Network Daemon)',
        url: 'https://github.com/lightningnetwork/lnd',
        isFeatured: true,
      },
      { text: 'c-lightning (Core Lightning)', url: 'https://github.com/ElementsProject/lightning' },
      { text: 'Eclair', url: 'https://github.com/ACINQ/eclair' },
      {
        text: 'LND Documentation',
        url: 'https://docs.lightning.engineering/',
        badge: 'Recommended',
      },
    ],
  },
  {
    icon: Link,
    title: 'Channel Management',
    description: 'Tools for managing Lightning Network channels and liquidity',
    category: 'lightning',
    links: [
      {
        text: 'Lightning Terminal',
        url: 'https://github.com/lightninglabs/lightning-terminal',
        isFeatured: true,
      },
      { text: 'Ride the Lightning', url: 'https://github.com/Ride-The-Lightning/RTL' },
      { text: 'Balance of Satoshis', url: 'https://github.com/alexbosworth/balanceofsatoshis' },
      { text: 'LNBig Channel Management', url: 'https://lnbig.com/' },
    ],
  },
  {
    icon: Plug,
    title: 'Lightning Services',
    description: 'Lightning Network service providers and infrastructure',
    category: 'lightning',
    links: [
      { text: 'ACINQ Phoenix', url: 'https://phoenix.acinq.co/', isFeatured: true },
      { text: 'Voltage Node Hosting', url: 'https://voltage.cloud/' },
      { text: 'LN Markets', url: 'https://lnmarkets.com/' },
      { text: 'Lightning Loop', url: 'https://lightning.engineering/loop/' },
    ],
  },

  // Documentation
  {
    icon: Book,
    title: 'Bitcoin Documentation',
    description: 'Technical documentation for Bitcoin protocol and development',
    category: 'documentation',
    links: [
      {
        text: 'Bitcoin Developer Documentation',
        url: 'https://developer.bitcoin.org/',
        isFeatured: true,
      },
      { text: 'Bitcoin Improvement Proposals', url: 'https://github.com/bitcoin/bips' },
      { text: 'Mastering Bitcoin Book', url: 'https://github.com/bitcoinbook/bitcoinbook' },
      { text: 'Bitcoin Wiki', url: 'https://en.bitcoin.it/wiki/Main_Page' },
    ],
  },
  {
    icon: Layers,
    title: 'Lightning Documentation',
    description: 'Technical resources for Lightning Network development',
    category: 'documentation',
    links: [
      {
        text: 'Lightning Network Specifications',
        url: 'https://github.com/lightning/bolts',
        isFeatured: true,
      },
      { text: 'Lightning RFC', url: 'https://github.com/lightningnetwork/lightning-rfc' },
      {
        text: 'LND Developer Documentation',
        url: 'https://docs.lightning.engineering/lightning-network-tools/lnd/',
      },
      { text: 'Lightning Tutorials', url: 'https://dev.lightning.community/tutorial/' },
    ],
  },
  {
    icon: Code,
    title: 'Developer Resources',
    description: 'Libraries, SDKs, and APIs for Bitcoin and Lightning development',
    category: 'documentation',
    links: [
      {
        text: 'Bitcoin Core API',
        url: 'https://developer.bitcoin.org/reference/rpc/',
        isFeatured: true,
      },
      { text: 'LND API', url: 'https://api.lightning.community/' },
      { text: 'Bitcoin JavaScript Libraries', url: 'https://github.com/bitcoinjs/bitcoinjs-lib' },
      { text: 'Rust Bitcoin Library', url: 'https://github.com/rust-bitcoin/rust-bitcoin' },
    ],
  },

  // Block Explorers
  {
    icon: Search,
    title: 'Bitcoin Block Explorers',
    description: 'Tools for exploring the Bitcoin blockchain and transactions',
    category: 'explorer',
    links: [
      {
        text: 'Mempool.space',
        url: 'https://mempool.space/',
        isFeatured: true,
        badge: 'Recommended',
      },
      { text: 'Blockstream Explorer', url: 'https://blockstream.info/' },
      { text: 'Bitcoin Explorer', url: 'https://www.blockchain.com/explorer' },
      { text: 'OXT Bitcoin Explorer', url: 'https://oxt.me/' },
    ],
  },
  {
    icon: Globe,
    title: 'Lightning Network Explorers',
    description: 'Tools for visualizing and analyzing the Lightning Network',
    category: 'explorer',
    links: [
      { text: '1ML Lightning Network Explorer', url: 'https://1ml.com/', isFeatured: true },
      { text: 'Lightning Network Explorer', url: 'https://explorer.acinq.co/' },
      { text: 'Amboss.Space', url: 'https://amboss.space/', badge: 'New' },
      { text: 'LN Map Visualization', url: 'https://lnmainnet.gaben.win/' },
    ],
  },
  {
    icon: Cpu,
    title: 'Analytics & Statistics',
    description: 'Bitcoin and Lightning Network statistics and analytics tools',
    category: 'explorer',
    links: [
      { text: 'Glassnode', url: 'https://glassnode.com/', isFeatured: true },
      { text: 'Bitcoin Network Health Dashboard', url: 'https://dashboard.bitcoinfees.net/' },
      { text: 'Lightning Network Statistics', url: 'https://bitcoinvisuals.com/lightning' },
      { text: 'Bitcoin Optech', url: 'https://bitcoinops.org/' },
    ],
  },
];

export default function ResourcesPage() {
  // Group resources by category
  const nodeResources = resources.filter((r) => r.category === 'node');
  const lightningResources = resources.filter((r) => r.category === 'lightning');
  const documentationResources = resources.filter((r) => r.category === 'documentation');
  const explorerResources = resources.filter((r) => r.category === 'explorer');

  return (
    <div className="container mx-auto px-4 py-8 max-w-6xl">
      <div className="text-center mb-12">
        <Badge variant="outline" className="mb-4">
          <Bitcoin className="mr-1 h-3 w-3 text-bitcoin-orange" />
          Bitcoin Resources
        </Badge>
        <h1 className="text-4xl font-bold mb-2">Technical Resources</h1>
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
          Comprehensive directory of Bitcoin and Lightning Network resources
        </p>
      </div>

      {/* Bitcoin Node Resources */}
      <div className="mb-12">
        <div className="flex items-center gap-2 mb-4">
          <Server className="h-6 w-6 text-bitcoin-orange" />
          <h2 className="text-2xl font-bold">Bitcoin Node Resources</h2>
        </div>
        <p className="text-muted-foreground mb-6 max-w-3xl">
          Running your own Bitcoin node is the most sovereign way to interact with the Bitcoin
          network. It allows you to verify transactions independently, contribute to network
          security, and removes the need to trust third parties. Below you'll find software, tools,
          and guides for setting up and maintaining your own Bitcoin node.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {nodeResources.map((resource) => (
            <ResourceCard key={resource.title} resource={resource} />
          ))}
        </div>
      </div>

      <Separator className="my-8" />

      {/* Lightning Network Resources */}
      <div className="mb-12">
        <div className="flex items-center gap-2 mb-4">
          <Zap className="h-6 w-6 text-lightning-purple" />
          <h2 className="text-2xl font-bold">Lightning Network Resources</h2>
        </div>
        <p className="text-muted-foreground mb-6 max-w-3xl">
          The Lightning Network is Bitcoin's Layer 2 scaling solution that enables instant,
          high-volume micropayments with near-zero fees. Operating a Lightning node lets you route
          payments, earn fees, and participate in the emerging Lightning economy. These resources
          will help you set up your own Lightning node and manage payment channels effectively.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {lightningResources.map((resource) => (
            <ResourceCard key={resource.title} resource={resource} path="lightning" />
          ))}
        </div>
      </div>

      <Separator className="my-8" />

      {/* Documentation */}
      <div className="mb-12">
        <div className="flex items-center gap-2 mb-4">
          <FileText className="h-6 w-6 text-bitcoin-orange" />
          <h2 className="text-2xl font-bold">Documentation & Guides</h2>
        </div>
        <p className="text-muted-foreground mb-6 max-w-3xl">
          Deep technical understanding is essential for working effectively with Bitcoin and
          Lightning Network technologies. This curated collection of documentation, specifications,
          books, and development resources will help you grasp the underlying protocols and best practices.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {documentationResources.map((resource) => (
            <ResourceCard key={resource.title} resource={resource} />
          ))}
        </div>
      </div>

      <Separator className="my-8" />

      {/* Block Explorers */}
      <div className="mb-12">
        <div className="flex items-center gap-2 mb-4">
          <Search className="h-6 w-6 text-bitcoin-orange" />
          <h2 className="text-2xl font-bold">Block Explorers & Analytics</h2>
        </div>
        <p className="text-muted-foreground mb-6 max-w-3xl">
          Block explorers and network analytics tools provide visibility into the Bitcoin blockchain
          and Lightning Network. These tools let you track transactions, monitor mempool activity,
          verify payments, and analyze network statistics. Whether you need to debug a transaction or
          research network metrics, these explorers and dashboards offer valuable insights.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {explorerResources.map((resource) => (
            <ResourceCard key={resource.title} resource={resource} />
          ))}
        </div>
      </div>
    </div>
  );
}

// Resource card component
function ResourceCard({ resource, path = 'bitcoin' }: { resource: Resource; path?: 'bitcoin' | 'lightning' }) {
  const ResourceIcon = resource.icon;
  const iconColor = path === 'lightning' ? 'text-lightning-purple' : 'text-bitcoin-orange';
  const hoverColor = path === 'lightning' ? 'hover:border-lightning-purple/50' : 'hover:border-bitcoin-orange/50';

  return (
    <Card className={`h-full flex flex-col border-border/50 hover:shadow-lg transition-shadow ${hoverColor}`}>
      <CardHeader>
        <div className="flex items-center gap-2 mb-2">
          <ResourceIcon className={`h-5 w-5 ${iconColor}`} />
          <CardTitle>{resource.title}</CardTitle>
        </div>
        <CardDescription>{resource.description}</CardDescription>
      </CardHeader>
      <CardContent className="flex-grow">
        <ul className="space-y-3">
          {resource.links.map((link, index) => (
            <li key={index} className={link.isFeatured ? 'font-medium' : ''}>
              <a
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className={`flex items-center transition-colors ${
                  path === 'lightning' ? 'hover:text-lightning-purple' : 'hover:text-bitcoin-orange'
                }`}
              >
                <ExternalLink className="h-3.5 w-3.5 mr-2 flex-shrink-0" />
                <span>{link.text}</span>
                {link.badge && (
                  <Badge variant="outline" className="ml-2 text-xs py-0">
                    {link.badge}
                  </Badge>
                )}
              </a>
            </li>
          ))}
        </ul>
      </CardContent>
    </Card>
  );
}