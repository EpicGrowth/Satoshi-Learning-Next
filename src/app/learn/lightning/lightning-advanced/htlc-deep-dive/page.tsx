'use client';

import React from 'react';
import { ModuleLayout } from '@/components/learn/shared/module-layout';
import { ModuleContent } from '@/components/learn/shared/module-content';
import VerifyCheckbox from '@/components/learn/shared/verify-checkbox';
import { Card } from '@/components/ui/card';
import { Lock, Timer, Code, AlertTriangle, ArrowRight, ChevronsRight, Cpu } from 'lucide-react';

const moduleId = 'lightning-advanced';
const sectionId = 'htlc-deep-dive';

export default function HTLCDeepDivePage() {
  return (
    <ModuleLayout>
      <ModuleContent moduleId={moduleId} sectionId={sectionId}>
        <div className="space-y-8">
          <Card className="p-6">
            <h2 className="text-xl font-bold mb-4">Hashed Time-Locked Contracts (HTLCs): Advanced Operations</h2>
            
            <div className="space-y-6">
              <div className="prose dark:prose-invert max-w-none">
                <h3>Behind The Scenes: How HTLCs Enable Lightning</h3>
                <p>
                  HTLCs are the cornerstone technology that makes the Lightning Network possible.
                  They create conditional payment channels where funds are locked until specific
                  cryptographic conditions are met, or a timeout occurs.
                </p>
                <p>
                  At its core, an HTLC is a sophisticated combination of two distinct types of Bitcoin 
                  script conditions:
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="bg-purple-50 dark:bg-purple-900/20 p-6 rounded-lg">
                  <h4 className="font-medium mb-4 flex items-center">
                    <Lock className="h-5 w-5 text-purple-600 mr-2" />
                    Hash Lock
                  </h4>
                  <div className="text-sm text-muted-foreground space-y-2">
                    <p>
                      Funds are cryptographically locked with a hash of a secret (preimage). 
                      The recipient must reveal the correct preimage value that produces the 
                      hash to claim the payment.
                    </p>
                    <div className="bg-gray-100 dark:bg-gray-800 p-3 rounded-md font-mono text-xs overflow-auto">
                      <pre>OP_HASH256 &lt;hash&gt; OP_EQUALVERIFY</pre>
                    </div>
                  </div>
                </div>

                <div className="bg-purple-50 dark:bg-purple-900/20 p-6 rounded-lg">
                  <h4 className="font-medium mb-4 flex items-center">
                    <Timer className="h-5 w-5 text-purple-600 mr-2" />
                    Time Lock
                  </h4>
                  <div className="text-sm text-muted-foreground space-y-2">
                    <p>
                      The payment channel contract includes a timelock that allows the sender 
                      to reclaim their funds after a specified time period if the hash lock 
                      isn't satisfied.
                    </p>
                    <div className="bg-gray-100 dark:bg-gray-800 p-3 rounded-md font-mono text-xs overflow-auto">
                      <pre>OP_CHECKLOCKTIMEVERIFY &lt;timeout&gt; OP_DROP</pre>
                    </div>
                  </div>
                </div>
              </div>

              <div className="border-l-4 border-purple-500 pl-4 italic">
                "HTLCs are the atomic primitives that enable multi-hop payments without requiring
                trust between intermediate nodes. This is a fundamental building block of the 
                Lightning Network's scalability and routing capabilities."
              </div>
            </div>
          </Card>

          <Card className="p-6">
            <h3 className="text-lg font-bold mb-4 flex items-center">
              <Code className="h-5 w-5 mr-2" />
              The HTLC Script in Detail
            </h3>

            <div className="space-y-4">
              <p className="text-muted-foreground">
                Let's examine the actual Bitcoin script conditions that comprise a standard HTLC:
              </p>

              <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg font-mono text-sm overflow-auto">
                <pre>
{`IF
  OP_HASH256 <hash_of_secret> OP_EQUALVERIFY
  <recipient_pubkey> OP_CHECKSIG
ELSE
  <timeout_blocks> OP_CHECKLOCKTIMEVERIFY OP_DROP
  <sender_pubkey> OP_CHECKSIG
ENDIF`}
                </pre>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-4">
                <div className="space-y-2">
                  <h4 className="font-medium">Success Path</h4>
                  <p className="text-sm text-muted-foreground">
                    If the recipient knows the preimage of the hash, they can use the first execution path 
                    to claim the funds immediately by providing the secret and their signature.
                  </p>
                </div>

                <div className="space-y-2">
                  <h4 className="font-medium">Timeout Path</h4>
                  <p className="text-sm text-muted-foreground">
                    If the timeout period has elapsed and the hash lock hasn't been satisfied, the sender 
                    can reclaim their funds using the second execution path with just their signature.
                  </p>
                </div>
              </div>
            </div>
          </Card>

          <Card className="p-6">
            <h3 className="text-lg font-bold mb-4">Multi-Hop HTLC Propagation</h3>
            
            <div className="space-y-4">
              <p className="text-muted-foreground">
                The true power of HTLCs becomes apparent in multi-hop Lightning payments. Here's how
                HTLCs chain together across multiple payment channels:
              </p>

              <div className="relative py-8">
                <div className="absolute left-4 h-full w-0.5 bg-gradient-to-b from-purple-600/30 via-purple-600 to-purple-600/30"></div>
                
                <div className="ml-10 space-y-8">
                  <div className="relative">
                    <div className="absolute -left-10 top-0 h-8 w-8 rounded-full bg-purple-100 dark:bg-purple-900/50 flex items-center justify-center">
                      <span className="text-purple-600 font-medium">1</span>
                    </div>
                    <h4 className="font-medium">Payment Initiation</h4>
                    <p className="text-sm text-muted-foreground mt-2">
                      The sender generates a random secret (preimage) and calculates its hash. The payment amount
                      and hash are sent along the route to the recipient, but the secret is kept private.
                    </p>
                  </div>

                  <div className="relative">
                    <div className="absolute -left-10 top-0 h-8 w-8 rounded-full bg-purple-100 dark:bg-purple-900/50 flex items-center justify-center">
                      <span className="text-purple-600 font-medium">2</span>
                    </div>
                    <h4 className="font-medium">HTLC Chain Formation</h4>
                    <p className="text-sm text-muted-foreground mt-2">
                      Each node along the route creates an HTLC with the next node, committing funds conditionally 
                      based on the same hash but with decreasing timelocks to ensure proper flow of the secret.
                    </p>
                    <div className="mt-3 flex items-center space-x-4 overflow-auto">
                      <div className="flex-shrink-0 text-center">
                        <div className="w-16 h-16 bg-purple-100 dark:bg-purple-900/30 rounded-full flex items-center justify-center mx-auto">
                          <span className="text-xs font-medium">Node A</span>
                        </div>
                        <span className="text-xs text-muted-foreground mt-1">Timeout: 60 blocks</span>
                      </div>
                      <ChevronsRight className="h-4 w-4 flex-shrink-0 text-muted-foreground" />
                      <div className="flex-shrink-0 text-center">
                        <div className="w-16 h-16 bg-purple-100 dark:bg-purple-900/30 rounded-full flex items-center justify-center mx-auto">
                          <span className="text-xs font-medium">Node B</span>
                        </div>
                        <span className="text-xs text-muted-foreground mt-1">Timeout: 50 blocks</span>
                      </div>
                      <ChevronsRight className="h-4 w-4 flex-shrink-0 text-muted-foreground" />
                      <div className="flex-shrink-0 text-center">
                        <div className="w-16 h-16 bg-purple-100 dark:bg-purple-900/30 rounded-full flex items-center justify-center mx-auto">
                          <span className="text-xs font-medium">Node C</span>
                        </div>
                        <span className="text-xs text-muted-foreground mt-1">Timeout: 40 blocks</span>
                      </div>
                      <ChevronsRight className="h-4 w-4 flex-shrink-0 text-muted-foreground" />
                      <div className="flex-shrink-0 text-center">
                        <div className="w-16 h-16 bg-purple-100 dark:bg-purple-900/30 rounded-full flex items-center justify-center mx-auto">
                          <span className="text-xs font-medium">Recipient</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="relative">
                    <div className="absolute -left-10 top-0 h-8 w-8 rounded-full bg-purple-100 dark:bg-purple-900/50 flex items-center justify-center">
                      <span className="text-purple-600 font-medium">3</span>
                    </div>
                    <h4 className="font-medium">Secret Revelation</h4>
                    <p className="text-sm text-muted-foreground mt-2">
                      Once the recipient receives the HTLC, the sender reveals the preimage to them through
                      a secure channel. The recipient uses this secret to claim the funds from the final node.
                    </p>
                  </div>

                  <div className="relative">
                    <div className="absolute -left-10 top-0 h-8 w-8 rounded-full bg-purple-100 dark:bg-purple-900/50 flex items-center justify-center">
                      <span className="text-purple-600 font-medium">4</span>
                    </div>
                    <h4 className="font-medium">Reverse Secret Propagation</h4>
                    <p className="text-sm text-muted-foreground mt-2">
                      The secret now propagates backward through the chain. Each node reveals the secret to claim 
                      funds from the previous node, creating a cascade of settled payments.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </Card>

          <Card className="p-6">
            <h3 className="text-lg font-bold mb-4 flex items-center">
              <AlertTriangle className="h-5 w-5 text-yellow-500 mr-2" />
              Advanced HTLC Considerations
            </h3>

            <div className="space-y-4">
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
                <div className="p-4 bg-yellow-50 dark:bg-yellow-900/20 rounded-lg">
                  <h4 className="font-medium mb-2">Timelocks Management</h4>
                  <p className="text-sm text-muted-foreground">
                    Correctly decreasing timelock values is critical. Each hop must have enough time
                    to claim funds if the next hop reveals the secret, but also enough time for the
                    previous hop to claim a refund if something fails.
                  </p>
                </div>

                <div className="p-4 bg-yellow-50 dark:bg-yellow-900/20 rounded-lg">
                  <h4 className="font-medium mb-2">Fee Considerations</h4>
                  <p className="text-sm text-muted-foreground">
                    HTLCs require calculating fees correctly across multiple hops. Each intermediary node
                    must reduce the amount they forward to account for their fee while maintaining proper
                    routing information.
                  </p>
                </div>

                <div className="p-4 bg-yellow-50 dark:bg-yellow-900/20 rounded-lg">
                  <h4 className="font-medium mb-2">HTLC Jamming Attacks</h4>
                  <p className="text-sm text-muted-foreground">
                    Attackers can lock up channel liquidity by creating many small HTLCs and not revealing
                    the preimage. Timeout values must balance payment reliability with attack vulnerability.
                  </p>
                </div>
              </div>
            </div>
          </Card>

          <Card className="p-6 bg-gradient-to-r from-purple-50 to-blue-50 dark:from-purple-900/20 dark:to-blue-900/20">
            <h3 className="text-lg font-bold mb-4 flex items-center">
              <Cpu className="h-5 w-5 text-purple-500 mr-2" />
              Advanced HTLC Implementations
            </h3>

            <div className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="border border-border p-4 rounded-lg">
                  <h4 className="font-medium mb-2">PTLCs (Point Time-Locked Contracts)</h4>
                  <p className="text-sm text-muted-foreground">
                    The next evolution of HTLCs that uses Schnorr signatures and point-based cryptography 
                    instead of hash functions, offering improved privacy by making all hops in a route
                    look indistinguishable on-chain.
                  </p>
                </div>

                <div className="border border-border p-4 rounded-lg">
                  <h4 className="font-medium mb-2">Atomic Multipath Payments (AMPs)</h4>
                  <p className="text-sm text-muted-foreground">
                    Extending HTLCs to split payments across multiple routes using multiple preimages 
                    that all hash to the same value, enabling larger payments to be made through channels
                    with limited individual capacity.
                  </p>
                </div>
              </div>
            </div>
          </Card>

          <div className="mt-6">
            <VerifyCheckbox
              moduleId={moduleId}
              sectionId={sectionId}
              verificationId="htlc-deep-dive-basics"
              label="I understand the advanced concepts of HTLCs in the Lightning Network"
            />
          </div>
        </div>
      </ModuleContent>
    </ModuleLayout>
  );
}
