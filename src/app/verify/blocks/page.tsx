'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Bitcoin, Search, ArrowLeft, Database, Clock, Hash, CreditCard, ArrowRight, FileText, DollarSign, ChevronLeft, ChevronRight, Info, XCircle, Shield } from 'lucide-react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import Link from 'next/link';

// Fetch block data from our secure API route
const fetchBlockData = async (blockQuery: string) => {
  const response = await fetch(`/api/bitcoin/blocks?query=${encodeURIComponent(blockQuery)}`);
  
  if (!response.ok) {
    const errorData = await response.json();
    throw new Error(errorData.error || 'Failed to fetch block data');
  }
  
  return response.json();
};

// Educational content about Bitcoin blocks
const educationalContent = [
  {
    title: "What is a Bitcoin Block?",
    content: "A Bitcoin block is a container of transactions that is added to the blockchain approximately every 10 minutes. Each block includes a reference to the previous block, creating a chain that forms the immutable ledger."
  },
  {
    title: "Block Headers",
    content: "The block header contains metadata about the block, including the previous block hash, merkle root (a hash of all transactions), timestamp, difficulty target, and nonce used for mining."
  },
  {
    title: "Block Explorers",
    content: "Block explorers allow you to inspect the blockchain by searching for blocks, transactions, or addresses. They provide transparency by making blockchain data accessible to everyone."
  }
];

