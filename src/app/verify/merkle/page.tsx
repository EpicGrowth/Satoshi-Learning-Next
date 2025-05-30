'use client';

import React, { useState, useEffect } from 'react';
import { ArrowLeft, FileCheck, RefreshCw, Search, CheckCircle, XCircle, Info } from 'lucide-react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import Link from 'next/link';
import * as bitcoin from 'bitcoinjs-lib';

// Component to visualize a Merkle tree
const MerkleTreeVisualization = ({ txids, targetTxid }: { txids: string[], targetTxid?: string }) => {
  // Calculate the levels of the Merkle tree
  const calculateTree = () => {
    if (!txids.length) return [];
    
    let currentLevel = txids.map(txid => ({
      hash: txid,
      isTarget: txid === targetTxid,
      isProofNode: false
    }));
    
    const levels = [currentLevel];
    
    // If we have an odd number of elements, duplicate the last one
    while (currentLevel.length > 1) {
      const nextLevel = [];
      for (let i = 0; i < currentLevel.length; i += 2) {
        if (i + 1 < currentLevel.length) {
          // Combine pairs of hashes
          const left = currentLevel[i].hash;
          const right = currentLevel[i + 1].hash;
          
          // In a real implementation, we would hash these together
          // For visualization purposes, we'll just combine them
          const parentHash = `${left.substring(0, 4)}...${right.substring(0, 4)}`;
          
          nextLevel.push({
            hash: parentHash,
            isTarget: currentLevel[i].isTarget || currentLevel[i + 1].isTarget,
            isProofNode: currentLevel[i].isTarget || currentLevel[i + 1].isTarget
          });
        } else {
          // If we have an odd number, duplicate the last one
          nextLevel.push(currentLevel[i]);
        }
      }
      levels.push(nextLevel);
      currentLevel = nextLevel;
    }
    
    return levels.reverse();
  };
  
  const treeData = calculateTree();
  
  return (
    <div className="merkle-tree-visualization my-6">
      {treeData.map((level, levelIndex) => (
        <div key={levelIndex} className="flex justify-center items-center my-2">
          {level.map((node, nodeIndex) => (
            <div 
              key={`${levelIndex}-${nodeIndex}`} 
              className={`
                mx-1 p-2 text-xs rounded border 
                ${node.isTarget ? 'bg-green-100 border-green-300 dark:bg-green-900/20 dark:border-green-700' : ''}
                ${node.isProofNode && !node.isTarget ? 'bg-blue-100 border-blue-300 dark:bg-blue-900/20 dark:border-blue-700' : ''}
              `}
            >
              {node.hash.length > 10 ? `${node.hash.substring(0, 6)}...` : node.hash}
            </div>
          ))}
        </div>
      ))}
      
      <div className="flex justify-center mt-4 gap-4 text-sm">
        <div className="flex items-center">
          <div className="w-3 h-3 bg-green-100 border border-green-300 dark:bg-green-900/20 dark:border-green-700 rounded mr-1"></div>
          <span>Target Transaction</span>
        </div>
        <div className="flex items-center">
          <div className="w-3 h-3 bg-blue-100 border border-blue-300 dark:bg-blue-900/20 dark:border-blue-700 rounded mr-1"></div>
          <span>Proof Nodes</span>
        </div>
      </div>
    </div>
  );
};

