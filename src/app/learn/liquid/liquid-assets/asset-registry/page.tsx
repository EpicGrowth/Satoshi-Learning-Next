'use client';

import { ModuleLayout } from '@/components/learn/shared/module-layout';
import { ModuleContent } from '@/components/learn/shared/module-content';
import { Card } from '@/components/ui/card';
import { Database, FileText, Search, Globe, CheckCircle, X } from 'lucide-react';
import SatoshiNote from '@/components/learn/shared/satoshi-note';
import VerifyCheckbox from '@/components/learn/shared/verify-checkbox';

export default function LiquidAssetRegistry() {
  return (
    <ModuleLayout>
      <ModuleContent
        moduleId="liquid-assets"
        sectionId="asset-registry"
        checkpoints={1}
        moduleTitle="Asset Registry"
        moduleDescription="Understanding the Liquid Asset Registry"
        difficulty="Intermediate"
        icon={Database}
      >
        {/* Introduction */}
        <Card className="mb-8 p-6 border-cyan-600/20">
          <h3 className="mb-4 text-lg font-medium">The Liquid Asset Registry</h3>
          <div className="rounded-lg bg-muted/50 p-3 sm:p-4 md:p-5 text-sm text-muted-foreground border border-border/40 mobile-text-container break-words">
            <p>
              With the ability to create unlimited custom assets on Liquid, a critical question arises: how do users know which assets are legitimate? The Liquid Asset Registry solves this problem by providing a trusted source of information about assets issued on the Liquid Network.
            </p>
            <p className="mt-3">
              The registry helps prevent fraud and confusion by allowing users to verify asset details before engaging in transactions.
            </p>
          </div>
        </Card>

        {/* Purpose of the Registry */}
        <h3 className="text-xl font-medium mt-10 mb-4">Purpose of the Asset Registry</h3>
        <Card className="mb-8 p-6">
          <div className="space-y-6">
            <div className="flex items-start gap-4">
              <CheckCircle className="h-6 w-6 text-cyan-500 flex-shrink-0 mt-1" />
              <div>
                <h4 className="font-medium">Asset Verification</h4>
                <p className="text-sm text-muted-foreground mt-1">
                  The primary purpose of the registry is to verify the authenticity of assets. Since Liquid asset IDs are long hexadecimal strings, it's difficult for users to verify legitimacy just by looking at an ID. The registry connects these IDs to real-world entities.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <X className="h-6 w-6 text-cyan-500 flex-shrink-0 mt-1" />
              <div>
                <h4 className="font-medium">Preventing Fraud</h4>
                <p className="text-sm text-muted-foreground mt-1">
                  Without a registry, bad actors could create assets with names identical to legitimate assets, potentially tricking users into accepting counterfeit tokens. The registry helps prevent such impersonation.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <Search className="h-6 w-6 text-cyan-500 flex-shrink-0 mt-1" />
              <div>
                <h4 className="font-medium">Discovery</h4>
                <p className="text-sm text-muted-foreground mt-1">
                  The registry provides a central place to discover legitimate assets on the Liquid Network, making it easier for users to find tokens they might be interested in.
                </p>
              </div>
            </div>
          </div>
        </Card>

        {/* How the Registry Works */}
        <h3 className="text-xl font-medium mt-10 mb-4">How the Asset Registry Works</h3>
        <Card className="mb-8 p-6">
          <p className="mb-4 text-muted-foreground">
            The Liquid Asset Registry operates on a few key principles:
          </p>
          <ol className="space-y-3 ml-5 list-decimal text-sm text-muted-foreground">
            <li>
              <span className="font-medium text-foreground">Domain Verification</span> - Assets can be associated with a domain name that the issuer controls, providing a simple way to verify legitimacy.
            </li>
            <li>
              <span className="font-medium text-foreground">Public Database</span> - The registry is a public database that anyone can query to get information about registered assets.
            </li>
            <li>
              <span className="font-medium text-foreground">Metadata</span> - Asset issuers can provide metadata like logos, descriptions, and links to further information.
            </li>
            <li>
              <span className="font-medium text-foreground">Integration</span> - Wallets and exchanges can integrate with the registry to automatically display verified information about assets.
            </li>
          </ol>
        </Card>

        <SatoshiNote className="my-8" pathType="liquid">
          While the Asset Registry helps with verification, users should always conduct their own research before transacting with any asset. The registry provides information, but doesn't guarantee the value or legitimacy of any particular asset's use case.
        </SatoshiNote>

        {/* Registering an Asset */}
        <h3 className="text-xl font-medium mt-10 mb-4">Registering an Asset</h3>
        <Card className="mb-8 p-6">
          <p className="text-sm text-muted-foreground">
            If you're an asset issuer, you can register your asset by following these steps:
          </p>
          <ol className="mt-4 space-y-2 ml-5 list-decimal text-sm text-muted-foreground">
            <li>Issue your asset on the Liquid Network</li>
            <li>Set up a domain verification file on a website you control</li>
            <li>Submit your asset details to the registry</li>
            <li>Wait for verification, which typically involves checking your domain proof</li>
            <li>Once verified, your asset will appear in the public registry</li>
          </ol>
          <p className="text-sm text-muted-foreground mt-4">
            The domain verification is especially important as it creates a link between your digital asset and a real-world entity that users can recognize and trust.
          </p>
        </Card>

        {/* Verification checkpoint */}
        <VerifyCheckbox
          moduleId="liquid-assets"
          verificationId="asset-registry"
          label="I understand how the Liquid Asset Registry helps verify and discover legitimate assets on the network"
        />
      </ModuleContent>
    </ModuleLayout>
  );
}
