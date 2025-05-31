'use client';

import { ModuleLayout } from '@/components/learn/shared/module-layout';
import { ModuleContent } from '@/components/learn/shared/module-content';
import { Card } from '@/components/ui/card';
import { LineChart, ArrowLeftRight, LockKeyhole, Coins, Zap, Repeat } from 'lucide-react';
import SatoshiNote from '@/components/learn/shared/satoshi-note';
import VerifyCheckbox from '@/components/learn/shared/verify-checkbox';

export default function LiquidDeFi() {
  return (
    <ModuleLayout>
      <ModuleContent
        moduleId="liquid-applications"
        sectionId="defi"
        checkpoints={1}
        moduleTitle="DeFi on Liquid"
        moduleDescription="Decentralized finance applications on the Liquid Network"
        difficulty="Advanced"
        icon={LineChart}
      >
        {/* Introduction */}
        <Card className="mb-8 p-6 border-cyan-600/20">
          <h3 className="mb-4 text-lg font-medium">DeFi on the Liquid Network</h3>
          <div className="rounded-lg bg-muted/50 p-3 sm:p-4 md:p-5 text-sm text-muted-foreground border border-border/40 mobile-text-container break-words">
            <p>
              Decentralized Finance (DeFi) applications are emerging on the Liquid Network, offering Bitcoin-based financial services with greater privacy, faster settlement, and more sophisticated asset types than what's possible on the Bitcoin base layer.
            </p>
            <p className="mt-3">
              Liquid's features, including confidential transactions, asset issuance, and faster block times, make it well-suited for certain types of DeFi applications while maintaining a connection to Bitcoin's security model.
            </p>
          </div>
        </Card>

        {/* Advantages for DeFi */}
        <h3 className="text-xl font-medium mt-10 mb-4">Advantages for DeFi Applications</h3>
        <Card className="mb-8 p-6">
          <div className="space-y-6">
            <div className="flex items-start gap-4">
              <Zap className="h-6 w-6 text-cyan-500 flex-shrink-0 mt-1" />
              <div>
                <h4 className="font-medium">Fast Settlement</h4>
                <p className="text-sm text-muted-foreground mt-1">
                  Liquid's 2-minute block time allows for faster execution of trades and financial operations compared to Bitcoin's 10-minute blocks, making it more suitable for time-sensitive financial applications.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <LockKeyhole className="h-6 w-6 text-cyan-500 flex-shrink-0 mt-1" />
              <div>
                <h4 className="font-medium">Confidential Transactions</h4>
                <p className="text-sm text-muted-foreground mt-1">
                  Privacy is enhanced through Liquid's confidential transactions, which hide amounts and asset types. This is particularly valuable for trading and lending platforms where users don't want their positions publicly visible.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <Coins className="h-6 w-6 text-cyan-500 flex-shrink-0 mt-1" />
              <div>
                <h4 className="font-medium">Asset Issuance</h4>
                <p className="text-sm text-muted-foreground mt-1">
                  The ability to issue multiple asset types on a single chain enables complex financial instruments, including stablecoins, wrapped assets, and synthetic assets, all with Bitcoin as the foundation.
                </p>
              </div>
            </div>
          </div>
        </Card>

        {/* DeFi Applications */}
        <h3 className="text-xl font-medium mt-10 mb-4">DeFi Applications on Liquid</h3>
        <Card className="mb-8 p-6">
          <p className="mb-4 text-muted-foreground">
            Several types of DeFi applications are being built on the Liquid Network:
          </p>
          <ol className="space-y-3 ml-5 list-decimal text-sm text-muted-foreground">
            <li>
              <span className="font-medium text-foreground">Decentralized Exchanges (DEXs)</span> - Platforms for trading Liquid assets without custodians, using atomic swaps or other non-custodial trading mechanisms.
            </li>
            <li>
              <span className="font-medium text-foreground">Lending Protocols</span> - Services allowing users to lend or borrow assets using L-BTC or other Liquid assets as collateral.
            </li>
            <li>
              <span className="font-medium text-foreground">Stablecoins</span> - Tokens pegged to fiat currencies or other stable assets, enabling more predictable trading and transfers.
            </li>
            <li>
              <span className="font-medium text-foreground">Synthetic Assets</span> - Tokens that track the value of real-world assets like stocks, commodities, or indices.
            </li>
            <li>
              <span className="font-medium text-foreground">Prediction Markets</span> - Platforms allowing users to trade on the outcome of future events.
            </li>
          </ol>
        </Card>

        <SatoshiNote className="my-8" pathType="liquid">
          While DeFi on Liquid offers many advantages, it's important to understand that the federated model of Liquid provides different security guarantees than Bitcoin's fully decentralized proof-of-work consensus. DeFi applications on Liquid should be evaluated with this security model in mind.
        </SatoshiNote>

        {/* Technical Implementation */}
        <h3 className="text-xl font-medium mt-10 mb-4">Technical Implementation</h3>
        <Card className="mb-8 p-6">
          <p className="text-sm text-muted-foreground">
            Building DeFi applications on Liquid typically involves:
          </p>
          <ul className="mt-4 space-y-2 ml-5 list-disc text-sm text-muted-foreground">
            <li><span className="font-medium text-foreground">Smart Contract Alternatives</span> - While Liquid doesn't have Turing-complete smart contracts like Ethereum, it offers script extensions that enable complex conditions for asset transfers</li>
            <li><span className="font-medium text-foreground">Atomic Swaps</span> - Enabling trustless exchange of assets without intermediaries</li>
            <li><span className="font-medium text-foreground">Multisignature Schemes</span> - Creating secure multi-party protocols for governance and fund management</li>
            <li><span className="font-medium text-foreground">Oracles</span> - Bringing external data on-chain to enable price feeds and other real-world information</li>
            <li><span className="font-medium text-foreground">Client-Side Applications</span> - User interfaces connecting to the Liquid Network to provide DeFi services</li>
          </ul>
        </Card>

        {/* Example Projects */}
        <h3 className="text-xl font-medium mt-10 mb-4">Example DeFi Projects</h3>
        <Card className="mb-8 p-6">
          <div className="space-y-4">
            <div>
              <h4 className="font-medium">TDEX</h4>
              <p className="text-sm text-muted-foreground mt-1">
                A decentralized exchange protocol built on Liquid, allowing for privacy-preserving swaps between different Liquid assets.
              </p>
            </div>
            <div>
              <h4 className="font-medium">Marina Wallet</h4>
              <p className="text-sm text-muted-foreground mt-1">
                A non-custodial wallet that supports Liquid assets and integrates with various DeFi services.
              </p>
            </div>
            <div>
              <h4 className="font-medium">Liquid Ventures</h4>
              <p className="text-sm text-muted-foreground mt-1">
                Projects exploring the use of Liquid for tokenized securities and investment platforms.
              </p>
            </div>
          </div>
        </Card>

        {/* Future Developments */}
        <h3 className="text-xl font-medium mt-10 mb-4">Future Developments</h3>
        <Card className="mb-8 p-6">
          <p className="text-sm text-muted-foreground">
            The DeFi ecosystem on Liquid continues to evolve, with several developments on the horizon:
          </p>
          <ul className="mt-4 space-y-2 ml-5 list-disc text-sm text-muted-foreground">
            <li>Enhanced scripting capabilities to enable more complex financial contracts</li>
            <li>Integration with other Bitcoin layer 2 solutions like Lightning Network</li>
            <li>Cross-chain bridges to connect Liquid assets with other blockchain ecosystems</li>
            <li>Development tools and standards to make building DeFi applications more accessible</li>
          </ul>
        </Card>

        {/* Verification checkpoint */}
        <VerifyCheckbox
          moduleId="liquid-applications"
          verificationId="defi"
          label="I understand how DeFi applications can be built on the Liquid Network and their key features"
        />
      </ModuleContent>
    </ModuleLayout>
  );
}
