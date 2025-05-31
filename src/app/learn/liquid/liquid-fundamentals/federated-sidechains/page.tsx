'use client';

import { ModuleLayout } from '@/components/learn/shared/module-layout';
import { ModuleContent } from '@/components/learn/shared/module-content';
import { Card } from '@/components/ui/card';
import { ExternalLink, Shield, ServerCrash, Key, ArrowLeftRight } from 'lucide-react';
import SatoshiNote from '@/components/learn/shared/satoshi-note';
import VerifyCheckbox from '@/components/learn/shared/verify-checkbox';

export default function FederatedSidechains() {
  return (
    <ModuleLayout>
      <ModuleContent
        moduleId="liquid-fundamentals"
        sectionId="federated-sidechains"
        checkpoints={1}
        moduleTitle="Federated Sidechains"
        moduleDescription="Understanding sidechain technology and federation models"
        difficulty="Beginner"
        icon={ExternalLink}
      >
        {/* Introduction */}
        <Card className="mb-8 p-6 border-cyan-600/20">
          <h3 className="mb-4 text-lg font-medium">What are Sidechains?</h3>
          <div className="rounded-lg bg-muted/50 p-3 sm:p-4 md:p-5 text-sm text-muted-foreground border border-border/40 mobile-text-container break-words">
            <p>
              A sidechain is a separate blockchain that runs in parallel to a "main" blockchain (like Bitcoin) and is connected to it through a two-way peg mechanism. This allows assets to be transferred between the chains while maintaining a cryptographic link between them.
            </p>
            <p className="mt-3">
              Sidechains were proposed as a way to extend blockchain functionality without modifying the main chain, allowing for experimentation with new features, different consensus mechanisms, or specialized use cases while inheriting security from the parent chain.
            </p>
            <p className="mt-3">
              The Liquid Network is an implementation of a federated sidechain for Bitcoin, where the security model is based on a federation of trusted entities rather than proof-of-work mining.
            </p>
          </div>
        </Card>

        {/* The Two-Way Peg */}
        <Card className="mb-8 p-6">
          <h3 className="mb-4 text-lg font-medium">The Two-Way Peg</h3>
          <p className="leading-relaxed text-muted-foreground">
            The two-way peg is the mechanism that allows assets to move between the main chain and the sidechain. In Liquid, this enables Bitcoin to be transferred to the Liquid Network (becoming L-BTC) and back again.
          </p>
          
          <div className="grid grid-cols-1 gap-4 mt-4">
            <div className="bg-muted p-4 rounded-lg overflow-hidden">
              <h5 className="font-medium mb-2 flex items-center">
                <ArrowLeftRight className="h-5 w-5 text-cyan-600 mr-2" />
                Peg-in (Bitcoin → Liquid)
              </h5>
              <p className="text-sm text-muted-foreground">
                When a user wants to move Bitcoin to Liquid, they send BTC to a special federation-controlled multisignature address. Once confirmed, the federation creates an equivalent amount of L-BTC on the Liquid sidechain and sends it to the user's Liquid address.
              </p>
              <ol className="mt-2 text-sm text-muted-foreground list-decimal list-inside">
                <li className="mt-1">User creates a Liquid address for receiving L-BTC</li>
                <li className="mt-1">User requests a federation-controlled Bitcoin address</li>
                <li className="mt-1">User sends BTC to this federation address</li>
                <li className="mt-1">After Bitcoin confirmation, federation creates equivalent L-BTC</li>
                <li className="mt-1">L-BTC is sent to the user's Liquid address</li>
              </ol>
            </div>

            <div className="bg-muted p-4 rounded-lg overflow-hidden">
              <h5 className="font-medium mb-2 flex items-center">
                <ArrowLeftRight className="h-5 w-5 text-cyan-600 mr-2" />
                Peg-out (Liquid → Bitcoin)
              </h5>
              <p className="text-sm text-muted-foreground">
                To convert L-BTC back to BTC, users initiate a peg-out transaction on Liquid. After verification, the federation releases the equivalent amount of BTC from its reserve to the user's Bitcoin address.
              </p>
              <ol className="mt-2 text-sm text-muted-foreground list-decimal list-inside">
                <li className="mt-1">User initiates a peg-out transaction on Liquid</li>
                <li className="mt-1">User specifies their Bitcoin address for receiving BTC</li>
                <li className="mt-1">Transaction is verified by the federation</li>
                <li className="mt-1">Federation burns the L-BTC from circulation</li>
                <li className="mt-1">Federation releases BTC to the user's specified address</li>
              </ol>
              <p className="mt-2 text-sm text-muted-foreground italic">
                Note: Currently, only federation members can initiate peg-outs directly. Regular users must go through a federation member to peg-out their L-BTC.
              </p>
            </div>
          </div>
          
          <SatoshiNote className="mt-6" note="The two-way peg is critical for maintaining the value proposition of L-BTC. Every L-BTC in circulation is backed 1:1 by real BTC held by the federation, ensuring that L-BTC maintains its value relative to BTC." />
        </Card>

        {/* Federation Model */}
        <Card className="mb-8 p-6">
          <h3 className="mb-4 text-lg font-medium">Federation Model</h3>
          <p className="leading-relaxed text-muted-foreground mb-4">
            The Liquid Federation is a group of cryptocurrency businesses and financial institutions that collectively manage the network. This model differs significantly from Bitcoin's trustless proof-of-work consensus.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
            <div className="bg-muted p-4 rounded-lg flex items-start overflow-hidden">
              <Shield className="h-6 w-6 text-cyan-600 mr-3 mt-1 flex-shrink-0" />
              <div className="min-w-0 flex-1 break-words">
                <h5 className="font-medium mb-2">Security Model</h5>
                <p className="text-sm text-muted-foreground">
                  The federation secures the network through a threshold signature scheme. To sign blocks and authorize transactions, a supermajority of functionaries must provide their key shares. This distributes trust across multiple entities.
                </p>
              </div>
            </div>

            <div className="bg-muted p-4 rounded-lg flex items-start overflow-hidden">
              <Key className="h-6 w-6 text-cyan-600 mr-3 mt-1 flex-shrink-0" />
              <div className="min-w-0 flex-1 break-words">
                <h5 className="font-medium mb-2">Functionaries</h5>
                <p className="text-sm text-muted-foreground">
                  Functionaries are the servers operated by federation members that run the Liquid software. They hold key shares that are combined to create signatures authorizing blocks and transactions. No single functionary has a complete key.
                </p>
              </div>
            </div>

            <div className="bg-muted p-4 rounded-lg flex items-start overflow-hidden">
              <ServerCrash className="h-6 w-6 text-cyan-600 mr-3 mt-1 flex-shrink-0" />
              <div className="min-w-0 flex-1 break-words">
                <h5 className="font-medium mb-2">Fault Tolerance</h5>
                <p className="text-sm text-muted-foreground">
                  The federation is designed to be fault-tolerant. Even if some functionaries go offline or are compromised, the network can continue operating as long as a sufficient threshold of honest functionaries remains active.
                </p>
              </div>
            </div>

            <div className="bg-muted p-4 rounded-lg flex items-start overflow-hidden">
              <ArrowLeftRight className="h-6 w-6 text-cyan-600 mr-3 mt-1 flex-shrink-0" />
              <div className="min-w-0 flex-1 break-words">
                <h5 className="font-medium mb-2">Consensus</h5>
                <p className="text-sm text-muted-foreground">
                  Liquid uses a federated consensus mechanism called Strong Federations, where block production is rotated among functionaries. Blocks are only valid when signed by the threshold number of functionaries.
                </p>
              </div>
            </div>
          </div>
        </Card>

        {/* Federation Members */}
        <Card className="p-6 mb-8">
          <h3 className="mb-4 text-lg font-medium">Federation Members</h3>
          <p className="leading-relaxed text-muted-foreground mb-4">
            The Liquid Federation consists of diverse members from the cryptocurrency ecosystem, including:
          </p>
          
          <ul className="list-disc list-inside space-y-2 text-muted-foreground">
            <li>Cryptocurrency exchanges (Bitfinex, BitMEX, etc.)</li>
            <li>Financial institutions focused on digital assets</li>
            <li>Bitcoin infrastructure companies</li>
            <li>OTC trading desks</li>
            <li>Cryptocurrency service providers</li>
          </ul>
          
          <p className="mt-4 leading-relaxed text-muted-foreground">
            These members have a vested interest in the integrity of the Liquid Network, as they use it for their operations and services. This alignment of incentives helps ensure the security and reliability of the network.
          </p>
        </Card>
        
        {/* Advantages and Tradeoffs */}
        <Card className="p-6 mb-8">
          <h3 className="mb-4 text-lg font-medium">Advantages and Tradeoffs</h3>
          
          <div className="space-y-4">
            <div className="p-4 bg-muted/50 rounded-lg">
              <h5 className="font-medium mb-2 text-green-600">Advantages</h5>
              <ul className="list-disc list-inside space-y-1 text-sm text-muted-foreground">
                <li>Faster block times (1 minute vs. Bitcoin's 10 minutes)</li>
                <li>Predictable settlement finality</li>
                <li>Energy efficiency compared to proof-of-work</li>
                <li>Ability to implement features not possible on Bitcoin</li>
                <li>Simplified governance model for network upgrades</li>
              </ul>
            </div>
            
            <div className="p-4 bg-muted/50 rounded-lg">
              <h5 className="font-medium mb-2 text-amber-600">Tradeoffs</h5>
              <ul className="list-disc list-inside space-y-1 text-sm text-muted-foreground">
                <li>Requires trust in the federation (vs. Bitcoin's trustlessness)</li>
                <li>More centralized than Bitcoin's open mining system</li>
                <li>Potential regulatory pressure on federation members</li>
                <li>Peg-out restrictions for non-federation users</li>
                <li>Risk of collusion among federation members</li>
              </ul>
            </div>
          </div>
          
          <SatoshiNote className="mt-6" note="The federated model represents a deliberate tradeoff between the absolute decentralization of Bitcoin and the speed and feature set needed for specific use cases. It's not better or worse than Bitcoin's model—just optimized for different priorities." />
        </Card>
        
        {/* Comparing Consensus Models */}
        <Card className="p-6 mb-8">
          <h3 className="mb-4 text-lg font-medium">Comparing Consensus Models</h3>
          
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b">
                  <th className="py-2 px-3 text-left">Feature</th>
                  <th className="py-2 px-3 text-left">Bitcoin (PoW)</th>
                  <th className="py-2 px-3 text-left">Liquid (Federation)</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b">
                  <td className="py-2 px-3 font-medium">Block Time</td>
                  <td className="py-2 px-3">~10 minutes</td>
                  <td className="py-2 px-3">~1 minute</td>
                </tr>
                <tr className="border-b">
                  <td className="py-2 px-3 font-medium">Finality</td>
                  <td className="py-2 px-3">Probabilistic (6+ confirmations)</td>
                  <td className="py-2 px-3">Deterministic (2 confirmations)</td>
                </tr>
                <tr className="border-b">
                  <td className="py-2 px-3 font-medium">Security Model</td>
                  <td className="py-2 px-3">Economic (51% attack)</td>
                  <td className="py-2 px-3">Trust-based (2/3 threshold)</td>
                </tr>
                <tr className="border-b">
                  <td className="py-2 px-3 font-medium">Participation</td>
                  <td className="py-2 px-3">Open to anyone</td>
                  <td className="py-2 px-3">Limited to federation members</td>
                </tr>
                <tr className="border-b">
                  <td className="py-2 px-3 font-medium">Energy Usage</td>
                  <td className="py-2 px-3">High</td>
                  <td className="py-2 px-3">Low</td>
                </tr>
                <tr className="border-b">
                  <td className="py-2 px-3 font-medium">Censorship Resistance</td>
                  <td className="py-2 px-3">Very High</td>
                  <td className="py-2 px-3">Moderate</td>
                </tr>
                <tr>
                  <td className="py-2 px-3 font-medium">Governance</td>
                  <td className="py-2 px-3">Highly decentralized</td>
                  <td className="py-2 px-3">Federation-driven</td>
                </tr>
              </tbody>
            </table>
          </div>
        </Card>
        
        {/* Verification Checkpoint */}
        <div className="mt-6">
          <VerifyCheckbox
            moduleId="liquid-fundamentals"
            sectionId="federated-sidechains"
            verificationId="federated-sidechains"
            label="I understand how federated sidechains work and the tradeoffs they make"
          />
        </div>
      </ModuleContent>
    </ModuleLayout>
  );
}