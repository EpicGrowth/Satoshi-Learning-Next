'use client';

import { ModuleLayout } from '@/components/learn/shared/module-layout';
import { ModuleContent } from '@/components/learn/shared/module-content';
import { Card } from '@/components/ui/card';
import { Shield, Users, Clock, Server, AlertTriangle, Laptop } from 'lucide-react';
import SatoshiNote from '@/components/learn/shared/satoshi-note';
import VerifyCheckbox from '@/components/learn/shared/verify-checkbox';

export default function FederationConsensus() {
  return (
    <ModuleLayout>
      <ModuleContent
        moduleId="liquid-technical"
        sectionId="federation-consensus"
        checkpoints={1}
        moduleTitle="Federation Consensus"
        moduleDescription="How the Liquid Network achieves consensus through federation"
        difficulty="Intermediate"
        icon={Shield}
      >
        {/* Introduction */}
        <Card className="mb-8 p-6 border-cyan-600/20">
          <h3 className="mb-4 text-lg font-medium">Introduction to Federation Consensus</h3>
          <div className="rounded-lg bg-muted/50 p-3 sm:p-4 md:p-5 text-sm text-muted-foreground border border-border/40 mobile-text-container break-words">
            <p>
              Bitcoin's consensus mechanism relies on proof-of-work mining and a global network of nodes to validate transactions. The Liquid Network takes a fundamentally different approach, using a federation of trusted participants to achieve consensus.
            </p>
            <p className="mt-3">
              This federated consensus model allows Liquid to provide faster block times, transaction finality, and enhanced privacy features while sacrificing some of Bitcoin's decentralization and permissionless nature.
            </p>
            <p className="mt-3">
              In this section, we'll explore how Liquid's federation model works, how it achieves consensus, and the security implications of this design.
            </p>
          </div>
        </Card>

        {/* Federation Structure */}
        <Card className="mb-8 p-6">
          <h3 className="mb-4 text-lg font-medium">Federation Structure</h3>
          <div className="space-y-6">
            <div>
              <h4 className="text-base font-medium mb-2">What is the Liquid Federation?</h4>
              <p className="text-muted-foreground">
                The Liquid Federation is a group of industry participants (primarily exchanges, financial institutions, and trading firms) that collectively operate and secure the Liquid Network. These members run the infrastructure that enables Liquid's consensus, block creation, and two-way peg mechanisms.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="p-4 bg-muted rounded-lg">
                <h5 className="font-medium mb-2 flex items-center">
                  <span className="h-6 w-6 rounded-full bg-cyan-600 text-white flex items-center justify-center text-sm mr-2">
                    1
                  </span>
                  Functionaries
                </h5>
                <p className="text-sm text-muted-foreground">
                  Federation members act as "functionaries" who operate specialized hardware and software to validate transactions, create blocks, and secure the network. Each functionary runs a Liquid node and a specialized security module that enforces the network's rules.
                </p>
              </div>

              <div className="p-4 bg-muted rounded-lg">
                <h5 className="font-medium mb-2 flex items-center">
                  <span className="h-6 w-6 rounded-full bg-cyan-600 text-white flex items-center justify-center text-sm mr-2">
                    2
                  </span>
                  Dynamic Federation
                </h5>
                <p className="text-sm text-muted-foreground">
                  Liquid uses a technology called Dynamic Federations that allows for members to be added or removed without disrupting network operations. This ensures the federation can evolve over time while maintaining security and continuity.
                </p>
              </div>
            </div>
          </div>
        </Card>

        {/* Federation Consensus Mechanism */}
        <Card className="mb-8 p-6">
          <h3 className="mb-4 text-lg font-medium">Federation Consensus Mechanism</h3>
          <p className="mb-4 text-muted-foreground">
            Liquid's consensus model is based on a Byzantine Fault Tolerant (BFT) algorithm specially adapted for its federated structure. This approach differs significantly from Bitcoin's proof-of-work model.
          </p>

          <div className="space-y-4">
            <div className="p-4 bg-muted rounded-lg">
              <h5 className="font-medium mb-2">Strong Federations</h5>
              <p className="text-sm text-muted-foreground">
                Liquid employs a "Strong Federations" model where block signing rights rotate among federation members. Each block requires signatures from a supermajority of functionaries (typically 2/3 + 1) to be considered valid, ensuring that no single entity can unilaterally control the network.
              </p>
            </div>

            <div className="p-4 bg-muted rounded-lg">
              <h5 className="font-medium mb-2">Block Signing Process</h5>
              <p className="text-sm text-muted-foreground">
                When transactions are broadcast to the Liquid Network, they are collected by functionaries into a block proposal. This proposal is then distributed to other functionaries who validate it according to the network's rules. If valid, they sign the block with their cryptographic keys. Once enough signatures are collected, the block is finalized and added to the blockchain.
              </p>
            </div>
          </div>

          <SatoshiNote className="mt-6" pathType="liquid" note="Unlike Bitcoin's probabilistic finality (where transactions become increasingly secure with more confirmations but could theoretically be reversed), Liquid offers deterministic finality. Once a block receives enough functionary signatures, it cannot be reversed without collusion among a supermajority of the federation." />
        </Card>

        {/* Block Creation Process */}
        <Card className="mb-8 p-6">
          <h3 className="mb-4 text-lg font-medium">Block Creation Process</h3>
          <div className="space-y-4">
            <div className="p-4 bg-muted/50 rounded-lg">
              <h5 className="font-medium mb-2 flex items-center">
                <span className="h-6 w-6 rounded-full bg-cyan-600 text-white flex items-center justify-center text-sm mr-2">
                  1
                </span>
                Block Proposal
              </h5>
              <p className="text-sm text-muted-foreground">
                In each round, one functionary is designated as the block proposer. This functionary collects transactions from the network's mempool and packages them into a block proposal. The designation of the proposer rotates among functionaries to prevent centralization.
              </p>
            </div>

            <div className="p-4 bg-muted/50 rounded-lg">
              <h5 className="font-medium mb-2 flex items-center">
                <span className="h-6 w-6 rounded-full bg-cyan-600 text-white flex items-center justify-center text-sm mr-2">
                  2
                </span>
                Validation
              </h5>
              <p className="text-sm text-muted-foreground">
                Other functionaries receive the block proposal and validate it against the network's consensus rules. This includes checking that all transactions are valid, that confidential transactions balance correctly, and that the block follows the chain's rules.
              </p>
            </div>

            <div className="p-4 bg-muted/50 rounded-lg">
              <h5 className="font-medium mb-2 flex items-center">
                <span className="h-6 w-6 rounded-full bg-cyan-600 text-white flex items-center justify-center text-sm mr-2">
                  3
                </span>
                Signing
              </h5>
              <p className="text-sm text-muted-foreground">
                If the block is valid, each functionary signs it with their private key. These signatures are broadcast to the network. The hardware security modules (HSMs) that functionaries use are programmed to only sign valid blocks, adding an extra layer of security.
              </p>
            </div>

            <div className="p-4 bg-muted/50 rounded-lg">
              <h5 className="font-medium mb-2 flex items-center">
                <span className="h-6 w-6 rounded-full bg-cyan-600 text-white flex items-center justify-center text-sm mr-2">
                  4
                </span>
                Finalization
              </h5>
              <p className="text-sm text-muted-foreground">
                Once a threshold of signatures is collected (typically 11 of 15, or around 2/3 + 1), the block is considered finalized and is added to the blockchain. This typically happens within seconds of the initial proposal, allowing for Liquid's fast transaction finality.
              </p>
            </div>
          </div>
        </Card>

        {/* Comparison with Bitcoin */}
        <Card className="mb-8 p-6">
          <h3 className="mb-4 text-lg font-medium">Comparison with Bitcoin Consensus</h3>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr className="bg-muted">
                  <th className="text-left p-3 border border-border/50">Feature</th>
                  <th className="text-left p-3 border border-border/50">Bitcoin</th>
                  <th className="text-left p-3 border border-border/50">Liquid</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="p-3 border border-border/50 font-medium">Consensus Mechanism</td>
                  <td className="p-3 border border-border/50 text-muted-foreground">Proof of Work</td>
                  <td className="p-3 border border-border/50 text-muted-foreground">Federated Consensus (BFT)</td>
                </tr>
                <tr>
                  <td className="p-3 border border-border/50 font-medium">Block Time</td>
                  <td className="p-3 border border-border/50 text-muted-foreground">10 minutes (average)</td>
                  <td className="p-3 border border-border/50 text-muted-foreground">1 minute</td>
                </tr>
                <tr>
                  <td className="p-3 border border-border/50 font-medium">Transaction Finality</td>
                  <td className="p-3 border border-border/50 text-muted-foreground">Probabilistic (increases with confirmations)</td>
                  <td className="p-3 border border-border/50 text-muted-foreground">Deterministic (after one block)</td>
                </tr>
                <tr>
                  <td className="p-3 border border-border/50 font-medium">Network Access</td>
                  <td className="p-3 border border-border/50 text-muted-foreground">Permissionless</td>
                  <td className="p-3 border border-border/50 text-muted-foreground">Permissioned (federation controlled)</td>
                </tr>
                <tr>
                  <td className="p-3 border border-border/50 font-medium">Energy Consumption</td>
                  <td className="p-3 border border-border/50 text-muted-foreground">High (due to mining)</td>
                  <td className="p-3 border border-border/50 text-muted-foreground">Low (no mining required)</td>
                </tr>
                <tr>
                  <td className="p-3 border border-border/50 font-medium">Trust Model</td>
                  <td className="p-3 border border-border/50 text-muted-foreground">Trustless</td>
                  <td className="p-3 border border-border/50 text-muted-foreground">Trust minimized (federation trust)</td>
                </tr>
              </tbody>
            </table>
          </div>
        </Card>

        {/* Key Advantages */}
        <Card className="mb-8 p-6">
          <h3 className="mb-4 text-lg font-medium">Key Advantages of Federation Consensus</h3>
          <div className="space-y-4">
            <div className="flex items-start p-4 bg-muted rounded-lg">
              <Clock className="h-6 w-6 text-cyan-600 mr-3 mt-1 flex-shrink-0" />
              <div className="min-w-0 flex-1 break-words">
                <h5 className="font-medium mb-2">Speed and Efficiency</h5>
                <p className="text-sm text-muted-foreground">
                  Without the need for proof-of-work mining, Liquid can produce blocks much faster (1 minute vs. 10 minutes) and with more predictable timing. This allows for quicker transaction settlement, which is particularly valuable for trading and exchange operations.
                </p>
              </div>
            </div>

            <div className="flex items-start p-4 bg-muted rounded-lg">
              <Shield className="h-6 w-6 text-cyan-600 mr-3 mt-1 flex-shrink-0" />
              <div className="min-w-0 flex-1 break-words">
                <h5 className="font-medium mb-2">Immediate Finality</h5>
                <p className="text-sm text-muted-foreground">
                  Once a transaction is included in a block and that block receives enough functionary signatures, it cannot be reversed without extraordinary collusion. This provides traders with certainty that their transactions are final much faster than on the Bitcoin network.
                </p>
              </div>
            </div>

            <div className="flex items-start p-4 bg-muted rounded-lg">
              <Server className="h-6 w-6 text-cyan-600 mr-3 mt-1 flex-shrink-0" />
              <div className="min-w-0 flex-1 break-words">
                <h5 className="font-medium mb-2">Resource Efficiency</h5>
                <p className="text-sm text-muted-foreground">
                  Federated consensus eliminates the need for energy-intensive mining operations. This makes Liquid more environmentally friendly and reduces the cost of running the network, allowing resources to be focused on security and feature development.
                </p>
              </div>
            </div>

            <div className="flex items-start p-4 bg-muted rounded-lg">
              <Users className="h-6 w-6 text-cyan-600 mr-3 mt-1 flex-shrink-0" />
              <div className="min-w-0 flex-1 break-words">
                <h5 className="font-medium mb-2">Governance Structure</h5>
                <p className="text-sm text-muted-foreground">
                  The federation provides a clear governance structure for the network. Changes and upgrades can be implemented more smoothly through the federation's decision-making process, allowing Liquid to evolve and improve more rapidly than networks with more decentralized governance.
                </p>
              </div>
            </div>
          </div>
        </Card>

        {/* Security Considerations */}
        <Card className="mb-8 p-6">
          <h3 className="mb-4 text-lg font-medium">Security Considerations</h3>
          <div className="space-y-4">
            <div className="flex items-start p-4 bg-muted rounded-lg">
              <AlertTriangle className="h-6 w-6 text-amber-500 mr-3 mt-1 flex-shrink-0" />
              <div className="min-w-0 flex-1 break-words">
                <h5 className="font-medium mb-2">Trust Model</h5>
                <p className="text-sm text-muted-foreground">
                  The primary security consideration for Liquid's consensus is the trust placed in the federation. While Bitcoin's security relies on economic incentives and a large, decentralized network, Liquid relies on the integrity of its federation members. The system is designed to withstand the compromise or misbehavior of a minority of functionaries, but a supermajority could theoretically collude to attack the network.
                </p>
              </div>
            </div>

            <div className="flex items-start p-4 bg-muted rounded-lg">
              <Shield className="h-6 w-6 text-cyan-600 mr-3 mt-1 flex-shrink-0" />
              <div className="min-w-0 flex-1 break-words">
                <h5 className="font-medium mb-2">Byzantine Fault Tolerance</h5>
                <p className="text-sm text-muted-foreground">
                  Liquid's consensus algorithm is Byzantine Fault Tolerant (BFT), meaning it can continue to operate correctly even if some functionaries fail or act maliciously. Specifically, the system can tolerate up to f faulty nodes in a system with 3f+1 total nodes. In practice, this means Liquid can withstand approximately one-third of the federation behaving maliciously.
                </p>
              </div>
            </div>

            <div className="flex items-start p-4 bg-muted rounded-lg">
              <Server className="h-6 w-6 text-cyan-600 mr-3 mt-1 flex-shrink-0" />
              <div className="min-w-0 flex-1 break-words">
                <h5 className="font-medium mb-2">Hardware Security</h5>
                <p className="text-sm text-muted-foreground">
                  Federation members use specialized hardware security modules (HSMs) to protect their private keys and enforce consensus rules. These HSMs are programmed to only sign valid blocks and transactions, providing an additional layer of security even if a functionary's systems are compromised.
                </p>
              </div>
            </div>

            <div className="flex items-start p-4 bg-muted rounded-lg">
              <Users className="h-6 w-6 text-cyan-600 mr-3 mt-1 flex-shrink-0" />
              <div className="min-w-0 flex-1 break-words">
                <h5 className="font-medium mb-2">Member Diversity</h5>
                <p className="text-sm text-muted-foreground">
                  The security of the federation depends partly on the diversity of its members. Liquid's federation includes members from different jurisdictions, with different business models and incentives. This diversity makes collusion more difficult, as members would need to overcome jurisdictional, competitive, and reputational barriers to successfully attack the network.
                </p>
              </div>
            </div>
          </div>
        </Card>

        {/* Tradeoffs and Future Considerations */}
        <Card className="p-6 mb-8">
          <h3 className="mb-4 text-lg font-medium">Tradeoffs and Future Considerations</h3>
          <div className="space-y-4">
            <div>
              <h4 className="text-base font-medium mb-2">Current Tradeoffs</h4>
              <ul className="list-disc pl-5 text-muted-foreground space-y-2">
                <li>
                  <span className="font-medium">Decentralization vs. Performance:</span> Liquid trades some decentralization for performance gains in transaction speed, finality, and privacy.
                </li>
                <li>
                  <span className="font-medium">Permissionless vs. Controlled:</span> Unlike Bitcoin, Liquid's federated model means not anyone can participate in consensus, making it a permissioned system.
                </li>
                <li>
                  <span className="font-medium">Trust Assumptions:</span> Liquid requires users to trust that a supermajority of the federation will act honestly, whereas Bitcoin minimizes trust requirements.
                </li>
              </ul>
            </div>

            <div>
              <h4 className="text-base font-medium mb-2">Future Considerations</h4>
              <ul className="list-disc pl-5 text-muted-foreground space-y-2">
                <li>
                  <span className="font-medium">Federation Expansion:</span> Increasing the size and diversity of the federation could further reduce trust assumptions and improve security.
                </li>
                <li>
                  <span className="font-medium">Consensus Improvements:</span> Research into hybrid consensus models that maintain Liquid's performance while reducing trust requirements.
                </li>
                <li>
                  <span className="font-medium">Transparency Mechanisms:</span> Enhanced tools for monitoring federation behavior and ensuring accountability could strengthen user confidence in the system.
                </li>
              </ul>
            </div>
          </div>
        </Card>

        {/* Conclusion */}
        <Card className="p-6">
          <h3 className="mb-4 text-lg font-medium">Practical Understanding</h3>
          <p className="text-muted-foreground mb-4">
            Liquid's federated consensus represents a different approach to blockchain security that prioritizes performance, predictability, and specific features over the absolute decentralization of Bitcoin. This model makes Liquid particularly well-suited for certain use cases like trading, asset issuance, and situations where rapid settlement is essential.
          </p>
          <p className="text-muted-foreground mb-6">
            Understanding the trade-offs involved in Liquid's consensus model is important for users to make informed decisions about when to use Liquid versus the main Bitcoin blockchain. For applications that benefit from fast settlement and confidential transactions, Liquid's federation model offers compelling advantages. For situations where maximum decentralization and censorship resistance are paramount, Bitcoin's main chain may be more appropriate.
          </p>
          <div className="mt-4 bg-muted p-4 rounded-lg">
            <h4 className="font-medium flex items-center mb-2">
              <Laptop className="h-5 w-5 mr-2 text-cyan-600" />
              Verify Your Understanding
            </h4>
            <p className="text-sm text-muted-foreground mb-4">
              You now understand how the Liquid Network achieves consensus through its federation model, including the block creation process, security considerations, and trade-offs compared to Bitcoin's proof-of-work consensus.
            </p>
            <VerifyCheckbox
              moduleId="liquid-technical"
              sectionId="federation-consensus"
              index={0}
              text="I understand how the Liquid Federation achieves consensus, including the block signing process and security model."
            />
          </div>
        </Card>
      </ModuleContent>
    </ModuleLayout>
  );
}
