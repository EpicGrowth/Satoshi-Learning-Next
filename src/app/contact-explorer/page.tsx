import { Metadata } from 'next';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Search, ExternalLink, Github, Database, Globe, User } from 'lucide-react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

export const metadata: Metadata = {
  title: 'Explorer - Satoshi Station',
  description: 'Explore the Bitcoin ecosystem with our curated directory of blockchain explorers, tools, and resources.',
};

export default function ExplorerPage() {
  return (
    <div className="container py-12 max-w-6xl">
      <div className="space-y-6">
        <div className="space-y-2">
          <h1 className="text-3xl font-bold tracking-tight md:text-4xl">
            Bitcoin Explorer Resources
          </h1>
          <p className="text-lg text-muted-foreground">
            Curated directory of Bitcoin explorers, tools, and resources to help you verify and interact with the Bitcoin network.
          </p>
        </div>

        <div className="relative">
          <div className="absolute inset-0 flex items-center">
            <div className="w-full border-t"></div>
          </div>
          <div className="relative flex justify-center">
            <div className="bg-background px-4">
              <Badge variant="brand" className="text-sm">Verify Don't Trust</Badge>
            </div>
          </div>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {/* Block Explorers */}
          <Card variant="brand" className="overflow-hidden">
            <CardHeader className="pb-3">
              <div className="flex items-center space-x-2">
                <Search className="h-5 w-5 text-[var(--primary-light)]" />
                <CardTitle>Block Explorers</CardTitle>
              </div>
              <CardDescription>
                Visualize and search the Bitcoin blockchain
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-3">
              <ExplorerLink 
                title="Mempool.space" 
                description="Open source block explorer with mempool visualization"
                href="https://mempool.space"
              />
              <ExplorerLink 
                title="Blockchain.com Explorer" 
                description="Popular block explorer with detailed transaction info"
                href="https://www.blockchain.com/explorer"
              />
              <ExplorerLink 
                title="OXT" 
                description="Advanced blockchain analytics with privacy focus"
                href="https://oxt.me"
              />
            </CardContent>
            <CardFooter className="pt-3 border-t">
              <Button variant="ghost" className="w-full" asChild>
                <a 
                  href="https://en.bitcoin.it/wiki/Block_chain_browser" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center justify-center"
                >
                  <span>View More</span>
                  <ExternalLink className="ml-2 h-4 w-4" />
                </a>
              </Button>
            </CardFooter>
          </Card>

          {/* Network Statistics */}
          <Card variant="brand" className="overflow-hidden">
            <CardHeader className="pb-3">
              <div className="flex items-center space-x-2">
                <Database className="h-5 w-5 text-[var(--primary-light)]" />
                <CardTitle>Network Statistics</CardTitle>
              </div>
              <CardDescription>
                Monitor the Bitcoin network's health and metrics
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-3">
              <ExplorerLink 
                title="Clark Moody Bitcoin Dashboard" 
                description="Comprehensive dashboard of Bitcoin metrics"
                href="https://bitcoin.clarkmoody.com/dashboard/"
              />
              <ExplorerLink 
                title="Bitcoin Visuals" 
                description="Visual charts of Bitcoin network statistics"
                href="https://bitcoinvisuals.com/"
              />
              <ExplorerLink 
                title="Coin Metrics" 
                description="In-depth analytics and market data"
                href="https://coinmetrics.io/charts/"
              />
            </CardContent>
            <CardFooter className="pt-3 border-t">
              <Button variant="ghost" className="w-full" asChild>
                <a 
                  href="https://bitcoin.org/en/resources" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center justify-center"
                >
                  <span>View More</span>
                  <ExternalLink className="ml-2 h-4 w-4" />
                </a>
              </Button>
            </CardFooter>
          </Card>

          {/* Developer Tools */}
          <Card variant="brand" className="overflow-hidden">
            <CardHeader className="pb-3">
              <div className="flex items-center space-x-2">
                <Github className="h-5 w-5 text-[var(--primary-light)]" />
                <CardTitle>Developer Tools</CardTitle>
              </div>
              <CardDescription>
                Resources for Bitcoin developers and researchers
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-3">
              <ExplorerLink 
                title="Bitcoin Core" 
                description="Reference implementation of Bitcoin"
                href="https://github.com/bitcoin/bitcoin"
              />
              <ExplorerLink 
                title="Bitcoin Optech" 
                description="Technical resources and best practices"
                href="https://bitcoinops.org"
              />
              <ExplorerLink 
                title="Bitcoin Dev Kit" 
                description="Libraries and tools for Bitcoin applications"
                href="https://bitcoindevkit.org"
              />
            </CardContent>
            <CardFooter className="pt-3 border-t">
              <Button variant="ghost" className="w-full" asChild>
                <a 
                  href="https://developer.bitcoin.org" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center justify-center"
                >
                  <span>View More</span>
                  <ExternalLink className="ml-2 h-4 w-4" />
                </a>
              </Button>
            </CardFooter>
          </Card>

          {/* Lightning Network */}
          <Card variant="brand" className="overflow-hidden">
            <CardHeader className="pb-3">
              <div className="flex items-center space-x-2">
                <svg className="h-5 w-5 text-[var(--primary-light)]" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M13 3L4 14H12L11 21L20 10H12L13 3Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                <CardTitle>Lightning Network</CardTitle>
              </div>
              <CardDescription>
                Explore the Lightning Network's growth and capacity
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-3">
              <ExplorerLink 
                title="1ML" 
                description="Lightning Network search and analysis"
                href="https://1ml.com"
              />
              <ExplorerLink 
                title="Lightning Network Explorer" 
                description="Visual explorer of Lightning channels and nodes"
                href="https://explorer.acinq.co"
              />
              <ExplorerLink 
                title="Amboss Space" 
                description="Lightning channel management and network explorer"
                href="https://amboss.space"
              />
            </CardContent>
            <CardFooter className="pt-3 border-t">
              <Button variant="ghost" className="w-full" asChild>
                <a 
                  href="https://www.lopp.net/lightning-information.html" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center justify-center"
                >
                  <span>View More</span>
                  <ExternalLink className="ml-2 h-4 w-4" />
                </a>
              </Button>
            </CardFooter>
          </Card>

          {/* Educational Resources */}
          <Card variant="brand" className="overflow-hidden">
            <CardHeader className="pb-3">
              <div className="flex items-center space-x-2">
                <Globe className="h-5 w-5 text-[var(--primary-light)]" />
                <CardTitle>Educational Resources</CardTitle>
              </div>
              <CardDescription>
                Learn more about Bitcoin and blockchain technology
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-3">
              <ExplorerLink 
                title="Bitcoin.org" 
                description="Official Bitcoin educational resources"
                href="https://bitcoin.org/en/resources"
              />
              <ExplorerLink 
                title="Jameson Lopp's Resources" 
                description="Curated list of Bitcoin resources"
                href="https://www.lopp.net/bitcoin-information.html"
              />
              <ExplorerLink 
                title="Bitcoin Wiki" 
                description="Community-maintained Bitcoin knowledge base"
                href="https://en.bitcoin.it/wiki/Main_Page"
              />
            </CardContent>
            <CardFooter className="pt-3 border-t">
              <Button variant="ghost" className="w-full" asChild>
                <Link href="/resources" className="flex items-center justify-center">
                  <span>View Our Resources</span>
                  <ExternalLink className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </CardFooter>
          </Card>

          {/* Community */}
          <Card variant="brand" className="overflow-hidden">
            <CardHeader className="pb-3">
              <div className="flex items-center space-x-2">
                <User className="h-5 w-5 text-[var(--primary-light)]" />
                <CardTitle>Community Resources</CardTitle>
              </div>
              <CardDescription>
                Connect with the Bitcoin community
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-3">
              <ExplorerLink 
                title="Bitcoin Talk Forums" 
                description="Original Bitcoin forum started by Satoshi"
                href="https://bitcointalk.org"
              />
              <ExplorerLink 
                title="Reddit r/Bitcoin" 
                description="Bitcoin discussions and news"
                href="https://www.reddit.com/r/Bitcoin/"
              />
              <ExplorerLink 
                title="Bitcoin Stack Exchange" 
                description="Q&A for Bitcoin crypto-currency enthusiasts"
                href="https://bitcoin.stackexchange.com"
              />
            </CardContent>
            <CardFooter className="pt-3 border-t">
              <Button variant="ghost" className="w-full" asChild>
                <a 
                  href="https://bitcoin.org/en/community" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center justify-center"
                >
                  <span>View More</span>
                  <ExternalLink className="ml-2 h-4 w-4" />
                </a>
              </Button>
            </CardFooter>
          </Card>
        </div>

        <div className="bg-muted/40 p-6 rounded-lg border mt-12">
          <div className="flex flex-col md:flex-row gap-6 items-center">
            <div className="flex-1 space-y-2">
              <h3 className="text-xl font-semibold">Want to suggest a resource?</h3>
              <p className="text-muted-foreground">We're always looking to expand our explorer resources. If you have a suggestion, please let us know.</p>
            </div>
            <Button className="md:flex-shrink-0" asChild>
              <a href="https://github.com/satoshi-station/website/issues/new" target="_blank" rel="noopener noreferrer">
                Suggest Resource
              </a>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

// Explorer link component
function ExplorerLink({ title, description, href }: { title: string; description: string; href: string }) {
  return (
    <a 
      href={href}
      target="_blank"
      rel="noopener noreferrer" 
      className="block p-3 rounded-md transition-colors hover:bg-[var(--primary-light)]/5"
    >
      <div className="flex justify-between items-center">
        <div>
          <h3 className="font-medium">{title}</h3>
          <p className="text-sm text-muted-foreground">{description}</p>
        </div>
        <ExternalLink className="h-4 w-4 text-muted-foreground" />
      </div>
    </a>
  );
}
