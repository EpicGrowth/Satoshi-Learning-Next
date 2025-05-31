'use client';

import React from 'react';
import { ModuleLayout } from '@/components/learn/shared/module-layout';
import { ModuleContent } from '@/components/learn/shared/module-content';
import VerifyCheckbox from '@/components/learn/shared/verify-checkbox';
import { Card } from '@/components/ui/card';
import { LineChart, Zap, Workflow, Shuffle } from 'lucide-react';

const moduleId = 'lightning-routing-operations';
const sectionId = 'route-optimization';

export default function RouteOptimizationPage() {
  return (
    <ModuleLayout>
      <ModuleContent 
        moduleId={moduleId} 
        sectionId={sectionId}
        moduleTitle="Route Optimization"
        moduleDescription="Optimizing payment routing"
        difficulty="Intermediate"
        icon={LineChart}
        checkpoints={1}
      >
        <div className="space-y-8">
          <Card className="p-6">
            <h2 className="text-xl font-bold mb-4">Route Optimization in Lightning Network</h2>
            
            <div className="space-y-6">
              <div className="prose dark:prose-invert max-w-none">
                <h3>Understanding Route Optimization</h3>
                <p>
                  Route optimization involves finding the most efficient paths for Lightning Network 
                  payments. This includes considering factors like fees, reliability, speed, and 
                  privacy to determine the optimal route.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-muted p-6 rounded-lg">
                  <h4 className="font-medium mb-4">Optimization Factors</h4>
                  <ul className="list-disc pl-4 space-y-2">
                    <li><strong>Cost:</strong> Total routing fees</li>
                    <li><strong>Reliability:</strong> Success probability</li>
                    <li><strong>Speed:</strong> Path length</li>
                    <li><strong>Privacy:</strong> Path randomization</li>
                  </ul>
                </div>
                
                <div className="bg-muted p-6 rounded-lg">
                  <h4 className="font-medium mb-4">Optimization Techniques</h4>
                  <ul className="list-disc pl-4 space-y-2">
                    <li>Multi-path payments</li>
                    <li>Dynamic fee adjustment</li>
                    <li>Reliability scoring</li>
                    <li>Path diversity</li>
                  </ul>
                </div>
              </div>
            </div>
          </Card>

          <Card className="p-6">
            <h2 className="text-xl font-bold mb-4">Multi-Path Payments (MPP)</h2>
            
            <div className="space-y-6">
              <div className="prose dark:prose-invert max-w-none">
                <p>
                  Multi-Path Payments (MPP) split a single payment across multiple routes, enabling 
                  more efficient use of the network and improving payment success rates.
                </p>
              </div>

              <div className="bg-purple-50 dark:bg-purple-900/20 p-6 rounded-lg">
                <div className="flex items-center gap-2 mb-3">
                  <Zap className="h-5 w-5 text-purple-600" />
                  <h4 className="font-medium">Benefits of MPP</h4>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="p-3 bg-background rounded-lg">
                    <h5 className="text-sm font-medium mb-2">Large Payments</h5>
                    <p className="text-xs text-muted-foreground">
                      Enables payments larger than any single channel capacity by splitting across 
                      multiple channels.
                    </p>
                  </div>
                  
                  <div className="p-3 bg-background rounded-lg">
                    <h5 className="text-sm font-medium mb-2">Higher Success Rate</h5>
                    <p className="text-xs text-muted-foreground">
                      If one path fails, other paths may still succeed, improving overall payment 
                      reliability.
                    </p>
                  </div>
                  
                  <div className="p-3 bg-background rounded-lg">
                    <h5 className="text-sm font-medium mb-2">Fee Optimization</h5>
                    <p className="text-xs text-muted-foreground">
                      Can reduce overall fees by utilizing multiple cheaper paths instead of a single 
                      expensive one.
                    </p>
                  </div>
                  
                  <div className="p-3 bg-background rounded-lg">
                    <h5 className="text-sm font-medium mb-2">Better Liquidity Utilization</h5>
                    <p className="text-xs text-muted-foreground">
                      Makes more efficient use of network liquidity by utilizing multiple channels.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-background p-5 rounded-lg border border-border">
                <div className="flex items-center gap-2 mb-3">
                  <Workflow className="h-5 w-5 text-purple-600" />
                  <h4 className="font-medium">MPP Implementation</h4>
                </div>
                <p className="text-sm text-muted-foreground">
                  Lightning implementations use payment splitting algorithms to determine the optimal 
                  division of a payment across multiple paths. This process considers channel 
                  capacity, fees, and reliability to create the most efficient combination of paths.
                </p>
              </div>
            </div>
          </Card>

          <Card className="p-6">
            <h2 className="text-xl font-bold mb-4">Advanced Optimization Techniques</h2>
            
            <div className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-background p-5 rounded-lg border border-border">
                  <div className="flex items-center gap-2 mb-3">
                    <Shuffle className="h-5 w-5 text-purple-600" />
                    <h4 className="font-medium">Path Probing</h4>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Path probing sends small test payments to verify route viability before 
                    attempting a full payment. This technique improves success rates by identifying 
                    and avoiding problematic routes in advance.
                  </p>
                  <ul className="list-disc pl-4 mt-3 text-xs text-muted-foreground space-y-1">
                    <li>Tests channel availability and capacity</li>
                    <li>Identifies nodes with uptime issues</li>
                    <li>Reveals potential fee surprises</li>
                  </ul>
                </div>
                
                <div className="bg-background p-5 rounded-lg border border-border">
                  <div className="flex items-center gap-2 mb-3">
                    <LineChart className="h-5 w-5 text-purple-600" />
                    <h4 className="font-medium">Reliability Scoring</h4>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Advanced routing algorithms incorporate historical performance data to assign 
                    reliability scores to nodes and channels. Routes through more reliable nodes are 
                    prioritized, improving payment success rates.
                  </p>
                  <ul className="list-disc pl-4 mt-3 text-xs text-muted-foreground space-y-1">
                    <li>Tracks successful vs. failed forwards</li>
                    <li>Measures node uptime</li>
                    <li>Evaluates channel stability</li>
                  </ul>
                </div>
              </div>

              <div className="prose dark:prose-invert max-w-none">
                <h3>Future Optimization Frontiers</h3>
                <p>
                  The Lightning Network community continues to research and develop new route 
                  optimization techniques:
                </p>
                <ul>
                  <li>
                    <strong>Predictive Routing:</strong> Using machine learning to predict optimal routes
                    based on historical network behavior.
                  </li>
                  <li>
                    <strong>Liquidity Advertisements:</strong> Nodes advertising their available
                    liquidity to improve routing decisions.
                  </li>
                  <li>
                    <strong>Trampoline Routing:</strong> Delegating route finding to specialized nodes
                    to improve efficiency for resource-constrained devices.
                  </li>
                  <li>
                    <strong>Just-In-Time Routing:</strong> Dynamically adjusting channel balances just
                    before a payment is routed through.
                  </li>
                </ul>
              </div>
            </div>
          </Card>

          <div className="mt-6 border-t border-border/40 pt-4">
            <VerifyCheckbox
              moduleId={moduleId}
              sectionId={sectionId}
              verificationId="route-optimization-concepts"
              label="I understand route optimization techniques in the Lightning Network"
            />
          </div>
        </div>
      </ModuleContent>
    </ModuleLayout>
  );
}
