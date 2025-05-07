'use client';

import { useState } from 'react';
import { Minus, Plus, TrendingUp, TrendingDown } from 'lucide-react';

// Interactive Monetary Expansion Calculator
const MonetaryExpansionCalculator = () => {
  const [year, setYear] = useState<number>(2024); // Start from current year approx
  const [fiatInflation, setFiatInflation] = useState<number>(3.0); // Default to a common target

  const calculateBitcoinInflation = (targetYear: number): number => {
    // Find the halving epoch for the target year
    const yearsSinceGenesis = targetYear - 2009;
    const currentEpoch = Math.floor(yearsSinceGenesis / 4);
    
    if (currentEpoch >= 33) return 0; // Roughly after 2140

    // Calculate supply at the *start* of the target year
    let supplyAtStartOfYear = 0;
    for (let epoch = 0; epoch < currentEpoch; epoch++) {
        const blocksInEpoch = 210000;
        const reward = 50 / (2 ** epoch);
        supplyAtStartOfYear += blocksInEpoch * reward;
    }
    // Add coins mined in the current epoch up to the start of the year
    const yearsIntoCurrentEpoch = yearsSinceGenesis % 4;
    const blocksPerYear = 52560; // Approximate
    const currentReward = 50 / (2 ** currentEpoch);
    supplyAtStartOfYear += yearsIntoCurrentEpoch * blocksPerYear * currentReward;
    supplyAtStartOfYear = Math.min(supplyAtStartOfYear, 21_000_000);

    // Calculate new coins issued *during* the target year
    const newCoinsInYear = blocksPerYear * currentReward;
    
    if (supplyAtStartOfYear <= 0) return Infinity; // Avoid division by zero at genesis
    
    const inflationRate = (newCoinsInYear / supplyAtStartOfYear) * 100;
    
    return Math.max(0, inflationRate); // Ensure non-negative
  };

  const calculatePurchasingPowerLoss = (years: number, annualRate: number): number => {
    // Calculates the percentage LOSS of purchasing power
    const finalValue = Math.pow(1 / (1 + annualRate / 100), years);
    return (1 - finalValue) * 100;
  };
  
  const startYear = 2024; // Reference year for calculations
  const yearsElapsed = Math.max(0, year - startYear);

  const bitcoinInflationRate = calculateBitcoinInflation(year);
  // Note: Bitcoin's purchasing power calculation is complex due to deflation/adoption.
  // We'll simplify here and show inflation rate, not a direct purchasing power comparison.
  
  const fiatPurchasingPowerLoss = calculatePurchasingPowerLoss(yearsElapsed, fiatInflation);

  return (
    <div className="p-4 bg-background rounded-lg border border-border">
      <h5 className="font-medium text-center mb-4">Monetary Expansion Impact</h5>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
        {/* Year Slider */}
        <div className="space-y-2">
          <label htmlFor="yearRange" className="block text-sm font-medium text-muted-foreground">Target Year: <span className="font-semibold text-foreground">{year}</span></label>
          <div className="flex items-center gap-2">
            <button
              className="p-1.5 rounded-full bg-muted hover:bg-muted/80 disabled:opacity-50"
              onClick={() => setYear(Math.max(startYear, year - 1))}
              disabled={year <= startYear}
              aria-label="Decrease year"
            >
              <Minus className="h-4 w-4" />
            </button>
            <input
              id="yearRange"
              type="range"
              min={startYear}
              max={startYear + 50} // Project 50 years ahead
              value={year}
              onChange={(e) => setYear(parseInt(e.target.value))}
              className="w-full h-2 bg-muted rounded-lg appearance-none cursor-pointer accent-primary"
            />
            <button
              className="p-1.5 rounded-full bg-muted hover:bg-muted/80 disabled:opacity-50"
              onClick={() => setYear(Math.min(startYear + 50, year + 1))}
              disabled={year >= startYear + 50}
              aria-label="Increase year"
            >
              <Plus className="h-4 w-4" />
            </button>
          </div>
        </div>

        {/* Fiat Inflation Slider */}
        <div className="space-y-2">
          <label htmlFor="fiatInflationRange" className="block text-sm font-medium text-muted-foreground">Avg. Annual Fiat Inflation: <span className="font-semibold text-foreground">{fiatInflation.toFixed(1)}%</span></label>
          <div className="flex items-center gap-2">
             <button
              className="p-1.5 rounded-full bg-muted hover:bg-muted/80 disabled:opacity-50"
              onClick={() => setFiatInflation(Math.max(0.5, fiatInflation - 0.5))}
              disabled={fiatInflation <= 0.5}
              aria-label="Decrease fiat inflation"
            >
              <Minus className="h-4 w-4" />
            </button>
            <input
              id="fiatInflationRange"
              type="range"
              min="0.5"
              max="15"
              step="0.5"
              value={fiatInflation}
              onChange={(e) => setFiatInflation(parseFloat(e.target.value))}
              className="w-full h-2 bg-muted rounded-lg appearance-none cursor-pointer accent-primary"
            />
            <button
              className="p-1.5 rounded-full bg-muted hover:bg-muted/80 disabled:opacity-50"
              onClick={() => setFiatInflation(Math.min(15, fiatInflation + 0.5))}
              disabled={fiatInflation >= 15}
              aria-label="Increase fiat inflation"
            >
              <Plus className="h-4 w-4" />
            </button>
          </div>
        </div>
      </div>

      {/* Results Display */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {/* Bitcoin Results */}
        <div className="p-4 bg-muted/30 rounded-lg text-center border border-border/50">
          <h6 className="font-semibold text-sm mb-2 text-primary">Bitcoin ({year})</h6>
          <p className="text-xs text-muted-foreground mb-1">Annual Inflation Rate</p>
          <p className="text-2xl font-bold">{isFinite(bitcoinInflationRate) ? `${bitcoinInflationRate.toFixed(2)}%` : 'N/A'}</p>
          <p className="text-xs text-muted-foreground mt-2 flex items-center justify-center">
            <TrendingDown className="h-4 w-4 mr-1 text-green-500" />
            Predictably Decreasing
          </p>
        </div>
        
        {/* Fiat Results */}
        <div className="p-4 bg-muted/30 rounded-lg text-center border border-border/50">
          <h6 className="font-semibold text-sm mb-2 text-destructive">Fiat Currency ({year})</h6>
           <p className="text-xs text-muted-foreground mb-1">Purchasing Power Loss since {startYear}</p>
          <p className="text-2xl font-bold">{fiatPurchasingPowerLoss.toFixed(1)}%</p>
           <p className="text-xs text-muted-foreground mt-2 flex items-center justify-center">
            <TrendingDown className="h-4 w-4 mr-1 text-red-500" />
            Value Eroded by Inflation
          </p>
        </div>
      </div>
      
      <p className="text-xs text-muted-foreground text-center mt-4 italic">
         Calculations are illustrative. Bitcoin inflation decreases predictably based on its code. Fiat inflation erodes purchasing power over time.
      </p>
    </div>
  );
};

export default MonetaryExpansionCalculator;
