'use client';

import React from 'react';
import { ModuleLayout } from '@/components/learn/shared/module-layout';
import { ModuleContent } from '@/components/learn/shared/module-content';
import { ModuleMetadata } from '@/components/learn/shared/module-metadata';
import type { ModuleMetadata as ModuleMetadataType } from '@/components/learn/shared/module-metadata';
import SatoshiQuote from '@/components/learn/shared/satoshi-quote';
import VerifyCheckbox from '@/components/learn/shared/verify-checkbox';
import { Card } from '@/components/ui/card';
import { GitBranch, GitMerge, ShieldCheck, ExternalLink, ArrowRight } from 'lucide-react'; // Added required icons

const moduleId = 'technical';
const sectionId = 'protocol-updates';

const moduleInfo: ModuleMetadataType = {
  title: 'Protocol Updates | Bitcoin',
  description: 'Exploring the evolution of the Bitcoin protocol through upgrades like SegWit and Taproot.',
  keywords: ['bitcoin', 'protocol updates', 'soft fork', 'hard fork', 'bip', 'bitcoin improvement proposal', 'segwit', 'taproot', 'schnorr signatures', 'consensus changes'],
  canonical: `/learn/bitcoin/bitcoin-technical/${sectionId}`,
  ogImage: '/images/og/bitcoin-protocol-updates.png',
  lastUpdated: '2024-07-30',
  difficulty: 'Advanced',
  timeToComplete: '45 minutes',
  prerequisites: ['network-architecture'],
};

