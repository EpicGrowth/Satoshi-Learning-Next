'use client';

import { ModuleLayout } from '@/components/learn/shared/module-layout';
import { ModuleContent } from '@/components/learn/shared/module-content';
import { Card } from '@/components/ui/card';
import { Shield, Lock, Users, Key, AlertTriangle, Scale, Laptop } from 'lucide-react';
import SatoshiNote from '@/components/learn/shared/satoshi-note';
import VerifyCheckbox from '@/components/learn/shared/verify-checkbox';

export default function LiquidSecurity() {
  return (
    <ModuleLayout>
      <ModuleContent
        moduleId="liquid-technical"
        sectionId="liquid-security"
        checkpoints={1}
        moduleTitle="Liquid Security"
        moduleDescription="Understanding the security model of the Liquid Network"
        difficulty="Intermediate"
        icon={Shield}
      >
        {/* Introduction */}
        <Card className="mb-8 p-6 border-cyan-600/20">
          <h3 className="mb-4 text-lg font-medium">Introduction to Liquid Security</h3>
          <div className="rounded-lg bg-muted/50 p-3 sm:p-4 md:p-5 text-sm text-muted-foreground border border-border/40 mobile-text-container break-words">
            <p>
              The Liquid Network's security model differs significantly from Bitcoin's. While Bitcoin achieves security through proof-of-work mining and a large, decentralized network of nodes, Liquid uses a federated consensus model and specialized hardware to protect its blockchain.
            </p>
            <p className="mt-3">
              This architectural difference creates unique security properties, trade-offs, and considerations for users and developers working with the Liquid Network. Understanding these security aspects is crucial for making informed decisions about when and how to use Liquid.
            </p>
            <p className="mt-3">
              In this section, we'll explore Liquid's security model in depth, examining its strengths, potential vulnerabilities, and how it compares to Bitcoin's security approach.
            </p>
          </div>
        </Card>

        {/* Security Model Overview */}
        <Card className="mb-8 p-6">
          <h3 className="mb-4 text-lg font-medium">Liquid Security Model Overview</h3>
          <div className="space-y-6">
            <div>
              <h4 className="text-base font-medium mb-2">Foundation of Liquid Security</h4>
              <p className="text-muted-foreground">
                Liquid's security rests on three primary pillars: its federation structure, specialized hardware security modules (HSMs), and cryptographic techniques. Together, these elements create a system that provides different security guarantees than Bitcoin while enabling additional functionality.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="p-4 bg-muted rounded-lg">
                <h5 className="font-medium mb-2 flex items-center">
                  <Users className="h-5 w-5 mr-2 text-cyan-600" />
                  Federation Trust
                </h5>
                <p className="text-sm text-muted-foreground">
                  The security of the Liquid Network depends on the integrity of its federation members. The system is designed to withstand the compromise or misbehavior of a minority of functionaries, but requires a supermajority to behave honestly.
                </p>
              </div>

              <div className="p-4 bg-muted rounded-lg">
                <h5 className="font-medium mb-2 flex items-center">
                  <Key className="h-5 w-5 mr-2 text-cyan-600" />
                  Hardware Security
                </h5>
                <p className="text-sm text-muted-foreground">
                  Functionaries use specialized hardware security modules (HSMs) that enforce consensus rules and protect private keys. These devices are programmed to only sign valid blocks and transactions, providing defense even if a functionary's systems are compromised.
                </p>
              </div>

              <div className="p-4 bg-muted rounded-lg">
                <h5 className="font-medium mb-2 flex items-center">
                  <Lock className="h-5 w-5 mr-2 text-cyan-600" />
                  Cryptographic Protocols
                </h5>
                <p className="text-sm text-muted-foreground">
                  Liquid employs advanced cryptographic techniques, including confidential transactions, multi-signature schemes, and threshold signatures, to protect assets and ensure proper network operation even in adversarial conditions.
                </p>
              </div>
            </div>
          </div>
        </Card>

        {/* Federation Security */}
        <Card className="mb-8 p-6">
          <h3 className="mb-4 text-lg font-medium">Federation Security</h3>
          <p className="mb-4 text-muted-foreground">
            The security of the Liquid Network depends heavily on its federation model. Understanding how this federation is structured and secured is essential for evaluating Liquid's overall security posture.
          </p>

          <div className="space-y-4">
            <div className="p-4 bg-muted/50 rounded-lg">
              <h5 className="font-medium mb-2">Federation Composition</h5>
              <p className="text-sm text-muted-foreground">
                The Liquid Federation consists of diverse participants from the Bitcoin and cryptocurrency ecosystem, including exchanges, financial institutions, and trading firms. This diversity is an intentional security feature, as it makes collusion more difficult by bringing together entities with different business models, jurisdictions, and incentives.
              </p>
            </div>

            <div className="p-4 bg-muted/50 rounded-lg">
              <h5 className="font-medium mb-2">Byzantine Fault Tolerance</h5>
              <p className="text-sm text-muted-foreground">
                Liquid's consensus algorithm is Byzantine Fault Tolerant (BFT), meaning it can continue to operate correctly even if some functionaries fail or act maliciously. The system requires a supermajority of functionaries (typically 2/3 + 1) to agree on each block, allowing it to tolerate up to 1/3 of functionaries being compromised or malicious.
              </p>
            </div>

            <div className="p-4 bg-muted/50 rounded-lg">
              <h5 className="font-medium mb-2">Economic Incentives</h5>
              <p className="text-sm text-muted-foreground">
                Federation members typically have strong economic incentives to maintain the security and integrity of the network. Many are businesses that use Liquid for their operations or offer services built on top of it. Attacking the network would damage their reputation and potentially harm their business interests.
              </p>
            </div>

            <div className="p-4 bg-muted/50 rounded-lg">
              <h5 className="font-medium mb-2">Dynamic Federation Management</h5>
              <p className="text-sm text-muted-foreground">
                Liquid employs a "Dynamic Federations" technology that allows for members to be added or removed without disrupting network operations. This enables the federation to evolve over time, potentially removing compromised members or adding new trusted entities to strengthen the network.
              </p>
            </div>
          </div>
        </Card>

        {/* Hardware Security Modules */}
        <Card className="mb-8 p-6">
          <h3 className="mb-4 text-lg font-medium">Hardware Security Modules (HSMs)</h3>
          <div className="space-y-4">
            <p className="text-muted-foreground">
              A critical component of Liquid's security architecture is the use of specialized hardware security modules (HSMs) by federation members. These devices provide an additional layer of protection beyond the federation's trust model.
            </p>
            
            <div className="p-4 bg-muted/50 rounded-lg">
              <h5 className="font-medium mb-2">Role of HSMs</h5>
              <p className="text-sm text-muted-foreground">
                Federation members use HSMs to store their private keys and enforce consensus rules. These hardware devices are specifically programmed to only sign valid blocks and transactions, creating a security barrier that protects against both external attacks and potential malicious behavior by the functionaries themselves.
              </p>
            </div>

            <div className="p-4 bg-muted/50 rounded-lg">
              <h5 className="font-medium mb-2">Protection Against Compromise</h5>
              <p className="text-sm text-muted-foreground">
                Even if a functionary's systems are compromised by hackers, the HSM will refuse to sign invalid blocks or transactions that violate Liquid's consensus rules. This provides protection against a range of attacks, including attempts to create invalid blocks, double-spend transactions, or steal assets.
              </p>
            </div>

            <div className="p-4 bg-muted/50 rounded-lg">
              <h5 className="font-medium mb-2">Watchman Hardware</h5>
              <p className="text-sm text-muted-foreground">
                Liquid functionaries typically use specialized hardware called "Watchman" devices, which combine an HSM with additional functionality specific to the Liquid Network. These devices monitor the Bitcoin blockchain for peg-in and peg-out operations and enforce the rules of the two-way peg mechanism.
              </p>
            </div>
          </div>
          <SatoshiNote className="mt-6" pathType="liquid" note="Hardware security modules create a crucial separation between the functionary's general-purpose computing environment and the security-critical task of signing blocks. This is similar to how hardware wallets protect Bitcoin users by keeping private keys isolated from potentially compromised computers." />
        </Card>

        {/* Cryptographic Security */}
        <Card className="mb-8 p-6">
          <h3 className="mb-4 text-lg font-medium">Cryptographic Security Features</h3>
          <div className="space-y-4">
            <p className="text-muted-foreground">
              Liquid employs several advanced cryptographic techniques to enhance its security and enable its unique features.
            </p>
            
            <div className="flex items-start p-4 bg-muted rounded-lg">
              <Lock className="h-6 w-6 text-cyan-600 mr-3 mt-1 flex-shrink-0" />
              <div className="min-w-0 flex-1 break-words">
                <h5 className="font-medium mb-2">Confidential Transactions</h5>
                <p className="text-sm text-muted-foreground">
                  Liquid's confidential transactions hide the amounts and asset types involved in transactions, enhancing privacy and security. This system uses Pedersen commitments and range proofs to ensure that transactions balance correctly without revealing the actual values, preventing information leakage that could lead to targeted attacks.
                </p>
              </div>
            </div>

            <div className="flex items-start p-4 bg-muted rounded-lg">
              <Users className="h-6 w-6 text-cyan-600 mr-3 mt-1 flex-shrink-0" />
              <div className="min-w-0 flex-1 break-words">
                <h5 className="font-medium mb-2">Threshold Signatures</h5>
                <p className="text-sm text-muted-foreground">
                  Liquid employs threshold signature schemes for federation consensus, requiring a minimum number of functionaries to collaborate to sign blocks. This creates a distributed security model where no single entity can unilaterally control the network.
                </p>
              </div>
            </div>

            <div className="flex items-start p-4 bg-muted rounded-lg">
              <Key className="h-6 w-6 text-cyan-600 mr-3 mt-1 flex-shrink-0" />
              <div className="min-w-0 flex-1 break-words">
                <h5 className="font-medium mb-2">Advanced Signature Algorithms</h5>
                <p className="text-sm text-muted-foreground">
                  Liquid supports advanced signature algorithms, including Schnorr signatures, which provide benefits like signature aggregation and improved security properties. These cryptographic techniques enhance both the security and efficiency of the network.
                </p>
              </div>
            </div>
          </div>
        </Card>

        {/* Peg Security */}
        <Card className="mb-8 p-6">
          <h3 className="mb-4 text-lg font-medium">Peg Security</h3>
          <div className="space-y-4">
            <p className="text-muted-foreground">
              The security of the two-way peg between Bitcoin and Liquid is a critical component of the overall Liquid security model.
            </p>
            
            <div className="p-4 bg-muted/50 rounded-lg">
              <h5 className="font-medium mb-2">Peg-In Security</h5>
              <p className="text-sm text-muted-foreground">
                When bitcoins are pegged into Liquid (converted to L-BTC), they are sent to a federation-controlled multisignature address on the Bitcoin blockchain. The security of these funds relies on the federation's key management practices and the Bitcoin blockchain's security.
              </p>
            </div>

            <div className="p-4 bg-muted/50 rounded-lg">
              <h5 className="font-medium mb-2">Peg-Out Security</h5>
              <p className="text-sm text-muted-foreground">
                Peg-outs (converting L-BTC back to BTC) require approval from the federation. The functionaries verify that the peg-out request is valid and that the corresponding L-BTC has been properly destroyed on the Liquid Network before releasing bitcoins from the federation's multisignature wallet.
              </p>
            </div>

            <div className="p-4 bg-muted/50 rounded-lg">
              <h5 className="font-medium mb-2">Emergency Recovery Procedures</h5>
              <p className="text-sm text-muted-foreground">
                Liquid includes emergency recovery procedures in case the federation becomes unavailable or compromised. These procedures allow for the recovery of bitcoins locked in the peg, ensuring that users' funds aren't permanently lost even in extreme scenarios.
              </p>
            </div>
          </div>
        </Card>

        {/* Security Considerations and Tradeoffs */}
        <Card className="mb-8 p-6">
          <h3 className="mb-4 text-lg font-medium">Security Considerations and Tradeoffs</h3>
          <div className="space-y-4">
            <div className="flex items-start p-4 bg-muted rounded-lg">
              <AlertTriangle className="h-6 w-6 text-amber-500 mr-3 mt-1 flex-shrink-0" />
              <div className="min-w-0 flex-1 break-words">
                <h5 className="font-medium mb-2">Trust Requirements</h5>
                <p className="text-sm text-muted-foreground">
                  The most significant security consideration for Liquid is its trust model. Unlike Bitcoin, which is designed to be trustless, Liquid requires users to trust that a supermajority of federation members will act honestly. This trust requirement is a fundamental tradeoff for Liquid's increased functionality and performance.
                </p>
              </div>
            </div>

            <div className="flex items-start p-4 bg-muted rounded-lg">
              <Shield className="h-6 w-6 text-cyan-600 mr-3 mt-1 flex-shrink-0" />
              <div className="min-w-0 flex-1 break-words">
                <h5 className="font-medium mb-2">Centralization Risks</h5>
                <p className="text-sm text-muted-foreground">
                  Liquid's federated model is more centralized than Bitcoin's open mining model. This introduces potential risks related to censorship, regulatory pressure on federation members, or collusion. These risks are mitigated by the diversity of the federation but remain important considerations.
                </p>
              </div>
            </div>

            <div className="flex items-start p-4 bg-muted rounded-lg">
              <Scale className="h-6 w-6 text-cyan-600 mr-3 mt-1 flex-shrink-0" />
              <div className="min-w-0 flex-1 break-words">
                <h5 className="font-medium mb-2">Security-Functionality Balance</h5>
                <p className="text-sm text-muted-foreground">
                  Liquid strikes a different balance between security, functionality, and performance than Bitcoin. It offers features like confidential transactions, asset issuance, and faster block times, but with a different security model. Users should evaluate whether this balance aligns with their specific needs and risk tolerance.
                </p>
              </div>
            </div>
          </div>
        </Card>

        {/* Security Comparison with Bitcoin */}
        <Card className="mb-8 p-6">
          <h3 className="mb-4 text-lg font-medium">Security Comparison with Bitcoin</h3>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr className="bg-muted">
                  <th className="text-left p-3 border border-border/50">Security Aspect</th>
                  <th className="text-left p-3 border border-border/50">Bitcoin</th>
                  <th className="text-left p-3 border border-border/50">Liquid</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="p-3 border border-border/50 font-medium">Trust Model</td>
                  <td className="p-3 border border-border/50 text-muted-foreground">Trustless, relies on economic incentives and decentralized mining</td>
                  <td className="p-3 border border-border/50 text-muted-foreground">Trust-minimized, relies on federation integrity</td>
                </tr>
                <tr>
                  <td className="p-3 border border-border/50 font-medium">Resistance to Censorship</td>
                  <td className="p-3 border border-border/50 text-muted-foreground">High (due to global, permissionless mining)</td>
                  <td className="p-3 border border-border/50 text-muted-foreground">Moderate (depends on federation diversity)</td>
                </tr>
                <tr>
                  <td className="p-3 border border-border/50 font-medium">Transaction Privacy</td>
                  <td className="p-3 border border-border/50 text-muted-foreground">Limited (transparent blockchain)</td>
                  <td className="p-3 border border-border/50 text-muted-foreground">Strong (confidential transactions)</td>
                </tr>
                <tr>
                  <td className="p-3 border border-border/50 font-medium">Settlement Finality</td>
                  <td className="p-3 border border-border/50 text-muted-foreground">Probabilistic (increases with confirmations)</td>
                  <td className="p-3 border border-border/50 text-muted-foreground">Deterministic (after one block)</td>
                </tr>
                <tr>
                  <td className="p-3 border border-border/50 font-medium">Attack Cost</td>
                  <td className="p-3 border border-border/50 text-muted-foreground">Very high (51% of hash power)</td>
                  <td className="p-3 border border-border/50 text-muted-foreground">Corrupting 2/3+ of federation members</td>
                </tr>
                <tr>
                  <td className="p-3 border border-border/50 font-medium">Regulatory Vulnerability</td>
                  <td className="p-3 border border-border/50 text-muted-foreground">Low (globally distributed)</td>
                  <td className="p-3 border border-border/50 text-muted-foreground">Moderate (known federation members)</td>
                </tr>
              </tbody>
            </table>
          </div>
        </Card>

        {/* Security Best Practices */}
        <Card className="p-6 mb-8">
          <h3 className="mb-4 text-lg font-medium">Security Best Practices for Liquid Users</h3>
          <div className="space-y-4">
            <div className="p-4 bg-muted/50 rounded-lg">
              <h5 className="font-medium mb-2">Understanding Risk Profiles</h5>
              <p className="text-sm text-muted-foreground">
                When using Liquid, it's important to understand its security model and assess whether it aligns with your risk profile. For high-value transactions that prioritize absolute security and censorship resistance over speed and privacy, Bitcoin's main chain may be more appropriate. For transactions that benefit from confidentiality and rapid settlement, Liquid offers compelling advantages.
              </p>
            </div>

            <div className="p-4 bg-muted/50 rounded-lg">
              <h5 className="font-medium mb-2">Private Key Security</h5>
              <p className="text-sm text-muted-foreground">
                As with any blockchain system, securing private keys is essential when using Liquid. Consider using hardware wallets compatible with Liquid assets, employing multisignature setups for high-value holdings, and following general cryptocurrency security best practices.
              </p>
            </div>

            <div className="p-4 bg-muted/50 rounded-lg">
              <h5 className="font-medium mb-2">Transaction Verification</h5>
              <p className="text-sm text-muted-foreground">
                When conducting significant transactions on Liquid, verify that they have been properly confirmed on the network. Although Liquid offers faster finality than Bitcoin, it's still important to ensure transactions are included in valid blocks, especially for high-value transfers.
              </p>
            </div>

            <div className="p-4 bg-muted/50 rounded-lg">
              <h5 className="font-medium mb-2">Asset Verification</h5>
              <p className="text-sm text-muted-foreground">
                When dealing with Liquid assets besides L-BTC, verify the issuer's identity and the legitimacy of the asset. Since Liquid allows anyone to issue assets, it's important to confirm you're dealing with genuine assets from trusted issuers rather than counterfeit tokens.
              </p>
            </div>
          </div>
        </Card>

        {/* Future Security Developments */}
        <Card className="p-6 mb-8">
          <h3 className="mb-4 text-lg font-medium">Future Security Developments</h3>
          <div className="space-y-4">
            <div>
              <h4 className="text-base font-medium mb-2">Ongoing Security Enhancements</h4>
              <p className="text-muted-foreground mb-2">
                The Liquid Network continues to evolve with security improvements and new features. Some areas of ongoing development include:
              </p>
              <ul className="list-disc pl-5 text-muted-foreground space-y-2">
                <li>
                  <span className="font-medium">Federation Expansion:</span> Increasing the size and diversity of the federation to further reduce trust assumptions.
                </li>
                <li>
                  <span className="font-medium">Enhanced Cryptographic Techniques:</span> Implementing newer cryptographic protocols to improve privacy, efficiency, and security.
                </li>
                <li>
                  <span className="font-medium">Improved HSM Technology:</span> Developing more sophisticated hardware security modules with enhanced security properties.
                </li>
                <li>
                  <span className="font-medium">Better Monitoring Tools:</span> Creating improved tools for monitoring federation behavior and ensuring accountability.
                </li>
              </ul>
            </div>
          </div>
        </Card>

        {/* Conclusion */}
        <Card className="p-6">
          <h3 className="mb-4 text-lg font-medium">Practical Understanding</h3>
          <p className="text-muted-foreground mb-4">
            The Liquid Network's security model represents a different approach to blockchain security compared to Bitcoin. Instead of relying on proof-of-work mining and a fully decentralized network, Liquid uses a federated consensus model, specialized hardware, and advanced cryptographic techniques to secure its blockchain.
          </p>
          <p className="text-muted-foreground mb-4">
            This approach enables Liquid to offer features like confidential transactions, asset issuance, and faster settlement, but with different security properties and trust assumptions. Understanding these differences is crucial for users to make informed decisions about when to use Liquid versus Bitcoin's main chain.
          </p>
          <p className="text-muted-foreground mb-6">
            By considering your specific needs for privacy, speed, functionality, and security guarantees, you can determine whether Liquid's security model aligns with your use case. For many applications, especially those related to trading, asset issuance, and situations requiring confidentiality, Liquid offers a compelling balance of security and features.
          </p>
          <div className="mt-4 bg-muted p-4 rounded-lg">
            <h4 className="font-medium flex items-center mb-2">
              <Laptop className="h-5 w-5 mr-2 text-cyan-600" />
              Verify Your Understanding
            </h4>
            <p className="text-sm text-muted-foreground mb-4">
              You now understand Liquid's security model, including its federation-based consensus, hardware security mechanisms, and how its security properties compare to Bitcoin's.
            </p>
            <VerifyCheckbox
              moduleId="liquid-technical"
              sectionId="liquid-security"
              index={0}
              text="I understand Liquid's security model, including its trust assumptions, federation security, and the tradeoffs compared to Bitcoin's security model."
            />
          </div>
        </Card>
      </ModuleContent>
    </ModuleLayout>
  );
}
