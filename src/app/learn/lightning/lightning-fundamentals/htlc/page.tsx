'use client';

import { ModuleLayout } from '@/components/learn/shared/module-layout';
import { ModuleContent } from '@/components/learn/shared/module-content';
import VerifyCheckbox from '@/components/learn/shared/verify-checkbox';
import SatoshiQuote from '@/components/learn/shared/satoshi-quote';
import { Card } from '@/components/ui/card';
import {
  Lock,
  ArrowRight,
  Key,
  Clock,
  Workflow,
  BookCopy,
  Shield,
  ArrowLeftRight
} from 'lucide-react';

const moduleId = 'lightning-fundamentals';
const sectionId = 'htlc';

export default function HTLCFundamentalsPage() {
  return (
    <ModuleLayout>
      <ModuleContent moduleId={moduleId} sectionId={sectionId}>
        <div className="space-y-8">
          <SatoshiQuote
            quote="The idea of using cryptographic puzzles and timelocks to facilitate conditional payments was always part of the roadmap for Bitcoin's scaling solutions."
            source="Attributed to Satoshi Nakamoto"
            date="Early Bitcoin discussions"
          />

          <Card className="p-6">
            <h4 className="font-medium mb-4 text-lg">A Note from Satoshi</h4>
            <div className="p-5 bg-muted/50 rounded-lg border border-border text-sm text-muted-foreground italic leading-relaxed">
              <p>
                "When I designed Bitcoin's scripting system, I intentionally included capabilities
                like hash functions and timelocks that would later enable complex conditional
                payments. These primitives were fundamental building blocks for future scaling
                solutions.
              </p>
              <p className="mt-3">
                Hash Time-Locked Contracts represent a brilliant application of these capabilities.
                They solve what was previously an unsolvable problem in digital currency: how to
                route a payment through untrusted intermediaries without any party being able to
                steal the funds. The combination of cryptographic hash locks with absolute timelocks
                creates a trustless mechanism for multi-hop payments.
              </p>
              <p className="mt-3">
                What's most elegant about HTLCs is their atomicity—the all-or-nothing property that
                ensures payments either complete fully or not at all. This design pattern ensures
                that Lightning Network payments maintain the same security guarantees as on-chain
                Bitcoin transactions, even while moving most transaction activity off-chain."
              </p>
            </div>
          </Card>

          <div>
            <h2 className="text-2xl font-bold">HTLC Fundamentals</h2>
            <div className="mt-4 space-y-6">
              <Card className="p-6">
                <h4 className="font-medium mb-4 text-lg">What are HTLCs?</h4>
                <div className="space-y-6">
                  <p className="text-muted-foreground leading-relaxed">
                    Hash Time-Locked Contracts (HTLCs) are conditional payment agreements that form
                    the backbone of Lightning Network routing. They use cryptographic primitives to
                    secure payments across multiple untrusted nodes while preserving Bitcoin's
                    trustless security model.
                  </p>

                  <div className="p-5 bg-background rounded-lg border border-border">
                    <h5 className="font-medium mb-4 flex items-center">
                      <BookCopy className="h-5 w-5 text-purple-600 mr-2" />
                      Definition and Core Function
                    </h5>

                    <div className="text-sm text-muted-foreground space-y-4">
                      <p>
                        An HTLC is a type of smart contract that uses two key mechanisms to secure
                        payments:
                      </p>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="p-4 bg-muted/30 rounded-lg">
                          <div className="flex items-center gap-2 mb-2">
                            <Key className="h-5 w-5 text-purple-600" />
                            <h6 className="font-medium">Hash Lock</h6>
                          </div>
                          <p className="text-sm">
                            A cryptographic condition that can only be satisfied by revealing a
                            preimage (secret value) that, when hashed, produces a specific hash
                            digest. This creates a cryptographic puzzle that can only be solved by
                            someone who knows the secret.
                          </p>
                          <div className="mt-3 p-2 bg-background rounded-md text-xs">
                            <span className="font-mono">H = SHA-256(R)</span> where{' '}
                            <span className="font-mono">R</span> is the secret preimage
                          </div>
                        </div>

                        <div className="p-4 bg-muted/30 rounded-lg">
                          <div className="flex items-center gap-2 mb-2">
                            <Clock className="h-5 w-5 text-purple-600" />
                            <h6 className="font-medium">Time Lock</h6>
                          </div>
                          <p className="text-sm">
                            A time-based condition that prevents funds from being spent until a
                            specific time or block height is reached. This creates a safety
                            mechanism that ensures funds aren't locked up indefinitely if a payment
                            fails.
                          </p>
                          <div className="mt-3 p-2 bg-background rounded-md text-xs">
                            <span className="font-mono">OP_CHECKLOCKTIMEVERIFY</span> in Bitcoin
                            Script
                          </div>
                        </div>
                      </div>

                      <div className="p-4 bg-purple-50 dark:bg-purple-900/20 rounded-lg mt-4">
                        <h6 className="font-medium mb-2 flex items-center">
                          <Workflow className="h-5 w-5 text-purple-600 dark:text-purple-400 mr-2" />
                          Technical Insight
                        </h6>
                        <p className="text-sm">
                          HTLCs were first described in academic literature as a solution to
                          multi-hop payments in payment channel networks. The concept was later
                          refined in the Lightning Network whitepaper, becoming a core component of
                          the protocol. What makes them revolutionary is how they combine existing
                          Bitcoin script capabilities to create a new type of conditional payment
                          with powerful security properties.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="p-4 bg-background rounded-lg border border-border">
                      <div className="flex items-center gap-2 mb-3">
                        <Shield className="h-5 w-5 text-purple-600" />
                        <h5 className="font-medium">Why HTLCs Matter</h5>
                      </div>
                      <div className="space-y-3 text-sm text-muted-foreground">
                        <p>HTLCs solve several critical challenges in off-chain payment systems:</p>
                        <ul className="list-disc pl-5 space-y-2">
                          <li>
                            <strong>Multi-hop payments:</strong> Enable routing through multiple
                            channels without trusting intermediaries
                          </li>
                          <li>
                            <strong>Safety guarantees:</strong> Funds are either forwarded to
                            recipients or returned to senders, with no possibility of loss
                          </li>
                          <li>
                            <strong>Atomicity:</strong> Payments either succeed completely or fail
                            completely with no partial states
                          </li>
                          <li>
                            <strong>Interoperability:</strong> Can be implemented on any blockchain
                            with basic scripting capabilities
                          </li>
                        </ul>
                      </div>
                    </div>

                    <div className="p-4 bg-background rounded-lg border border-border">
                      <div className="flex items-center gap-2 mb-3">
                        <ArrowLeftRight className="h-5 w-5 text-purple-600" />
                        <h5 className="font-medium">Beyond Lightning</h5>
                      </div>
                      <div className="space-y-3 text-sm text-muted-foreground">
                        <p>
                          While HTLCs are core to Lightning, they're used in other applications:
                        </p>
                        <ul className="list-disc pl-5 space-y-2">
                          <li>
                            <strong>Atomic Swaps:</strong> Trustless cross-chain cryptocurrency
                            exchanges
                          </li>
                          <li>
                            <strong>Discreet Log Contracts:</strong> Privacy-preserving smart
                            contracts
                          </li>
                          <li>
                            <strong>Submarine Swaps:</strong> Converting on-chain to off-chain
                            bitcoin and vice versa
                          </li>
                          <li>
                            <strong>Payment Points:</strong> An optimized version of HTLCs using
                            point-based cryptography
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </Card>

              <Card className="p-6">
                <h4 className="font-medium mb-4 text-lg">How HTLCs Work in Lightning</h4>
                <div className="space-y-6">
                  <p className="text-muted-foreground">
                    In Lightning, HTLCs create a conditional payment path across multiple channels. The
                    process works through a clever mechanism that ensures all participants either
                    forward the payment correctly or cannot claim any funds.
                  </p>

                  <div className="bg-background p-5 rounded-lg border border-border">
                    <h5 className="font-medium mb-4">Basic HTLC Flow in a Multi-Hop Payment</h5>
                    <div className="space-y-4">
                      <div className="p-3 bg-muted/30 rounded-lg border border-border/60 flex items-start gap-4">
                        <div className="bg-purple-100 dark:bg-purple-900/30 rounded-full p-2 text-purple-600 dark:text-purple-400 mt-1">
                          <span className="font-medium text-sm">1</span>
                        </div>
                        <div>
                          <h6 className="font-medium">Setup Phase</h6>
                          <p className="text-sm text-muted-foreground mt-1">
                            The recipient generates a random secret (R) and computes its hash (H).
                            This hash is shared with the sender, becoming the condition for payment.
                          </p>
                        </div>
                      </div>

                      <div className="p-3 bg-muted/30 rounded-lg border border-border/60 flex items-start gap-4">
                        <div className="bg-purple-100 dark:bg-purple-900/30 rounded-full p-2 text-purple-600 dark:text-purple-400 mt-1">
                          <span className="font-medium text-sm">2</span>
                        </div>
                        <div>
                          <h6 className="font-medium">HTLC Creation</h6>
                          <p className="text-sm text-muted-foreground mt-1">
                            The sender creates an HTLC with the first hop in the route, saying
                            "Here's some bitcoin you can claim if you show me the preimage of hash
                            H, or I can take it back after time T." Each node along the route
                            creates similar HTLCs with decreasing timelock values.
                          </p>
                        </div>
                      </div>

                      <div className="p-3 bg-muted/30 rounded-lg border border-border/60 flex items-start gap-4">
                        <div className="bg-purple-100 dark:bg-purple-900/30 rounded-full p-2 text-purple-600 dark:text-purple-400 mt-1">
                          <span className="font-medium text-sm">3</span>
                        </div>
                        <div>
                          <h6 className="font-medium">Secret Revelation</h6>
                          <p className="text-sm text-muted-foreground mt-1">
                            When the HTLCs reach the recipient, they reveal the secret R to claim
                            the payment from the last hop. This revelation propagates backward
                            through the route as each node uses the secret to claim their payment.
                          </p>
                        </div>
                      </div>

                      <div className="p-3 bg-muted/30 rounded-lg border border-border/60 flex items-start gap-4">
                        <div className="bg-purple-100 dark:bg-purple-900/30 rounded-full p-2 text-purple-600 dark:text-purple-400 mt-1">
                          <span className="font-medium text-sm">4</span>
                        </div>
                        <div>
                          <h6 className="font-medium">Successful Settlement</h6>
                          <p className="text-sm text-muted-foreground mt-1">
                            The payment settles as each node updates their channel balances based on
                            the now-fulfilled HTLCs. The entire route settles atomically—all hops
                            succeed or none do.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </Card>
            </div>
          </div>

          <div className="mt-6 border-t border-border/40 pt-4">
            <VerifyCheckbox
              moduleId={moduleId}
              sectionId={sectionId}
              verificationId="htlc-fundamentals"
              label="I understand how Hash Time-Locked Contracts work in the Lightning Network"
            />
          </div>
        </div>
      </ModuleContent>
    </ModuleLayout>
  );
}
