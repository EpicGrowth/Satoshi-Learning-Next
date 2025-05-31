'use client';

import { ModuleLayout } from '@/components/learn/shared/module-layout';
import { ModuleContent } from '@/components/learn/shared/module-content';
import { Card } from '@/components/ui/card';
import { Code, Cpu, Fingerprint, Layers, Lock, FileCode, Laptop } from 'lucide-react';
import SatoshiNote from '@/components/learn/shared/satoshi-note';
import VerifyCheckbox from '@/components/learn/shared/verify-checkbox';

export default function ScriptExtensions() {
  return (
    <ModuleLayout>
      <ModuleContent
        moduleId="liquid-technical"
        sectionId="script-extensions"
        checkpoints={1}
        moduleTitle="Script Extensions"
        moduleDescription="Exploring Liquid's extended scripting capabilities"
        difficulty="Intermediate"
        icon={Code}
      >
        {/* Introduction */}
        <Card className="mb-8 p-6 border-cyan-600/20">
          <h3 className="mb-4 text-lg font-medium">Introduction to Liquid Script Extensions</h3>
          <div className="rounded-lg bg-muted/50 p-3 sm:p-4 md:p-5 text-sm text-muted-foreground border border-border/40 mobile-text-container break-words">
            <p>
              Bitcoin's Script language enables programmable transactions by allowing users to set conditions for spending outputs. While powerful, Bitcoin Script is intentionally limited for security reasons. The Liquid Network builds on Bitcoin's foundation but extends the Script language with additional functionality to support its advanced features.
            </p>
            <p className="mt-3">
              These extensions enable Liquid's confidential transactions, asset issuance capabilities, and more complex smart contract functionality while maintaining compatibility with Bitcoin's transaction model.
            </p>
            <p className="mt-3">
              In this section, we'll explore how Liquid extends Bitcoin Script and what these extensions enable for developers and users of the Liquid Network.
            </p>
          </div>
        </Card>

        {/* Bitcoin Script Refresher */}
        <Card className="mb-8 p-6">
          <h3 className="mb-4 text-lg font-medium">Bitcoin Script Refresher</h3>
          <div className="space-y-6">
            <div>
              <h4 className="text-base font-medium mb-2">Bitcoin's Scripting System</h4>
              <p className="text-muted-foreground">
                Before diving into Liquid's extensions, let's briefly recap Bitcoin's Script language. Bitcoin Script is a stack-based, non-Turing-complete language specifically designed for creating spending conditions on transaction outputs.
              </p>
            </div>

            <div className="p-4 bg-muted rounded-lg">
              <h5 className="font-medium mb-2">Key Properties of Bitcoin Script</h5>
              <ul className="list-disc pl-5 text-muted-foreground space-y-2">
                <li>
                  <span className="font-medium">Stack-based:</span> Operations manipulate data on a stack.
                </li>
                <li>
                  <span className="font-medium">Non-Turing-complete:</span> Deliberately limited to prevent infinite loops and ensure script execution terminates.
                </li>
                <li>
                  <span className="font-medium">No state:</span> Scripts cannot store data between executions.
                </li>
                <li>
                  <span className="font-medium">Limited opcodes:</span> A restricted set of operations for security reasons.
                </li>
                <li>
                  <span className="font-medium">locking/unlocking:</span> Outputs have locking scripts (scriptPubKey) and inputs have unlocking scripts (scriptSig).
                </li>
              </ul>
            </div>

            <div className="p-4 bg-muted rounded-lg">
              <h5 className="font-medium mb-2">Common Bitcoin Script Types</h5>
              <ul className="list-disc pl-5 text-muted-foreground space-y-2">
                <li>
                  <span className="font-medium">P2PKH (Pay to Public Key Hash):</span> Standard address payments requiring a signature from the owner of a specific public key.
                </li>
                <li>
                  <span className="font-medium">P2SH (Pay to Script Hash):</span> Allows complex scripts to be referenced by a hash, with requirements revealed when spending.
                </li>
                <li>
                  <span className="font-medium">Multisig:</span> Requires M-of-N signatures to spend (e.g., 2-of-3 requires any two signatures from three possible signers).
                </li>
                <li>
                  <span className="font-medium">Timelock:</span> Restricts spending until a specific time or block height is reached.
                </li>
              </ul>
            </div>
          </div>
          <SatoshiNote className="mt-6" pathType="liquid" note="Bitcoin Script's intentional limitations are a security feature, not a bug. By restricting the language's capabilities, Bitcoin minimizes the attack surface and potential for vulnerabilities." />
        </Card>

        {/* Liquid's Script Extensions */}
        <Card className="mb-8 p-6">
          <h3 className="mb-4 text-lg font-medium">Core Script Extensions in Liquid</h3>
          <p className="mb-4 text-muted-foreground">
            Liquid builds upon Bitcoin's Script language by adding new opcodes and capabilities that support its advanced features while maintaining the secure, stack-based execution model.
          </p>

          <div className="space-y-4">
            <div className="flex items-start p-4 bg-muted rounded-lg">
              <Lock className="h-6 w-6 text-cyan-600 mr-3 mt-1 flex-shrink-0" />
              <div className="min-w-0 flex-1 break-words">
                <h5 className="font-medium mb-2">Confidential Transaction Support</h5>
                <p className="text-sm text-muted-foreground">
                  Liquid adds opcodes and script types specifically designed to support Confidential Transactions. These extensions allow for the verification of encrypted transaction amounts and asset types using cryptographic proofs, ensuring that transactions balance correctly without revealing the actual values.
                </p>
              </div>
            </div>

            <div className="flex items-start p-4 bg-muted rounded-lg">
              <Layers className="h-6 w-6 text-cyan-600 mr-3 mt-1 flex-shrink-0" />
              <div className="min-w-0 flex-1 break-words">
                <h5 className="font-medium mb-2">Asset Issuance and Transfer</h5>
                <p className="text-sm text-muted-foreground">
                  Liquid introduces scripting capabilities for issuing and transferring different asset types beyond bitcoin. These extensions allow for the creation, reissuance, and management of user-defined assets on the Liquid Network.
                </p>
              </div>
            </div>

            <div className="flex items-start p-4 bg-muted rounded-lg">
              <Fingerprint className="h-6 w-6 text-cyan-600 mr-3 mt-1 flex-shrink-0" />
              <div className="min-w-0 flex-1 break-words">
                <h5 className="font-medium mb-2">Advanced Signature Types</h5>
                <p className="text-sm text-muted-foreground">
                  Liquid supports additional signature types and validation mechanisms, including support for Schnorr signatures (before they were available in Bitcoin). These provide more efficient verification and enable more complex signature-based conditions.
                </p>
              </div>
            </div>

            <div className="flex items-start p-4 bg-muted rounded-lg">
              <Cpu className="h-6 w-6 text-cyan-600 mr-3 mt-1 flex-shrink-0" />
              <div className="min-w-0 flex-1 break-words">
                <h5 className="font-medium mb-2">Expanded Opcodes</h5>
                <p className="text-sm text-muted-foreground">
                  Liquid activates some opcodes that were disabled in Bitcoin, providing additional functionality for smart contracts. These include bitwise operations, advanced flow control, and numeric operations that enable more complex logical conditions.
                </p>
              </div>
            </div>
          </div>
        </Card>

        {/* Technical Details: Confidential Transactions */}
        <Card className="mb-8 p-6">
          <h3 className="mb-4 text-lg font-medium">Technical Details: Confidential Transactions</h3>
          <div className="space-y-4">
            <p className="text-muted-foreground">
              Confidential Transactions (CT) in Liquid require significant extensions to Bitcoin's script system to handle blinded values and assets while ensuring transaction validity.
            </p>
            
            <div className="p-4 bg-muted/50 rounded-lg">
              <h5 className="font-medium mb-2">Commitment Schemes</h5>
              <p className="text-sm text-muted-foreground">
                Liquid's script extensions include support for Pedersen commitments, which allow a value to be committed to (hidden) while still enabling mathematical operations on that value. The transaction amounts and asset types are represented as these commitments rather than as plaintext values.
              </p>
              <div className="mt-3 p-3 bg-muted/80 rounded border border-border/40 text-xs font-mono overflow-x-auto">
                # Simplified example of a Pedersen commitment<br/>
                Commitment = vG + rH<br/>
                where:<br/>
                - v is the value being hidden (e.g., transaction amount)<br/>
                - r is a random blinding factor<br/>
                - G and H are generator points on the elliptic curve
              </div>
            </div>

            <div className="p-4 bg-muted/50 rounded-lg">
              <h5 className="font-medium mb-2">Rangeproofs</h5>
              <p className="text-sm text-muted-foreground">
                Liquid script includes support for rangeproofs, which are zero-knowledge proofs that demonstrate a committed value lies within a specific range (typically proving the value is positive) without revealing the actual value. These are critical for preventing inflation bugs in confidential transactions.
              </p>
            </div>

            <div className="p-4 bg-muted/50 rounded-lg">
              <h5 className="font-medium mb-2">Confidential Assets</h5>
              <p className="text-sm text-muted-foreground">
                Liquid extends confidential transactions to also hide asset types. Script extensions support asset surjection proofs, which prove that a blinded asset commitment represents one of a set of possible asset types without revealing which one.
              </p>
            </div>
          </div>
        </Card>

        {/* Technical Details: Asset Issuance */}
        <Card className="mb-8 p-6">
          <h3 className="mb-4 text-lg font-medium">Technical Details: Asset Issuance</h3>
          <div className="space-y-4">
            <p className="text-muted-foreground">
              Liquid's asset issuance capabilities require script extensions to handle the creation, reissuance, and transfer of multiple asset types within a single blockchain.
            </p>
            
            <div className="p-4 bg-muted/50 rounded-lg">
              <h5 className="font-medium mb-2">Asset Issuance Outputs</h5>
              <p className="text-sm text-muted-foreground">
                Liquid adds special script types for asset issuance. When a new asset is issued, the transaction creates both the asset itself and an optional reissuance token that gives the holder the ability to issue more of the asset in the future.
              </p>
              <div className="mt-3 p-3 bg-muted/80 rounded border border-border/40 text-xs font-mono overflow-x-auto">
                # Example of asset issuance structure<br/>
                OP_ISSUEASSET         # Opcode that indicates asset issuance<br/>
                &lt;asset_amount&gt;      # Amount of the asset to issue<br/>
                &lt;asset_blinding_nonce&gt; # Nonce for blinding<br/>
                &lt;entropy&gt;           # Entropy used to generate asset ID<br/>
                OP_DUP OP_HASH160 &lt;issuer_pubkey_hash&gt; OP_EQUALVERIFY OP_CHECKSIG
              </div>
            </div>

            <div className="p-4 bg-muted/50 rounded-lg">
              <h5 className="font-medium mb-2">Reissuance Tokens</h5>
              <p className="text-sm text-muted-foreground">
                The script system includes support for reissuance tokens, which are special assets that grant the holder the authority to issue more of a previously created asset. These tokens can be transferred like any other asset, allowing for flexible control of asset supply.
              </p>
            </div>

            <div className="p-4 bg-muted/50 rounded-lg">
              <h5 className="font-medium mb-2">Asset ID Generation</h5>
              <p className="text-sm text-muted-foreground">
                The script system calculates asset IDs deterministically based on the issuance transaction details. This ensures that each asset has a unique identifier that can be verified by all network participants.
              </p>
              <div className="mt-3 p-3 bg-muted/80 rounded border border-border/40 text-xs font-mono overflow-x-auto">
                # Simplified asset ID generation<br/>
                asset_id = SHA256(entropy || outpoint)
              </div>
            </div>
          </div>
        </Card>

        {/* Advanced Script Features */}
        <Card className="mb-8 p-6">
          <h3 className="mb-4 text-lg font-medium">Advanced Script Features</h3>
          <div className="space-y-4">
            <div className="flex items-start p-4 bg-muted rounded-lg">
              <FileCode className="h-6 w-6 text-cyan-600 mr-3 mt-1 flex-shrink-0" />
              <div className="min-w-0 flex-1 break-words">
                <h5 className="font-medium mb-2">Enhanced Multisignature</h5>
                <p className="text-sm text-muted-foreground">
                  Liquid includes improvements to Bitcoin's multisignature capabilities, supporting more efficient implementations and potentially larger numbers of signers. These enhancements make complex multi-party contracts more practical.
                </p>
                <div className="mt-3 p-3 bg-muted/80 rounded border border-border/40 text-xs font-mono overflow-x-auto">
                  # Traditional Bitcoin multisig<br/>
                  OP_2 &lt;pubkey1&gt; &lt;pubkey2&gt; &lt;pubkey3&gt; OP_3 OP_CHECKMULTISIG<br/><br/>
                  # Liquid supports more efficient signature aggregation<br/>
                  # for similar functionality
                </div>
              </div>
            </div>

            <div className="flex items-start p-4 bg-muted rounded-lg">
              <Lock className="h-6 w-6 text-cyan-600 mr-3 mt-1 flex-shrink-0" />
              <div className="min-w-0 flex-1 break-words">
                <h5 className="font-medium mb-2">Advanced Time Locks</h5>
                <p className="text-sm text-muted-foreground">
                  Liquid supports enhanced timelock functionality, allowing for more complex time-based conditions in scripts. These can be used for creating escrow arrangements, time-delayed transactions, and other advanced contract types.
                </p>
              </div>
            </div>

            <div className="flex items-start p-4 bg-muted rounded-lg">
              <Cpu className="h-6 w-6 text-cyan-600 mr-3 mt-1 flex-shrink-0" />
              <div className="min-w-0 flex-1 break-words">
                <h5 className="font-medium mb-2">Additional Opcodes</h5>
                <p className="text-sm text-muted-foreground">
                  Liquid activates several opcodes that are disabled in Bitcoin, including:</p>
                  <ul className="list-disc pl-5 text-sm text-muted-foreground space-y-1 mt-2">
                    <li><code className="text-xs bg-muted/80 p-1 rounded">OP_CAT</code>: Concatenates two strings</li>
                    <li><code className="text-xs bg-muted/80 p-1 rounded">OP_AND</code>, <code className="text-xs bg-muted/80 p-1 rounded">OP_OR</code>, <code className="text-xs bg-muted/80 p-1 rounded">OP_XOR</code>: Bitwise operations</li>
                    <li><code className="text-xs bg-muted/80 p-1 rounded">OP_DIV</code>, <code className="text-xs bg-muted/80 p-1 rounded">OP_MOD</code>: More advanced arithmetic</li>
                  </ul>
                <p className="text-sm text-muted-foreground mt-2">
                  These opcodes enable more complex logic and data manipulation within scripts.
                </p>
              </div>
            </div>
          </div>
        </Card>

        {/* Practical Applications */}
        <Card className="p-6 mb-8">
          <h3 className="mb-4 text-lg font-medium">Practical Applications</h3>
          <div className="space-y-4">
            <div className="p-4 bg-muted/50 rounded-lg">
              <h5 className="font-medium mb-2">Asset Issuance and Management</h5>
              <p className="text-sm text-muted-foreground">
                Liquid's script extensions enable the creation and management of various digital assets, including:
              </p>
              <ul className="list-disc pl-5 text-sm text-muted-foreground space-y-1 mt-2">
                <li>Security tokens representing traditional financial assets</li>
                <li>Stablecoins pegged to fiat currencies</li>
                <li>Utility tokens for specific applications or ecosystems</li>
                <li>Non-fungible tokens (NFTs) representing unique digital items</li>
              </ul>
              <p className="text-sm text-muted-foreground mt-2">
                The asset issuance capabilities allow issuers to control whether more of an asset can be created in the future (by generating reissuance tokens) or to make the supply fixed (by not creating reissuance tokens).
              </p>
            </div>

            <div className="p-4 bg-muted/50 rounded-lg">
              <h5 className="font-medium mb-2">Privacy-Enhanced Transactions</h5>
              <p className="text-sm text-muted-foreground">
                Liquid's confidential transaction script extensions enable various privacy-focused use cases:
              </p>
              <ul className="list-disc pl-5 text-sm text-muted-foreground space-y-1 mt-2">
                <li>Private trading of digital assets without revealing amounts or asset types</li>
                <li>Confidential transfer of sensitive financial instruments</li>
                <li>Enhanced privacy for businesses that don't want to reveal their transaction volumes</li>
              </ul>
            </div>

            <div className="p-4 bg-muted/50 rounded-lg">
              <h5 className="font-medium mb-2">Advanced Smart Contracts</h5>
              <p className="text-sm text-muted-foreground">
                The expanded scripting capabilities allow for more sophisticated smart contracts:
              </p>
              <ul className="list-disc pl-5 text-sm text-muted-foreground space-y-1 mt-2">
                <li>Time-locked escrow arrangements with multiple conditions</li>
                <li>Complex multi-signature schemes for corporate governance</li>
                <li>Atomic swaps between different Liquid assets</li>
                <li>Simple covenant-like restrictions on how assets can be spent</li>
              </ul>
            </div>
          </div>
        </Card>

        {/* Comparing with Other Smart Contract Platforms */}
        <Card className="mb-8 p-6">
          <h3 className="mb-4 text-lg font-medium">Comparison with Other Smart Contract Platforms</h3>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr className="bg-muted">
                  <th className="text-left p-3 border border-border/50">Feature</th>
                  <th className="text-left p-3 border border-border/50">Liquid</th>
                  <th className="text-left p-3 border border-border/50">Bitcoin</th>
                  <th className="text-left p-3 border border-border/50">Ethereum</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="p-3 border border-border/50 font-medium">Scripting Model</td>
                  <td className="p-3 border border-border/50 text-muted-foreground">Extended Bitcoin Script</td>
                  <td className="p-3 border border-border/50 text-muted-foreground">Bitcoin Script</td>
                  <td className="p-3 border border-border/50 text-muted-foreground">Turing-complete EVM</td>
                </tr>
                <tr>
                  <td className="p-3 border border-border/50 font-medium">Smart Contract Complexity</td>
                  <td className="p-3 border border-border/50 text-muted-foreground">Medium</td>
                  <td className="p-3 border border-border/50 text-muted-foreground">Limited</td>
                  <td className="p-3 border border-border/50 text-muted-foreground">High</td>
                </tr>
                <tr>
                  <td className="p-3 border border-border/50 font-medium">Privacy Features</td>
                  <td className="p-3 border border-border/50 text-muted-foreground">Strong (Confidential Transactions)</td>
                  <td className="p-3 border border-border/50 text-muted-foreground">Limited</td>
                  <td className="p-3 border border-border/50 text-muted-foreground">Limited</td>
                </tr>
                <tr>
                  <td className="p-3 border border-border/50 font-medium">Asset Issuance</td>
                  <td className="p-3 border border-border/50 text-muted-foreground">Native Support</td>
                  <td className="p-3 border border-border/50 text-muted-foreground">Limited (Colored Coins)</td>
                  <td className="p-3 border border-border/50 text-muted-foreground">ERC Standards (e.g., ERC-20)</td>
                </tr>
                <tr>
                  <td className="p-3 border border-border/50 font-medium">Security Model</td>
                  <td className="p-3 border border-border/50 text-muted-foreground">Federated Consensus</td>
                  <td className="p-3 border border-border/50 text-muted-foreground">Proof of Work</td>
                  <td className="p-3 border border-border/50 text-muted-foreground">Proof of Stake</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="mt-4 text-sm text-muted-foreground">
            Liquid occupies a middle ground between Bitcoin's highly secure but limited scripting and Ethereum's flexible but more complex and potentially risky smart contract platform. This makes it particularly well-suited for financial applications that require some programmability along with strong privacy and security guarantees.
          </p>
        </Card>

        {/* Development Resources */}
        <Card className="p-6 mb-8">
          <h3 className="mb-4 text-lg font-medium">Development Resources</h3>
          <div className="space-y-4">
            <div className="p-4 bg-muted rounded-lg">
              <h5 className="font-medium mb-2">Elements Project</h5>
              <p className="text-sm text-muted-foreground">
                Liquid is built on Elements, an open-source blockchain platform that extends Bitcoin's functionality. The Elements project documentation provides detailed information about Liquid's script extensions and how to use them in development.
              </p>
            </div>

            <div className="p-4 bg-muted rounded-lg">
              <h5 className="font-medium mb-2">Libraries and SDKs</h5>
              <p className="text-sm text-muted-foreground">
                Several development libraries support Liquid's extended scripting capabilities:
              </p>
              <ul className="list-disc pl-5 text-sm text-muted-foreground space-y-1 mt-2">
                <li>Liquid-specific JavaScript libraries</li>
                <li>Extended versions of Bitcoin development tools</li>
                <li>Asset issuance and management tools</li>
              </ul>
            </div>

            <div className="p-4 bg-muted rounded-lg">
              <h5 className="font-medium mb-2">Testing Networks</h5>
              <p className="text-sm text-muted-foreground">
                Developers can experiment with Liquid's script extensions on the Elements testnet before deploying to the main Liquid Network. This provides a safe environment to test advanced scripting functionality without risking real assets.
              </p>
            </div>
          </div>
        </Card>

        {/* Conclusion */}
        <Card className="p-6">
          <h3 className="mb-4 text-lg font-medium">Practical Understanding</h3>
          <p className="text-muted-foreground mb-4">
            Liquid's script extensions represent a significant enhancement to Bitcoin's capabilities while maintaining a similar security and execution model. These extensions enable Liquid's key features: confidential transactions, asset issuance, and more complex smart contracts.
          </p>
          <p className="text-muted-foreground mb-6">
            For developers familiar with Bitcoin, Liquid offers an expanded toolkit without requiring a complete paradigm shift. For users, these script extensions enable new use cases around privacy, asset issuance, and programmable transactions that aren't possible on the main Bitcoin blockchain.
          </p>
          <div className="mt-4 bg-muted p-4 rounded-lg">
            <h4 className="font-medium flex items-center mb-2">
              <Laptop className="h-5 w-5 mr-2 text-cyan-600" />
              Verify Your Understanding
            </h4>
            <p className="text-sm text-muted-foreground mb-4">
              You now understand how Liquid extends Bitcoin's scripting capabilities to enable confidential transactions, asset issuance, and more complex smart contracts.
            </p>
            <VerifyCheckbox
              moduleId="liquid-technical"
              sectionId="script-extensions"
              index={0}
              text="I understand how Liquid extends Bitcoin Script with additional opcodes and functionality to support its advanced features."
            />
          </div>
        </Card>
      </ModuleContent>
    </ModuleLayout>
  );
}
