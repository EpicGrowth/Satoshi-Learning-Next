'use client';

import React, { useState, useMemo } from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { BarChart } from 'lucide-react';

// Interactive Supply Schedule Visualizer
export const SupplyScheduleVisualizer = () => {
  const [activeTab, setActiveTab] = useState<'issuance' | 'inflation'>('issuance');

  interface HalvingEvent {
    number: number; year: string; blocks: string; reward: number;
    newCoins: number; totalSupply: number; inflationRate: string;
  }

  const halvingEvents: HalvingEvent[] = [
    { number: 0, year: '2009', blocks: '0-209,999', reward: 50, newCoins: 10_500_000, totalSupply: 10_500_000, inflationRate: '∞ → ~100%' },
    { number: 1, year: '2012', blocks: '210,000-419,999', reward: 25, newCoins: 5_250_000, totalSupply: 15_750_000, inflationRate: '~8.5%' },
    { number: 2, year: '2016', blocks: '420,000-629,999', reward: 12.5, newCoins: 2_625_000, totalSupply: 18_375_000, inflationRate: '~4.1%' },
    { number: 3, year: '2020', blocks: '630,000-839,999', reward: 6.25, newCoins: 1_312_500, totalSupply: 19_687_500, inflationRate: '~1.8%' },
    { number: 4, year: '2024', blocks: '840,000-1,049,999', reward: 3.125, newCoins: 656_250, totalSupply: 20_343_750, inflationRate: '~0.9%' },
    { number: 5, year: '~2028', blocks: '1,050,000+', reward: 1.5625, newCoins: 328_125, totalSupply: 20_671_875, inflationRate: '~0.4%' },
    // ... future halvings
  ];

  const generateChartData = () => {
    const dataPoints = 14; // Number of points to plot (roughly covers up to 2040)
    let currentSupply = 0;
    let blockReward = 50;
    const blocksPerHalving = 210000;
    const points: { year: number; supply: number; inflation: number }[] = [];

    for (let i = 0; i <= dataPoints; i++) {
      const year = 2009 + i * 4; // Approximate year
      const halvingIndex = i;

      if (halvingIndex > 0) {
        blockReward /= 2;
      }
      const coinsThisEra = blockReward * blocksPerHalving;
      currentSupply += coinsThisEra;
      currentSupply = Math.min(currentSupply, 21000000);

      const prevSupply: number = i > 0 ? points[i - 1].supply : 0;
      const annualInflation: number = prevSupply > 0 ? ((currentSupply - prevSupply) / prevSupply) / 4 * 100 : (halvingIndex === 0 ? 100 : 0); // Rough annualized rate

      points.push({
        year: year,
        supply: currentSupply,
        inflation: Math.max(0, annualInflation) // Clamp at 0
      });
    }
    return points;
  };

  const chartData = useMemo(() => generateChartData(), []);
  const maxSupply = 21000000;
  const maxInflation = 15; // Cap Y-axis for inflation for better visualization

  const getPathData = (type: 'issuance' | 'inflation') => {
    const maxValue = type === 'issuance' ? maxSupply : maxInflation;
    return chartData
      .map((p, i) => {
        const x = (i / (chartData.length - 1)) * 100;
        const yValue = type === 'issuance' ? p.supply : Math.min(p.inflation, maxInflation);
        const y = 100 - (yValue / maxValue) * 100;
        return `${i === 0 ? 'M' : 'L'} ${x},${y}`;
      })
      .join(' ');
  };

  return (
    <Card className="overflow-hidden">
      <CardHeader>
        <CardTitle className="flex items-center"><BarChart className="h-5 w-5 mr-2 text-primary"/>Bitcoin Emission Schedule</CardTitle>
        <CardDescription>Visualizing the fixed supply cap and declining issuance rate.</CardDescription>
      </CardHeader>
      <CardContent>
        <Tabs 
          value={activeTab} 
          onValueChange={(value: string) => {
            if (value === 'issuance' || value === 'inflation') {
              setActiveTab(value);
            }
          }}
          className="w-full"
        >
          <TabsList className="grid w-full grid-cols-2 mb-4">
            <TabsTrigger value="issuance">Supply Issuance</TabsTrigger>
            <TabsTrigger value="inflation">Inflation Rate</TabsTrigger>
          </TabsList>
          <TabsContent value="issuance">
            <div className="text-sm text-muted-foreground mb-2">Total Bitcoin Supply Over Time (Approaching 21 Million Cap)</div>
          </TabsContent>
          <TabsContent value="inflation">
            <div className="text-sm text-muted-foreground mb-2">Approximate Annual Inflation Rate (Decreasing Over Time)</div>
          </TabsContent>
        </Tabs>

        {/* SVG Chart */}
        <div className="h-64 w-full relative mb-4">
          <svg viewBox="0 0 100 100" className="w-full h-full" preserveAspectRatio="none">
            {/* Grid lines */}
            {[0, 25, 50, 75, 100].map(p => (
              <line key={`h-${p}`} x1="0" y1={p} x2="100" y2={p} stroke="hsl(var(--border))" strokeWidth="0.2" strokeDasharray="2" />
            ))}
             {[0, 25, 50, 75, 100].map(p => (
              <line key={`v-${p}`} x1={p} y1="0" x2={p} y2="100" stroke="hsl(var(--border))" strokeWidth="0.2" strokeDasharray="2" />
            ))}
            {/* Data Path */}
            <path d={getPathData(activeTab)} stroke="hsl(var(--primary))" strokeWidth="1" fill="none" />
            {/* Halving markers */}
             {chartData.map((p, i) => (
               <circle key={`dot-${i}`} cx={(i / (chartData.length -1)) * 100} cy={100 - ((activeTab === 'issuance' ? p.supply : Math.min(p.inflation, maxInflation)) / (activeTab === 'issuance' ? maxSupply : maxInflation)) * 100} r="1" fill="hsl(var(--primary))" />
             ))}
          </svg>
           {/* Y Axis Labels */}
           <div className="absolute left-[-40px] top-0 bottom-0 flex flex-col justify-between text-xs text-muted-foreground py-1">
             <span>{activeTab === 'issuance' ? `${maxSupply/1_000_000}M` : `${maxInflation}%`}</span>
             <span>0</span>
           </div>
           {/* X Axis Labels */}
           <div className="absolute bottom-[-20px] left-0 right-0 flex justify-between text-xs text-muted-foreground px-1">
             <span>{chartData[0].year}</span>
             <span>{chartData[Math.floor(chartData.length / 2)].year}</span>
             <span>{chartData[chartData.length - 1].year}</span>
           </div>
        </div>

        {/* Halving Events Table */}
        <div className="overflow-x-auto">
          <table className="w-full text-left text-sm">
            <thead>
              <tr className="border-b border-border">
                <th className="py-2 px-2 font-medium">Halving</th>
                <th className="py-2 px-2 font-medium">Year (Approx)</th>
                <th className="py-2 px-2 font-medium">Reward</th>
                <th className="py-2 px-2 font-medium">Total Supply</th>
                <th className="py-2 px-2 font-medium">Inflation Rate</th>
              </tr>
            </thead>
            <tbody>
              {halvingEvents.slice(0, 6).map(event => (
                <tr key={event.number} className="border-b border-border/50 hover:bg-muted/30">
                  <td className="py-2 px-2">#{event.number}</td>
                  <td className="py-2 px-2">{event.year}</td>
                  <td className="py-2 px-2">{event.reward} BTC</td>
                  <td className="py-2 px-2">{event.totalSupply.toLocaleString()} BTC</td>
                  <td className="py-2 px-2">{event.inflationRate}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </CardContent>
    </Card>
  );
};
