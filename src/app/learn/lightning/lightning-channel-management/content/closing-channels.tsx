'use client';

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
} from 'lucide-react';
import { ModuleLayout } from '@/components/learn/shared/module-layout';
import { ModuleContent } from '@/components/learn/shared/module-content';
import VerifyCheckbox from '@/components/learn/shared/verify-checkbox';
import { Card } from '@/components/ui/card';
import SatoshiQuote from '@/components/learn/shared/satoshi-quote';

export default function ClosingChannels() {
  return (
    <ModuleLayout>
      <ModuleContent
        moduleId="lightning-channel-management"
        sectionId="closing-channels"
        moduleTitle="Closing Channels"
        moduleDescription="The technical art of proper channel termination"
        difficulty="Intermediate"
        icon={Link}
      >
        <div className="space-y-8">
          {/* A Note from Satoshi */}
          <div className="bg-muted/50 p-6 rounded-lg border border-border/50">
            <h2 className="text-xl font-bold mb-4">A Note from Satoshi</h2>

          <div className="prose dark:prose-invert max-w-none">
            <p>
              In the Bitcoin system, every transaction is final and permanently recorded on-chain.
              With Lightning channels, we introduced a different paradigm: a payment relationship
              that could begin, evolve, and eventually end. The closing of a channel represents a
              critical financial boundary—the moment when an off-chain relationship must reconcile
              with the immutable on-chain reality.
            </p>

            <p>
              I designed channel closures with two primary scenarios in mind: the cooperative case,
              where parties gracefully conclude their financial relationship, and the
              non-cooperative case, where one party must enforce their claim without the other's
              participation. This dual-path approach mirrors the cryptographic principles at
              Bitcoin's core: trust where possible, but verify and protect when necessary.
            </p>

            <p>
              Channel closures are where Lightning Network security truly manifests. The intricate
              timelocks, penalty mechanisms, and on-chain transactions must seamlessly interlock to
              maintain the integrity of each party's funds. A channel closing is not merely an end,
              but a test of the system's fundamental security guarantees.
            </p>
          </div>
        </div>

        {/* Main Content */}
        <div className="bg-card p-6 rounded-lg border border-border">
          <h2 className="text-xl font-bold mb-4">Channel Closing: Technical Foundation</h2>

          <div className="space-y-6">
            <div className="prose dark:prose-invert max-w-none">
              <p>
                Closing a Lightning channel is a critical operation that converts your off-chain
                balance back to an on-chain Bitcoin transaction. The technical implementation
                involves complex cryptographic mechanisms, timelock logic, and careful handling of
                commitment transactions.
              </p>
            </div>

            <div className="bg-muted p-4 rounded-lg">
              <h3 className="font-semibold text-lg mb-3">The Settlement Transaction</h3>
              <p className="text-muted-foreground mb-3">
                At its core, closing a Lightning channel creates a settlement transaction that:
              </p>
              <ul className="list-disc pl-5 space-y-1.5 text-muted-foreground">
                <li>Distributes the channel balance according to the most recent channel state</li>
                <li>Terminates the multisignature contract between the two peers</li>
                <li>Converts the Lightning channel back to standard Bitcoin UTXOs</li>
                <li>Creates public, immutable record of the final channel state</li>
              </ul>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-muted p-6 rounded-lg">
                <h4 className="font-medium mb-4 flex items-center">
                  <Clock className="h-5 w-5 text-primary mr-2" />
                  Cooperative Close
                </h4>
                <p className="text-sm text-muted-foreground mb-4">
                  A cooperative (mutual) close occurs when both channel parties agree to close the
                  channel. This is the ideal scenario that produces the most efficient and
                  cost-effective settlement.
                </p>
                <ul className="list-disc pl-4 space-y-2">
                  <li>Both parties sign a closing transaction</li>
                  <li>Uses a mutually agreed fee rate</li>
                  <li>Outputs immediately spendable</li>
                  <li>No CSV (CheckSequenceVerify) timelock delays</li>
                  <li>Most capital-efficient closure method</li>
                </ul>
              </div>

              <div className="bg-muted p-6 rounded-lg">
                <h4 className="font-medium mb-4 flex items-center">
                  <AlertTriangle className="h-5 w-5 text-amber-500 mr-2" />
                  Force Close
                </h4>
                <p className="text-sm text-muted-foreground mb-4">
                  A force close (unilateral close) occurs when one channel partner broadcasts their
                  latest commitment transaction without coordination. This is a fallback mechanism
                  designed to protect funds when cooperation isn't possible.
                </p>
                <ul className="list-disc pl-4 space-y-2">
                  <li>Only requires one party's signature</li>
                  <li>Uses commitment transaction with pre-signed outputs</li>
                  <li>Initiator's funds subject to timelock delay (CSV)</li>
                  <li>Higher on-chain fees due to complexity</li>
                  <li>Triggers HTLC timeout/success transactions for in-flight payments</li>
                </ul>
              </div>
            </div>

            <div className="bg-muted p-6 rounded-lg">
              <h4 className="font-medium mb-4 flex items-center">
                <FileWarning className="h-5 w-5 text-primary mr-2" />
                Channel States During Closure
              </h4>
              <div className="space-y-4">
                <p className="text-muted-foreground">
                  A channel progresses through several states during the closing process:
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  <div className="p-4 bg-background rounded">
                    <h5 className="font-medium mb-2 flex items-center">
                      <X className="h-4 w-4 text-red-500 mr-2" />
                      Closing
                    </h5>
                    <p className="text-sm text-muted-foreground">
                      Initial state when a close is initiated but not yet confirmed on-chain.
                    </p>
                  </div>
                  <div className="p-4 bg-background rounded">
                    <h5 className="font-medium mb-2 flex items-center">
                      <Clock className="h-4 w-4 text-amber-500 mr-2" />
                      Force Closing
                    </h5>
                    <p className="text-sm text-muted-foreground">
                      Unilateral close initiated, awaiting confirmation and timelocks.
                    </p>
                  </div>
                  <div className="p-4 bg-background rounded">
                    <h5 className="font-medium mb-2 flex items-center">
                      <Lock className="h-4 w-4 text-blue-500 mr-2" />
                      Waiting for Timelock
                    </h5>
                    <p className="text-sm text-muted-foreground">
                      On-chain transaction confirmed but funds still locked by CSV timelock.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="prose dark:prose-invert max-w-none mt-6">
              <h3 className="text-xl font-semibold">Implementation-Specific Closure Commands</h3>
              <p>
                Different Lightning implementations have their own command syntax for closing
                channels, though the underlying technical concepts remain consistent.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              <Card className="p-5">
                <h4 className="text-md font-medium mb-3 flex items-center">
                  <Zap className="h-5 w-5 text-primary mr-2" />
                  LND
                </h4>
                <div className="bg-muted p-4 rounded-lg">
                  <pre className="text-sm overflow-x-auto">
                    <code>
                      # List channels to find channel point lncli listchannels # Cooperative close
                      (default) lncli closechannel [CHANNEL_POINT] # Force close with custom fee
                      lncli closechannel --force --sat_per_byte=25 [CHANNEL_POINT] # Check pending
                      closes lncli pendingchannels
                    </code>
                  </pre>
                </div>
              </Card>

              <Card className="p-5">
                <h4 className="text-md font-medium mb-3 flex items-center">
                  <ExternalLink className="h-5 w-5 text-primary mr-2" />
                  Core Lightning (c-lightning)
                </h4>
                <div className="bg-muted p-4 rounded-lg">
                  <pre className="text-sm overflow-x-auto">
                    <code>
                      # List channels to find ID lightning-cli listfunds # Cooperative close
                      lightning-cli close [PEER_ID] # Unilateral close lightning-cli close [PEER_ID]
                      --unilateraltimeout=60 # Force close with no waiting lightning-cli close
                      [PEER_ID] --force
                    </code>
                  </pre>
                </div>
              </Card>

              <Card className="p-5">
                <h4 className="text-md font-medium mb-3 flex items-center">
                  <ArrowLeftRight className="h-5 w-5 text-primary mr-2" />
                  Eclair
                </h4>
                <div className="bg-muted p-4 rounded-lg">
                  <pre className="text-sm overflow-x-auto">
                    <code>
                      # List channels eclair-cli channels # Normal close eclair-cli close
                      --channelId=[CHANNEL_ID] # Force close eclair-cli forceclose
                      --channelId=[CHANNEL_ID] # Check pending closes eclair-cli pending
                    </code>
                  </pre>
                </div>
              </Card>
            </div>

            <div className="bg-primary/5 p-6 rounded-lg mt-8">
              <h3 className="text-lg font-medium mb-4">
                Technical Deep Dive: Channel Closing Transactions
              </h3>

              <div className="space-y-4">
                <p className="text-muted-foreground">
                  Lightning channel closures involve specialized Bitcoin transactions with specific
                  script requirements and timelock conditions. Here's how the transaction structures
                  differ between close types:
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="bg-card p-4 rounded-lg">
                    <h4 className="font-medium mb-3">Cooperative Close Transaction</h4>
                    <p className="text-sm text-muted-foreground mb-3">
                      The cooperative close transaction is a straightforward Bitcoin transaction:
                    </p>
                    <ul className="list-disc pl-4 space-y-1.5 text-sm text-muted-foreground">
                      <li>Input: 2-of-2 multisignature funding output</li>
                      <li>Output 1: Alice's final balance (P2WPKH)</li>
                      <li>Output 2: Bob's final balance (P2WPKH)</li>
                      <li>No timelock or special script conditions</li>
                      <li>Both parties must sign transaction (2-of-2)</li>
                      <li>Transaction fee drawn from channel balance</li>
                    </ul>
                  </div>

                  <div className="bg-card p-4 rounded-lg">
                    <h4 className="font-medium mb-3">Force Close Transaction</h4>
                    <p className="text-sm text-muted-foreground mb-3">
                      The force close relies on pre-signed commitment transactions:
                    </p>
                    <ul className="list-disc pl-4 space-y-1.5 text-sm text-muted-foreground">
                      <li>Input: 2-of-2 multisignature funding output</li>
                      <li>Output 1: To_Remote - counterparty's balance (immediately spendable)</li>
                      <li>Output 2: To_Local - initiator's balance (CSV timelock)</li>
                      <li>Optional HTLC-Success/Timeout outputs for in-flight payments</li>
                      <li>Uses revocation keys to prevent cheating</li>
                      <li>Commitment transaction is pre-signed during channel updates</li>
                    </ul>
                  </div>
                </div>

                <div className="bg-muted p-4 rounded-lg mt-2">
                  <h4 className="font-medium mb-3">Penalty Mechanism</h4>
                  <p className="text-sm text-muted-foreground">
                    The Lightning Network uses a penalty mechanism to discourage broadcasting old
                    channel states. When a channel partner broadcasts an outdated commitment
                    transaction, the other party can claim all funds in the channel using the
                    revocation key that was exchanged during channel updates. This is why
                    maintaining proper channel state backups is critical.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-muted p-6 rounded-lg mt-6">
              <h4 className="font-medium mb-4 flex items-center">
                <Shield className="h-5 w-5 text-primary mr-2" />
                Strategic Decision Framework: When to Close Channels
              </h4>
              <div className="space-y-4">
                <p className="text-muted-foreground">
                  Channel closing is a strategic decision that impacts your node's capital
                  efficiency, connectivity, and security. Consider these factors when evaluating
                  whether to close a channel:
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="p-4 bg-background rounded">
                    <h5 className="font-medium mb-2">1. Inactive or Unreliable Peers</h5>
                    <p className="text-sm text-muted-foreground">
                      Close channels with peers that are frequently offline or have erratic
                      connectivity. These channels lock up capital without providing reliable
                      routing paths.
                    </p>
                  </div>
                  <div className="p-4 bg-background rounded">
                    <h5 className="font-medium mb-2">2. Economic Underperformance</h5>
                    <p className="text-sm text-muted-foreground">
                      Close channels with consistently low routing volume or unfavorable fee
                      competition. Capital redeployment can improve overall ROI.
                    </p>
                  </div>
                  <div className="p-4 bg-background rounded">
                    <h5 className="font-medium mb-2">3. Security Risk Mitigation</h5>
                    <p className="text-sm text-muted-foreground">
                      Immediately force-close channels if you detect suspicious behavior from a peer
                      or if your node's security might be compromised.
                    </p>
                  </div>
                  <div className="p-4 bg-background rounded">
                    <h5 className="font-medium mb-2">4. Network Topology Optimization</h5>
                    <p className="text-sm text-muted-foreground">
                      Close redundant channels to the same peer or network region to improve capital
                      efficiency and diversify your connectivity.
                    </p>
                  </div>
                </div>

                <div className="bg-yellow-500/10 p-4 rounded-lg mt-2">
                  <h5 className="font-medium mb-2 text-yellow-600 dark:text-yellow-400">
                    On-Chain Fee Considerations
                  </h5>
                  <p className="text-sm text-muted-foreground">
                    Always consider the current Bitcoin mempool state and fee market before closing
                    channels. During high fee periods, the cost of closing multiple channels can be
                    substantial. For non-urgent closures, wait for periods of lower on-chain fees.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-muted p-6 rounded-lg">
              <h4 className="font-medium mb-4">Best Practices for Channel Closures</h4>
              <div className="space-y-2">
                <div className="flex items-start gap-2">
                  <div className="mt-1 h-5 w-5 text-primary flex-shrink-0">✓</div>
                  <p className="text-muted-foreground">
                    Always attempt cooperative close first to minimize costs and lockup periods
                  </p>
                </div>
                <div className="flex items-start gap-2">
                  <div className="mt-1 h-5 w-5 text-primary flex-shrink-0">✓</div>
                  <p className="text-muted-foreground">
                    Verify on-chain confirmation of closing transactions in a block explorer
                  </p>
                </div>
                <div className="flex items-start gap-2">
                  <div className="mt-1 h-5 w-5 text-primary flex-shrink-0">✓</div>
                  <p className="text-muted-foreground">
                    Set fee rates appropriately based on the urgency of the closure
                  </p>
                </div>
                <div className="flex items-start gap-2">
                  <div className="mt-1 h-5 w-5 text-primary flex-shrink-0">✓</div>
                  <p className="text-muted-foreground">
                    Ensure your node has the latest channel state backup before closing
                  </p>
                </div>
                <div className="flex items-start gap-2">
                  <div className="mt-1 h-5 w-5 text-primary flex-shrink-0">✓</div>
                  <p className="text-muted-foreground">
                    Maintain an emergency fund for force-closing channels during security incidents
                  </p>
                </div>
                <div className="flex items-start gap-2">
                  <div className="mt-1 h-5 w-5 text-primary flex-shrink-0">✓</div>
                  <p className="text-muted-foreground">
                    Monitor pending force closes until all timelocks expire and funds are recovered
                  </p>
                </div>
                <div className="flex items-start gap-2">
                  <div className="mt-1 h-5 w-5 text-primary flex-shrink-0">✓</div>
                  <p className="text-muted-foreground">
                    Keep records of closed channels for accounting and network analysis
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-primary/5 p-6 rounded-lg">
              <h4 className="font-medium mb-4">Troubleshooting Common Closing Issues</h4>

              <div className="space-y-4">
                <div className="p-4 bg-background rounded">
                  <h5 className="font-medium mb-2">Stuck Pending Close</h5>
                  <p className="text-sm text-muted-foreground">
                    If a channel appears stuck in a closing state, verify the closing transaction in
                    a block explorer. For force closes, be aware that timelocks might require 144+
                    blocks before funds are available.
                  </p>
                  <pre className="text-xs bg-muted p-2 rounded mt-2 overflow-x-auto">
                    <code>
                      # Check pending channels lncli pendingchannels # Check specific closing
                      transaction bitcoin-cli gettransaction [TXID]
                    </code>
                  </pre>
                </div>

                <div className="p-4 bg-background rounded">
                  <h5 className="font-medium mb-2">Failed Cooperative Close</h5>
                  <p className="text-sm text-muted-foreground">
                    If a cooperative close fails, the peer might be offline or unresponsive. Wait
                    for the peer to come online or consider a force close if the channel recovery is
                    urgent.
                  </p>
                </div>

                <div className="p-4 bg-background rounded">
                  <h5 className="font-medium mb-2">HTLC Resolution Failures</h5>
                  <p className="text-sm text-muted-foreground">
                    In-flight HTLCs during channel closure can create complications. If you notice
                    HTLC resolution issues, check both the commitment transaction and the
                    corresponding HTLC-success or HTLC-timeout transactions.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-muted/50 p-6 rounded-lg border border-border/50">
          <SatoshiQuote quote="The Lightning Network's true elegance is revealed in how it handles edge cases like channel closures. Any distributed financial system must gracefully degrade when components fail or trust is violated. The dual-path closure mechanism embodies this principle: optimistic cooperation by default, with cryptographic guarantees as fallback." />
        </div>

        <div className="mt-6 border-t border-border/40 pt-4">
          <VerifyCheckbox
            moduleId="lightning-channel-management"
            verificationId="closing-channels"
            label="I understand the technical mechanisms behind Lightning channel closures and the strategic considerations for managing channel lifecycles"
          />
        </div>
      </div>
      </ModuleContent>
    </ModuleLayout>
  );
}
