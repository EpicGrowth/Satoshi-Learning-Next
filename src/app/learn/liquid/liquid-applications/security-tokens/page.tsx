'use client';

import { ModuleLayout } from '@/components/learn/shared/module-layout';
import { ModuleContent } from '@/components/learn/shared/module-content';
import { Card } from '@/components/ui/card';
import { Shield, FileBadge, Scale, Globe, CircleDollarSign, Building } from 'lucide-react';
import SatoshiNote from '@/components/learn/shared/satoshi-note';
import VerifyCheckbox from '@/components/learn/shared/verify-checkbox';

export default function LiquidSecurityTokens() {
  return (
    <ModuleLayout>
      <ModuleContent
        moduleId="liquid-applications"
        sectionId="security-tokens"
        checkpoints={1}
        moduleTitle="Security Tokens"
        moduleDescription="Understanding security tokens on the Liquid Network"
        difficulty="Advanced"
        icon={Shield}
      >
        {/* Introduction */}
        <Card className="mb-8 p-6 border-cyan-600/20">
          <h3 className="mb-4 text-lg font-medium">Security Tokens on Liquid</h3>
          <div className="rounded-lg bg-muted/50 p-3 sm:p-4 md:p-5 text-sm text-muted-foreground border border-border/40 mobile-text-container break-words">
            <p>
              Security tokens represent traditional financial securities like stocks, bonds, or real estate on a blockchain. The Liquid Network provides a robust platform for issuing and trading these tokens, combining Bitcoin's security foundation with features that make it suitable for regulated financial instruments.
            </p>
            <p className="mt-3">
              Understanding how security tokens work on Liquid is essential for those interested in the intersection of traditional finance and blockchain technology.
            </p>
          </div>
        </Card>

        {/* What Are Security Tokens */}
        <h3 className="text-xl font-medium mt-10 mb-4">What Are Security Tokens?</h3>
        <Card className="mb-8 p-6">
          <div className="space-y-6">
            <div className="flex items-start gap-4">
              <FileBadge className="h-6 w-6 text-cyan-500 flex-shrink-0 mt-1" />
              <div>
                <h4 className="font-medium">Digital Securities</h4>
                <p className="text-sm text-muted-foreground mt-1">
                  Security tokens are blockchain-based representations of traditional securities. They can represent equity in a company, debt instruments, real estate investments, or other financial assets that are regulated as securities.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <Scale className="h-6 w-6 text-cyan-500 flex-shrink-0 mt-1" />
              <div>
                <h4 className="font-medium">Regulatory Compliance</h4>
                <p className="text-sm text-muted-foreground mt-1">
                  Unlike utility tokens, security tokens are subject to securities regulations in the jurisdictions where they're issued and traded. This requires additional compliance measures to be built into the tokens and trading platforms.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <Building className="h-6 w-6 text-cyan-500 flex-shrink-0 mt-1" />
              <div>
                <h4 className="font-medium">Security Token Offerings (STOs)</h4>
                <p className="text-sm text-muted-foreground mt-1">
                  The process of issuing security tokens is often called a Security Token Offering or STO. This is similar to an Initial Public Offering (IPO) in traditional finance but conducted on a blockchain platform like Liquid.
                </p>
              </div>
            </div>
          </div>
        </Card>

        {/* Advantages of Liquid for Security Tokens */}
        <h3 className="text-xl font-medium mt-10 mb-4">Advantages of Liquid for Security Tokens</h3>
        <Card className="mb-8 p-6">
          <p className="mb-4 text-muted-foreground">
            The Liquid Network offers several features that make it particularly suitable for security tokens:
          </p>
          <ol className="space-y-3 ml-5 list-decimal text-sm text-muted-foreground">
            <li>
              <span className="font-medium text-foreground">Confidential Transactions</span> - Privacy for transaction amounts and asset types, which is important for institutional investors who don't want their positions publicly visible.
            </li>
            <li>
              <span className="font-medium text-foreground">Fast Settlement</span> - 2-minute block times allow for faster trading and settlement compared to traditional securities markets or Bitcoin's base layer.
            </li>
            <li>
              <span className="font-medium text-foreground">Bitcoin Security Foundation</span> - The peg to Bitcoin provides a strong security foundation compared to independent blockchains.
            </li>
            <li>
              <span className="font-medium text-foreground">Regulated Federation Members</span> - Many Liquid Federation members are regulated financial entities, providing an additional layer of trust for institutional investors.
            </li>
            <li>
              <span className="font-medium text-foreground">Asset Registry</span> - The Liquid Asset Registry helps verify the authenticity of tokens, important for regulatory compliance.
            </li>
          </ol>
        </Card>

        <SatoshiNote className="my-8" pathType="liquid">
          While Liquid provides the technical infrastructure for security tokens, the legal and regulatory frameworks vary significantly across jurisdictions. Always consult with legal experts specialized in securities law and blockchain technology before launching a security token on Liquid.
        </SatoshiNote>

        {/* Compliance Features */}
        <h3 className="text-xl font-medium mt-10 mb-4">Compliance Features</h3>
        <Card className="mb-8 p-6">
          <p className="text-sm text-muted-foreground">
            Security tokens on Liquid can implement various compliance features:
          </p>
          <ul className="mt-4 space-y-2 ml-5 list-disc text-sm text-muted-foreground">
            <li><span className="font-medium text-foreground">Whitelisting</span> - Restricting token transfers to pre-approved addresses that have completed KYC/AML verification</li>
            <li><span className="font-medium text-foreground">Transfer Restrictions</span> - Implementing holding periods or other restrictions required by securities regulations</li>
            <li><span className="font-medium text-foreground">Investor Accreditation</span> - Verifying investor qualifications for certain types of securities</li>
            <li><span className="font-medium text-foreground">Reporting</span> - Built-in mechanisms for regulatory reporting and disclosures</li>
            <li><span className="font-medium text-foreground">Corporate Actions</span> - Managing dividends, voting rights, and other corporate actions</li>
          </ul>
        </Card>

        {/* Implementation Approach */}
        <h3 className="text-xl font-medium mt-10 mb-4">Implementation Approach</h3>
        <Card className="mb-8 p-6">
          <p className="text-sm text-muted-foreground mb-4">
            Implementing security tokens on Liquid typically involves the following components:
          </p>
          <ol className="space-y-2 ml-5 list-decimal text-sm text-muted-foreground">
            <li>
              <span className="font-medium text-foreground">Token Issuance</span> - Creating the token on the Liquid Network with appropriate parameters
            </li>
            <li>
              <span className="font-medium text-foreground">Compliance Layer</span> - Building or integrating with a compliance service to manage whitelisting and other regulatory requirements
            </li>
            <li>
              <span className="font-medium text-foreground">KYC/AML Service</span> - Integrating with identity verification services
            </li>
            <li>
              <span className="font-medium text-foreground">Investor Portal</span> - Providing a user interface for investors to manage their holdings
            </li>
            <li>
              <span className="font-medium text-foreground">Trading Platform</span> - Enabling compliant secondary market trading
            </li>
          </ol>
          <p className="text-sm text-muted-foreground mt-4">
            Many of these components can be implemented through a combination of on-chain logic and off-chain services that interact with the Liquid Network.
          </p>
        </Card>

        {/* Use Cases */}
        <h3 className="text-xl font-medium mt-10 mb-4">Security Token Use Cases</h3>
        <Card className="mb-8 p-6">
          <div className="space-y-4">
            <div>
              <h4 className="font-medium">Equity Tokens</h4>
              <p className="text-sm text-muted-foreground mt-1">
                Representing shares in companies, potentially with automated dividend payments and voting rights.
              </p>
            </div>
            <div>
              <h4 className="font-medium">Real Estate Tokens</h4>
              <p className="text-sm text-muted-foreground mt-1">
                Fractional ownership of real estate properties, enabling smaller investment minimums and greater liquidity.
              </p>
            </div>
            <div>
              <h4 className="font-medium">Debt Instruments</h4>
              <p className="text-sm text-muted-foreground mt-1">
                Bonds and other debt securities with automated interest payments and maturity handling.
              </p>
            </div>
            <div>
              <h4 className="font-medium">Fund Tokens</h4>
              <p className="text-sm text-muted-foreground mt-1">
                Representing shares in investment funds, potentially with automated performance reporting and fee calculations.
              </p>
            </div>
          </div>
        </Card>

        {/* Verification checkpoint */}
        <VerifyCheckbox
          moduleId="liquid-applications"
          verificationId="security-tokens"
          label="I understand what security tokens are and how they can be implemented on the Liquid Network"
        />
      </ModuleContent>
    </ModuleLayout>
  );
}
