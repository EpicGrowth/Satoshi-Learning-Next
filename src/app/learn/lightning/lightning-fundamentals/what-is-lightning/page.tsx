'use client';

import { ModuleLayout } from '@/components/learn/shared/module-layout';
import { ModuleContent } from '@/components/learn/shared/module-content';
import VerifyCheckbox from '@/components/learn/shared/verify-checkbox';
import { Card } from '@/components/ui/card';
import { Zap, Scale, Clock, Coins } from 'lucide-react';

const moduleId = 'lightning-fundamentals';
const sectionId = 'what-is-lightning';

export default function WhatIsLightning() {
  return (
    <ModuleLayout>
      <ModuleContent
        moduleId={moduleId}
        sectionId={sectionId}
        moduleTitle="What is Lightning?"
        moduleDescription="Introduction to the Lightning Network"
        difficulty="Beginner"
        icon={Zap}
        checkpoints={1}
      >
        {/* Introduction */}
        <div className="mb-8">
          <h2 className="mb-4 text-2xl font-bold">What is the Lightning Network?</h2>
          <p className="text-muted-foreground">
            The Lightning Network is a "layer 2" payment protocol that operates on top 
            of Bitcoin. It enables instant, low-cost transactions and helps Bitcoin 
            scale to millions of transactions per second.
          </p>
        </div>

        {/* The Scaling Problem */}
        <Card className="mb-8 p-6">
          <h3 className="mb-4 text-lg font-medium flex items-center gap-2">
            <Scale className="h-5 w-5" />
            The Scaling Problem
          </h3>
          <div className="space-y-4">
            <p className="text-muted-foreground">
              Bitcoin's main blockchain has limitations:
            </p>
            <ul className="list-disc list-inside space-y-2 text-muted-foreground">
              <li>New blocks are created only every ~10 minutes</li>
              <li>Each block has a limited size (around 1MB)</li>
              <li>This results in ~7 transactions per second capacity</li>
              <li>Transaction fees can become high during busy periods</li>
            </ul>
            <p className="text-muted-foreground">
              For Bitcoin to serve as a global payment system, it needs to handle 
              millions of transactions per second. The Lightning Network provides 
              this scaling solution.
            </p>
          </div>
        </Card>

        {/* How Lightning Works */}
        <Card className="mb-8 p-6">
          <h3 className="mb-4 text-lg font-medium flex items-center gap-2">
            <Zap className="h-5 w-5" />
            How Lightning Works
          </h3>
          <div className="space-y-4">
            <p className="text-muted-foreground">
              The Lightning Network creates a network of payment channels between 
              Bitcoin users. Once a channel is open:
            </p>
            <ul className="list-disc list-inside space-y-2 text-muted-foreground">
              <li>Instant payments can be made between the parties</li>
              <li>Multiple payments can be sent back and forth</li>
              <li>Only the final balance is recorded on the blockchain</li>
              <li>Payments can be routed through multiple channels</li>
            </ul>
            <p className="text-muted-foreground">
              This allows for nearly unlimited transactions with minimal blockchain 
              footprint and near-zero fees.
            </p>
          </div>
        </Card>

        {/* Key Benefits */}
        <Card className="p-6">
          <h3 className="mb-4 text-lg font-medium">Lightning Network Benefits</h3>
          <div className="grid gap-6 sm:grid-cols-2">
            <div className="space-y-2">
              <h4 className="font-medium flex items-center gap-2">
                <Clock className="h-4 w-4" />
                Instant Payments
              </h4>
              <p className="text-sm text-muted-foreground">
                Transactions are settled immediately, no need to wait for block 
                confirmations.
              </p>
            </div>
            <div className="space-y-2">
              <h4 className="font-medium flex items-center gap-2">
                <Coins className="h-4 w-4" />
                Low Fees
              </h4>
              <p className="text-sm text-muted-foreground">
                Transaction fees are typically fractions of a cent, enabling 
                micropayments.
              </p>
            </div>
            <div className="space-y-2">
              <h4 className="font-medium flex items-center gap-2">
                <Scale className="h-4 w-4" />
                Scalability
              </h4>
              <p className="text-sm text-muted-foreground">
                Millions of transactions per second are possible across the 
                network.
              </p>
            </div>
            <div className="space-y-2">
              <h4 className="font-medium flex items-center gap-2">
                <Zap className="h-4 w-4" />
                Privacy
              </h4>
              <p className="text-sm text-muted-foreground">
                Individual payments within channels are not recorded on the public 
                blockchain.
              </p>
            </div>
          </div>
        </Card>

        {/* Verification Checkbox */}
        <VerifyCheckbox 
          moduleId={moduleId} 
          sectionId={sectionId} 
          verificationId={sectionId} 
        />
      </ModuleContent>
    </ModuleLayout>
  );
}
