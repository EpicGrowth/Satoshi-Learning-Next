'use client';

import React from 'react';
import { ModuleLayout } from '@/components/learn/shared/module-layout';
import { ModuleContent } from '@/components/learn/shared/module-content';
import VerifyCheckbox from '@/components/learn/shared/verify-checkbox';
import { Card } from '@/components/ui/card';
import { Shield, Eye, Clock, Zap, AlertTriangle, Server } from 'lucide-react';

const moduleId = 'lightning-advanced';
const sectionId = 'watchtowers';

export default function WatchtowersPage() {
  return (
    <ModuleLayout>
      <ModuleContent 
        moduleId={moduleId} 
        sectionId={sectionId}
        moduleTitle="Watchtowers"
        moduleDescription="Understanding Lightning watchtowers"
        difficulty="Advanced"
        icon={Shield}
        checkpoints={1}
      >
        <div className="space-y-8">
          <Card className="p-6">
            <h2 className="text-xl font-bold mb-4">Watchtowers: Guardians of the Lightning Network</h2>
            
            <div className="space-y-6">
              <div className="prose dark:prose-invert max-w-none">
                <h3>What Are Lightning Watchtowers?</h3>
                <p>
                  Lightning watchtowers are specialized services designed to monitor the Bitcoin blockchain for 
                  channel breaches and respond on behalf of offline Lightning nodes. They serve as a critical 
                  security backstop that prevents malicious channel closures when a node is unable to defend itself.
                </p>
                <p>
                  In the Lightning Network's design, if a user goes offline, their channel partners could potentially 
                  attempt to close channels using outdated states that benefit them unfairly. Watchtowers prevent this 
                  type of theft by monitoring the blockchain and automatically broadcasting justice transactions when 
                  fraud is detected.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="bg-purple-50 dark:bg-purple-900/20 p-6 rounded-lg">
                  <h4 className="font-medium mb-4 flex items-center">
                    <Shield className="h-5 w-5 text-purple-600 mr-2" />
                    Core Functionality
                  </h4>
                  <div className="text-sm text-muted-foreground space-y-2">
                    <p>
                      Watchtowers continuously scan the blockchain for breached commitment transactions—those that 
                      attempt to settle a Lightning channel using an outdated state. When detected, they broadcast 
                      pre-signed justice transactions that penalize the cheating party.
                    </p>
                    <p>
                      This system ensures that even users who are temporarily offline can enforce their channel 
                      rights, significantly enhancing the security of the Lightning Network.
                    </p>
                  </div>
                </div>

                <div className="bg-purple-50 dark:bg-purple-900/20 p-6 rounded-lg">
                  <h4 className="font-medium mb-4 flex items-center">
                    <Eye className="h-5 w-5 text-purple-600 mr-2" />
                    Privacy Considerations
                  </h4>
                  <div className="text-sm text-muted-foreground space-y-2">
                    <p>
                      Modern watchtowers are designed with privacy in mind, using blinded justice transactions 
                      that prevent the watchtower from learning which channels they're monitoring or the contents 
                      of transactions they might broadcast.
                    </p>
                    <p>
                      Through cryptographic techniques, a watchtower can fulfill its monitoring duties without gaining 
                      access to sensitive user information.
                    </p>
                  </div>
                </div>
              </div>

              <div className="border-l-4 border-purple-500 pl-4 italic">
                "Watchtowers represent a critical security innovation for the Lightning Network. They allow users 
                to safely go offline without compromising their funds, transforming Lightning from a system that 
                required constant vigilance to one that can be used casually by everyday users."
              </div>
            </div>
          </Card>

          <Card className="p-6">
            <h3 className="text-lg font-bold mb-4 flex items-center">
              <Clock className="h-5 w-5 mr-2" />
              The Problem: Channel Breach Risks
            </h3>

            <div className="space-y-4">
              <p className="text-muted-foreground">
                To understand watchtowers, we must first understand the Lightning Network's underlying security model 
                and its inherent vulnerabilities:
              </p>

              <div className="bg-gray-100 dark:bg-gray-800 p-5 rounded-lg">
                <h4 className="font-medium mb-3">Channel State Enforcement</h4>
                
                <div className="relative">
                  <div className="ml-6 space-y-6">
                    <div className="relative border-l-2 border-red-400 pl-4 pb-6">
                      <h5 className="font-medium text-red-500">The Vulnerability</h5>
                      <p className="text-sm mt-2">
                        Lightning channels maintain a sequence of commitment transactions, each representing 
                        the current balance state between parties. When a new state is agreed upon, the previous 
                        state should be invalidated.
                      </p>
                      <p className="text-sm mt-2">
                        However, a malicious actor could attempt to broadcast an older commitment transaction 
                        that gives them a more favorable balance—effectively stealing funds if their counterparty 
                        is offline and unable to respond.
                      </p>
                    </div>

                    <div className="relative border-l-2 border-green-400 pl-4">
                      <h5 className="font-medium text-green-500">The Solution</h5>
                      <p className="text-sm mt-2">
                        The Lightning protocol includes a penalty mechanism: if a party broadcasts an outdated state, 
                        their counterparty can use a "justice transaction" to claim all funds in the channel—not just 
                        their share.
                      </p>
                      <p className="text-sm mt-2">
                        This creates a strong disincentive against cheating. But it only works if the cheated party 
                        is online and monitoring the blockchain, which is where watchtowers come in.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-4 p-4 bg-yellow-50 dark:bg-yellow-900/20 rounded-lg">
                <div className="flex items-start">
                  <AlertTriangle className="h-5 w-5 text-yellow-600 flex-shrink-0 mt-1 mr-3" />
                  <div>
                    <h4 className="font-medium mb-1">The Offline Dilemma</h4>
                    <p className="text-sm text-muted-foreground">
                      Without watchtowers, Lightning Network users would need to be constantly online to protect their funds, 
                      scanning every block for potential channel breaches. This requirement would severely limit Lightning's 
                      utility for mobile users, occasional users, or during network outages.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </Card>

          <Card className="p-6">
            <h3 className="text-lg font-bold mb-4">Technical Implementation</h3>
            
            <div className="space-y-6">
              <p className="text-muted-foreground">
                Watchtowers employ sophisticated cryptographic techniques to provide security without compromising privacy:
              </p>

              <div className="relative py-8">
                <div className="absolute left-4 h-full w-0.5 bg-gradient-to-b from-purple-600/30 via-purple-600 to-purple-600/30"></div>
                
                <div className="ml-10 space-y-8">
                  <div className="relative">
                    <div className="absolute -left-10 top-0 h-8 w-8 rounded-full bg-purple-100 dark:bg-purple-900/50 flex items-center justify-center">
                      <span className="text-purple-600 font-medium">1</span>
                    </div>
                    <h4 className="font-medium">State Updates & Tower Registration</h4>
                    <p className="text-sm text-muted-foreground mt-2">
                      When a Lightning channel state is updated, each party prepares justice transactions for 
                      all previous states. They encrypt each justice transaction using a unique key derived 
                      from the commitment transaction ID it's designed to punish.
                    </p>
                  </div>

                  <div className="relative">
                    <div className="absolute -left-10 top-0 h-8 w-8 rounded-full bg-purple-100 dark:bg-purple-900/50 flex items-center justify-center">
                      <span className="text-purple-600 font-medium">2</span>
                    </div>
                    <h4 className="font-medium">Data Sharing</h4>
                    <p className="text-sm text-muted-foreground mt-2">
                      Clients send encrypted justice transaction data to their watchtower(s), along with a hint 
                      that helps identify breaches without revealing channel details. Importantly, the watchtower 
                      cannot decrypt this data until a breach occurs.
                    </p>
                    <div className="bg-gray-200 dark:bg-gray-700 p-3 rounded-md mt-2 font-mono text-xs overflow-auto">
                      <code>
                        {`// Client-side pseudocode
for each outdated_state in channel_states:
  breachKey = txid_to_breach_key(outdated_state.txid)
  encryptedJustice = encrypt(justice_transaction, breachKey)
  hint = generate_hint(outdated_state.txid)
  send_to_watchtower(hint, encryptedJustice)`}
                      </code>
                    </div>
                  </div>

                  <div className="relative">
                    <div className="absolute -left-10 top-0 h-8 w-8 rounded-full bg-purple-100 dark:bg-purple-900/50 flex items-center justify-center">
                      <span className="text-purple-600 font-medium">3</span>
                    </div>
                    <h4 className="font-medium">Blockchain Monitoring</h4>
                    <p className="text-sm text-muted-foreground mt-2">
                      The watchtower continuously scans new Bitcoin blocks, checking each transaction against 
                      its database of hints. This is done efficiently using filtered block data (compact filters).
                    </p>
                  </div>

                  <div className="relative">
                    <div className="absolute -left-10 top-0 h-8 w-8 rounded-full bg-purple-100 dark:bg-purple-900/50 flex items-center justify-center">
                      <span className="text-purple-600 font-medium">4</span>
                    </div>
                    <h4 className="font-medium">Breach Detection & Response</h4>
                    <p className="text-sm text-muted-foreground mt-2">
                      When a potential breach is detected, the watchtower attempts to derive the breach key 
                      from the on-chain transaction ID. If successful, it can decrypt the justice transaction 
                      and broadcast it to the network, penalizing the cheater.
                    </p>
                    <div className="bg-gray-200 dark:bg-gray-700 p-3 rounded-md mt-2 font-mono text-xs overflow-auto">
                      <code>
                        {`// Watchtower-side pseudocode
for each transaction in new_block:
  if hint_matches(transaction.txid, stored_hints):
    breachKey = txid_to_breach_key(transaction.txid)
    justiceTransaction = decrypt(stored_encrypted_justice, breachKey)
    if valid(justiceTransaction):
      broadcast(justiceTransaction)
      // Justice served`}
                      </code>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Card>

          <Card className="p-6">
            <h3 className="text-lg font-bold mb-4 flex items-center">
              <Server className="h-5 w-5 mr-2" />
              Watchtower Deployment Models
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="border border-border p-5 rounded-lg">
                <h4 className="font-medium mb-3">Self-Hosted Watchtowers</h4>
                <div className="space-y-2 text-sm text-muted-foreground">
                  <p>
                    Users run their own watchtower software alongside their Lightning node, typically on 
                    a separate, always-online device.
                  </p>
                  <div className="space-y-1 mt-4">
                    <div className="flex items-center">
                      <span className="text-green-500 mr-2">✓</span>
                      <span>Maximum security and trust</span>
                    </div>
                    <div className="flex items-center">
                      <span className="text-green-500 mr-2">✓</span>
                      <span>No additional fees</span>
                    </div>
                    <div className="flex items-center">
                      <span className="text-red-500 mr-2">✗</span>
                      <span>Requires technical knowledge</span>
                    </div>
                    <div className="flex items-center">
                      <span className="text-red-500 mr-2">✗</span>
                      <span>Needs always-on infrastructure</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="border border-border p-5 rounded-lg">
                <h4 className="font-medium mb-3">Trusted Third-Party Services</h4>
                <div className="space-y-2 text-sm text-muted-foreground">
                  <p>
                    Commercial watchtower services run by trusted entities in the Lightning ecosystem, often 
                    operating multiple servers for redundancy.
                  </p>
                  <div className="space-y-1 mt-4">
                    <div className="flex items-center">
                      <span className="text-green-500 mr-2">✓</span>
                      <span>Easy to use</span>
                    </div>
                    <div className="flex items-center">
                      <span className="text-green-500 mr-2">✓</span>
                      <span>Professional reliability</span>
                    </div>
                    <div className="flex items-center">
                      <span className="text-red-500 mr-2">✗</span>
                      <span>Usually involves fees</span>
                    </div>
                    <div className="flex items-center">
                      <span className="text-red-500 mr-2">✗</span>
                      <span>Requires some trust</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="border border-border p-5 rounded-lg">
                <h4 className="font-medium mb-3">Decentralized Watchtower Networks</h4>
                <div className="space-y-2 text-sm text-muted-foreground">
                  <p>
                    Federated or decentralized networks where multiple watchtowers collaborate, often with 
                    incentive mechanisms for reliable service.
                  </p>
                  <div className="space-y-1 mt-4">
                    <div className="flex items-center">
                      <span className="text-green-500 mr-2">✓</span>
                      <span>High redundancy</span>
                    </div>
                    <div className="flex items-center">
                      <span className="text-green-500 mr-2">✓</span>
                      <span>Censorship resistance</span>
                    </div>
                    <div className="flex items-center">
                      <span className="text-red-500 mr-2">✗</span>
                      <span>Complex implementation</span>
                    </div>
                    <div className="flex items-center">
                      <span className="text-red-500 mr-2">✗</span>
                      <span>Economic model still evolving</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-6 p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
              <div className="flex items-start">
                <Zap className="h-5 w-5 text-blue-600 flex-shrink-0 mt-1 mr-3" />
                <div>
                  <h4 className="font-medium mb-1">Best Practice: Multiple Watchtowers</h4>
                  <p className="text-sm text-muted-foreground">
                    For maximum security, Lightning Network users should consider using multiple watchtowers simultaneously, 
                    ideally from different providers or models. This redundancy ensures that if one watchtower fails or 
                    is compromised, others can still protect the user's channels.
                  </p>
                </div>
              </div>
            </div>
          </Card>

          <Card className="p-6 bg-gradient-to-r from-purple-50 to-blue-50 dark:from-purple-900/20 dark:to-blue-900/20">
            <h3 className="text-lg font-bold mb-4">Future Developments in Watchtower Technology</h3>

            <div className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-white dark:bg-gray-800 p-4 rounded-lg">
                  <h4 className="font-medium mb-2">Incentivization Models</h4>
                  <p className="text-sm text-muted-foreground">
                    Future watchtowers may implement reward systems for successful justice transactions, allowing 
                    them to claim a small percentage of recovered funds as payment for their services. This could 
                    create a sustainable market for watchtower services.
                  </p>
                </div>

                <div className="bg-white dark:bg-gray-800 p-4 rounded-lg">
                  <h4 className="font-medium mb-2">Enhanced Privacy Techniques</h4>
                  <p className="text-sm text-muted-foreground">
                    Ongoing research is improving the privacy properties of watchtowers, implementing techniques 
                    like blinded revocation paths and encrypted transaction templates that further reduce the 
                    information available to watchtowers.
                  </p>
                </div>

                <div className="bg-white dark:bg-gray-800 p-4 rounded-lg">
                  <h4 className="font-medium mb-2">Storage Optimization</h4>
                  <p className="text-sm text-muted-foreground">
                    As channels live longer and state updates accumulate, storage requirements for watchtowers 
                    grow. New compression and pruning techniques are being developed to make watchtower services 
                    more efficient and scalable.
                  </p>
                </div>

                <div className="bg-white dark:bg-gray-800 p-4 rounded-lg">
                  <h4 className="font-medium mb-2">Altruistic Community Watchtowers</h4>
                  <p className="text-sm text-muted-foreground">
                    Community-run watchtower networks are emerging, where Lightning enthusiasts contribute resources 
                    to maintain the security of the overall network without direct compensation, similar to how some 
                    run Bitcoin nodes.
                  </p>
                </div>
              </div>
            </div>
          </Card>

          <div className="mt-6">
            <VerifyCheckbox
              moduleId={moduleId}
              sectionId={sectionId}
              verificationId="watchtowers-basics"
              label="I understand how watchtowers help secure the Lightning Network"
            />
          </div>
        </div>
      </ModuleContent>
    </ModuleLayout>
  );
}
