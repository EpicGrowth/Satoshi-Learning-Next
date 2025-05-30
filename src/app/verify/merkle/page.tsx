'use client';

import React, { useState, useEffect } from 'react';
import { ArrowLeft, FileCheck, RefreshCw, Search, CheckCircle, XCircle, Info, Shield } from 'lucide-react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import Link from 'next/link';
import * as bitcoin from 'bitcoinjs-lib';

// Educational content about Merkle proofs
const educationalContent = [
  {
    title: "What is a Merkle Proof?",
    content: "A Merkle proof is a cryptographic verification method that efficiently proves a transaction is included in a block without requiring the verifier to download the entire block. It uses a binary tree structure called a Merkle tree."
  },
  {
    title: "Why Use Merkle Proofs?",
    content: "Merkle proofs allow lightweight clients (SPV wallets) to verify transactions without running a full node. They're essential for Bitcoin's scalability, enabling verification with minimal data requirements."
  },
  {
    title: "Security Considerations",
    content: "While Merkle proofs confirm a transaction is in a block, they don't verify the transaction's validity. Full nodes perform complete validation of all transactions and consensus rules."
  }
];

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
        <h1 className="text-4xl font-bold mb-4">Verify Transaction Inclusion</h1>
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
          Verify that a transaction is included in a block using Merkle proofs without needing to download the entire blockchain.
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

      <div className="mb-12 border rounded-lg p-6 bg-card text-card-foreground shadow-sm">
        <div className="flex flex-col space-y-1.5 pb-4 border-b mb-4">
          <h3 className="text-xl font-semibold">How Merkle Proofs Work</h3>
        </div>
        <div className="space-y-6">
          <p>
            Merkle proofs allow you to verify that a transaction is included in a block without downloading the entire block.
            Here's how they work:
          </p>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <div className="border rounded-md p-4 bg-background hover:shadow-md transition-shadow">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-3 mx-auto">
                <FileCheck className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-lg font-medium mb-2 text-center">Merkle Tree Structure</h3>
              <ul className="space-y-2 text-sm">
                {[
                  "All transactions in a block are arranged in a binary tree",
                  "Each leaf node is a transaction hash",
                  "Each non-leaf node is a hash of its two children",
                  "The root of the tree is the Merkle root in the block header"
                ].map((item, i) => (
                  <li key={i} className="flex items-start">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary/60 mt-1.5 mr-2 flex-shrink-0"></span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="border rounded-md p-4 bg-background hover:shadow-md transition-shadow">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-3 mx-auto">
                <Search className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-lg font-medium mb-2 text-center">Verification Process</h3>
              <ul className="space-y-2 text-sm">
                {[
                  "You have a transaction ID and want to verify it's in a block",
                  "You need the Merkle path (a set of hashes) to the root",
                  "By combining your transaction hash with the path hashes, you can compute the root",
                  "If your computed root matches the block's Merkle root, the transaction is verified"
                ].map((item, i) => (
                  <li key={i} className="flex items-start">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary/60 mt-1.5 mr-2 flex-shrink-0"></span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="border rounded-md p-4 bg-background hover:shadow-md transition-shadow">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-3 mx-auto">
                <Shield className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-lg font-medium mb-2 text-center">Security Benefits</h3>
              <ul className="space-y-2 text-sm">
                {[
                  "Efficient: Verification requires only log₂(n) hashes for n transactions",
                  "Trustless: No need to trust third parties about transaction inclusion",
                  "Lightweight: SPV clients can verify without storing the full blockchain",
                  "Tamper-proof: Changing any transaction would change the Merkle root"
                ].map((item, i) => (
                  <li key={i} className="flex items-start">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary/60 mt-1.5 mr-2 flex-shrink-0"></span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="mt-4 p-4 border rounded-md bg-muted/30">
            <p className="text-sm text-muted-foreground">
              <strong>Did you know?</strong> Merkle proofs are essential for SPV (Simplified Payment Verification) clients, which don't store the full blockchain.
              They allow lightweight verification while maintaining Bitcoin's security model. This concept was described in Satoshi Nakamoto's original Bitcoin whitepaper.
            </p>
          </div>
        </div>
      </div>

      {/* Educational content section */}
      <div className="mt-16 max-w-4xl mx-auto">
        <h2 className="text-2xl font-bold mb-6 text-center">Understanding Merkle Proofs</h2>

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
        
        {/* Technical diagram */}
        <div className="mt-12 border rounded-lg p-6 bg-muted/30">
          <h3 className="text-lg font-semibold mb-4">Merkle Tree Visualization</h3>
          
          <div className="relative overflow-hidden rounded-md p-6 bg-background border">
            <div className="flex flex-col items-center">
              <div className="text-center mb-8">
                <div className="w-20 h-20 mx-auto rounded-md bg-primary/10 flex items-center justify-center mb-2">
                  <div className="font-mono text-xs text-primary font-bold">MERKLE ROOT</div>
                </div>
                <div className="text-xs text-muted-foreground">Block Header</div>
              </div>
              
              <div className="w-full flex justify-center mb-8">
                <div className="flex space-x-16">
                  {[1, 2].map(i => (
                    <div key={i} className="text-center">
                      <div className="w-16 h-16 rounded-md bg-primary/5 flex items-center justify-center mb-2">
                        <div className="font-mono text-xs text-primary/80 font-bold">HASH {i}</div>
                      </div>
                      <div className="text-xs text-muted-foreground">Internal Node</div>
                    </div>
                  ))}
                </div>
              </div>
              
              <div className="w-full flex justify-center">
                <div className="flex flex-wrap justify-center gap-4 md:gap-8">
                  {[1, 2, 3, 4].map(i => (
                    <div key={i} className="text-center">
                      <div className={`w-14 h-14 rounded-md ${i === 2 ? 'bg-green-100 border-green-300 border-2 dark:bg-green-900/30' : 'bg-muted'} flex items-center justify-center mb-2`}>
                        <div className={`font-mono text-xs ${i === 2 ? 'text-green-600 dark:text-green-400' : 'text-muted-foreground'} font-bold`}>TX {i}</div>
                      </div>
                      <div className="text-xs text-muted-foreground">{i === 2 ? 'Your Transaction' : 'Transaction'}</div>
                    </div>
                  ))}
                </div>
              </div>
              
              {/* Connecting lines */}
              <svg className="absolute top-0 left-0 w-full h-full pointer-events-none z-0" style={{ maxHeight: '300px' }}>
                <path d="M 50% 20% L 33% 35%" stroke="currentColor" strokeWidth="1" strokeDasharray="4" className="text-muted-foreground/50" fill="none" />
                <path d="M 50% 20% L 67% 35%" stroke="currentColor" strokeWidth="1" strokeDasharray="4" className="text-muted-foreground/50" fill="none" />
                <path d="M 33% 35% L 20% 65%" stroke="currentColor" strokeWidth="1" strokeDasharray="4" className="text-muted-foreground/50" fill="none" />
                <path d="M 33% 35% L 40% 65%" stroke="currentColor" strokeWidth="1" strokeDasharray="4" className="text-muted-foreground/50" fill="none" />
                <path d="M 67% 35% L 60% 65%" stroke="currentColor" strokeWidth="1" strokeDasharray="4" className="text-muted-foreground/50" fill="none" />
                <path d="M 67% 35% L 80% 65%" stroke="currentColor" strokeWidth="1" strokeDasharray="4" className="text-muted-foreground/50" fill="none" />
                
                {/* Highlight path for the verified transaction */}
                <path d="M 50% 20% L 33% 35% L 40% 65%" stroke="#10b981" strokeWidth="2" fill="none" />
              </svg>
            </div>
          </div>
          
          <div className="mt-4 text-sm text-muted-foreground">
            <p><strong>The Merkle Path:</strong> To verify transaction TX 2, you only need the hashes along the green path, not the entire block. This makes verification extremely efficient, requiring only log₂(n) hashes for a block with n transactions.</p>
          </div>
        </div>
        
        {/* Real-world applications */}
        <div className="mt-8 rounded-lg border p-6">
          <h3 className="text-lg font-semibold mb-4">Real-World Applications</h3>
          <ul className="space-y-2 text-sm">
            <li className="flex items-start">
              <span className="w-2 h-2 rounded-full bg-primary mt-1.5 mr-2 flex-shrink-0"></span>
              <span><strong>Light Clients:</strong> Mobile wallets use Merkle proofs to verify transactions without downloading the entire blockchain.</span>
            </li>
            <li className="flex items-start">
              <span className="w-2 h-2 rounded-full bg-primary mt-1.5 mr-2 flex-shrink-0"></span>
              <span><strong>Payment Verification:</strong> Merchants can confirm payments are included in the blockchain.</span>
            </li>
            <li className="flex items-start">
              <span className="w-2 h-2 rounded-full bg-primary mt-1.5 mr-2 flex-shrink-0"></span>
              <span><strong>Cross-Chain Proofs:</strong> Some blockchain interoperability solutions use Merkle proofs to verify events across different chains.</span>
            </li>
            <li className="flex items-start">
              <span className="w-2 h-2 rounded-full bg-primary mt-1.5 mr-2 flex-shrink-0"></span>
              <span><strong>Sidechains:</strong> Merkle proofs enable efficient verification of transactions between Bitcoin and sidechains.</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
