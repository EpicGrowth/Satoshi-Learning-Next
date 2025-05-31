'use client';

import { ModuleLayout } from '@/components/learn/shared/module-layout';
import { ModuleContent } from '@/components/learn/shared/module-content';
import { Card } from '@/components/ui/card';
import { Building, Coins, ArrowRightLeft, Globe, Shield, Database } from 'lucide-react';
import SatoshiNote from '@/components/learn/shared/satoshi-note';
import VerifyCheckbox from '@/components/learn/shared/verify-checkbox';

export default function LiquidExchanges() {
  return (
    <ModuleLayout>
      <ModuleContent
        moduleId="liquid-applications"
        sectionId="exchanges"
        checkpoints={1}
        moduleTitle="Exchange Integration"
        moduleDescription="Understanding how exchanges integrate with the Liquid Network"
        difficulty="Advanced"
        icon={Building}
      >
        {/* Introduction */}
        <Card className="mb-8 p-6 border-cyan-600/20">
          <h3 className="mb-4 text-lg font-medium">Exchanges on the Liquid Network</h3>
          <div className="rounded-lg bg-muted/50 p-3 sm:p-4 md:p-5 text-sm text-muted-foreground border border-border/40 mobile-text-container break-words">
            <p>
              Cryptocurrency exchanges are one of the primary beneficiaries of the Liquid Network. By utilizing Liquid's features, exchanges can offer faster settlement times, enhanced privacy, and reduced operational costs compared to on-chain Bitcoin transactions.
            </p>
            <p className="mt-3">
              The Liquid Network was specifically designed with exchanges in mind, providing solutions to many of the challenges they face when operating with Bitcoin's base layer.
            </p>
          </div>
        </Card>

        {/* Key Benefits */}
        <h3 className="text-xl font-medium mt-10 mb-4">Key Benefits for Exchanges</h3>
        <Card className="mb-8 p-6">
          <div className="space-y-6">
            <div className="flex items-start gap-4">
              <ArrowRightLeft className="h-6 w-6 text-cyan-500 flex-shrink-0 mt-1" />
              <div>
                <h4 className="font-medium">Fast Inter-Exchange Transfers</h4>
                <p className="text-sm text-muted-foreground mt-1">
                  L-BTC transfers between exchanges can be confirmed in approximately 2 minutes, compared to 1 hour or more on the Bitcoin network. This improves capital efficiency and reduces counterparty risk.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <Shield className="h-6 w-6 text-cyan-500 flex-shrink-0 mt-1" />
              <div>
                <h4 className="font-medium">Confidential Transactions</h4>
                <p className="text-sm text-muted-foreground mt-1">
                  Transaction amounts and asset types are hidden from public view, protecting sensitive information about exchange balances and user activity. This significantly improves security posture for exchanges.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <Coins className="h-6 w-6 text-cyan-500 flex-shrink-0 mt-1" />
              <div>
                <h4 className="font-medium">Asset Issuance</h4>
                <p className="text-sm text-muted-foreground mt-1">
                  Exchanges can issue and manage their own tokens on Liquid, representing stablecoins, security tokens, or utility tokens with minimal technical overhead.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <Database className="h-6 w-6 text-cyan-500 flex-shrink-0 mt-1" />
              <div>
                <h4 className="font-medium">Reduced Blockchain Bloat</h4>
                <p className="text-sm text-muted-foreground mt-1">
                  By moving transactions to the Liquid sidechain, exchanges reduce their footprint on the Bitcoin blockchain, contributing to a more scalable ecosystem.
                </p>
              </div>
            </div>
          </div>
        </Card>

        {/* Implementation */}
        <h3 className="text-xl font-medium mt-10 mb-4">Exchange Implementation</h3>
        <Card className="mb-8 p-6">
          <p className="mb-4 text-muted-foreground">
            Integrating Liquid typically involves several key components:
          </p>
          <ol className="space-y-3 ml-5 list-decimal text-sm text-muted-foreground">
            <li>
              <span className="font-medium text-foreground">Liquid Node</span> - Running a Liquid full node to interact with the network
            </li>
            <li>
              <span className="font-medium text-foreground">Wallet Infrastructure</span> - Supporting L-BTC and other Liquid assets
            </li>
            <li>
              <span className="font-medium text-foreground">Peg-in/Peg-out Services</span> - Facilitating transfers between Bitcoin and Liquid
            </li>
            <li>
              <span className="font-medium text-foreground">Compliance Tools</span> - Decoding confidential transactions for regulatory purposes
            </li>
          </ol>
        </Card>

        <SatoshiNote className="my-8" pathType="liquid">
          While confidential transactions provide privacy, exchanges can decode transactions involving their own addresses, allowing them to maintain compliance with regulations while still benefiting from Liquid's privacy features.
        </SatoshiNote>

        {/* Network Effect */}
        <h3 className="text-xl font-medium mt-10 mb-4">The Exchange Network Effect</h3>
        <Card className="mb-8 p-6">
          <p className="text-sm text-muted-foreground">
            Liquid's utility for exchanges increases with each new exchange that joins the network. This network effect creates a more liquid and efficient market for L-BTC and other Liquid assets.
          </p>
          <p className="text-sm text-muted-foreground mt-4">
            As of 2023, numerous major exchanges have integrated with Liquid, including Bitfinex, BTSE, Bull Bitcoin, and many others. The growing adoption makes Liquid an increasingly important infrastructure piece for the cryptocurrency exchange ecosystem.
          </p>
        </Card>

        {/* Verification checkpoint */}
        <VerifyCheckbox
          moduleId="liquid-applications"
          verificationId="exchanges"
          label="I understand how exchanges can integrate with and benefit from the Liquid Network"
        />
      </ModuleContent>
    </ModuleLayout>
  );
}
