'use client';

import React, { useState } from 'react';
import {
  Layers,
  TrendingUp,
  BarChart3,
  Scale,
  Landmark,
  CreditCard,
  CheckCircle,
  Building,
} from 'lucide-react';

interface MaturityFactor {
  id: string;
  name: string;
  description: string;
  icon: React.ElementType;
  weight: number; // Importance weight (0-1)
  score: number; // Current score (0-100)
  trend: 'up' | 'down' | 'stable'; // Recent trend
}

const initialFactors: MaturityFactor[] = [
  {
    id: 'liquidity',
    name: 'Market Liquidity & Depth',
    description: 'Ease of buying/selling large amounts without impacting price.',
    icon: Layers,
    weight: 0.25,
    score: 75,
    trend: 'up',
  },
  {
    id: 'volume',
    name: 'Trading Volume',
    description: 'Total value traded across exchanges, indicating activity.',
    icon: BarChart3,
    weight: 0.15,
    score: 80,
    trend: 'up',
  },
  {
    id: 'volatility',
    name: 'Price Volatility',
    description: 'Degree of price fluctuation over time. Lower volatility suggests maturity.',
    icon: TrendingUp, // Often shown with volatility charts
    weight: 0.15,
    score: 60, // Lower is better, so score reflects maturity (100 - volatility index)
    trend: 'down', // Lowering volatility trend is good
  },
  {
    id: 'derivatives',
    name: 'Derivatives Market',
    description: 'Presence of futures, options, ETFs for hedging and speculation.',
    icon: Scale,
    weight: 0.1,
    score: 85,
    trend: 'up',
  },
  {
    id: 'institutional',
    name: 'Institutional Adoption',
    description: 'Involvement of large financial players (funds, banks).',
    icon: Landmark,
    weight: 0.2,
    score: 70,
    trend: 'up',
  },
  {
    id: 'regulation',
    name: 'Regulatory Clarity',
    description: 'Established legal frameworks governing Bitcoin usage.',
    icon: Building,
    weight: 0.1,
    score: 55,
    trend: 'stable',
  },
  {
    id: 'payment',
    name: 'Payment Integration',
    description: 'Use of Bitcoin for payments by merchants and processors.',
    icon: CreditCard,
    weight: 0.05,
    score: 40,
    trend: 'stable',
  },
];

const calculateOverallScore = (factors: MaturityFactor[]): number => {
  let totalScore = 0;
  let totalWeight = 0;
  factors.forEach((factor) => {
    totalScore += factor.score * factor.weight;
    totalWeight += factor.weight;
  });
  return Math.round(totalScore / totalWeight);
};

// Market Maturity Index component
const MarketMaturityIndex = () => {
  const [factors] = useState<MaturityFactor[]>(initialFactors);

  const overallScore = calculateOverallScore(factors);

  const getMaturityLevel = (score: number): string => {
    if (score < 30) return 'Nascent';
    if (score < 50) return 'Developing';
    if (score < 70) return 'Maturing';
    if (score < 90) return 'Mature';
    return 'Highly Mature';
  };

  const maturityLevel = getMaturityLevel(overallScore);
  const progressPercentage = overallScore;

  return (
    <div className="p-4 bg-background rounded-lg border border-border">
      <h5 className="font-medium text-center mb-4">Bitcoin Market Maturity Index</h5>

      {/* Overall Score Display */}
      <div className="text-center mb-6">
        <p className="text-sm text-muted-foreground">Overall Maturity Score</p>
        <p className="text-4xl font-bold text-primary">{overallScore}</p>
        <p className="text-lg font-medium text-muted-foreground">{maturityLevel}</p>
        <div className="w-full bg-muted rounded-full h-2.5 mt-2">
          <div
            className="bg-primary h-2.5 rounded-full transition-all duration-500 ease-out"
            style={{ width: `${progressPercentage}%` }}
          ></div>
        </div>
      </div>

      {/* Factors Breakdown */}
      <div className="space-y-3">
        {factors.map((factor) => (
          <div key={factor.id} className="p-3 bg-muted/30 rounded-md border border-border/50">
            <div className="flex items-center justify-between mb-1">
              <div className="flex items-center">
                <factor.icon className="h-4 w-4 mr-2 text-muted-foreground" />
                <span className="text-sm font-medium text-foreground">{factor.name}</span>
              </div>
              <span className="text-sm font-semibold text-primary">{factor.score}/100</span>
            </div>
            <p className="text-xs text-muted-foreground mb-1.5">{factor.description}</p>
            {/* Factor Progress Bar */}
            <div className="w-full bg-muted rounded-full h-1.5">
              <div
                className="bg-primary/70 h-1.5 rounded-full"
                style={{ width: `${factor.score}%` }}
              ></div>
            </div>
            <div className="text-xs text-muted-foreground mt-1 text-right">
              Weight: {Math.round(factor.weight * 100)}% | Trend:{' '}
              <span
                className={`${factor.trend === 'up'
                    ? 'text-green-600 dark:text-green-400'
                    : factor.trend === 'down'
                      ? 'text-red-600 dark:text-red-400'
                      : ''
                  }`}
              >
                {factor.trend}
              </span>
            </div>
          </div>
        ))}
      </div>

      {/* Explainer */}
      <div className="mt-4 p-3 bg-muted/50 rounded-md text-center border border-border/50">
        <p className="text-xs text-muted-foreground">
          This index provides a snapshot of Bitcoin's market maturity based on key economic and adoption factors. Higher scores indicate a more stable, liquid, and integrated market.
        </p>
      </div>
    </div>
  );
};

export default MarketMaturityIndex;
