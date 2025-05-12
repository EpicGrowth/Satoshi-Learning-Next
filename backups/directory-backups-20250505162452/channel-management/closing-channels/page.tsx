'use client';

import React from 'react';
import { ModuleLayout } from '@/components/learn/shared/module-layout';
import { ModuleContent } from '@/components/learn/shared/module-content';
import VerifyCheckbox from '@/components/learn/shared/verify-checkbox';
import {
  Link,
  X,
  AlertTriangle,
  Clock,
  Zap,
  ExternalLink,
  Lock,
  ArrowLeftRight,
  FileWarning,
  Shield,
  CheckCircle,
  Bitcoin,
  HandCoins,
  Settings,
  Wallet,
} from 'lucide-react';
import SatoshiQuote from '@/components/learn/shared/satoshi-quote';

const moduleId = 'lightning-channel-management';
const sectionId = 'closing-channels';

export default function ClosingChannelsPage() {
  return (
    <ModuleLayout>
      <ModuleContent moduleId={moduleId} sectionId={sectionId}>
        <div className="space-y-8">
          <SatoshiQuote
            quote="In the Bitcoin system, every transaction is final and permanently recorded on-chain. With Lightning channels, we introduced a different paradigm: a payment relationship that could begin, evolve, and eventually end."
            source="Lightning Network Design Document"
            date="2015"
          />

          <div className="bg-card p-6 rounded-lg border border-border">
            <h2 className="text-2xl font-semibold mb-4 flex items-center">
              <X className="h-6 w-6 mr-2 text-primary" />
              Closing Lightning Channels
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              Closing a Lightning channel is a critical operation that converts your off-chain
              balance back to an on-chain Bitcoin transaction. The technical implementation
              involves complex cryptographic mechanisms, timelock logic, and careful handling of
              commitment transactions to ensure funds are properly returned to their owners.
            </p>
          </div>

          {/* Technical Foundation */}
          <div className="bg-card p-6 rounded-lg border border-border">
            <h3 className="text-xl font-semibold mb-4 flex items-center">
              <Bitcoin className="h-5 w-5 mr-2 text-primary" />
              The Settlement Transaction
            </h3>
            <div className="space-y-6">
              <p className="text-muted-foreground">
                At its core, closing a Lightning channel creates a settlement transaction that finalizes the channel relationship and returns funds to their respective owners.
              </p>

              <div className="bg-background p-5 rounded-lg border border-border">
                <h4 className="font-medium mb-3">Settlement Fundamentals</h4>
                <ul className="list-disc pl-5 text-sm text-muted-foreground space-y-2">
                  <li>Distributes the channel balance according to the most recent channel state</li>
                  <li>Terminates the multisignature contract between the two peers</li>
                  <li>Converts the Lightning channel back to standard Bitcoin UTXOs</li>
                  <li>Creates public, immutable record of the final channel state</li>
                  <li>Pays mining fees to secure the transaction on the Bitcoin blockchain</li>
                </ul>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-background p-5 rounded-lg border border-border">
                  <h4 className="font-medium mb-3 flex items-center">
                    <CheckCircle className="h-4 w-4 mr-2 text-green-500" />
                    Cooperative Close
                  </h4>
                  <div className="p-4 bg-muted/30 rounded-lg">
                    <p className="text-sm text-muted-foreground mb-4">
                      A cooperative (mutual) close occurs when both channel parties agree to close the
                      channel. This is the ideal scenario that produces the most efficient and
                      cost-effective settlement.
                    </p>
                    <ul className="list-disc pl-4 text-sm text-muted-foreground space-y-2">
                      <li>Both parties sign a closing transaction</li>
                      <li>Uses a mutually agreed fee rate</li>
                      <li>Outputs immediately spendable</li>
                      <li>No CSV (CheckSequenceVerify) timelock delays</li>
                      <li>Most capital-efficient closure method</li>
                    </ul>
                  </div>
                </div>

                <div className="bg-background p-5 rounded-lg border border-border">
                  <h4 className="font-medium mb-3 flex items-center">
                    <AlertTriangle className="h-4 w-4 mr-2 text-amber-500" />
                    Force Close
                  </h4>
                  <div className="p-4 bg-muted/30 rounded-lg">
                    <p className="text-sm text-muted-foreground mb-4">
                      A force close (unilateral close) occurs when one channel partner broadcasts their
                      latest commitment transaction without coordination. This is a fallback mechanism
                      designed to protect funds when cooperation isn't possible.
                    </p>
                    <ul className="list-disc pl-4 text-sm text-muted-foreground space-y-2">
                      <li>Only requires one party's signature</li>
                      <li>Uses commitment transaction with pre-signed outputs</li>
                      <li>Initiator's funds subject to timelock delay (CSV)</li>
                      <li>Higher on-chain fees due to complexity</li>
                      <li>Triggers HTLC timeout/success transactions for in-flight payments</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Channel States During Closure */}
          <div className="bg-card p-6 rounded-lg border border-border">
            <h3 className="text-xl font-semibold mb-4 flex items-center">
              <FileWarning className="h-5 w-5 mr-2 text-primary" />
              Channel States During Closure
            </h3>
            <div className="space-y-6">
              <p className="text-muted-foreground">
                A channel progresses through several states during the closing process, with different implications for fund availability and security.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="bg-background p-5 rounded-lg border border-border">
                  <h4 className="font-medium mb-3 flex items-center">
                    <X className="h-4 w-4 text-red-500 mr-2" />
                    Closing
                  </h4>
                  <div className="p-4 bg-muted/30 rounded-lg">
                    <p className="text-sm text-muted-foreground mb-3">
                      Initial state when a close is initiated but not yet confirmed on-chain.
                    </p>
                    <ul className="list-disc pl-4 text-xs text-muted-foreground space-y-1">
                      <li>Channel is no longer usable for payments</li>
                      <li>Closing transaction is broadcast to the network</li>
                      <li>Awaiting confirmation in a Bitcoin block</li>
                      <li>Node shows channel in "closing" state</li>
                    </ul>
                  </div>
                </div>

                <div className="bg-background p-5 rounded-lg border border-border">
                  <h4 className="font-medium mb-3 flex items-center">
                    <Clock className="h-4 w-4 text-amber-500 mr-2" />
                    Force Closing
                  </h4>
                  <div className="p-4 bg-muted/30 rounded-lg">
                    <p className="text-sm text-muted-foreground mb-3">
                      Unilateral close initiated, awaiting confirmation and timelocks.
                    </p>
                    <ul className="list-disc pl-4 text-xs text-muted-foreground space-y-1">
                      <li>Commitment transaction published on-chain</li>
                      <li>HTLC transactions may be broadcast separately</li>
                      <li>Other party may broadcast a penalty transaction if breach detected</li>
                      <li>Higher transaction fees than cooperative closure</li>
                    </ul>
                  </div>
                </div>

                <div className="bg-background p-5 rounded-lg border border-border">
                  <h4 className="font-medium mb-3 flex items-center">
                    <Lock className="h-4 w-4 text-blue-500 mr-2" />
                    Waiting for Timelock
                  </h4>
                  <div className="p-4 bg-muted/30 rounded-lg">
                    <p className="text-sm text-muted-foreground mb-3">
                      On-chain transaction confirmed but funds still locked by CSV timelock.
                    </p>
                    <ul className="list-disc pl-4 text-xs text-muted-foreground space-y-1">
                      <li>Typically 144 blocks (~1 day) for force-closing party</li>
                      <li>Counter-party funds usually available immediately</li>
                      <li>HTLC outputs may have longer timelocks</li>
                      <li>Funds become spendable automatically after timelock expires</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="p-4 bg-amber-50 dark:bg-amber-900/20 rounded-lg border border-amber-200 dark:border-amber-800">
                <h5 className="font-medium mb-2 flex items-center">
                  <Shield className="h-4 w-4 text-amber-600 dark:text-amber-400 mr-2" />
                  Security Considerations
                </h5>
                <p className="text-sm text-muted-foreground mb-3">
                  The timelock mechanism is a critical security feature:
                </p>
                <ul className="list-disc pl-5 text-sm text-muted-foreground space-y-1">
                  <li>Provides a window for penalties if an old state is broadcast</li>
                  <li>Prevents both parties from spending the same funds (double-spending)</li>
                  <li>Ensures orderly resolution of in-flight payments (HTLCs)</li>
                  <li>Allows time for watchtowers to detect and respond to breach attempts</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Implementation-Specific Commands */}
          <div className="bg-card p-6 rounded-lg border border-border">
            <h3 className="text-xl font-semibold mb-4 flex items-center">
              <Settings className="h-5 w-5 mr-2 text-primary" />
              Implementation-Specific Closure Commands
            </h3>
            <div className="space-y-6">
              <p className="text-muted-foreground">
                Different Lightning implementations have their own command syntax for closing
                channels, though the underlying technical concepts remain consistent.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="bg-background p-5 rounded-lg border border-border">
                  <h4 className="font-medium mb-3 flex items-center">
                    <Zap className="h-4 w-4 mr-2 text-amber-500" />
                    LND
                  </h4>
                  <div className="p-4 bg-muted/30 rounded-lg">
                    <pre className="text-xs overflow-x-auto font-mono text-muted-foreground">
                      # List channels to find channel point
                      lncli listchannels
                      
                      # Cooperative close (default)
                      lncli closechannel [CHANNEL_POINT]
                      
                      # Force close with custom fee
                      lncli closechannel --force --sat_per_byte=25 [CHANNEL_POINT]
                      
                      # Check pending closes
                      lncli pendingchannels
                    </pre>
                  </div>
                </div>

                <div className="bg-background p-5 rounded-lg border border-border">
                  <h4 className="font-medium mb-3 flex items-center">
                    <ExternalLink className="h-4 w-4 mr-2 text-purple-500" />
                    Core Lightning (c-lightning)
                  </h4>
                  <div className="p-4 bg-muted/30 rounded-lg">
                    <pre className="text-xs overflow-x-auto font-mono text-muted-foreground">
                      # List channels to find ID
                      lightning-cli listfunds
                      
                      # Cooperative close
                      lightning-cli close id=&lt;channel_id&gt;
                      
                      # Force close
                      lightning-cli close id=&lt;channel_id&gt; unilateraltimeout=1
                      
                      # Close with specific fee rate
                      lightning-cli close id=&lt;channel_id&gt; fee_negotiation_step=10000
                    </pre>
                  </div>
                </div>

                <div className="bg-background p-5 rounded-lg border border-border">
                  <h4 className="font-medium mb-3 flex items-center">
                    <Wallet className="h-4 w-4 mr-2 text-blue-500" />
                    Eclair
                  </h4>
                  <div className="p-4 bg-muted/30 rounded-lg">
                    <pre className="text-xs overflow-x-auto font-mono text-muted-foreground">
                      # List channels
                      eclair-cli channels
                      
                      # Cooperative close
                      eclair-cli close --channelId=&lt;channel_id&gt;
                      
                      # Force close
                      eclair-cli forceclose --channelId=&lt;channel_id&gt;
                      
                      # Check pending closes
                      eclair-cli channelsinfo
                    </pre>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* When to Close Channels */}
          <div className="bg-card p-6 rounded-lg border border-border">
            <h3 className="text-xl font-semibold mb-4 flex items-center">
              <HandCoins className="h-5 w-5 mr-2 text-primary" />
              When to Close Channels
            </h3>
            <div className="space-y-6">
              <p className="text-muted-foreground">
                Knowing when to close a Lightning channel is an important part of effective channel management strategy.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-background p-5 rounded-lg border border-border">
                  <h4 className="font-medium mb-3">Reasons for Cooperative Close</h4>
                  <ul className="list-disc pl-5 text-sm text-muted-foreground space-y-2">
                    <li><strong>Inactivity:</strong> Channel hasn't been used for an extended period</li>
                    <li><strong>Reallocation:</strong> Need to reallocate capital to more productive channels</li>
                    <li><strong>Persistent Imbalance:</strong> Channel remains imbalanced despite rebalancing attempts</li>
                    <li><strong>Node Retirement:</strong> Peer is shutting down their node</li>
                    <li><strong>Upgrade Necessity:</strong> Need to upgrade to new channel features (e.g., anchor outputs)</li>
                    <li><strong>Fee Policy Mismatch:</strong> Peer's fee policy no longer aligns with your strategy</li>
                  </ul>
                </div>

                <div className="bg-background p-5 rounded-lg border border-border">
                  <h4 className="font-medium mb-3">Reasons for Force Close</h4>
                  <ul className="list-disc pl-5 text-sm text-muted-foreground space-y-2">
                    <li><strong>Unresponsive Peer:</strong> Peer node has been offline for extended period</li>
                    <li><strong>Security Concerns:</strong> Suspicion of malicious behavior by peer</li>
                    <li><strong>Stuck HTLC:</strong> In-flight payment stuck that needs to be resolved on-chain</li>
                    <li><strong>Emergency Recovery:</strong> Need to recover funds quickly during node recovery</li>
                    <li><strong>Protocol Violation:</strong> Peer is not following Lightning protocol correctly</li>
                    <li><strong>Data Loss:</strong> Channel recovery after partial data loss (SCB recovery)</li>
                  </ul>
                </div>
              </div>
              
              <div className="p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg border border-blue-200 dark:border-blue-800">
                <h5 className="font-medium mb-2">Channel Closing Best Practices</h5>
                <ul className="list-disc pl-5 text-sm text-muted-foreground space-y-1">
                  <li>Always attempt cooperative closes first before resorting to force closing</li>
                  <li>Consider on-chain fee conditions when timing your closes</li>
                  <li>Close channels in batches when possible to save on fees</li>
                  <li>Ensure your node remains online throughout the cooperative closing process</li>
                  <li>Document channel closures for future reference and analysis</li>
                  <li>Never force close a channel unless absolutely necessary</li>
                  <li>Be patient with timelock periods after force closes</li>
                </ul>
              </div>
              
              <div className="p-4 bg-amber-50 dark:bg-amber-900/20 rounded-lg border border-amber-200 dark:border-amber-800">
                <h5 className="font-medium mb-2 flex items-center">
                  <AlertTriangle className="h-4 w-4 text-amber-600 dark:text-amber-400 mr-2" />
                  Common Closing Pitfalls
                </h5>
                <ul className="list-disc pl-5 text-sm text-muted-foreground space-y-1">
                  <li>Using force close unnecessarily, incurring higher fees and timelocks</li>
                  <li>Closing during periods of high on-chain fees</li>
                  <li>Forgetting about timelocked funds after force closing</li>
                  <li>Not having enough on-chain funds to cover closing transaction fees</li>
                  <li>Closing productive channels due to temporary inactivity</li>
                  <li>Failing to verify closing transaction confirmation on the blockchain</li>
                </ul>
              </div>
            </div>
          </div>

        </div>

        {/* Verification Checkbox */}
        <VerifyCheckbox 
          moduleId={moduleId} 
          sectionId={sectionId} 
          verificationId={`${sectionId}-complete`} 
          label="I understand the different channel closing mechanisms and when to use each approach."
        />
      </ModuleContent>
    </ModuleLayout>
  );
}
