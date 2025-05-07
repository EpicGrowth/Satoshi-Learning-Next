'use client';

import React from 'react';
import { ModuleLayout } from '@/components/learn/shared/module-layout';
import { ModuleContent } from '@/components/learn/shared/module-content';
import VerifyCheckbox from '@/components/learn/shared/verify-checkbox';
import { Card } from '@/components/ui/card';
import { Key, Lock, ShieldCheck, Wallet, HardDrive } from 'lucide-react';

const moduleId = 'lightning-security';
const sectionId = 'key-management';

export default function KeyManagementPage() {
  return (
    <ModuleLayout>
      <ModuleContent moduleId={moduleId} sectionId={sectionId}>
        <div className="space-y-8">
          <Card className="p-6">
            <h2 className="text-xl font-bold mb-4">Key Management in Lightning Network</h2>
            
            <div className="space-y-6">
              <div className="prose dark:prose-invert max-w-none">
                <h3>Understanding Key Management</h3>
                <p>
                  Effective key management is fundamental to Lightning Network security. Keys control 
                  access to channels, funds, and node operations. Proper key management protects 
                  against unauthorized access and ensures fund recovery in case of node failure.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-muted p-6 rounded-lg">
                  <h4 className="font-medium mb-4">Types of Keys</h4>
                  <ul className="list-disc pl-4 space-y-2">
                    <li><strong>Node Identity Key:</strong> Node identity</li>
                    <li><strong>Funding Keys:</strong> Channel creation</li>
                    <li><strong>Channel Keys:</strong> State updates</li>
                    <li><strong>Revocation Keys:</strong> State revocation</li>
                  </ul>
                </div>
                
                <div className="bg-muted p-6 rounded-lg">
                  <h4 className="font-medium mb-4">Key Risks</h4>
                  <ul className="list-disc pl-4 space-y-2">
                    <li>Key theft</li>
                    <li>Key loss</li>
                    <li>Improper key storage</li>
                    <li>Weak key derivation</li>
                  </ul>
                </div>
              </div>
            </div>
          </Card>

          <Card className="p-6">
            <h2 className="text-xl font-bold mb-4">Critical Lightning Network Keys</h2>
            
            <div className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-purple-50 dark:bg-purple-900/20 p-6 rounded-lg">
                  <div className="flex items-center gap-2 mb-3">
                    <Key className="h-5 w-5 text-purple-600" />
                    <h4 className="font-medium">Node Identity Key</h4>
                  </div>
                  <div className="space-y-3 text-sm text-muted-foreground">
                    <p>
                      The primary key that identifies your node on the network:
                    </p>
                    <ul className="list-disc pl-4 space-y-2">
                      <li>Used to sign messages and authenticate with peers</li>
                      <li>Creates your node's unique public key (node ID)</li>
                      <li>Critical for maintaining node reputation</li>
                      <li>Loss requires establishing a new node identity</li>
                      <li>Not directly tied to funds, but crucial for operations</li>
                    </ul>
                  </div>
                </div>

                <div className="bg-purple-50 dark:bg-purple-900/20 p-6 rounded-lg">
                  <div className="flex items-center gap-2 mb-3">
                    <Wallet className="h-5 w-5 text-purple-600" />
                    <h4 className="font-medium">Channel Keys</h4>
                  </div>
                  <div className="space-y-3 text-sm text-muted-foreground">
                    <p>
                      Keys used for channel operations and state management:
                    </p>
                    <ul className="list-disc pl-4 space-y-2">
                      <li>Funding keys control the multisig funds</li>
                      <li>Per-commitment keys for state transitions</li>
                      <li>Revocation keys to invalidate old states</li>
                      <li>Payment keys for HTLC operations</li>
                      <li>Critical for protecting channel funds</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="bg-background p-5 rounded-lg border border-border">
                <div className="flex items-center gap-2 mb-3">
                  <ShieldCheck className="h-5 w-5 text-purple-600" />
                  <h4 className="font-medium">Key Derivation in Lightning</h4>
                </div>
                <p className="text-sm text-muted-foreground">
                  Lightning implementations use hierarchical deterministic (HD) key derivation to 
                  generate keys from a single seed. This approach provides several advantages:
                </p>
                <ul className="list-disc pl-4 mt-3 text-sm text-muted-foreground space-y-1">
                  <li>All keys can be backed up by securing a single seed phrase</li>
                  <li>Keys can be regenerated if the node data is lost</li>
                  <li>Channel-specific keys are derived deterministically</li>
                  <li>Simplified backup and recovery processes</li>
                </ul>
                <div className="mt-3 p-3 bg-muted/50 rounded-lg text-xs">
                  <strong>Technical note:</strong> Keys are typically derived using BIP32/BIP39/BIP44 
                  standards, allowing for compatible backup and recovery across implementations.
                </div>
              </div>
            </div>
          </Card>

          <Card className="p-6">
            <h2 className="text-xl font-bold mb-4">Key Management Best Practices</h2>
            
            <div className="prose dark:prose-invert max-w-none">
              <p>
                Implement these best practices for secure key management:
              </p>
              
              <ul>
                <li>
                  <strong>Secure Seed Storage:</strong> Store your seed phrase in multiple secure 
                  locations, such as tamper-evident devices or metal storage solutions resistant to 
                  environmental damage.
                </li>
                <li>
                  <strong>Hardware Security Modules (HSMs):</strong> Consider using dedicated hardware 
                  security modules for critical keys to prevent software-based extraction.
                </li>
                <li>
                  <strong>Regular Backups:</strong> Maintain up-to-date SCBs (Static Channel Backups) 
                  in addition to seed backups.
                </li>
                <li>
                  <strong>Physical Security:</strong> Protect physical access to devices containing 
                  keys or seed phrases.
                </li>
                <li>
                  <strong>Memory Security:</strong> Use encrypted swap and memory protection to prevent 
                  key extraction from system memory.
                </li>
                <li>
                  <strong>Key Rotation:</strong> When possible, rotate keys to limit the impact of 
                  potential key compromise.
                </li>
              </ul>
              
              <div className="bg-purple-50 dark:bg-purple-900/20 p-6 rounded-lg mt-4">
                <h4 className="font-medium mb-3 flex items-center">
                  <HardDrive className="h-5 w-5 text-purple-600 dark:text-purple-400 mr-2" />
                  Hardware Security Options
                </h4>
                <p className="text-sm">
                  Several hardware options can enhance Lightning key security:
                </p>
                <ul className="list-disc pl-5 mt-2 space-y-1 text-sm">
                  <li>
                    <strong>Hardware wallets:</strong> Some Lightning implementations support integration 
                    with hardware wallets for signing operations
                  </li>
                  <li>
                    <strong>Dedicated HSMs:</strong> Purpose-built hardware security modules for 
                    Lightning nodes
                  </li>
                  <li>
                    <strong>Secure Elements:</strong> Integrated secure elements in some node hardware
                  </li>
                  <li>
                    <strong>Air-gapped signing devices:</strong> For offline signing of critical 
                    transactions
                  </li>
                </ul>
              </div>
              
              <p>
                Remember that key management is the foundation of Lightning Network security. No matter 
                how secure your node and network configurations are, compromised keys can lead to 
                complete loss of funds. Investing time and resources in proper key management is one of 
                the most important aspects of Lightning Network security.
              </p>
            </div>
          </Card>

          <div className="mt-6 border-t border-border/40 pt-4">
            <VerifyCheckbox
              moduleId={moduleId}
              sectionId={sectionId}
              verificationId="key-management-concepts"
              label="I understand the importance of key management in the Lightning Network"
            />
          </div>
        </div>
      </ModuleContent>
    </ModuleLayout>
  );
}
