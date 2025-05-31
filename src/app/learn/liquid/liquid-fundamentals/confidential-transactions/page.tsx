'use client';

import { ModuleLayout } from '@/components/learn/shared/module-layout';
import { ModuleContent } from '@/components/learn/shared/module-content';
import { Card } from '@/components/ui/card';
import { Lock, Eye, EyeOff, ShieldCheck, AlertTriangle } from 'lucide-react';
import SatoshiNote from '@/components/learn/shared/satoshi-note';
import VerifyCheckbox from '@/components/learn/shared/verify-checkbox';

export default function ConfidentialTransactions() {
  return (
    <ModuleLayout>
      <ModuleContent
        moduleId="liquid-fundamentals"
        sectionId="confidential-transactions"
        checkpoints={1}
        moduleTitle="Confidential Transactions"
        moduleDescription="Understanding privacy features in the Liquid Network"
        difficulty="Beginner"
        icon={Lock}
      >
        {/* Introduction */}
        <Card className="mb-8 p-6 border-cyan-600/20">
          <h3 className="mb-4 text-lg font-medium">What are Confidential Transactions?</h3>
          <div className="rounded-lg bg-muted/50 p-3 sm:p-4 md:p-5 text-sm text-muted-foreground border border-border/40 mobile-text-container break-words">
            <p>
              Confidential Transactions (CT) is a privacy technology implemented in the Liquid Network that keeps transaction amounts and asset types hidden from third parties while still allowing the network to verify that transactions are valid.
            </p>
            <p className="mt-3">
              Originally proposed by Bitcoin developer Gregory Maxwell, Confidential Transactions use cryptographic techniques to ensure that only the sender and recipient of a transaction know the exact amount being transferred, while everyone else can still verify that no new money was created.
            </p>
            <p className="mt-3">
              In Liquid, Confidential Transactions are enabled by default for all transactions, providing enhanced privacy compared to Bitcoin's completely transparent blockchain.
            </p>
          </div>
        </Card>

        {/* Why Privacy Matters */}
        <Card className="mb-8 p-6">
          <h3 className="mb-4 text-lg font-medium">Why Privacy Matters</h3>
          <p className="leading-relaxed text-muted-foreground">
            Financial privacy is important for various legitimate reasons, especially in the context of businesses and financial institutions:
          </p>
          
          <ul className="mt-4 list-inside list-disc space-y-2 text-muted-foreground">
            <li>Businesses don't want competitors to see their transaction flows or customer relationships</li>
            <li>Traders don't want their positions and strategies visible to market participants</li>
            <li>Exchanges need to protect sensitive information about their hot wallet balances</li>
            <li>Asset issuers may want to protect confidential financial operations</li>
            <li>Users deserve basic financial privacy for their personal transactions</li>
          </ul>
          
          <SatoshiNote className="mt-6" note="Privacy is not about hiding illegal activity, but about protecting sensitive financial information from public view—just as traditional financial systems do. Confidential Transactions provide this privacy while maintaining verifiability." />
        </Card>

        {/* How Confidential Transactions Work */}
        <Card className="mb-8 p-6">
          <h3 className="mb-4 text-lg font-medium">How Confidential Transactions Work</h3>
          <p className="leading-relaxed text-muted-foreground mb-4">
            Confidential Transactions use advanced cryptography to hide transaction amounts while preserving the ability to verify that inputs equal outputs (preventing inflation).
          </p>
          
          <div className="space-y-5">
            <div className="p-4 bg-muted rounded-lg">
              <h5 className="font-medium mb-2 flex items-center">
                <span className="h-6 w-6 rounded-full bg-cyan-600 text-white flex items-center justify-center text-sm mr-2">
                  1
                </span>
                Pedersen Commitments
              </h5>
              <p className="text-sm text-muted-foreground">
                Instead of revealing the actual amount, a transaction contains a cryptographic commitment to the amount. This commitment is created using a mathematical function that combines the transaction amount with a random "blinding factor" (similar to a password).
              </p>
              <p className="mt-2 text-sm text-muted-foreground">
                The commitment mathematically "locks" the real value without revealing it, but still allows the network to verify that the transaction is balanced (inputs = outputs).
              </p>
            </div>

            <div className="p-4 bg-muted rounded-lg">
              <h5 className="font-medium mb-2 flex items-center">
                <span className="h-6 w-6 rounded-full bg-cyan-600 text-white flex items-center justify-center text-sm mr-2">
                  2
                </span>
                Range Proofs
              </h5>
              <p className="text-sm text-muted-foreground">
                To prevent negative amounts (which could create money out of nothing), Confidential Transactions include range proofs. These are cryptographic proofs that demonstrate the committed amount is positive without revealing what that amount is.
              </p>
              <p className="mt-2 text-sm text-muted-foreground">
                Range proofs ensure that all transaction amounts are within a valid range, preventing users from creating negative amounts that could be used to counterfeit assets.
              </p>
            </div>

            <div className="p-4 bg-muted rounded-lg">
              <h5 className="font-medium mb-2 flex items-center">
                <span className="h-6 w-6 rounded-full bg-cyan-600 text-white flex items-center justify-center text-sm mr-2">
                  3
                </span>
                Homomorphic Encryption
              </h5>
              <p className="text-sm text-muted-foreground">
                Confidential Transactions use a property called homomorphic encryption that allows mathematical operations to be performed on encrypted values without decrypting them. This enables the network to verify that the sum of all inputs equals the sum of all outputs without knowing the individual values.
              </p>
            </div>

            <div className="p-4 bg-muted rounded-lg">
              <h5 className="font-medium mb-2 flex items-center">
                <span className="h-6 w-6 rounded-full bg-cyan-600 text-white flex items-center justify-center text-sm mr-2">
                  4
                </span>
                Asset Blinding
              </h5>
              <p className="text-sm text-muted-foreground">
                In addition to hiding amounts, Liquid also blinds asset types. This means that observers cannot tell which asset is being transferred in a transaction (whether it's L-BTC or another Liquid asset), further enhancing privacy.
              </p>
            </div>
          </div>
        </Card>
        
        {/* Privacy vs. Transparency */}
        <Card className="p-6 mb-8">
          <h3 className="mb-4 text-lg font-medium">Privacy vs. Transparency</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="p-4 bg-muted/50 rounded-lg">
              <h5 className="font-medium mb-3 flex items-center text-cyan-600">
                <Eye className="h-5 w-5 mr-2" />
                What Remains Visible
              </h5>
              <ul className="space-y-2 list-disc list-inside text-sm text-muted-foreground">
                <li>Transaction participants (addresses)</li>
                <li>Transaction structure and timing</li>
                <li>Number of inputs and outputs</li>
                <li>Transaction fees</li>
                <li>Block data and confirmation status</li>
              </ul>
            </div>
            
            <div className="p-4 bg-muted/50 rounded-lg">
              <h5 className="font-medium mb-3 flex items-center text-cyan-600">
                <EyeOff className="h-5 w-5 mr-2" />
                What is Hidden
              </h5>
              <ul className="space-y-2 list-disc list-inside text-sm text-muted-foreground">
                <li>Transaction amounts</li>
                <li>Asset types being transferred</li>
                <li>Account balances</li>
                <li>Value of unspent transaction outputs</li>
                <li>Total supply of custom assets</li>
              </ul>
            </div>
          </div>
          
          <div className="mt-6 p-4 bg-muted/50 rounded-lg">
            <h5 className="font-medium mb-2 flex items-center">
              <ShieldCheck className="h-5 w-5 text-cyan-600 mr-2" />
              Selective Disclosure
            </h5>
            <p className="text-sm text-muted-foreground">
              While transactions are confidential by default, Liquid provides mechanisms for selective disclosure. Participants can share "blinding keys" that allow specific third parties to view the details of their transactions. This is useful for:
            </p>
            <ul className="mt-2 space-y-1 list-disc list-inside text-sm text-muted-foreground">
              <li>Regulatory compliance and auditing</li>
              <li>Proving transaction details to specific parties</li>
              <li>Allowing trusted partners to verify transaction amounts</li>
              <li>Exchange reporting and verification processes</li>
            </ul>
          </div>
        </Card>

        {/* Benefits and Limitations */}
        <Card className="p-6 mb-8">
          <h3 className="mb-4 text-lg font-medium">Benefits and Limitations</h3>
          
          <div className="grid grid-cols-1 gap-6">
            <div className="p-4 bg-muted/50 rounded-lg">
              <h5 className="font-medium mb-3 flex items-center text-green-600">
                Benefits of Confidential Transactions
              </h5>
              <ul className="space-y-2 list-disc list-inside text-sm text-muted-foreground">
                <li><span className="font-medium">Business Privacy</span>: Companies can transact without revealing sensitive financial information</li>
                <li><span className="font-medium">Protection of Trading Strategies</span>: Traders can move funds without signaling their intentions to the market</li>
                <li><span className="font-medium">Security Enhancement</span>: Exchanges can protect their hot wallet balances from being targeted</li>
                <li><span className="font-medium">Fungibility Improvement</span>: All units of an asset are indistinguishable, improving fungibility</li>
                <li><span className="font-medium">Competitive Advantage</span>: Users can conduct business without competitors analyzing their transaction patterns</li>
              </ul>
            </div>
            
            <div className="p-4 bg-muted/50 rounded-lg">
              <h5 className="font-medium mb-3 flex items-center text-amber-600">
                <AlertTriangle className="h-5 w-5 mr-2" />
                Limitations and Considerations
              </h5>
              <ul className="space-y-2 list-disc list-inside text-sm text-muted-foreground">
                <li><span className="font-medium">Transaction Size</span>: Confidential Transactions are larger than transparent ones, requiring more blockchain space</li>
                <li><span className="font-medium">Computational Overhead</span>: Verifying confidential transactions requires more computational resources</li>
                <li><span className="font-medium">Address Visibility</span>: While amounts are hidden, transaction participants (addresses) remain visible</li>
                <li><span className="font-medium">Complexity</span>: The cryptography behind CTs is complex and requires careful implementation</li>
                <li><span className="font-medium">Supply Auditability</span>: For custom assets, verifying the total supply requires additional mechanisms</li>
              </ul>
            </div>
          </div>
        </Card>
        
        {/* Comparison with Other Privacy Technologies */}
        <Card className="p-6 mb-8">
          <h3 className="mb-4 text-lg font-medium">Comparison with Other Privacy Technologies</h3>
          
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b">
                  <th className="py-2 px-3 text-left">Technology</th>
                  <th className="py-2 px-3 text-left">Privacy Level</th>
                  <th className="py-2 px-3 text-left">What's Hidden</th>
                  <th className="py-2 px-3 text-left">Trade-offs</th>
                </tr>
              </thead>
              <tbody className="text-muted-foreground">
                <tr className="border-b">
                  <td className="py-2 px-3 font-medium">Liquid CT</td>
                  <td className="py-2 px-3">Medium-High</td>
                  <td className="py-2 px-3">Amounts, Asset Types</td>
                  <td className="py-2 px-3">Larger transactions, addresses visible</td>
                </tr>
                <tr className="border-b">
                  <td className="py-2 px-3 font-medium">Bitcoin (no privacy)</td>
                  <td className="py-2 px-3">Low</td>
                  <td className="py-2 px-3">Nothing</td>
                  <td className="py-2 px-3">Full transparency, easy verification</td>
                </tr>
                <tr className="border-b">
                  <td className="py-2 px-3 font-medium">CoinJoin (Bitcoin)</td>
                  <td className="py-2 px-3">Low-Medium</td>
                  <td className="py-2 px-3">Input-output linkage</td>
                  <td className="py-2 px-3">Requires multiple participants, amounts visible</td>
                </tr>
                <tr className="border-b">
                  <td className="py-2 px-3 font-medium">Zero-Knowledge Proofs</td>
                  <td className="py-2 px-3">High</td>
                  <td className="py-2 px-3">Addresses, amounts, transaction logic</td>
                  <td className="py-2 px-3">Complex setup, computational overhead</td>
                </tr>
                <tr>
                  <td className="py-2 px-3 font-medium">Ring Signatures</td>
                  <td className="py-2 px-3">Medium-High</td>
                  <td className="py-2 px-3">Sender identity (via decoy inputs)</td>
                  <td className="py-2 px-3">Larger transactions, statistical analysis risks</td>
                </tr>
              </tbody>
            </table>
          </div>
          
          <SatoshiNote className="mt-6" note="Confidential Transactions provide a balanced approach to privacy: they hide the most sensitive information (amounts and asset types) while maintaining a manageable transaction size and computational overhead. This makes them well-suited for a sidechain like Liquid that focuses on financial privacy for businesses and traders." />
        </Card>
        
        {/* Verification Checkpoint */}
        <div className="mt-6">
          <VerifyCheckbox
            moduleId="liquid-fundamentals"
            sectionId="confidential-transactions"
            verificationId="confidential-transactions"
            label="I understand how Confidential Transactions work and their benefits for privacy"
          />
        </div>
      </ModuleContent>
    </ModuleLayout>
  );
}