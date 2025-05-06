'use client';

import { useState } from 'react';
import { 
  Bitcoin, Zap, Shield, ArrowRight, Book, Code, 
  Database, Lock, Network, Wallet, Hash, Layers,
  ChevronRight, Play, Terminal, FileCode, Gift
} from 'lucide-react';
import type { LucideIcon } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import Link from 'next/link';
import { BlockchainBackground } from '@/components/animations/BlockchainBackground';
import { LightningNetwork } from '@/components/learn/shared/lightning-network';

type Stat = {
  number: string;
  label: string;
  sublabel?: string;
  icon: LucideIcon;
};

type Feature = {
  icon: LucideIcon;
  title: string;
  description: string;
  href: string;
  badge?: string;
};

type LearningPath = {
  title: string;
  description: string;
  icon: LucideIcon;
  features: Feature[];
};

const stats: Stat[] = [
  { 
    number: '21M', 
    label: 'Maximum Supply',
    sublabel: 'Fixed, Predictable Issuance',
    icon: Bitcoin 
  },
  { 
    number: '10', 
    label: 'Minutes Block Time',
    sublabel: 'Secure Confirmation',
    icon: Database 
  },
  { 
    number: '<1s', 
    label: 'Lightning Speed',
    sublabel: 'Instant Payments',
    icon: Zap 
  },
];

const bitcoinPath: Feature[] = [
  {
    icon: Book,
    title: 'Bitcoin Basics',
    description: 'Start your journey by understanding what Bitcoin is and why it matters.',
    href: '/learn/bitcoin/bitcoin-basics/what-is-bitcoin',
    badge: 'Start Here'
  },
  {
    icon: Wallet,
    title: 'Keys & Wallets',
    description: 'Learn how cryptographic keys secure your bitcoin and how wallets work.',
    href: '/learn/bitcoin/bitcoin-basics/private-keys-wallets',
  },
  {
    icon: Network,
    title: 'Bitcoin Network',
    description: 'Understand how the peer-to-peer network maintains global consensus.',
    href: '/learn/bitcoin/bitcoin-basics/bitcoin-network',
  },
  {
    icon: Hash,
    title: 'Mining & Proof-of-Work',
    description: 'Discover how miners secure the network through computational work.',
    href: '/learn/bitcoin/mining',
  },
  {
    icon: Layers,
    title: 'Transactions',
    description: 'Learn how Bitcoin transactions are constructed, signed, and verified.',
    href: '/learn/bitcoin/transactions',
  },
  {
    icon: Lock,
    title: 'Security',
    description: 'Best practices for securing your Bitcoin and avoiding common pitfalls.',
    href: '/learn/bitcoin/security',
  },
];

const lightningPath: Feature[] = [
  {
    icon: Zap,
    title: 'Lightning Fundamentals',
    description: 'Learn the basics of the Lightning Network as a Bitcoin scaling solution.',
    href: '/learn/lightning/fundamentals',
    badge: 'Start Here'
  },
  {
    icon: Terminal,
    title: 'Payment Channels',
    description: 'Understanding how Lightning's payment channels enable instant transactions.',
    href: '/learn/lightning/channels',
  },
  {
    icon: Network,
    title: 'Routing & Pathfinding',
    description: 'How payments find their way through the Lightning Network.',
    href: '/learn/lightning/routing',
  },
  {
    icon: Code,
    title: 'Implementations',
    description: 'Learn about LND, c-lightning, Eclair and other Lightning implementations.',
    href: '/learn/lightning/implementations',
  },
  {
    icon: FileCode,
    title: 'Applications',
    description: 'Discover real-world applications built on the Lightning Network.',
    href: '/learn/lightning/applications',
  },
  {
    icon: Gift,
    title: 'LNURL & Lightning Address',
    description: 'Simplifying the Lightning user experience with modern standards.',
    href: '/learn/lightning/lnurl',
  },
];

