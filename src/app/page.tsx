'use client';

import { useState } from 'react';
import { 
  Bitcoin, Zap, Shield, ArrowRight, Book, Code, 
  Database, Lock, Network, Wallet, Hash, Layers,
  ChevronRight, Play, Terminal, FileCode, Github, MessageSquare, Gift
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
  id: string; // Added for robust tab identification
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
    href: '/learn/bitcoin/bitcoin-fundamentals/what-is-bitcoin',
    badge: 'Start Here'
  },
  {
    icon: Wallet,
    title: 'Keys & Wallets',
    description: 'Learn how cryptographic keys secure your bitcoin and how wallets work.',
    href: '/learn/bitcoin/bitcoin-fundamentals/private-keys-wallets',
  },
  {
    icon: Network,
    title: 'The Blockchain',
    description: 'Understand how the peer-to-peer network maintains global consensus.',
    href: '/learn/bitcoin/bitcoin-fundamentals/the-blockchain',
  },
  {
    icon: Hash,
    title: 'Mining & Consensus',
    description: 'Discover how miners secure the network through computational work.',
    href: '/learn/bitcoin/bitcoin-technical/mining-consensus',
  },
  {
    icon: Layers,
    title: 'Making Transactions',
    description: 'Learn how Bitcoin transactions are constructed, signed, and verified.',
    href: '/learn/bitcoin/bitcoin-fundamentals/making-transactions',
  },
];

const lightningPath: Feature[] = [
  {
    icon: Zap,
    title: 'Lightning Fundamentals',
    description: 'Learn the basics of the Lightning Network as a Bitcoin scaling solution.',
    href: '/learn/lightning/lightning-fundamentals/what-is-lightning',
    badge: 'Start Here'
  },
  {
    icon: Terminal,
    title: 'Payment Channels',
    description: "Understanding how Lightning's payment channels enable instant transactions.",
    href: '/learn/lightning/lightning-fundamentals/payment-channels'
  },
  {
    icon: Network,
    title: 'Routing & Pathfinding',
    description: 'How payments find their way through the Lightning Network.',
    href: '/learn/lightning/lightning-routing-operations/path-finding'
  },
];

const learningPaths: LearningPath[] = [
  {
    id: 'bitcoin',
    title: 'Bitcoin Fundamentals',
    description: 'Start with the essentials of Bitcoin and blockchain technology',
    icon: Bitcoin,
    features: bitcoinPath,
  },
  {
    id: 'lightning',
    title: 'Lightning Network',
    description: 'Master the second layer that enables instant Bitcoin transactions',
    icon: Zap,
    features: lightningPath,
  },
];

