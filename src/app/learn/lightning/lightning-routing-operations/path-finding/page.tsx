'use client';

import React from 'react';
import { ModuleLayout } from '@/components/learn/shared/module-layout';
import { ModuleContent } from '@/components/learn/shared/module-content';
import VerifyCheckbox from '@/components/learn/shared/verify-checkbox';
import { Card } from '@/components/ui/card';
import { Network, Workflow, Share2, CheckCircle2 } from 'lucide-react';

const moduleId = 'lightning-routing-operations';
const sectionId = 'path-finding';

export default function PathFindingPage() {
  return (
    <ModuleLayout>
      <ModuleContent moduleId={moduleId} sectionId={sectionId}>
        <div className="space-y-8">
          <Card className="p-6">
            <h2 className="text-xl font-bold mb-4">Path Finding in Lightning Network</h2>
            
            <div className="space-y-6">
              <div className="prose dark:prose-invert max-w-none">
                <h3>How Path Finding Works</h3>
                <p>
                  Path finding in the Lightning Network involves discovering routes through multiple 
                  payment channels to reach the payment destination. The algorithm considers factors 
                  like capacity, fees, and reliability to find the optimal path.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-muted p-6 rounded-lg">
                  <h4 className="font-medium mb-4">Path Finding Algorithms</h4>
                  <ul className="list-disc pl-4 space-y-2">
                    <li><strong>Dijkstra's Algorithm:</strong> Base pathfinding</li>
                    <li><strong>Modified A*:</strong> Heuristic-based search</li>
                    <li><strong>Multi-Path Routing:</strong> Parallel paths</li>
                    <li><strong>Probabilistic Routing:</strong> Success-based</li>
                  </ul>
                </div>
                
                <div className="bg-muted p-6 rounded-lg">
                  <h4 className="font-medium mb-4">Routing Considerations</h4>
                  <ul className="list-disc pl-4 space-y-2">
                    <li>Channel capacity constraints</li>
                    <li>Fee minimization</li>
                    <li>Path reliability</li>
                    <li>Network topology</li>
                  </ul>
                </div>
              </div>

              <div className="prose dark:prose-invert max-w-none">
                <h3>Considerations for Path Selection</h3>
                <p>
                  When finding a path for a payment, several factors are considered:
                </p>
                
                <ul>
                  <li>
                    <strong>Channel Capacity:</strong> Each channel has a maximum amount it can transfer.
                    Routes must have sufficient capacity throughout the entire path.
                  </li>
                  <li>
                    <strong>Fees:</strong> Each hop in a route may charge a fee. The algorithm tries to
                    minimize the total fees while maintaining reliability.
                  </li>
                  <li>
                    <strong>Probability of Success:</strong> Historical data about successful payments
                    through specific channels affects routing decisions.
                  </li>
                  <li>
                    <strong>Timelock Constraints:</strong> HTLCs at each hop have timelock constraints
                    that need to be considered.
                  </li>
                </ul>
              </div>
            </div>
          </Card>

          <Card className="p-6">
            <h2 className="text-xl font-bold mb-4">Advanced Routing Techniques</h2>
            
            <div className="space-y-6">
              <div className="prose dark:prose-invert max-w-none">
                <h3>Multi-Path Payments (MPP)</h3>
                <p>
                  Multi-Path Payments split a single payment across multiple paths, enabling:
                </p>
                <ul>
                  <li>Larger payments than any single channel could handle</li>
                  <li>Improved success rates through path diversification</li>
                  <li>More efficient use of network liquidity</li>
                </ul>

                <h3>Just-In-Time (JIT) Routing</h3>
                <p>
                  JIT routing adjusts channel balances just before a payment is routed through,
                  optimizing liquidity on-demand to increase payment success rates.
                </p>

                <h3>Rebalancing for Optimal Routing</h3>
                <p>
                  Node operators perform channel rebalancing to maintain bidirectional liquidity,
                  which improves payment success rates and earning potential from routing fees.
                </p>
              </div>

              <div className="bg-purple-50 dark:bg-purple-900/20 p-6 rounded-lg">
                <h4 className="font-medium mb-4 flex items-center">
                  <Workflow className="h-5 w-5 text-purple-600 mr-2" />
                  Path Finding Development
                </h4>
                <p className="text-sm text-muted-foreground">
                  Lightning routing algorithms continue to evolve, with research focused on:
                </p>
                <ul className="list-disc pl-4 mt-2 space-y-1 text-sm text-muted-foreground">
                  <li>Privacy-preserving routing optimizations</li>
                  <li>Fee market dynamics and incentive alignment</li>
                  <li>Reliability metrics and failure recovery</li>
                  <li>Hybrid routing approaches combining different algorithms</li>
                </ul>
              </div>
            </div>
          </Card>

          <Card className="p-6">
            <h2 className="text-xl font-bold mb-4">Path Finding Challenges</h2>
            
            <div className="prose dark:prose-invert max-w-none">
              <p>
                Lightning network path finding faces several key challenges:
              </p>
              
              <ul>
                <li>
                  <strong>Incomplete Network Information:</strong> Nodes only have a partial view of the
                  current state of the network.
                </li>
                <li>
                  <strong>Dynamic Channel Balances:</strong> Channel capacities change constantly as
                  payments are made, making routing decisions based on outdated information.
                </li>
                <li>
                  <strong>Privacy vs. Efficiency Tradeoff:</strong> More network information improves
                  routing but can compromise privacy.
                </li>
                <li>
                  <strong>Scalability Concerns:</strong> As the network grows, path finding computation
                  becomes more resource-intensive.
                </li>
              </ul>
            </div>

            <div className="bg-muted p-6 mt-4 rounded-lg">
              <h4 className="font-medium mb-4">Future Path Finding Innovations</h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="flex items-start gap-2">
                  <Share2 className="h-5 w-5 text-purple-600 mt-0.5" />
                  <div>
                    <h5 className="font-medium text-sm">Trampoline Routing</h5>
                    <p className="text-xs text-muted-foreground mt-1">
                      Delegates path finding to specialized nodes, reducing computation requirements
                      for light clients.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-2">
                  <CheckCircle2 className="h-5 w-5 text-purple-600 mt-0.5" />
                  <div>
                    <h5 className="font-medium text-sm">Path Probing</h5>
                    <p className="text-xs text-muted-foreground mt-1">
                      Testing potential paths with small amounts before sending the full payment.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </Card>

          <div className="mt-6 border-t border-border/40 pt-4">
            <VerifyCheckbox
              moduleId={moduleId}
              sectionId={sectionId}
              verificationId="path-finding-concepts"
              label="I understand how path finding works in the Lightning Network"
            />
          </div>
        </div>
      </ModuleContent>
    </ModuleLayout>
  );
}
