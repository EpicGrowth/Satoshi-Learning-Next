'use client';

import React, { useState, useMemo, useCallback } from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Coins, Calculator, Printer } from 'lucide-react';

// Interactive Monetary Expansion Calculator
export const MonetaryExpansionCalculator = () => {
  const [initialAmount, setInitialAmount] = useState<number>(1000);
  const [years, setYears] = useState<number>(10);
  const [btcInflationRate, setBtcInflationRate] = useState<number>(0.9); // Approx rate post-2024 halving
  const [fiatInflationRate, setFiatInflationRate] = useState<number>(3.5); // Example average

  const calculateFutureValue = useCallback((amount: number, rate: number, numYears: number, isDeflating = false) => {
    if (isDeflating) {
      // For Bitcoin, it's more about purchasing power increase relative to decreasing inflation
      // This is a simplification; real purchasing power depends on adoption/price
      // Let's model it as value preservation against fiat inflation for simplicity here
      const finalFiatValue = amount * Math.pow(1 + fiatInflationRate / 100, numYears);
      // Assuming Bitcoin roughly maintains purchasing power against this inflation (highly simplified!)
      return amount;
    } else {
      // Fiat value decrease due to inflation
      return amount / Math.pow(1 + rate / 100, numYears);
    }
  }, [fiatInflationRate]);

  const btcFutureValue = useMemo(() => calculateFutureValue(initialAmount, btcInflationRate, years, true), [initialAmount, btcInflationRate, years, calculateFutureValue]);
  const fiatFutureValue = useMemo(() => calculateFutureValue(initialAmount, fiatInflationRate, years), [initialAmount, fiatInflationRate, years, calculateFutureValue]);

  const handleInputChange = (setter: React.Dispatch<React.SetStateAction<number>>, value: string) => {
    const num = parseInt(value, 10);
    if (!isNaN(num) && num >= 0) {
      setter(num);
    }
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center"><Calculator className="h-5 w-5 mr-2 text-primary"/>Purchasing Power Projection</CardTitle>
        <CardDescription>Simplified comparison of purchasing power erosion.</CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label htmlFor="initialAmount" className="block text-sm font-medium mb-1">Initial Amount ($)</label>
            <Input id="initialAmount" type="number" value={initialAmount} onChange={(e) => handleInputChange(setInitialAmount, e.target.value)} />
          </div>
          <div>
            <label htmlFor="years" className="block text-sm font-medium mb-1">Years</label>
            <Input id="years" type="number" value={years} onChange={(e) => handleInputChange(setYears, e.target.value)} />
          </div>
        </div>
        <div className="grid grid-cols-2 gap-4">
           <div>
            <label htmlFor="fiatRate" className="block text-sm font-medium mb-1">Avg. Fiat Inflation (%)</label>
            <Input id="fiatRate" type="number" step="0.1" value={fiatInflationRate} onChange={(e) => handleInputChange(setFiatInflationRate, e.target.value)} />
          </div>
           <div>
             <label htmlFor="btcRate" className="block text-sm font-medium mb-1">Avg. BTC Inflation (%)</label>
             <Input id="btcRate" type="number" step="0.1" value={btcInflationRate} readOnly className="bg-muted/50"/>
             <p className="text-xs text-muted-foreground mt-1">Bitcoin's rate decreases predictably.</p>
           </div>
        </div>

        <div className="space-y-3 pt-4 border-t border-border">
          <h4 className="font-medium">Projected Future Value (in today's purchasing power):</h4>
          <div className="flex justify-between items-center bg-muted/30 p-3 rounded-lg">
             <span className="flex items-center"><Coins className="h-4 w-4 mr-2 text-orange-500"/> Bitcoin (Simplified):</span>
             <span className="font-semibold text-lg">~ ${initialAmount.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</span>
          </div>
           <p className="text-xs text-muted-foreground px-3">Note: Bitcoin's future value is highly speculative and depends on adoption and price, not just its low inflation. This calculation simplifies by assuming it holds purchasing power against fiat inflation.</p>
          <div className="flex justify-between items-center bg-muted/30 p-3 rounded-lg">
            <span className="flex items-center"><Printer className="h-4 w-4 mr-2 text-blue-500"/> Fiat Currency:</span>
            <span className="font-semibold text-lg text-red-600">${fiatFutureValue.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</span>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};
