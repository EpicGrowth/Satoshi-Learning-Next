'use client';

import { useState } from 'react';
import {
  ArrowBigRight,
  CheckCircle,
  Users,
  ArrowBigDown,
  XCircle,
  AlertTriangle,
} from 'lucide-react';

// Mining Incentives Visualization
export function MiningIncentivesVisual() {
  const [activeTab, setActiveTab] = useState<'honest' | 'attack'>('honest');

  return (
    <div className="p-4 bg-background rounded-lg border border-border">
      <h5 className="font-medium mb-4 text-center">Mining Strategy Incentives</h5>

      <div className="flex border border-border rounded-md mb-4 overflow-hidden">
        <button
          className={`flex-1 px-4 py-2 text-sm font-medium transition-colors ${
            activeTab === 'honest'
              ? 'bg-primary text-primary-foreground'
              : 'bg-muted/30 hover:bg-muted'
          }`}
          onClick={() => setActiveTab('honest')}
        >
          Honest Mining
        </button>
        <button
          className={`flex-1 px-4 py-2 text-sm font-medium transition-colors ${
            activeTab === 'attack'
              ? 'bg-primary text-primary-foreground'
              : 'bg-muted/30 hover:bg-muted'
          }`}
          onClick={() => setActiveTab('attack')}
        >
          Attack Strategies
        </button>
      </div>

      {activeTab === 'honest' && (
        <div className="space-y-4">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div className="p-3 bg-muted/50 rounded-md flex flex-col items-center text-center">
              <ArrowBigRight className="h-8 w-8 text-green-500 mb-2" />
              <h6 className="text-sm font-medium mb-1">Expected Return</h6>
              <p className="text-xs text-muted-foreground">
                Proportional to hashrate contribution (e.g., 5% of hashrate = ~5% of rewards)
              </p>
            </div>
            <div className="p-3 bg-muted/50 rounded-md flex flex-col items-center text-center">
              <CheckCircle className="h-8 w-8 text-green-500 mb-2" />
              <h6 className="text-sm font-medium mb-1">Block Acceptance</h6>
              <p className="text-xs text-muted-foreground">
                Valid blocks are always accepted by the network, guaranteeing rewards
              </p>
            </div>
            <div className="p-3 bg-muted/50 rounded-md flex flex-col items-center text-center">
              <Users className="h-8 w-8 text-green-500 mb-2" />
              <h6 className="text-sm font-medium mb-1">Network Effects</h6>
              <p className="text-xs text-muted-foreground">
                Contributes to security, supporting Bitcoin's value and miner revenue
              </p>
            </div>
          </div>

          <div className="p-3 bg-green-50 dark:bg-green-900/20 rounded-md">
            <p className="text-sm text-center font-medium text-green-800 dark:text-green-400">
              Result: Stable, consistent returns with low variance
            </p>
            <p className="text-xs text-center text-muted-foreground mt-1">
              This is the Nash Equilibrium strategy - miners maximize long-term profit by following
              consensus rules
            </p>
          </div>
        </div>
      )}

      {activeTab === 'attack' && (
        <div className="space-y-4">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div className="p-3 bg-muted/50 rounded-md flex flex-col items-center text-center">
              <ArrowBigDown className="h-8 w-8 text-red-500 mb-2" />
              <h6 className="text-sm font-medium mb-1">Expected Return</h6>
              <p className="text-xs text-muted-foreground">
                Negative unless attacker controls &gt;51% of hashrate, and even then profits are
                limited
              </p>
            </div>
            <div className="p-3 bg-muted/50 rounded-md flex flex-col items-center text-center">
              <XCircle className="h-8 w-8 text-red-500 mb-2" />
              <h6 className="text-sm font-medium mb-1">Block Rejection</h6>
              <p className="text-xs text-muted-foreground">
                Invalid blocks are rejected, wasting electricity and hardware investment
              </p>
            </div>
            <div className="p-3 bg-muted/50 rounded-md flex flex-col items-center text-center">
              <AlertTriangle className="h-8 w-8 text-red-500 mb-2" />
              <h6 className="text-sm font-medium mb-1">Market Response</h6>
              <p className="text-xs text-muted-foreground">
                Price drops in response to attacks, reducing the value of any BTC holdings
              </p>
            </div>
          </div>

          <div className="p-3 bg-red-50 dark:bg-red-900/20 rounded-md">
            <p className="text-sm text-center font-medium text-red-800 dark:text-red-400">
              Result: High cost, limited benefit, and self-defeating outcome
            </p>
            <p className="text-xs text-center text-muted-foreground mt-1">
              Even successful attacks destroy the value being targeted, making most attack vectors
              economically irrational
            </p>
          </div>
        </div>
      )}
    </div>
  );
}