const developerPath: Feature[] = [
  {
    icon: Code,
    title: 'Development Basics',
    description: 'Get started with Bitcoin development and essential concepts.',
    href: '/learn/development/basics',
    badge: 'Start Here'
  },
  {
    icon: Terminal,
    title: 'Bitcoin RPC',
    description: 'Learn to interact with Bitcoin Core using the RPC interface.',
    href: '/learn/development/bitcoin-rpc',
  },
  {
    icon: Network,
    title: 'Lightning Development',
    description: 'Building applications that leverage the Lightning Network.',
    href: '/learn/development/lightning-dev',
  },
  {
    icon: Layers,
    title: 'Smart Contracts',
    description: 'Explore Bitcoin's native smart contracting capabilities.',
    href: '/learn/development/bitcoin-scripts',
  },
  {
    icon: Lock,
    title: 'Security Best Practices',
    description: 'Essential security considerations for Bitcoin developers.',
    href: '/learn/development/security',
  },
  {
    icon: Wallet,
    title: 'Wallet Development',
    description: 'Learn how to build Bitcoin and Lightning wallets.',
    href: '/learn/development/wallet-dev',
    badge: 'Coming Soon'
  },
];

const learningPaths: LearningPath[] = [
  {
    title: 'Bitcoin Fundamentals',
    description: 'Start with the essentials of Bitcoin and blockchain technology',
    icon: Bitcoin,
    features: bitcoinPath,
  },
  {
    title: 'Lightning Network',
    description: 'Master the second layer that enables instant Bitcoin transactions',
    icon: Zap,
    features: lightningPath,
  },
  {
    title: 'Developer Resources',
    description: 'Build applications using Bitcoin and Lightning Network protocols',
    icon: Code,
    features: developerPath,
  },
];

