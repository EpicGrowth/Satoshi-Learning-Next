'use client';

import { ModuleLayout } from '@/components/learn/shared/module-layout';
import { ModuleContent } from '@/components/learn/shared/module-content';
import { LightningSidebar } from '@/components/learn/lightning/lightning-sidebar';
import { Card } from '@/components/ui/card';
import { Link2, Network, Lock, Wallet } from 'lucide-react';
import VerifyCheckbox from '@/components/learn/shared/verify-checkbox';

export default function PaymentChannels() {
  return (
    <ModuleLayout>
      <ModuleContent
        moduleId="lightning-fundamentals"
        sectionId="payment-channels"
        checkpoints={3}
      >
        {/* Introduction */}
        <div className="mb-8">
          <h2 className="mb-4 text-2xl font-bold">Lightning Payment Channels</h2>
          <p className="text-muted-foreground">
            Payment channels are the foundation of the Lightning Network. They allow 
            two parties to conduct multiple Bitcoin transactions off-chain while 
            maintaining the security of the Bitcoin blockchain.
          </p>
        </div>

        {/* Channel Basics */}
        <Card className="mb-8 p-6">
          <h3 className="mb-4 text-lg font-medium flex items-center gap-2">
            <Link2 className="h-5 w-5" />
            What is a Payment Channel?
          </h3>
          <div className="space-y-4">
            <p className="text-muted-foreground">
              A payment channel is like a secure tab between two parties:
            </p>
            <ul className="list-disc list-inside space-y-2 text-muted-foreground">
              <li>Both parties deposit funds into a shared Bitcoin address</li>
              <li>They can then send payments back and forth instantly</li>
              <li>Only two on-chain transactions are needed:</li>
              <ul className="list-none pl-6 space-y-1 text-muted-foreground">
                <li>- Opening the channel (funding transaction)</li>
                <li>- Closing the channel (settlement transaction)</li>
              </ul>
            </ul>
          </div>
        </Card>

        {/* Channel Lifecycle */}
        <Card className="mb-8 p-6">
          <h3 className="mb-4 text-lg font-medium flex items-center gap-2">
            <Network className="h-5 w-5" />
            Channel Lifecycle
          </h3>
          <div className="space-y-4">
            <h4 className="font-medium">1. Opening a Channel</h4>
            <ul className="list-disc list-inside space-y-2 text-muted-foreground">
              <li>Both parties agree to open a channel</li>
              <li>They create a 2-of-2 multisignature address</li>
              <li>One or both parties fund the channel</li>
              <li>The funding transaction is confirmed on-chain</li>
            </ul>

            <h4 className="font-medium mt-6">2. Using the Channel</h4>
            <ul className="list-disc list-inside space-y-2 text-muted-foreground">
              <li>Parties exchange signed commitment transactions</li>
              <li>Each new transaction updates the balance</li>
              <li>Old states are invalidated using penalty mechanisms</li>
              <li>No on-chain transactions are needed</li>
            </ul>

            <h4 className="font-medium mt-6">3. Closing the Channel</h4>
            <ul className="list-disc list-inside space-y-2 text-muted-foreground">
              <li>Either party can initiate closure</li>
              <li>The latest balance is settled on-chain</li>
              <li>Funds are returned based on final state</li>
            </ul>
          </div>
        </Card>

        {/* Security Mechanisms */}
        <Card className="mb-8 p-6">
          <h3 className="mb-4 text-lg font-medium flex items-center gap-2">
            <Lock className="h-5 w-5" />
            Security Mechanisms
          </h3>
          <div className="space-y-4">
            <p className="text-muted-foreground">
              Payment channels use several mechanisms to ensure security:
            </p>
            <ul className="list-disc list-inside space-y-2 text-muted-foreground">
              <li>Multisignature addresses require both parties to agree</li>
              <li>Timelocks prevent premature channel closure</li>
              <li>Revocation keys invalidate old channel states</li>
              <li>Breach remedy transactions punish cheating attempts</li>
            </ul>
            <p className="text-muted-foreground">
              These mechanisms ensure that neither party can steal funds or 
              broadcast old channel states.
            </p>
          </div>
        </Card>

        {/* Channel Management */}
        <Card className="p-6">
          <h3 className="mb-4 text-lg font-medium flex items-center gap-2">
            <Wallet className="h-5 w-5" />
            Channel Management
          </h3>
          <div className="grid gap-6 sm:grid-cols-2">
            <div className="space-y-2">
              <h4 className="font-medium">Channel Capacity</h4>
              <p className="text-sm text-muted-foreground">
                The total amount of funds in the channel determines how much can be 
                sent in either direction.
              </p>
            </div>
            <div className="space-y-2">
              <h4 className="font-medium">Channel Balance</h4>
              <p className="text-sm text-muted-foreground">
                The distribution of funds between parties determines how much each 
                can send to the other.
              </p>
            </div>
            <div className="space-y-2">
              <h4 className="font-medium">Rebalancing</h4>
              <p className="text-sm text-muted-foreground">
                Channels may need rebalancing if too much value flows in one 
                direction.
              </p>
            </div>
            <div className="space-y-2">
              <h4 className="font-medium">Channel Monitoring</h4>
              <p className="text-sm text-muted-foreground">
                Nodes must stay online or delegate watchtowers to protect against 
                breach attempts.
              </p>
            </div>
          </div>
        </Card>
        
        {/* Verification Checkpoint */}
        <VerifyCheckbox 
          moduleId="fundamentals" 
          verificationId="payment-channels-complete" 
          sectionId="payment-channels"
          label="I understand how Lightning payment channels work" 
        />
      </ModuleContent>
    </ModuleLayout>
  );
}
