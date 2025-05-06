'use client';

import React from 'react';
import { ModuleLayout } from '@/components/learn/shared/module-layout';
import { ModuleContent } from '@/components/learn/shared/module-content';
import VerifyCheckbox from '@/components/learn/shared/verify-checkbox';
import { Card } from '@/components/ui/card';
import { Split, ArrowRight, Zap, RefreshCw, LayoutGrid } from 'lucide-react';

const moduleId = 'lightning-advanced';
const sectionId = 'multipath';

export default function MultipathPaymentsPage() {
  return (
    <ModuleLayout>
      <ModuleContent moduleId={moduleId} sectionId={sectionId}>
        <div className="space-y-8">
          <Card className="p-6">
            <h2 className="text-xl font-bold mb-4">Multipath Payments: Enhancing Lightning Network Capabilities</h2>
            
            <div className="space-y-6">
              <div className="prose dark:prose-invert max-w-none">
                <h3>What Are Multipath Payments?</h3>
                <p>
                  Multipath payments are an advanced feature of the Lightning Network that allows a single payment to be split 
                  across multiple payment channels and routes, then recombined at the destination. This technique significantly 
                  enhances the capabilities and flexibility of the Lightning Network.
                </p>
                <p>
                  Instead of being limited by the capacity of a single channel, users can leverage multiple channels 
                  simultaneously to send larger amounts or find more efficient routes.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="bg-blue-50 dark:bg-blue-900/20 p-6 rounded-lg">
                  <h4 className="font-medium mb-4 flex items-center">
                    <Split className="h-5 w-5 text-blue-600 mr-2" />
                    How It Works
                  </h4>
                  <div className="text-sm text-muted-foreground space-y-2">
                    <p>
                      A single payment is divided into multiple smaller payments, each taking a different path through the 
                      network. These partial payments are then merged at the destination, where the recipient receives the 
                      full amount.
                    </p>
                    <p>
                      Each partial payment still uses the same cryptographic security principles as regular Lightning 
                      payments, ensuring the same level of security.
                    </p>
                  </div>
                </div>

                <div className="bg-blue-50 dark:bg-blue-900/20 p-6 rounded-lg">
                  <h4 className="font-medium mb-4 flex items-center">
                    <LayoutGrid className="h-5 w-5 text-blue-600 mr-2" />
                    Key Benefits
                  </h4>
                  <div className="text-sm text-muted-foreground space-y-2">
                    <ul className="list-disc pl-5 space-y-1">
                      <li>Overcome single channel capacity limitations</li>
                      <li>Improve payment success rates by utilizing multiple routes</li>
                      <li>Enhance privacy by splitting amounts across multiple paths</li>
                      <li>Optimize fee costs by utilizing cheaper routes in parallel</li>
                      <li>Increase payment reliability through redundancy</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="border-l-4 border-blue-500 pl-4 italic">
                "Multipath payments represent one of the most significant advancements in Lightning Network 
                technology, effectively removing the channel capacity bottleneck for larger transactions."
              </div>
            </div>
          </Card>

          <Card className="p-6">
            <h3 className="text-lg font-bold mb-4 flex items-center">
              <Zap className="h-5 w-5 mr-2" />
              Types of Multipath Payments
            </h3>

            <div className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="border border-border p-4 rounded-lg">
                  <h4 className="font-medium mb-3">Basic Multipath Payments (MPP)</h4>
                  <p className="text-sm text-muted-foreground mb-3">
                    The original implementation of multipath payments, where a single payment is split into smaller 
                    parts that all use the same payment hash but travel through different routes.
                  </p>
                  <div className="bg-gray-100 dark:bg-gray-800 p-3 rounded-md text-xs">
                    <ul className="list-disc pl-4 space-y-1">
                      <li>All parts share the same payment hash</li>
                      <li>Receiver must collect all parts to claim the payment</li>
                      <li>Implemented in most Lightning implementations</li>
                    </ul>
                  </div>
                </div>

                <div className="border border-border p-4 rounded-lg">
                  <h4 className="font-medium mb-3">Atomic Multipath Payments (AMP)</h4>
                  <p className="text-sm text-muted-foreground mb-3">
                    An advanced version that uses multiple payment secrets (preimages) that are combined to 
                    form a single payment hash, providing enhanced security and atomicity guarantees.
                  </p>
                  <div className="bg-gray-100 dark:bg-gray-800 p-3 rounded-md text-xs">
                    <ul className="list-disc pl-4 space-y-1">
                      <li>Uses multiple preimages and a shared payment hash</li>
                      <li>All parts succeed or fail together (atomic)</li>
                      <li>Provides stronger security guarantees</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="mt-4">
                <h4 className="font-medium mb-3">Technical Implementation Differences</h4>
                <div className="overflow-x-auto">
                  <table className="min-w-full divide-y divide-border">
                    <thead>
                      <tr>
                        <th className="px-4 py-3 text-left text-xs font-medium text-muted-foreground uppercase tracking-wider">Feature</th>
                        <th className="px-4 py-3 text-left text-xs font-medium text-muted-foreground uppercase tracking-wider">Basic MPP</th>
                        <th className="px-4 py-3 text-left text-xs font-medium text-muted-foreground uppercase tracking-wider">Atomic MPP (AMP)</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-border">
                      <tr>
                        <td className="px-4 py-3 text-sm">Payment Hash</td>
                        <td className="px-4 py-3 text-sm">Single shared hash</td>
                        <td className="px-4 py-3 text-sm">Multiple hashes combined cryptographically</td>
                      </tr>
                      <tr>
                        <td className="px-4 py-3 text-sm">Atomicity</td>
                        <td className="px-4 py-3 text-sm">Basic, recipient enforced</td>
                        <td className="px-4 py-3 text-sm">Cryptographically enforced</td>
                      </tr>
                      <tr>
                        <td className="px-4 py-3 text-sm">Privacy</td>
                        <td className="px-4 py-3 text-sm">Good</td>
                        <td className="px-4 py-3 text-sm">Enhanced</td>
                      </tr>
                      <tr>
                        <td className="px-4 py-3 text-sm">Implementation Complexity</td>
                        <td className="px-4 py-3 text-sm">Lower</td>
                        <td className="px-4 py-3 text-sm">Higher</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </Card>

          <Card className="p-6">
            <h3 className="text-lg font-bold mb-4">Multipath Payment Routing Strategy</h3>
            
            <div className="space-y-4">
              <p className="text-muted-foreground">
                Effective multipath payments require sophisticated routing algorithms to determine how to split
                a payment across multiple channels and routes:
              </p>

              <div className="relative py-8">
                <div className="absolute left-4 h-full w-0.5 bg-gradient-to-b from-blue-600/30 via-blue-600 to-blue-600/30"></div>
                
                <div className="ml-10 space-y-8">
                  <div className="relative">
                    <div className="absolute -left-10 top-0 h-8 w-8 rounded-full bg-blue-100 dark:bg-blue-900/50 flex items-center justify-center">
                      <span className="text-blue-600 font-medium">1</span>
                    </div>
                    <h4 className="font-medium">Path Selection</h4>
                    <p className="text-sm text-muted-foreground mt-2">
                      The sender's node evaluates all available channel routes to the destination, 
                      considering factors like capacity, fees, reliability, and previous success rates.
                    </p>
                  </div>

                  <div className="relative">
                    <div className="absolute -left-10 top-0 h-8 w-8 rounded-full bg-blue-100 dark:bg-blue-900/50 flex items-center justify-center">
                      <span className="text-blue-600 font-medium">2</span>
                    </div>
                    <h4 className="font-medium">Payment Splitting</h4>
                    <p className="text-sm text-muted-foreground mt-2">
                      The payment is divided into multiple parts based on available channel capacities,
                      network conditions, and optimal splitting ratios to minimize overall fees.
                    </p>
                    <div className="mt-3 bg-gray-100 dark:bg-gray-800 p-3 rounded-md">
                      <div className="flex items-center justify-between">
                        <div className="text-xs">
                          <div>Original Payment: 500,000 sats</div>
                          <div className="mt-2">Split into:</div>
                          <ul className="list-disc pl-5 mt-1">
                            <li>Route A: 200,000 sats (fee: 20 sats)</li>
                            <li>Route B: 150,000 sats (fee: 15 sats)</li>
                            <li>Route C: 150,000 sats (fee: 18 sats)</li>
                          </ul>
                        </div>
                        <div className="h-24 w-24 relative">
                          <div className="absolute top-0 left-0 w-full h-full rounded-full border-4 border-blue-500 opacity-20"></div>
                          <div className="absolute top-1/4 left-1/4 w-1/2 h-1/2 rounded-full border-4 border-blue-500"></div>
                          <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center">
                            <RefreshCw className="h-6 w-6 text-blue-500" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="relative">
                    <div className="absolute -left-10 top-0 h-8 w-8 rounded-full bg-blue-100 dark:bg-blue-900/50 flex items-center justify-center">
                      <span className="text-blue-600 font-medium">3</span>
                    </div>
                    <h4 className="font-medium">Parallel Execution</h4>
                    <p className="text-sm text-muted-foreground mt-2">
                      All partial payments are initiated simultaneously, each following its own route
                      through the network toward the destination.
                    </p>
                  </div>

                  <div className="relative">
                    <div className="absolute -left-10 top-0 h-8 w-8 rounded-full bg-blue-100 dark:bg-blue-900/50 flex items-center justify-center">
                      <span className="text-blue-600 font-medium">4</span>
                    </div>
                    <h4 className="font-medium">Destination Aggregation</h4>
                    <p className="text-sm text-muted-foreground mt-2">
                      The receiver's Lightning node collects all the partial payments and processes
                      them as a single logical payment, generating just one invoice for the sender.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </Card>

          <Card className="p-6 bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20">
            <h3 className="text-lg font-bold mb-4">Implementation Challenges & Solutions</h3>

            <div className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-medium mb-3">Technical Challenges</h4>
                  <ul className="space-y-3">
                    <li className="bg-white dark:bg-gray-800 p-3 rounded-lg text-sm">
                      <span className="font-medium block">Path Diversity</span>
                      <span className="text-muted-foreground">Finding sufficiently diverse paths to allow effective splitting</span>
                    </li>
                    <li className="bg-white dark:bg-gray-800 p-3 rounded-lg text-sm">
                      <span className="font-medium block">Routing Complexity</span>
                      <span className="text-muted-foreground">Increased computational cost of finding multiple routes</span>
                    </li>
                    <li className="bg-white dark:bg-gray-800 p-3 rounded-lg text-sm">
                      <span className="font-medium block">Payment Coordination</span>
                      <span className="text-muted-foreground">Ensuring all parts arrive at roughly the same time</span>
                    </li>
                  </ul>
                </div>

                <div>
                  <h4 className="font-medium mb-3">Solutions & Best Practices</h4>
                  <ul className="space-y-3">
                    <li className="bg-white dark:bg-gray-800 p-3 rounded-lg text-sm">
                      <span className="font-medium block">Path Scoring</span>
                      <span className="text-muted-foreground">Implementing sophisticated scoring algorithms for path selection</span>
                    </li>
                    <li className="bg-white dark:bg-gray-800 p-3 rounded-lg text-sm">
                      <span className="font-medium block">Parallel Processing</span>
                      <span className="text-muted-foreground">Optimizing code for simultaneous payment part handling</span>
                    </li>
                    <li className="bg-white dark:bg-gray-800 p-3 rounded-lg text-sm">
                      <span className="font-medium block">Failure Handling</span>
                      <span className="text-muted-foreground">Sophisticated retry mechanisms for partial payment failures</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </Card>

          <div className="mt-6">
            <VerifyCheckbox
              moduleId={moduleId}
              sectionId={sectionId}
              verificationId="multipath-payments-basics"
              label="I understand how multipath payments work in the Lightning Network"
            />
          </div>
        </div>
      </ModuleContent>
    </ModuleLayout>
  );
}
