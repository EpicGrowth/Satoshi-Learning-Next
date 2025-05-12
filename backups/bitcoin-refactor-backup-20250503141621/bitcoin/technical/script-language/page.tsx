'use client';

import React from 'react';
import { ModuleLayout } from '@/components/learn/shared/module-layout';
import { ModuleContent } from '@/components/learn/shared/module-content';
import { ModuleMetadata } from '@/components/learn/shared/module-metadata';
import type { ModuleMetadata as ModuleMetadataType } from '@/components/learn/shared/module-metadata';
import { Card } from '@/components/ui/card';
import {
  KeyRound, Layers, ShieldCheck, GitCompare, FileCode, ArrowRightLeft, Code, Fingerprint,
  AlertTriangle, MessagesSquare, Copy, ExternalLink, Check, X, Lock
} from 'lucide-react';
import SatoshiQuote from '@/components/learn/shared/satoshi-quote';
import VerifyCheckbox from '@/components/learn/shared/verify-checkbox';

const moduleId = 'technical';
const sectionId = 'script-language';

const moduleInfo: ModuleMetadataType = {
  title: 'Script Language | Bitcoin',
  description: "Understanding Bitcoin Script, the powerful stack-based language governing transaction validation.",
  keywords: ['bitcoin', 'script', 'scriptPubKey', 'scriptSig', 'opcode', 'stack language', 'transaction validation', 'p2pkh', 'p2sh', 'segwit', 'taproot', 'timelock', 'multisig'],
  canonical: `/learn/bitcoin/${sectionId}`,
  ogImage: '/images/og/bitcoin-script-language.png', 
  lastUpdated: '2024-07-29',
  difficulty: 'Advanced',
  timeToComplete: '45 minutes', 
  prerequisites: ['economic-impact'], 
};

