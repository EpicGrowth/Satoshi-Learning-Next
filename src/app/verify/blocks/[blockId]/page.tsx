'use client';

import React, { useState, useEffect } from 'react';
import { useParams, useRouter } from 'next/navigation';
import { Bitcoin, Search, ArrowLeft, Database, Clock, Hash, CreditCard, ArrowRight, FileText, DollarSign, ChevronLeft, ChevronRight, Info, XCircle, Shield } from 'lucide-react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
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
const baseEducationalContent = [
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

const genesisBlockContent = {
  title: "The Genesis Block",
  content: "The Genesis Block is the very first block mined on the Bitcoin blockchain. It was created by Satoshi Nakamoto and contains a hidden message in its coinbase transaction: 'The Times 03/Jan/2009 Chancellor on brink of second bailout for banks'."
};

export default function BlockDetailPage() {
  const params = useParams();
  const router = useRouter();
  const blockId = params.blockId as string;
  
  const [blockData, setBlockData] = useState<any>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const [transactionsPerPage] = useState(10);
  const [transactionData, setTransactionData] = useState<any[]>([]);
  const [loadingTransactions, setLoadingTransactions] = useState(false);
  const [totalTransactions, setTotalTransactions] = useState(0);
  const [educationalContent, setEducationalContent] = useState(baseEducationalContent);

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
  
  // Handle page change for transactions
  const handlePageChange = (newPage: number) => {
    if (blockData && blockData.hash) {
      fetchTransactionPage(blockData.hash, newPage);
    }
  };

  // Navigate to previous block
  const goToPreviousBlock = () => {
    // Special case for block 1 - go to genesis block
    if (blockData.height === 1) {
      router.push('/verify/blocks/0');
    } 
    // Don't allow going below genesis block
    else if (blockData.height > 0) {
      router.push(`/verify/blocks/${blockData.height - 1}`);
    }
  };

  // Navigate to next block
  const goToNextBlock = () => {
    router.push(`/verify/blocks/${blockData.height + 1}`);
  };

  const formatTimestamp = (timestamp: number) => {
    if (typeof timestamp !== 'number' || isNaN(timestamp)) {
      return 'Invalid Date';
    }
    // Assuming timestamp is a Unix timestamp in seconds
    return new Date(timestamp * 1000).toLocaleString();
  };

  // Load block data on component mount or when blockId changes
  useEffect(() => {
    const loadBlockData = async () => {
      setIsLoading(true);
      setError('');
      // Reset educational content to base for each load
      setEducationalContent(baseEducationalContent);
      
      try {
        const data = await fetchBlockData(blockId);
        setBlockData(data);
        setTotalTransactions(data.tx_count || 0);

        if (data.height === 0) {
          setEducationalContent(prevContent => [genesisBlockContent, ...prevContent]);
        }

        await fetchTransactionPage(data.hash, 1);
      } catch (err: any) {
        console.error('Block fetch error:', err);
        if (err.message.includes('Blockstream API')) {
          setError('Unable to connect to the Bitcoin network. Please try again later.');
        } else if (blockId.match(/^[0-9]+$/)) {
          setError(`Block at height ${blockId} not found or not yet mined.`);
        } else if (blockId.match(/^[0-9a-f]{64}$/i)) {
          setError(`Block with hash ${blockId} not found.`);
        } else {
          setError('Invalid block identifier. Please enter a valid block height or hash.');
        }
      } finally {
        setIsLoading(false);
      }
    };

    loadBlockData();
  }, [blockId]);

  return (
    <div className="container py-10">
      <div className="flex items-center mb-6">
        <Button variant="ghost" asChild className="mr-4">
          <Link href="/verify/blocks">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Block Explorer
          </Link>
        </Button>
      </div>

      <div className="text-center mb-10">
        <Badge variant="outline" className="mb-4">
          <Database className="mr-1 h-3 w-3" />
          Block Explorer
        </Badge>
        <h1 className="text-4xl font-bold mb-4">Block Details</h1>
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
          Exploring {blockId.match(/^[0-9]+$/) ? `block #${blockId}` : 'block'} from the Bitcoin blockchain
        </p>
      </div>

      {isLoading ? (
        <Card className="p-8 text-center">
          <div className="flex justify-center items-center">
            <Search className="h-6 w-6 mr-2 animate-spin" />
            <p>Loading block data...</p>
          </div>
        </Card>
      ) : error ? (
        <Card className="p-8">
          <div className="text-red-500 p-4 bg-red-50 dark:bg-red-900/10 rounded border border-red-200 dark:border-red-800/30 flex items-center">
            <XCircle className="h-6 w-6 mr-4 flex-shrink-0" />
            <div>
              <p className="font-medium">{error}</p>
              <p className="text-sm mt-1">
                {blockId.match(/^[0-9]+$/) && parseInt(blockId) > 0 ? 
                  "This block may not have been mined yet, or there might be a connection issue." : 
                  "Please check the block identifier and try again."}
              </p>
              <Button variant="outline" className="mt-4" asChild>
                <Link href="/verify/blocks">
                  Return to Block Explorer
                </Link>
              </Button>
            </div>
          </div>
        </Card>
      ) : blockData && (
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center">
              <Database className="mr-2 h-5 w-5" />
              {blockData.height === 0 ? `Genesis Block (Block #0)` : `Block #${blockData.height}`}
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
              {blockData.height === 0 && blockData.tx_count === 1 && (
                <p className="text-xs text-muted-foreground mt-2">
                  Note: For the Genesis Block, which contains only one transaction (the coinbase transaction),
                  the Merkle Root is identical to the hash of this single transaction.
                </p>
              )}
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
            <Button 
              variant="outline" 
              onClick={goToPreviousBlock}
              disabled={blockData.height === 0} // Disable for genesis block
              className="flex items-center"
            >
              <ChevronLeft className="mr-1 h-4 w-4" />
              {blockData.height === 1 ? "Previous Block (Genesis Block #0)" : "Previous Block"}
            </Button>
            <Button 
              variant="outline" 
              onClick={goToNextBlock}
              className="flex items-center"
            >
              Next Block
              <ChevronRight className="ml-1 h-4 w-4" />
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
      </div>
    </div>
  );
}
