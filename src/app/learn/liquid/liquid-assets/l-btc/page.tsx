'use client';

import { ModuleLayout } from '@/components/learn/shared/module-layout';
import { ModuleContent } from '@/components/learn/shared/module-content';
import { Card } from '@/components/ui/card';
import { Bitcoin, ArrowLeftRight, Clock, LockKeyhole, ShieldCheck } from 'lucide-react';
import SatoshiNote from '@/components/learn/shared/satoshi-note';
import VerifyCheckbox from '@/components/learn/shared/verify-checkbox';

export default function LiquidBitcoin() {
  return (
    <ModuleLayout>
      <ModuleContent
        moduleId="liquid-assets"
        sectionId="l-btc"
        checkpoints={1}
        moduleTitle="L-BTC"
        moduleDescription="Understanding Liquid Bitcoin"
        difficulty="Intermediate"
        icon={Bitcoin}
      >
        {/* Introduction */}
        <Card className="mb-8 p-6 border-cyan-600/20">
          <h3 className="mb-4 text-lg font-medium">Liquid Bitcoin (L-BTC)</h3>
          <div className="rounded-lg bg-muted/50 p-3 sm:p-4 md:p-5 text-sm text-muted-foreground border border-border/40 mobile-text-container break-words">
            <p>
              L-BTC is the native asset of the Liquid Network and represents Bitcoin that has been locked into the Liquid federation's multisignature addresses. It maintains a 1:1 peg with Bitcoin, meaning each L-BTC is backed by one BTC held in the federation's custody.
            </p>
            <p className="mt-3">
              Understanding how L-BTC works, its properties, and how it moves between the Bitcoin and Liquid networks is fundamental to working with the Liquid ecosystem.
            </p>
          </div>
        </Card>

        {/* Key Properties of L-BTC */}
        <h3 className="text-xl font-medium mt-10 mb-4">Key Properties of L-BTC</h3>
        <Card className="mb-8 p-6">
          <div className="space-y-6">
            <div className="flex items-start gap-4">
              <ShieldCheck className="h-6 w-6 text-cyan-500 flex-shrink-0 mt-1" />
              <div>
                <h4 className="font-medium">Two-Way Peg</h4>
                <p className="text-sm text-muted-foreground mt-1">
                  L-BTC is backed by real bitcoin held by the Liquid Federation. Users can convert BTC to L-BTC (peg-in) and L-BTC back to BTC (peg-out) at any time, maintaining the 1:1 value relationship.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <LockKeyhole className="h-6 w-6 text-cyan-500 flex-shrink-0 mt-1" />
              <div>
                <h4 className="font-medium">Confidential Transactions</h4>
                <p className="text-sm text-muted-foreground mt-1">
                  Like all assets on Liquid, L-BTC benefits from confidential transactions, which hide the amount being transferred. This provides greater privacy than native Bitcoin transactions.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <Clock className="h-6 w-6 text-cyan-500 flex-shrink-0 mt-1" />
              <div>
                <h4 className="font-medium">Faster Settlement</h4>
                <p className="text-sm text-muted-foreground mt-1">
                  L-BTC transactions are confirmed in approximately 2 minutes, compared to Bitcoin's average of 10 minutes (and recommended 6 confirmations). This makes L-BTC more suitable for trading and time-sensitive applications.
                </p>
              </div>
            </div>
          </div>
        </Card>

        {/* The Peg-in Process */}
        <h3 className="text-xl font-medium mt-10 mb-4">The Peg-in Process</h3>
        <Card className="mb-8 p-6">
          <p className="mb-4 text-muted-foreground">
            Converting BTC to L-BTC involves the following steps:
          </p>
          <ol className="space-y-3 ml-5 list-decimal text-sm text-muted-foreground">
            <li>
              <span className="font-medium text-foreground">Generate a Peg-in Address</span> - Using Liquid wallet software, generate a special Bitcoin address that's associated with your Liquid address.
            </li>
            <li>
              <span className="font-medium text-foreground">Send BTC</span> - Send Bitcoin to this special address. This Bitcoin will be held by the Liquid Federation.
            </li>
            <li>
              <span className="font-medium text-foreground">Wait for Confirmations</span> - Wait for the Bitcoin transaction to receive 102 confirmations (approximately 17 hours). This security requirement ensures the Bitcoin transaction is deeply embedded in the blockchain.
            </li>
            <li>
              <span className="font-medium text-foreground">Receive L-BTC</span> - After the confirmations, an equal amount of L-BTC will be created and sent to your Liquid address.
            </li>
          </ol>
        </Card>

        <SatoshiNote className="my-8" pathType="liquid">
          The 102-confirmation requirement for peg-ins is a security measure to protect against blockchain reorganizations. While this introduces a delay, it's a necessary trade-off to secure the peg between Bitcoin and Liquid. Once the L-BTC is issued, you can transact quickly on the Liquid Network.
        </SatoshiNote>

        {/* The Peg-out Process */}
        <h3 className="text-xl font-medium mt-10 mb-4">The Peg-out Process</h3>
        <Card className="mb-8 p-6">
          <p className="text-sm text-muted-foreground">
            Converting L-BTC back to BTC works as follows:
          </p>
          <ol className="mt-4 space-y-2 ml-5 list-decimal text-sm text-muted-foreground">
            <li>Initiate a peg-out transaction in your Liquid wallet, specifying a Bitcoin address to receive the funds</li>
            <li>The L-BTC is destroyed on the Liquid Network</li>
            <li>The Liquid Federation releases the corresponding amount of BTC from their multisignature addresses</li>
            <li>The BTC is sent to your specified Bitcoin address</li>
          </ol>
          <p className="text-sm text-muted-foreground mt-4">
            Unlike peg-ins, peg-outs typically require working with a member of the Liquid Federation, as there are additional security and regulatory requirements for withdrawing Bitcoin from the federation's custody.
          </p>
        </Card>

        {/* L-BTC Use Cases */}
        <h3 className="text-xl font-medium mt-10 mb-4">L-BTC Use Cases</h3>
        <Card className="mb-8 p-6">
          <ul className="space-y-2 ml-5 list-disc text-sm text-muted-foreground">
            <li><span className="font-medium text-foreground">Exchange Transfers</span> - Moving bitcoin between exchanges quickly and privately</li>
            <li><span className="font-medium text-foreground">Trading Pairs</span> - Serving as the base trading pair for other Liquid assets</li>
            <li><span className="font-medium text-foreground">Private Transactions</span> - Conducting confidential bitcoin transactions</li>
            <li><span className="font-medium text-foreground">Settlement Network</span> - Enabling fast settlement between businesses and financial institutions</li>
          </ul>
        </Card>

        {/* Verification checkpoint */}
        <VerifyCheckbox
          moduleId="liquid-assets"
          verificationId="l-btc"
          label="I understand what L-BTC is and how the peg-in and peg-out processes work"
        />
      </ModuleContent>
    </ModuleLayout>
  );
}
