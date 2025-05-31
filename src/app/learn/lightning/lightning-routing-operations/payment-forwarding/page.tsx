'use client';

import React from 'react';
import { ModuleLayout } from '@/components/learn/shared/module-layout';
import { ModuleContent } from '@/components/learn/shared/module-content';
import VerifyCheckbox from '@/components/learn/shared/verify-checkbox';
import { Card } from '@/components/ui/card';
import { Send, Shuffle, Zap, ArrowRight } from 'lucide-react';

const moduleId = 'lightning-routing-operations';
const sectionId = 'payment-forwarding';

export default function PaymentForwardingPage() {
  return (
    <ModuleLayout>
      <ModuleContent 
        moduleId={moduleId} 
        sectionId={sectionId}
        moduleTitle="Payment Forwarding"
        moduleDescription="Routing payments through nodes"
        difficulty="Intermediate"
        icon={Send}
        checkpoints={1}
      >
        <div className="space-y-8">
          <Card className="p-6">
            <h2 className="text-xl font-bold mb-4">Payment Forwarding in Lightning Network</h2>
            
            <div className="space-y-6">
              <div className="prose dark:prose-invert max-w-none">
                <h3>How Payment Forwarding Works</h3>
                <p>
                  Payment forwarding is a fundamental concept in the Lightning Network that enables 
                  the routing of payments across multiple hops. When a payment is routed through your node,
                  you're acting as an intermediary, helping move funds from the sender to the recipient.
                </p>
                <p>
                  Each routing node receives an incoming HTLC (Hashed Time-Locked Contract) and creates a 
                  corresponding outgoing HTLC. The node earns fees for this service, which incentivizes 
                  participation in the routing network.
                </p>
              </div>

              <div className="bg-purple-50 dark:bg-purple-900/20 p-6 rounded-lg">
                <h4 className="font-medium mb-4 flex items-center">
                  <Shuffle className="h-5 w-5 text-purple-600 mr-2" />
                  HTLC Flow
                </h4>
                <ol className="list-decimal pl-6 space-y-2 text-sm">
                  <li>
                    <strong>Incoming HTLC:</strong> Your node receives a payment with a hash lock.
                  </li>
                  <li>
                    <strong>Outgoing HTLC:</strong> You create an identical HTLC (minus your fee) to the next node.
                  </li>
                  <li>
                    <strong>Secret Revealed:</strong> When payment reaches the recipient, they reveal the secret.
                  </li>
                  <li>
                    <strong>Backpropagation:</strong> The secret propagates backwards, unlocking each HTLC.
                  </li>
                  <li>
                    <strong>Settlement:</strong> Funds move forward, and you collect your fee.
                  </li>
                </ol>
              </div>

              <div className="border-l-4 border-purple-500 pl-4 italic">
                "Payment forwarding is the lifeblood of the Lightning Network's routing system. 
                Without it, we'd be limited to direct channels only."
              </div>
            </div>
          </Card>

          <Card className="p-6">
            <h3 className="text-lg font-bold mb-4 flex items-center">
              <Send className="h-5 w-5 mr-2" />
              Optimizing Your Node for Forwarding
            </h3>

            <div className="space-y-4">
              <p className="text-muted-foreground">
                To maximize your node's forwarding potential and earn more in routing fees:
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="p-4 bg-muted/30 rounded-lg">
                  <h4 className="font-medium mb-2">Channel Selection</h4>
                  <ul className="list-disc pl-4 text-sm text-muted-foreground space-y-1">
                    <li>Open channels with well-connected nodes</li>
                    <li>Prioritize nodes that route significant payment volume</li>
                    <li>Maintain channels with diverse nodes across the network</li>
                    <li>Consider geographic diversity for resilience</li>
                  </ul>
                </div>

                <div className="p-4 bg-muted/30 rounded-lg">
                  <h4 className="font-medium mb-2">Liquidity Management</h4>
                  <ul className="list-disc pl-4 text-sm text-muted-foreground space-y-1">
                    <li>Balance incoming and outgoing capacity</li>
                    <li>Regularly rebalance channels to maintain flow</li>
                    <li>Monitor channel usage patterns</li>
                    <li>Close underperforming channels</li>
                  </ul>
                </div>
              </div>
            </div>
          </Card>

          <Card className="p-6">
            <h3 className="text-lg font-bold mb-4">Fee Strategies for Payment Forwarding</h3>
            
            <div className="space-y-4">
              <p className="text-muted-foreground">
                Setting appropriate fees is crucial for a successful routing node. The goal is to 
                find the balance between competitive fees that attract payment flow and profitable 
                fees that compensate for your node's service.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="border border-border p-4 rounded-lg">
                  <h4 className="font-medium mb-2">Base Fee</h4>
                  <p className="text-sm text-muted-foreground">
                    A flat fee charged per forwarded payment regardless of amount. 
                    Typically set between 1-10 satoshis. Good for covering fixed costs.
                  </p>
                </div>

                <div className="border border-border p-4 rounded-lg">
                  <h4 className="font-medium mb-2">Fee Rate</h4>
                  <p className="text-sm text-muted-foreground">
                    A percentage fee charged on the payment amount. Expressed in parts per million (ppm).
                    Common ranges are 100-1000 ppm (0.01% to 0.1%).
                  </p>
                </div>
              </div>
            </div>
          </Card>

          <Card className="p-6 bg-gradient-to-r from-purple-50 to-blue-50 dark:from-purple-900/20 dark:to-blue-900/20">
            <h3 className="text-lg font-bold mb-4 flex items-center">
              <Zap className="h-5 w-5 text-yellow-500 mr-2" />
              Advanced Forwarding Techniques
            </h3>

            <div className="space-y-4">
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
                <div className="p-4 bg-white/50 dark:bg-gray-800/50 rounded-lg">
                  <h4 className="font-medium mb-2">Just-In-Time Routing</h4>
                  <p className="text-sm text-muted-foreground">
                    Opening channels on demand to fulfill specific payment paths, 
                    maximizing capital efficiency for large payment routing.
                  </p>
                </div>

                <div className="p-4 bg-white/50 dark:bg-gray-800/50 rounded-lg">
                  <h4 className="font-medium mb-2">Fee Optimization Algorithms</h4>
                  <p className="text-sm text-muted-foreground">
                    Using dynamic fee adjustment based on network congestion, 
                    payment size, and channel liquidity status.
                  </p>
                </div>

                <div className="p-4 bg-white/50 dark:bg-gray-800/50 rounded-lg">
                  <h4 className="font-medium mb-2">Multi-Path Payments (MPP)</h4>
                  <p className="text-sm text-muted-foreground">
                    Routing larger payments by splitting them across multiple 
                    channels, increasing success rates and efficiency.
                  </p>
                </div>
              </div>
            </div>
          </Card>

          <div className="mt-6">
            <VerifyCheckbox
              moduleId={moduleId}
              sectionId={sectionId}
              verificationId="payment-forwarding-basics"
              label="I understand how payment forwarding works in the Lightning Network"
            />
          </div>
        </div>
      </ModuleContent>
    </ModuleLayout>
  );
}
