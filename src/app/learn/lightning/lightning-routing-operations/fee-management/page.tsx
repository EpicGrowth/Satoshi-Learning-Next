'use client';

import React from 'react';
import { ModuleLayout } from '@/components/learn/shared/module-layout';
import { ModuleContent } from '@/components/learn/shared/module-content';
import VerifyCheckbox from '@/components/learn/shared/verify-checkbox';
import { Card } from '@/components/ui/card';
import { DollarSign, Settings, BarChart4, TrendingUp } from 'lucide-react';

const moduleId = 'lightning-routing-operations';
const sectionId = 'fee-management';

export default function FeeManagementPage() {
  return (
    <ModuleLayout>
      <ModuleContent moduleId={moduleId} sectionId={sectionId}>
        <div className="space-y-8">
          <Card className="p-6">
            <h2 className="text-xl font-bold mb-4">Fee Management in Lightning Network</h2>
            
            <div className="space-y-6">
              <div className="prose dark:prose-invert max-w-none">
                <h3>Understanding Routing Fees</h3>
                <p>
                  Routing fees are essential for maintaining a healthy Lightning Network. Node operators 
                  earn fees by forwarding payments, while users pay fees to route their payments through 
                  the network.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-muted p-6 rounded-lg">
                  <h4 className="font-medium mb-4">Fee Components</h4>
                  <ul className="list-disc pl-4 space-y-2">
                    <li><strong>Base Fee:</strong> Fixed fee per forward</li>
                    <li><strong>Fee Rate:</strong> Percentage of amount</li>
                    <li><strong>Time Lock Delta:</strong> HTLC timeout</li>
                    <li><strong>Min HTLC:</strong> Minimum forward amount</li>
                  </ul>
                </div>
                
                <div className="bg-muted p-6 rounded-lg">
                  <h4 className="font-medium mb-4">Fee Strategies</h4>
                  <ul className="list-disc pl-4 space-y-2">
                    <li>Dynamic fee adjustment</li>
                    <li>Competitive pricing</li>
                    <li>Channel-specific fees</li>
                    <li>Volume-based pricing</li>
                  </ul>
                </div>
              </div>
            </div>
          </Card>

          <Card className="p-6">
            <h2 className="text-xl font-bold mb-4">Setting and Optimizing Fees</h2>
            
            <div className="space-y-6">
              <div className="prose dark:prose-invert max-w-none">
                <h3>Balance Between Competitiveness and Profitability</h3>
                <p>
                  When setting routing fees, node operators must balance attracting traffic with earning 
                  sufficient revenue. Fees that are too high may divert payments to alternative routes, 
                  while fees that are too low might not adequately compensate for capital lockup and 
                  operational costs.
                </p>
              </div>

              <div className="bg-purple-50 dark:bg-purple-900/20 p-6 rounded-lg">
                <div className="flex items-center gap-2 mb-3">
                  <Settings className="h-5 w-5 text-purple-600" />
                  <h4 className="font-medium">Setting Your Fees</h4>
                </div>
                <div className="space-y-4 text-sm text-muted-foreground">
                  <p>
                    To set fees on your Lightning node, use the following command format 
                    (specific syntax varies by implementation):
                  </p>
                  <div className="p-3 bg-background rounded-lg font-mono text-xs">
                    lncli updatechanpolicy --base_fee_msat=1000 --fee_rate=0.000001 --time_lock_delta=40 --chan_point=&lt;channel_id&gt;
                  </div>
                  <p>
                    Where:
                  </p>
                  <ul className="list-disc pl-4 space-y-1">
                    <li>base_fee_msat: Fixed fee in millisatoshis</li>
                    <li>fee_rate: Proportional fee as a decimal (0.000001 = 0.0001%)</li>
                    <li>time_lock_delta: Number of blocks to add to timelock</li>
                    <li>chan_point: Specific channel ID (optional)</li>
                  </ul>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="flex flex-col">
                  <div className="bg-background p-5 rounded-lg border border-border">
                    <div className="flex items-center gap-2 mb-3">
                      <TrendingUp className="h-5 w-5 text-purple-600" />
                      <h4 className="font-medium">Dynamic Fee Adjustment</h4>
                    </div>
                    <p className="text-sm text-muted-foreground">
                      Advanced node operators implement dynamic fee adjustment based on network 
                      conditions, channel balance, and payment demand. This approach optimizes 
                      revenue while maintaining competitiveness.
                    </p>
                    <div className="mt-3 p-3 bg-muted/50 rounded-lg text-xs">
                      Tools like charge-lnd and rebalance-lnd automate fee adjustments based on 
                      configurable thresholds and channel conditions.
                    </div>
                  </div>
                </div>

                <div className="flex flex-col">
                  <div className="bg-background p-5 rounded-lg border border-border">
                    <div className="flex items-center gap-2 mb-3">
                      <BarChart4 className="h-5 w-5 text-purple-600" />
                      <h4 className="font-medium">Fee Benchmarking</h4>
                    </div>
                    <p className="text-sm text-muted-foreground">
                      Monitor competitor fees and network averages to ensure your fees remain 
                      competitive. Tools like 1ML and terminal web provide market insights on 
                      routing fees across the network.
                    </p>
                    <div className="mt-3 p-3 bg-muted/50 rounded-lg text-xs">
                      The average base fee on the Lightning Network is approximately 1000 millisatoshis, 
                      with fee rates typically ranging between 0.0001% and 0.1%.
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Card>

          <Card className="p-6">
            <h2 className="text-xl font-bold mb-4">Fee Management Best Practices</h2>
            
            <div className="prose dark:prose-invert max-w-none">
              <ul>
                <li>
                  <strong>Channel Size Considerations:</strong> Larger channels may justify lower fee 
                  rates due to higher potential transaction volume.
                </li>
                <li>
                  <strong>Node Reputation:</strong> Well-connected nodes with high reliability can 
                  often command higher fees.
                </li>
                <li>
                  <strong>Regular Review:</strong> Periodically review and adjust your fee policy 
                  based on routing performance and revenue.
                </li>
                <li>
                  <strong>Market Differentiation:</strong> Consider special fee policies for strategic 
                  peers or high-volume routes.
                </li>
                <li>
                  <strong>Testing:</strong> Experiment with different fee structures and monitor their 
                  impact on routing volume and revenue.
                </li>
              </ul>
              
              <p>
                Remember that fee management is both an art and a science. Finding the right balance 
                between attracting forwarding volume and earning sufficient revenue requires ongoing 
                attention and adjustment based on network conditions and node performance.
              </p>
            </div>
          </Card>

          <div className="mt-6 border-t border-border/40 pt-4">
            <VerifyCheckbox
              moduleId={moduleId}
              sectionId={sectionId}
              verificationId="fee-management-concepts"
              label="I understand how routing fees work in the Lightning Network"
            />
          </div>
        </div>
      </ModuleContent>
    </ModuleLayout>
  );
}
