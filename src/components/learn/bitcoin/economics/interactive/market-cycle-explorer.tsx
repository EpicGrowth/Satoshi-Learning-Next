'use client';

import React, { useState } from 'react';
import {
  TrendingUp,
  Scale,
  DollarSign,
  TrendingDown,
} from 'lucide-react';

// Interface defining the structure for a market cycle phase
interface CyclePhase {
  id: string;
  name: string;
  description: string;
  characteristics: string[];
  icon: React.ElementType;
  color: string; // Not directly used for styling in this version, but kept for data structure
}

// Interactive Market Cycle Explorer Component
export const MarketCycleExplorer = () => {
  const [activePhase, setActivePhase] = useState<string>('accumulation');

  const phases: CyclePhase[] = [
    {
      id: 'accumulation',
      name: 'Accumulation Phase',
      description:
        'The market has bottomed and early adopters begin accumulating at low prices. Sentiment remains negative but technical indicators show strengthening.',
      characteristics: [
        'Price stabilizes after significant decline',
        'Long-term holders increase positions',
        'Low trading volume with occasional spikes',
        'General public has lost interest',
        'Mainstream media coverage is minimal or negative',
      ],
      icon: DollarSign,
      color: 'blue',
    },
    {
      id: 'markup',
      name: 'Mark-Up Phase',
      description:
        'Price begins trending upward as more investors recognize value. New narratives emerge and momentum builds toward a new bull market.',
      characteristics: [
        'Consistent upward price action',
        'Increasing trading volume',
        'Breakout above key technical resistance levels',
        'Renewed media interest',
        'New investors enter the market',
      ],
      icon: TrendingUp,
      color: 'green',
    },
    {
      id: 'distribution',
      name: 'Distribution Phase',
      description:
        'The market reaches overextended levels. Early investors begin selling to late arrivals and smart money gradually exits positions.',
      characteristics: [
        'Price reaches all-time highs',
        'Extreme bullish sentiment and euphoria',
        'Technical divergence (price up, indicators down)',
        'Early adopters begin selling',
        'Mainstream media coverage is extremely positive',
      ],
      icon: Scale,
      color: 'orange',
    },
    {
      id: 'markdown',
      name: 'Mark-Down Phase',
      description:
        'The market begins a downtrend as selling pressure increases. Fear replaces greed and cascading liquidations may accelerate price decline.',
      characteristics: [
        'Price consistently trends downward',
        'Higher volatility with strong downward moves',
        'Decreasing trading volume (except during capitulation events)',
        'Negative sentiment dominates',
        'Mainstream narrative turns against Bitcoin',
      ],
      icon: TrendingDown,
      color: 'red',
    },
  ];

  const currentPhase = phases.find((p) => p.id === activePhase) || phases[0];

  // Helper function to get Tailwind background color class based on phase ID
  const getBgColorClass = (phaseId: string) => {
    switch (phaseId) {
      case 'accumulation': return 'bg-blue-50 dark:bg-blue-900/20';
      case 'markup': return 'bg-green-50 dark:bg-green-900/20';
      case 'distribution': return 'bg-orange-50 dark:bg-orange-900/20';
      case 'markdown': return 'bg-red-50 dark:bg-red-900/20';
      default: return 'bg-muted';
    }
  };

  // Helper function to get Tailwind text color class based on phase ID
  const getTextColorClass = (phaseId: string) => {
    switch (phaseId) {
      case 'accumulation': return 'text-blue-500';
      case 'markup': return 'text-green-500';
      case 'distribution': return 'text-orange-500';
      case 'markdown': return 'text-red-500';
      default: return 'text-foreground';
    }
  };

    // Helper function to get Tailwind marker color class based on phase ID
    const getMarkerColorClass = (phaseId: string) => {
      switch (phaseId) {
        case 'accumulation': return 'bg-blue-500';
        case 'markup': return 'bg-green-500';
        case 'distribution': return 'bg-orange-500';
        case 'markdown': return 'bg-red-500';
        default: return 'bg-primary';
      }
    };


  return (
    <div className="p-4 bg-background rounded-lg border border-border">
      <h5 className="font-medium text-center mb-4">Bitcoin Market Cycles</h5>

      <div className="relative h-14 mb-8">
        {/* Cycle timeline */}
        <div className="absolute top-1/2 left-0 right-0 h-1 bg-muted transform -translate-y-1/2"></div>

        {/* Phase markers */}
        {phases.map((phase, index) => {
          const isActive = phase.id === activePhase;
          const markerColor = getMarkerColorClass(phase.id);

          return (
            <div
              key={phase.id}
              className={`absolute top-1/2 transform -translate-y-1/2 -translate-x-1/2 cursor-pointer transition-all duration-200 ${isActive ? 'scale-125 z-10' : 'scale-100'}`}
              style={{ left: `${(index / (phases.length - 1)) * 100}%` }}
              onClick={() => setActivePhase(phase.id)}
              title={`Select ${phase.name}`}
            >
              <div
                className={`h-4 w-4 rounded-full ${isActive ? markerColor : 'bg-muted-foreground/30 hover:bg-muted-foreground/50'}`}
              >
                {isActive && (
                  <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 whitespace-nowrap">
                    <span className="text-xs font-medium px-2 py-1 rounded-full bg-background border border-border shadow-sm">
                      {phase.name}
                    </span>
                  </div>
                )}
              </div>
            </div>
          );
        })}
      </div>

      {/* Phase Details Display */}
      <div className={`p-4 rounded-lg border border-border ${getBgColorClass(activePhase)}`}>
        <div className="flex items-center space-x-2 mb-3">
          <currentPhase.icon className={getTextColorClass(activePhase)} />
          <h6 className={`font-medium ${getTextColorClass(activePhase)}`}>{currentPhase.name}</h6>
        </div>

        <p className="text-sm text-muted-foreground mb-4">{currentPhase.description}</p>

        <div className="space-y-2">
          <h6 className="text-xs font-medium">Key Characteristics:</h6>
          <ul className="space-y-1">
            {currentPhase.characteristics.map((item, i) => (
              <li key={i} className="flex items-baseline text-xs text-muted-foreground">
                <span className="mr-2">•</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Historical Perspective Note */}
      <div className="mt-4 p-3 bg-muted/30 rounded-md">
        <h6 className="text-xs font-medium mb-1">Historical Perspective:</h6>
        <p className="text-xs text-muted-foreground">
          Bitcoin has experienced several major market cycles since inception, each with similar psychological phases but increasing scale. While cycles share common patterns, each has unique characteristics influenced by market structure, regulatory changes, and macroeconomic conditions. Understanding these cycles helps investors maintain perspective during periods of extreme sentiment.
        </p>
      </div>
    </div>
  );
};
