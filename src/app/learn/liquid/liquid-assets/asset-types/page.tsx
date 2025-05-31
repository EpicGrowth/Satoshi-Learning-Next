'use client';

import { ModuleLayout } from '@/components/learn/shared/module-layout';
import { ModuleContent } from '@/components/learn/shared/module-content';
import { Card } from '@/components/ui/card';
import { Tag, FileText, CreditCard, CircleDollarSign, Database } from 'lucide-react';
import SatoshiNote from '@/components/learn/shared/satoshi-note';
import VerifyCheckbox from '@/components/learn/shared/verify-checkbox';

export default function LiquidAssetTypes() {
  return (
    <ModuleLayout>
      <ModuleContent
        moduleId="liquid-assets"
        sectionId="asset-types"
        checkpoints={1}
        moduleTitle="Asset Types"
        moduleDescription="Understanding the different types of assets on Liquid"
        difficulty="Intermediate"
        icon={Tag}
      >
        {/* Introduction */}
        <Card className="mb-8 p-6 border-cyan-600/20">
          <h3 className="mb-4 text-lg font-medium">Asset Types on Liquid</h3>
          <div className="rounded-lg bg-muted/50 p-3 sm:p-4 md:p-5 text-sm text-muted-foreground border border-border/40 mobile-text-container break-words">
            <p>
              One of Liquid's most powerful features is its ability to issue and transfer multiple asset types on a single blockchain. Unlike Bitcoin, which primarily handles only BTC, Liquid can handle a diverse ecosystem of assets, each with unique properties and use cases.
            </p>
            <p className="mt-3">
              Understanding the different types of assets that can exist on Liquid is essential for developers and users looking to leverage the full potential of the platform.
            </p>
          </div>
        </Card>

        {/* Primary Asset Types */}
        <h3 className="text-xl font-medium mt-10 mb-4">Primary Asset Types</h3>
        <Card className="mb-8 p-6">
          <div className="space-y-6">
            <div className="flex items-start gap-4">
              <CircleDollarSign className="h-6 w-6 text-cyan-500 flex-shrink-0 mt-1" />
              <div>
                <h4 className="font-medium">L-BTC (Liquid Bitcoin)</h4>
                <p className="text-sm text-muted-foreground mt-1">
                  The primary asset on the Liquid Network. L-BTC is a 1:1 Bitcoin peg, meaning each L-BTC is backed by a real bitcoin held in the federation's multisignature addresses. L-BTC serves as the base asset for the network.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <CreditCard className="h-6 w-6 text-cyan-500 flex-shrink-0 mt-1" />
              <div>
                <h4 className="font-medium">Issued Assets</h4>
                <p className="text-sm text-muted-foreground mt-1">
                  Custom tokens created by Liquid users. These can represent anything from stablecoins to security tokens, utility tokens, or digital collectibles. Each issued asset has a unique asset ID and can be configured with custom properties.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <Database className="h-6 w-6 text-cyan-500 flex-shrink-0 mt-1" />
              <div>
                <h4 className="font-medium">Confidential Assets</h4>
                <p className="text-sm text-muted-foreground mt-1">
                  All assets on Liquid benefit from confidential transactions, which hide the amount and asset type being transferred. This provides privacy for all types of transactions on the network.
                </p>
              </div>
            </div>
          </div>
        </Card>

        {/* Issued Asset Classifications */}
        <h3 className="text-xl font-medium mt-10 mb-4">Issued Asset Classifications</h3>
        <Card className="mb-8 p-6">
          <p className="mb-4 text-muted-foreground">
            Issued assets can be broadly classified into several categories based on their use case:
          </p>
          <ol className="space-y-4 ml-5 list-decimal text-sm text-muted-foreground">
            <li>
              <span className="font-medium text-foreground">Stablecoins</span> - Digital assets pegged to fiat currencies or other stable value references. Examples include USDT on Liquid.
            </li>
            <li>
              <span className="font-medium text-foreground">Security Tokens</span> - Represent ownership in a company, profit sharing rights, or other financial instruments. These typically need to comply with securities regulations.
            </li>
            <li>
              <span className="font-medium text-foreground">Utility Tokens</span> - Provide access to a product or service, often with a specific utility within an ecosystem.
            </li>
            <li>
              <span className="font-medium text-foreground">Collectibles</span> - Unique digital items that can be owned and traded, similar to NFTs on other blockchains.
            </li>
          </ol>
        </Card>

        <SatoshiNote className="my-8" pathType="liquid">
          Unlike many other blockchain platforms, Liquid doesn't have separate standards or templates for different token types (like ERC-20, ERC-721 on Ethereum). Instead, the Liquid protocol provides a flexible framework where issuers can define custom parameters for each asset.
        </SatoshiNote>

        {/* Technical Properties */}
        <h3 className="text-xl font-medium mt-10 mb-4">Technical Properties of Assets</h3>
        <Card className="mb-8 p-6">
          <p className="text-sm text-muted-foreground">
            When issuing an asset on Liquid, the creator can define several properties:
          </p>
          <ul className="mt-4 space-y-2 ml-5 list-disc text-sm text-muted-foreground">
            <li><span className="font-medium text-foreground">Asset Name</span> - A human-readable name for the asset</li>
            <li><span className="font-medium text-foreground">Ticker Symbol</span> - A short abbreviation, similar to stock symbols</li>
            <li><span className="font-medium text-foreground">Precision</span> - The number of decimal places the asset can be divided into</li>
            <li><span className="font-medium text-foreground">Initial Issuance Amount</span> - How many units to create initially</li>
            <li><span className="font-medium text-foreground">Reissuance Tokens</span> - Whether to allow future issuance of more units</li>
            <li><span className="font-medium text-foreground">Domain</span> - A domain that verifies the issuer's identity</li>
          </ul>
        </Card>

        {/* Verification checkpoint */}
        <VerifyCheckbox
          moduleId="liquid-assets"
          verificationId="asset-types"
          label="I understand the different types of assets that can exist on the Liquid Network"
        />
      </ModuleContent>
    </ModuleLayout>
  );
}
