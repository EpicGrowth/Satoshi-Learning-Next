'use client';

import React, { useState } from 'react';
import {
  BarChart3,
  ArrowRight,
  TrendingDown,
  Building,
  Lock,
  Wallet,
  Layers,
  Landmark,
  LineChart,
} from 'lucide-react';

// Interface defining the structure for a market maturity metric
interface MaturityMetric {
  category: string;
  name: string;
  icon: React.ElementType;
  early: string;
  current: string;
  improvement: string;
  description: string;
}

// Market Maturity Index Component
export const MarketMaturityIndex = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('liquidity');

  const metrics: MaturityMetric[] = [
    {
      category: 'liquidity',
      name: 'Trading Volume',
      icon: BarChart3,
      early: '$1-5M daily',
      current: '$20-50B daily',
      improvement: '10,000x',
      description: 'Average 24-hour trading volume across all exchanges',
    },
    {
      category: 'liquidity',
      name: 'Bid-Ask Spread',
      icon: ArrowRight,
      early: '1-5%',
      current: '0.01-0.05%',
      improvement: '100x better',
      description: 'Difference between best buy and sell prices on major exchanges',
    },
    {
      category: 'liquidity',
      name: 'Slippage Impact',
      icon: TrendingDown,
      early: '25% for $1M order',
      current: '0.5% for $100M order',
      improvement: '5,000x better',
      description: 'Price impact of large market orders',
    },
    {
      category: 'infrastructure',
      name: 'Exchange Count',
      icon: Building,
      early: '3-5 exchanges',
      current: '300+ exchanges',
      improvement: '100x',
      description: 'Number of active trading platforms',
    },
    {
      category: 'infrastructure',
      name: 'Exchange Security',
      icon: Lock,
      early: 'Basic, frequent hacks',
      current: 'Institutional-grade',
      improvement: 'Significantly improved',
      description: 'Security practices and protection measures',
    },
    {
      category: 'infrastructure',
      name: 'Custody Solutions',
      icon: Wallet,
      early: 'Self-custody only',
      current: 'Multi-sig, MPC, qualified custody',
      improvement: 'Institutional quality',
      description: 'Available options for securing Bitcoin',
    },
    {
      category: 'products',
      name: 'Derivative Products',
      icon: Layers,
      early: 'None',
      current: 'Futures, options, ETFs',
      improvement: 'Full spectrum',
      description: 'Financial products beyond spot trading',
    },
    {
      category: 'products',
      name: 'Institutional Vehicles',
      icon: Landmark,
      early: 'None',
      current: 'Trusts, ETFs, funds',
      improvement: 'Complete ecosystem',
      description: 'Investment vehicles for regulated institutions',
    },
    {
      category: 'products',
      name: 'Market Data',
      icon: LineChart,
      early: 'Basic price charts',
      current: 'Professional analytics',
      improvement: 'Enterprise grade',
      description: 'Data and analytics availability',
    },
  ];

  const filteredMetrics = metrics.filter((m) => m.category === selectedCategory);

  return (
    <div className="p-4 bg-background rounded-lg border border-border">
      <h5 className="font-medium text-center mb-4">Market Maturity Evolution</h5>

      {/* Category Selection Tabs */}
      <div className="flex border border-border rounded-md mb-4 overflow-hidden">
        <button
          className={`flex-1 px-3 py-2 text-xs font-medium transition-colors ${
            selectedCategory === 'liquidity'
              ? 'bg-primary text-primary-foreground'
              : 'bg-muted/30 hover:bg-muted'
          }`}
          onClick={() => setSelectedCategory('liquidity')}
        >
          Liquidity
        </button>
        <button
          className={`flex-1 px-3 py-2 text-xs font-medium transition-colors ${
            selectedCategory === 'infrastructure'
              ? 'bg-primary text-primary-foreground'
              : 'bg-muted/30 hover:bg-muted'
          }`}
          onClick={() => setSelectedCategory('infrastructure')}
        >
          Infrastructure
        </button>
        <button
          className={`flex-1 px-3 py-2 text-xs font-medium transition-colors ${
            selectedCategory === 'products'
              ? 'bg-primary text-primary-foreground'
              : 'bg-muted/30 hover:bg-muted'
          }`}
          onClick={() => setSelectedCategory('products')}
        >
          Products
        </button>
      </div>

      {/* Display Metrics for Selected Category */}
      <div className="space-y-3">
        {filteredMetrics.map((metric, i) => (
          <div key={i} className="p-3 bg-muted/30 rounded-lg">
            <div className="flex items-center mb-2">
              <metric.icon className="h-4 w-4 text-primary mr-2 shrink-0" />
              <h6 className="text-sm font-medium truncate" title={metric.name}>{metric.name}</h6>
            </div>

            <div className="grid grid-cols-3 gap-2 mb-2">
              <div className="p-2 bg-muted/50 rounded text-center">
                <p className="text-xs text-muted-foreground mb-1">2010-2013</p>
                <p className="text-xs font-medium break-words">{metric.early}</p>
              </div>
              <div className="p-2 bg-muted/50 rounded text-center">
                <p className="text-xs text-muted-foreground mb-1">Today</p>
                <p className="text-xs font-medium break-words">{metric.current}</p>
              </div>
              <div className="p-2 bg-green-50 dark:bg-green-900/20 rounded text-center">
                <p className="text-xs text-muted-foreground mb-1">Improvement</p>
                <p className="text-xs font-medium text-green-600 dark:text-green-400 break-words">
                  {metric.improvement}
                </p>
              </div>
            </div>

            <p className="text-xs text-muted-foreground italic">{metric.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};
