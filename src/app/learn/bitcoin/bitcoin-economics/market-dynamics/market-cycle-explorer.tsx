'use client';

import React, { useState } from 'react';
import {
  TrendingUp,
  TrendingDown,
  Layers,
  Wallet,
  CheckCircle
} from 'lucide-react';

interface CyclePhase {
  id: string;
  name: string;
  description: string;
  characteristics: string[];
  icon: React.ElementType;
  color: string;
}

const phases: CyclePhase[] = [
  {
    id: 'accumulation',
    name: 'Accumulation Phase',
    description:
      'The market has bottomed and early adopters begin accumulating at low prices. Sentiment remains negative but technical indicators show strengthening.',
    characteristics: [
      'Price stabilizes after significant decline',
      'Long-term holders increase positions',
      'Media coverage minimal or negative',
      'Public interest low',
    ],
    icon: Wallet,
    color: 'text-blue-500',
  },
  {
    id: 'markup',
    name: 'Markup Phase (Bull Run)',
    description:
      'Prices begin to rise steadily, attracting more buyers. Positive feedback loops form as media attention grows and FOMO (Fear Of Missing Out) kicks in.',
    characteristics: [
      'Sustained uptrend forms',
      'Increasing trading volume',
      'Positive news coverage emerges',
      'Retail investors enter the market',
      'Euphoria begins to build',
    ],
    icon: TrendingUp,
    color: 'text-green-500',
  },
  {
    id: 'distribution',
    name: 'Distribution Phase',
    description:
      'The market reaches a peak. Smart money begins selling to less-informed buyers. Volatility increases, and price struggles to make new highs.',
    characteristics: [
      'Price action becomes choppy, large swings',
      'High trading volume without clear direction',
      'Euphoric sentiment, widespread mainstream coverage',
      'Smart money/insiders selling',
    ],
    icon: Layers,
    color: 'text-yellow-500',
  },
  {
    id: 'markdown',
    name: 'Markdown Phase (Bear Market)',
    description:
      'Prices begin a sustained decline as supply overwhelms demand. Panic selling can occur, leading to sharp drops. Sentiment turns highly negative.',
    characteristics: [
      'Clear downtrend establishes',
      'Decreasing volume on rallies, increasing on drops',
      'Negative news cycle dominates',
      'Forced selling/liquidations occur',
      'Hope turns to despair',
    ],
    icon: TrendingDown,
    color: 'text-red-500',
  },
];

// Interactive Market Cycle Explorer
const MarketCycleExplorer = () => {
  const [activePhase, setActivePhase] = useState<string>('accumulation');

  const currentPhase = phases.find((p) => p.id === activePhase);

  return (
    <div className="p-4 bg-background rounded-lg border border-border">
      <h5 className="font-medium text-center mb-4">Bitcoin Market Cycle Explorer</h5>

      {/* Phase Selector Tabs */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-2 mb-6">
        {phases.map((phase) => (
          <button
            key={phase.id}
            onClick={() => setActivePhase(phase.id)}
            className={`flex flex-col items-center p-3 rounded-md transition-colors text-center ${
              activePhase === phase.id
                ? 'bg-primary text-primary-foreground shadow-md'
                : 'bg-muted/30 hover:bg-muted'
            }`}
          >
            <phase.icon className={`h-6 w-6 mb-1 ${phase.color}`} />
            <span className="text-xs font-medium">{phase.name}</span>
          </button>
        ))}
      </div>

      {/* Display Active Phase Details */}
      {currentPhase && (
        <div className="p-4 bg-muted/50 rounded-lg border border-border">
          <h6 className="font-semibold mb-2 flex items-center">
            <currentPhase.icon className={`h-5 w-5 mr-2 ${currentPhase.color}`} />
            {currentPhase.name}
          </h6>
          <p className="text-sm text-muted-foreground mb-3">{currentPhase.description}</p>
          <p className="text-xs font-medium mb-1 text-foreground">Key Characteristics:</p>
          <ul className="list-none space-y-1">
            {currentPhase.characteristics.map((char, index) => (
              <li key={index} className="flex items-start text-xs text-muted-foreground">
                <CheckCircle className="h-3 w-3 mr-2 mt-0.5 text-primary flex-shrink-0" />
                <span>{char}</span>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default MarketCycleExplorer;
