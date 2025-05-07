'use client';

import React from 'react';
import { ModuleContent } from '@/components/learn/shared/module-content';
import {
  Lightbulb,
  Shield,
  Lock,
  EyeOff,
  Shuffle,
  Network,
  AlertCircle,
  FileCode,
  Workflow,
} from 'lucide-react';
import VerifyCheckbox from '@/components/learn/shared/verify-checkbox';
import SatoshiQuote from '@/components/learn/shared/satoshi-quote';

export default function OnionRoutingModule() {
  return (
      <ModuleContent
        moduleId="lightning-fundamentals"
        sectionId="onion-routing"
        moduleTitle="Onion Routing"
        moduleDescription="Privacy and routing in Lightning"
        difficulty="Intermediate"
        icon={Lightbulb}
      >
        <div className="space-y-8">
          <SatoshiQuote
            quote="Privacy is not secrecy. A private matter is something one doesn't want the whole world to know, but a secret matter is something one doesn't want anybody to know."
            source="Eric Hughes, Cypherpunk Manifesto"
            date="1993"
          />

          <div className="bg-card p-6 rounded-lg border border-border">
            <h4 className="font-medium mb-4 text-lg">A Note from Satoshi</h4>
            <div className="p-5 bg-muted/50 rounded-lg border border-border text-sm text-muted-foreground italic leading-relaxed">
              <p>
                "When designing Bitcoin, one of my core principles was pseudonymity. I wanted to
                create a system where financial transactions wouldn't expose users' real-world
                identities, but would still maintain a transparent ledger. However, I recognized
                that a fully transparent blockchain means transaction patterns can potentially
                identify users over time.
              </p>
              <p className="mt-3">
                Onion routing, a technology pioneered by the cypherpunks and deployed in the Tor
                network, represented an elegant solution to this challenge when applied to payment
                routing. By encrypting payment information in multiple layers that can only be
                peeled away one at a time, Lightning's implementation of onion routing ensures that
                no single node in a payment path can determine both the sender and recipient.
              </p>
              <p className="mt-3">
                This approach brilliantly balances the need for routing information with the
                preservation of user privacy. It's a testament to the cypherpunk ethos that has
                always been at the heart of Bitcoin: using cryptography to protect individual
                liberty in the digital age."
              </p>
            </div>
          </div>

          <div className="bg-card p-6 rounded-lg border border-border">
            <h3 className="text-lg font-medium mb-4">The Privacy Challenge in Payment Networks</h3>
            <div className="space-y-6">
              <p className="text-muted-foreground leading-relaxed">
                While Bitcoin offers pseudonymity, its public ledger means all transactions are
                visible to everyone. The Lightning Network faces a different privacy challenge: how
                to route payments across multiple nodes without revealing sensitive information
                about who is paying whom.
              </p>

              <div className="p-5 bg-background rounded-lg border border-border">
                <h4 className="font-medium mb-4 flex items-center">
                  <Shield className="h-5 w-5 text-primary mr-2" />
                  Privacy Concerns in Payment Routing
                </h4>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h5 className="font-medium mb-2">In Traditional Payment Networks</h5>
                    <div className="p-4 bg-muted/30 rounded-lg">
                      <ul className="list-disc pl-5 text-sm text-muted-foreground space-y-2">
                        <li>
                          <span className="font-medium">Intermediaries Know All:</span> Every entity
                          in the payment path knows the sender, recipient, and amount
                        </li>
                        <li>
                          <span className="font-medium">Data Collection:</span> Payment processors
                          aggregate and sell transaction data
                        </li>
                        <li>
                          <span className="font-medium">Surveillance:</span> Financial institutions
                          monitor and report transaction patterns
                        </li>
                        <li>
                          <span className="font-medium">Censorship:</span> Centralized hubs can
                          block payments to specific recipients
                        </li>
                      </ul>
                    </div>
                  </div>

                  <div>
                    <h5 className="font-medium mb-2">In Distributed Networks</h5>
                    <div className="p-4 bg-muted/30 rounded-lg">
                      <ul className="list-disc pl-5 text-sm text-muted-foreground space-y-2">
                        <li>
                          <span className="font-medium">Path Information:</span> Route information
                          must be shared, but can expose user behavior
                        </li>
                        <li>
                          <span className="font-medium">Network Analysis:</span> Flow analysis can
                          identify payment patterns even without direct identification
                        </li>
                        <li>
                          <span className="font-medium">Selective Privacy:</span> Need to reveal
                          some information to intermediate nodes for routing
                        </li>
                        <li>
                          <span className="font-medium">
                            Balance Between Privacy and Functionality:
                          </span>{' '}
                          Complete privacy can harm routing efficiency
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="mt-6 p-4 bg-amber-50 dark:bg-amber-900/20 rounded-lg">
                  <h5 className="font-medium mb-2 flex items-center">
                    <FileCode className="h-5 w-5 text-amber-600 dark:text-amber-400 mr-2" />
                    Historical Context
                  </h5>
                  <p className="text-sm text-muted-foreground">
                    "The development of onion routing dates back to the mid-1990s, when U.S. Naval
                    Research Laboratory researchers created the concept to protect intelligence
                    communications. The technology was later refined and became the foundation of
                    the Tor network in the early 2000s. Lightning Network's adoption of onion
                    routing demonstrates how cryptographic innovations continue to cross-pollinate
                    across different privacy-preserving systems."
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-card p-6 rounded-lg border border-border">
            <h3 className="text-lg font-medium mb-4">Onion Routing: A Technical Deep Dive</h3>
            <div className="space-y-6">
              <p className="text-muted-foreground leading-relaxed">
                Onion routing in the Lightning Network is implemented via the Sphinx packet format,
                a specialized cryptographic construction designed to ensure privacy while
                facilitating payment routing across multiple hops.
              </p>

              <div className="p-5 bg-background rounded-lg border border-border">
                <h4 className="font-medium mb-4 flex items-center">
                  <Lock className="h-5 w-5 text-primary mr-2" />
                  The Sphinx Packet Format
                </h4>

                <div className="space-y-4">
                  <p className="text-sm text-muted-foreground">
                    Sphinx is a cryptographic packet format with several key privacy-preserving
                    properties:
                  </p>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="p-4 bg-muted/30 rounded-lg">
                      <h5 className="font-medium mb-2 text-sm">Fixed Size</h5>
                      <p className="text-xs text-muted-foreground">
                        All Sphinx packets are the same size (1300 bytes) regardless of route
                        length, preventing size-based correlation analysis. Even as layers are
                        peeled away, the packet maintains the same size.
                      </p>
                    </div>

                    <div className="p-4 bg-muted/30 rounded-lg">
                      <h5 className="font-medium mb-2 text-sm">Ephemeral Keys</h5>
                      <p className="text-xs text-muted-foreground">
                        Each packet uses ephemeral session keys for encryption, ensuring that even
                        repeated payments between the same parties look completely different at the
                        packet level.
                      </p>
                    </div>

                    <div className="p-4 bg-muted/30 rounded-lg">
                      <h5 className="font-medium mb-2 text-sm">Per-Hop Payloads</h5>
                      <p className="text-xs text-muted-foreground">
                        Each node can only decrypt the information meant for it, which includes
                        routing instructions to the next node and any specific handling
                        requirements.
                      </p>
                    </div>

                    <div className="p-4 bg-muted/30 rounded-lg">
                      <h5 className="font-medium mb-2 text-sm">Replay Protection</h5>
                      <p className="text-xs text-muted-foreground">
                        Sphinx includes mechanisms to prevent replay attacks, where an attacker
                        might try to send the same packet multiple times to analyze responses or
                        drain funds.
                      </p>
                    </div>
                  </div>

                  <div className="p-4 bg-muted/50 rounded-lg border border-border">
                    <h5 className="font-medium mb-2 text-sm">Sphinx Packet Structure</h5>
                    <div className="p-3 bg-background rounded-lg text-xs font-mono overflow-x-auto">
                      <div className="grid grid-cols-4 gap-2 mb-2">
                        <div className="font-medium text-primary">Version (1 byte)</div>
                        <div className="font-medium text-primary col-span-3">
                          Public Key (33 bytes)
                        </div>
                      </div>
                      <div className="grid grid-cols-1 gap-2 mb-2">
                        <div className="font-medium text-primary">HMAC (32 bytes)</div>
                      </div>
                      <div className="grid grid-cols-1 gap-2 mb-2">
                        <div className="font-medium text-primary">Routing Info (1234 bytes)</div>
                      </div>
                      <p className="mt-2 text-muted-foreground">
                        The Routing Info field contains encrypted data for each hop, with a unique
                        structure that prevents intermediary nodes from determining how many hops
                        remain or where they are in the route.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="p-5 bg-background rounded-lg border border-border">
                <h4 className="font-medium mb-4">The Onion Routing Process</h4>

                <div className="relative overflow-hidden rounded-lg bg-muted/20 p-6">
                  <div className="space-y-8">
                    {/* Step 1 */}
                    <div className="relative flex gap-4">
                      <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-primary text-primary-foreground shadow-md">
                        <span className="text-sm font-bold">1</span>
                      </div>
                      <div className="absolute left-5 top-10 h-[calc(100%-2.5rem)] w-px bg-border" />
                      <div className="pb-8">
                        <h4 className="font-medium mb-2">Route Construction and Encryption</h4>
                        <div className="p-4 bg-background rounded-lg text-sm text-muted-foreground">
                          <ol className="list-decimal pl-5 space-y-3">
                            <li>
                              <strong>Select Route:</strong> The sender identifies a viable path
                              through the network based on capacity, fees, and reliability.
                            </li>
                            <li>
                              <strong>Create Session Key:</strong> The sender generates a random
                              session key for this payment.
                            </li>
                            <li>
                              <strong>Layered Encryption:</strong> Starting with the final
                              recipient, the sender constructs the packet by:
                              <ul className="list-disc pl-5 mt-1 space-y-1">
                                <li>
                                  Creating a shared secret with each node using ECDH (Elliptic Curve
                                  Diffie-Hellman)
                                </li>
                                <li>
                                  Encrypting each hop's payload with its corresponding shared secret
                                </li>
                                <li>Encrypting all subsequent hops' data</li>
                                <li>Working backwards through the route</li>
                              </ul>
                            </li>
                          </ol>
                        </div>
                      </div>
                    </div>

                    {/* Step 2 */}
                    <div className="relative flex gap-4">
                      <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-primary text-primary-foreground shadow-md">
                        <span className="text-sm font-bold">2</span>
                      </div>
                      <div className="absolute left-5 top-10 h-[calc(100%-2.5rem)] w-px bg-border" />
                      <div className="pb-8">
                        <h4 className="font-medium mb-2">Processing at Each Hop</h4>
                        <div className="p-4 bg-background rounded-lg text-sm text-muted-foreground">
                          <ol className="list-decimal pl-5 space-y-3">
                            <li>
                              <strong>Receive Packet:</strong> Node receives the Sphinx packet and
                              extracts the ephemeral public key.
                            </li>
                            <li>
                              <strong>Derive Shared Secret:</strong> Node uses its private key and
                              the packet's public key to compute the shared secret.
                            </li>
                            <li>
                              <strong>Decrypt Own Layer:</strong> Using the shared secret to derive
                              decryption keys, the node:
                              <ul className="list-disc pl-5 mt-1 space-y-1">
                                <li>Verifies the HMAC to ensure packet integrity</li>
                                <li>Decrypts its routing information</li>
                                <li>Learns the next-hop node identifier</li>
                                <li>Discovers amount to forward and any fees to collect</li>
                              </ul>
                            </li>
                            <li>
                              <strong>Blind the Packet:</strong> Performs cryptographic operations
                              that effectively "peel" its layer while maintaining packet size.
                            </li>
                          </ol>
                        </div>
                      </div>
                    </div>

                    {/* Step 3 */}
                    <div className="relative flex gap-4">
                      <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-primary text-primary-foreground shadow-md">
                        <span className="text-sm font-bold">3</span>
                      </div>
                      <div className="pb-8">
                        <h4 className="font-medium mb-2">Final Recipient Processing</h4>
                        <div className="p-4 bg-background rounded-lg text-sm text-muted-foreground">
                          <ol className="list-decimal pl-5 space-y-3">
                            <li>
                              <strong>Decrypt Final Layer:</strong> The recipient node decrypts its
                              layer of the onion.
                            </li>
                            <li>
                              <strong>Identify Payment:</strong> The inner payload contains a
                              payment hash that corresponds to an invoice the recipient previously
                              created.
                            </li>
                            <li>
                              <strong>Claim Payment:</strong> By releasing the preimage (the secret
                              that hashes to the payment hash), the recipient can claim the payment.
                            </li>
                            <li>
                              <strong>Backwards Settlement:</strong> The preimage travels back
                              through the route, allowing each node to claim its incoming HTLC.
                            </li>
                          </ol>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-card p-6 rounded-lg border border-border">
            <h3 className="text-lg font-medium mb-4">Visualizing Onion Routing</h3>
            <div className="space-y-6">
              <div className="relative w-full md:h-96 bg-gradient-to-b from-background to-muted/30 rounded-lg border border-border p-6 overflow-hidden">
                {/* Node Representations */}
                <div className="flex flex-col md:flex-row justify-between items-center mb-8 md:mb-12 px-4">
                  <div className="h-20 w-20 rounded-full bg-background border border-border shadow-md flex flex-col items-center justify-center mb-4 md:mb-0">
                    <Shuffle className="h-6 w-6 text-primary mb-1" />
                    <span className="text-xs font-medium">Sender</span>
                  </div>

                  <svg className="hidden md:block w-16 h-8">
                    <path
                      d="M0 4 L56 4"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeDasharray="4 2"
                    />
                    <path d="M56 4 L66 4" stroke="currentColor" strokeWidth="1.5" />
                    <path
                      d="M64 1 L66 4 L64 7"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.5"
                    />
                  </svg>
                  <div className="md:hidden h-8 w-8 flex justify-center items-center">
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M12 5v14"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                      />
                      <path
                        d="M19 12l-7 7-7-7"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>

                  <div className="h-20 w-20 rounded-full bg-background border border-border shadow-md flex flex-col items-center justify-center mb-4 md:mb-0">
                    <Network className="h-6 w-6 text-primary mb-1" />
                    <span className="text-xs font-medium">Node A</span>
                  </div>

                  <svg className="hidden md:block w-16 h-8">
                    <path
                      d="M0 4 L56 4"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeDasharray="4 2"
                    />
                    <path d="M56 4 L66 4" stroke="currentColor" strokeWidth="1.5" />
                    <path
                      d="M64 1 L66 4 L64 7"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.5"
                    />
                  </svg>
                  <div className="md:hidden h-8 w-8 flex justify-center items-center">
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M12 5v14"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                      />
                      <path
                        d="M19 12l-7 7-7-7"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>

                  <div className="h-20 w-20 rounded-full bg-background border border-border shadow-md flex flex-col items-center justify-center mb-4 md:mb-0">
                    <Network className="h-6 w-6 text-primary mb-1" />
                    <span className="text-xs font-medium">Node B</span>
                  </div>

                  <svg className="hidden md:block w-16 h-8">
                    <path
                      d="M0 4 L56 4"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeDasharray="4 2"
                    />
                    <path d="M56 4 L66 4" stroke="currentColor" strokeWidth="1.5" />
                    <path
                      d="M64 1 L66 4 L64 7"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.5"
                    />
                  </svg>
                  <div className="md:hidden h-8 w-8 flex justify-center items-center">
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M12 5v14"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                      />
                      <path
                        d="M19 12l-7 7-7-7"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>

                  <div className="h-20 w-20 rounded-full bg-background border border-border shadow-md flex flex-col items-center justify-center">
                    <Lock className="h-6 w-6 text-primary mb-1" />
                    <span className="text-xs font-medium">Recipient</span>
                  </div>
                </div>

                {/* Onion Layer Visualizations */}
                <div className="grid grid-cols-1 md:grid-cols-4 gap-6 h-44">
                  {/* Full Onion */}
                  <div className="flex flex-col items-center text-center">
                    <div className="w-20 h-20 rounded-full bg-muted flex items-center justify-center relative">
                      <div className="absolute inset-0 border-4 border-primary/80 rounded-full"></div>
                      <div className="absolute inset-[6px] border-3 border-primary/60 rounded-full"></div>
                      <div className="absolute inset-[12px] border-2 border-primary/40 rounded-full"></div>
                      <div className="absolute inset-[18px] border border-primary/20 rounded-full"></div>
                      <div className="absolute inset-[24px] bg-primary/10 rounded-full"></div>
                    </div>
                    <div className="mt-3 space-y-1">
                      <h5 className="text-xs font-medium">Complete Onion Packet</h5>
                      <p className="text-[10px] text-muted-foreground">
                        All routing data encrypted in multiple layers
                      </p>
                    </div>
                  </div>

                  {/* First Layer Peeled */}
                  <div className="flex flex-col items-center text-center">
                    <div className="w-20 h-20 rounded-full bg-muted flex items-center justify-center relative">
                      <div className="absolute inset-0 border-4 border-primary/80 opacity-30 rounded-full border-dashed"></div>
                      <div className="absolute inset-[6px] border-3 border-primary/60 rounded-full"></div>
                      <div className="absolute inset-[12px] border-2 border-primary/40 rounded-full"></div>
                      <div className="absolute inset-[18px] border border-primary/20 rounded-full"></div>
                      <div className="absolute inset-[24px] bg-primary/10 rounded-full"></div>
                    </div>
                    <div className="mt-3 space-y-1">
                      <h5 className="text-xs font-medium">First Layer Decrypted</h5>
                      <p className="text-[10px] text-muted-foreground">
                        Node A peels its layer and forwards
                      </p>
                    </div>
                  </div>

                  {/* Second Layer Peeled */}
                  <div className="flex flex-col items-center text-center">
                    <div className="w-20 h-20 rounded-full bg-muted flex items-center justify-center relative">
                      <div className="absolute inset-0 border-4 border-primary/80 opacity-30 rounded-full border-dashed"></div>
                      <div className="absolute inset-[6px] border-3 border-primary/60 opacity-30 rounded-full border-dashed"></div>
                      <div className="absolute inset-[12px] border-2 border-primary/40 rounded-full"></div>
                      <div className="absolute inset-[18px] border border-primary/20 rounded-full"></div>
                      <div className="absolute inset-[24px] bg-primary/10 rounded-full"></div>
                    </div>
                    <div className="mt-3 space-y-1">
                      <h5 className="text-xs font-medium">Second Layer Decrypted</h5>
                      <p className="text-[10px] text-muted-foreground">
                        Node B peels its layer and forwards
                      </p>
                    </div>
                  </div>

                  {/* Final Payload */}
                  <div className="flex flex-col items-center text-center">
                    <div className="w-20 h-20 rounded-full bg-muted flex items-center justify-center relative">
                      <div className="absolute inset-0 border-4 border-primary/80 opacity-30 rounded-full border-dashed"></div>
                      <div className="absolute inset-[6px] border-3 border-primary/60 opacity-30 rounded-full border-dashed"></div>
                      <div className="absolute inset-[12px] border-2 border-primary/40 opacity-30 rounded-full border-dashed"></div>
                      <div className="absolute inset-[18px] border border-primary/20 rounded-full"></div>
                      <div className="absolute inset-[24px] bg-primary/10 rounded-full"></div>
                    </div>
                    <div className="mt-3 space-y-1">
                      <h5 className="text-xs font-medium">Final Payload Reached</h5>
                      <p className="text-[10px] text-muted-foreground">
                        Recipient accesses payment information
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Key Information Table */}
              <div className="p-4 bg-background rounded-lg border border-border">
                <h4 className="font-medium mb-3 text-sm">Information Visible to Each Party</h4>
                <div className="overflow-x-auto">
                  <table className="w-full min-w-[500px] text-xs">
                    <thead>
                      <tr className="border-b border-border">
                        <th className="text-left p-2">Node</th>
                        <th className="text-left p-2">Knows Sender</th>
                        <th className="text-left p-2">Knows Recipient</th>
                        <th className="text-left p-2">Knows Full Route</th>
                        <th className="text-left p-2">Knows Payment Amount</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="border-b border-border/50">
                        <td className="p-2 font-medium">Sender</td>
                        <td className="p-2 text-green-600 dark:text-green-400">Yes (self)</td>
                        <td className="p-2 text-green-600 dark:text-green-400">Yes</td>
                        <td className="p-2 text-green-600 dark:text-green-400">Yes</td>
                        <td className="p-2 text-green-600 dark:text-green-400">Yes</td>
                      </tr>
                      <tr className="border-b border-border/50">
                        <td className="p-2 font-medium">Node A</td>
                        <td className="p-2 text-green-600 dark:text-green-400">
                          Sees previous hop
                        </td>
                        <td className="p-2 text-red-600 dark:text-red-400">No</td>
                        <td className="p-2 text-red-600 dark:text-red-400">No</td>
                        <td className="p-2 text-amber-600 dark:text-amber-400">
                          Sees forward amount
                        </td>
                      </tr>
                      <tr className="border-b border-border/50">
                        <td className="p-2 font-medium">Node B</td>
                        <td className="p-2 text-red-600 dark:text-red-400">No</td>
                        <td className="p-2 text-green-600 dark:text-green-400">Sees next hop</td>
                        <td className="p-2 text-red-600 dark:text-red-400">No</td>
                        <td className="p-2 text-amber-600 dark:text-amber-400">
                          Sees forward amount
                        </td>
                      </tr>
                      <tr>
                        <td className="p-2 font-medium">Recipient</td>
                        <td className="p-2 text-red-600 dark:text-red-400">No</td>
                        <td className="p-2 text-green-600 dark:text-green-400">Yes (self)</td>
                        <td className="p-2 text-red-600 dark:text-red-400">No</td>
                        <td className="p-2 text-green-600 dark:text-green-400">Yes</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <p className="text-xs text-muted-foreground mt-3">
                  Each node in the route only has partial information, preserving the privacy of the
                  overall payment.
                </p>
              </div>
            </div>
          </div>

          <div className="bg-card p-6 rounded-lg border border-border">
            <h3 className="text-lg font-medium mb-4">Advanced Privacy Techniques</h3>
            <div className="space-y-6">
              <p className="text-muted-foreground leading-relaxed">
                Beyond basic onion routing, the Lightning Network incorporates additional
                privacy-enhancing techniques:
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="p-5 bg-background rounded-lg border border-border h-full">
                  <h4 className="font-medium mb-3 flex items-center">
                    <EyeOff className="h-5 w-5 text-primary mr-2" />
                    Amount Blinding
                  </h4>
                  <div className="space-y-3">
                    <p className="text-sm text-muted-foreground">
                      To prevent amount correlation attacks, the Lightning Network supports
                      techniques to obscure the exact payment amount:
                    </p>
                    <div className="p-3 bg-muted/30 rounded-lg text-xs">
                      <ul className="list-disc pl-4 space-y-2">
                        <li>
                          <span className="font-medium">Basic Fee Obfuscation:</span> Each hop
                          charges a fee, so the amount decreases slightly at each step, making
                          perfect correlation harder
                        </li>
                        <li>
                          <span className="font-medium">Variable-size HTLCs:</span> Adding random
                          amounts to payments to obscure the true value
                        </li>
                        <li>
                          <span className="font-medium">Multi-part Payments (MPP):</span> Breaking a
                          payment into multiple smaller payments that take different routes
                        </li>
                      </ul>
                    </div>
                    <div className="p-3 bg-muted/50 rounded-lg mt-4 text-xs">
                      <p className="italic text-muted-foreground">
                        "Splitting payments into random-sized chunks across multiple routes creates
                        a form of financial chaff that significantly increases the difficulty of
                        transaction analysis."
                      </p>
                    </div>
                  </div>
                </div>

                <div className="p-5 bg-background rounded-lg border border-border h-full">
                  <h4 className="font-medium mb-3 flex items-center">
                    <Shuffle className="h-5 w-5 text-primary mr-2" />
                    Timing Obfuscation
                  </h4>
                  <div className="space-y-3">
                    <p className="text-sm text-muted-foreground">
                      Timing analysis can potentially link payments as they move through the
                      network. Several techniques mitigate this risk:
                    </p>
                    <div className="p-3 bg-muted/30 rounded-lg text-xs">
                      <ul className="list-disc pl-4 space-y-2">
                        <li>
                          <span className="font-medium">Hold Time Randomization:</span> Nodes can
                          add random delays before forwarding payments to break timing correlations
                        </li>
                        <li>
                          <span className="font-medium">Parallel Path Selection:</span> Using
                          multiple paths simultaneously creates timing ambiguity
                        </li>
                        <li>
                          <span className="font-medium">Payload Padding:</span> Adding random data
                          to ensure all Sphinx packets look identical regardless of position in
                          route
                        </li>
                      </ul>
                    </div>
                    <div className="p-3 bg-muted/50 rounded-lg mt-4 text-xs">
                      <p className="italic text-muted-foreground">
                        "Advanced timing obfuscation techniques draw inspiration from mix networks
                        used in high-security communication systems, applying these concepts to
                        financial transactions."
                      </p>
                    </div>
                  </div>
                </div>

                <div className="p-5 bg-background rounded-lg border border-border h-full">
                  <h4 className="font-medium mb-3 flex items-center">
                    <Network className="h-5 w-5 text-primary mr-2" />
                    Route Randomization
                  </h4>
                  <div className="space-y-3">
                    <p className="text-sm text-muted-foreground">
                      Selecting unpredictable routes further enhances privacy by preventing pattern
                      analysis:
                    </p>
                    <div className="p-3 bg-muted/30 rounded-lg text-xs">
                      <ul className="list-disc pl-4 space-y-2">
                        <li>
                          <span className="font-medium">Random Route Selection:</span> Choosing
                          different paths for payments even to the same recipient
                        </li>
                        <li>
                          <span className="font-medium">Extra Hop Insertion:</span> Adding
                          additional hops beyond the shortest path to increase privacy
                        </li>
                        <li>
                          <span className="font-medium">Trampoline Routing:</span> Delegating
                          partial route selection to trusted intermediate nodes
                        </li>
                      </ul>
                    </div>
                    <div className="p-3 bg-muted/50 rounded-lg mt-4 text-xs">
                      <p className="italic text-muted-foreground">
                        "By introducing randomness and unpredictability into routing decisions, the
                        network creates plausible deniability for all participants, making traffic
                        analysis substantially more complex."
                      </p>
                    </div>
                  </div>
                </div>

                <div className="p-5 bg-background rounded-lg border border-border h-full">
                  <h4 className="font-medium mb-3 flex items-center">
                    <Shield className="h-5 w-5 text-primary mr-2" />
                    Rendezvous Routing
                  </h4>
                  <div className="space-y-3">
                    <p className="text-sm text-muted-foreground">
                      A proposed advanced technique for sender-recipient privacy:
                    </p>
                    <div className="p-3 bg-muted/30 rounded-lg text-xs">
                      <ul className="list-disc pl-4 space-y-2">
                        <li>
                          <span className="font-medium">Blind Meeting Points:</span> Sender and
                          recipient each choose part of the route, meeting at an intermediate
                          rendezvous point
                        </li>
                        <li>
                          <span className="font-medium">Two-sided Anonymity:</span> Neither sender
                          nor recipient needs to know the other's network location
                        </li>
                        <li>
                          <span className="font-medium">Invoice Privacy:</span> Enhanced with
                          blinded paths that hide recipient node information
                        </li>
                      </ul>
                    </div>
                    <div className="p-3 bg-muted/50 rounded-lg mt-4 text-xs">
                      <p className="italic text-muted-foreground">
                        "Rendezvous routing represents the cutting edge of Lightning Network privacy
                        research, potentially offering privacy guarantees comparable to those of
                        advanced anonymity networks."
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-card p-6 rounded-lg border border-border">
            <h3 className="text-lg font-medium mb-4">Privacy Challenges and Limitations</h3>
            <div className="space-y-4">
              <p className="text-muted-foreground leading-relaxed">
                While onion routing provides strong privacy guarantees, several challenges and
                attack vectors remain:
              </p>

              <div className="p-5 bg-background rounded-lg border border-border">
                <h4 className="font-medium mb-3">Known Limitations</h4>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="p-4 bg-muted/30 rounded-lg">
                    <h5 className="flex items-center font-medium mb-2 text-sm">
                      <AlertCircle className="h-4 w-4 text-amber-600 dark:text-amber-400 mr-2" />
                      Timing Analysis
                    </h5>
                    <p className="text-xs text-muted-foreground">
                      An observer controlling multiple nodes in the network might correlate timing
                      of incoming and outgoing payments, especially in a low-traffic network. This
                      is most effective if the attacker controls nodes at both ends of a route
                      segment.
                    </p>
                  </div>

                  <div className="p-4 bg-muted/30 rounded-lg">
                    <h5 className="flex items-center font-medium mb-2 text-sm">
                      <AlertCircle className="h-4 w-4 text-amber-600 dark:text-amber-400 mr-2" />
                      Balance Probing
                    </h5>
                    <p className="text-xs text-muted-foreground">
                      An attacker can send probe payments to determine channel balances, revealing
                      information about payment flows. This works by attempting payments of
                      different sizes and observing which ones succeed or fail.
                    </p>
                  </div>

                  <div className="p-4 bg-muted/30 rounded-lg">
                    <h5 className="flex items-center font-medium mb-2 text-sm">
                      <AlertCircle className="h-4 w-4 text-amber-600 dark:text-amber-400 mr-2" />
                      Channel Graph Analysis
                    </h5>
                    <p className="text-xs text-muted-foreground">
                      The Lightning Network's public channel graph reveals connectivity patterns.
                      While individual payments are private, the network structure itself is public,
                      which can be used for probabilistic route analysis.
                    </p>
                  </div>

                  <div className="p-4 bg-muted/30 rounded-lg">
                    <h5 className="flex items-center font-medium mb-2 text-sm">
                      <AlertCircle className="h-4 w-4 text-amber-600 dark:text-amber-400 mr-2" />
                      Invoice Correlation
                    </h5>
                    <p className="text-xs text-muted-foreground">
                      Standard Lightning invoices contain routing hints that might reveal the
                      recipient's node or channel information. While this helps with routing, it can
                      reduce privacy if invoices are leaked or shared publicly.
                    </p>
                  </div>
                </div>

                <div className="mt-4 p-4 bg-amber-50 dark:bg-amber-900/20 rounded-lg">
                  <h5 className="font-medium mb-2 flex items-center">
                    <Workflow className="h-5 w-5 text-amber-600 dark:text-amber-400 mr-2" />
                    Technical Insight
                  </h5>
                  <p className="text-sm text-muted-foreground">
                    "The most effective attacks against onion routing come from adversaries who can
                    observe multiple points in the network. This is the same challenge faced by Tor
                    and other privacy networks. Increasing network density and transaction volume
                    helps mitigate these risks by creating more 'noise' that makes correlation
                    harder."
                  </p>
                </div>
              </div>

              <div className="p-5 bg-background rounded-lg border border-border">
                <h4 className="font-medium mb-3">Future Privacy Enhancements</h4>

                <div className="space-y-3">
                  <p className="text-sm text-muted-foreground">
                    The Lightning Network community continues to research and implement enhanced
                    privacy features:
                  </p>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="p-3 bg-muted/30 rounded-lg text-xs">
                      <h5 className="font-medium mb-1">Blinded Paths</h5>
                      <p className="text-muted-foreground">
                        Allows recipients to include encrypted routing information in invoices
                        without revealing their node identity or network location.
                      </p>
                    </div>

                    <div className="p-3 bg-muted/30 rounded-lg text-xs">
                      <h5 className="font-medium mb-1">TOR Integration</h5>
                      <p className="text-muted-foreground">
                        Running Lightning nodes over TOR adds an additional layer of network-level
                        privacy, hiding IP addresses and physical locations.
                      </p>
                    </div>

                    <div className="p-3 bg-muted/30 rounded-lg text-xs">
                      <h5 className="font-medium mb-1">Trampoline Payments</h5>
                      <p className="text-muted-foreground">
                        Allows lightweight clients to delegate route finding to trusted nodes while
                        still maintaining payment privacy.
                      </p>
                    </div>

                    <div className="p-3 bg-muted/30 rounded-lg text-xs">
                      <h5 className="font-medium mb-1">Private Channels</h5>
                      <p className="text-muted-foreground">
                        Channels that aren't announced to the public network, providing additional
                        privacy for direct connections between trusted parties.
                      </p>
                    </div>
                  </div>

                  <div className="p-3 bg-muted/50 rounded-lg text-xs mt-2">
                    <p className="text-muted-foreground">
                      Each new privacy enhancement represents a trade-off between privacy,
                      efficiency, and usability. The Lightning Network's flexible architecture
                      allows for ongoing innovation in this area.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="p-6 bg-card rounded-lg border border-border">
            <h4 className="font-medium mb-4 text-lg">Satoshi's Perspective</h4>
            <div className="p-5 bg-muted/50 rounded-lg border border-border text-sm text-muted-foreground italic leading-relaxed">
              <p>
                "The privacy innovations in Lightning's onion routing reflect the core ethos of
                Bitcoin: using cryptography creatively to solve problems that once required trusted
                third parties. In Bitcoin's blockchain, pseudonymity was the best we could achieve
                while maintaining a public ledger. With Lightning, we approach true transactional
                privacy.
              </p>
              <p className="mt-3">
                I find it fascinating how the Lightning Network combines concepts from different
                cryptographic domains—payment channels from Bitcoin, onion routing from privacy
                networks like Tor, and threshold cryptography from secure multi-party computation.
                This cross-pollination of ideas is exactly how technological evolution should work.
              </p>
              <p className="mt-3">
                The beauty of onion routing isn't just in its privacy properties, but in how it
                enables a distributed network to route payments without any central coordinator.
                Each node only needs to know its immediate connections, yet together they form a
                network capable of finding optimal routes across the globe. This embodies the
                Bitcoin principle of emergent order from simple rules."
              </p>
            </div>
          </div>

          <div className="mt-6 border-t border-border/40 pt-4">
            <VerifyCheckbox
              moduleId="lightning-fundamentals"
              verificationId="onion-routing"
              label="I understand how onion routing works in Lightning and its privacy implications"
            />
          </div>
        </div>
      </ModuleContent>
  );
}
