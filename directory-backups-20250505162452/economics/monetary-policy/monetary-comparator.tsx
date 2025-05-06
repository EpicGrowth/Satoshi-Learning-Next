'use client';

import React from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Coins, Scale, Sparkles, Printer } from 'lucide-react';

// Interactive Monetary Comparator
export const MonetaryComparator = () => {
  const systems = [
    {
      id: 'bitcoin',
      name: 'Bitcoin',
      icon: Coins,
      supply: 'Fixed, 21M cap',
      issuance: 'Algorithmic, decreasing (halving)',
      control: 'Decentralized protocol rules',
      transparency: 'High (public ledger)',
      policy_goal: 'Predictability, scarcity',
      strength: 'Immune to political manipulation, verifiable scarcity.',
      weakness: 'Inflexible supply, potential deflationary pressure.',
    },
    {
      id: 'fiat',
      name: 'Fiat Currency (e.g., USD)',
      icon: Printer,
      supply: 'Elastic, no fixed limit',
      issuance: 'Central bank decision (e.g., Fed)',
      control: 'Centralized (central bank, government)',
      transparency: 'Moderate to Low',
      policy_goal: 'Price stability, full employment',
      strength: 'Flexible supply to manage economic cycles.',
      weakness: 'Prone to inflation/debasement, trust-based.',
    },
    {
      id: 'gold',
      name: 'Gold',
      icon: Sparkles,
      supply: 'Scarce, slowly increasing (~1.5%/yr)',
      issuance: 'Mining (physical effort/cost)',
      control: 'Decentralized (market forces)',
      transparency: 'Moderate (above-ground stocks uncertain)',
      policy_goal: 'Store of value (historical)',
      strength: 'Historically proven store of value, tangible.',
      weakness: 'Difficult to transport/verify/divide, supply increases.',
    },
  ];

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center"><Scale className="h-5 w-5 mr-2 text-primary"/>Monetary System Comparison</CardTitle>
        <CardDescription>Comparing Bitcoin's monetary properties to Fiat and Gold.</CardDescription>
      </CardHeader>
      <CardContent>
        <Tabs defaultValue="bitcoin" className="w-full">
          <TabsList className="grid w-full grid-cols-3 mb-4">
            {systems.map(sys => (
              <TabsTrigger key={sys.id} value={sys.id} className="flex items-center gap-2">
                <sys.icon className="h-4 w-4" /> {sys.name}
              </TabsTrigger>
            ))}
          </TabsList>
          {systems.map(sys => (
            <TabsContent key={sys.id} value={sys.id} className="bg-muted/30 p-4 rounded-lg border border-border">
              <h4 className="font-semibold mb-3 text-lg flex items-center">
                <sys.icon className="h-5 w-5 mr-2 text-primary" /> {sys.name}
              </h4>
              <div className="space-y-2 text-sm">
                <p><strong className="font-medium">Supply:</strong> {sys.supply}</p>
                <p><strong className="font-medium">Issuance Mechanism:</strong> {sys.issuance}</p>
                <p><strong className="font-medium">Control:</strong> {sys.control}</p>
                <p><strong className="font-medium">Transparency:</strong> {sys.transparency}</p>
                <p><strong className="font-medium">Policy Goal:</strong> {sys.policy_goal}</p>
                <p><strong className="font-medium text-green-600">Strength:</strong> {sys.strength}</p>
                <p><strong className="font-medium text-red-600">Weakness:</strong> {sys.weakness}</p>
              </div>
            </TabsContent>
          ))}
        </Tabs>
      </CardContent>
    </Card>
  );
};
