'use client';

import React from 'react';
import { ModuleLayout } from '@/components/learn/shared/module-layout';
import { ModuleContent } from '@/components/learn/shared/module-content';
import VerifyCheckbox from '@/components/learn/shared/verify-checkbox';
import { Save, Database, Shield, Lock, FileCheck, FileWarning, RefreshCw, Server, HardDrive, Clock, ArrowUpDown, CheckCircle2, Copy, KeyRound } from 'lucide-react';
import SatoshiQuote from '@/components/learn/shared/satoshi-quote';

const moduleId = 'lightning-node-operations';
const sectionId = 'backups';

export default function BackupsPage() {
  return (
    <ModuleLayout>
      <ModuleContent moduleId={moduleId} sectionId={sectionId}>
        <div className="space-y-8">
          <SatoshiQuote
            quote="It's very attractive to the libertarian viewpoint if we can explain it properly. I'm better with code than with words though."
            source="Satoshi Nakamoto"
            date="November 14, 2008"
          />

          <div className="bg-card p-6 rounded-lg border border-border">
            <h2 className="text-2xl font-semibold mb-4 flex items-center">
              <Save className="h-6 w-6 mr-2 text-primary" />
              Lightning Node Backups
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              Proper backup procedures are crucial for Lightning nodes as they manage active payment channels with real funds. Unlike regular Bitcoin transactions, Lightning channels require additional state information to be backed up. A comprehensive backup strategy is essential for disaster recovery.
            </p>
          </div>

          {/* Section 1: Importance of Backups */}
          <div className="bg-card p-6 rounded-lg border border-border">
            <h3 className="text-xl font-semibold mb-4 flex items-center">
              <Shield className="h-5 w-5 mr-2 text-primary" />
              Why Lightning Backups Matter
            </h3>
            <div className="space-y-6">
              <p className="text-muted-foreground">
                Lightning backups are fundamentally different from on-chain Bitcoin backups. Understanding these differences is key to proper node management.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-background p-5 rounded-lg border border-border">
                  <h4 className="font-medium mb-3 flex items-center">
                    <FileWarning className="h-4 w-4 mr-2 text-red-500" />
                    Risks of Data Loss
                  </h4>
                  <div className="p-4 bg-red-50 dark:bg-red-900/20 rounded-lg border border-red-100 dark:border-red-900/30">
                    <p className="text-sm text-muted-foreground">
                      Losing Lightning channel data can lead to:
                    </p>
                    <ul className="list-disc pl-5 mt-2 text-sm text-muted-foreground space-y-1">
                      <li><strong>Fund Loss:</strong> Without proper channel state data, you may be unable to recover channel funds.</li>
                      <li><strong>Force-closures:</strong> Peers may force-close channels if your node is unresponsive during downtime.</li>
                      <li><strong>Counterparty theft:</strong> Without up-to-date channel states, malicious peers could attempt to steal funds using old states.</li>
                      <li><strong>Network reputation:</strong> Unreliable nodes damage their reputation in the network.</li>
                    </ul>
                  </div>
                </div>

                <div className="bg-background p-5 rounded-lg border border-border">
                  <h4 className="font-medium mb-3 flex items-center">
                    <ArrowUpDown className="h-4 w-4 mr-2 text-blue-500" />
                    Lightning vs. On-chain Backups
                  </h4>
                  <div className="space-y-3">
                    <div className="p-3 bg-muted/30 rounded-lg">
                      <h5 className="text-sm font-medium mb-1">On-chain Bitcoin</h5>
                      <ul className="list-disc pl-4 text-xs text-muted-foreground space-y-1">
                        <li>Only requires seed phrase backup</li>
                        <li>Static data that doesn't change</li>
                        <li>Backup once, use forever</li>
                        <li>Recovery is straightforward</li>
                      </ul>
                    </div>
                    <div className="p-3 bg-muted/30 rounded-lg">
                      <h5 className="text-sm font-medium mb-1">Lightning Network</h5>
                      <ul className="list-disc pl-4 text-xs text-muted-foreground space-y-1">
                        <li>Requires seed phrase AND channel state</li>
                        <li>Dynamic data that changes with each payment</li>
                        <li>Requires regular, frequent backups</li>
                        <li>Recovery procedures are more complex</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Section 2: Types of Backups */}
          <div className="bg-card p-6 rounded-lg border border-border">
            <h3 className="text-xl font-semibold mb-4 flex items-center">
              <Database className="h-5 w-5 mr-2 text-primary" />
              Essential Backup Types
            </h3>
            <div className="space-y-6">
              <p className="text-muted-foreground">
                A comprehensive Lightning node backup strategy includes several different types of backups, each serving a specific purpose in your recovery plan.
              </p>

              <div className="space-y-4">
                <div className="bg-background p-5 rounded-lg border border-border">
                  <h4 className="font-medium mb-3 flex items-center">
                    <FileCheck className="h-5 w-5 mr-2 text-green-500" />
                    Static Channel Backup (SCB)
                  </h4>
                  <div className="p-4 bg-muted/30 rounded-lg">
                    <p className="text-sm text-muted-foreground">
                      SCBs are compact files containing the essential information needed to recover funds from your channels in case of node failure. These files are implementation-specific (e.g., <code>channel.backup</code> in LND).
                    </p>
                    <ul className="list-disc pl-5 mt-3 text-sm text-muted-foreground space-y-1">
                      <li><strong>What it contains:</strong> Cryptographic information necessary to identify and recover from channels</li>
                      <li><strong>When to update:</strong> Every time a channel is opened or closed</li>
                      <li><strong>Limitations:</strong> Forces all channels to close during recovery, can't maintain channel states</li>
                      <li><strong>Size:</strong> Very small (typically kilobytes), easy to back up frequently</li>
                    </ul>
                    <div className="mt-3 p-3 bg-blue-50 dark:bg-blue-900/20 text-xs text-muted-foreground rounded-lg">
                      <strong>Note:</strong> While SCBs are essential, they only enable emergency channel closure, not preservation of exact channel states. This means potential fee loss from force-closures.
                    </div>
                  </div>
                </div>

                <div className="bg-background p-5 rounded-lg border border-border">
                  <h4 className="font-medium mb-3 flex items-center">
                    <Server className="h-5 w-5 mr-2 text-purple-500" />
                    Channel Database Backup
                  </h4>
                  <div className="p-4 bg-muted/30 rounded-lg">
                    <p className="text-sm text-muted-foreground">
                      The full channel database contains complete state information for all your channels. For LND, this is the <code>channel.db</code> file; for Core Lightning, it's part of the <code>lightningd.sqlite3</code> database.
                    </p>
                    <ul className="list-disc pl-5 mt-3 text-sm text-muted-foreground space-y-1">
                      <li><strong>What it contains:</strong> Complete channel states, payment histories, routing information</li>
                      <li><strong>When to backup:</strong> Extremely risky—must be backed up atomically while node is stopped, or use continuous backup solutions</li>
                      <li><strong>Limitations:</strong> Using outdated database backups can lead to fund loss via "justice transactions"</li>
                      <li><strong>Size:</strong> Larger (megabytes to gigabytes), harder to back up frequently</li>
                    </ul>
                    <div className="mt-3 p-3 bg-red-50 dark:bg-red-900/20 text-xs text-muted-foreground rounded-lg">
                      <strong>Warning:</strong> Never restore an old channel database backup while channels are still active. This can broadcast outdated states and trigger penalty mechanisms, potentially resulting in total loss of funds.
                    </div>
                  </div>
                </div>

                <div className="bg-background p-5 rounded-lg border border-border">
                  <h4 className="font-medium mb-3 flex items-center">
                    <KeyRound className="h-5 w-5 mr-2 text-amber-500" />
                    Seed and Private Key Backup
                  </h4>
                  <div className="p-4 bg-muted/30 rounded-lg">
                    <p className="text-sm text-muted-foreground">
                      Your node's seed phrase and any additional private keys are the foundation of your node's security.
                    </p>
                    <ul className="list-disc pl-5 mt-3 text-sm text-muted-foreground space-y-1">
                      <li><strong>What it contains:</strong> Secret key material that controls all node funds</li>
                      <li><strong>When to backup:</strong> Once during initial setup, store securely offline</li>
                      <li><strong>Limitations:</strong> Seed alone isn't enough to recover Lightning channels</li>
                      <li><strong>Storage:</strong> Must be kept in the most secure manner—paper backup, metal backup, or hardware security module</li>
                    </ul>
                    <div className="mt-3 p-3 bg-amber-50 dark:bg-amber-900/20 text-xs text-muted-foreground rounded-lg">
                      <strong>Security Note:</strong> Never store seed phrases digitally in unencrypted form. Consider using multi-signature or seed splitting techniques for critical nodes.
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Section 3: Backup Best Practices */}
          <div className="bg-card p-6 rounded-lg border border-border">
            <h3 className="text-xl font-semibold mb-4 flex items-center">
              <CheckCircle2 className="h-5 w-5 mr-2 text-primary" />
              Backup Best Practices
            </h3>
            <div className="space-y-6">
              <p className="text-muted-foreground">
                Implementing a robust backup strategy requires attention to several key aspects.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="bg-background p-5 rounded-lg border border-border space-y-3">
                  <h4 className="font-medium flex items-center">
                    <Clock className="h-4 w-4 mr-2 text-green-500" />
                    Regular Scheduling
                  </h4>
                  <ul className="list-disc pl-5 text-sm text-muted-foreground space-y-2">
                    <li>Automate SCB backups after channel events</li>
                    <li>Set up periodic backup verification checks</li>
                    <li>Document backup history and verification results</li>
                    <li>Maintain backup frequency appropriate to your node's activity level</li>
                  </ul>
                </div>

                <div className="bg-background p-5 rounded-lg border border-border space-y-3">
                  <h4 className="font-medium flex items-center">
                    <Lock className="h-4 w-4 mr-2 text-blue-500" />
                    Secure Storage
                  </h4>
                  <ul className="list-disc pl-5 text-sm text-muted-foreground space-y-2">
                    <li>Encrypt all backup files before storing</li>
                    <li>Use strong, unique passwords for encryption</li>
                    <li>Store critical backups offline in secure locations</li>
                    <li>Implement the 3-2-1 backup rule: 3 copies, 2 different media types, 1 off-site</li>
                  </ul>
                </div>

                <div className="bg-background p-5 rounded-lg border border-border space-y-3">
                  <h4 className="font-medium flex items-center">
                    <RefreshCw className="h-4 w-4 mr-2 text-purple-500" />
                    Testing & Verification
                  </h4>
                  <ul className="list-disc pl-5 text-sm text-muted-foreground space-y-2">
                    <li>Regularly test recovery procedures in a safe environment</li>
                    <li>Document step-by-step recovery processes</li>
                    <li>Verify backup integrity through checksums</li>
                    <li>Practice recovery annually or after major software upgrades</li>
                  </ul>
                </div>
              </div>

              <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg border border-blue-200 dark:border-blue-800">
                <h4 className="font-medium mb-2">Advanced Backup Solutions</h4>
                <ul className="list-disc pl-5 text-sm text-muted-foreground space-y-1">
                  <li><strong>Continuous Backup Services:</strong> Some implementations offer services that stream channel updates to remote backup locations in real-time.</li>
                  <li><strong>Channel Data Redundancy:</strong> Running redundant nodes with synchronized channel states.</li>
                  <li><strong>Infrastructure-as-Code:</strong> Automated node setup scripts that can redeploy your entire node configuration from scratch.</li>
                  <li><strong>Backup Encryption:</strong> Use GPG or similar encryption to protect backups stored remotely.</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Section 4: Recovery Procedures */}
          <div className="bg-card p-6 rounded-lg border border-border">
            <h3 className="text-xl font-semibold mb-4 flex items-center">
              <HardDrive className="h-5 w-5 mr-2 text-primary" />
              Recovery Procedures
            </h3>
            <div className="space-y-6">
              <p className="text-muted-foreground">
                Having a documented recovery plan is as important as the backups themselves. Here's a general outline of recovery procedures.
              </p>

              <div className="bg-background p-5 rounded-lg border border-border">
                <h4 className="font-medium mb-3">Recovery Planning</h4>
                <div className="p-4 bg-muted/30 rounded-lg">
                  <ul className="list-disc pl-5 text-sm text-muted-foreground space-y-2">
                    <li><strong>Documentation:</strong> Maintain detailed, step-by-step recovery instructions for different failure scenarios.</li>
                    <li><strong>Contact Information:</strong> Include contact details for support resources, peers, and service providers.</li>
                    <li><strong>Recovery Environment:</strong> Prepare a secure environment (hardware, software) for recovery operations.</li>
                    <li><strong>Decision Tree:</strong> Create a flowchart for determining which recovery procedure to follow based on the nature of the failure.</li>
                  </ul>
                </div>
              </div>

              <div className="bg-background p-5 rounded-lg border border-border">
                <h4 className="font-medium mb-3">Common Recovery Scenarios</h4>
                <div className="space-y-3">
                  <div className="p-3 bg-muted/30 rounded-lg">
                    <h5 className="text-sm font-medium mb-1">SCB Recovery (Data Loss, Node Failure)</h5>
                    <ol className="list-decimal pl-5 text-xs text-muted-foreground space-y-1">
                      <li>Set up a new node with the same seed</li>
                      <li>Import the most recent SCB file</li>
                      <li>Start the recovery process (implementation-specific)</li>
                      <li>Wait for force-close transactions to confirm</li>
                      <li>Recover on-chain funds after timelock periods expire</li>
                    </ol>
                  </div>
                  <div className="p-3 bg-muted/30 rounded-lg">
                    <h5 className="text-sm font-medium mb-1">Full Restoration (Hardware Replacement)</h5>
                    <ol className="list-decimal pl-5 text-xs text-muted-foreground space-y-1">
                      <li>Install OS and Lightning implementation</li>
                      <li>Restore seed/private keys</li>
                      <li>If safe, restore database backup (only if node was cleanly stopped)</li>
                      <li>Alternatively, use SCB for emergency recovery</li>
                      <li>Reconnect to peers and verify channel states</li>
                    </ol>
                  </div>
                  <div className="p-3 bg-muted/30 rounded-lg">
                    <h5 className="text-sm font-medium mb-1">Seed-Only Recovery (Last Resort)</h5>
                    <ol className="list-decimal pl-5 text-xs text-muted-foreground space-y-1">
                      <li>Restore node with seed phrase</li>
                      <li>Recover on-chain funds</li>
                      <li>Without channel data, you'll need to wait for peers to force-close channels</li>
                      <li>Monitor the blockchain for closing transactions</li>
                      <li>Claim funds after appropriate timelocks expire</li>
                    </ol>
                    <p className="text-xs text-red-500 mt-1">Warning: This approach is the least optimal and may result in loss of funds if peers don't force-close or attempt to cheat.</p>
                  </div>
                </div>
              </div>

              <div className="p-4 bg-amber-50 dark:bg-amber-900/20 rounded-lg border border-amber-200 dark:border-amber-800">
                <h5 className="font-medium mb-2">Implementation-Specific Recovery Commands</h5>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="p-3 bg-background rounded-lg">
                    <p className="text-xs font-medium mb-1">LND Recovery</p>
                    <pre className="whitespace-pre-wrap break-all text-[10px] text-muted-foreground bg-card p-2 rounded-md">
                      <code>lnd --lnddir=~/.lnd --bitcoin.active --bitcoin.mainnet --restorebackup.filepath=/path/to/channel.backup</code>
                    </pre>
                  </div>
                  <div className="p-3 bg-background rounded-lg">
                    <p className="text-xs font-medium mb-1">Core Lightning Recovery</p>
                    <pre className="whitespace-pre-wrap break-all text-[10px] text-muted-foreground bg-card p-2 rounded-md">
                      <code>lightning-cli restorebackup /path/to/backup_file</code>
                    </pre>
                  </div>
                </div>
                <p className="text-xs text-muted-foreground mt-2">
                  Note: These are simplified examples. Always refer to the most current documentation for your specific implementation and version.
                </p>
              </div>
            </div>
          </div>

        </div>

        {/* Verification Checkpoint */}
        <VerifyCheckbox 
          moduleId={moduleId} 
          sectionId={sectionId} 
          verificationId={`${sectionId}-complete`} 
          label="I understand the importance of Lightning node backups, the different types of backups needed, and best practices for recovery."
        />
      </ModuleContent>
    </ModuleLayout>
  );
}
