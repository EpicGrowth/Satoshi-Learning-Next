'use client';

import React, { useState } from 'react';

// Interface for price levels in the order book
interface PriceLevel {
  side: 'buy' | 'sell';
  price: number;
  volume: number;
}

// Interactive Liquidity Depth Visualizer Component
export const LiquidityDepthVisualizer = () => {
  const [marketType, setMarketType] = useState<'early' | 'mature'>('early');

  // Simulate orderbook data for visualization
  const generateOrderBook = (type: 'early' | 'mature'): PriceLevel[] => {
    const basePrice = 50000;
    const orders: PriceLevel[] = [];

    // Define market characteristics based on type
    const spread = type === 'early' ? 500 : 100;
    const maxOffset = type === 'early' ? 2000 : 4000;
    const steps = type === 'early' ? 10 : 40;
    const volumeMultiplier = type === 'early' ? 1 : 8;

    // Add sell orders (asks)
    for (let i = 1; i <= steps; i++) {
      const offset = i * (maxOffset / steps);
      const randomVariation =
        type === 'early' ? Math.random() * 0.8 + 0.6 : Math.random() * 0.3 + 0.85;
      orders.push({
        side: 'sell',
        price: basePrice + spread + offset,
        volume: Math.round((maxOffset - offset) * randomVariation * volumeMultiplier),
      });
    }

    // Add buy orders (bids)
    for (let i = 1; i <= steps; i++) {
      const offset = i * (maxOffset / steps);
      const randomVariation =
        type === 'early' ? Math.random() * 0.8 + 0.6 : Math.random() * 0.3 + 0.85;
      orders.push({
        side: 'buy',
        price: basePrice - spread - offset,
        volume: Math.round((maxOffset - offset) * randomVariation * volumeMultiplier),
      });
    }

    return orders.sort((a, b) => b.price - a.price); // Sort orders by price
  };

  const orders = generateOrderBook(marketType);

  // Calculate max volume for scaling bars
  const maxVolume = Math.max(...orders.map((o) => o.volume), 1); // Avoid division by zero

  return (
    <div className="p-4 bg-background rounded-lg border border-border">
      <h5 className="font-medium text-center mb-4">Order Book Depth Visualization</h5>

      {/* Market Type Selection Tabs */}
      <div className="flex border border-border rounded-md mb-4 overflow-hidden">
        <button
          className={`flex-1 px-4 py-2 text-sm font-medium transition-colors ${
            marketType === 'early'
              ? 'bg-primary text-primary-foreground'
              : 'bg-muted/30 hover:bg-muted'
          }`}
          onClick={() => setMarketType('early')}
        >
          Early Market (2010-2013)
        </button>
        <button
          className={`flex-1 px-4 py-2 text-sm font-medium transition-colors ${
            marketType === 'mature'
              ? 'bg-primary text-primary-foreground'
              : 'bg-muted/30 hover:bg-muted'
          }`}
          onClick={() => setMarketType('mature')}
        >
          Mature Market (Current)
        </button>
      </div>

      <div className="space-y-1">
        {/* Center price indicator */}
        <div className="flex justify-center items-center h-8 border-b border-dashed border-primary/30">
          <div className="px-3 py-1 bg-primary/10 rounded-full">
            <span className="text-xs font-medium">Current Price: $50,000</span>
          </div>
        </div>

        {/* Order book visualization */}
        <div className="grid grid-cols-2 gap-1 h-48 overflow-y-auto">
          {/* Buy Orders (Bids) */}
          <div className="space-y-px pr-1 border-r border-dashed border-border">
            {orders
              .filter((o) => o.side === 'buy')
              .map((order, i) => (
                <div key={`buy-${i}`} className="flex items-center justify-end h-5">
                  <span className="text-xs mr-2 text-muted-foreground">${order.price.toLocaleString()}</span>
                  <div
                    className="h-full bg-green-100 dark:bg-green-900/30 rounded-sm"
                    style={{ width: `${(order.volume / maxVolume) * 100}%` }}
                    title={`Volume: ${order.volume}`}
                  ></div>
                </div>
              ))}
          </div>
          {/* Sell Orders (Asks) */}
          <div className="space-y-px pl-1">
            {orders
              .filter((o) => o.side === 'sell')
              .sort((a, b) => a.price - b.price) // Sort asks ascending
              .map((order, i) => (
                <div key={`sell-${i}`} className="flex items-center h-5">
                  <div
                    className="h-full bg-red-100 dark:bg-red-900/30 rounded-sm"
                    style={{ width: `${(order.volume / maxVolume) * 100}%` }}
                    title={`Volume: ${order.volume}`}
                  ></div>
                  <span className="text-xs ml-2 text-muted-foreground">${order.price.toLocaleString()}</span>
                </div>
              ))}
          </div>
        </div>
      </div>

      {/* Summary Metrics */}
      <div className="mt-4 grid grid-cols-2 gap-4 text-center">
        <div>
          <p className="text-xs font-medium text-muted-foreground">Order Book Depth</p>
          <p className="text-sm font-bold text-primary">
            {marketType === 'early' ? 'Shallow' : 'Deep'}
          </p>
        </div>
        <div>
          <p className="text-xs font-medium text-muted-foreground">Bid-Ask Spread</p>
          <p className="text-sm font-bold text-primary">
            {marketType === 'early' ? '$1,000 (2%)' : '$200 (0.4%)'}
          </p>
        </div>
      </div>

      {/* Explanatory Text */}
      <div className="mt-4 p-3 bg-muted/30 rounded-md">
        <p className="text-xs text-muted-foreground">
          {marketType === 'early'
            ? 'Early Bitcoin markets had thin order books with wide spreads, making price discovery volatile. Small orders could significantly move the price.'
            : "Today's mature Bitcoin markets feature deep liquidity with tight spreads. Large orders can be executed with minimal price impact, facilitating efficient trading."
          }
        </p>
      </div>
    </div>
  );
};
