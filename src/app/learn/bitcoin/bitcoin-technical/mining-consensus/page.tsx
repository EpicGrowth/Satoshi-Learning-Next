'use client';

import React from 'react';
import { ModuleLayout } from '@/components/learn/shared/module-layout';
import { ModuleContent } from '@/components/learn/shared/module-content';
import { ModuleMetadata } from '@/components/learn/shared/module-metadata';
import type { ModuleMetadata as ModuleMetadataType } from '@/components/learn/shared/module-metadata';
import SatoshiQuote from '@/components/learn/shared/satoshi-quote';
import VerifyCheckbox from '@/components/learn/shared/verify-checkbox';
import { Card } from '@/components/ui/card';
import {
  Cpu, ExternalLink, Clock, Zap, BarChart3, Hash, FileCode, LayoutList, Workflow, GitCommit,
  Hammer, Scale, Check, Search, Infinity as InfinityIcon, ShieldAlert, CheckCircle, XCircle
} from 'lucide-react'; // Added required icons

const moduleId = 'technical';
const sectionId = 'mining-consensus';

// Placeholder metadata - will be refined
const moduleInfo: ModuleMetadataType = {
  title: 'Mining & Consensus | Bitcoin',
  description: 'Exploring the core mechanisms that secure the Bitcoin network: Proof-of-Work and Nakamoto Consensus.',
  keywords: ['bitcoin', 'mining', 'proof-of-work', 'pow', 'consensus', 'nakamoto consensus', 'hashrate', 'difficulty adjustment', 'block reward', '51% attack'],
  canonical: `/learn/bitcoin/bitcoin-technical/${sectionId}`,
  ogImage: '/images/og/bitcoin-mining-consensus.png', // Needs to be created
  lastUpdated: '2024-07-30',
  difficulty: 'Advanced',
  timeToComplete: '50 minutes',
  prerequisites: ['script-language'],
};

