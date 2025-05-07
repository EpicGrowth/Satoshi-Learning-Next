'use client';

import { ModuleLayout } from '@/components/learn/shared/module-layout';
import { ModuleContent } from '@/components/learn/shared/module-content';
import { Card } from '@/components/ui/card';
import { Bitcoin, Shield, Database, Lock, Network } from 'lucide-react';
import SatoshiQuote from '@/components/learn/shared/satoshi-quote';
import VerifyCheckbox from '@/components/learn/shared/verify-checkbox';

export default function WhatIsBitcoin() {
  return (
    <ModuleLayout>
      <ModuleContent
        moduleId="fundamentals"
        sectionId="what-is-bitcoin"
        checkpoints={3}
        moduleTitle="What is Bitcoin?"
        moduleDescription="Learn about Bitcoin and its revolutionary impact on money"
        difficulty="Beginner"
        icon={Bitcoin}
      >
        {/* Satoshi Quote */}
        <SatoshiQuote
          quote="Bitcoin is an electronic payment system based on cryptographic proof instead of trust, allowing any two willing parties to transact directly with each other without the need for a trusted third party."
          date="October 31, 2008"
          source="Bitcoin Whitepaper"
        />

        {/* A Message from Satoshi */}
        <Card className="mb-8 p-6 border-bitcoin-orange/20">
          <h3 className="mb-4 text-lg font-medium">A Message from Satoshi</h3>
          <div className="rounded-lg bg-muted/50 p-5 text-sm italic text-muted-foreground border border-border/40">
            <p>
              "I've been working on a new electronic cash system that's fully peer-to-peer,
              with no trusted third party. The root problem with conventional currency is all
              the trust that's required to make it work. The central bank must be trusted not
              to debase the currency, but the history of fiat currencies is full of breaches
              of that trust.
            </p>
            <p className="mt-3">
              What is needed is an electronic payment system based on cryptographic proof
              instead of trust, allowing any two willing parties to transact directly with
              each other without the need for a trusted third party. Transactions that are
              computationally impractical to reverse would protect sellers from fraud, and
              routine escrow mechanisms could easily be implemented to protect buyers.
            </p>
            <p className="mt-3">
              Bitcoin is the implementation of that idea – a system for electronic
              transactions without relying on trust."
            </p>
          </div>
        </Card>

        {/* Beyond Currency */}
        <Card className="mb-8 p-6">
          <h3 className="mb-4 text-lg font-medium">Beyond Currency</h3>
          <p className="leading-relaxed text-muted-foreground">
            While Bitcoin is often described as digital money or cryptocurrency, it represents
            a fundamental breakthrough in computer science and economics. For decades, creating
            digital cash that couldn't be double-spent without a central authority was thought
            impossible - the infamous "Byzantine Generals Problem" of distributed systems.
          </p>
          <p className="mt-4 leading-relaxed text-muted-foreground">
            Satoshi Nakamoto's solution combines several existing technologies in a novel way:
          </p>
          <ul className="mt-4 list-inside list-disc space-y-2 text-muted-foreground">
            <li>Proof-of-work consensus mechanism</li>
            <li>Public key cryptography</li>
            <li>Distributed timestamp server</li>
            <li>Peer-to-peer networking</li>
          </ul>
        </Card>

        {/* Technical Foundation */}
        <Card className="mb-8 p-6">
          <h3 className="mb-4 text-lg font-medium">Technical Foundation</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-muted p-4 rounded-lg flex items-start">
              <Database className="h-6 w-6 text-bitcoin-orange mr-3 mt-1 flex-shrink-0" />
              <div>
                <h5 className="font-medium mb-2">Blockchain</h5>
                <p className="text-sm text-muted-foreground">
                  A chronological, append-only database of all transactions, organized in "blocks"
                  that are cryptographically linked together. Each block contains a timestamp,
                  transaction data, and a reference to the previous block.
                </p>
              </div>
            </div>

            <div className="bg-muted p-4 rounded-lg flex items-start">
              <Lock className="h-6 w-6 text-bitcoin-orange mr-3 mt-1 flex-shrink-0" />
              <div>
                <h5 className="font-medium mb-2">Cryptography</h5>
                <p className="text-sm text-muted-foreground">
                  Bitcoin uses public-key cryptography to create digital signatures that prove
                  ownership, and cryptographic hash functions (SHA-256) to link blocks and create
                  the proof-of-work challenge.
                </p>
              </div>
            </div>

            <div className="bg-muted p-4 rounded-lg flex items-start">
              <Network className="h-6 w-6 text-bitcoin-orange mr-3 mt-1 flex-shrink-0" />
              <div>
                <h5 className="font-medium mb-2">P2P Network</h5>
                <p className="text-sm text-muted-foreground">
                  Bitcoin operates on a peer-to-peer network where all participants run the same
                  protocol rules. There is no central server or authority. Transactions are
                  broadcast to all nodes, which independently verify and relay valid transactions.
                </p>
              </div>
            </div>

            <div className="bg-muted p-4 rounded-lg flex items-start">
              <Shield className="h-6 w-6 text-bitcoin-orange mr-3 mt-1 flex-shrink-0" />
              <div>
                <h5 className="font-medium mb-2">Consensus Mechanism</h5>
                <p className="text-sm text-muted-foreground">
                  The proof-of-work algorithm requires miners to expend computational resources to
                  add blocks to the chain. This creates economic incentives to follow the rules,
                  as the energy cost is only rewarded if other nodes accept the mined block.
                </p>
              </div>
            </div>
          </div>
        </Card>

        {/* Revolutionary Properties */}
        <Card className="p-6 mb-8">
          <h3 className="mb-4 text-lg font-medium">Revolutionary Properties</h3>
          <div className="space-y-4">
            <div className="p-4 bg-muted rounded-lg">
              <h5 className="font-medium mb-2 flex items-center">
                <span className="h-6 w-6 rounded-full bg-bitcoin-orange text-white flex items-center justify-center text-sm mr-2">
                  1
                </span>
                Decentralized Authority
              </h5>
              <p className="text-sm text-muted-foreground">
                For the first time in history, Bitcoin created a monetary system that doesn't
                require trusted third parties or central authorities. No single entity,
                corporation, or government controls the Bitcoin network. Instead, it operates by
                distributed consensus, with thousands of independent nodes enforcing the same
                rules globally.
              </p>
            </div>

            <div className="p-4 bg-muted rounded-lg">
              <h5 className="font-medium mb-2 flex items-center">
                <span className="h-6 w-6 rounded-full bg-bitcoin-orange text-white flex items-center justify-center text-sm mr-2">
                  2
                </span>
                Programmatic Scarcity
              </h5>
              <p className="text-sm text-muted-foreground">
                Unlike any previous form of money, Bitcoin has a mathematically guaranteed fixed
                supply. The protocol limits the total supply to exactly 21 million bitcoins. This
                supply schedule is enforced by code that anyone can verify, creating the first
                truly scarce digital asset. The mining reward halves approximately every four
                years, with the final bitcoin projected to be mined around the year 2140.
              </p>
            </div>

            <div className="p-4 bg-muted rounded-lg">
              <h5 className="font-medium mb-2 flex items-center">
                <span className="h-6 w-6 rounded-full bg-bitcoin-orange text-white flex items-center justify-center text-sm mr-2">
                  3
                </span>
                Permissionless Access
              </h5>
              <p className="text-sm text-muted-foreground">
                Bitcoin is open to anyone with internet access. There are no gatekeepers, identity
                requirements, or approval processes. Anyone can create a wallet, receive, store,
                and send bitcoin without asking for permission. This financial inclusion is
                revolutionary for the billions of people worldwide who lack access to traditional
                banking services.
              </p>
            </div>

            <div className="p-4 bg-muted rounded-lg">
              <h5 className="font-medium mb-2 flex items-center">
                <span className="h-6 w-6 rounded-full bg-bitcoin-orange text-white flex items-center justify-center text-sm mr-2">
                  4
                </span>
                Transparent Verification
              </h5>
              <p className="text-sm text-muted-foreground">
                Every Bitcoin transaction ever made is recorded on the public blockchain. This
                radical transparency allows anyone to independently verify the current state of
                the system and its history without trusting any third party. The rules can be
                verified by anyone running a full node, ensuring that no inflation beyond the
                schedule or invalid transactions can occur.
              </p>
            </div>

            <div className="p-4 bg-muted rounded-lg">
              <h5 className="font-medium mb-2 flex items-center">
                <span className="h-6 w-6 rounded-full bg-bitcoin-orange text-white flex items-center justify-center text-sm mr-2">
                  5
                </span>
                Immutability
              </h5>
              <p className="text-sm text-muted-foreground">
                Once confirmed, Bitcoin transactions become practically irreversible. Each
                subsequent block adds exponentially more security through proof-of-work, making
                the blockchain an immutable record. This immutability creates settlement finality
                without courts, contracts, or custodians—a property previously impossible in the
                digital realm.
              </p>
            </div>
          </div>
        </Card>
        
        {/* Birth of Bitcoin Timeline */}
        <Card className="p-6 mb-8">
          <h3 className="mb-4 text-lg font-medium">The Birth of Bitcoin</h3>
          <div className="relative pl-8 space-y-6">
            <div className="absolute left-0 top-1.5 h-4 w-4 rounded-full border-2 border-bitcoin-orange bg-background" />
            <div className="absolute left-[9px] top-[24px] bottom-0 w-0.5 bg-border h-[calc(100%-25px)]" />

            <div>
              <div className="flex flex-col sm:flex-row sm:items-center gap-2 mb-2">
                <h5 className="font-medium">The Whitepaper</h5>
                <span className="text-sm text-muted-foreground">October 31, 2008</span>
              </div>
              <p className="text-sm text-muted-foreground">
                "I've been working on a new electronic cash system that's fully peer-to-peer, with
                no trusted third party." With these words, Satoshi Nakamoto announced Bitcoin on
                the cryptography mailing list, publishing the whitepaper "Bitcoin: A Peer-to-Peer
                Electronic Cash System."
              </p>
            </div>

            <div>
              <div className="relative">
                <div className="absolute -left-8 top-1.5 h-4 w-4 rounded-full border-2 border-bitcoin-orange bg-background" />
              </div>
              <div className="flex flex-col sm:flex-row sm:items-center gap-2 mb-2">
                <h5 className="font-medium">Genesis Block</h5>
                <span className="text-sm text-muted-foreground">January 3, 2009</span>
              </div>
              <p className="text-sm text-muted-foreground">
                Satoshi mined the first Bitcoin block (the "genesis block"), containing a message:
                "The Times 03/Jan/2009 Chancellor on brink of second bailout for
                banks"—timestamping Bitcoin's birth and highlighting the financial crisis that
                inspired its creation.
              </p>
            </div>

            <div>
              <div className="relative">
                <div className="absolute -left-8 top-1.5 h-4 w-4 rounded-full border-2 border-bitcoin-orange bg-background" />
              </div>
              <div className="flex flex-col sm:flex-row sm:items-center gap-2 mb-2">
                <h5 className="font-medium">First Transaction</h5>
                <span className="text-sm text-muted-foreground">January 12, 2009</span>
              </div>
              <p className="text-sm text-muted-foreground">
                The first Bitcoin transaction occurred between Satoshi and cryptographer Hal
                Finney, who was among the first to see the potential of Bitcoin, famously tweeting
                "Running bitcoin" when he began operating a node.
              </p>
            </div>

            <div>
              <div className="relative">
                <div className="absolute -left-8 top-1.5 h-4 w-4 rounded-full border-2 border-bitcoin-orange bg-background" />
              </div>
              <div className="flex flex-col sm:flex-row sm:items-center gap-2 mb-2">
                <h5 className="font-medium">First Economic Value</h5>
                <span className="text-sm text-muted-foreground">October 5, 2009</span>
              </div>
              <p className="text-sm text-muted-foreground">
                The New Liberty Standard established the first bitcoin exchange rate: $1 =
                1,309.03 BTC, based on the cost of electricity required to mine bitcoins. This
                gave Bitcoin its first economic valuation.
              </p>
            </div>

            <div>
              <div className="relative">
                <div className="absolute -left-8 top-1.5 h-4 w-4 rounded-full border-2 border-bitcoin-orange bg-background" />
              </div>
              <div className="flex flex-col sm:flex-row sm:items-center gap-2 mb-2">
                <h5 className="font-medium">Satoshi's Departure</h5>
                <span className="text-sm text-muted-foreground">December 2010</span>
              </div>
              <p className="text-sm text-muted-foreground">
                After handing over control of the Bitcoin repository to Gavin Andresen, Satoshi
                gradually withdrew from public involvement. Their final known communication came
                in April 2011, leaving Bitcoin truly decentralized—with no leader or creator to
                rely on.
              </p>
            </div>
          </div>
        </Card>

        {/* Final Satoshi Quote */}
        <div className="mt-8 border-t border-border/40 pt-4">
          <SatoshiQuote
            quote="I don't believe we shall ever have good money again before we take it out of the hands of government. We can't take it violently. But we might find some sly, roundabout way to introduce something they can't stop."
            source="Attributed to F.A. Hayek, quoted in Satoshi's forum posts"
            date="February 11, 2009"
          />
        </div>
        
        {/* Verification Checkpoint */}
        <div className="mt-6">
          <VerifyCheckbox
            moduleId="fundamentals"
            sectionId="what-is-bitcoin"
            verificationId="what-is-bitcoin"
            label="I understand what Bitcoin is and its revolutionary properties"
          />
        </div>
      </ModuleContent>
    </ModuleLayout>
  );
}
