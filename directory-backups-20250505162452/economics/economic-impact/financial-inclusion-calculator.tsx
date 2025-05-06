'use client';

import { useState } from 'react';
import {
  Map,
  Wallet,
  PiggyBank,
  Percent,
  TrendingUp,
  ArrowDownUp,
} from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Label } from '@/components/ui/label';

// Interactive Financial Inclusion Opportunity Calculator
export default function FinancialInclusionCalculator() {
  const [region, setRegion] = useState<'africa' | 'latinAmerica' | 'southeastAsia'>('africa');
  const [serviceType, setServiceType] = useState<'remittances' | 'savings' | 'payments'>(
    'remittances'
  );

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
      savingsAccess: '33%',
      paymentCosts: '9.5%',
      bitcoinGrowth: '980%',
      remittanceSavings: '4-6%',
      bitcoinAdoption: '5%',
    },
  };

  const currentData = regionData[region];

  const getServiceImpact = () => {
    switch (serviceType) {
      case 'remittances':
        return {
          title: 'Remittance Cost Savings',
          description:
            'Bitcoin can significantly reduce the high fees associated with international money transfers, especially crucial in regions heavily reliant on remittances.',
          metric: `Avg. Traditional Fee: ${currentData.remittanceFees}`,
          potential: `Potential Savings with Bitcoin: ${currentData.remittanceSavings}`,
          icon: ArrowDownUp,
        };
      case 'savings':
        return {
          title: 'Access to Savings Technology',
          description:
            'For populations with limited access to traditional banking, Bitcoin offers a way to save and preserve value outside of volatile local currencies or informal methods.',
          metric: `Access to Formal Savings: ${currentData.savingsAccess}`,
          potential: 'Bitcoin provides a censorship-resistant store of value accessible via basic internet.',
          icon: PiggyBank,
        };
      case 'payments':
        return {
          title: 'Lowering Payment Friction',
          description:
            'Bitcoin enables low-cost, near-instantaneous digital payments, bypassing expensive intermediary fees common in many developing economies.',
          metric: `Avg. Payment Transaction Cost: ${currentData.paymentCosts}`,
          potential: 'Bitcoin payment channels (like Lightning) offer significantly lower fees.',
          icon: Wallet,
        };
    }
  };

  const impact = getServiceImpact();

  return (
    <Card className="my-6 border border-border">
      <CardHeader>
        <CardTitle className="text-lg text-center">Financial Inclusion Potential with Bitcoin</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
          <div>
            <h6 className="font-medium mb-2 text-sm flex items-center">
              <Map className="w-4 h-4 mr-2" /> Select Region:
            </h6>
            <RadioGroup value={region} onValueChange={(value) => setRegion(value as any)}>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="africa" id="r-africa" />
                <Label htmlFor="r-africa" className="text-xs">{regionData.africa.name}</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="latinAmerica" id="r-latam" />
                <Label htmlFor="r-latam" className="text-xs">{regionData.latinAmerica.name}</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="southeastAsia" id="r-seasia" />
                <Label htmlFor="r-seasia" className="text-xs">{regionData.southeastAsia.name}</Label>
              </div>
            </RadioGroup>
          </div>
          <div className="md:col-span-2">
            <h6 className="font-medium mb-2 text-sm flex items-center">
              <TrendingUp className="w-4 h-4 mr-2" /> Select Financial Service:
            </h6>
            <RadioGroup value={serviceType} onValueChange={(value) => setServiceType(value as any)} className="grid grid-cols-3 gap-2">
              <Label htmlFor="s-remit" className={`flex items-center p-2 rounded-md border border-border cursor-pointer text-xs ${serviceType === 'remittances' ? 'bg-primary/10 border-primary' : 'hover:bg-muted/50'}`}>
                <RadioGroupItem value="remittances" id="s-remit" className="sr-only" />
                <ArrowDownUp className="w-3 h-3 mr-1.5" /> Remittances
              </Label>
              <Label htmlFor="s-save" className={`flex items-center p-2 rounded-md border border-border cursor-pointer text-xs ${serviceType === 'savings' ? 'bg-primary/10 border-primary' : 'hover:bg-muted/50'}`}>
                <RadioGroupItem value="savings" id="s-save" className="sr-only" />
                <PiggyBank className="w-3 h-3 mr-1.5" /> Savings
              </Label>
              <Label htmlFor="s-pay" className={`flex items-center p-2 rounded-md border border-border cursor-pointer text-xs ${serviceType === 'payments' ? 'bg-primary/10 border-primary' : 'hover:bg-muted/50'}`}>
                <RadioGroupItem value="payments" id="s-pay" className="sr-only" />
                <Wallet className="w-3 h-3 mr-1.5" /> Payments
              </Label>
            </RadioGroup>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6 text-xs bg-muted/30 p-4 rounded-lg border border-border">
          <div><strong>Region:</strong> {currentData.name}</div>
          <div><strong>Unbanked Population:</strong> {currentData.unbanked}</div>
          <div><strong>Recent Bitcoin Growth (YoY):</strong> {currentData.bitcoinGrowth}</div>
          <div><strong>Estimated Bitcoin Adoption:</strong> {currentData.bitcoinAdoption}</div>
        </div>

        <Card className="bg-background border-primary/30">
          <CardHeader className="pb-2 pt-4">
            <CardTitle className="text-base flex items-center">
              <impact.icon className="w-5 h-5 mr-2 text-primary" />
              {impact.title}
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground mb-3">{impact.description}</p>
            <div className="text-sm space-y-1">
              <p><strong>Status Quo:</strong> {impact.metric}</p>
              <p className="text-primary"><strong>Bitcoin Potential:</strong> {impact.potential}</p>
            </div>
          </CardContent>
        </Card>
      </CardContent>
    </Card>
  );
}
