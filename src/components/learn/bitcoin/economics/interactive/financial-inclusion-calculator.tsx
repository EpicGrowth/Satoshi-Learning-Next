'use client';

import React, { useState, useMemo } from 'react';
import { BadgeDollarSign, Map, Percent, PiggyBank, TrendingUp, Wallet } from 'lucide-react';

interface RegionData {
  name: string;
  unbanked: string;
  remittanceFees: string;
  savingsAccess: string;
  paymentCosts: string;
  bitcoinGrowth: string;
  remittanceSavings: string;
  bitcoinAdoption: string;
}

const regionData: Record<string, RegionData> = {
  africa: {
    name: 'Sub-Saharan Africa',
    unbanked: '57%',
    remittanceFees: '8.9%',
    savingsAccess: '26%',
    paymentCosts: '12.8%',
    bitcoinGrowth: '1,200%',
    remittanceSavings: '5-7%',
    bitcoinAdoption: '7%',
  },
  latinAmerica: {
    name: 'Latin America & Caribbean',
    unbanked: '45%',
    remittanceFees: '6.5%',
    savingsAccess: '39%',
    paymentCosts: '8.7%',
    bitcoinGrowth: '1,370%',
    remittanceSavings: '3-5%',
    bitcoinAdoption: '9%',
  },
  southeastAsia: {
    name: 'Southeast Asia',
    unbanked: '51%',
    remittanceFees: '7.1%',
    savingsAccess: '35%',
    paymentCosts: '9.5%',
    bitcoinGrowth: '980%',
    remittanceSavings: '4-6%',
    bitcoinAdoption: '6%',
  },
};

// Interactive Financial Inclusion Opportunity Calculator
export const FinancialInclusionCalculator = () => {
  const [region, setRegion] = useState<'africa' | 'latinAmerica' | 'southeastAsia'>('africa');
  const [serviceType, setServiceType] = useState<'remittances' | 'savings' | 'payments'>(
    'remittances'
  );

  const currentData = useMemo(() => regionData[region], [region]);

  const getOpportunityText = () => {
    switch (serviceType) {
      case 'remittances':
        return `Potential savings of ${currentData.remittanceSavings} on remittance fees using Bitcoin/Lightning Network.`;
      case 'savings':
        return `Providing secure savings tools to the ${currentData.unbanked} unbanked population via Bitcoin.`;
      case 'payments':
        return `Reducing cross-border payment costs (currently ${currentData.paymentCosts}) through Bitcoin rails.`;
      default:
        return '';
    }
  };

  return (
    <div className="p-4 bg-background rounded-lg border border-border">
      <h5 className="font-medium text-center mb-4">Financial Inclusion Opportunity</h5>

      {/* Region Selection */}
      <div className="mb-4">
        <label htmlFor="region-select" className="block text-sm font-medium mb-1">Select Region:</label>
        <select
          id="region-select"
          value={region}
          onChange={(e) => setRegion(e.target.value as typeof region)}
          className="w-full p-2 border border-border rounded-md bg-background text-foreground text-sm"
        >
          <option value="africa">Sub-Saharan Africa</option>
          <option value="latinAmerica">Latin America & Caribbean</option>
          <option value="southeastAsia">Southeast Asia</option>
        </select>
      </div>

      {/* Service Type Selection */}
      <div className="mb-6">
        <p className="block text-sm font-medium mb-2">Select Service Area:</p>
        <div className="flex space-x-2">
          <button
            className={`flex-1 px-3 py-1.5 text-xs rounded-md transition-colors ${
              serviceType === 'remittances'
                ? 'bg-primary text-primary-foreground'
                : 'bg-muted/30 hover:bg-muted'
            }`}
            onClick={() => setServiceType('remittances')}
          >
            Remittances
          </button>
          <button
            className={`flex-1 px-3 py-1.5 text-xs rounded-md transition-colors ${
              serviceType === 'savings'
                ? 'bg-primary text-primary-foreground'
                : 'bg-muted/30 hover:bg-muted'
            }`}
            onClick={() => setServiceType('savings')}
          >
            Savings
          </button>
          <button
            className={`flex-1 px-3 py-1.5 text-xs rounded-md transition-colors ${
              serviceType === 'payments'
                ? 'bg-primary text-primary-foreground'
                : 'bg-muted/30 hover:bg-muted'
            }`}
            onClick={() => setServiceType('payments')}
          >
            Payments
          </button>
        </div>
      </div>

      {/* Display Data */}
      <div className="grid grid-cols-2 gap-4 mb-6 text-sm">
        <div className="p-3 bg-muted/30 rounded-md flex items-center">
          <Map className="h-4 w-4 text-primary mr-2 flex-shrink-0" />
          <span>Region: <span className="font-medium">{currentData.name}</span></span>
        </div>
        <div className="p-3 bg-muted/30 rounded-md flex items-center">
          <Wallet className="h-4 w-4 text-primary mr-2 flex-shrink-0" />
          <span>Unbanked: <span className="font-medium">{currentData.unbanked}</span></span>
        </div>
        <div className="p-3 bg-muted/30 rounded-md flex items-center">
          <BadgeDollarSign className="h-4 w-4 text-primary mr-2 flex-shrink-0" />
          <span>Avg. Remittance Fees: <span className="font-medium">{currentData.remittanceFees}</span></span>
        </div>
        <div className="p-3 bg-muted/30 rounded-md flex items-center">
          <PiggyBank className="h-4 w-4 text-primary mr-2 flex-shrink-0" />
          <span>Savings Access: <span className="font-medium">{currentData.savingsAccess}</span></span>
        </div>
        <div className="p-3 bg-muted/30 rounded-md flex items-center">
          <Percent className="h-4 w-4 text-primary mr-2 flex-shrink-0" />
          <span>Bitcoin Adoption: <span className="font-medium">{currentData.bitcoinAdoption} (P2P Volume)</span></span>
        </div>
        <div className="p-3 bg-muted/30 rounded-md flex items-center">
          <TrendingUp className="h-4 w-4 text-primary mr-2 flex-shrink-0" />
          <span>Bitcoin Growth (YoY): <span className="font-medium">{currentData.bitcoinGrowth}</span></span>
        </div>
      </div>

      {/* Opportunity Highlight */}
      <div className="p-3 rounded-md bg-primary/10 border border-primary/30">
        <h6 className="text-sm font-medium mb-1 text-primary">Bitcoin Opportunity:</h6>
        <p className="text-sm text-foreground">{getOpportunityText()}</p>
      </div>
    </div>
  );
};
