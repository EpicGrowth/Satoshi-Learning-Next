'use client';

import { Bitcoin, Shield, Database, Lock, Network } from 'lucide-react';
import { Card } from '@/components/ui/card';
import SatoshiQuote from '@/components/learn/shared/satoshi-quote';
import VerifyCheckbox from '@/components/learn/shared/verify-checkbox';

export default function WhatIsBitcoinContent() {
  return (
    <div className="prose prose-lg dark:prose-invert max-w-none">
      {/* Satoshi Quote */}
      <SatoshiQuote
        quote="Bitcoin is an electronic payment system based on cryptographic proof instead of trust, allowing any two willing parties to transact directly with each other without the need for a trusted third party."
        date="October 31, 2008"
        source="Bitcoin Whitepaper"
      />

      {/* A Message from Satoshi */}
      <Card className="mb-8 p-6 border-bitcoin-orange/20">
        <h3 className="mb-4 text-lg font-medium">A Message from Satoshi</h3>
        <p className="text-muted-foreground">
          I've developed a new open source P2P e-cash system called Bitcoin. It's completely decentralized, with no central server or trusted parties, because everything is based on crypto proof instead of trust.
        </p>
      </Card>

      <h2 className="mt-8 mb-4 text-2xl font-semibold">What is Bitcoin?</h2>
      <p>
        Bitcoin is a decentralized digital currency created in 2009 by an anonymous person or group
        using the pseudonym Satoshi Nakamoto. It operates without a central authority or banks,
        managing transactions and the issuance of bitcoins collectively by the network.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-8">
        <Card className="p-6 border-bitcoin-orange/20">
          <div className="flex items-start gap-4">
            <div className="p-2 rounded-full bg-bitcoin-orange/10">
              <Lock className="h-6 w-6 text-bitcoin-orange" />
            </div>
            <div>
              <h3 className="text-lg font-medium mb-2">Cryptography</h3>
              <p className="text-muted-foreground text-sm">
                Bitcoin uses strong cryptography to secure transactions, control the creation of
                additional coins, and verify the transfer of assets.
              </p>
            </div>
          </div>
        </Card>

        <Card className="p-6 border-bitcoin-orange/20">
          <div className="flex items-start gap-4">
            <div className="p-2 rounded-full bg-bitcoin-orange/10">
              <Database className="h-6 w-6 text-bitcoin-orange" />
            </div>
            <div>
              <h3 className="text-lg font-medium mb-2">Blockchain</h3>
              <p className="text-muted-foreground text-sm">
                All confirmed transactions are included in the blockchain, a distributed ledger that
                keeps a permanent record of all transactions.
              </p>
            </div>
          </div>
        </Card>

        <Card className="p-6 border-bitcoin-orange/20">
          <div className="flex items-start gap-4">
            <div className="p-2 rounded-full bg-bitcoin-orange/10">
              <Network className="h-6 w-6 text-bitcoin-orange" />
            </div>
            <div>
              <h3 className="text-lg font-medium mb-2">Decentralized</h3>
              <p className="text-muted-foreground text-sm">
                Bitcoin operates on a peer-to-peer network with no central authority or single
                administrator, making it censorship-resistant.
              </p>
            </div>
          </div>
        </Card>

        <Card className="p-6 border-bitcoin-orange/20">
          <div className="flex items-start gap-4">
            <div className="p-2 rounded-full bg-bitcoin-orange/10">
              <Shield className="h-6 w-6 text-bitcoin-orange" />
            </div>
            <div>
              <h3 className="text-lg font-medium mb-2">Secure</h3>
              <p className="text-muted-foreground text-sm">
                The Bitcoin protocol is secured by mathematics rather than trust in individuals or
                institutions, making it resistant to fraud.
              </p>
            </div>
          </div>
        </Card>
      </div>

      <h2 className="mt-8 mb-4 text-2xl font-semibold">Why Bitcoin Matters</h2>
      <p>
        For the first time in history, Bitcoin allows value to be transferred across the internet
        without requiring a trusted third party. This breakthrough solves the "double-spending"
        problem that had prevented digital scarcity before Bitcoin's invention.
      </p>

      <div className="my-8 p-6 bg-muted rounded-lg">
        <h3 className="text-xl font-semibold mb-4">Key Innovation</h3>
        <p className="text-muted-foreground">
          Bitcoin's key innovation was solving the double-spending problem without requiring a
          trusted authority. This opened the door to truly decentralized digital money.
        </p>
        <VerifyCheckbox 
          id="bitcoin-fundamentals-understanding" 
          label="I understand that Bitcoin is a decentralized digital currency that operates without central control"
        />
      </div>

      <h2 className="mt-8 mb-4 text-2xl font-semibold">How Bitcoin Works</h2>
      <p>
        Bitcoin works through a combination of several technologies and principles:
      </p>

      <ul className="list-disc pl-6 space-y-2 mb-8">
        <li>
          <strong>Public ledger:</strong> All confirmed transactions are stored in the blockchain
        </li>
        <li>
          <strong>Cryptographic keys:</strong> Bitcoin wallets contain private keys used to sign
          transactions
        </li>
        <li>
          <strong>Mining:</strong> The process by which transactions are verified and added to the
          blockchain
        </li>
        <li>
          <strong>Proof of work:</strong> The consensus mechanism that secures the network
        </li>
      </ul>
    </div>
  );
}