export default function ProtocolUpdatesPage() {
  return (
    <ModuleLayout>
      <ModuleMetadata metadata={moduleInfo} />
      <ModuleContent
        moduleId={moduleId}
        sectionId={sectionId}
        checkpoints={1}
        moduleTitle={moduleInfo.title}
        moduleDescription={moduleInfo.description}
        difficulty={moduleInfo.difficulty}
        icon={GitBranch}
      >
        <div className="space-y-8">
           <SatoshiQuote
            quote="The nature of Bitcoin is such that once version 0.1 was released, the core design was set in stone for the rest of its lifetime."
            date="June 17, 2010"
            source="BitcoinTalk Forum"
            sourceUrl="https://bitcointalk.org/index.php?topic=195.msg1611#msg1611"
          />

          {/* Upgrade Mechanisms */}
          <div className="bg-card p-6 rounded-lg border border-border">
             <h2 className="text-xl font-bold mb-4">Bitcoin Upgrade Mechanisms</h2>
             <div className="space-y-4">
                 <p className="text-sm text-muted-foreground">
                    Bitcoin evolves primarily through consensus changes coordinated via Bitcoin Improvement Proposals (BIPs). These changes are typically implemented as soft forks to maintain backward compatibility.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    {[ // Array of upgrade types
                        {
                        icon: GitBranch,
                        title: 'Soft Forks',
                        description: 'Backwards-compatible upgrades that tighten consensus rules. Old nodes still see new blocks/transactions as valid, but cannot fully validate new features.',
                        },
                        {
                        icon: GitMerge,
                        title: 'Hard Forks',
                        description: 'Non-backward-compatible changes requiring all nodes to upgrade. Creates a divergence if consensus isn\u0027t universal. Generally avoided in Bitcoin.',
                        },
                        {
                        icon: ShieldCheck,
                        title: 'BIP Process',
                        description: 'Formal process for proposing, discussing, and documenting changes to the Bitcoin protocol. Ensures transparency and peer review.',
                        },
                    ].map((item, i) => (
                        <Card key={i} className="flex flex-col items-start gap-3 p-4 bg-muted">
                            <item.icon className="h-6 w-6 text-primary flex-shrink-0" />
                            <div>
                                <h4 className="font-medium mb-1">{item.title}</h4>
                                <p className="text-xs text-muted-foreground">{item.description}</p>
                            </div>
                        </Card>
                    ))}
                </div>
            </div>
          </div>

          {/* Major Protocol Updates */}
          <div className="bg-card p-6 rounded-lg border border-border">
            <h2 className="text-xl font-bold mb-4">Major Protocol Updates</h2>
            <div className="space-y-6">
              <div>
                <h3 className="font-semibold text-lg mb-3">Key Historical Upgrades (Soft Forks)</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <Card className="p-4 bg-muted">
                    <h4 className="font-medium mb-2">P2SH (BIP 16 - 2012)</h4>
                    <ul className="list-disc list-inside text-xs text-muted-foreground space-y-1">
                      <li>Pay-to-Script-Hash simplified complex scripts (like multisig).</li>
                      <li>Sender pays to a hash, receiver reveals script later.</li>
                      <li>Improved usability and reduced transaction size for complex scripts.</li>
                    </ul>
                  </Card>
                  <Card className="p-4 bg-muted">
                    <h4 className="font-medium mb-2">SegWit (BIP 141/143/144 - 2017)</h4>
                    <ul className="list-disc list-inside text-xs text-muted-foreground space-y-1">
                      <li>Segregated Witness data (signatures) from transaction body.</li>
                      <li>Fixed transaction malleability.</li>
                      <li>Increased effective block size (~1.7MB average).</li>
                      <li>Enabled the Lightning Network.</li>
                    </ul>
                  </Card>
                  <Card className="p-4 bg-muted">
                    <h4 className="font-medium mb-2">Taproot (BIP 340/341/342 - 2021)</h4>
                    <ul className="list-disc list-inside text-xs text-muted-foreground space-y-1">
                      <li>Introduced Schnorr Signatures (more efficient, enables aggregation).</li>
                      <li>Enabled MAST (Merkelized Abstract Syntax Trees) for complex scripts.</li>
                      <li>Improved privacy (complex scripts look like simple payments).</li>
                      <li>Enhanced scripting capabilities.</li>
                    </ul>
                  </Card>
                </div>
              </div>

              <div className="bg-primary/5 p-4 rounded-lg">
                <h3 className="font-semibold text-lg mb-3">Soft Fork Activation Process (Typical)</h3>
                <div className="space-y-2 text-sm text-muted-foreground">
                   <p>Requires coordination among developers, miners, and node operators:</p>
                  <ol className="list-decimal list-inside space-y-1 pl-2 text-xs">
                    <li>BIP proposal, review, and consensus building.</li>
                    <li>Implementation in Bitcoin Core and other clients.</li>
                    <li>Miner signaling period (e.g., Speedy Trial): Miners signal readiness by setting bits in block headers.</li>
                    <li>Activation lock-in once threshold reached (e.g., 90% over a difficulty period).</li>
                    <li>Activation at a specified future block height/median time past.</li>
                  </ol>
                </div>
              </div>
            </div>
          </div>

          {/* Future Development */}
          <div className="bg-card p-6 rounded-lg border border-border">
            <h2 className="text-xl font-bold mb-4">Ongoing Research & Potential Future Directions</h2>
             <p className="text-sm text-muted-foreground mb-4">
                Bitcoin development is continuous, exploring ways to improve scalability, privacy, and programmability within the existing consensus framework.
            </p>
            <div className="space-y-4">
              <Card className="p-4 bg-muted">
                <h4 className="font-medium mb-2">Covenants</h4>
                <p className="text-xs text-muted-foreground">
                  Proposals (like OP_CTV, OP_CHECKSIGFROMSTACK) to restrict how coins can be spent in future transactions, enabling complex smart contracts, vaults, and layer 2 designs.
                </p>
              </Card>
               <Card className="p-4 bg-muted">
                 <h4 className="font-medium mb-2">Cross-Input Signature Aggregation (CISA)</h4>
                <p className="text-xs text-muted-foreground">
                  Leveraging Schnorr signatures to aggregate multiple signatures across different inputs in a transaction into a single signature, potentially reducing transaction size and verification cost.
                </p>
              </Card>
              <Card className="p-4 bg-muted">
                <h4 className="font-medium mb-2">Stratum V2</h4>
                <p className="text-xs text-muted-foreground">
                  An improved protocol for communication between mining pools and miners, enhancing efficiency, security, and potentially allowing miners more control over transaction selection.
                </p>
              </Card>
            </div>

            <div className="mt-6 pt-4 border-t border-border/20">
              <h3 className="font-semibold mb-3">Resources for Staying Updated</h3>
              <div className="space-y-2">
                <a
                  href="https://github.com/bitcoin/bips"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-primary hover:underline text-sm"
                >
                  <ExternalLink className="h-4 w-4" /> Bitcoin Improvement Proposals (BIPs) Repository
                </a>
                <a
                  href="https://bitcoinops.org/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-primary hover:underline text-sm"
                >
                  <ExternalLink className="h-4 w-4" /> Bitcoin Optech (Newsletters, Topics, Podcasts)
                </a>
              </div>
            </div>
          </div>

          {/* Verification Checkbox */}
          <div className="mt-6 border-t border-border/40 pt-4">
            <VerifyCheckbox
              moduleId={moduleId}
              verificationId={sectionId}
              label="I understand the difference between soft/hard forks, the BIP process, and the significance of major updates like SegWit and Taproot."
            />
          </div>
        </div>
      </ModuleContent>
    </ModuleLayout>
  );
}
