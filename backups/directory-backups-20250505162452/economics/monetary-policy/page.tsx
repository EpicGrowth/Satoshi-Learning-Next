'use client';

import React from 'react';
import { ModuleLayout } from '@/components/learn/shared/module-layout';
import { ModuleContent } from '@/components/learn/shared/module-content';
import { ModuleMetadata } from '@/components/learn/shared/module-metadata';
import type { ModuleMetadata as ModuleMetadataType } from '@/components/learn/shared/module-metadata';
import VerifyCheckbox from '@/components/learn/shared/verify-checkbox';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import {
  Banknote,
  Building,
  Printer,
  ArrowRight,
  Calendar,
  PieChart,
  Clock,
  Check,
  AlertTriangle,
  X,
  Info
} from 'lucide-react';
import SatoshiQuote from '@/components/learn/shared/satoshi-quote';

import { SupplyScheduleVisualizer } from './supply-schedule-visualizer';
import { MonetaryComparator } from './monetary-comparator';
import { MonetaryExpansionCalculator } from './monetary-expansion-calculator';

const moduleId = 'economics';
const sectionId = 'monetary-policy';

const moduleInfo: ModuleMetadataType = {
  title: 'Monetary Policy | Bitcoin',
  description: 'Understanding Bitcoin\'s predetermined issuance schedule, the halving mechanism, and how it contrasts with traditional fiat monetary systems.',
  keywords: ['bitcoin', 'monetary policy', 'issuance', 'halving', 'block reward', 'inflation', 'deflation', 'fiat currency', 'central bank', 'supply cap'],
  canonical: `/learn/bitcoin/bitcoin-economics/${sectionId}`,
  ogImage: '/images/og/bitcoin-monetary-policy.png', // Needs creation
  lastUpdated: '2024-07-30',
  difficulty: 'Intermediate',
  timeToComplete: '30 minutes',
  prerequisites: ['overview'],
};

