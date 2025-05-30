'use client';

import React, { useState } from 'react';
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
  const [blockInput, setBlockInput] = useState('');
  const [blockData, setBlockData] = useState<any>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const [transactionsPerPage] = useState(10);
  const [transactionData, setTransactionData] = useState<any[]>([]);
  const [loadingTransactions, setLoadingTransactions] = useState(false);
  const [totalTransactions, setTotalTransactions] = useState(0);

  const handleSearch = async () => {
    if (!blockInput.trim()) {
      setError('Please enter a block height or hash');
      return;
    }

    setIsLoading(true);
    setError('');
    setBlockData(null);
    setTransactionData([]);
    setCurrentPage(1); // Reset to first page on new search

    try {
      const data = await fetchBlockData(blockInput);
      setBlockData(data);
      setCurrentPage(1);
      setTotalTransactions(data.tx_count || 0);
      await fetchTransactionPage(data.hash, 1);
    } catch (err: any) {
      console.error('Block search error:', err);
      if (err.message.includes('Blockstream API')) {
        setError('Unable to connect to the Bitcoin network. Please try again later.');
      } else if (blockInput.match(/^[0-9]+$/)) {
        setError(`Block at height ${blockInput} not found or not yet mined.`);
      } else if (blockInput.match(/^[0-9a-f]{64}$/i)) {
        setError(`Block with hash ${blockInput} not found.`);
      } else {
        setError('Invalid block identifier. Please enter a valid block height or hash.');
      }
    } finally {
      setIsLoading(false);
    }
  };
  
  // Function to fetch a page of transactions
  const fetchTransactionPage = async (blockHash: string, page: number) => {
    setLoadingTransactions(true);
    try {
      const offset = (page - 1) * transactionsPerPage;
      const response = await fetch(`/api/bitcoin/blocks/transactions?blockHash=${blockHash}&start=${offset}&limit=${transactionsPerPage}`);
      
      if (!response.ok) {
        throw new Error('Failed to fetch transactions');
      }
      
      const data = await response.json();
      setTransactionData(data);
      setCurrentPage(page);
    } catch (err) {
      console.error('Error fetching transactions:', err);
    } finally {
      setLoadingTransactions(false);
    }
  };
  
  // Handle page change
  const handlePageChange = (newPage: number) => {
    if (blockData && blockData.hash) {
      fetchTransactionPage(blockData.hash, newPage);
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
            
            {blockData && blockData.hash && (
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
                      {loadingTransactions ? (
                        <tr>
                          <td colSpan={4} className="px-4 py-8 text-center text-muted-foreground">
                            <div className="flex justify-center items-center">
                              <Search className="h-4 w-4 mr-2 animate-spin" />
                              Loading transactions...
                            </div>
                          </td>
                        </tr>
                      ) : transactionData.length > 0 ? (
                        transactionData.map((tx: any) => (
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
                        ))
                      ) : (
                        <tr>
                          <td colSpan={4} className="px-4 py-8 text-center text-muted-foreground">
                            No transactions found
                          </td>
                        </tr>
                      )}
                    </tbody>
                  </table>
                </div>
                
                {/* Pagination controls */}
                {totalTransactions > 0 && (
                  <div className="flex justify-between items-center mt-4">
                    <p className="text-xs text-muted-foreground">
                      Showing {((currentPage - 1) * transactionsPerPage) + 1}-
                      {Math.min(currentPage * transactionsPerPage, totalTransactions)} of {totalTransactions} transactions
                    </p>
                    
                    <div className="flex items-center space-x-2">
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => handlePageChange(currentPage - 1)}
                        disabled={currentPage === 1 || loadingTransactions}
                      >
                        <ChevronLeft className="h-4 w-4" />
                      </Button>
                      
                      <span className="text-xs">
                        Page {currentPage} of {Math.ceil(totalTransactions / transactionsPerPage)}
                      </span>
                      
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => handlePageChange(currentPage + 1)}
                        disabled={currentPage >= Math.ceil(totalTransactions / transactionsPerPage) || loadingTransactions}
                      >
                        <ChevronRight className="h-4 w-4" />
                      </Button>
                    </div>
                    
                    <a 
                      href={`https://mempool.space/block/${blockData.hash}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs text-primary hover:underline"
                    >
                      View on Mempool.space
                    </a>
                  </div>
                )}
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
