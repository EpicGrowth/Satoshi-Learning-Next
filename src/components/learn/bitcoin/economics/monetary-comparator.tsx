'use client';

import { useState } from 'react';
import { cn } from '@/lib/utils'; // Assuming 'cn' utility is available
import { Check, Info } from 'lucide-react'; // Add icons if needed

// Interactive monetary comparator component
const MonetaryComparator = () => {
  const [showComparison, setShowComparison] = useState<'supply' | 'governance' | 'inflation'>(
    'supply'
  );

  const comparisons = {
    supply: [
      {
        property: 'Supply Cap',
        bitcoin: '21 million BTC, mathematically enforced',
        fiat: 'Unlimited, can be expanded at will',
        gold: 'Limited by geology and mining economics',
        advantage: 'bitcoin',
      },
      {
        property: 'Issuance Schedule',
        bitcoin: 'Perfectly predictable, pre-programmed halvings',
        fiat: 'Unpredictable, subject to policy decisions',
        gold: 'Relatively stable at ~1.5% annual increase',
        advantage: 'bitcoin',
      },
      {
        property: 'Verification',
        bitcoin: 'Publicly verifiable by anyone running a node',
        fiat: 'Opaque, requires trust in central authorities',
        gold: 'Requires physical assay and trusted custody',
        advantage: 'bitcoin',
      },
      {
        property: 'Counterfeitability',
        bitcoin: 'Cryptographically impossible to counterfeit',
        fiat: 'Counterfeit protection relies on physical features',
        gold: 'Possible to fake with similar metals/alloys',
        advantage: 'bitcoin',
      },
    ],
    governance: [
      {
        property: 'Policy Control',
        bitcoin: 'Consensus rules enforced by all network participants',
        fiat: 'Central bank committees and government officials',
        gold: 'No direct governance; market-determined',
        advantage: 'context-dependent',
      },
      {
        property: 'Rule Changes',
        bitcoin: 'Requires broad consensus across network participants',
        fiat: 'Can change with limited oversight or democratic input',
        gold: 'Physical properties unchangeable',
        advantage: 'context-dependent',
      },
      {
        property: 'Monetary Objectives',
        bitcoin: 'Long-term purchasing power preservation',
        fiat: 'Multiple objectives: employment, growth, stability',
        gold: 'No explicit objectives; market-driven',
        advantage: 'context-dependent',
      },
      {
        property: 'Policy Transparency',
        bitcoin: '100% transparent, all code and rules public',
        fiat: 'Varies by jurisdiction, often limited transparency',
        gold: 'No policy to be transparent about',
        advantage: 'bitcoin',
      },
    ],
    inflation: [
      {
        property: 'Long-term Rate',
        bitcoin: 'Trending to 0% after all coins mined',
        fiat: 'Typically targets 2-3% annually',
        gold: 'Historically ~1.5% through mining',
        advantage: 'bitcoin',
      },
      {
        property: 'Rate Consistency',
        bitcoin: 'Perfectly predictable, immune to political factors',
        fiat: 'Highly variable based on political and economic factors',
        gold: 'Relatively consistent but affected by mining technology',
        advantage: 'bitcoin',
      },
      {
        property: 'Supply Response',
        bitcoin: 'Fixed schedule regardless of demand',
        fiat: 'Can increase supply during crises (e.g., 2008, 2020)',
        gold: 'Slight response to price (more mining when price rises)',
        advantage: 'context-dependent',
      },
      {
        property: 'Distribution',
        bitcoin: 'To miners securing the network',
        fiat: 'First to financial institutions, then broader economy',
        gold: 'To mining companies and their shareholders',
        advantage: 'bitcoin',
      },
    ],
  };

  const currentComparison = comparisons[showComparison];

  return (
    <div className="p-4 bg-background rounded-lg border border-border">
      <h5 className="font-medium text-center mb-4">Monetary System Comparison</h5>

      <div className="flex border border-border rounded-md mb-4 overflow-hidden">
        <button
          className={cn(
            'flex-1 px-3 py-2 text-xs sm:text-sm font-medium transition-colors',
            showComparison === 'supply'
              ? 'bg-primary text-primary-foreground'
              : 'bg-muted/30 hover:bg-muted'
          )}
          onClick={() => setShowComparison('supply')}
        >
          Supply Mechanics
        </button>
        <button
          className={cn(
            'flex-1 px-3 py-2 text-xs sm:text-sm font-medium transition-colors',
            showComparison === 'governance'
              ? 'bg-primary text-primary-foreground'
              : 'bg-muted/30 hover:bg-muted'
          )}
          onClick={() => setShowComparison('governance')}
        >
          Governance
        </button>
        <button
          className={cn(
            'flex-1 px-3 py-2 text-xs sm:text-sm font-medium transition-colors',
            showComparison === 'inflation'
              ? 'bg-primary text-primary-foreground'
              : 'bg-muted/30 hover:bg-muted'
          )}
          onClick={() => setShowComparison('inflation')}
        >
          Inflation
        </button>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full text-xs sm:text-sm border-collapse">
          <thead>
            <tr className="bg-muted/50">
              <th className="p-2 text-left font-medium border-b border-border w-1/4">Property</th>
              <th className="p-2 text-left font-medium border-b border-border w-1/4">Bitcoin</th>
              <th className="p-2 text-left font-medium border-b border-border w-1/4">Fiat Currency</th>
              <th className="p-2 text-left font-medium border-b border-border w-1/4">Gold</th>
            </tr>
          </thead>
          <tbody>
            {currentComparison.map((item, index) => (
              <tr key={index} className="hover:bg-muted/20">
                <td className="p-2 border-b border-border/50 font-medium">{item.property}</td>
                <td className={cn("p-2 border-b border-border/50", item.advantage === 'bitcoin' && 'text-primary font-semibold')}>{item.bitcoin}</td>
                <td className={cn("p-2 border-b border-border/50", item.advantage === 'fiat' && 'text-primary font-semibold')}>{item.fiat}</td>
                <td className={cn("p-2 border-b border-border/50", item.advantage === 'gold' && 'text-primary font-semibold')}>{item.gold}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="mt-3 text-xs text-muted-foreground italic">
        <Info className="inline-block h-3 w-3 mr-1" />
        Highlighted text indicates a potential advantage in that property category. 'Context-dependent' advantages vary based on perspective or goal.
      </div>
    </div>
  );
};

export default MonetaryComparator;
