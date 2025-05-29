'use client';

import { ModuleLayout } from '@/components/learn/shared/module-layout';
import { ModuleContent } from '@/components/learn/shared/module-content';
import { Card } from '@/components/ui/card';
import { Database, Clock, Code, Cpu, Key, Hash, HardDrive } from 'lucide-react';
import VerifyCheckbox from '@/components/learn/shared/verify-checkbox';
import SatoshiQuote from '@/components/learn/shared/satoshi-quote';

export default function TheBlockchainPage() {
  const moduleId = 'fundamentals';
  const sectionId = 'the-blockchain';

  return (
    <ModuleLayout>
      <ModuleContent
        moduleId={moduleId}
        sectionId={sectionId}
        checkpoints={4} // Estimated based on content sections
        moduleTitle="The Blockchain"
        moduleDescription="Understanding the foundational technology behind Bitcoin"
        difficulty="Beginner"
        icon={Database}
      >
        <div className="space-y-8">
          <SatoshiQuote
            quote="The blockchain is an open ledger that can replace the functions of the middleman entirely and still ensure that the transactions are secure and reliable."
            source="Satoshi Nakamoto"
            date="February 2009"
          />

          <div className="bg-card p-6 rounded-lg border border-border">
            <h4 className="font-medium mb-4 text-lg">A Note from Satoshi</h4>
            <div className="p-5 bg-muted/50 rounded-lg border border-border text-sm text-muted-foreground italic leading-relaxed">
              <p>
                "The blockchain was the real innovation I introduced with Bitcoin. Before this, we
                lacked a reliable way to prevent double spending in a decentralized digital cash
                system. The traditional solution always required a trusted central authority, which
                created a single point of failure and control.
              </p>
              <p className="mt-3">
                What if we could create a ledger that everyone agrees on, but no single entity
                controls? This was the breakthrough. By chaining blocks of transactions together
                with cryptographic proof-of-work, we created a data structure that makes altering
                past records prohibitively expensive. The longest chain represents consensus, and
                any attempt to rewrite history requires more computational power than the honest
                network.
              </p>
              <p className="mt-3">
                The elegance of this solution is that it maintains the security properties of a
                centralized system while eliminating its most significant drawbacks: censorship,
                control, and required trust in a third party. The blockchain allows a network of
                participants to maintain a decentralized 'truth' about transaction history that can
                be independently verified by anyone."
              </p>
            </div>
          </div>

          <div className="bg-card p-6 rounded-lg border border-border">
            <h4 className="font-medium mb-4 text-lg">What is a Blockchain?</h4>
            <div className="space-y-4">
              <p className="text-muted-foreground leading-relaxed">
                A blockchain is a distributed, append-only database structure that records
                transactions in chronologically ordered blocks, secured by cryptography and a
                consensus mechanism. It creates a tamper-evident record of transactions without
                requiring a central authority.
              </p>

              <div className="p-3 sm:p-4 md:p-5 bg-background rounded-lg border border-border mobile-text-container">
                <h5 className="font-medium mb-3">Core Components</h5>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3 sm:gap-4 mobile-text-container">
                  <div className="p-4 bg-muted/50 rounded-lg flex items-start">
                    <Database className="h-6 w-6 text-primary mr-3 mt-1 flex-shrink-0" />
                    <div>
                      <h6 className="font-medium mb-1">Distributed Ledger</h6>
                      <p className="text-sm text-muted-foreground">
                        Unlike traditional centralized databases, a blockchain is replicated across
                        thousands of nodes. Each participant maintains a complete copy of the
                        ledger, creating a network of redundancy and eliminating single points of
                        failure.
                      </p>
                    </div>
                  </div>

                  <div className="p-4 bg-muted/50 rounded-lg flex items-start">
                    <Hash className="h-6 w-6 text-primary mr-3 mt-1 flex-shrink-0" />
                    <div>
                      <h6 className="font-medium mb-1">Cryptographic Linking</h6>
                      <p className="text-sm text-muted-foreground">
                        Each block contains a cryptographic hash of the previous block, creating an
                        unbreakable chain. Altering any block would change its hash, making all
                        subsequent blocks invalid and immediately detectable by the network.
                      </p>
                    </div>
                  </div>

                  <div className="p-4 bg-muted/50 rounded-lg flex items-start">
                    <Cpu className="h-6 w-6 text-primary mr-3 mt-1 flex-shrink-0" />
                    <div>
                      <h6 className="font-medium mb-1">Consensus Mechanism</h6>
                      <p className="text-sm text-muted-foreground">
                        Bitcoin uses proof-of-work consensus, where miners compete to solve a
                        computationally difficult puzzle. This creates an objective, verifiable way
                        for the network to agree on the valid chain without requiring trust or
                        central coordination.
                      </p>
                    </div>
                  </div>

                  <div className="p-4 bg-muted/50 rounded-lg flex items-start">
                    <Key className="h-6 w-6 text-primary mr-3 mt-1 flex-shrink-0" />
                    <div>
                      <h6 className="font-medium mb-1">Public-Key Cryptography</h6>
                      <p className="text-sm text-muted-foreground">
                        Transactions are secured using digital signatures generated with private
                        keys. Anyone can verify a signature is valid using the corresponding public
                        key, but only the private key holder can create valid signatures.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-card p-6 rounded-lg border border-border">
            <h4 className="font-medium mb-4 text-lg">The Anatomy of a Block</h4>
            <div className="space-y-4">
              <p className="text-muted-foreground leading-relaxed">
                A Bitcoin block is a precisely structured container of data. Understanding this
                structure reveals how the blockchain achieves its remarkable properties of security,
                decentralization, and immutability.
              </p>

              <div className="relative overflow-hidden bg-gradient-to-b from-background to-muted/30 rounded-lg border border-border p-6">
                <h5 className="font-medium mb-4">Block Header (80 bytes)</h5>
                <div className="space-y-3">
                  <div className="p-3 bg-background border border-border rounded-lg">
                    <div className="flex items-start mb-2">
                      <div className="flex h-6 w-6 rounded-full bg-primary/10 text-primary items-center justify-center text-xs mr-2 flex-shrink-0 mt-0.5">
                        1
                      </div>
                      <div>
                        <h6 className="font-medium">Version (4 bytes)</h6>
                        <p className="text-sm text-muted-foreground">
                          Software version that created the block, used for protocol upgrades.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="p-3 bg-background border border-border rounded-lg">
                    <div className="flex items-start mb-2">
                      <div className="flex h-6 w-6 rounded-full bg-primary/10 text-primary items-center justify-center text-xs mr-2 flex-shrink-0 mt-0.5">
                        2
                      </div>
                      <div>
                        <h6 className="font-medium">Previous Block Hash (32 bytes)</h6>
                        <p className="text-sm text-muted-foreground">
                          SHA-256 hash of the previous block's header, linking blocks into a chain.
                          Changing any block requires changing all subsequent blocks.
                        </p>
                        <pre className="mt-2 p-2 bg-muted text-xs rounded-md overflow-x-auto">
                          000000000000000000055f81e553b89bdb36cf4e1fb2331ec2db3b03c72c4e5a
                        </pre>
                      </div>
                    </div>
                  </div>

                  <div className="p-3 bg-background border border-border rounded-lg">
                    <div className="flex items-start mb-2">
                      <div className="flex h-6 w-6 rounded-full bg-primary/10 text-primary items-center justify-center text-xs mr-2 flex-shrink-0 mt-0.5">
                        3
                      </div>
                      <div>
                        <h6 className="font-medium">Merkle Root (32 bytes)</h6>
                        <p className="text-sm text-muted-foreground">
                          Hash of the root of the Merkle tree containing all transactions in the
                          block. Efficiently verifies any transaction's inclusion without
                          downloading all transactions.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="p-3 bg-background border border-border rounded-lg">
                    <div className="flex items-start mb-2">
                      <div className="flex h-6 w-6 rounded-full bg-primary/10 text-primary items-center justify-center text-xs mr-2 flex-shrink-0 mt-0.5">
                        4
                      </div>
                      <div>
                        <h6 className="font-medium">Timestamp (4 bytes)</h6>
                        <p className="text-sm text-muted-foreground">
                          Block creation time in Unix time (seconds since January 1, 1970). Used to
                          adjust difficulty and verify the block is in correct sequence.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="p-3 bg-background border border-border rounded-lg">
                    <div className="flex items-start mb-2">
                      <div className="flex h-6 w-6 rounded-full bg-primary/10 text-primary items-center justify-center text-xs mr-2 flex-shrink-0 mt-0.5">
                        5
                      </div>
                      <div>
                        <h6 className="font-medium">Difficulty Target (4 bytes)</h6>
                        <p className="text-sm text-muted-foreground">
                          Compact representation of the proof-of-work difficulty target. The hash of
                          a valid block must be below this target.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="p-3 bg-background border border-border rounded-lg">
                    <div className="flex items-start mb-2">
                      <div className="flex h-6 w-6 rounded-full bg-primary/10 text-primary items-center justify-center text-xs mr-2 flex-shrink-0 mt-0.5">
                        6
                      </div>
                      <div>
                        <h6 className="font-medium">Nonce (4 bytes)</h6>
                        <p className="text-sm text-muted-foreground">
                          Arbitrary number miners change to get different block hashes when mining,
                          looking for one below the difficulty target.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="mt-6">
                  <h5 className="font-medium mb-4">Block Body</h5>
                  <div className="p-3 bg-background border border-border rounded-lg">
                    <div className="flex items-start">
                      <HardDrive className="h-6 w-6 text-primary mr-3 mt-1 flex-shrink-0" />
                      <div>
                        <h6 className="font-medium">Transaction Data</h6>
                        <p className="text-sm text-muted-foreground">
                          List of all transactions included in the block, starting with the coinbase
                          transaction that rewards the miner with newly created bitcoins and
                          transaction fees. Current blocks typically contain 2,000-3,000
                          transactions.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="p-4 bg-amber-50 dark:bg-amber-900/20 rounded-lg">
                <h5 className="font-medium mb-2 flex items-center">
                  <Code className="h-5 w-5 text-amber-600 dark:text-amber-400 mr-2" />
                  Technical Insight
                </h5>
                <p className="text-sm text-muted-foreground">
                  "I designed the blockchain structure with both security and efficiency in mind.
                  The block header contains all essential information needed to validate a block,
                  while the Merkle tree allows light clients to verify transactions without
                  downloading the entire blockchain. This enables the Simplified Payment
                  Verification (SPV) mode I described in the whitepaper, which is crucial for
                  practical everyday use on mobile devices and lightweight clients."
                </p>
              </div>
            </div>
          </div>

          <div className="bg-card p-6 rounded-lg border border-border">
            <h4 className="font-medium mb-4 text-lg">Blockchain's Revolutionary Properties</h4>
            <div className="space-y-4">
              <div className="p-4 bg-muted rounded-lg">
                <h5 className="font-medium mb-2 flex items-center">
                  <span className="h-6 w-6 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-sm mr-2">
                    1
                  </span>
                  Trustless Verification
                </h5>
                <p className="text-sm text-muted-foreground">
                  For the first time in computing history, the blockchain enables multiple parties
                  who don't trust each other to agree on a single version of truth without a central
                  authority. Anyone can verify the entire blockchain independently, from the genesis
                  block to the latest block, ensuring that all rules have been followed.
                </p>
              </div>

              <div className="p-4 bg-muted rounded-lg">
                <h5 className="font-medium mb-2 flex items-center">
                  <span className="h-6 w-6 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-sm mr-2">
                    2
                  </span>
                  Cryptographic Immutability
                </h5>
                <p className="text-sm text-muted-foreground">
                  Once confirmed with sufficient proof-of-work, blocks become practically immutable.
                  Altering a past transaction would require redoing all the proof-of-work for that
                  block and all subsequent blocks, which becomes exponentially more difficult as the
                  chain grows. This creates a permanent, tamper-evident record.
                </p>
              </div>

              <div className="p-4 bg-muted rounded-lg">
                <h5 className="font-medium mb-2 flex items-center">
                  <span className="h-6 w-6 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-sm mr-2">
                    3
                  </span>
                  Decentralized Consensus
                </h5>
                <p className="text-sm text-muted-foreground">
                  The blockchain establishes consensus through a decentralized network of nodes,
                  each independently validating transactions and blocks according to the same rules.
                  No single entity can manipulate the blockchain without controlling the majority of
                  the network's computational power.
                </p>
              </div>

              <div className="p-4 bg-muted rounded-lg">
                <h5 className="font-medium mb-2 flex items-center">
                  <span className="h-6 w-6 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-sm mr-2">
                    4
                  </span>
                  Transparent Auditing
                </h5>
                <p className="text-sm text-muted-foreground">
                  The blockchain provides a complete, transparent history of all transactions.
                  Unlike traditional financial systems with limited visibility, anyone can audit the
                  entire Bitcoin financial system, from the very first transaction to the latest,
                  ensuring that all rules are followed and no inflation occurs beyond the scheduled
                  issuance.
                </p>
              </div>

              <div className="p-4 bg-muted rounded-lg">
                <h5 className="font-medium mb-2 flex items-center">
                  <span className="h-6 w-6 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-sm mr-2">
                    5
                  </span>
                  Censorship Resistance
                </h5>
                <p className="text-sm text-muted-foreground">
                  The decentralized nature of the blockchain makes it highly resistant to
                  censorship. Transactions cannot be blocked, and the system continues to function
                  even if some nodes or regions are shut down. This property makes Bitcoin resilient
                  against interference from authorities or hostile actors.
                </p>
              </div>
            </div>
          </div>

          <div className="bg-card p-6 rounded-lg border border-border">
            <h4 className="font-medium mb-4 text-lg">The Chain of Blocks</h4>
            <div className="space-y-4">
              <p className="text-muted-foreground leading-relaxed">
                The true power of the blockchain lies in how blocks are cryptographically linked
                together. This arrangement ensures the integrity of the entire transaction history:
              </p>

              <div className="overflow-hidden rounded-lg border border-border">
                <div className="flex flex-col md:flex-row">
                  <div className="bg-muted p-5 flex-grow md:w-1/3 border-b md:border-r md:border-b-0 border-border">
                    <h5 className="font-medium mb-3">Block #785,422</h5>
                    <div className="space-y-3">
                      <div className="flex items-start">
                        <Clock className="h-5 w-5 text-primary mr-2 mt-0.5 flex-shrink-0" />
                        <div>
                          <p className="text-sm font-medium">Timestamp</p>
                          <p className="text-xs text-muted-foreground">2023-06-25 14:32:01 UTC</p>
                        </div>
                      </div>
                      <div className="flex items-start">
                        <Hash className="h-5 w-5 text-primary mr-2 mt-0.5 flex-shrink-0" />
                        <div>
                          <p className="text-sm font-medium">This Block's Hash</p>
                          <p className="text-xs text-muted-foreground overflow-x-auto">
                            00000000000000000001fb91ca9d0e9...
                          </p>
                        </div>
                      </div>
                      <div className="flex items-start">
                        <HardDrive className="h-5 w-5 text-primary mr-2 mt-0.5 flex-shrink-0" />
                        <div>
                          <p className="text-sm font-medium">Transactions</p>
                          <p className="text-xs text-muted-foreground">2,651 transactions</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="bg-background p-5 flex-grow md:w-1/3 border-b md:border-r md:border-b-0 border-border">
                    <h5 className="font-medium mb-3">Block #785,423</h5>
                    <div className="space-y-3">
                      <div className="flex items-start">
                        <Clock className="h-5 w-5 text-primary mr-2 mt-0.5 flex-shrink-0" />
                        <div>
                          <p className="text-sm font-medium">Timestamp</p>
                          <p className="text-xs text-muted-foreground">2023-06-25 15:08:43 UTC</p>
                        </div>
                      </div>
                      <div className="flex items-start">
                        <Hash className="h-5 w-5 text-primary mr-2 mt-0.5 flex-shrink-0" />
                        <div>
                          <p className="text-sm font-medium">Previous Block Hash</p>
                          <p className="text-xs text-muted-foreground overflow-x-auto">
                            00000000000000000001fb91ca9d0e9...
                          </p>
                        </div>
                      </div>
                      <div className="flex items-start">
                        <HardDrive className="h-5 w-5 text-primary mr-2 mt-0.5 flex-shrink-0" />
                        <div>
                          <p className="text-sm font-medium">Transactions</p>
                          <p className="text-xs text-muted-foreground">3,128 transactions</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="bg-muted p-5 flex-grow md:w-1/3">
                    <h5 className="font-medium mb-3">Block #785,424</h5>
                    <div className="space-y-3">
                      <div className="flex items-start">
                        <Clock className="h-5 w-5 text-primary mr-2 mt-0.5 flex-shrink-0" />
                        <div>
                          <p className="text-sm font-medium">Timestamp</p>
                          <p className="text-xs text-muted-foreground">2023-06-25 15:42:18 UTC</p>
                        </div>
                      </div>
                      <div className="flex items-start">
                        <Hash className="h-5 w-5 text-primary mr-2 mt-0.5 flex-shrink-0" />
                        <div>
                          <p className="text-sm font-medium">Previous Block Hash</p>
                          <p className="text-xs text-muted-foreground overflow-x-auto">
                            00000000000000000004a21fb632c88...
                          </p>
                        </div>
                      </div>
                      <div className="flex items-start">
                        <HardDrive className="h-5 w-5 text-primary mr-2 mt-0.5 flex-shrink-0" />
                        <div>
                          <p className="text-sm font-medium">Transactions</p>
                          <p className="text-xs text-muted-foreground">2,879 transactions</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="p-4 bg-background border-t border-border text-sm text-center">
                  <p className="text-muted-foreground font-medium">
                    Each block includes the previous block's hash, creating an unbreakable chain
                  </p>
                </div>
              </div>

              <div className="p-4 bg-muted/60 rounded-lg border border-border/50">
                <h5 className="font-medium mb-2">The Mathematics of Security</h5>
                <p className="text-sm text-muted-foreground mb-3">
                  The security of the blockchain relies on the computational infeasibility of
                  finding hash collisions. With a SHA-256 hash output of 256 bits, there are 2^256
                  possible hash values - approximately 10^77, which is more than the estimated
                  number of atoms in the observable universe (10^80).
                </p>
                <p className="text-sm text-muted-foreground">
                  Finding a hash that begins with a specific number of zeros (as required by the
                  difficulty target) requires, on average, trying 2^n different inputs, where n is
                  the number of zero bits required. This creates a provable cost to mining,
                  requiring significant computational resources and energy investment.
                </p>
              </div>
            </div>
          </div>

          <div className="p-6 bg-card rounded-lg border border-border">
            <h4 className="font-medium mb-4 text-lg">Satoshi's Perspective</h4>
            <div className="p-5 bg-muted/50 rounded-lg border border-border text-sm text-muted-foreground italic leading-relaxed">
              <p>
                "I view the blockchain as the most critical innovation in Bitcoin. The approach was
                inspired by how systems in nature and human society maintain integrity—through
                chains of custody, linked events, and accumulated history that becomes increasingly
                difficult to falsify.
              </p>
              <p className="mt-3">
                What I found most fascinating was that by combining existing technologies—timestamp
                servers, proof-of-work, and cryptographic signatures—in a novel way, we created
                something greater than the sum of its parts. The blockchain's ability to establish
                consensus without authority has implications far beyond currency.
              </p>
              <p className="mt-3">
                Look beyond the financial applications. What's truly revolutionary is a system where
                rules are enforced by mathematics rather than by authorities, where truth is
                verified rather than trusted, and where power derives from participation rather than
                exclusion."
              </p>
            </div>
          </div>

          <div className="mt-6 border-t border-border/40 pt-4">
            <VerifyCheckbox
              moduleId={moduleId}
              sectionId={sectionId}
              verificationId={sectionId} // Use sectionId for consistency
              label="I understand how blockchain technology works"
            />
          </div>
        </div>
      </ModuleContent>
    </ModuleLayout>
  );
}
