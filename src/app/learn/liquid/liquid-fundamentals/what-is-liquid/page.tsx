'use client';

import { ModuleLayout } from '@/components/learn/shared/module-layout';
import { ModuleContent } from '@/components/learn/shared/module-content';
import { Card } from '@/components/ui/card';
import { Droplet, Shield, Database, Lock, Layers, ExternalLink } from 'lucide-react';
import SatoshiNote from '@/components/learn/shared/satoshi-note';
import VerifyCheckbox from '@/components/learn/shared/verify-checkbox';

export default function WhatIsLiquid() {
  return (
    <ModuleLayout>
      <ModuleContent
        moduleId="liquid-fundamentals"
        sectionId="what-is-liquid"
        checkpoints={1}
        moduleTitle="What is Liquid?"
        moduleDescription="Learn about the Liquid Network and its role in the Bitcoin ecosystem"
        difficulty="Beginner"
        icon={Droplet}
      >
        {/* Introduction */}
        <Card className="mb-8 p-6 border-cyan-600/20">
          <h3 className="mb-4 text-lg font-medium">Introduction to Liquid Network</h3>
          <div className="rounded-lg bg-muted/50 p-3 sm:p-4 md:p-5 text-sm text-muted-foreground border border-border/40 mobile-text-container break-words">
            <p>
              The Liquid Network is a sidechain-based settlement network for traders and exchanges, enabling faster, more confidential Bitcoin transactions and the issuance of digital assets.
            </p>
            <p className="mt-3">
              Launched in 2018 by Blockstream, Liquid was designed to address specific limitations of the Bitcoin network—particularly for exchanges, traders, and financial institutions—while maintaining strong security guarantees through a federation of trusted entities.
            </p>
            <p className="mt-3">
              Unlike Bitcoin's proof-of-work consensus mechanism, Liquid uses a federation of trusted participants who collectively manage the network, allowing for faster settlement times and enhanced privacy features not available on the main Bitcoin blockchain.
            </p>
          </div>
        </Card>

        {/* Bitcoin Relationship */}
        <Card className="mb-8 p-6">
          <h3 className="mb-4 text-lg font-medium">Relationship with Bitcoin</h3>
          <p className="leading-relaxed text-muted-foreground">
            The Liquid Network is built as a Bitcoin sidechain, meaning it's a separate blockchain that runs in parallel and is connected to the Bitcoin blockchain. Here's how they relate:
          </p>
          <ul className="mt-4 list-inside list-disc space-y-2 text-muted-foreground">
            <li>Two-way peg with Bitcoin, allowing BTC to move between chains</li>
            <li>Uses a different consensus model optimized for speed and privacy</li>
            <li>Extends Bitcoin's functionality while inheriting its security model</li>
            <li>Maintains 1:1 backing of Liquid Bitcoin (L-BTC) with real BTC</li>
          </ul>
          <SatoshiNote className="mt-6" note="While Liquid extends Bitcoin's capabilities, it makes different trade-offs compared to the base layer. Understanding these differences is key to grasping Liquid's role in the broader Bitcoin ecosystem." />
        </Card>

        {/* Technical Foundation */}
        <Card className="mb-8 p-6">
          <h3 className="mb-4 text-lg font-medium">Technical Foundation</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-muted p-3 sm:p-4 rounded-lg flex items-start overflow-hidden">
              <ExternalLink className="h-6 w-6 text-cyan-600 mr-3 mt-1 flex-shrink-0" />
              <div className="min-w-0 flex-1 break-words">
                <h5 className="font-medium mb-2">Sidechain</h5>
                <p className="text-sm text-muted-foreground">
                  A blockchain that runs in parallel to Bitcoin. Liquid uses a two-way peg system that allows Bitcoin to be transferred between the main chain and Liquid, enabling new features while maintaining the security of assets.
                </p>
              </div>
            </div>

            <div className="bg-muted p-3 sm:p-4 rounded-lg flex items-start overflow-hidden">
              <Shield className="h-6 w-6 text-cyan-600 mr-3 mt-1 flex-shrink-0" />
              <div className="min-w-0 flex-1 break-words">
                <h5 className="font-medium mb-2">Federated Consensus</h5>
                <p className="text-sm text-muted-foreground">
                  Unlike Bitcoin's proof-of-work, Liquid uses a federation of functionaries who jointly control the two-way peg and secure the network. This allows for faster block times (1 minute) and predictable settlement.
                </p>
              </div>
            </div>

            <div className="bg-muted p-3 sm:p-4 rounded-lg flex items-start overflow-hidden">
              <Lock className="h-6 w-6 text-cyan-600 mr-3 mt-1 flex-shrink-0" />
              <div className="min-w-0 flex-1 break-words">
                <h5 className="font-medium mb-2">Confidential Transactions</h5>
                <p className="text-sm text-muted-foreground">
                  Liquid implements Confidential Transactions to hide transaction amounts and asset types from third parties, enhancing privacy while maintaining verifiability. Only the transaction participants can see the full details.
                </p>
              </div>
            </div>

            <div className="bg-muted p-3 sm:p-4 rounded-lg flex items-start overflow-hidden">
              <Layers className="h-6 w-6 text-cyan-600 mr-3 mt-1 flex-shrink-0" />
              <div className="min-w-0 flex-1 break-words">
                <h5 className="font-medium mb-2">Asset Issuance</h5>
                <p className="text-sm text-muted-foreground">
                  Liquid allows the issuance of custom assets, representing real-world assets, security tokens, stablecoins, or utility tokens. Each asset has a unique ID and can be transferred just like L-BTC.
                </p>
              </div>
            </div>
          </div>
        </Card>

        {/* Key Features */}
        <Card className="p-6 mb-8">
          <h3 className="mb-4 text-lg font-medium">Key Features</h3>
          <div className="space-y-4">
            <div className="p-4 bg-muted rounded-lg">
              <h5 className="font-medium mb-2 flex items-center">
                <span className="h-6 w-6 rounded-full bg-cyan-600 text-white flex items-center justify-center text-sm mr-2">
                  1
                </span>
                Fast Settlement
              </h5>
              <p className="text-sm text-muted-foreground">
                Liquid blocks are produced every minute and typically confirm within seconds, making it significantly faster than Bitcoin's 10-minute block time. This makes Liquid ideal for traders who need to move funds quickly between exchanges to take advantage of arbitrage opportunities.
              </p>
            </div>

            <div className="p-4 bg-muted rounded-lg">
              <h5 className="font-medium mb-2 flex items-center">
                <span className="h-6 w-6 rounded-full bg-cyan-600 text-white flex items-center justify-center text-sm mr-2">
                  2
                </span>
                Enhanced Privacy
              </h5>
              <p className="text-sm text-muted-foreground">
                Confidential Transactions in Liquid hide transaction amounts and asset types from public view, providing significantly more privacy than Bitcoin's transparent blockchain. This privacy is important for businesses and individuals who don't want their financial activities publicly visible.
              </p>
            </div>

            <div className="p-4 bg-muted rounded-lg">
              <h5 className="font-medium mb-2 flex items-center">
                <span className="h-6 w-6 rounded-full bg-cyan-600 text-white flex items-center justify-center text-sm mr-2">
                  3
                </span>
                Asset Issuance
              </h5>
              <p className="text-sm text-muted-foreground">
                Liquid allows the issuance of digital assets that can represent various instruments like security tokens, stablecoins, or utility tokens. These assets inherit Liquid's privacy and speed benefits. Each Liquid asset is uniquely identifiable and can be verifiably linked to an issuer.
              </p>
            </div>

            <div className="p-4 bg-muted rounded-lg">
              <h5 className="font-medium mb-2 flex items-center">
                <span className="h-6 w-6 rounded-full bg-cyan-600 text-white flex items-center justify-center text-sm mr-2">
                  4
                </span>
                Federated Security
              </h5>
              <p className="text-sm text-muted-foreground">
                Liquid's federation consists of cryptocurrency businesses like exchanges, trading desks, and financial institutions. The federation secures the network through a threshold signature scheme that requires a supermajority of functionaries to agree on actions, providing protection against individual compromises.
              </p>
            </div>

            <div className="p-4 bg-muted rounded-lg">
              <h5 className="font-medium mb-2 flex items-center">
                <span className="h-6 w-6 rounded-full bg-cyan-600 text-white flex items-center justify-center text-sm mr-2">
                  5
                </span>
                Bitcoin Compatibility
              </h5>
              <p className="text-sm text-muted-foreground">
                Liquid is based on the Bitcoin codebase and uses many of the same components, making it familiar for Bitcoin developers. The two-way peg ensures that L-BTC is always backed 1:1 by BTC, allowing users to convert between the two when needed, though the peg-in and peg-out processes have different security assumptions.
              </p>
            </div>
          </div>
        </Card>
        
        {/* Use Cases */}
        <Card className="p-6 mb-8">
          <h3 className="mb-4 text-lg font-medium">Use Cases</h3>
          <div className="space-y-4">
            <div className="p-4 bg-muted/50 rounded-lg">
              <h5 className="font-medium mb-2">Exchange Integration</h5>
              <p className="text-sm text-muted-foreground">
                Exchanges can use Liquid to facilitate faster deposits and withdrawals, reducing counterparty risk and improving capital efficiency. Users can move funds between exchanges in minutes instead of waiting for multiple Bitcoin confirmations.
              </p>
            </div>
            
            <div className="p-4 bg-muted/50 rounded-lg">
              <h5 className="font-medium mb-2">Token Issuance</h5>
              <p className="text-sm text-muted-foreground">
                Companies can issue digital assets on Liquid for various purposes, including representing securities, stablecoins, or utility tokens. These assets benefit from Liquid's confidentiality features and can be traded on supporting platforms.
              </p>
            </div>
            
            <div className="p-4 bg-muted/50 rounded-lg">
              <h5 className="font-medium mb-2">Confidential Transactions</h5>
              <p className="text-sm text-muted-foreground">
                Users who need enhanced privacy for their Bitcoin transactions can use Liquid to hide transaction amounts and asset types, providing greater financial privacy than is possible on the main Bitcoin blockchain.
              </p>
            </div>
            
            <div className="p-4 bg-muted/50 rounded-lg">
              <h5 className="font-medium mb-2">Trading and Arbitrage</h5>
              <p className="text-sm text-muted-foreground">
                Traders can leverage Liquid's fast settlement times to quickly move funds between exchanges, capturing arbitrage opportunities that would be impractical using on-chain Bitcoin transactions due to confirmation times.
              </p>
            </div>
          </div>
        </Card>

        {/* Tradeoffs */}
        <Card className="p-6 mb-8">
          <h3 className="mb-4 text-lg font-medium">Tradeoffs</h3>
          <p className="leading-relaxed text-muted-foreground mb-4">
            While Liquid offers significant advantages, it's important to understand the tradeoffs compared to Bitcoin:
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="p-4 bg-muted/50 rounded-lg">
              <h5 className="font-medium mb-2 text-amber-600">Trust Model</h5>
              <p className="text-sm text-muted-foreground">
                Liquid relies on a federation of trusted parties, whereas Bitcoin is trustless. Users must trust that a supermajority of the federation will act honestly.
              </p>
            </div>
            
            <div className="p-4 bg-muted/50 rounded-lg">
              <h5 className="font-medium mb-2 text-amber-600">Centralization</h5>
              <p className="text-sm text-muted-foreground">
                The federation represents a more centralized approach than Bitcoin's open mining, though the threshold signature scheme mitigates some risks.
              </p>
            </div>
            
            <div className="p-4 bg-muted/50 rounded-lg">
              <h5 className="font-medium mb-2 text-amber-600">Peg Security</h5>
              <p className="text-sm text-muted-foreground">
                The two-way peg relies on the federation's honesty for peg-outs back to Bitcoin, creating a potential security bottleneck.
              </p>
            </div>
            
            <div className="p-4 bg-muted/50 rounded-lg">
              <h5 className="font-medium mb-2 text-amber-600">Complexity</h5>
              <p className="text-sm text-muted-foreground">
                Liquid introduces additional complexity compared to Bitcoin, with more moving parts and potential points of failure.
              </p>
            </div>
          </div>
          
          <SatoshiNote className="mt-6" note="Liquid represents a different set of tradeoffs than Bitcoin, optimizing for different use cases. It's not a replacement for Bitcoin's base layer, but a complementary system with its own strengths and limitations." />
        </Card>
        
        {/* Verification Checkpoint */}
        <div className="mt-6">
          <VerifyCheckbox
            moduleId="liquid-fundamentals"
            sectionId="what-is-liquid"
            verificationId="what-is-liquid"
            label="I understand what the Liquid Network is and its relationship to Bitcoin"
          />
        </div>
      </ModuleContent>
    </ModuleLayout>
  );
}