export default function Home() {
  return (
    <div className="flex flex-col">
      {/* Extended background for the entire page */}
      <HoneycombBackground fullHeight={true} />
      
      {/* Enhanced Hero Section */}
      <section className="container relative pt-16 pb-20 md:pt-28 md:pb-40 overflow-hidden">
        {/* Clean, standardized background elements using only Bitcoin orange */}
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-bitcoin-orange/10 rounded-full blur-[150px] animate-float-bg"></div>
        <div className="absolute -bottom-64 left-10 w-[500px] h-[500px] bg-bitcoin-orange/8 rounded-full blur-[100px] animate-float-bg" style={{ animationDelay: '-4s' }}></div>
        <div className="absolute top-1/3 right-1/4 w-6 h-6 bg-bitcoin-orange/25 rounded-full blur-sm animate-pulse-slow"></div>
        <div className="absolute bottom-1/4 left-1/3 w-4 h-4 bg-bitcoin-orange/20 rounded-full blur-sm animate-pulse-slow delay-700"></div>

        {/* Subtle pattern overlay */}
        <div className="absolute inset-0 bg-[url('/images/hex-pattern.svg')] bg-[length:200px_200px] opacity-[0.03] dark:opacity-[0.05]"></div>

        <div className="mx-auto flex max-w-[1100px] flex-col items-center gap-10 text-center relative z-10">
          <div className="space-y-7">
            {/* Clean badge with standardized Bitcoin orange */}
            <Badge
              variant="outline"
              className="px-5 py-2.5 text-base font-medium border-bitcoin-orange/30 bg-bitcoin-orange/10 text-bitcoin-orange shadow-sm animate-fade-in-down"
            >
              <Bitcoin className="mr-2 h-4.5 w-4.5 text-bitcoin-orange animate-pulse-subtle" />
              Don't Trust, Verify
            </Badge>

            <div className="animate-fade-in">
              <h1 className="text-4xl font-bold leading-tight tracking-tight md:text-5xl lg:text-7xl">
                Welcome to
                <div className="relative mt-6 inline-block w-full">
                  <span className="whitespace-nowrap block text-bitcoin-orange"
                    style={{
                      fontFamily: "'Exo 2', sans-serif",
                      fontWeight: 700,
                      letterSpacing: '0.02em',
                    }}>
                    Satoshi Station
                  </span>
                  <div className="absolute -bottom-3 left-0 right-0 h-1 mx-auto w-[200px] bg-bitcoin-orange opacity-80 rounded-full"></div>
                </div>
              </h1>
            </div>

            <p className="mx-auto max-w-[800px] text-lg text-muted-foreground sm:text-xl md:text-2xl animate-fade-in-up font-light leading-relaxed mt-8">
              Your comprehensive resource for understanding Bitcoin and Lightning Network
              with technical precision and no marketing hype. Verify everything.
            </p>
          </div>

          {/* Clean buttons with standardized Bitcoin orange */}
          <div className="flex flex-col gap-5 sm:flex-row mt-8 animate-fade-in-up delay-300">
            <Button
              size="lg"
              className="gap-2 text-base font-medium px-8 py-6 bg-bitcoin-orange hover:bg-bitcoin-hover hover:shadow-lg hover:shadow-bitcoin-orange/20 transition-all duration-300 hover:-translate-y-1 text-white"
              asChild
            >
              <Link href="/learn/bitcoin/bitcoin-fundamentals/what-is-bitcoin">
                Start Learning
                <ArrowRight className="h-5 w-5 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
              </Link>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="gap-2 text-base border-bitcoin-orange/30 text-bitcoin-orange hover:bg-bitcoin-orange/5 hover:border-bitcoin-orange/50 px-8 py-6"
              asChild
            >
              <Link href="/verify/blocks">
                <Shield className="h-5 w-5 mr-2" />
                Verify Blocks
              </Link>
            </Button>
          </div>
        </div>
      </section>


        {/* Stats with enhanced visuals */}
        <section className="container relative z-0 -mt-16 md:-mt-24">
          <div className="mx-auto mt-24 grid max-w-5xl grid-cols-1 gap-6 sm:grid-cols-3">
          {stats.map((stat) => (
            <Card
              key={stat.label}
              className="group relative overflow-hidden border-border/40 transition-all duration-300 hover:-translate-y-2 hover:border-bitcoin-orange/40 hover:shadow-lg"
            >
              <div className="absolute inset-0 -z-10 bg-bitcoin-orange/5 opacity-0 transition-opacity group-hover:opacity-100" />
              <div className="flex flex-col items-center justify-center p-8">
                <div className="mb-5 h-14 w-14 rounded-full bg-bitcoin-orange/10 flex items-center justify-center">
                  <stat.icon className="h-8 w-8 text-bitcoin-orange" />
                </div>
                <span className="text-bitcoin-orange text-5xl font-bold">
                  {stat.number}
                </span>
                <span className="mt-2 font-medium text-foreground/90">{stat.label}</span>
                {stat.sublabel && (
                  <span className="mt-1 text-sm text-muted-foreground">{stat.sublabel}</span>
                )}
              </div>
            </Card>
          ))}
        </div>
      </section>

      {/* Enhanced Learning Paths */}
      <section className="container relative z-5 py-20 md:py-28">
        <div className="absolute inset-0 bg-background/70 pointer-events-none"></div>
        <div className="mx-auto max-w-[1200px] relative z-10">
          <div className="mb-16 text-center">
            <Badge variant="outline" className="mb-5 px-5 py-2.5 text-base font-medium border-bitcoin-orange/40 text-bitcoin-orange bg-bitcoin-orange/5">
              <Book className="mr-2 h-5 w-5 text-bitcoin-orange" />
              Learning Paths
            </Badge>
            <h2 className="mb-6 text-3xl font-bold md:text-5xl">Your Journey to Bitcoin Sovereignty</h2>
            <p className="mx-auto max-w-[800px] text-lg md:text-xl text-muted-foreground">
              Follow our structured learning paths from foundational concepts to advanced implementation.
              All content focuses on verification, not trust.
            </p>
          </div>

          <Tabs defaultValue="bitcoin" className="w-full">
            <TabsList className="relative mb-10 flex w-full justify-center gap-4 bg-transparent flex-wrap h-auto">
              {learningPaths.map((path) => (
                <TabsTrigger
                  key={path.id}
                  value={path.id}
                  className="flex items-center gap-2 rounded-lg border border-transparent bg-muted px-5 py-3 shadow-sm transition-all
                  data-[state=active]:border-bitcoin-orange/30
                  data-[state=active]:bg-gradient-to-r
                  data-[state=active]:from-bitcoin-orange/10
                  data-[state=active]:to-bitcoin-orange/5
                  data-[state=active]:text-bitcoin-orange
                  data-[state=active]:shadow-md"
                >
                  <path.icon className="h-5 w-5" />
                  <span className="font-medium">{path.title}</span>
                </TabsTrigger>
              ))}
            </TabsList>

            {learningPaths.map((path) => (
              <TabsContent 
                key={path.id} 
                value={path.id}
                className="mt-0"
              >
                <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
                  {path.features.map((feature) => (
                    <Card
                      key={feature.title}
                      className="group border-border/40 transition-all duration-300 hover:-translate-y-2 hover:border-bitcoin-orange/40 hover:shadow-lg overflow-hidden"
                    >
                      {/* Subtle gradient overlay on hover */}
                      <div className="absolute inset-0 bg-gradient-to-br from-bitcoin-orange/10 to-bitcoin-orange/5 opacity-0 transition-opacity group-hover:opacity-100 pointer-events-none"></div>

                      <div className="flex h-full flex-col justify-between gap-5 p-7 relative">
                        <div className="space-y-5">
                          <div className="flex items-center justify-between">
                            <div className="rounded-lg bg-bitcoin-orange/10 p-3 transition-all group-hover:bg-bitcoin-orange/15">
                              <feature.icon className="h-6 w-6 text-bitcoin-orange" />
                            </div>
                            {feature.badge && (
                              <Badge
                                variant={feature.badge === 'Start Here' ? 'default' : 'outline'}
                                className={`${feature.badge === 'Start Here' ? 'bg-bitcoin-orange hover:bg-bitcoin-hover' : 'border-bitcoin-orange/30 text-bitcoin-orange'} px-3 py-1 font-medium`}
                              >
                                {feature.badge}
                              </Badge>
                            )}
                          </div>
                          <div className="space-y-3">
                            <h3 className="text-xl font-semibold">{feature.title}</h3>
                            <p className="text-base leading-relaxed text-muted-foreground">
                              {feature.description}
                            </p>
                          </div>
                        </div>
                        <Button
                          variant="ghost"
                          className="-mx-2 text-foreground/80 group-hover:bg-bitcoin-orange/10 group-hover:text-bitcoin-orange transition-all duration-300"
                          asChild
                        >
                          <Link href={feature.href}>
                            Start Learning
                            <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1.5" />
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

      {/* Enhanced Interactive Demo Section */}
      <section className="py-24 relative">
        <div className="absolute inset-0 bg-background/70 backdrop-blur-sm"></div>
        <div className="container mx-auto px-4 relative">
          <div className="text-center mb-12">
            <Badge variant="outline" className="mb-5 px-5 py-2.5 text-base font-medium border-bitcoin-orange/40 bg-bitcoin-orange/5 text-bitcoin-orange">
              <Zap className="mr-2 h-5 w-5 text-bitcoin-orange" />
              Interactive Demo
            </Badge>
            <h2 className="text-4xl font-bold mb-6">Lightning Network Visualization</h2>
            <p className="text-muted-foreground text-xl max-w-3xl mx-auto mb-5">
              Visualize how the Lightning Network operates through this interactive demonstration.
              See how payments are routed across multiple channels to reach their destination.
            </p>
            <p className="text-base text-muted-foreground max-w-2xl mx-auto mb-12">
              Try clicking on nodes to see connection details, or experiment with different
              payment paths to understand how the Lightning Network achieves scalability,
              privacy, and low fees through its distributed routing system.
            </p>
          </div>
          <div className="max-w-4xl mx-auto bg-card/90 backdrop-blur-sm p-8 rounded-xl border border-bitcoin-orange/15 shadow-lg">
            <LightningNetwork />
          </div>
        </div>
      </section>

      {/* Enhanced CTA section */}
      <section className="container py-20 md:py-28">
        <div className="mx-auto max-w-6xl">
          <div className="relative rounded-2xl overflow-hidden shadow-2xl">
            {/* Official Bitcoin gradient background */}
            <div className="absolute inset-0 bg-gradient-to-r from-bitcoin-orange to-bitcoin-orange/80 opacity-95"></div>
            <div className="absolute inset-0 bg-hash-pattern opacity-10"></div>

            {/* Add animated background effect */}
            <div className="absolute -top-40 -left-40 w-80 h-80 bg-white/10 rounded-full blur-3xl animate-float-bg"></div>
            <div className="absolute -bottom-20 -right-20 w-60 h-60 bg-white/5 rounded-full blur-3xl animate-float-bg" style={{ animationDelay: '-3s', animationDuration: '13s' }}></div>

            <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-10 p-10 md:p-16">
              <div className="max-w-2xl">
                <h2 className="text-4xl font-bold text-white mb-6 font-display leading-tight">Ready to Start Your Bitcoin Journey?</h2>
                <p className="text-white/95 text-lg mb-8 leading-relaxed">
                  Begin your path to Bitcoin sovereignty with our comprehensive, verifiable resources.
                  No trust required, just pure knowledge and practical tools.
                </p>
                <div className="flex flex-wrap gap-5">
                  <Button
                    size="lg"
                    className="bg-white text-bitcoin-orange hover:bg-white border-white shadow hover:shadow-lg hover:-translate-y-1 transition-all duration-300 px-8 py-6 text-base font-medium"
                    asChild
                  >
                    <Link href="/learn/bitcoin/bitcoin-fundamentals/what-is-bitcoin">
                      Start Learning
                      <ArrowRight className="ml-2 h-5 w-5" />
                    </Link>
                  </Button>
                  <Button
                    variant="outline"
                    size="lg"
                    className="border-white text-white hover:bg-white/20 px-8 py-6 text-base font-medium"
                    asChild
                  >
                    <Link href="/verify/blocks">
                      <Shield className="mr-2 h-5 w-5" />
                      Verify Blocks
                    </Link>
                  </Button>
                </div>
              </div>
              <div className="hidden lg:flex items-center justify-center">
                <div className="relative">
                  <div className="absolute inset-0 bg-white/10 rounded-full blur-lg animate-pulse-slow"></div>
                  <Bitcoin className="h-40 w-40 text-white animate-spin-slow relative z-10" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced Key Features Section */}
      <section className="container py-20 md:py-28 relative">
        <div className="absolute inset-0 bg-background/70 backdrop-blur-sm"></div>
        <div className="mx-auto max-w-6xl relative">
          <div className="text-center mb-16">
            <Badge variant="outline" className="mb-5 px-5 py-2.5 text-base font-medium border-bitcoin-orange/40 bg-bitcoin-orange/5 text-bitcoin-orange">
              <Shield className="mr-2 h-5 w-5 text-bitcoin-orange" />
              Key Features
            </Badge>
            <h2 className="mb-6 text-3xl font-bold md:text-5xl">Built for Bitcoiners, By Bitcoiners</h2>
            <p className="mx-auto max-w-[800px] text-lg md:text-xl text-muted-foreground">
              Satoshi Station is designed with the same principles that make Bitcoin powerful:
              decentralization, verification, and sovereignty.
            </p>
          </div>

          <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3">
            <Card className="group bg-card/60 backdrop-blur-sm border-border/60 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:border-bitcoin-orange/40 hover:shadow-lg overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-bitcoin-orange/5 to-bitcoin-orange/3 opacity-0 transition-opacity group-hover:opacity-100"></div>

              <CardHeader className="relative">
                <div className="rounded-2xl bg-bitcoin-orange/10 w-16 h-16 flex items-center justify-center mb-5 transition-all group-hover:bg-bitcoin-orange/15">
                  <Shield className="h-8 w-8 text-bitcoin-orange" />
                </div>
                <CardTitle className="text-2xl mb-2">Verification-Focused</CardTitle>
                <CardDescription className="text-base">
                  Every concept comes with tools to verify claims directly against the Bitcoin network.
                </CardDescription>
              </CardHeader>
              <CardContent className="relative">
                <p className="text-muted-foreground text-base leading-relaxed">
                  Don't trust what we say—verify it yourself using our interactive tools
                  that connect directly to Bitcoin and Lightning nodes.
                </p>
              </CardContent>
            </Card>

            <Card className="group bg-card/60 backdrop-blur-sm border-border/60 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:border-bitcoin-orange/40 hover:shadow-lg overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-bitcoin-orange/5 to-bitcoin-orange/3 opacity-0 transition-opacity group-hover:opacity-100"></div>

              <CardHeader className="relative">
                <div className="rounded-2xl bg-bitcoin-orange/10 w-16 h-16 flex items-center justify-center mb-5 transition-all group-hover:bg-bitcoin-orange/15">
                  <Code className="h-8 w-8 text-bitcoin-orange" />
                </div>
                <CardTitle className="text-2xl mb-2">Technical Accuracy</CardTitle>
                <CardDescription className="text-base">
                  Precise, jargon-accurate explanations without marketing hype or oversimplification.
                </CardDescription>
              </CardHeader>
              <CardContent className="relative">
                <p className="text-muted-foreground text-base leading-relaxed">
                  We don't shy away from technical details—we embrace them, making complex
                  concepts accessible without watering them down.
                </p>
              </CardContent>
            </Card>

            <Card className="group bg-card/60 backdrop-blur-sm border-border/60 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:border-bitcoin-orange/40 hover:shadow-lg overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-bitcoin-orange/5 to-bitcoin-orange/3 opacity-0 transition-opacity group-hover:opacity-100"></div>

              <CardHeader className="relative">
                <div className="rounded-2xl bg-bitcoin-orange/10 w-16 h-16 flex items-center justify-center mb-5 transition-all group-hover:bg-bitcoin-orange/15">
                  <Network className="h-8 w-8 text-bitcoin-orange" />
                </div>
                <CardTitle className="text-2xl mb-2">Interactive Learning</CardTitle>
                <CardDescription className="text-base">
                  Learn by doing with interactive demonstrations and hands-on examples.
                </CardDescription>
              </CardHeader>
              <CardContent className="relative">
                <p className="text-muted-foreground text-base leading-relaxed">
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
