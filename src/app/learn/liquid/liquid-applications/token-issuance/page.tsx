'use client';

import { ModuleLayout } from '@/components/learn/shared/module-layout';
import { ModuleContent } from '@/components/learn/shared/module-content';
import { Card } from '@/components/ui/card';
import { Coins, FileText, Terminal, Code, GitFork, BarChart } from 'lucide-react';
import SatoshiNote from '@/components/learn/shared/satoshi-note';
import VerifyCheckbox from '@/components/learn/shared/verify-checkbox';

export default function LiquidTokenIssuance() {
  return (
    <ModuleLayout>
      <ModuleContent
        moduleId="liquid-applications"
        sectionId="token-issuance"
        checkpoints={1}
        moduleTitle="Token Issuance"
        moduleDescription="Creating and managing tokens on Liquid"
        difficulty="Advanced"
        icon={Coins}
      >
        {/* Introduction */}
        <Card className="mb-8 p-6 border-cyan-600/20">
          <h3 className="mb-4 text-lg font-medium">Token Issuance on Liquid</h3>
          <div className="rounded-lg bg-muted/50 p-3 sm:p-4 md:p-5 text-sm text-muted-foreground border border-border/40 mobile-text-container break-words">
            <p>
              One of Liquid's most powerful features is the ability to issue custom tokens or assets. These can represent virtually anything of value - from stablecoins and security tokens to collectibles and utility tokens.
            </p>
            <p className="mt-3">
              The token issuance process on Liquid is designed to be flexible yet secure, giving issuers control over their token properties while maintaining the security and privacy features of the Liquid Network.
            </p>
          </div>
        </Card>

        {/* Token Issuance Process */}
        <h3 className="text-xl font-medium mt-10 mb-4">The Token Issuance Process</h3>
        <Card className="mb-8 p-6">
          <div className="space-y-6">
            <div className="flex items-start gap-4">
              <Terminal className="h-6 w-6 text-cyan-500 flex-shrink-0 mt-1" />
              <div>
                <h4 className="font-medium">Issuance Command</h4>
                <p className="text-sm text-muted-foreground mt-1">
                  Tokens are issued using the Liquid CLI or API. The issuer specifies parameters such as the token name, ticker symbol, amount to issue, and whether more tokens can be issued in the future (reissuance).
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <GitFork className="h-6 w-6 text-cyan-500 flex-shrink-0 mt-1" />
              <div>
                <h4 className="font-medium">Reissuance Control</h4>
                <p className="text-sm text-muted-foreground mt-1">
                  When creating a token, the issuer can choose to enable or disable future reissuance. If enabled, special "reissuance tokens" are created, which grant the holder the ability to issue more of the original asset in the future.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <FileText className="h-6 w-6 text-cyan-500 flex-shrink-0 mt-1" />
              <div>
                <h4 className="font-medium">Asset Registry</h4>
                <p className="text-sm text-muted-foreground mt-1">
                  After issuance, tokens can be registered in the Liquid Asset Registry, which helps users verify their authenticity. This typically involves proving ownership of a domain associated with the asset.
                </p>
              </div>
            </div>
          </div>
        </Card>

        {/* Technical Implementation */}
        <h3 className="text-xl font-medium mt-10 mb-4">Technical Implementation</h3>
        <Card className="mb-8 p-6">
          <p className="mb-4 text-muted-foreground">
            Here's a simplified overview of the technical steps to issue a token:
          </p>
          <ol className="space-y-3 ml-5 list-decimal text-sm text-muted-foreground">
            <li>
              <span className="font-medium text-foreground">Set Up a Liquid Node</span> - Run a Liquid full node to connect to the network
            </li>
            <li>
              <span className="font-medium text-foreground">Generate an Issuance Address</span> - Create a new address to receive the newly issued tokens
            </li>
            <li>
              <span className="font-medium text-foreground">Define Asset Properties</span> - Specify the token name, amount, precision, and whether reissuance is enabled
            </li>
            <li>
              <span className="font-medium text-foreground">Execute Issuance Transaction</span> - Create and broadcast the issuance transaction to the Liquid Network
            </li>
            <li>
              <span className="font-medium text-foreground">Secure Reissuance Tokens</span> - If reissuance is enabled, securely store the reissuance tokens
            </li>
            <li>
              <span className="font-medium text-foreground">Register the Asset</span> - Add the token to the Liquid Asset Registry for public verification
            </li>
          </ol>
        </Card>

        <SatoshiNote className="my-8" pathType="liquid">
          While issuing a token on Liquid is technically straightforward, there are important legal and regulatory considerations. Depending on the nature of your token and jurisdiction, you may need to comply with securities laws, AML/KYC requirements, and other regulations.
        </SatoshiNote>

        {/* Code Example */}
        <h3 className="text-xl font-medium mt-10 mb-4">Issuance Code Example</h3>
        <Card className="mb-8 p-6">
          <p className="text-sm text-muted-foreground mb-4">
            Here's a simplified example of a token issuance command using the Liquid CLI:
          </p>
          <div className="bg-black p-4 rounded-md">
            <pre className="text-gray-200 text-sm overflow-x-auto">
              <code>
{`elements-cli issueasset 1000 1

# Returns something like:
{
  "txid": "abc123...",
  "vin": 0,
  "entropy": "def456...",
  "asset": "ghi789...",
  "token": "jkl012..."
}`}
              </code>
            </pre>
          </div>
          <p className="text-sm text-muted-foreground mt-4">
            In this example, we're issuing 1000 units of a new asset and 1 reissuance token. The response includes the asset ID and reissuance token ID, which are crucial to record and secure.
          </p>
        </Card>

        {/* Use Cases */}
        <h3 className="text-xl font-medium mt-10 mb-4">Token Issuance Use Cases</h3>
        <Card className="mb-8 p-6">
          <div className="space-y-4">
            <div>
              <h4 className="font-medium">Stablecoins</h4>
              <p className="text-sm text-muted-foreground mt-1">
                Tokens pegged to fiat currencies, enabling faster and more private transfers of USD, EUR, and other currencies on the Liquid Network.
              </p>
            </div>
            <div>
              <h4 className="font-medium">Security Tokens</h4>
              <p className="text-sm text-muted-foreground mt-1">
                Representing equity, debt, or other securities, allowing for compliant issuance and trading of financial instruments.
              </p>
            </div>
            <div>
              <h4 className="font-medium">Utility Tokens</h4>
              <p className="text-sm text-muted-foreground mt-1">
                Providing access to services or products within a specific ecosystem, benefiting from Liquid's fast settlement and privacy features.
              </p>
            </div>
            <div>
              <h4 className="font-medium">Collectibles</h4>
              <p className="text-sm text-muted-foreground mt-1">
                Digital collectibles with verifiable scarcity and ownership, similar to NFTs on other blockchains.
              </p>
            </div>
          </div>
        </Card>

        {/* Verification checkpoint */}
        <VerifyCheckbox
          moduleId="liquid-applications"
          verificationId="token-issuance"
          label="I understand how to issue tokens on the Liquid Network and the key considerations involved"
        />
      </ModuleContent>
    </ModuleLayout>
  );
}
