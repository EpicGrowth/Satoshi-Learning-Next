'use client';

import { ModuleLayout } from '@/components/learn/shared/module-layout';
import { ModuleContent } from '@/components/learn/shared/module-content';
import { Card } from '@/components/ui/card';
import { Layers, FileText, Tag, AlertTriangle, CheckCircle } from 'lucide-react';
import SatoshiNote from '@/components/learn/shared/satoshi-note';
import VerifyCheckbox from '@/components/learn/shared/verify-checkbox';

export default function AssetIssuance() {
  return (
    <ModuleLayout>
      <ModuleContent
        moduleId="liquid-fundamentals"
        sectionId="asset-issuance"
        checkpoints={1}
        moduleTitle="Asset Issuance"
        moduleDescription="Creating and managing digital assets on the Liquid Network"
        difficulty="Beginner"
        icon={Layers}
      >
        {/* Introduction */}
        <Card className="mb-8 p-6 border-cyan-600/20">
          <h3 className="mb-4 text-lg font-medium">Asset Issuance on Liquid</h3>
          <div className="rounded-lg bg-muted/50 p-3 sm:p-4 md:p-5 text-sm text-muted-foreground border border-border/40 mobile-text-container break-words">
            <p>
              One of the Liquid Network's most powerful features is the ability to issue custom digital assets. Unlike Bitcoin, which primarily deals with a single asset (BTC), Liquid allows users to create various types of assets that can represent real-world assets, financial instruments, or utility tokens.
            </p>
            <p className="mt-3">
              Each Liquid asset has a unique Asset ID and can be transferred just like L-BTC. These assets inherit Liquid's privacy and security features, including Confidential Transactions, which hide the amounts and asset types being transferred.
            </p>
            <p className="mt-3">
              Asset issuance on Liquid combines the security and settlement assurances of Bitcoin with the flexibility needed for various financial applications, all while maintaining enhanced privacy.
            </p>
          </div>
        </Card>

        {/* Types of Liquid Assets */}
        <Card className="mb-8 p-6">
          <h3 className="mb-4 text-lg font-medium">Types of Liquid Assets</h3>
          <p className="leading-relaxed text-muted-foreground mb-4">
            Liquid supports various types of assets, each with different use cases and characteristics:
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-muted p-4 rounded-lg overflow-hidden">
              <h5 className="font-medium mb-2 flex items-center">
                <Tag className="h-5 w-5 text-cyan-600 mr-2" />
                L-BTC
              </h5>
              <p className="text-sm text-muted-foreground">
                The native representation of Bitcoin on the Liquid Network. Each L-BTC is backed 1:1 by BTC held in the federation's multisignature wallet. L-BTC has the asset ID 6f0279e9ed041c3d710a9f57d0c02928416460c4b722ae3457a11eec381c526d.
              </p>
            </div>

            <div className="bg-muted p-4 rounded-lg overflow-hidden">
              <h5 className="font-medium mb-2 flex items-center">
                <Tag className="h-5 w-5 text-cyan-600 mr-2" />
                Stablecoins
              </h5>
              <p className="text-sm text-muted-foreground">
                Assets pegged to the value of fiat currencies (USD, EUR, etc.) or other stable assets. These provide a way to hold stable value on the Liquid Network. Examples include Tether (USDt) on Liquid.
              </p>
            </div>

            <div className="bg-muted p-4 rounded-lg overflow-hidden">
              <h5 className="font-medium mb-2 flex items-center">
                <Tag className="h-5 w-5 text-cyan-600 mr-2" />
                Security Tokens
              </h5>
              <p className="text-sm text-muted-foreground">
                Digital representations of traditional securities like stocks, bonds, or real estate. These tokens can represent ownership in companies or other assets and may be subject to securities regulations.
              </p>
            </div>

            <div className="bg-muted p-4 rounded-lg overflow-hidden">
              <h5 className="font-medium mb-2 flex items-center">
                <Tag className="h-5 w-5 text-cyan-600 mr-2" />
                Utility Tokens
              </h5>
              <p className="text-sm text-muted-foreground">
                Assets that provide access to specific services or products within an ecosystem. These tokens often function like digital vouchers or access keys.
              </p>
            </div>

            <div className="bg-muted p-4 rounded-lg overflow-hidden">
              <h5 className="font-medium mb-2 flex items-center">
                <Tag className="h-5 w-5 text-cyan-600 mr-2" />
                Collectibles & NFTs
              </h5>
              <p className="text-sm text-muted-foreground">
                Unique or limited-supply assets that represent digital collectibles, art, or other non-fungible items. While not as advanced as some NFT platforms, Liquid can support basic collectible issuance.
              </p>
            </div>

            <div className="bg-muted p-4 rounded-lg overflow-hidden">
              <h5 className="font-medium mb-2 flex items-center">
                <Tag className="h-5 w-5 text-cyan-600 mr-2" />
                Reissuance Tokens
              </h5>
              <p className="text-sm text-muted-foreground">
                Special tokens that give the holder the ability to create more of a specific asset in the future. These are useful for assets that might need additional supply over time.
              </p>
            </div>
          </div>
        </Card>

        {/* The Asset Issuance Process */}
        <Card className="mb-8 p-6">
          <h3 className="mb-4 text-lg font-medium">The Asset Issuance Process</h3>
          <p className="leading-relaxed text-muted-foreground mb-4">
            Creating a new asset on Liquid involves several steps, from planning to distribution:
          </p>
          
          <div className="space-y-5">
            <div className="p-4 bg-muted rounded-lg">
              <h5 className="font-medium mb-2 flex items-center">
                <span className="h-6 w-6 rounded-full bg-cyan-600 text-white flex items-center justify-center text-sm mr-2">
                  1
                </span>
                Asset Definition
              </h5>
              <p className="text-sm text-muted-foreground">
                The first step is defining the asset's properties, including:
              </p>
              <ul className="mt-2 space-y-1 list-disc list-inside text-sm text-muted-foreground">
                <li>Asset name (up to 255 characters)</li>
                <li>Ticker symbol (optional, up to 255 characters)</li>
                <li>Precision (decimal places, from 0 to 8)</li>
                <li>Initial supply amount</li>
                <li>Whether the asset can be reissued in the future</li>
              </ul>
            </div>

            <div className="p-4 bg-muted rounded-lg">
              <h5 className="font-medium mb-2 flex items-center">
                <span className="h-6 w-6 rounded-full bg-cyan-600 text-white flex items-center justify-center text-sm mr-2">
                  2
                </span>
                Issuance Transaction
              </h5>
              <p className="text-sm text-muted-foreground">
                The asset is created by broadcasting a special issuance transaction to the Liquid Network. This transaction:
              </p>
              <ul className="mt-2 space-y-1 list-disc list-inside text-sm text-muted-foreground">
                <li>Creates the initial supply of the asset</li>
                <li>Assigns a unique Asset ID (a 32-byte hexadecimal string)</li>
                <li>Optionally creates reissuance tokens if the asset is reissuable</li>
                <li>Transfers the newly created assets to the issuer's address</li>
              </ul>
            </div>

            <div className="p-4 bg-muted rounded-lg">
              <h5 className="font-medium mb-2 flex items-center">
                <span className="h-6 w-6 rounded-full bg-cyan-600 text-white flex items-center justify-center text-sm mr-2">
                  3
                </span>
                Asset Registry (Optional)
              </h5>
              <p className="text-sm text-muted-foreground">
                While not required, issuers can register their asset in the Liquid Asset Registry. This provides:
              </p>
              <ul className="mt-2 space-y-1 list-disc list-inside text-sm text-muted-foreground">
                <li>Public verification of the asset's legitimacy</li>
                <li>Information about the issuer's identity</li>
                <li>Easier asset discovery in wallets and explorers</li>
                <li>Metadata such as icon, description, and issuer's website</li>
              </ul>
            </div>

            <div className="p-4 bg-muted rounded-lg">
              <h5 className="font-medium mb-2 flex items-center">
                <span className="h-6 w-6 rounded-full bg-cyan-600 text-white flex items-center justify-center text-sm mr-2">
                  4
                </span>
                Distribution
              </h5>
              <p className="text-sm text-muted-foreground">
                After issuance, the assets can be distributed through various means:
              </p>
              <ul className="mt-2 space-y-1 list-disc list-inside text-sm text-muted-foreground">
                <li>Direct transfers to users</li>
                <li>Listing on exchanges that support Liquid assets</li>
                <li>Initial offerings or token sales</li>
                <li>Airdrops or other distribution mechanisms</li>
              </ul>
            </div>

            <div className="p-4 bg-muted rounded-lg">
              <h5 className="font-medium mb-2 flex items-center">
                <span className="h-6 w-6 rounded-full bg-cyan-600 text-white flex items-center justify-center text-sm mr-2">
                  5
                </span>
                Reissuance (If Applicable)
              </h5>
              <p className="text-sm text-muted-foreground">
                If the asset was created with reissuance capabilities, additional units can be created by:
              </p>
              <ul className="mt-2 space-y-1 list-disc list-inside text-sm text-muted-foreground">
                <li>Creating a reissuance transaction</li>
                <li>Providing the reissuance token as proof of authorization</li>
                <li>Specifying the additional amount to be created</li>
                <li>Broadcasting the transaction to the network</li>
              </ul>
            </div>
          </div>
        </Card>
        
        {/* Asset Metadata and Identity */}
        <Card className="p-6 mb-8">
          <h3 className="mb-4 text-lg font-medium">Asset Metadata and Identity</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="p-4 bg-muted/50 rounded-lg">
              <h5 className="font-medium mb-3 flex items-center text-cyan-600">
                <FileText className="h-5 w-5 mr-2" />
                Asset Metadata
              </h5>
              <p className="text-sm text-muted-foreground">
                Asset metadata provides additional information about an asset beyond its on-chain properties. This can include:
              </p>
              <ul className="mt-2 space-y-1 list-disc list-inside text-sm text-muted-foreground">
                <li>Detailed description of the asset</li>
                <li>Terms of use or legal disclaimers</li>
                <li>Links to whitepapers or documentation</li>
                <li>Social media links or contact information</li>
                <li>Images, icons, or logos for visual identification</li>
              </ul>
            </div>
            
            <div className="p-4 bg-muted/50 rounded-lg">
              <h5 className="font-medium mb-3 flex items-center text-cyan-600">
                <CheckCircle className="h-5 w-5 mr-2" />
                Asset Identity Verification
              </h5>
              <p className="text-sm text-muted-foreground">
                Verifying the legitimacy of an asset is crucial in the digital asset ecosystem. Liquid provides several mechanisms for this:
              </p>
              <ul className="mt-2 space-y-1 list-disc list-inside text-sm text-muted-foreground">
                <li>Domain-based verification (linking assets to domains)</li>
                <li>The Liquid Asset Registry (centralized but useful)</li>
                <li>Exchange listings (implicit verification by trusted platforms)</li>
                <li>Community-maintained asset lists</li>
                <li>Issuer's public announcements and verification</li>
              </ul>
            </div>
          </div>
          
          <SatoshiNote className="mt-6" note="While Liquid provides tools for asset verification, users should always conduct their own research before interacting with any digital asset. The distributed nature of blockchain systems means that anyone can issue assets, including those with names similar to legitimate assets." />
        </Card>

        {/* Use Cases for Liquid Assets */}
        <Card className="p-6 mb-8">
          <h3 className="mb-4 text-lg font-medium">Use Cases for Liquid Assets</h3>
          
          <div className="space-y-4">
            <div className="p-4 bg-muted/50 rounded-lg">
              <h5 className="font-medium mb-2">Exchange Tokens</h5>
              <p className="text-sm text-muted-foreground">
                Cryptocurrency exchanges can issue their native tokens on Liquid, benefiting from fast settlement, enhanced privacy, and interoperability with other Liquid-supporting platforms. These tokens can represent exchange-specific utilities, governance rights, or fee discounts.
              </p>
            </div>
            
            <div className="p-4 bg-muted/50 rounded-lg">
              <h5 className="font-medium mb-2">Stablecoins</h5>
              <p className="text-sm text-muted-foreground">
                Stablecoins on Liquid benefit from faster settlement and enhanced privacy compared to those on other networks. They provide a stable unit of account within the Liquid ecosystem, enabling trading, payments, and financial applications without exposure to cryptocurrency volatility.
              </p>
            </div>
            
            <div className="p-4 bg-muted/50 rounded-lg">
              <h5 className="font-medium mb-2">Security Token Offerings (STOs)</h5>
              <p className="text-sm text-muted-foreground">
                Liquid's confidentiality features make it attractive for security tokens, which can represent ownership in real-world assets like equity, debt, or real estate. These tokens benefit from the blockchain's settlement assurances while maintaining privacy for sensitive financial transactions.
              </p>
            </div>
            
            <div className="p-4 bg-muted/50 rounded-lg">
              <h5 className="font-medium mb-2">Digital Collectibles</h5>
              <p className="text-sm text-muted-foreground">
                Limited-edition digital collectibles can be issued on Liquid, with provable scarcity and transfer capabilities. While not as feature-rich as dedicated NFT platforms, Liquid provides a secure and confidential environment for certain types of digital collectibles.
              </p>
            </div>
            
            <div className="p-4 bg-muted/50 rounded-lg">
              <h5 className="font-medium mb-2">Loyalty and Reward Programs</h5>
              <p className="text-sm text-muted-foreground">
                Businesses can tokenize their loyalty programs on Liquid, allowing for easy transfer, tracking, and redemption of points or rewards. The privacy features are particularly valuable for businesses that don't want their reward distributions publicly visible.
              </p>
            </div>
          </div>
        </Card>
        
        {/* Considerations and Challenges */}
        <Card className="p-6 mb-8">
          <h3 className="mb-4 text-lg font-medium">Considerations and Challenges</h3>
          
          <div className="space-y-4">
            <div className="p-4 bg-muted/50 rounded-lg">
              <h5 className="font-medium mb-2 flex items-center text-amber-600">
                <AlertTriangle className="h-5 w-5 mr-2" />
                Regulatory Compliance
              </h5>
              <p className="text-sm text-muted-foreground">
                Depending on the asset type and jurisdiction, issuers may need to comply with various regulations, including securities laws, anti-money laundering requirements, and know-your-customer procedures. The enhanced privacy of Liquid doesn't exempt issuers from these obligations.
              </p>
            </div>
            
            <div className="p-4 bg-muted/50 rounded-lg">
              <h5 className="font-medium mb-2 flex items-center text-amber-600">
                <AlertTriangle className="h-5 w-5 mr-2" />
                Adoption and Liquidity
              </h5>
              <p className="text-sm text-muted-foreground">
                Liquid assets need wallet support, exchange listings, and user adoption to achieve meaningful liquidity. New assets may face challenges in gaining traction, particularly if they're not listed on major exchanges or supported by popular wallets.
              </p>
            </div>
            
            <div className="p-4 bg-muted/50 rounded-lg">
              <h5 className="font-medium mb-2 flex items-center text-amber-600">
                <AlertTriangle className="h-5 w-5 mr-2" />
                Technical Complexity
              </h5>
              <p className="text-sm text-muted-foreground">
                Issuing and managing assets on Liquid requires technical knowledge and understanding of the platform's capabilities and limitations. Issuers need to carefully plan their asset's properties, as some aspects (like precision) cannot be changed after issuance.
              </p>
            </div>
            
            <div className="p-4 bg-muted/50 rounded-lg">
              <h5 className="font-medium mb-2 flex items-center text-amber-600">
                <AlertTriangle className="h-5 w-5 mr-2" />
                Privacy vs. Transparency
              </h5>
              <p className="text-sm text-muted-foreground">
                While Confidential Transactions provide privacy, some use cases (like regulated securities) may require transparency for compliance reasons. Issuers need to balance privacy benefits with transparency requirements for their specific use case.
              </p>
            </div>
          </div>
          
          <SatoshiNote className="mt-6" note="Asset issuance on Liquid represents a powerful capability, but it comes with responsibilities. Issuers should carefully consider the technical, regulatory, and market aspects of their asset before issuance, and users should conduct thorough due diligence before interacting with any Liquid asset." />
        </Card>
        
        {/* Verification Checkpoint */}
        <div className="mt-6">
          <VerifyCheckbox
            moduleId="liquid-fundamentals"
            sectionId="asset-issuance"
            verificationId="asset-issuance"
            label="I understand how asset issuance works on the Liquid Network and its applications"
          />
        </div>
      </ModuleContent>
    </ModuleLayout>
  );
}