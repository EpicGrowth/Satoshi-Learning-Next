'use client';

import { useState, useEffect } from 'react';
import { ModuleLayout } from '@/components/learn/shared/module-layout';
import { ModuleContent } from '@/components/learn/shared/module-content';
import { Card } from '@/components/ui/card';
import { Link2, Network, Lock, Wallet } from 'lucide-react';
import VerifyCheckbox from '@/components/learn/shared/verify-checkbox';

export default function PaymentChannelsClient() {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
    return () => setIsMounted(false);
  }, []);

  if (!isMounted) {
    return null;
  }

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
              A payment channel is a two-party agreement where participants can make multiple 
              transactions without broadcasting to the Bitcoin blockchain. Only the opening 
              and closing transactions are recorded on-chain.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="p-4 rounded-lg border bg-card">
                <h4 className="font-medium mb-2 flex items-center gap-2">
                  <Network className="h-4 w-4 text-primary" />
                  Channel Creation
                </h4>
                <ul className="list-disc pl-5 space-y-2 text-sm text-muted-foreground">
                  <li>Initial funding transaction</li>
                  <li>2-of-2 multisig wallet</li>
                  <li>Agreed channel capacity</li>
                  <li>Timelock mechanisms</li>
                </ul>
              </div>

              <div className="p-4 rounded-lg border bg-card">
                <h4 className="font-medium mb-2 flex items-center gap-2">
                  <Lock className="h-4 w-4 text-primary" />
                  Channel Security
                </h4>
                <ul className="list-disc pl-5 space-y-2 text-sm text-muted-foreground">
                  <li>Commitment transactions</li>
                  <li>Revocation keys</li>
                  <li>Breach remedies</li>
                  <li>Force-close options</li>
                </ul>
              </div>
            </div>
          </div>
        </Card>

        {/* Channel Operations */}
        <Card className="mb-8 p-6">
          <h3 className="mb-4 text-lg font-medium flex items-center gap-2">
            <Wallet className="h-5 w-5" />
            Channel Operations
          </h3>
          <div className="space-y-4">
            <p className="text-muted-foreground">
              Once established, payment channels enable instant, trustless transactions 
              between participants. Each transaction updates the balance allocation 
              within the channel.
            </p>

            <div className="grid grid-cols-1 gap-4">
              <div className="p-4 rounded-lg border bg-card">
                <h4 className="font-medium mb-2">Key Operations</h4>
                <ul className="list-disc pl-5 space-y-2 text-sm text-muted-foreground">
                  <li>Opening channels with peers</li>
                  <li>Updating channel state</li>
                  <li>Forwarding payments (routing)</li>
                  <li>Cooperative channel closure</li>
                  <li>Force-close procedures</li>
                </ul>
              </div>
            </div>
          </div>
        </Card>

        <VerifyCheckbox
          moduleId="lightning-fundamentals"
          sectionId="payment-channels"
          verificationId="payment-channels-basics"
          label="I understand the basics of Lightning Network payment channels"
        />
      </ModuleContent>
    </ModuleLayout>
  );
}