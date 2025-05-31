'use client';

import { ModuleLayout } from '@/components/learn/shared/module-layout';
import { ModuleContent } from '@/components/learn/shared/module-content';
import { Card } from '@/components/ui/card';
import { ArrowLeftRight, Lock, Shield, AlertTriangle, Clock, Laptop } from 'lucide-react';
import SatoshiNote from '@/components/learn/shared/satoshi-note';
import VerifyCheckbox from '@/components/learn/shared/verify-checkbox';

export default function PegMechanics() {
  return (
    <ModuleLayout>
      <ModuleContent
        moduleId="liquid-technical"
        sectionId="peg-mechanics"
        checkpoints={1}
        moduleTitle="Peg Mechanics"
        moduleDescription="Understanding how the Bitcoin peg works in Liquid"
        difficulty="Intermediate"
        icon={ArrowLeftRight}
      >
        {/* Introduction */}
        <Card className="mb-8 p-6 border-cyan-600/20">
          <h3 className="mb-4 text-lg font-medium">Introduction to Peg Mechanics</h3>
          <div className="rounded-lg bg-muted/50 p-3 sm:p-4 md:p-5 text-sm text-muted-foreground border border-border/40 mobile-text-container break-words">
            <p>
              The Liquid Network's connection to Bitcoin is maintained through a two-way peg mechanism, which allows BTC to move between the Bitcoin blockchain and the Liquid sidechain. This peg is what gives L-BTC (Liquid Bitcoin) its value and ensures that each L-BTC is backed by an equivalent amount of BTC.
            </p>
            <p className="mt-3">
              Unlike some other sidechains, Liquid's peg mechanism relies on a federation of trusted entities rather than cryptographic proofs. This approach trades some of the trustlessness of Bitcoin for improvements in transaction speed, privacy, and functionality.
            </p>
            <p className="mt-3">
              In this section, we'll explore how the two-way peg works, the security model that underpins it, and the tradeoffs involved in this design.
            </p>
          </div>
        </Card>

        {/* Two-Way Peg Explained */}
        <Card className="mb-8 p-6">
          <h3 className="mb-4 text-lg font-medium">Two-Way Peg Explained</h3>
          <div className="space-y-6">
            <div>
              <h4 className="text-base font-medium mb-2">What is a Two-Way Peg?</h4>
              <p className="text-muted-foreground">
                A two-way peg is a mechanism that allows assets to move between a main blockchain and a sidechain while maintaining a fixed exchange rate. In Liquid's case, the peg maintains a 1:1 ratio between BTC and L-BTC, allowing users to exchange their bitcoin for an equivalent amount of Liquid Bitcoin and vice versa.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="p-4 bg-muted rounded-lg">
                <h5 className="font-medium mb-2 flex items-center">
                  <span className="h-6 w-6 rounded-full bg-cyan-600 text-white flex items-center justify-center text-sm mr-2">
                    1
                  </span>
                  Peg-In Process (BTC → L-BTC)
                </h5>
                <p className="text-sm text-muted-foreground">
                  When a user wants to convert BTC to L-BTC, they send their bitcoin to a special federation-controlled address. Once confirmed, the federation creates an equivalent amount of L-BTC on the Liquid Network and sends it to the user's Liquid address.
                </p>
              </div>

              <div className="p-4 bg-muted rounded-lg">
                <h5 className="font-medium mb-2 flex items-center">
                  <span className="h-6 w-6 rounded-full bg-cyan-600 text-white flex items-center justify-center text-sm mr-2">
                    2
                  </span>
                  Peg-Out Process (L-BTC → BTC)
                </h5>
                <p className="text-sm text-muted-foreground">
                  To convert L-BTC back to BTC, users send their L-BTC to a federation-controlled Liquid address. The federation then destroys (burns) the L-BTC and releases an equivalent amount of BTC from the federation's Bitcoin wallet to the user's specified Bitcoin address.
                </p>
              </div>
            </div>
          </div>
        </Card>

        {/* Federation-Controlled Peg */}
        <Card className="mb-8 p-6">
          <h3 className="mb-4 text-lg font-medium">Federation-Controlled Peg</h3>
          <p className="mb-4 text-muted-foreground">
            Liquid's peg is maintained by a federation of trusted functionaries who collectively control the bitcoin stored in the peg. This approach is different from some other sidechain designs that aim for trustless operation.
          </p>

          <div className="space-y-4">
            <div className="p-4 bg-muted rounded-lg">
              <h5 className="font-medium mb-2">How Federation Control Works</h5>
              <p className="text-sm text-muted-foreground">
                The bitcoin that backs L-BTC is stored in multisignature addresses that require signatures from a threshold of federation members to move funds. This multisignature scheme is implemented using a technology called Blockstream's Dynamic Federations, which allows for members to be added or removed while maintaining custody of the peg funds.
              </p>
            </div>

            <div className="p-4 bg-muted rounded-lg">
              <h5 className="font-medium mb-2">Security Model</h5>
              <p className="text-sm text-muted-foreground">
                The security of the peg relies on the assumption that a majority of federation members will act honestly. Specifically, the federation uses a threshold signature scheme where a supermajority (typically 11 of 15) must sign off on any transaction that moves bitcoin out of the peg.
              </p>
            </div>
          </div>

          <SatoshiNote className="mt-6" pathType="liquid" note="While the federation model introduces an element of trust, it's important to understand that this trust is distributed across multiple independent entities, reducing the risk compared to a single central authority." />
        </Card>

        {/* Peg-In Details */}
        <Card className="mb-8 p-6">
          <h3 className="mb-4 text-lg font-medium">Peg-In Process in Detail</h3>
          <div className="space-y-4">
            <div className="p-4 bg-muted/50 rounded-lg">
              <h5 className="font-medium mb-2 flex items-center">
                <span className="h-6 w-6 rounded-full bg-cyan-600 text-white flex items-center justify-center text-sm mr-2">
                  1
                </span>
                Generate Peg-In Address
              </h5>
              <p className="text-sm text-muted-foreground">
                Users initiate a peg-in by generating a special Bitcoin address using their Liquid wallet. This address is controlled by the federation but contains a commitment to the user's Liquid address.
              </p>
            </div>

            <div className="p-4 bg-muted/50 rounded-lg">
              <h5 className="font-medium mb-2 flex items-center">
                <span className="h-6 w-6 rounded-full bg-cyan-600 text-white flex items-center justify-center text-sm mr-2">
                  2
                </span>
                Send Bitcoin
              </h5>
              <p className="text-sm text-muted-foreground">
                The user sends their bitcoin to the generated address. This transaction is a standard Bitcoin transaction and must be confirmed on the Bitcoin blockchain.
              </p>
            </div>

            <div className="p-4 bg-muted/50 rounded-lg">
              <h5 className="font-medium mb-2 flex items-center">
                <span className="h-6 w-6 rounded-full bg-cyan-600 text-white flex items-center justify-center text-sm mr-2">
                  3
                </span>
                Wait for Confirmations
              </h5>
              <p className="text-sm text-muted-foreground">
                The federation requires 102 confirmations (approximately 17 hours) before processing the peg-in. This extended confirmation period is a security measure to protect against blockchain reorganizations.
              </p>
            </div>

            <div className="p-4 bg-muted/50 rounded-lg">
              <h5 className="font-medium mb-2 flex items-center">
                <span className="h-6 w-6 rounded-full bg-cyan-600 text-white flex items-center justify-center text-sm mr-2">
                  4
                </span>
                Federation Creates L-BTC
              </h5>
              <p className="text-sm text-muted-foreground">
                After sufficient confirmations, the federation creates an equivalent amount of L-BTC on the Liquid Network and sends it to the user's Liquid address that was committed to in the peg-in address.
              </p>
            </div>
          </div>
        </Card>

        {/* Peg-Out Details */}
        <Card className="mb-8 p-6">
          <h3 className="mb-4 text-lg font-medium">Peg-Out Process in Detail</h3>
          <div className="space-y-4">
            <div className="p-4 bg-muted/50 rounded-lg">
              <h5 className="font-medium mb-2 flex items-center">
                <span className="h-6 w-6 rounded-full bg-cyan-600 text-white flex items-center justify-center text-sm mr-2">
                  1
                </span>
                Whitelist Restriction
              </h5>
              <p className="text-sm text-muted-foreground">
                Currently, only federation members or entities that have been whitelisted by the federation can initiate peg-outs directly. Regular users must typically go through a federation member (like an exchange) to perform a peg-out.
              </p>
            </div>

            <div className="p-4 bg-muted/50 rounded-lg">
              <h5 className="font-medium mb-2 flex items-center">
                <span className="h-6 w-6 rounded-full bg-cyan-600 text-white flex items-center justify-center text-sm mr-2">
                  2
                </span>
                Burn L-BTC
              </h5>
              <p className="text-sm text-muted-foreground">
                The initiator sends L-BTC to a special Liquid address that effectively burns the tokens, removing them from circulation. This transaction includes the Bitcoin address where the BTC should be sent.
              </p>
            </div>

            <div className="p-4 bg-muted/50 rounded-lg">
              <h5 className="font-medium mb-2 flex items-center">
                <span className="h-6 w-6 rounded-full bg-cyan-600 text-white flex items-center justify-center text-sm mr-2">
                  3
                </span>
                Federation Signs Transaction
              </h5>
              <p className="text-sm text-muted-foreground">
                The federation members observe the burn transaction on the Liquid Network. They then collectively sign a Bitcoin transaction that sends an equivalent amount of BTC from the federation's multisignature wallet to the specified Bitcoin address.
              </p>
            </div>

            <div className="p-4 bg-muted/50 rounded-lg">
              <h5 className="font-medium mb-2 flex items-center">
                <span className="h-6 w-6 rounded-full bg-cyan-600 text-white flex items-center justify-center text-sm mr-2">
                  4
                </span>
                Receive Bitcoin
              </h5>
              <p className="text-sm text-muted-foreground">
                Once enough federation members have signed, the transaction is broadcast to the Bitcoin network. After it confirms, the user receives their bitcoin, completing the peg-out process.
              </p>
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
                <h5 className="font-medium mb-2">Trust Assumptions</h5>
                <p className="text-sm text-muted-foreground">
                  The primary security consideration for Liquid's peg mechanism is the requirement to trust that a supermajority of the federation will act honestly. While this is a weaker security model than Bitcoin's trustless design, the federation members are chosen to have diverse incentives and jurisdictions to reduce collusion risk.
                </p>
              </div>
            </div>

            <div className="flex items-start p-4 bg-muted rounded-lg">
              <Shield className="h-6 w-6 text-cyan-600 mr-3 mt-1 flex-shrink-0" />
              <div className="min-w-0 flex-1 break-words">
                <h5 className="font-medium mb-2">Emergency Recovery Keys</h5>
                <p className="text-sm text-muted-foreground">
                  To mitigate the risk of federation failures, Liquid implements an emergency recovery mechanism. If the federation were to become non-functional (e.g., due to too many members being unavailable), an emergency procedure involving time-locked recovery keys can be used to recover the peg funds.
                </p>
              </div>
            </div>

            <div className="flex items-start p-4 bg-muted rounded-lg">
              <Lock className="h-6 w-6 text-cyan-600 mr-3 mt-1 flex-shrink-0" />
              <div className="min-w-0 flex-1 break-words">
                <h5 className="font-medium mb-2">Hardware Security</h5>
                <p className="text-sm text-muted-foreground">
                  Federation members use hardware security modules (HSMs) to store their keys, providing physical security against key theft. These HSMs are programmed with specific rules about which transactions they will sign, adding an additional layer of security.
                </p>
              </div>
            </div>

            <div className="flex items-start p-4 bg-muted rounded-lg">
              <Clock className="h-6 w-6 text-cyan-600 mr-3 mt-1 flex-shrink-0" />
              <div className="min-w-0 flex-1 break-words">
                <h5 className="font-medium mb-2">Confirmation Requirements</h5>
                <p className="text-sm text-muted-foreground">
                  The 102-confirmation requirement for peg-ins provides strong security against blockchain reorganizations but comes at the cost of increased peg-in time. This is a deliberate trade-off to enhance the security of the peg mechanism.
                </p>
              </div>
            </div>
          </div>
        </Card>

        {/* Tradeoffs and Future Improvements */}
        <Card className="p-6 mb-8">
          <h3 className="mb-4 text-lg font-medium">Tradeoffs and Future Improvements</h3>
          <div className="space-y-4">
            <div>
              <h4 className="text-base font-medium mb-2">Current Tradeoffs</h4>
              <ul className="list-disc pl-5 text-muted-foreground space-y-2">
                <li>
                  <span className="font-medium">Trust vs. Speed:</span> Liquid trades some of Bitcoin's trustlessness for faster transaction finality and additional features.
                </li>
                <li>
                  <span className="font-medium">Peg-In Delay:</span> The 102-confirmation requirement for peg-ins creates a significant delay but enhances security.
                </li>
                <li>
                  <span className="font-medium">Peg-Out Restrictions:</span> The whitelist requirement for peg-outs limits direct access for most users but helps prevent potential abuse.
                </li>
              </ul>
            </div>

            <div>
              <h4 className="text-base font-medium mb-2">Potential Future Improvements</h4>
              <ul className="list-disc pl-5 text-muted-foreground space-y-2">
                <li>
                  <span className="font-medium">Expanded Peg-Out Access:</span> Work is ongoing to safely expand direct peg-out capabilities to more users while maintaining security.
                </li>
                <li>
                  <span className="font-medium">Reduced Peg-In Times:</span> Research into ways to reduce the confirmation requirement while maintaining adequate security.
                </li>
                <li>
                  <span className="font-medium">Enhanced Federation Models:</span> Exploration of more decentralized federation structures or hybrid approaches that maintain speed while reducing trust requirements.
                </li>
              </ul>
            </div>
          </div>
        </Card>

        {/* Conclusion */}
        <Card className="p-6">
          <h3 className="mb-4 text-lg font-medium">Practical Understanding</h3>
          <p className="text-muted-foreground mb-4">
            The peg mechanism in Liquid represents a specific design choice that prioritizes practical usability, transaction privacy, and speed over absolute trustlessness. Understanding these tradeoffs is essential for users to make informed decisions about when to use Liquid versus the main Bitcoin blockchain.
          </p>
          <p className="text-muted-foreground mb-6">
            For traders and exchanges, the benefits of faster settlement often outweigh the additional trust assumptions, especially given the diverse and transparent nature of the federation. For users who prioritize absolute trustlessness over speed, keeping funds on the main Bitcoin blockchain might be preferable.
          </p>
          <div className="mt-4 bg-muted p-4 rounded-lg">
            <h4 className="font-medium flex items-center mb-2">
              <Laptop className="h-5 w-5 mr-2 text-cyan-600" />
              Verify Your Understanding
            </h4>
            <p className="text-sm text-muted-foreground mb-4">
              You now understand how the Bitcoin peg works in Liquid, including the mechanics of peg-ins and peg-outs, the role of the federation, and the security considerations of this approach.
            </p>
            <VerifyCheckbox
              moduleId="liquid-technical"
              sectionId="peg-mechanics"
              index={0}
              text="I understand how the two-way peg between Bitcoin and Liquid works, including the federation's role in securing the peg."
            />
          </div>
        </Card>
      </ModuleContent>
    </ModuleLayout>
  );
}