export default function MonetaryPolicyPage() {
  return (
    <ModuleLayout>
      <ModuleMetadata metadata={moduleInfo} />
      <ModuleContent
        moduleId={moduleId}
        sectionId={sectionId}
        checkpoints={1} // Example: 1 checkpoint for this content
        moduleTitle="Monetary Policy"
        moduleDescription="Exploring Bitcoin's unique approach to money creation."
        difficulty={moduleInfo.difficulty}
        icon={Banknote}
      >
        <div className="space-y-8">
          <SatoshiQuote
            quote="The central bank must be trusted not to debase the currency, but the history of fiat currencies is full of breaches of that trust."
            date="February 11, 2009"
            source="P2P Foundation Forum"
            sourceUrl="https://p2pfoundation.ning.com/forum/topics/bitcoin-open-source"
          />

          <Card>
            <CardHeader>
              <CardTitle>The Rules of the Game: Bitcoin's Monetary Code</CardTitle>
            </CardHeader>
            <CardContent className="prose dark:prose-invert max-w-none">
              <p>
                Unlike traditional currencies controlled by central banks, Bitcoin's monetary policy is embedded
                directly into its code. It's predictable, transparent, and designed to create digital scarcity.
                This policy governs how new bitcoins are created and introduced into circulation, forming the
                economic foundation of the network.
              </p>
              <p>
                Key elements of Bitcoin's monetary policy include:
              </p>
              <ul>
                <li><strong>Fixed Supply Cap:</strong> A hard limit of 21 million bitcoins that can ever exist.</li>
                <li><strong>Predictable Issuance Schedule:</strong> New coins are created at a known, decreasing rate.</li>
                <li><strong>The Halving:</strong> An event approximately every four years where the rate of new coin creation is cut in half.</li>
              </ul>
              <p>
                 This section explores these mechanisms and contrasts them with traditional fiat systems.
              </p>
            </CardContent>
          </Card>

          {/* Fiat Background Section */}
          <Card className="border border-border">
            <CardHeader>
              <CardTitle>Context: The Fiat Standard</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div className="p-4 bg-muted/30 rounded-lg flex flex-col">
                  <div className="flex items-center mb-3">
                    <Building className="h-6 w-6 text-primary mr-2 flex-shrink-0" />
                    <h5 className="font-medium">The Fiat Experiment</h5>
                  </div>
                  <p className="text-sm text-muted-foreground flex-grow">
                    Since 1971, when the last ties to gold were severed, the world has operated
                    entirely on fiat currencies—money backed solely by government decree rather than
                    physical commodities.
                  </p>
                  <div className="mt-3 space-y-2">
                    {[
                      'Not backed by any physical commodity',
                      'Subject to unlimited supply expansion',
                      'Controlled by central banks',
                      'Based purely on trust in institutions',
                    ].map((item, i) => (
                      <div key={i} className="flex items-center gap-2 p-2 bg-background rounded-md">
                        <ArrowRight className="h-3.5 w-3.5 text-primary flex-shrink-0" />
                        <span className="text-xs text-primary/80">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="p-4 bg-muted/30 rounded-lg flex flex-col">
                  <div className="flex items-center mb-3">
                    <Printer className="h-6 w-6 text-primary mr-2 flex-shrink-0" />
                    <h5 className="font-medium">Modern Monetary Expansion</h5>
                  </div>
                  <p className="text-sm text-muted-foreground mb-3">
                    Fiat money supply has expanded dramatically in recent decades, with major
                    increases during crises like the 2008 financial crisis and 2020 pandemic.
                  </p>
                  <div className="flex-grow flex flex-col justify-center">
                    <div className="grid grid-cols-2 gap-2">
                      <div className="p-2 bg-background rounded-md text-center">
                        <p className="text-xs text-muted-foreground mb-1">
                          Global M2 Growth (2008-23)
                        </p>
                        <p className="text-lg font-bold text-red-500">+147%</p>
                      </div>
                      <div className="p-2 bg-background rounded-md text-center">
                        <p className="text-xs text-muted-foreground mb-1">
                          US M2 Change (Mar 20-Mar 22)
                        </p>
                        <p className="text-lg font-bold text-red-500">+40%</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="p-4 bg-amber-50 dark:bg-amber-900/20 rounded-lg text-sm border border-amber-200 dark:border-amber-800">
                <h5 className="font-medium mb-2 flex items-center">
                  <Info className="h-5 w-5 text-amber-600 dark:text-amber-400 mr-2" />
                  Historical Perspective
                </h5>
                <p className="text-muted-foreground">
                  "The current pure fiat monetary system is unprecedented... Every previous
                  system was either backed by commodities or had mechanisms limiting monetary
                  creation... The completely unconstrained monetary expansion capability we have
                  today exists only because of technological advancements... Bitcoin, in many ways,
                  is a technological response to this technological problem."
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Bitcoin's Supply Schedule Section */}
          <Card className="border border-border">
            <CardHeader>
              <CardTitle>Bitcoin's Supply Schedule</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <SatoshiQuote
                quote="Total circulation will be 21,000,000 coins. It'll be distributed to network nodes when they make blocks, with the amount cut in half every 4 years."
                date="January 8, 2009"
                source="Cryptography Mailing List"
                sourceUrl="https://www.metzdowd.com/pipermail/cryptography/2009-January/014994.html"
              />

              <p className="text-muted-foreground leading-relaxed">
                Bitcoin introduces a revolutionary monetary policy with predictable issuance that's
                immune to political influence. The supply is mathematically guaranteed, creating the
                first truly scarce digital asset.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="p-4 bg-muted/30 rounded-lg">
                  <div className="flex items-center mb-3">
                    <Calendar className="h-5 w-5 text-primary mr-2" />
                    <h5 className="font-medium">Halving Mechanism</h5>
                  </div>
                  <p className="text-sm text-muted-foreground mb-3">
                    Approximately every four years (210,000 blocks), the reward for mining new
                    blocks is cut in half, reducing the rate at which new bitcoins enter
                    circulation.
                  </p>
                  <div className="space-y-2">
                    <div className="flex items-center text-xs gap-2">
                      <Check className="h-3.5 w-3.5 text-green-500" />
                      <span>Slows emission rate over time</span>
                    </div>
                    <div className="flex items-center text-xs gap-2">
                      <Check className="h-3.5 w-3.5 text-green-500" />
                      <span>Creates predictable supply schedule</span>
                    </div>
                    <div className="flex items-center text-xs gap-2">
                      <Check className="h-3.5 w-3.5 text-green-500" />
                      <span>Enforces diminishing inflation rate</span>
                    </div>
                  </div>
                </div>

                <div className="p-4 bg-muted/30 rounded-lg">
                  <div className="flex items-center mb-3">
                    <PieChart className="h-5 w-5 text-primary mr-2" />
                    <h5 className="font-medium">Supply Cap</h5>
                  </div>
                  <p className="text-sm text-muted-foreground mb-3">
                    The total number of bitcoins that will ever exist is capped at 21 million,
                    creating absolute digital scarcity that can't be altered without changing
                    Bitcoin's fundamental rules.
                  </p>
                  <div className="mt-3 flex justify-between items-center p-2 bg-background rounded-md">
                    <span className="text-xs">Current Supply:</span>
                    <span className="text-xs font-medium">~19.7 million BTC</span> {/* Updated value */}
                  </div>
                  <div className="mt-2 flex justify-between items-center p-2 bg-background rounded-md">
                    <span className="text-xs">Percent Issued:</span>
                    <span className="text-xs font-medium">~93.8%</span> {/* Updated value */}
                  </div>
                </div>

                <div className="p-4 bg-muted/30 rounded-lg">
                  <div className="flex items-center mb-3">
                    <Clock className="h-5 w-5 text-primary mr-2" />
                    <h5 className="font-medium">Time-based Security</h5>
                  </div>
                  <p className="text-sm text-muted-foreground mb-3">
                    Bitcoin's issuance model requires consistent effort spread over time, preventing
                    anyone—regardless of resources—from acquiring a large percentage of the supply
                    quickly.
                  </p>
                  <div className="space-y-2">
                    <div className="flex items-center text-xs gap-2">
                      <Check className="h-3.5 w-3.5 text-green-500" />
                      <span>Requires ~120 years to issue all coins</span>
                    </div>
                    <div className="flex items-center text-xs gap-2">
                      <Check className="h-3.5 w-3.5 text-green-500" />
                      <span>Time-locks issuance against manipulation</span>
                    </div>
                    <div className="flex items-center text-xs gap-2">
                      <Check className="h-3.5 w-3.5 text-green-500" />
                      <span>Creates natural distribution mechanism</span>
                    </div>
                  </div>
                </div>
              </div>

              <SupplyScheduleVisualizer />
              {/* REMOVED first checkbox - only one final checkbox per page */}
              {/* <VerifyCheckbox
                moduleId={moduleId}
                verificationId={`${sectionId}-1`}
                label="I understand the concept of Bitcoin's fixed supply cap and the role of the halving in its issuance schedule."
              /> */}

              {/* Common Misconceptions */}
              <div className="p-4 bg-red-50 dark:bg-red-900/20 rounded-lg border border-red-100 dark:border-red-900/30">
                <h5 className="font-medium mb-2 flex items-center">
                  <AlertTriangle className="h-5 w-5 text-red-600 dark:text-red-400 mr-2" />
                  <span>Common Misconceptions</span>
                </h5>
                <div className="space-y-3">
                  <div className="flex items-start gap-2">
                    <X className="h-4 w-4 text-red-500 mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="text-sm font-medium">
                        Myth: "The 21 million limit could be changed."
                      </p>
                      <p className="text-xs text-muted-foreground">
                        Reality: Changing the supply cap would require a fundamental change to
                        Bitcoin's core value proposition, something users, miners, and developers
                        overwhelmingly reject. Unlike protocol tweaks that enhance functionality
                        without changing monetary policy, altering the cap would undermine Bitcoin's
                        primary purpose.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-2">
                    <X className="h-4 w-4 text-red-500 mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="text-sm font-medium">
                        Myth: "Bitcoin can't function without block rewards."
                      </p>
                      <p className="text-xs text-muted-foreground">
                        Reality: As block rewards diminish, transaction fees are designed to provide
                        sufficient incentive for miners. The transition from subsidy-based to
                        fee-based security is a core aspect of Bitcoin's long-term economic model.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

            </CardContent>
          </Card>

          {/* Monetary Comparison Section */}
          <Card className="border border-border">
            <CardHeader>
              <CardTitle>Bitcoin vs. Traditional Assets</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-muted-foreground leading-relaxed">
                How does Bitcoin's monetary system stack up against established forms of money like
                fiat currencies and gold? The following comparison highlights key differences in their
                fundamental properties.
              </p>
              <MonetaryComparator />
            </CardContent>
          </Card>

          {/* Monetary Expansion Impact Section */}
          <Card className="border border-border">
            <CardHeader>
              <CardTitle>Impact of Monetary Expansion</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-muted-foreground leading-relaxed">
                The contrast between Bitcoin's fixed supply and fiat's elastic supply has profound
                implications for purchasing power over time. While fiat systems can expand the money
                supply to address economic needs (or political goals), this often leads to long-term
                devaluation.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Bitcoin's approach, by design, aims to preserve value through scarcity, though its
                volatility presents different challenges. The calculator below simulates these
                dynamics (note: this is a simplified model and doesn't account for all economic
                factors).
              </p>
              <MonetaryExpansionCalculator />
            </CardContent>
          </Card>

          <Card className="bg-muted/50">
            <CardHeader>
               <CardTitle className="flex items-center"><Info className="h-5 w-5 mr-2 text-blue-500"/>Implications and Debates</CardTitle>
            </CardHeader>
            <CardContent className="prose dark:prose-invert max-w-none">
              <p>
                Bitcoin's monetary policy is revolutionary but also subject to debate:
              </p>
              <ul>
                <li><strong>Store of Value vs. Medium of Exchange:</strong> Does the potential for deflation hinder its use in daily transactions?</li>
                <li><strong>Fixed Supply Rigidity:</strong> Can a fixed supply adapt to changing economic needs? Does it need to?</li>
                <li><strong>Security Budget Post-Subsidy:</strong> Will transaction fees be sufficient to secure the network once block rewards become negligible (post ~2140)?</li>
                <li><strong>Comparison to Gold Standard:</strong> Does Bitcoin represent a return to 'sound money' principles in digital form?</li>
              </ul>
              <p>
                These questions highlight the ongoing exploration of Bitcoin's long-term economic role and impact.
              </p>
            </CardContent>
          </Card>

          {/* Final Checkbox */}
          <VerifyCheckbox
            moduleId={moduleId}
            verificationId={sectionId}
            label="I have reviewed the material on Bitcoin's Monetary Policy."
          />

        </div>
      </ModuleContent>
    </ModuleLayout>
  );
}