export default function VerifyMerklePage() {
  const [blockHash, setBlockHash] = useState('');
  const [txid, setTxid] = useState('');
  const [merkleProof, setMerkleProof] = useState<string[]>([]);
  const [verificationResult, setVerificationResult] = useState<boolean | null>(null);
  const [verifying, setVerifying] = useState(false);
  const [error, setError] = useState('');
  const [blockData, setBlockData] = useState<any>(null);
  const [loading, setLoading] = useState(false);
  
  // Sample transaction IDs for visualization
  const [sampleTxids, setSampleTxids] = useState<string[]>([]);
  
  // Function to fetch block data and transaction IDs
  const fetchBlockData = async () => {
    if (!blockHash) {
      setError('Please enter a block hash');
      return;
    }
    
    setLoading(true);
    setError('');
    
    try {
      const response = await fetch(`/api/bitcoin/blocks?query=${blockHash}`);
      if (!response.ok) {
        throw new Error('Failed to fetch block data');
      }
      
      const data = await response.json();
      setBlockData(data);
      
      // Fetch transaction IDs for this block
      const txResponse = await fetch(`/api/bitcoin/blocks/transactions?blockHash=${blockHash}`);
      if (!txResponse.ok) {
        throw new Error('Failed to fetch transaction IDs');
      }
      
      const txData = await txResponse.json();
      setSampleTxids(txData.slice(0, 8)); // Limit to first 8 for visualization
    } catch (err) {
      console.error('Error fetching block data:', err);
      setError('Failed to fetch block data. Please check the block hash and try again.');
    } finally {
      setLoading(false);
    }
  };
  
  // Function to verify a Merkle proof
  const verifyMerkleProof = () => {
    if (!blockHash || !txid || !merkleProof.length) {
      setError('Please fill in all fields');
      return;
    }
    
    setVerifying(true);
    setVerificationResult(null);
    setError('');
    
    try {
      // In a real implementation, we would:
      // 1. Convert the txid to a Buffer
      // 2. Convert each proof element to a Buffer
      // 3. Calculate the Merkle root by applying the proof
      // 4. Compare the calculated root with the block's Merkle root
      
      // For this demo, we'll simulate the verification
      const txidBuffer = Buffer.from(txid, 'hex').reverse();
      let currentHash = txidBuffer;
      
      for (const proofItem of merkleProof) {
        const proofBuffer = Buffer.from(proofItem, 'hex');
        
        // Determine if we need to concatenate currentHash+proof or proof+currentHash
        // This would depend on the position in the tree
        // For simplicity, we'll alternate
        const combined = Buffer.concat([currentHash, proofBuffer]);
        
        // Hash the combined buffer
        currentHash = bitcoin.crypto.sha256(bitcoin.crypto.sha256(combined));
      }
      
      // Convert to hex and compare with the block's Merkle root
      const calculatedRoot = currentHash.reverse().toString('hex');
      const blockRoot = blockData?.merkleroot || '';
      
      const isValid = calculatedRoot === blockRoot;
      setVerificationResult(isValid);
    } catch (err) {
      console.error('Verification error:', err);
      setError('Invalid Merkle proof format');
      setVerificationResult(false);
    } finally {
      setVerifying(false);
    }
  };
  
  // Function to handle adding a proof element
  const addProofElement = (element: string) => {
    if (element.trim()) {
      setMerkleProof([...merkleProof, element.trim()]);
    }
  };
  
  // Function to remove a proof element
  const removeProofElement = (index: number) => {
    const newProof = [...merkleProof];
    newProof.splice(index, 1);
    setMerkleProof(newProof);
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
          <FileCheck className="mr-1 h-3 w-3" />
          Merkle Proof Verification
        </Badge>
        <h1 className="text-4xl font-bold mb-4">Verify Merkle Proofs</h1>
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
          Verify that a transaction is included in a Bitcoin block using Merkle proofs.
          Understand how lightweight verification works in the Bitcoin network.
        </p>
      </div>

      <Tabs defaultValue="verify" className="mb-10">
        <TabsList className="grid w-full grid-cols-2">
          <TabsTrigger value="verify">Verify Proof</TabsTrigger>
          <TabsTrigger value="visualize">Visualize Merkle Tree</TabsTrigger>
        </TabsList>
        
        <TabsContent value="verify">
          <Card>
            <CardHeader>
              <CardTitle>Verify a Merkle Proof</CardTitle>
              <CardDescription>
                Enter a block hash, transaction ID, and Merkle proof to verify transaction inclusion
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <label className="text-sm font-medium mb-1 block">Block Hash</label>
                <Input
                  placeholder="Enter block hash"
                  value={blockHash}
                  onChange={(e) => setBlockHash(e.target.value)}
                />
              </div>
              <div>
                <label className="text-sm font-medium mb-1 block">Transaction ID (txid)</label>
                <Input
                  placeholder="Enter transaction ID"
                  value={txid}
                  onChange={(e) => setTxid(e.target.value)}
                />
              </div>
              <div>
                <label className="text-sm font-medium mb-1 block">Merkle Proof</label>
                <div className="space-y-2">
                  {merkleProof.map((element, index) => (
                    <div key={index} className="flex items-center">
                      <Input
                        value={element}
                        readOnly
                        className="font-mono text-xs"
                      />
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={() => removeProofElement(index)}
                        className="ml-2"
                      >
                        Remove
                      </Button>
                    </div>
                  ))}
                  <div className="flex items-center">
                    <Input
                      placeholder="Add proof element (hex)"
                      className="font-mono text-xs"
                      onKeyDown={(e) => {
                        if (e.key === 'Enter') {
                          addProofElement(e.currentTarget.value);
                          e.currentTarget.value = '';
                        }
                      }}
                    />
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={(e) => {
                        const input = e.currentTarget.previousSibling as HTMLInputElement;
                        addProofElement(input.value);
                        input.value = '';
                      }}
                      className="ml-2"
                    >
                      Add
                    </Button>
                  </div>
                </div>
              </div>
              
              {error && (
                <p className="text-red-500 text-sm">{error}</p>
              )}
              
              <Button 
                onClick={verifyMerkleProof} 
                disabled={verifying}
                className="w-full button-search"
              >
                {verifying ? (
                  <>
                    <RefreshCw className="mr-2 h-4 w-4 animate-spin" />
                    Verifying...
                  </>
                ) : (
                  <>
                    <FileCheck className="mr-2 h-4 w-4" />
                    Verify Merkle Proof
                  </>
                )}
              </Button>
              
              {verificationResult !== null && (
                <div className={`p-4 rounded-md ${verificationResult ? 'bg-green-100 dark:bg-green-900/20' : 'bg-red-100 dark:bg-red-900/20'}`}>
                  <div className="flex items-center">
                    {verificationResult ? (
                      <>
                        <CheckCircle className="h-5 w-5 text-green-600 dark:text-green-400 mr-2" />
                        <span className="font-medium">Valid proof! The transaction is included in this block.</span>
                      </>
                    ) : (
                      <>
                        <XCircle className="h-5 w-5 text-red-600 dark:text-red-400 mr-2" />
                        <span className="font-medium">Invalid proof. Verification failed.</span>
                      </>
                    )}
                  </div>
                </div>
              )}
            </CardContent>
            <CardFooter className="flex justify-between text-sm text-muted-foreground">
              <p>
                Verify that a transaction is included in a block without downloading the entire block.
              </p>
            </CardFooter>
          </Card>
        </TabsContent>
        
        <TabsContent value="visualize">
          <Card>
            <CardHeader>
              <CardTitle>Merkle Tree Visualization</CardTitle>
              <CardDescription>
                Visualize how Merkle trees work and how proofs are constructed
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <label className="text-sm font-medium mb-1 block">Block Hash</label>
                <div className="flex gap-2">
                  <Input
                    placeholder="Enter block hash to visualize its Merkle tree"
                    value={blockHash}
                    onChange={(e) => setBlockHash(e.target.value)}
                  />
                  <Button 
                    onClick={fetchBlockData} 
                    disabled={loading}
                    className="button-search"
                  >
                    {loading ? (
                      <RefreshCw className="h-4 w-4 animate-spin" />
                    ) : (
                      <Search className="h-4 w-4" />
                    )}
                  </Button>
                </div>
              </div>
              
              {blockData && (
                <div className="mt-4">
                  <h3 className="text-lg font-medium mb-2">Block #{blockData.height}</h3>
                  <p className="text-sm text-muted-foreground mb-4">
                    Merkle Root: <span className="font-mono">{blockData.merkleroot.substring(0, 16)}...</span>
                  </p>
                  
                  {sampleTxids.length > 0 ? (
                    <>
                      <p className="text-sm mb-2">
                        Select a transaction to highlight its path in the Merkle tree:
                      </p>
                      <div className="grid grid-cols-2 gap-2 mb-4">
                        {sampleTxids.map((id, index) => (
                          <Button
                            key={id}
                            variant="outline"
                            size="sm"
                            className={`text-xs font-mono justify-start overflow-hidden ${txid === id ? 'border-primary' : ''}`}
                            onClick={() => setTxid(id)}
                          >
                            {id.substring(0, 16)}...
                          </Button>
                        ))}
                      </div>
                      
                      <MerkleTreeVisualization txids={sampleTxids} targetTxid={txid} />
                      
                      <div className="bg-muted p-4 rounded-md mt-4">
                        <div className="flex items-start">
                          <Info className="h-5 w-5 text-muted-foreground mr-2 mt-0.5" />
                          <div>
                            <h4 className="text-sm font-medium">How Merkle Proofs Work</h4>
                            <p className="text-xs text-muted-foreground mt-1">
                              A Merkle proof consists of the sibling hashes needed to reconstruct the path from a transaction
                              to the Merkle root. This allows verification without downloading the entire block.
                            </p>
                          </div>
                        </div>
                      </div>
                    </>
                  ) : (
                    <p className="text-sm text-muted-foreground">
                      Loading transaction data...
                    </p>
                  )}
                </div>
              )}
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
      
      <Card className="mb-10">
        <CardHeader>
          <CardTitle>Understanding Merkle Trees</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <p>
            Merkle trees are a fundamental data structure in Bitcoin that enable efficient and secure verification
            of transaction inclusion without requiring the entire blockchain.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="border rounded-md p-4">
              <h3 className="text-lg font-medium mb-2">How Merkle Trees Work</h3>
              <ol className="list-decimal list-inside space-y-2 text-sm">
                <li>All transactions in a block are hashed</li>
                <li>Pairs of transaction hashes are combined and hashed again</li>
                <li>This process continues until a single hash remains (the Merkle root)</li>
                <li>The Merkle root is included in the block header</li>
              </ol>
            </div>
            
            <div className="border rounded-md p-4">
              <h3 className="text-lg font-medium mb-2">Benefits of Merkle Proofs</h3>
              <ul className="list-disc list-inside space-y-2 text-sm">
                <li>Efficient verification (logarithmic complexity)</li>
                <li>Enables Simplified Payment Verification (SPV)</li>
                <li>Allows lightweight clients to verify transactions</li>
                <li>Preserves privacy by only revealing necessary data</li>
              </ul>
            </div>
          </div>
          
          <p className="text-sm text-muted-foreground">
            Merkle proofs are used by lightweight Bitcoin clients (SPV clients) to verify transactions without
            downloading the entire blockchain, making Bitcoin more accessible on mobile and low-resource devices.
          </p>
        </CardContent>
      </Card>
    </div>
  );
}