export default function MiningConsensusPage() {
  return (
    <ModuleLayout>
      <ModuleMetadata metadata={moduleInfo} />
      <ModuleContent
        moduleId={moduleId}
        sectionId={sectionId}
        checkpoints={1} // Assuming 1 checkpoint for now
        moduleTitle={moduleInfo.title}
        moduleDescription={moduleInfo.description}
        difficulty={moduleInfo.difficulty}
        icon={Cpu} // Updated icon to Cpu
      >
        <div className="space-y-8">
          {/* A Note from Satoshi */}
          <div className="bg-primary/5 p-6 rounded-lg border border-border/30">
            <h2 className="text-xl font-bold mb-4">A Note from Satoshi</h2>
            <div className="prose dark:prose-invert max-w-none text-muted-foreground space-y-4">
              <p>
                When I designed Bitcoin's consensus mechanism, I faced a unique challenge: how could
                a distributed system reach agreement without relying on trusted third parties? This
                was the core innovation needed to make digital currency viable.
              </p>
              <p>
                Many had attempted digital currencies before, but they all relied on a central
                authority to prevent double-spending. I needed a system where participants could
                agree on transaction history without trusting anyone. The solution came through
                proof-of-work—a mechanism that ties security to real-world energy expenditure.
              </p>
              <p>
                Proof-of-work isn't just computation for computation's sake. It's a way to make it
                prohibitively expensive to rewrite history. When miners expend electricity to solve
                computational puzzles, they create an unforgeable costliness that can't be simulated
                or shortcut. Put simply, mining transforms electrical energy into network security.
              </p>
              <p>
                What makes this system truly revolutionary is that anyone can independently verify
                the entire chain without trusting miners, developers, or any central authority. The
                consensus rules themselves become the ultimate arbiter of truth—a system where math,
                not humans, enforces the rules.
              </p>
            </div>
          </div>

          <SatoshiQuote
            quote="The proof-of-work chain is the solution to the synchronization problem, and to knowing what the globally shared view is without having to trust anyone."
            date="November 13, 2008"
            source="Bitcoin Whitepaper"
            sourceUrl="https://bitcoin.org/bitcoin.pdf"
          />

          {/* Technical Foundation */}
          <div className="bg-card p-6 rounded-lg border border-border">
            <h2 className="text-xl font-bold mb-4">Mining: Technical Foundation</h2>
            <div className="space-y-6">
              <div className="prose dark:prose-invert max-w-none mb-4">
                <p>
                  Bitcoin mining is the process through which new bitcoin are created and
                  transactions are secured and verified on the network. It involves solving complex
                  mathematical problems using computational power, which simultaneously validates
                  transactions and secures the network through proof-of-work.
                </p>
              </div>

              <div className="bg-muted p-4 rounded-lg">
                <h3 className="font-semibold text-lg mb-3 flex items-center"><Hammer className="h-5 w-5 mr-2 text-primary"/>Proof-of-Work Explained</h3>
                <p className="text-muted-foreground mb-3">
                  At its technical core, Bitcoin's proof-of-work requires miners to:
                </p>
                <ul className="list-disc pl-5 space-y-1.5 text-muted-foreground text-sm">
                  <li>
                    Find a block header hash that, when hashed with SHA-256d (double SHA-256), is numerically lower
                    than the network's current target value.
                  </li>
                  <li>
                    This target automatically adjusts every 2016 blocks (~2 weeks) to maintain a
                    ~10-minute average block interval.
                  </li>
                  <li>
                    The only known way to find a valid hash is through brute-force computation, trying billions or trillions of different nonce values per second.
                  </li>
                  <li>
                    This energy-intensive work must be performed for every new block, creating a continuous chain of computation that secures the ledger.
                  </li>
                </ul>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Card className="p-5">
                  <h4 className="font-medium mb-3 flex items-center">
                    <Hash className="h-5 w-5 text-primary mr-2" />
                    Block Structure
                  </h4>
                  <p className="text-sm text-muted-foreground mb-3">
                    Bitcoin blocks consist of two primary components: the block header and the transaction data. The mining process focuses on finding a valid block header.
                  </p>
                  <div className="bg-muted p-3 rounded-lg text-xs font-mono">
                    <pre className='overflow-x-auto'><code>{`// Block Header (80 bytes)
Version         (4 bytes)
PrevBlockHash   (32 bytes)
MerkleRoot      (32 bytes)
Timestamp       (4 bytes)
Bits (target)   (4 bytes)
Nonce           (4 bytes)

// Transaction List
Transaction 1 (coinbase)
Transaction 2
...
Transaction N`}</code></pre>
                  </div>
                </Card>

                <Card className="p-5">
                  <h4 className="font-medium mb-3 flex items-center">
                    <Workflow className="h-5 w-5 text-primary mr-2" />
                    Hash Calculation
                  </h4>
                  <p className="text-sm text-muted-foreground mb-3">
                    The mining puzzle requires calculating a double SHA-256 hash of the 80-byte block header that meets the difficulty target.
                  </p>
                  <div className="space-y-2">
                    <div className="bg-muted p-3 rounded-lg text-xs font-mono">
                      <code>SHA256(SHA256(block_header)) &lt; target</code>
                    </div>
                    <p className="text-xs text-muted-foreground">
                      The difficulty target is encoded in the "Bits" field. A lower numerical target means higher difficulty (more leading zeros required in the hash).
                    </p>
                  </div>
                </Card>
              </div>

              {/* Mining Process */}
              <div className="bg-primary/5 p-6 rounded-lg">
                <h3 className="text-lg font-medium mb-4">The Mining Process: Step-by-Step</h3>
                <div className="space-y-4">
                  {/* Step 1 */}
                  <div className="flex gap-4 p-4 bg-background rounded-lg">
                    <div className="h-8 w-8 flex-shrink-0 bg-primary/10 rounded-full flex items-center justify-center">
                      <span className="font-semibold text-primary">1</span>
                    </div>
                    <div>
                      <h4 className="font-medium mb-1">Transaction Selection & Coinbase</h4>
                      <p className="text-sm text-muted-foreground">
                        Miner selects pending transactions (mempool), usually prioritizing higher fees. Creates a special "coinbase" transaction to claim the block reward + fees.
                      </p>
                    </div>
                  </div>
                  {/* Step 2 */}
                  <div className="flex gap-4 p-4 bg-background rounded-lg">
                    <div className="h-8 w-8 flex-shrink-0 bg-primary/10 rounded-full flex items-center justify-center">
                      <span className="font-semibold text-primary">2</span>
                    </div>
                    <div>
                      <h4 className="font-medium mb-1">Merkle Root Construction</h4>
                      <p className="text-sm text-muted-foreground">
                        Hashes all selected transaction IDs together pair-wise until a single root hash (Merkle Root) is derived. This efficiently summarizes all transactions.
                      </p>
                    </div>
                  </div>
                  {/* Step 3 */}
                  <div className="flex gap-4 p-4 bg-background rounded-lg">
                    <div className="h-8 w-8 flex-shrink-0 bg-primary/10 rounded-full flex items-center justify-center">
                      <span className="font-semibold text-primary">3</span>
                    </div>
                    <div>
                      <h4 className="font-medium mb-1">Block Header Assembly</h4>
                      <p className="text-sm text-muted-foreground">
                        Constructs the 80-byte block header using: Version, Previous Block Hash, Merkle Root, Timestamp, Bits (difficulty target), and an initial Nonce (usually 0).
                      </p>
                    </div>
                  </div>
                  {/* Step 4 */}
                  <div className="flex gap-4 p-4 bg-background rounded-lg">
                    <div className="h-8 w-8 flex-shrink-0 bg-primary/10 rounded-full flex items-center justify-center">
                      <span className="font-semibold text-primary">4</span>
                    </div>
                    <div>
                      <h4 className="font-medium mb-1">Proof-of-Work Search (Hashing)</h4>
                      <p className="text-sm text-muted-foreground">
                        Repeatedly hashes the block header using SHA256d, incrementing the Nonce (and sometimes the timestamp or extraNonce in coinbase) until a hash below the target is found.
                      </p>
                    </div>
                  </div>
                  {/* Step 5 */}
                  <div className="flex gap-4 p-4 bg-background rounded-lg">
                    <div className="h-8 w-8 flex-shrink-0 bg-primary/10 rounded-full flex items-center justify-center">
                      <span className="font-semibold text-primary">5</span>
                    </div>
                    <div>
                      <h4 className="font-medium mb-1">Block Propagation</h4>
                      <p className="text-sm text-muted-foreground">
                        Once a valid hash is found, the miner broadcasts the completed block (header + transactions) to the network peers.
                      </p>
                    </div>
                  </div>
                  {/* Step 6 */}
                  <div className="flex gap-4 p-4 bg-background rounded-lg">
                    <div className="h-8 w-8 flex-shrink-0 bg-primary/10 rounded-full flex items-center justify-center">
                      <span className="font-semibold text-primary">6</span>
                    </div>
                    <div>
                      <h4 className="font-medium mb-1">Validation by Peers</h4>
                      <p className="text-sm text-muted-foreground">
                        Receiving nodes validate the block: check PoW validity, transaction validity, ensure it builds on the current longest chain, etc. If valid, they add it to their chain and propagate it further.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Consensus Mechanism */}
          <div className="bg-card p-6 rounded-lg border border-border">
            <h2 className="text-xl font-bold mb-4">Nakamoto Consensus</h2>
            <div className="space-y-6">
              <div className="prose dark:prose-invert max-w-none mb-4">
                <p>
                  Nakamoto Consensus is the specific consensus algorithm used by Bitcoin. It combines Proof-of-Work with the "longest chain rule" to achieve distributed agreement on the state of the ledger.
                </p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Card className="p-5 bg-muted">
                  <h4 className="font-medium mb-3 flex items-center">
                    <GitCommit className="h-5 w-5 text-primary mr-2" />
                    Longest Chain Rule
                  </h4>
                  <p className="text-sm text-muted-foreground">
                    Nodes always consider the blockchain with the most accumulated proof-of-work (which typically corresponds to the longest chain) as the valid, canonical history.
                  </p>
                </Card>
                <Card className="p-5 bg-muted">
                  <h4 className="font-medium mb-3 flex items-center">
                    <CheckCircle className="h-5 w-5 text-primary mr-2" />
                    Probabilistic Finality
                  </h4>
                  <p className="text-sm text-muted-foreground">
                    Transactions become exponentially harder to reverse as more blocks are built on top of them. After ~6 confirmations (blocks), a transaction is considered practically irreversible.
                  </p>
                </Card>
              </div>

              {/* Difficulty Adjustment */}
              <div className="bg-primary/5 p-6 rounded-lg">
                <h3 className="text-lg font-medium mb-4 flex items-center">
                  <Scale className="h-5 w-5 text-primary mr-2" /> Difficulty Adjustment
                </h3>
                <div className="space-y-4">
                  <p className="text-muted-foreground">
                    To maintain a consistent ~10-minute block generation time despite changes in network hashing power, Bitcoin adjusts the mining difficulty every 2016 blocks (~2 weeks).
                  </p>
                  <div className="flex flex-col md:flex-row gap-4 text-sm">
                    <div className="p-4 bg-background rounded-lg flex-1">
                      <p className="font-medium mb-1">Calculation:</p>
                      <p className="text-xs text-muted-foreground">
                        Compare actual time taken for last 2016 blocks vs. expected time (2016 * 10 min).
                      </p>
                      <code className="text-xs block mt-2 bg-muted p-1.5 rounded font-mono">new_difficulty = old_difficulty * (ExpectedTime / ActualTime)</code>
                    </div>
                    <div className="p-4 bg-background rounded-lg flex-1">
                      <p className="font-medium mb-1">Caps:</p>
                      <p className="text-xs text-muted-foreground">
                        To prevent extreme swings, the adjustment is capped at a factor of 4 (increase) or 1/4 (decrease) per period.
                      </p>
                    </div>
                  </div>
                   <p className="text-sm text-muted-foreground pt-2">
                    This mechanism ensures block production remains stable regardless of miner participation or hardware improvements.
                  </p>
                </div>
              </div>

              {/* 51% Attack */}
              <div className="bg-red-500/10 p-6 rounded-lg border border-red-500/30">
                 <h3 className="text-lg font-medium mb-4 flex items-center text-red-600 dark:text-red-400">
                  <ShieldAlert className="h-5 w-5 mr-2" /> The 51% Attack
                </h3>
                 <div className="space-y-3 text-sm text-muted-foreground">
                  <p>
                    If a single entity or colluding group controls more than 50% of the network's hashing power, they could theoretically:
                  </p>
                  <ul className="list-disc pl-5 space-y-1">
                    <li>Prevent specific transactions from confirming.</li>
                    <li>Reverse their own recent transactions (double-spend).</li>
                    <li>Prevent other miners from finding valid blocks (mining censorship).</li>
                  </ul>
                  <p className="font-medium">They CANNOT:</p>
                  <ul className="list-disc pl-5 space-y-1">
                     <li>Change the block reward rules or create coins out of thin air.</li>
                    <li>Steal coins they don't own the private keys for.</li>
                    <li>Reverse very old transactions (due to immense cumulative PoW).</li>
                  </ul>
                  <p className="text-xs pt-2">
                    While theoretically possible, acquiring &gt;50% hash power is extremely expensive and difficult for Bitcoin due to its large and distributed hash rate. Furthermore, executing such an attack might devalue the attacker's own investment in mining hardware and Bitcoin itself.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Verification Checkbox */}
          <div className="mt-6 border-t border-border/40 pt-4">
            <VerifyCheckbox
              moduleId={moduleId}
              verificationId={sectionId}
              label="I understand Proof-of-Work, the mining process, difficulty adjustment, and the principles of Nakamoto Consensus, including the 51% attack vector."
            />
          </div>
        </div>
      </ModuleContent>
    </ModuleLayout>
  );
}
