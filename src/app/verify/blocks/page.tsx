'use client';

import React, { useState } from 'react';
import { Bitcoin, Search, ArrowLeft, Database, Clock, Hash, CreditCard, ArrowRight, FileText, DollarSign } from 'lucide-react';
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

export default function VerifyBlocksPage() {
  const [blockInput, setBlockInput] = useState('');
  const [blockData, setBlockData] = useState<any>(null);
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
      // This will be replaced with actual API call
      const data = await fetchBlockData(blockInput);
      setBlockData(data);
    } catch (err) {
      setError('Failed to fetch block data. Please try again.');
      console.error(err);
    } finally {
      setIsLoading(false);
    }
  };

  const formatTimestamp = (timestamp: number) => {
    return new Date(timestamp * 1000).toLocaleString();
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
          <Bitcoin className="mr-1 h-3 w-3" />
          Block Explorer
        </Badge>
        <h1 className="text-4xl font-bold mb-4">Verify Bitcoin Blocks</h1>
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
          Explore the Bitcoin blockchain by searching for blocks by height or hash.
          Verify the contents and structure of any block in the chain.
        </p>
      </div>

      <Card className="mb-10">
        <CardHeader>
          <CardTitle>Search for a Block</CardTitle>
          <CardDescription>
            Enter a block height (number) or block hash to view details
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex gap-4">
            <div className="flex-grow">
              <Input
                placeholder="Block height or hash"
                value={blockInput}
                onChange={(e) => setBlockInput(e.target.value)}
                className="w-full"
              />
            </div>
            <Button onClick={handleSearch} disabled={isLoading}>
              <Search className="mr-2 h-4 w-4" />
              {isLoading ? 'Searching...' : 'Search'}
            </Button>
          </div>
          {error && <p className="text-red-500 mt-2">{error}</p>}
        </CardContent>
      </Card>

      {blockData && (
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center">
              <Database className="mr-2 h-5 w-5" />
              Block #{blockData.height}
            </CardTitle>
            <CardDescription>
              Verified from the Bitcoin blockchain
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h3 className="text-sm font-medium text-muted-foreground mb-2">Block Details</h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <Hash className="h-5 w-5 mr-2 text-muted-foreground flex-shrink-0 mt-0.5" />
                    <div>
                      <span className="block text-sm font-medium">Hash</span>
                      <span className="block text-xs text-muted-foreground break-all">{blockData.hash}</span>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <Clock className="h-5 w-5 mr-2 text-muted-foreground flex-shrink-0 mt-0.5" />
                    <div>
                      <span className="block text-sm font-medium">Timestamp</span>
                      <span className="block text-xs text-muted-foreground">{formatTimestamp(blockData.time)}</span>
                    </div>
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="text-sm font-medium text-muted-foreground mb-2">Technical Data</h3>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <span className="block text-sm font-medium">Difficulty</span>
                    <span className="block text-xs text-muted-foreground">{blockData.difficulty}</span>
                  </div>
                  <div>
                    <span className="block text-sm font-medium">Nonce</span>
                    <span className="block text-xs text-muted-foreground">{blockData.nonce}</span>
                  </div>
                  <div>
                    <span className="block text-sm font-medium">Size</span>
                    <span className="block text-xs text-muted-foreground">{blockData.size} bytes</span>
                  </div>
                  <div>
                    <span className="block text-sm font-medium">Transactions</span>
                    <span className="block text-xs text-muted-foreground">{blockData.tx_count}</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="mt-6">
              <h3 className="text-sm font-medium text-muted-foreground mb-2">Merkle Root</h3>
              <p className="text-xs text-muted-foreground break-all font-mono bg-muted p-3 rounded-md">
                {blockData.merkleroot}
              </p>
              <p className="text-xs text-muted-foreground mt-2">
                The Merkle root is a hash of all transaction hashes in this block, forming a Merkle tree.
                It allows efficient verification that a transaction is included in a block.
              </p>
            </div>
            
            {blockData.transactions && blockData.transactions.length > 0 && (
              <div className="mt-8">
                <h3 className="text-sm font-medium mb-4">Transactions in this Block</h3>
                <div className="border rounded-md overflow-hidden">
                  <table className="w-full">
                    <thead className="bg-muted">
                      <tr>
                        <th className="px-4 py-2 text-xs font-medium text-left">Transaction ID</th>
                        <th className="px-4 py-2 text-xs font-medium text-right">Size</th>
                        <th className="px-4 py-2 text-xs font-medium text-right">Value (BTC)</th>
                        <th className="px-4 py-2 text-xs font-medium text-right">Fee (sats)</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-muted">
                      {blockData.transactions.map((tx: any) => (
                        <tr key={tx.txid} className="hover:bg-muted/50">
                          <td className="px-4 py-3">
                            <div className="flex items-center">
                              <CreditCard className="h-4 w-4 mr-2 text-muted-foreground" />
                              <a 
                                href={`https://mempool.space/tx/${tx.txid}`}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-xs font-mono text-primary hover:underline truncate max-w-[180px]"
                              >
                                {tx.txid}
                              </a>
                            </div>
                          </td>
                          <td className="px-4 py-3 text-xs text-right">{tx.size} bytes</td>
                          <td className="px-4 py-3 text-xs text-right">{(tx.value / 100000000).toFixed(8)}</td>
                          <td className="px-4 py-3 text-xs text-right">{tx.fee || 'N/A'}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
                <p className="text-xs text-muted-foreground mt-2">
                  Showing {blockData.transactions.length} of {blockData.tx_count} transactions. 
                  <a 
                    href={`https://mempool.space/block/${blockData.hash}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary hover:underline"
                  >
                    View all transactions
                  </a>
                </p>
              </div>
            )}
          </CardContent>
          <CardFooter className="flex justify-between">
            <Button variant="outline" asChild>
              <Link href={`/verify/blocks/${blockData.height - 1}`}>
                Previous Block
              </Link>
            </Button>
            <Button variant="outline" asChild>
              <Link href={`/verify/blocks/${blockData.height + 1}`}>
                Next Block
              </Link>
            </Button>
          </CardFooter>
        </Card>
      )}
    </div>
  );
}