export default function Home() {
  return (
    <div className="flex flex-col">
      {/* Extended background for the entire page */}
      <BlockchainBackground fullHeight={true} />
      
      {/* Hero Section */}
      <section className="container relative pt-12 pb-16 md:pt-16 md:pb-24">
        <div className="mx-auto flex max-w-[980px] flex-col items-center gap-8 text-center">
          <div className="space-y-4">
            <Badge variant="outline" className="px-4 py-2 text-base font-medium border-bitcoin-orange/40 text-bitcoin-orange">
              <Bitcoin className="mr-2 h-4 w-4 text-bitcoin-orange" />
              Don't Trust, Verify
            </Badge>
            <h1 className="text-4xl font-bold leading-tight tracking-tight md:text-5xl lg:text-6xl">
              Learn
              <span className="bg-gradient-to-br from-bitcoin-orange to-bitcoin-yellow bg-clip-text px-3 text-transparent">
                Bitcoin
              </span>
              From First Principles
            </h1>
            <p className="mx-auto max-w-[750px] text-lg text-muted-foreground sm:text-xl">
              Your comprehensive resource for understanding Bitcoin and Lightning Network 
              with technical precision and no marketing hype. Verify everything.
            </p>
          </div>

          <div className="flex flex-col gap-4 sm:flex-row">
            <Button size="lg" className="gap-2 text-base font-medium shadow-bitcoin hover:shadow-bitcoin-hover bg-bitcoin-orange hover:bg-bitcoin-hover" asChild>
              <Link href="/learn/bitcoin/bitcoin-basics/what-is-bitcoin">
                Start Learning
                <ArrowRight className="h-5 w-5" />
              </Link>
            </Button>
            <Button size="lg" variant="outline" className="gap-2 text-base border-bitcoin-orange/20 text-bitcoin-orange hover:bg-bitcoin-orange/10 hover:text-bitcoin-orange hover:border-bitcoin-orange/30" asChild>
              <Link href="/verify/blocks">
                <Shield className="h-5 w-5" />
                Verify Blocks
              </Link>
            </Button>
          </div>
        </div>

        {/* Stats */}
        <div className="mx-auto mt-16 grid max-w-5xl grid-cols-1 gap-4 sm:grid-cols-3">
          {stats.map((stat) => (
            <Card 
              key={stat.label} 
              className="group relative overflow-hidden border-border/40 transition-all hover:-translate-y-1 hover:border-bitcoin-orange/30 hover:shadow-md"
            >
              <div className="absolute inset-0 -z-10 bg-gradient-to-br from-bitcoin-orange/5 to-bitcoin-yellow/5 opacity-0 transition-opacity group-hover:opacity-100" />
              <div className="flex flex-col items-center justify-center p-8">
                <stat.icon className="mb-4 h-8 w-8 text-bitcoin-orange" />
                <span className="bg-gradient-to-r from-bitcoin-orange to-bitcoin-yellow bg-clip-text text-4xl font-bold text-transparent">
                  {stat.number}
                </span>
                <span className="font-medium text-foreground/90">{stat.label}</span>
                {stat.sublabel && (
                  <span className="mt-1 text-sm text-muted-foreground">{stat.sublabel}</span>
                )}
              </div>
            </Card>
          ))}
        </div>
      </section>

      {/* Learning Paths */}
      <section className="container relative py-16 md:py-24">
        <div className="absolute inset-0 bg-background/50 backdrop-blur-sm"></div>
        <div className="mx-auto max-w-[1200px] relative">
          <div className="mb-12 text-center">
            <Badge variant="outline" className="mb-4 px-4 py-2 text-base font-medium border-bitcoin-orange/40 text-bitcoin-orange">
              <Book className="mr-2 h-4 w-4 text-bitcoin-orange" />
              Learning Paths
            </Badge>
            <h2 className="mb-4 text-3xl font-bold md:text-4xl">Your Journey to Bitcoin Sovereignty</h2>
            <p className="mx-auto max-w-[750px] text-lg text-muted-foreground">
              Follow our structured learning paths from foundational concepts to advanced implementation.
              All content focuses on verification, not trust.
            </p>
          </div>

          <Tabs defaultValue="bitcoin" className="w-full">
            <TabsList className="mb-8 flex w-full justify-center gap-2 bg-transparent">
              {learningPaths.map((path) => (
                <TabsTrigger
                  key={path.title}
                  value={path.title.toLowerCase().split(' ')[0]}
                  className="flex items-center gap-2 rounded-md border border-transparent bg-muted px-4 py-2 data-[state=active]:border-bitcoin-orange/20 data-[state=active]:bg-bitcoin-orange/10 data-[state=active]:text-bitcoin-orange"
                >
                  <path.icon className="h-4 w-4" />
                  {path.title}
                </TabsTrigger>
              ))}
            </TabsList>

            {learningPaths.map((path) => (
              <TabsContent 
                key={path.title} 
                value={path.title.toLowerCase().split(' ')[0]}
                className="mt-0 animate-in fade-in-50 duration-300"
              >
                <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                  {path.features.map((feature) => (
                    <Card 
                      key={feature.title}
                      className="group border-border/40 transition-all duration-300 hover:-translate-y-1 hover:border-bitcoin-orange/30 hover:shadow-md"
                    >
                      <div className="flex h-full flex-col justify-between gap-4 p-6">
                        <div className="space-y-4">
                          <div className="flex items-center justify-between">
                            <div className="rounded-lg bg-bitcoin-orange/10 p-2.5">
                              <feature.icon className="h-5 w-5 text-bitcoin-orange" />
                            </div>
                            {feature.badge && (
                              <Badge 
                                variant={feature.badge === 'Start Here' ? 'default' : 'outline'}
                                className={`${feature.badge === 'Start Here' ? 'bg-bitcoin-orange hover:bg-bitcoin-hover' : ''} px-2.5 py-0.5`}
                              >
                                {feature.badge}
                              </Badge>
                            )}
                          </div>
                          <div className="space-y-2">
                            <h3 className="text-xl font-semibold">{feature.title}</h3>
                            <p className="text-sm leading-relaxed text-muted-foreground">
                              {feature.description}
                            </p>
                          </div>
                        </div>
                        <Button 
                          variant="ghost" 
                          className="-mx-2 group-hover:bg-bitcoin-orange/10 group-hover:text-bitcoin-orange" 
                          asChild
                        >
                          <Link href={feature.href}>
                            Start Learning
                            <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                          </Link>
                        </Button>
                      </div>
                    </Card>
                  ))}
                </div>
              </TabsContent>
            ))}
          </Tabs>
        </div>
      </section>

      {/* Interactive Demo Section */}
      <section className="py-16 relative">
        <div className="absolute inset-0 bg-background/50 backdrop-blur-sm"></div>
        <div className="container mx-auto px-4 relative">
          <div className="text-center mb-8">
            <Badge variant="outline" className="mb-4 border-[#e44c41]/20 text-[#e44c41]">
              <Zap className="mr-1 h-3 w-3" />
              Interactive Demo
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
          <div className="max-w-4xl mx-auto bg-card/90 backdrop-blur-sm p-6 rounded-xl border border-[#e44c41]/10 shadow-lg">
            <LightningNetwork />
          </div>
        </div>
      </section>

      {/* CTA section */}
      <section className="container py-16 md:py-24">
        <div className="mx-auto max-w-6xl">
          <div className="relative rounded-2xl overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-bitcoin-orange to-bitcoin-yellow opacity-90"></div>
            <div className="absolute inset-0 bg-hash-pattern opacity-5"></div>
            
            <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-8 p-8 md:p-12">
              <div className="max-w-2xl">
                <h2 className="text-3xl font-bold text-white mb-4">Ready to Start Your Bitcoin Journey?</h2>
                <p className="text-white/90 mb-6">
                  Begin your path to Bitcoin sovereignty with our comprehensive, verifiable resources.
                  No trust required, just pure knowledge and practical tools.
                </p>
                <div className="flex flex-wrap gap-4">
                  <Button size="lg" className="bg-white text-bitcoin-orange hover:bg-white/90 border-white" asChild>
                    <Link href="/learn/bitcoin/bitcoin-basics/what-is-bitcoin">
                      Start Learning
                      <ArrowRight className="ml-2 h-5 w-5" />
                    </Link>
                  </Button>
                  <Button variant="outline" size="lg" className="border-white text-white hover:bg-white/10" asChild>
                    <Link href="/verify/blocks">
                      <Shield className="mr-2 h-5 w-5" />
                      Verify Blocks
                    </Link>
                  </Button>
                </div>
              </div>
              <div className="hidden lg:block">
                <Bitcoin className="h-32 w-32 text-white animate-spin-slow" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Key Features Section */}
      <section className="container py-16 md:py-24 relative">
        <div className="absolute inset-0 bg-background/70 backdrop-blur-sm"></div>
        <div className="mx-auto max-w-6xl relative">
          <div className="text-center mb-12">
            <Badge variant="outline" className="mb-4 px-4 py-2 text-base font-medium border-bitcoin-orange/40 text-bitcoin-orange">
              <Shield className="mr-2 h-4 w-4 text-bitcoin-orange" />
              Key Features
            </Badge>
            <h2 className="mb-4 text-3xl font-bold md:text-4xl">Built for Bitcoiners, By Bitcoiners</h2>
            <p className="mx-auto max-w-[750px] text-lg text-muted-foreground">
              Satoshi Station is designed with the same principles that make Bitcoin powerful:
              decentralization, verification, and sovereignty.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            <Card className="bg-card/60 backdrop-blur-sm border-border/60 transition-all duration-300 hover:-translate-y-1 hover:border-bitcoin-orange/30 hover:shadow-md">
              <CardHeader>
                <div className="rounded-lg bg-bitcoin-orange/10 w-12 h-12 flex items-center justify-center mb-4">
                  <Shield className="h-6 w-6 text-bitcoin-orange" />
                </div>
                <CardTitle>Verification-Focused</CardTitle>
                <CardDescription>
                  Every concept comes with tools to verify claims directly against the Bitcoin network.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Don't trust what we say—verify it yourself using our interactive tools
                  that connect directly to Bitcoin and Lightning nodes.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-card/60 backdrop-blur-sm border-border/60 transition-all duration-300 hover:-translate-y-1 hover:border-bitcoin-orange/30 hover:shadow-md">
              <CardHeader>
                <div className="rounded-lg bg-bitcoin-orange/10 w-12 h-12 flex items-center justify-center mb-4">
                  <Code className="h-6 w-6 text-bitcoin-orange" />
                </div>
                <CardTitle>Technical Accuracy</CardTitle>
                <CardDescription>
                  Precise, jargon-accurate explanations without marketing hype or oversimplification.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  We don't shy away from technical details—we embrace them, making complex
                  concepts accessible without watering them down.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-card/60 backdrop-blur-sm border-border/60 transition-all duration-300 hover:-translate-y-1 hover:border-bitcoin-orange/30 hover:shadow-md">
              <CardHeader>
                <div className="rounded-lg bg-bitcoin-orange/10 w-12 h-12 flex items-center justify-center mb-4">
                  <Network className="h-6 w-6 text-bitcoin-orange" />
                </div>
                <CardTitle>Interactive Learning</CardTitle>
                <CardDescription>
                  Learn by doing with interactive demonstrations and hands-on examples.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Our interactive tools let you experiment with Bitcoin and Lightning concepts
                  in a safe environment, reinforcing understanding through practical application.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
}