export default function ScriptLanguagePage() {
  return (
    <ModuleMetadata metadata={moduleInfo}>
      <ModuleLayout>
        <ModuleContent
          moduleId={moduleId}
          sectionId={sectionId}
          checkpoints={1} 
          moduleTitle="Script Language"
          moduleDescription="Bitcoin's powerful transaction programming language"
          difficulty={moduleInfo.difficulty}
          icon={KeyRound} 
        >
          <div className="space-y-8">
            {/* A Note from Satoshi */}
            <div className="bg-muted/50 p-6 rounded-lg border border-border/50">
              <h2 className="text-xl font-bold mb-4">A Note from Satoshi</h2>
              <div className="prose dark:prose-invert max-w-none">
                <p>
                  Long before I released Bitcoin, I recognized that a digital currency system needed more
                  than just basic transactions. It would require a flexible, programmable foundation that
                  could support evolving use cases while maintaining security and determinism.
                </p>
                <p>
                  The scripting system in Bitcoin wasn't an afterthought—it was a deliberate design decision.
                  I chose a stack-based language with simple operations, drawing inspiration from Forth and other
                  minimalist programming languages. This approach allowed for verification without the security
                  risks of Turing-completeness.
                </p>
                <p>
                  Script is purposefully limited. It can't access the blockchain, previous transactions, or external
                  data. It only answers one question: "Are the conditions for spending these coins satisfied?" This
                  constraint is a feature, not a limitation. By narrowly focusing on validation logic, Script keeps
                  the system secure and predictable while still enabling remarkable flexibility.
                </p>
                <p>
                  While many consider Bitcoin Script arcane or limited today, I built it with an eye to the future.
                  Most of its capabilities remain dormant, waiting for creative minds to unlock new ways of defining
                  ownership and conditional transfers that go far beyond what traditional financial systems can accomplish.
                </p>
              </div>
            </div>

            {/* Quote */}
            <SatoshiQuote
              quote="The design supports a tremendous variety of possible transaction types that I designed in from the beginning. Anyone can create new transaction types by programming Bitcoin Script."
              date="June 17, 2010"
              source="BitcoinTalk Forum"
              sourceUrl="https://bitcointalk.org/index.php?topic=195.msg1611#msg1611"
            />

            {/* Technical Foundation Section */}
            <div className="bg-card p-6 rounded-lg border border-border">
              <h2 className="text-xl font-bold mb-4">Technical Foundation</h2>
              <div className="space-y-6">
                <div className="prose dark:prose-invert max-w-none">
                  <p>
                    Bitcoin Script is a stack-based, non-Turing-complete language designed specifically for
                    defining conditions that must be satisfied to spend Bitcoin. Unlike conventional programming
                    languages, Script doesn't use variables, loops, or functions—it operates purely through stack
                    manipulations and predefined operations.
                  </p>
                </div>

                <div className="bg-muted p-4 rounded-lg">
                  <h3 className="font-semibold text-lg mb-3">Execution Model</h3>
                  <p className="text-muted-foreground mb-3">
                    Bitcoin Script uses a simple but powerful execution model:
                  </p>
                  <ul className="list-disc pl-5 space-y-1.5 text-muted-foreground">
                    <li>Scripts execute on a stack-based virtual machine</li>
                    <li>Each operation (opcode) manipulates data on a single stack</li>
                    <li>Data is processed in postfix notation (operators follow operands)</li>
                    <li>Script execution is deterministic with no side effects</li>
                    <li>A script succeeds if it completes without errors and leaves TRUE on the stack</li>
                  </ul>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="bg-muted p-6 rounded-lg">
                    <h4 className="font-medium mb-4 flex items-center">
                      <KeyRound className="h-5 w-5 text-primary mr-2" />
                      Stack-Based Language
                    </h4>
                    <p className="text-sm text-muted-foreground mb-2">
                      Bitcoin Script relies on a data structure called a stack, where elements can only be pushed onto or popped from the top:
                    </p>
                    <div className="bg-background p-3 rounded-lg text-xs font-mono">
                      <pre><code>{`// Stack operations example:
1 2 OP_ADD

Stack evolution:
[] -> [1] -> [1, 2] -> [3]`}</code></pre>
                    </div>
                  </div>

                  <div className="bg-muted p-6 rounded-lg">
                    <h4 className="font-medium mb-4 flex items-center">
                      <Lock className="h-5 w-5 text-primary mr-2" />
                      Locking Script (scriptPubKey)
                    </h4>
                    <p className="text-sm text-muted-foreground">
                      Defines the conditions required to spend the bitcoin. Part of the transaction output.
                    </p>
                    <div className="mt-2 bg-background p-2 rounded-lg">
                      <p className="text-xs text-muted-foreground">Example: "Provide a public key hashing to X and a valid signature."</p>
                    </div>
                  </div>

                  <div className="bg-muted p-6 rounded-lg">
                    <h4 className="font-medium mb-4 flex items-center">
                      <KeyRound className="h-5 w-5 text-primary mr-2" />
                      Unlocking Script (scriptSig)
                    </h4>
                    <p className="text-sm text-muted-foreground">
                      Provides data satisfying the locking script. Part of the transaction input.
                    </p>
                    <div className="mt-2 bg-background p-2 rounded-lg">
                      <p className="text-xs text-muted-foreground">Example: "Here's my public key and signature."</p>
                    </div>
                  </div>
                </div>

                {/* Script Execution Process */}
                <div className="bg-primary/5 p-6 rounded-lg">
                  <h3 className="text-lg font-medium mb-4">Script Execution Process</h3>
                  <div className="space-y-4">
                    <p className="text-muted-foreground">
                      When a transaction is validated, Bitcoin combines the unlocking and locking scripts:
                    </p>
                    <div className="flex gap-4 p-4 bg-background rounded-lg">
                      {/* Step 1 */}
                      <div className="h-8 w-8 flex-shrink-0 bg-primary/10 rounded-full flex items-center justify-center">
                        <span className="font-semibold text-primary">1</span>
                      </div>
                      <div>
                        <h4 className="font-medium mb-1">Combine Scripts</h4>
                        <p className="text-sm text-muted-foreground">
                          The unlocking script (scriptSig) is concatenated with the locking script (scriptPubKey).
                        </p>
                        <div className="mt-2 p-2 bg-muted rounded text-xs font-mono">
                          <code>validation_script = scriptSig + scriptPubKey</code>
                        </div>
                      </div>
                    </div>
                     <div className="flex gap-4 p-4 bg-background rounded-lg">
                      {/* Step 2 */}
                      <div className="h-8 w-8 flex-shrink-0 bg-primary/10 rounded-full flex items-center justify-center">
                        <span className="font-semibold text-primary">2</span>
                      </div>
                      <div>
                        <h4 className="font-medium mb-1">Initialize Empty Stack</h4>
                        <p className="text-sm text-muted-foreground">
                          An empty stack is created.
                        </p>
                        <div className="mt-2 p-2 bg-muted rounded text-xs font-mono">
                          <code>stack = []</code>
                        </div>
                      </div>
                    </div>
                    <div className="flex gap-4 p-4 bg-background rounded-lg">
                      {/* Step 3 */}
                      <div className="h-8 w-8 flex-shrink-0 bg-primary/10 rounded-full flex items-center justify-center">
                        <span className="font-semibold text-primary">3</span>
                      </div>
                      <div>
                        <h4 className="font-medium mb-1">Execute Script</h4>
                        <p className="text-sm text-muted-foreground">
                          Executed left-to-right, each operation pushes data or manipulates the stack.
                        </p>
                        <div className="mt-2 p-2 bg-muted rounded text-xs text-muted-foreground">
                          <p>Operations:</p>
                          <ul className="list-disc pl-4 mt-1">
                            <li>Push data</li>
                            <li>Pop values, operate, push result</li>
                            <li>Modify stack elements</li>
                            <li>Conditional evaluation</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                    <div className="flex gap-4 p-4 bg-background rounded-lg">
                      {/* Step 4 */}
                       <div className="h-8 w-8 flex-shrink-0 bg-primary/10 rounded-full flex items-center justify-center">
                        <span className="font-semibold text-primary">4</span>
                      </div>
                      <div>
                        <h4 className="font-medium mb-1">Check Final State</h4>
                        <p className="text-sm text-muted-foreground">
                          Execution must complete without errors and leave a single TRUE value (non-zero) on the stack.
                        </p>
                        <div className="mt-2 p-2 bg-muted rounded text-xs font-mono flex gap-4">
                          <div className="text-green-600"><Check className="inline h-4 w-4 mr-1"/> Success: Stack = [TRUE]</div>
                          <div className="text-red-600"><X className="inline h-4 w-4 mr-1"/> Failure: Stack != [TRUE] or Error</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Standard Script Types Section */}
            <div className="bg-card p-6 rounded-lg border border-border">
              <h2 className="text-xl font-bold mb-4">Standard Script Types</h2>
              <div className="space-y-6">
                <div className="prose dark:prose-invert max-w-none mb-4">
                  <p>
                    While Script allows complex conditions, most Bitcoin transactions use a few standard templates for efficiency and compatibility:
                  </p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {/* P2PKH Card */}
                  <Card className="p-5">
                    <h3 className="font-semibold mb-3 flex items-center">
                      <KeyRound className="h-5 w-5 text-primary mr-2" />
                      P2PKH (Pay-to-Public-Key-Hash)
                    </h3>
                    <p className="text-sm text-muted-foreground mb-3">The most common type. Locks coins to the hash of a public key.</p>
                    <div className="space-y-2 text-xs">
                      <p><span className="font-medium">Locking Script (scriptPubKey):</span><br/><code className="bg-muted p-1 rounded">OP_DUP OP_HASH160 &lt;PublicKeyHash&gt; OP_EQUALVERIFY OP_CHECKSIG</code></p>
                      <p><span className="font-medium">Unlocking Script (scriptSig):</span><br/><code className="bg-muted p-1 rounded">&lt;Signature&gt; &lt;PublicKey&gt;</code></p>
                      <p className="mt-2 text-muted-foreground">Requires a valid signature from the public key that hashes to the specified hash.</p>
                    </div>
                  </Card>
                  {/* P2SH Card */}
                  <Card className="p-5">
                    <h3 className="font-semibold mb-3 flex items-center">
                      <Layers className="h-5 w-5 text-primary mr-2" />
                      P2SH (Pay-to-Script-Hash)
                    </h3>
                    <p className="text-sm text-muted-foreground mb-3">Locks coins to the hash of another script (redeemScript).</p>
                    <div className="space-y-2 text-xs">
                       <p><span className="font-medium">Locking Script (scriptPubKey):</span><br/><code className="bg-muted p-1 rounded">OP_HASH160 &lt;ScriptHash&gt; OP_EQUAL</code></p>
                       <p><span className="font-medium">Unlocking Script (scriptSig):</span><br/><code className="bg-muted p-1 rounded">...arguments... &lt;redeemScript&gt;</code></p>
                       <p className="mt-2 text-muted-foreground">Allows complex scripts (e.g., multisig) without burdening the UTXO set. The redeemScript itself is revealed and executed during spending.</p>
                    </div>
                  </Card>
                  {/* P2WPKH Card */}
                  <Card className="p-5">
                     <h3 className="font-semibold mb-3 flex items-center">
                      <ShieldCheck className="h-5 w-5 text-primary mr-2" />
                      P2WPKH (Pay-to-Witness-Public-Key-Hash)
                    </h3>
                    <p className="text-sm text-muted-foreground mb-3">SegWit version of P2PKH. Uses witness data.</p>
                     <div className="space-y-2 text-xs">
                       <p><span className="font-medium">Locking Script (scriptPubKey):</span><br/><code className="bg-muted p-1 rounded">0 &lt;PublicKeyHash (20 bytes)&gt;</code></p>
                       <p><span className="font-medium">Witness Data:</span><br/><code className="bg-muted p-1 rounded">&lt;Signature&gt; &lt;PublicKey&gt;</code></p>
                       <p className="mt-2 text-muted-foreground">Moves signature data to the witness field, reducing transaction size and fixing malleability.</p>
                     </div>
                  </Card>
                   {/* P2WSH Card */}
                  <Card className="p-5">
                    <h3 className="font-semibold mb-3 flex items-center">
                      <Layers className="h-5 w-5 text-primary mr-2" /> <ShieldCheck className="h-5 w-5 text-primary ml-1" />
                      P2WSH (Pay-to-Witness-Script-Hash)
                    </h3>
                    <p className="text-sm text-muted-foreground mb-3">SegWit version of P2SH.</p>
                     <div className="space-y-2 text-xs">
                      <p><span className="font-medium">Locking Script (scriptPubKey):</span><br/><code className="bg-muted p-1 rounded">0 &lt;ScriptHash (32 bytes)&gt;</code></p>
                      <p><span className="font-medium">Witness Data:</span><br/><code className="bg-muted p-1 rounded">...arguments... &lt;witnessScript&gt;</code></p>
                      <p className="mt-2 text-muted-foreground">SegWit equivalent for complex scripts, offering size and malleability benefits.</p>
                     </div>
                  </Card>
                  {/* P2TR Card */}
                  <Card className="p-5">
                     <h3 className="font-semibold mb-3 flex items-center">
                      <GitCompare className="h-5 w-5 text-primary mr-2" />
                      P2TR (Pay-to-Taproot)
                    </h3>
                    <p className="text-sm text-muted-foreground mb-3">Introduced with Taproot upgrade (BIP 341).</p>
                     <div className="space-y-2 text-xs">
                      <p><span className="font-medium">Locking Script (scriptPubKey):</span><br/><code className="bg-muted p-1 rounded">1 &lt;OutputKey (32 bytes)&gt;</code></p>
                      <p><span className="font-medium">Spending Path (Key or Script):</span><br/> Key path or Script path spending using witness data.</p>
                       <p className="mt-2 text-muted-foreground">Enhances privacy and efficiency. Allows spending via a key path (looks like P2PKH) or complex script paths (revealed only if used).</p>
                    </div>
                  </Card>
                   {/* OP_RETURN Card */}
                  <Card className="p-5">
                    <h3 className="font-semibold mb-3 flex items-center">
                      <FileCode className="h-5 w-5 text-primary mr-2" />
                      OP_RETURN
                    </h3>
                    <p className="text-sm text-muted-foreground mb-3">Creates provably unspendable outputs used for embedding data.</p>
                    <div className="space-y-2 text-xs">
                      <p><span className="font-medium">Locking Script (scriptPubKey):</span><br/><code className="bg-muted p-1 rounded">OP_RETURN &lt;Data (up to 80 bytes)&gt;</code></p>
                       <p className="mt-2 text-muted-foreground">Allows small amounts of arbitrary data to be stored on the blockchain without polluting the UTXO set.</p>
                     </div>
                  </Card>
                </div>
              </div>
            </div>

            {/* Script Evolution Section */}
            <div className="bg-card p-6 rounded-lg border border-border">
              <h2 className="text-xl font-bold mb-4">Script Evolution: SegWit and Taproot</h2>
              <div className="space-y-6">
                <div className="prose dark:prose-invert max-w-none mb-4">
                  <p>
                    Bitcoin Script has evolved through soft forks like Segregated Witness (SegWit) and Taproot, enhancing efficiency, privacy, and capabilities.
                  </p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="bg-muted p-6 rounded-lg">
                    <h3 className="font-medium mb-3 flex items-center">
                      <ShieldCheck className="h-5 w-5 text-primary mr-2" />
                      Segregated Witness (SegWit)
                    </h3>
                    <p className="text-sm text-muted-foreground mb-4">Introduced P2WPKH and P2WSH, moving signature data (witness) outside the main transaction block.</p>
                    <div className="space-y-2 text-xs">
                      <div className="p-2 bg-background rounded"><span className="font-medium text-green-600">+</span> Lower transaction fees (witness data discounted)</div>
                      <div className="p-2 bg-background rounded"><span className="font-medium text-green-600">+</span> Fixes transaction malleability</div>
                      <div className="p-2 bg-background rounded"><span className="font-medium text-green-600">+</span> Enables Layer 2 solutions (e.g., Lightning Network)</div>
                    </div>
                  </div>
                  <div className="bg-muted p-6 rounded-lg">
                    <h3 className="font-medium mb-3 flex items-center">
                      <GitCompare className="h-5 w-5 text-primary mr-2" />
                      Taproot (BIP 341, 342)
                    </h3>
                    <p className="text-sm text-muted-foreground mb-4">Introduced P2TR, Schnorr signatures, and TapScript, further improving privacy and script capabilities.</p>
                    <div className="space-y-2 text-xs">
                       <div className="p-2 bg-background rounded"><span className="font-medium text-green-600">+</span> Enhanced Privacy (complex scripts look like simple payments)</div>
                       <div className="p-2 bg-background rounded"><span className="font-medium text-green-600">+</span> Increased Script Efficiency (batch validation)</div>
                       <div className="p-2 bg-background rounded"><span className="font-medium text-green-600">+</span> More Flexible Scripting (TapScript improvements over legacy Script)</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Script Capabilities and Limitations Section */}
            <div className="bg-card p-6 rounded-lg border border-border">
              <h2 className="text-xl font-bold mb-4">Script Capabilities and Limitations</h2>
              <div className="space-y-6">
                <div className="prose dark:prose-invert max-w-none">
                  <p>
                    Bitcoin Script includes a broad set of operations but is intentionally limited for security and determinism.
                  </p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {/* Opcodes Categories */}
                  <div className="bg-muted p-5 rounded-lg">
                    <h4 className="font-medium mb-4 flex items-center"><ArrowRightLeft className="h-5 w-5 text-primary mr-2" /> Stack Operations</h4>
                    <ul className="list-disc pl-5 space-y-1 text-xs text-muted-foreground"><li>OP_DUP, OP_SWAP, OP_DROP...</li></ul>
                  </div>
                  <div className="bg-muted p-5 rounded-lg">
                    <h4 className="font-medium mb-4 flex items-center"><Code className="h-5 w-5 text-primary mr-2" /> Arithmetic & Logic</h4>
                    <ul className="list-disc pl-5 space-y-1 text-xs text-muted-foreground"><li>OP_ADD, OP_EQUAL, OP_BOOLAND...</li></ul>
                  </div>
                   <div className="bg-muted p-5 rounded-lg">
                    <h4 className="font-medium mb-4 flex items-center"><Fingerprint className="h-5 w-5 text-primary mr-2" /> Cryptographic</h4>
                    <ul className="list-disc pl-5 space-y-1 text-xs text-muted-foreground"><li>OP_SHA256, OP_CHECKSIG, OP_CLTV...</li></ul>
                  </div>
                </div>
                <div className="bg-yellow-100 dark:bg-yellow-900/20 p-5 rounded-lg">
                  <h4 className="font-medium mb-3 flex items-center"><AlertTriangle className="h-5 w-5 text-yellow-600 dark:text-yellow-400 mr-2" /> Deliberate Limitations</h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm text-muted-foreground">
                     <div className="p-3 bg-background rounded-lg"><p className="font-medium mb-1">No Loops:</p><p className="text-xs">Ensures termination, prevents DoS.</p></div>
                     <div className="p-3 bg-background rounded-lg"><p className="font-medium mb-1">No State:</p><p className="text-xs">Self-contained, deterministic execution.</p></div>
                     <div className="p-3 bg-background rounded-lg"><p className="font-medium mb-1">No Blockchain Access:</p><p className="text-xs">Validation independent of chain state.</p></div>
                     <div className="p-3 bg-background rounded-lg"><p className="font-medium mb-1">Disabled Opcodes:</p><p className="text-xs">Precaution against potential exploits (e.g., OP_CAT).</p></div>
                  </div>
                </div>

                 {/* Script Debugging Section */}
                 <div className="bg-primary/5 p-6 rounded-lg">
                  <h3 className="text-lg font-medium mb-4">Script Debugging and Analysis</h3>
                   <div className="space-y-4">
                    <p className="text-muted-foreground">Understanding script execution is crucial:</p>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="p-4 bg-background rounded-lg">
                        <h4 className="font-medium mb-2 flex items-center"><MessagesSquare className="h-4 w-4 text-primary mr-2" /> Script Tracing</h4>
                        <p className="text-xs text-muted-foreground mb-2">Step-by-step execution showing stack changes:</p>
                        <div className="p-2 bg-muted/50 rounded text-xs font-mono"><pre>{`OP_3: [3]
OP_DUP: [3, 3]
OP_ADD: [6]`}</pre></div>
                      </div>
                       <div className="p-4 bg-background rounded-lg">
                        <h4 className="font-medium mb-2 flex items-center"><Copy className="h-4 w-4 text-primary mr-2" /> Testing Resources</h4>
                        <ul className="list-disc pl-5 space-y-1.5 text-xs text-muted-foreground"><li>Bitcoin Core tests</li><li>Online debuggers</li><li>btcdeb</li></ul>
                      </div>
                    </div>
                    <div className="p-4 bg-background rounded-lg">
                      <h4 className="font-medium mb-2">Best Practices</h4>
                      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs text-muted-foreground">
                        <div className="p-2 bg-muted/50 rounded"><p className="font-medium">Start Simple</p><p>Build complexity gradually</p></div>
                        <div className="p-2 bg-muted/50 rounded"><p className="font-medium">Test Thoroughly</p><p>Use testnet extensively</p></div>
                        <div className="p-2 bg-muted/50 rounded"><p className="font-medium">Consider Edge Cases</p><p>Verify all execution paths</p></div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* External Resources */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <Card className="p-5">
                    <h4 className="text-md font-medium mb-3 flex items-center"><FileCode className="h-5 w-5 text-primary mr-2" /> Script Reference</h4>
                    <a href="https://en.bitcoin.it/wiki/Script" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline flex items-center gap-1.5 text-sm"><p>Bitcoin Wiki: Script</p><ExternalLink className="h-3 w-3" /></a>
                  </Card>
                  <Card className="p-5">
                    <h4 className="text-md font-medium mb-3 flex items-center"><Code className="h-5 w-5 text-primary mr-2" /> Script Debugger</h4>
                    <a href="https://github.com/kallewoof/btcdeb" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline flex items-center gap-1.5 text-sm"><p>btcdeb</p><ExternalLink className="h-3 w-3" /></a>
                  </Card>
                  <Card className="p-5">
                    <h4 className="text-md font-medium mb-3 flex items-center"><MessagesSquare className="h-5 w-5 text-primary mr-2" /> BIPs</h4>
                     <div className="space-y-1">
                      <a href="https://github.com/bitcoin/bips/blob/master/bip-0016.mediawiki" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline flex items-center gap-1.5 text-xs"><p>BIP 16: P2SH</p><ExternalLink className="h-3 w-3" /></a>
                      <a href="https://github.com/bitcoin/bips/blob/master/bip-0065.mediawiki" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline flex items-center gap-1.5 text-xs"><p>BIP 65: CLTV</p><ExternalLink className="h-3 w-3" /></a>
                      <a href="https://github.com/bitcoin/bips/blob/master/bip-0112.mediawiki" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline flex items-center gap-1.5 text-xs"><p>BIP 112: CSV</p><ExternalLink className="h-3 w-3" /></a>
                      <a href="https://github.com/bitcoin/bips/blob/master/bip-0141.mediawiki" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline flex items-center gap-1.5 text-xs"><p>BIP 141: SegWit</p><ExternalLink className="h-3 w-3" /></a>
                      <a href="https://github.com/bitcoin/bips/blob/master/bip-0341.mediawiki" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline flex items-center gap-1.5 text-xs"><p>BIP 341: Taproot</p><ExternalLink className="h-3 w-3" /></a>
                     </div>
                  </Card>
                </div>
              </div>
            </div>

            {/* Verification Checkbox */}
            <div className="mt-6 border-t border-border/40 pt-4">
              <VerifyCheckbox
                moduleId={moduleId}
                verificationId={sectionId}
                label="I understand Bitcoin's Script language, its execution model, and how it enables programmable spending conditions"
              />
            </div>

          </div>
        </ModuleContent>
      </ModuleLayout>
    </ModuleMetadata>
  );
}
