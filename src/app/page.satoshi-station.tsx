'use client';

import { useState } from 'react';
import { 
  Bitcoin, Zap, Shield, ArrowRight, Book, Code, 
  Database, Lock, Network, Wallet, Hash, Layers,
  ChevronRight, Play, Terminal, FileCode, Github, MessageSquare
} from 'lucide-react';
import type { LucideIcon } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import Link from 'next/link';
import { HoneycombBackground } from '@/components/animations/HoneycombBackground';
import { LightningNetwork } from '@/components/learn/shared/lightning-network';

type Stat = {
  number: string;
  label: string;
  sublabel?: string;
  icon?: LucideIcon;
};

type Feature = {
  icon: LucideIcon;
  title: string;
  description: string;
  href: string;
  badge?: string;
};

// Home page statistics from the screenshot
const stats: Stat[] = [
  { 
    number: '24+', 
    label: 'Learning Modules'
  },
  { 
    number: '12', 
    label: 'Interactive Demos'
  },
  { 
    number: '50+', 
    label: 'Technical Resources'
  },
];

// Bitcoin learning path features
const bitcoinPath = [
  'Understand Bitcoin fundamentals and blockchain technology',
  'Master wallet management and private key security',
  'Set up and operate your own Bitcoin full node',
  'See the advanced topics like mining and consensus'
];

// Lightning learning path features
const lightningPath = [
  'Understanding Lightning Network fundamentals and payment channels',
  'Set up and configure your own Lightning Network node',
  'Learn effective channel management and liquidity strategies',
  'Discover advanced concepts like HTLCs, routing, and more'
];

// Four main features for the "Your Bitcoin Learning Journey" section
const learningFeatures = [
  {
    icon: Book,
    title: 'Comprehensive Learning Paths',
    description: 'Follow our structured learning journey from beginner to advanced for both Bitcoin and Lightning Network.'
  },
  {
    icon: Terminal,
    title: 'Hands-on Node Setup',
    description: 'Step-by-step guides for setting up and operating both Bitcoin and Lightning nodes.'
  },
  {
    icon: Play,
    title: 'Interactive Demonstrations',
    description: 'Reinforce learning with visual demonstrations of key Bitcoin and Lightning Network concepts.'
  },
  {
    icon: Shield,
    title: 'Security Best Practices',
    description: 'Learn industry best practices for securing your Bitcoin and Lightning Network nodes.'
  }
];

// Lightning Network sections for the visualization
const lightningNetworkSections = [
  {
    title: 'Lightning Network',
    items: [
      { label: 'Payment Channels', description: 'Direct payment paths between peers' },
      { label: 'Network Topology', description: 'How nodes are connected in the network' },
      { label: 'Routing Mechanics', description: 'Lightning payment routing paths' },
      { label: 'HTLC Mechanics', description: 'How Hashed Timelock Contracts fundamentals' },
      { label: 'Channel Management', description: 'Opening, closing, and maintaining channels' }
    ]
  },
  {
    title: 'Node Operation',
    items: [
      { label: 'Node Setup', description: 'How to set up a Lightning node' },
      { label: 'Liquidity Management', description: 'Balancing inbound and outbound capacity' },
      { label: 'Channel Balancing', description: 'Optimizing channel liquidity and flow' },
      { label: 'Fee Optimization', description: 'Set competitive routing fees' },
      { label: 'Backup Strategies', description: 'Secure channel and wallet backups' },
      { label: 'Monitoring Tools', description: 'Track node performance and health' }
    ]
  }
];

// Network explorer statistics
const networkStats = [
  { label: 'Active Nodes:', value: '15,234' },
  { label: 'Channels:', value: '87,653' },
  { label: 'Network Capacity:', value: '5,794 BTC' }
];

