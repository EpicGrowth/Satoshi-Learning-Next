'use client';

import { ModuleLayout } from '@/components/learn/shared/module-layout';
import { ModuleContent } from '@/components/learn/shared/module-content';
import { Card } from '@/components/ui/card';
import { Shield, Lock, Key, Users, AlertTriangle } from 'lucide-react';
import SatoshiNote from '@/components/learn/shared/satoshi-note';
import VerifyCheckbox from '@/components/learn/shared/verify-checkbox';

export default function LiquidAssetSecurity() {
  return (
    <ModuleLayout>
      <ModuleContent
        moduleId="liquid-assets"
        sectionId="asset-security"
        checkpoints={1}
        moduleTitle="Asset Security"
        moduleDescription="Securing your assets on the Liquid Network"
        difficulty="Intermediate"
        icon={Shield}
      >
        {/* Introduction */}
        <Card className="mb-8 p-6 border-cyan-600/20">
          <h3 className="mb-4 text-lg font-medium">Securing Liquid Assets</h3>
          <div className="rounded-lg bg-muted/50 p-3 sm:p-4 md:p-5 text-sm text-muted-foreground border border-border/40 mobile-text-container break-words">
            <p>
              Security is a critical consideration when working with digital assets on the Liquid Network. While Liquid inherits many security properties from Bitcoin, it also introduces unique security considerations due to its federated model and expanded feature set.
            </p>
            <p className="mt-3">
              Understanding these security considerations is essential for both asset issuers and users of the Liquid Network.
            </p>
          </div>
        </Card>

        {/* Asset Issuance Security */}
        <h3 className="text-xl font-medium mt-10 mb-4">Asset Issuance Security</h3>
        <Card className="mb-8 p-6">
          <div className="space-y-6">
            <div className="flex items-start gap-4">
              <Key className="h-6 w-6 text-cyan-500 flex-shrink-0 mt-1" />
              <div>
                <h4 className="font-medium">Reissuance Tokens</h4>
                <p className="text-sm text-muted-foreground mt-1">
                  When creating an asset on Liquid, the issuer can decide whether to allow future issuance by creating reissuance tokens. These tokens grant the ability to issue more of the asset in the future. Securing these tokens is critical, as anyone who obtains them can issue more of your asset.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <Lock className="h-6 w-6 text-cyan-500 flex-shrink-0 mt-1" />
              <div>
                <h4 className="font-medium">Multisignature Controls</h4>
                <p className="text-sm text-muted-foreground mt-1">
                  Best practice for asset issuers is to secure reissuance tokens using multisignature wallets, requiring multiple authorized parties to sign transactions. This prevents a single point of failure or compromise.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <AlertTriangle className="h-6 w-6 text-cyan-500 flex-shrink-0 mt-1" />
              <div>
                <h4 className="font-medium">Revocation Impossible</h4>
                <p className="text-sm text-muted-foreground mt-1">
                  Once assets are issued and transferred, they cannot be revoked or frozen by the issuer (unlike some centralized tokens). This means issuers must be careful about their initial distribution.
                </p>
              </div>
            </div>
          </div>
        </Card>

        {/* User Security Considerations */}
        <h3 className="text-xl font-medium mt-10 mb-4">User Security Considerations</h3>
        <Card className="mb-8 p-6">
          <p className="mb-4 text-muted-foreground">
            For users holding Liquid assets, several security practices are recommended:
          </p>
          <ol className="space-y-3 ml-5 list-decimal text-sm text-muted-foreground">
            <li>
              <span className="font-medium text-foreground">Hardware Wallets</span> - Use hardware wallets when possible for storing significant amounts of Liquid assets. Several hardware wallets support Liquid.
            </li>
            <li>
              <span className="font-medium text-foreground">Asset Verification</span> - Always verify asset IDs when receiving new assets through the Liquid Asset Registry to avoid accepting counterfeit assets.
            </li>
            <li>
              <span className="font-medium text-foreground">Confidential Addresses</span> - Use confidential addresses for all transactions to benefit from the privacy features of Liquid.
            </li>
            <li>
              <span className="font-medium text-foreground">Backup Strategies</span> - Maintain secure backups of your Liquid wallet, including seed phrases and any special recovery information specific to your wallet software.
            </li>
          </ol>
        </Card>

        <SatoshiNote className="my-8" pathType="liquid">
          While Liquid transactions provide confidentiality for amounts and asset types, the transaction graph is still visible on the blockchain. This means that with enough analysis, some privacy aspects could potentially be compromised. For maximum privacy, consider additional operational security practices.
        </SatoshiNote>

        {/* Federation Security */}
        <h3 className="text-xl font-medium mt-10 mb-4">Federation Security Model</h3>
        <Card className="mb-8 p-6">
          <p className="text-sm text-muted-foreground">
            The security of all assets on Liquid depends on the security of the Liquid Federation:
          </p>
          <ul className="mt-4 space-y-2 ml-5 list-disc text-sm text-muted-foreground">
            <li>The federation uses a 11-of-15 multisignature threshold, meaning at least 11 members must sign blocks</li>
            <li>Federation members use specialized hardware security modules (HSMs) to secure their signing keys</li>
            <li>The federation's two-way peg with Bitcoin secures the value of L-BTC</li>
            <li>If the federation were to be compromised, it could potentially impact all assets on the network</li>
          </ul>
          <p className="text-sm text-muted-foreground mt-4">
            This federated security model offers different trade-offs compared to Bitcoin's proof-of-work system. It provides faster finality and more features but relies on the security of the federation members.
          </p>
        </Card>

        {/* Verification checkpoint */}
        <VerifyCheckbox
          moduleId="liquid-assets"
          verificationId="asset-security"
          label="I understand the security considerations for Liquid assets and best practices for both issuers and users"
        />
      </ModuleContent>
    </ModuleLayout>
  );
}
