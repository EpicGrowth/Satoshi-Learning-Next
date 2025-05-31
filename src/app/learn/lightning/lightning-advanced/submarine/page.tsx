'use client';

import React from 'react';
import { ModuleLayout } from '@/components/learn/shared/module-layout';
import { ModuleContent } from '@/components/learn/shared/module-content';
import VerifyCheckbox from '@/components/learn/shared/verify-checkbox';
import { Card } from '@/components/ui/card';
import { Anchor, ArrowRight, Waves, GitCompare, ArrowUpDown } from 'lucide-react';

const moduleId = 'lightning-advanced';
const sectionId = 'submarine';

export default function SubmarineSwapsPage() {
  return (
    <ModuleLayout>
      <ModuleContent 
        moduleId={moduleId} 
        sectionId={sectionId}
        moduleTitle="Submarine Swaps"
        moduleDescription="Understanding submarine swaps"
        difficulty="Advanced"
        icon={Anchor}
        checkpoints={1}
      >
        <div className="space-y-8">
          <Card className="p-6">
            <h2 className="text-xl font-bold mb-4">Submarine Swaps: Bridging On-Chain and Lightning</h2>
            
            <div className="space-y-6">
              <div className="prose dark:prose-invert max-w-none">
                <h3>What Are Submarine Swaps?</h3>
                <p>
                  Submarine Swaps are a specialized form of atomic swap that enables trustless exchanges between 
                  Bitcoin's on-chain transactions and Lightning Network payments. They allow users to move funds 
                  between the two systems without requiring direct channel connections.
                </p>
                <p>
                  Named "submarine" because the connection between the on-chain transaction and the Lightning 
                  payment remains hidden to outside observers, these swaps provide enhanced privacy while 
                  enabling important liquidity services for the Lightning Network ecosystem.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="bg-blue-50 dark:bg-blue-900/20 p-6 rounded-lg">
                  <h4 className="font-medium mb-4 flex items-center">
                    <Anchor className="h-5 w-5 text-blue-600 mr-2" />
                    On-Chain to Lightning
                  </h4>
                  <div className="text-sm text-muted-foreground space-y-2">
                    <p>
                      A user who only has on-chain Bitcoin wants to pay a Lightning invoice. The swap 
                      provider receives the on-chain funds and fulfills the Lightning payment on the user's 
                      behalf.
                    </p>
                    <p>
                      This is sometimes called a "Loop In" operation, as it brings liquidity into the 
                      Lightning Network.
                    </p>
                  </div>
                </div>

                <div className="bg-blue-50 dark:bg-blue-900/20 p-6 rounded-lg">
                  <h4 className="font-medium mb-4 flex items-center">
                    <Waves className="h-5 w-5 text-blue-600 mr-2" />
                    Lightning to On-Chain
                  </h4>
                  <div className="text-sm text-muted-foreground space-y-2">
                    <p>
                      A user wants to convert Lightning funds to on-chain Bitcoin. The swap provider 
                      receives the Lightning payment and sends on-chain funds to the user's specified 
                      address.
                    </p>
                    <p>
                      This is sometimes called a "Loop Out" operation, as it extracts liquidity from the 
                      Lightning Network back to the chain.
                    </p>
                  </div>
                </div>
              </div>

              <div className="border-l-4 border-blue-500 pl-4 italic">
                "Submarine Swaps are one of the most important interoperability tools for the Lightning Network, 
                creating a seamless bridge between Bitcoin's base layer and its second layer payment network."
              </div>
            </div>
          </Card>

          <Card className="p-6">
            <h3 className="text-lg font-bold mb-4 flex items-center">
              <GitCompare className="h-5 w-5 mr-2" />
              How Submarine Swaps Work (Technical Implementation)
            </h3>

            <div className="space-y-6">
              <p className="text-muted-foreground">
                At their core, Submarine Swaps rely on Hash Time-Locked Contracts (HTLCs) to ensure 
                atomicity—either both sides of the swap complete successfully, or neither does.
              </p>

              <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg">
                <h4 className="font-medium mb-3">On-Chain to Lightning (Loop In)</h4>
                <div className="relative py-6">
                  <div className="absolute left-4 h-full w-0.5 bg-gradient-to-b from-blue-600/30 via-blue-600 to-blue-600/30"></div>
                  
                  <div className="ml-10 space-y-6">
                    <div className="relative">
                      <div className="absolute -left-10 top-0 h-8 w-8 rounded-full bg-blue-100 dark:bg-blue-900/50 flex items-center justify-center">
                        <span className="text-blue-600 font-medium">1</span>
                      </div>
                      <p className="text-sm">
                        <span className="font-medium">User Has Invoice: </span>
                        <span className="text-muted-foreground">
                          User wants to pay a Lightning invoice but only has on-chain BTC.
                        </span>
                      </p>
                    </div>

                    <div className="relative">
                      <div className="absolute -left-10 top-0 h-8 w-8 rounded-full bg-blue-100 dark:bg-blue-900/50 flex items-center justify-center">
                        <span className="text-blue-600 font-medium">2</span>
                      </div>
                      <p className="text-sm">
                        <span className="font-medium">Contact Swap Provider: </span>
                        <span className="text-muted-foreground">
                          The user contacts a submarine swap provider and shares the invoice details.
                        </span>
                      </p>
                    </div>

                    <div className="relative">
                      <div className="absolute -left-10 top-0 h-8 w-8 rounded-full bg-blue-100 dark:bg-blue-900/50 flex items-center justify-center">
                        <span className="text-blue-600 font-medium">3</span>
                      </div>
                      <p className="text-sm">
                        <span className="font-medium">HTLC Deployment: </span>
                        <span className="text-muted-foreground">
                          The swap provider creates an on-chain HTLC that locks funds and can only be 
                          unlocked with the same payment preimage that will unlock the Lightning payment.
                        </span>
                      </p>
                    </div>

                    <div className="relative">
                      <div className="absolute -left-10 top-0 h-8 w-8 rounded-full bg-blue-100 dark:bg-blue-900/50 flex items-center justify-center">
                        <span className="text-blue-600 font-medium">4</span>
                      </div>
                      <p className="text-sm">
                        <span className="font-medium">User Funds HTLC: </span>
                        <span className="text-muted-foreground">
                          The user sends on-chain BTC to the HTLC address.
                        </span>
                      </p>
                    </div>

                    <div className="relative">
                      <div className="absolute -left-10 top-0 h-8 w-8 rounded-full bg-blue-100 dark:bg-blue-900/50 flex items-center justify-center">
                        <span className="text-blue-600 font-medium">5</span>
                      </div>
                      <p className="text-sm">
                        <span className="font-medium">Lightning Payment: </span>
                        <span className="text-muted-foreground">
                          The swap provider pays the Lightning invoice, learning the preimage in the process.
                        </span>
                      </p>
                    </div>

                    <div className="relative">
                      <div className="absolute -left-10 top-0 h-8 w-8 rounded-full bg-blue-100 dark:bg-blue-900/50 flex items-center justify-center">
                        <span className="text-blue-600 font-medium">6</span>
                      </div>
                      <p className="text-sm">
                        <span className="font-medium">Claim On-Chain Funds: </span>
                        <span className="text-muted-foreground">
                          The swap provider uses the preimage to claim the on-chain funds from the HTLC.
                        </span>
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg mt-6">
                <h4 className="font-medium mb-3">Lightning to On-Chain (Loop Out)</h4>
                <div className="relative py-6">
                  <div className="absolute left-4 h-full w-0.5 bg-gradient-to-b from-blue-600/30 via-blue-600 to-blue-600/30"></div>
                  
                  <div className="ml-10 space-y-6">
                    <div className="relative">
                      <div className="absolute -left-10 top-0 h-8 w-8 rounded-full bg-blue-100 dark:bg-blue-900/50 flex items-center justify-center">
                        <span className="text-blue-600 font-medium">1</span>
                      </div>
                      <p className="text-sm">
                        <span className="font-medium">User Needs On-Chain: </span>
                        <span className="text-muted-foreground">
                          User has Lightning BTC but needs on-chain funds (e.g., to rebalance channels).
                        </span>
                      </p>
                    </div>

                    <div className="relative">
                      <div className="absolute -left-10 top-0 h-8 w-8 rounded-full bg-blue-100 dark:bg-blue-900/50 flex items-center justify-center">
                        <span className="text-blue-600 font-medium">2</span>
                      </div>
                      <p className="text-sm">
                        <span className="font-medium">Contact Swap Provider: </span>
                        <span className="text-muted-foreground">
                          The user contacts a swap provider with their on-chain Bitcoin address.
                        </span>
                      </p>
                    </div>

                    <div className="relative">
                      <div className="absolute -left-10 top-0 h-8 w-8 rounded-full bg-blue-100 dark:bg-blue-900/50 flex items-center justify-center">
                        <span className="text-blue-600 font-medium">3</span>
                      </div>
                      <p className="text-sm">
                        <span className="font-medium">On-Chain HTLC Creation: </span>
                        <span className="text-muted-foreground">
                          The swap provider creates an on-chain HTLC using a secret they generate.
                        </span>
                      </p>
                    </div>

                    <div className="relative">
                      <div className="absolute -left-10 top-0 h-8 w-8 rounded-full bg-blue-100 dark:bg-blue-900/50 flex items-center justify-center">
                        <span className="text-blue-600 font-medium">4</span>
                      </div>
                      <p className="text-sm">
                        <span className="font-medium">Invoice Creation: </span>
                        <span className="text-muted-foreground">
                          The swap provider creates a Lightning invoice using the same hash and shares it with the user.
                        </span>
                      </p>
                    </div>

                    <div className="relative">
                      <div className="absolute -left-10 top-0 h-8 w-8 rounded-full bg-blue-100 dark:bg-blue-900/50 flex items-center justify-center">
                        <span className="text-blue-600 font-medium">5</span>
                      </div>
                      <p className="text-sm">
                        <span className="font-medium">Lightning Payment: </span>
                        <span className="text-muted-foreground">
                          The user pays the Lightning invoice.
                        </span>
                      </p>
                    </div>

                    <div className="relative">
                      <div className="absolute -left-10 top-0 h-8 w-8 rounded-full bg-blue-100 dark:bg-blue-900/50 flex items-center justify-center">
                        <span className="text-blue-600 font-medium">6</span>
                      </div>
                      <p className="text-sm">
                        <span className="font-medium">Release Secret: </span>
                        <span className="text-muted-foreground">
                          The swap provider reveals the preimage to claim the Lightning payment.
                        </span>
                      </p>
                    </div>

                    <div className="relative">
                      <div className="absolute -left-10 top-0 h-8 w-8 rounded-full bg-blue-100 dark:bg-blue-900/50 flex items-center justify-center">
                        <span className="text-blue-600 font-medium">7</span>
                      </div>
                      <p className="text-sm">
                        <span className="font-medium">Claim On-Chain: </span>
                        <span className="text-muted-foreground">
                          With the preimage now public, the user can claim the on-chain funds from the HTLC.
                        </span>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Card>

          <Card className="p-6">
            <h3 className="text-lg font-bold mb-4">Use Cases and Applications</h3>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="border border-border p-5 rounded-lg">
                <div className="h-12 w-12 bg-yellow-100 dark:bg-yellow-900/30 rounded-full flex items-center justify-center mb-4">
                  <ArrowUpDown className="h-6 w-6 text-yellow-600" />
                </div>
                <h4 className="font-medium mb-2">Channel Rebalancing</h4>
                <p className="text-sm text-muted-foreground">
                  Lightning node operators can rebalance their channels by moving funds in one direction
                  on-chain while moving them in the opposite direction through Lightning channels.
                </p>
              </div>

              <div className="border border-border p-5 rounded-lg">
                <div className="h-12 w-12 bg-green-100 dark:bg-green-900/30 rounded-full flex items-center justify-center mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6 text-green-600">
                    <path d="M19 5c-1.5 0-2.8 1.4-3 2-3.5-1.5-11-.3-11 5 0 1.8 0 3 2 4.5V20h4v-2h3v2h4v-4c1-.5 1.7-1 2-2h2v-4h-2c0-1-.5-1.5-1-2h0V5z" />
                    <path d="M2 9v1c0 1.1.9 2 2 2h1" />
                    <path d="M16 11h0" />
                  </svg>
                </div>
                <h4 className="font-medium mb-2">Exchange Integration</h4>
                <p className="text-sm text-muted-foreground">
                  Cryptocurrency exchanges can offer Lightning deposits and withdrawals without having to
                  directly manage Lightning channels with each customer.
                </p>
              </div>

              <div className="border border-border p-5 rounded-lg">
                <div className="h-12 w-12 bg-blue-100 dark:bg-blue-900/30 rounded-full flex items-center justify-center mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6 text-blue-600">
                    <rect width="20" height="14" x="2" y="5" rx="2" />
                    <line x1="2" x2="22" y1="10" y2="10" />
                  </svg>
                </div>
                <h4 className="font-medium mb-2">Instant Deposits</h4>
                <p className="text-sm text-muted-foreground">
                  Services that require on-chain Bitcoin deposits can accept Lightning payments instead,
                  offering instant confirmation without waiting for on-chain transactions.
                </p>
              </div>
            </div>
          </Card>

          <Card className="p-6 bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20">
            <h3 className="text-lg font-bold mb-4">Security and Trust Considerations</h3>

            <div className="space-y-4">
              <p className="text-muted-foreground">
                While Submarine Swaps are designed to be trustless, there are several security factors to consider:
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="bg-white dark:bg-gray-800 p-4 rounded-lg">
                  <h4 className="font-medium mb-2">Chain Confirmation Times</h4>
                  <p className="text-sm text-muted-foreground">
                    On-chain HTLCs require confirmation before they're secure, creating a time delay.
                    Lightning payments are nearly instant, creating a timing mismatch that needs careful handling.
                  </p>
                </div>

                <div className="bg-white dark:bg-gray-800 p-4 rounded-lg">
                  <h4 className="font-medium mb-2">Fee Considerations</h4>
                  <p className="text-sm text-muted-foreground">
                    Swap providers typically charge fees for their services. These fees need to be factored into 
                    the swap calculations, especially during periods of high on-chain fees.
                  </p>
                </div>

                <div className="bg-white dark:bg-gray-800 p-4 rounded-lg">
                  <h4 className="font-medium mb-2">Timelock Management</h4>
                  <p className="text-sm text-muted-foreground">
                    HTLCs include timelocks to ensure funds can be reclaimed if the swap fails. These timeouts 
                    must be carefully set to avoid race conditions or locked funds.
                  </p>
                </div>

                <div className="bg-white dark:bg-gray-800 p-4 rounded-lg">
                  <h4 className="font-medium mb-2">Liquidity Requirements</h4>
                  <p className="text-sm text-muted-foreground">
                    Swap providers need sufficient liquidity both on-chain and in Lightning channels to 
                    facilitate swaps, which can limit availability during high-demand periods.
                  </p>
                </div>
              </div>
            </div>
          </Card>

          <div className="mt-6">
            <VerifyCheckbox
              moduleId={moduleId}
              sectionId={sectionId}
              verificationId="submarine-swaps-basics"
              label="I understand how Submarine Swaps connect on-chain Bitcoin and Lightning Network"
            />
          </div>
        </div>
      </ModuleContent>
    </ModuleLayout>
  );
}