export default function Home() {
  return (
    <div className="flex flex-col">
      {/* Extended honeycomb background for the entire page */}
      <HoneycombBackground fullHeight={true} />
      
      {/* Hero Section */}
      <section className="container relative pt-12 pb-16 md:pt-16 md:pb-24">
        <div className="mx-auto flex max-w-[980px] flex-col items-center gap-8 text-center">
          <div className="space-y-4">
            <Badge variant="outline" className="px-4 py-2 text-base font-medium border-bitcoin-orange/40 text-bitcoin-orange">
              <span className="flex items-center text-sm">
                <Bitcoin className="mr-1.5 h-3.5 w-3.5" />
                Learn • Build • Connect
              </span>
            </Badge>
            <h1 className="text-4xl font-bold leading-tight tracking-tight md:text-5xl lg:text-6xl">
              Welcome to <span className="text-bitcoin-orange">Satoshi Station</span>
            </h1>
            <p className="mx-auto max-w-[750px] text-lg text-muted-foreground sm:text-xl">
              Your comprehensive resource for mastering Bitcoin and Lightning Network
              technology through structured learning paths, interactive demonstrations, and
              practical guides.
            </p>
            <p className="mx-auto max-w-[600px] text-sm text-muted-foreground">
              Whether you're taking your first steps into Bitcoin or setting up a Lightning routing node, our
              educational platform provides the knowledge and tools you need to build real-world skills.
            </p>
          </div>

          <div className="flex flex-col gap-4 sm:flex-row">
            <Button size="lg" className="gap-2 text-base font-medium shadow-bitcoin hover:shadow-bitcoin-hover bg-bitcoin-orange hover:bg-bitcoin-hover" asChild>
              <Link href="/learn/bitcoin/bitcoin-basics/what-is-bitcoin">
                Get Started
                <ArrowRight className="h-5 w-5" />
              </Link>
            </Button>
            <Button size="lg" variant="outline" className="gap-2 text-base border-bitcoin-orange/20 text-bitcoin-orange hover:bg-bitcoin-orange/10 hover:text-bitcoin-orange hover:border-bitcoin-orange/30" asChild>
              <Link href="/explore-learning-paths">
                Explore Learning Paths
              </Link>
            </Button>
          </div>
        </div>

        {/* Stats */}
        <div className="mx-auto mt-16 grid max-w-5xl grid-cols-1 gap-4 sm:grid-cols-3">
          {stats.map((stat) => (
            <Card 
              key={stat.label} 
              className="bg-card/80 backdrop-blur-sm border-border/40 transition-all hover:border-bitcoin-orange/30"
            >
              <div className="flex flex-col items-center justify-center p-8">
                <span className="text-bitcoin-orange text-4xl font-bold mb-1">
                  {stat.number}
                </span>
                <span className="font-medium text-foreground/90">{stat.label}</span>
              </div>
            </Card>
          ))}
        </div>
      </section>

      {/* Your Bitcoin Learning Journey */}
      <section className="container relative py-16 md:py-24">
        <div className="absolute inset-0 bg-background/50 backdrop-blur-sm"></div>
        <div className="mx-auto max-w-[1200px] relative">
          <div className="mb-12 text-center">
            <Badge variant="outline" className="mb-4 px-4 py-2 text-base font-medium border-bitcoin-orange/40 text-bitcoin-orange">
              <Bitcoin className="mr-2 h-4 w-4 text-bitcoin-orange" />
              Bitcoin Learning
            </Badge>
            <h2 className="mb-4 text-3xl font-bold md:text-4xl">Your Bitcoin Learning Journey</h2>
            <p className="mx-auto max-w-[750px] text-lg text-muted-foreground">
              Satoshi Station provides everything you need to master Bitcoin and Lightning Network
              technology through structured learning paths, hands-on experiences, and expert-crafted
              educational content.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {learningFeatures.map((feature, index) => (
              <Card key={index} className="bg-card/80 backdrop-blur-sm border-border/40 transition-all hover:-translate-y-1 hover:border-bitcoin-orange/30 hover:shadow-md">
                <CardHeader className="pb-2">
                  <div className="mb-3 inline-flex rounded-md bg-muted p-2">
                    <feature.icon className="h-5 w-5 text-bitcoin-orange" />
                  </div>
                  <CardTitle className="text-lg">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Choose Your Learning Path */}
      <section className="container relative py-16 md:py-24">
        <div className="absolute inset-0 bg-background/50 backdrop-blur-sm"></div>
        <div className="mx-auto max-w-[1200px] relative">
          <div className="mb-12 text-center">
            <Badge variant="outline" className="mb-4 px-4 py-2 text-base font-medium border-bitcoin-orange/40 text-bitcoin-orange">
              <Book className="mr-2 h-4 w-4 text-bitcoin-orange" />
              Start Learning
            </Badge>
            <h2 className="mb-4 text-3xl font-bold md:text-4xl">Choose Your Learning Path</h2>
            <p className="mx-auto max-w-[750px] text-lg text-muted-foreground">
              Our structured learning paths take you from foundational concepts to advanced topics in
              Bitcoin and Lightning Network technology.
            </p>
            <p className="mx-auto max-w-[750px] text-sm text-muted-foreground mt-2">
              Each path is designed for progression and gradual mastery - start with fundamentals, then move on
              to running nodes, managing channels, and implementing security best practices.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            {/* Bitcoin Learning Path */}
            <Card className="relative overflow-hidden border-bitcoin-orange/20 bg-bitcoin-orange/5">
              <div className="absolute top-0 left-0 w-1 h-full bg-bitcoin-orange"></div>
              
              <CardHeader className="pb-2">
                <div className="flex items-center">
                  <Bitcoin className="h-5 w-5 mr-2 text-bitcoin-orange" />
                  <CardTitle>Bitcoin Learning Path</CardTitle>
                </div>
                <CardDescription>32 Steps from Beginner to Expert</CardDescription>
              </CardHeader>
              
              <CardContent className="space-y-4">
                {bitcoinPath.map((feature, index) => (
                  <div key={index} className="space-y-1">
                    <div className="flex items-start">
                      <span className="text-bitcoin-orange mr-2 pt-0.5">•</span>
                      <span className="font-medium text-sm">{feature}</span>
                    </div>
                  </div>
                ))}
              </CardContent>
              
              <CardFooter>
                <Button className="w-full bg-bitcoin-orange hover:bg-bitcoin-hover" asChild>
                  <Link href="/learn/bitcoin/bitcoin-basics/what-is-bitcoin">
                    Start Bitcoin Learning
                  </Link>
                </Button>
              </CardFooter>
            </Card>

            {/* Lightning Learning Path */}
            <Card className="relative overflow-hidden border-lightning-purple/20 bg-lightning-purple/5">
              <div className="absolute top-0 left-0 w-1 h-full bg-lightning-purple"></div>
              
              <CardHeader className="pb-2">
                <div className="flex items-center">
                  <Zap className="h-5 w-5 mr-2 text-lightning-purple" />
                  <CardTitle>Lightning Network Path</CardTitle>
                </div>
                <CardDescription>24 Modules • Go Beginner to Advanced</CardDescription>
              </CardHeader>
              
              <CardContent className="space-y-4">
                {lightningPath.map((feature, index) => (
                  <div key={index} className="space-y-1">
                    <div className="flex items-start">
                      <span className="text-lightning-purple mr-2 pt-0.5">•</span>
                      <span className="font-medium text-sm">{feature}</span>
                    </div>
                  </div>
                ))}
              </CardContent>
              
              <CardFooter>
                <Button className="w-full bg-lightning-purple hover:bg-lightning-purple/90" asChild>
                  <Link href="/learn/lightning/fundamentals">
                    Start Lightning Learning
                  </Link>
                </Button>
              </CardFooter>
            </Card>
          </div>
        </div>
      </section>

      {/* Technical Resources & Tools */}
      <section className="container relative py-16 md:py-24">
        <div className="absolute inset-0 bg-background/50 backdrop-blur-sm"></div>
        <div className="mx-auto max-w-[1200px] relative">
          <div className="mb-12 text-center">
            <Badge variant="outline" className="mb-4 px-4 py-2 text-base font-medium border-bitcoin-orange/40 text-bitcoin-orange">
              <Shield className="mr-2 h-4 w-4 text-bitcoin-orange" />
              Resources
            </Badge>
            <h2 className="mb-4 text-3xl font-bold md:text-4xl">Technical Resources & Tools</h2>
            <p className="mx-auto max-w-[750px] text-lg text-muted-foreground">
              Explore our curated collection of Bitcoin and Lightning Network resources, including
              documentation, development tools, node software, and analytical platforms.
            </p>
            <p className="mx-auto max-w-[750px] text-sm text-muted-foreground mt-2">
              From Bitcoin Core and LND documentation to block explorers and development libraries, we've
              organized the most valuable resources to support your Bitcoin journey.
            </p>
          </div>

          <div className="flex justify-center">
            <Button variant="outline" className="border-bitcoin-orange/20 text-bitcoin-orange hover:bg-bitcoin-orange/10 hover:text-bitcoin-orange hover:border-bitcoin-orange/30" asChild>
              <Link href="/resources" className="flex items-center gap-2">
                Browse Technical Resources
                <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Lightning Network Visualization */}
      <section className="py-16 relative">
        <div className="absolute inset-0 bg-background/50 backdrop-blur-sm"></div>
        <div className="container mx-auto px-4 relative">
          <div className="text-center mb-8">
            <Badge variant="outline" className="mb-4 border-lightning-purple/40 text-lightning-purple px-4 py-2 text-base font-medium">
              <Zap className="mr-2 h-4 w-4 text-lightning-purple" />
              Lightning Network
            </Badge>
            <h2 className="text-3xl font-bold mb-4">Lightning Network Visualization</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto mb-4">
              Visualize how the Lightning Network operates through this interactive demonstration.
              See how payments are routed across multiple channels to reach their destination.
            </p>
            <p className="text-sm text-muted-foreground max-w-2xl mx-auto mb-10">
              Try clicking on nodes to see connection details, or experiment with different 
              payment paths to understand how the Lightning Network achieves scalability, 
              privacy, and low fees through its distributed routing system.
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <h3 className="text-xl font-semibold mb-6 text-center">Lightning Network</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-10">
              {lightningNetworkSections.map((section, sectionIndex) => (
                <div key={sectionIndex} className="bg-card/80 backdrop-blur-sm rounded-xl p-6 border border-border/60">
                  <h3 className="text-lg font-semibold mb-4 flex items-center">
                    {sectionIndex === 0 ? (
                      <div className="flex items-center justify-center w-8 h-8 rounded-full bg-lightning-purple/10 mr-3">
                        <Zap className="h-4 w-4 text-lightning-purple" />
                      </div>
                    ) : (
                      <div className="flex items-center justify-center w-8 h-8 rounded-full bg-bitcoin-orange/10 mr-3">
                        <Terminal className="h-4 w-4 text-bitcoin-orange" />
                      </div>
                    )}
                    {section.title}
                  </h3>
                  <ul className="space-y-3">
                    {section.items.map((item, itemIndex) => (
                      <li key={itemIndex} className="flex flex-col">
                        <span className="font-medium text-sm">{item.label}</span>
                        <span className="text-xs text-muted-foreground">{item.description}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Network Explorer and Contact */}
      <section className="container py-16 md:py-24">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Get in Touch */}
          <div className="bg-card/80 backdrop-blur-sm rounded-xl p-6 border border-border/60">
            <h3 className="text-xl font-semibold mb-4">Get in Touch</h3>
            <p className="text-sm text-muted-foreground mb-6">
              Have questions about our team of Bitcoin experts or ways to help?
            </p>
            <form className="space-y-4">
              <div>
                <label className="text-sm font-medium block mb-1" htmlFor="name">Your Name</label>
                <input 
                  type="text" 
                  id="name" 
                  className="w-full px-3 py-2 rounded-md border border-border bg-background text-sm focus:border-bitcoin-orange/50 focus:ring-bitcoin-orange/50" 
                />
              </div>
              <div>
                <label className="text-sm font-medium block mb-1" htmlFor="email">Your Email</label>
                <input 
                  type="email" 
                  id="email" 
                  className="w-full px-3 py-2 rounded-md border border-border bg-background text-sm focus:border-bitcoin-orange/50 focus:ring-bitcoin-orange/50" 
                />
              </div>
              <div>
                <label className="text-sm font-medium block mb-1" htmlFor="message">Your Message</label>
                <textarea 
                  id="message" 
                  rows={4}
                  className="w-full px-3 py-2 rounded-md border border-border bg-background text-sm focus:border-bitcoin-orange/50 focus:ring-bitcoin-orange/50" 
                ></textarea>
              </div>
              <Button className="w-full bg-bitcoin-orange hover:bg-bitcoin-hover">
                Send Message
              </Button>
            </form>
          </div>

          {/* Network Explorer */}
          <div className="bg-card/80 backdrop-blur-sm rounded-xl p-6 border border-border/60">
            <h3 className="text-xl font-semibold mb-4">Network Explorer</h3>
            <p className="text-sm text-muted-foreground mb-6">
              View real-time statistics of the Bitcoin and Lightning Network.
            </p>
            <div className="space-y-4">
              <h4 className="text-lg font-medium">Network Statistics</h4>
              <ul className="space-y-2">
                {networkStats.map((stat, index) => (
                  <li key={index} className="flex justify-between items-center border-b border-border/40 pb-2">
                    <span className="text-sm">{stat.label}</span>
                    <span className="text-sm font-medium">{stat.value}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>
      
      {/* Footer information blocks */}
      <section className="container py-10 border-t border-border/40">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-sm font-semibold mb-2">Satoshi Station</h3>
            <p className="text-xs text-muted-foreground">
              Building the future of Bitcoin education since 2021. Free and open source.
            </p>
          </div>
          
          <div>
            <h3 className="text-sm font-semibold mb-2">Node Information</h3>
            <ul className="space-y-1">
              <li className="text-xs flex items-center">
                <span className="inline-block w-2 h-2 rounded-full bg-green-500 mr-2"></span>
                <span>Bitcoin Core: <span className="text-muted-foreground">Online</span></span>
              </li>
              <li className="text-xs flex items-center">
                <span className="inline-block w-2 h-2 rounded-full bg-green-500 mr-2"></span>
                <span>Lightning Network Status: <span className="text-muted-foreground">Active</span></span>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-sm font-semibold mb-2">Quick Links</h3>
            <div className="grid grid-cols-2 gap-1">
              <Link href="/learn/bitcoin" className="text-xs hover:text-bitcoin-orange">Bitcoin Tutorials</Link>
              <Link href="/learn/lightning" className="text-xs hover:text-lightning-purple">Lightning Tutorials</Link>
              <Link href="/contributors" className="text-xs hover:text-bitcoin-orange">Contributors</Link>
              <Link href="/technical-documentation" className="text-xs hover:text-lightning-purple">Technical Documentation</Link>
            </div>
          </div>
        </div>
        
        <div className="mt-10 pt-4 border-t border-border/40 flex justify-between items-center">
          <div className="text-xs text-muted-foreground">
            © 2025 Satoshi Station. All rights reserved.
          </div>
          <div className="flex items-center gap-3">
            <Link href="/github" className="text-muted-foreground hover:text-foreground">
              <Github className="h-4 w-4" />
            </Link>
            <Link href="/twitter" className="text-muted-foreground hover:text-foreground">
              <TwitterIcon className="h-4 w-4" />
            </Link>
            <Link href="/discord" className="text-muted-foreground hover:text-foreground">
              <MessageSquare className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

// Twitter icon component
function TwitterIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" {...props}>
      <path
        fill="currentColor"
        d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"
      />
    </svg>
  );
}