export default function VerifyBlocksPage() {
  const router = useRouter();
  const [blockInput, setBlockInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

  const handleSearch = async () => {
    if (!blockInput.trim()) {
      setError('Please enter a block height or hash');
      return;
    }

    setIsLoading(true);
    setError('');
    
    try {
      // Validate the input format before navigating
      if (blockInput.match(/^[0-9]+$/) || blockInput.match(/^[0-9a-f]{64}$/i)) {
        // Navigate to the dynamic route
        router.push(`/verify/blocks/${blockInput}`);
      } else {
        setError('Invalid block identifier. Please enter a valid block height or hash.');
      }
    } catch (err: any) {
      console.error('Block search error:', err);
      setError('An error occurred. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };
  


  return (
    <div className="container py-10">
      <div className="flex items-center mb-6">
        <Button variant="ghost" asChild className="mr-4">
          <Link href="/verify">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Verification Tools
          </Link>
        </Button>
      </div>

      <div className="text-center mb-10">
        <Badge variant="outline" className="mb-4">
          <Database className="mr-1 h-3 w-3" />
          Block Explorer
        </Badge>
        <h1 className="text-4xl font-bold mb-4">Explore the Bitcoin Blockchain</h1>
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
          Search for blocks by height or hash to explore transactions, verify data, and understand the Bitcoin network.
        </p>
      </div>

      <Card className="mb-10 border-primary/10 hover:border-primary/20 transition-colors duration-300">
        <CardHeader>
          <CardTitle className="flex items-center">
            <Search className="h-5 w-5 mr-2 text-primary" />
            Search for a Block
          </CardTitle>
          <CardDescription>
            Enter a block height (number) or block hash to explore
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex flex-col sm:flex-row gap-4">
            <div className="flex-1 relative">
              <Input
                placeholder="Enter block height or hash"
                value={blockInput}
                onChange={(e) => setBlockInput(e.target.value)}
                className="w-full pr-10"
              />
              <div className="absolute right-3 top-1/2 transform -translate-y-1/2 text-muted-foreground text-xs">
                {blockInput && blockInput.length > 30 ? 'Hash' : blockInput && !isNaN(Number(blockInput)) ? 'Height' : ''}
              </div>
            </div>
            <Button 
              onClick={handleSearch} 
              disabled={isLoading}
              className="button-search bg-primary hover:bg-primary/90"
            >
              {isLoading ? (
                <>
                  <Search className="mr-2 h-4 w-4 animate-spin" />
                  Searching...
                </>
              ) : (
                <>
                  <Search className="mr-2 h-4 w-4" />
                  Search
                </>
              )}
            </Button>
          </div>
          {error && (
            <div className="text-red-500 mt-2 p-2 bg-red-50 dark:bg-red-900/10 rounded border border-red-200 dark:border-red-800/30 flex items-center">
              <XCircle className="h-4 w-4 mr-2 flex-shrink-0" />
              <p className="text-sm">{error}</p>
            </div>
          )}
          <div className="mt-4 text-xs text-muted-foreground">
            <p className="flex items-center">
              <Info className="h-3 w-3 mr-1" />
              Try searching for block height <Button variant="link" className="h-auto p-0 text-xs" onClick={() => setBlockInput("780000")}>780000</Button> or a recent block hash
            </p>
          </div>
        </CardContent>
      </Card>

      {/* Block Explorer Examples */}
      <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card className="hover:border-primary/20 transition-colors duration-300">
          <CardHeader>
            <CardTitle className="text-lg">Recent Blocks</CardTitle>
            <CardDescription>Explore recently mined blocks</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-2">
              {[840000, 839990, 839980].map((height) => (
                <Button 
                  key={height} 
                  variant="outline" 
                  className="w-full justify-start" 
                  onClick={() => router.push(`/verify/blocks/${height}`)}
                >
                  <Database className="mr-2 h-4 w-4" />
                  Block #{height}
                </Button>
              ))}
            </div>
          </CardContent>
        </Card>

        <Card className="hover:border-primary/20 transition-colors duration-300">
          <CardHeader>
            <CardTitle className="text-lg">Historical Milestones</CardTitle>
            <CardDescription>Explore significant blocks in Bitcoin history</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-2">
              <Button 
                variant="outline" 
                className="w-full justify-start" 
                onClick={() => router.push(`/verify/blocks/0`)}
              >
                <Shield className="mr-2 h-4 w-4" />
                Genesis Block (0)
              </Button>
              <Button 
                variant="outline" 
                className="w-full justify-start" 
                onClick={() => router.push(`/verify/blocks/210000`)}
              >
                <Bitcoin className="mr-2 h-4 w-4" />
                First Halving (210,000)
              </Button>
              <Button 
                variant="outline" 
                className="w-full justify-start" 
                onClick={() => router.push(`/verify/blocks/500000`)}
              >
                <FileText className="mr-2 h-4 w-4" />
                SegWit Activation (500,000)
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
      
      {/* Educational content section */}
      <div className="mt-16 max-w-4xl mx-auto">
        <h2 className="text-2xl font-bold mb-6 text-center">Understanding Bitcoin Blocks</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {educationalContent.map((item, index) => (
            <div 
              key={index} 
              className="border rounded-lg p-6 bg-card hover:shadow-md transition-shadow duration-300 hover:border-primary/30"
            >
              <h3 className="text-lg font-semibold mb-3 text-primary">{item.title}</h3>
              <p className="text-sm text-muted-foreground">{item.content}</p>
            </div>
          ))}
        </div>
        
        {/* Block structure visualization */}
        <div className="mt-12 border rounded-lg p-6 bg-muted/30">
          <h3 className="text-lg font-semibold mb-4">Anatomy of a Bitcoin Block</h3>
          
          <div className="relative overflow-x-auto rounded-md">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-background p-6 rounded-md border">
                <h4 className="font-medium mb-4 text-center">Block Header (80 bytes)</h4>
                <div className="space-y-3">
                  {[
                    { name: "Version", desc: "Protocol version", bytes: "4 bytes" },
                    { name: "Previous Block Hash", desc: "Reference to parent block", bytes: "32 bytes" },
                    { name: "Merkle Root", desc: "Hash of all transactions", bytes: "32 bytes" },
                    { name: "Timestamp", desc: "Block creation time", bytes: "4 bytes" },
                    { name: "Difficulty Target", desc: "Proof-of-work difficulty", bytes: "4 bytes" },
                    { name: "Nonce", desc: "Counter for mining", bytes: "4 bytes" }
                  ].map((field, i) => (
                    <div key={i} className="flex justify-between items-center p-2 border-b last:border-0 text-sm">
                      <div>
                        <div className="font-medium">{field.name}</div>
                        <div className="text-xs text-muted-foreground">{field.desc}</div>
                      </div>
                      <div className="text-xs bg-muted px-2 py-1 rounded">{field.bytes}</div>
                    </div>
                  ))}
                </div>
              </div>
              
              <div className="bg-background p-6 rounded-md border">
                <h4 className="font-medium mb-4 text-center">Block Body (Variable Size)</h4>
                <div className="space-y-3">
                  <div className="p-3 border rounded-md">
                    <div className="font-medium">Transaction Count</div>
                    <div className="text-xs text-muted-foreground">Number of transactions in the block</div>
                  </div>
                  
                  <div className="p-3 border rounded-md bg-primary/5">
                    <div className="font-medium">Coinbase Transaction</div>
                    <div className="text-xs text-muted-foreground">First transaction that creates new bitcoins and collects fees</div>
                  </div>
                  
                  <div className="p-3 border rounded-md">
                    <div className="font-medium">Transaction 2</div>
                    <div className="text-xs text-muted-foreground">Regular transaction with inputs and outputs</div>
                  </div>
                  
                  <div className="p-3 border rounded-md">
                    <div className="font-medium">Transaction 3</div>
                    <div className="text-xs text-muted-foreground">Regular transaction with inputs and outputs</div>
                  </div>
                  
                  <div className="text-center text-muted-foreground text-sm py-2">...</div>
                  
                  <div className="p-3 border rounded-md">
                    <div className="font-medium">Transaction N</div>
                    <div className="text-xs text-muted-foreground">Last transaction in the block</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="mt-4 text-sm text-muted-foreground">
            <p><strong>Did you know?</strong> The Bitcoin block size is limited to help maintain decentralization. While the original limit was 1MB, the introduction of Segregated Witness (SegWit) in 2017 effectively increased the capacity without changing the base block size.</p>
          </div>
        </div>
        
        {/* Real-world applications */}
        <div className="mt-8 rounded-lg border p-6">
          <h3 className="text-lg font-semibold mb-4">Why Block Explorers Matter</h3>
          <ul className="space-y-2 text-sm">
            <li className="flex items-start">
              <span className="w-2 h-2 rounded-full bg-primary mt-1.5 mr-2 flex-shrink-0"></span>
              <span><strong>Transparency:</strong> Block explorers make the Bitcoin blockchain accessible to everyone, promoting transparency and trust.</span>
            </li>
            <li className="flex items-start">
              <span className="w-2 h-2 rounded-full bg-primary mt-1.5 mr-2 flex-shrink-0"></span>
              <span><strong>Transaction Verification:</strong> Users can verify that their transactions have been included in a block and confirm the number of confirmations.</span>
            </li>
            <li className="flex items-start">
              <span className="w-2 h-2 rounded-full bg-primary mt-1.5 mr-2 flex-shrink-0"></span>
              <span><strong>Network Analysis:</strong> Researchers and analysts can study transaction patterns, block times, and other metrics to understand network health.</span>
            </li>
            <li className="flex items-start">
              <span className="w-2 h-2 rounded-full bg-primary mt-1.5 mr-2 flex-shrink-0"></span>
              <span><strong>Educational Tool:</strong> Block explorers help newcomers understand how Bitcoin works by visualizing its underlying structure.</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
