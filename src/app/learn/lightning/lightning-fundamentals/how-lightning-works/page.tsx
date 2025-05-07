'use client';

import React from 'react';
import { ModuleLayout } from '@/components/learn/shared/module-layout';
import { ModuleContent } from '@/components/learn/shared/module-content';
import { Zap, ArrowRight, Lock, Layers, Network, RefreshCw, Clock, Shield, Workflow } from 'lucide-react';
import VerifyCheckbox from '@/components/learn/shared/verify-checkbox';
import SatoshiQuote from '@/components/learn/shared/satoshi-quote';

const moduleId = 'lightning-fundamentals';
const sectionId = 'how-lightning-works';

const HowLightningWorks = () => {
  return (
    <ModuleLayout>
      <ModuleContent 
        moduleId={moduleId} 
        sectionId={sectionId}
      >
        <div className="space-y-8"> 
          <SatoshiQuote
            quote="The bitcoin network can already process a much greater number of transactions per second than it does today. It is limited only by the current software implementation and the network's self-imposed limits."
            source="Satoshi Nakamoto"
            date="April 2009"
          />

          <div className="bg-card p-6 rounded-lg border border-border">
            <h4 className="font-medium mb-4 text-lg">A Note from Satoshi</h4>
            <div className="p-5 bg-muted/50 rounded-lg border border-border text-sm text-muted-foreground italic leading-relaxed">
              <p>
                "I always knew that scaling Bitcoin would eventually require solutions beyond the base blockchain. Just as the internet evolved from its early protocols to complex layers of specialized services, Bitcoin was designed with the flexibility to support additional layers.
              </p>
              <p className="mt-3">
                The Lightning Network elegantly extends Bitcoin's capabilities while preserving its core security properties. By enabling off-chain transaction channels with on-chain settlement, it achieves what I envisioned: a robust base layer focused on security and final settlement, with faster and cheaper transactions handled by specialized protocols built on top of it.
              </p>
              <p className="mt-3">
                This layered approach mirrors how successful networks evolve—strengthening rather than compromising the foundation. The true measure of Bitcoin's success will not be how many coffee purchases the blockchain processes, but how effectively it serves as the secure and reliable settlement layer for an ecosystem of specialized payment systems like Lightning."
              </p>
            </div>
          </div>

          <div>
            <h2 className="text-2xl font-bold">Core Concepts</h2>
            <div className="mt-4 space-y-6">
              <div className="bg-card p-6 rounded-lg border border-border">
                <h4 className="font-medium mb-4 text-lg">The Scaling Challenge</h4>
                <p className="text-muted-foreground leading-relaxed">
                  Bitcoin's blockchain is designed for security and decentralization rather than high throughput. With a 1MB block size limit (later enhanced with SegWit) and 10-minute average block times, the Bitcoin network has a theoretical maximum of approximately 7 transactions per second. This creates two significant challenges:
                </p>
                
                <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="p-4 bg-background rounded-lg flex items-start">
                    <Clock className="h-6 w-6 text-primary mr-3 mt-1 flex-shrink-0" />
                    <div>
                      <h5 className="font-medium mb-2">Confirmation Times</h5>
                      <p className="text-sm text-muted-foreground">
                        On-chain Bitcoin transactions require multiple block confirmations (typically 6) for security, meaning users must wait an average of 60 minutes for high-value transaction finality.
                      </p>
                    </div>
                  </div>
                  
                  <div className="p-4 bg-background rounded-lg flex items-start">
                    <RefreshCw className="h-6 w-6 text-primary mr-3 mt-1 flex-shrink-0" />
                    <div>
                      <h5 className="font-medium mb-2">Fee Market</h5>
                      <p className="text-sm text-muted-foreground">
                        Limited block space creates a competitive fee market during periods of high demand. This makes small-value transactions economically unviable when block space is scarce.
                      </p>
                    </div>
                  </div>
                </div>
                
                <div className="mt-4 p-4 bg-background rounded-lg">
                  <h5 className="font-medium mb-2">The Lightning Solution</h5>
                  <p className="text-sm text-muted-foreground">
                    The Lightning Network addresses these limitations by creating a network of payment channels that allow users to conduct thousands of transactions without touching the blockchain until they're ready to settle. This enables near-instant finality and dramatically reduces fees while maintaining Bitcoin's security guarantees.
                  </p>
                </div>
              </div>

              <div className="bg-card p-6 rounded-lg border border-border">
                <h4 className="font-medium mb-4 text-lg">Layer 2 Architecture</h4>
                <div className="space-y-4">
                  <p className="text-muted-foreground leading-relaxed">
                    Lightning Network operates as a "Layer 2" protocol built on top of Bitcoin's "Layer 1" blockchain. This layered design pattern is fundamental to how networks scale, much like how the internet's TCP/IP protocol was extended with higher-level protocols for specific purposes.
                  </p>
                  
                  <div className="p-4 bg-gradient-to-b from-background to-muted/30 rounded-lg border border-border shadow-inner">
                    <div className="mb-4 p-3 bg-background/80 rounded-lg border border-primary/40">
                      <div className="flex items-center mb-2">
                        <Layers className="h-5 w-5 text-primary mr-2" />
                        <h5 className="font-medium">Layer 2: Lightning Network</h5>
                      </div>
                      <div className="pl-7 text-sm text-muted-foreground">
                        <ul className="list-disc space-y-1">
                          <li>Payment channels for direct peer-to-peer transactions</li>
                          <li>Routing network for multi-hop payments</li>
                          <li>Hash Time-Locked Contracts for secure transfers</li>
                          <li>Millisecond transaction processing</li>
                          <li>Negligible fees for microtransactions</li>
                        </ul>
                      </div>
                    </div>
                    
                    <div className="flex justify-center my-2">
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M12 5L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        <path d="M18 13L12 19L6 13" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </div>
                    
                    <div className="p-3 bg-background/80 rounded-lg border border-primary/40">
                      <div className="flex items-center mb-2">
                        <Shield className="h-5 w-5 text-primary mr-2" />
                        <h5 className="font-medium">Layer 1: Bitcoin Blockchain</h5>
                      </div>
                      <div className="pl-7 text-sm text-muted-foreground">
                        <ul className="list-disc space-y-1">
                          <li>Channel opening and closing settlement</li>
                          <li>Ultimate security through proof-of-work</li>
                          <li>Dispute resolution for Lightning channels</li>
                          <li>Final settlement layer for batched transactions</li>
                          <li>Cryptographic anchor for all Lightning transactions</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  
                  <div className="p-4 bg-amber-50 dark:bg-amber-900/20 rounded-lg">
                    <h5 className="font-medium mb-2 flex items-center">
                      <Workflow className="h-5 w-5 text-amber-600 dark:text-amber-400 mr-2" />
                      Technical Insight
                    </h5>
                    <p className="text-sm text-muted-foreground">
                      Lightning's design follows a principle I identified in early Bitcoin discussions: not every transaction needs the full security of blockchain confirmation. By using the blockchain as a settlement layer for batched transactions while keeping most transactions off-chain, we achieve a dramatic increase in throughput while maintaining security for the final settled state.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-card p-6 rounded-lg border border-border">
                <h4 className="font-medium mb-4 text-lg">Payment Channel Mechanics</h4>
                <div className="space-y-6">
                  <p className="text-muted-foreground leading-relaxed">
                    At the heart of Lightning Network are payment channels—secure connections between two parties that allow them to conduct unlimited transactions without touching the blockchain. Here's how they work in detail:
                  </p>

                  <div className="relative grid grid-cols-1 gap-8 md:grid-cols-3 p-6 bg-background rounded-lg">
                    {/* Step 1 */}
                    <div className="p-5 bg-muted rounded-lg relative">
                      <div className="absolute top-3 right-3 w-8 h-8 flex items-center justify-center rounded-full bg-primary text-primary-foreground text-sm font-medium">1</div>
                      <h5 className="font-medium mb-4 pr-10">Channel Opening</h5>
                      <div className="space-y-3 text-sm text-muted-foreground">
                        <p>
                          <strong>Technical details:</strong> Two parties create a 2-of-2 multisignature funding transaction on the Bitcoin blockchain. 
                        </p>
                        <p>
                          Both participants co-sign this transaction to lock funds (e.g., 0.1 BTC) into a shared address. This transaction requires both signatures to spend the funds, creating a secure foundation for the channel.
                        </p>
                        <p>
                          Simultaneously, they create (but don't broadcast) commitment transactions that define how funds will be split if the channel closes.
                        </p>
                      </div>
                      <div className="mt-3 flex justify-center">
                        <Lock className="h-10 w-10 text-primary" />
                      </div>
                    </div>
                    
                    {/* Arrow */}
                    <div className="hidden md:flex items-center justify-center">
                      <ArrowRight className="h-6 w-6 text-muted-foreground" />
                    </div>
                    
                    {/* Step 2 */}
                    <div className="p-5 bg-muted rounded-lg relative">
                      <div className="absolute top-3 right-3 w-8 h-8 flex items-center justify-center rounded-full bg-primary text-primary-foreground text-sm font-medium">2</div>
                      <h5 className="font-medium mb-4 pr-10">Off-chain Transactions</h5>
                      <div className="space-y-3 text-sm text-muted-foreground">
                        <p>
                          <strong>Technical details:</strong> Participants exchange new commitment transactions that reflect updated balances.
                        </p>
                        <p>
                          Each new transaction invalidates the previous one using a technique called "Revocation Keys." This prevents either party from broadcasting outdated states to the blockchain.
                        </p>
                        <p>
                          Each commitment transaction includes outputs that respect the current balance allocation (e.g., 0.07 BTC / 0.03 BTC after transactions) and are spendable immediately if the channel closes.
                        </p>
                      </div>
                      <div className="mt-3 flex justify-center">
                        <Zap className="h-10 w-10 text-primary" />
                      </div>
                    </div>
                    
                    {/* Arrow */}
                    <div className="hidden md:flex items-center justify-center">
                      <ArrowRight className="h-6 w-6 text-muted-foreground" />
                    </div>
                    
                    {/* Step 3 */}
                    <div className="p-5 bg-muted rounded-lg relative">
                      <div className="absolute top-3 right-3 w-8 h-8 flex items-center justify-center rounded-full bg-primary text-primary-foreground text-sm font-medium">3</div>
                      <h5 className="font-medium mb-4 pr-10">Channel Closing</h5>
                      <div className="space-y-3 text-sm text-muted-foreground">
                        <p>
                          <strong>Technical details:</strong> Either party can close the channel by broadcasting the latest commitment transaction.
                        </p>
                        <p>
                          Cooperative closes (mutual agreement) allow funds to be immediately available with a simpler transaction. Both parties sign a closing transaction that directly pays each party their final balance.
                        </p>
                        <p>
                          In uncooperative closes, time-locks ensure security. If Alice broadcasts an outdated state, Bob can use the revocation key to claim all funds as a penalty.
                        </p>
                      </div>
                      <div className="mt-3 flex justify-center">
                        <svg className="h-10 w-10 text-primary" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M7 10L12 15L17 10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                          <path d="M12 3V15" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                          <path d="M5 21H19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div>
            <h2 className="text-2xl font-bold">The Lightning Network Ecosystem</h2>
            <div className="mt-4 space-y-6">
              <div className="bg-card p-6 rounded-lg border border-border">
                <h4 className="font-medium mb-4 text-lg">Multi-hop Payments</h4>
                <div className="space-y-4">
                  <p className="text-muted-foreground leading-relaxed">
                    The true power of Lightning Network emerges when payment channels are connected together to form a network. This allows users to send payments to anyone on the network, even without a direct channel between them.
                  </p>
                  
                  <div className="p-5 bg-background rounded-lg">
                    <h5 className="font-medium mb-3 flex items-center">
                      <Network className="h-5 w-5 text-primary mr-2" />
                      Network Topology
                    </h5>
                    <div className="space-y-2 text-sm text-muted-foreground">
                      <p>
                        The Lightning Network forms a small-world network topology where most nodes are connected to a few well-connected "hub" nodes. This creates a balance between decentralization and efficiency.
                      </p>
                      <p>
                        A typical Lightning payment might route through 3-6 nodes to reach its destination, depending on network conditions and channel liquidity. Each routing node can charge a small fee for forwarding the payment.
                      </p>
                    </div>
                  </div>
                  
                  <div className="p-5 bg-background rounded-lg">
                    <h5 className="font-medium mb-3">The Technical Innovation: HTLCs</h5>
                    <div className="space-y-3 text-sm text-muted-foreground">
                      <p>
                        <strong>Hash Time-Locked Contracts (HTLCs)</strong> are the cryptographic innovation that makes multi-hop payments possible without requiring trust between participants. They work as follows:
                      </p>
                      <ol className="list-decimal pl-5 space-y-2">
                        <li>
                          The recipient (Carol) generates a secret value R and sends its hash H=hash(R) to the sender (Alice).
                        </li>
                        <li>
                          Alice creates an HTLC with Bob that says: "Pay 0.01 BTC to Bob if he can provide the value R such that hash(R)=H within 10 hours; otherwise, return the funds to Alice."
                        </li>
                        <li>
                          Bob creates a similar HTLC with Carol, but with a shorter timelock (e.g., 5 hours).
                        </li>
                        <li>
                          When Carol reveals R to claim her payment from Bob, Bob can then use that same value R to claim his payment from Alice.
                        </li>
                        <li>
                          If any party disappears, the time-locks ensure funds are automatically returned to their senders after the specified time period.
                        </li>
                      </ol>
                      <p className="font-semibold mt-2">
                        This creates an atomic transaction: either all hops complete successfully, or none do.
                      </p>
                    </div>
                  </div>
                  
                  <div className="p-4 bg-muted/60 rounded-lg border border-border/50">
                    <h5 className="font-medium mb-2">Lightning Script Example (Simplified)</h5>
                    <pre className="text-xs overflow-x-auto p-3 bg-background rounded-md">
  {`# A conditional output script in a Lightning commitment transaction
  # This shows how an HTLC is implemented using Bitcoin Script
  
  IF
    # Hash lock: Payment can be claimed if the preimage is revealed
    HASH160 <H> EQUALVERIFY
    <Bob's public key> CHECKSIG
  ELSE
    # Time lock: Funds return to sender after timeout
    <timeout> CHECKLOCKTIMEVERIFY DROP
    <Alice's public key> CHECKSIG
  ENDIF`}
                    </pre>
                  </div>
                </div>
              </div>

              <div className="bg-card p-6 rounded-lg border border-border">
                <h4 className="font-medium mb-4 text-lg">Technical Capabilities</h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="p-4 bg-background rounded-lg flex flex-col h-full">
                    <h5 className="font-medium mb-3">Instant Finality</h5>
                    <p className="text-sm text-muted-foreground flex-grow">
                      Lightning transactions achieve practical finality in milliseconds rather than minutes or hours. This is possible because the cryptographic validity of transactions is established immediately, and the risk of channel closures is mitigated by penalty mechanisms.
                    </p>
                    <div className="mt-3 pt-3 border-t border-border/40">
                      <p className="text-xs text-primary-foreground/70 italic">
                        "Properly implemented, Lightning can achieve security comparable to on-chain transactions for most practical purposes while offering vastly improved user experience."
                      </p>
                    </div>
                  </div>
                  
                  <div className="p-4 bg-background rounded-lg flex flex-col h-full">
                    <h5 className="font-medium mb-3">Microscopic Fees</h5>
                    <p className="text-sm text-muted-foreground flex-grow">
                      Lightning fees are typically measured in millisatoshis (1/1000 of a satoshi). A typical transaction might cost 1-10 satoshis total, even when routed through multiple hops. This enables entirely new use cases like pay-per-byte content delivery, machine-to-machine payments, and streaming money.
                    </p>
                    <div className="mt-3 pt-3 border-t border-border/40">
                      <p className="text-xs text-primary-foreground/70 italic">
                        "The ability to send a fraction of a penny efficiently opens up economic interactions that were previously impossible. This could be one of Bitcoin's most transformative features."
                      </p>
                    </div>
                  </div>
                  
                  <div className="p-4 bg-background rounded-lg flex flex-col h-full">
                    <h5 className="font-medium mb-3">Massive Scalability</h5>
                    <p className="text-sm text-muted-foreground flex-grow">
                      Lightning Network's capacity scales with channels and nodes, not with block space. The theoretical maximum approaches millions of transactions per second across the network—more than Visa, Mastercard, and other global payment networks combined. Each node only needs to track the channels it participates in, not the entire network state.
                    </p>
                    <div className="mt-3 pt-3 border-t border-border/40">
                      <p className="text-xs text-primary-foreground/70 italic">
                        "With sufficient channel capacity and network connectivity, there is essentially no upper limit to how many payments Lightning can process globally."
                      </p>
                    </div>
                  </div>
                  
                  <div className="p-4 bg-background rounded-lg flex flex-col h-full">
                    <h5 className="font-medium mb-3">Enhanced Privacy</h5>
                    <p className="text-sm text-muted-foreground flex-grow">
                      Lightning provides significantly improved privacy compared to on-chain transactions. Payments are not publicly recorded and only the participants in each hop know about their specific part of the route. Onion routing (similar to Tor) ensures that routing nodes only know their immediate predecessor and successor, not the full payment path.
                    </p>
                    <div className="mt-3 pt-3 border-t border-border/40">
                      <p className="text-xs text-primary-foreground/70 italic">
                        "The privacy model of Lightning represents exactly what is needed: privacy for everyday transactions while maintaining the verification benefits of a public blockchain."
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-card p-6 rounded-lg border border-border">
            <h4 className="font-medium mb-4 text-lg">Technical Implementations</h4>
            <div className="space-y-4">
              <p className="text-muted-foreground">
                The Lightning Network is implemented through several compatible software projects:
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div className="p-4 bg-background rounded-lg">
                  <h5 className="font-medium mb-2">LND</h5>
                  <p className="text-sm text-muted-foreground">
                    Lightning Network Daemon by Lightning Labs. Written in Go, it's the most widely used implementation with extensive API support and integration capabilities.
                  </p>
                </div>
                
                <div className="p-4 bg-background rounded-lg">
                  <h5 className="font-medium mb-2">c-lightning</h5>
                  <p className="text-sm text-muted-foreground">
                    Developed by Blockstream. Written in C for performance and resource efficiency, it takes a modular approach with plugins for extensibility.
                  </p>
                </div>
                
                <div className="p-4 bg-background rounded-lg">
                  <h5 className="font-medium mb-2">Eclair</h5>
                  <p className="text-sm text-muted-foreground">
                    Developed by ACINQ. Written in Scala, it powers the Phoenix mobile wallet and emphasizes performance and reliability.
                  </p>
                </div>
              </div>
              
              <div className="p-4 bg-muted/50 rounded-lg">
                <h5 className="font-medium mb-2">The BOLT Standards</h5>
                <p className="text-sm text-muted-foreground">
                  All Lightning implementations follow the "Basis of Lightning Technology" (BOLT) specifications, ensuring interoperability between different implementations. These specifications define the protocol for channel establishment, routing, payment encoding, and other critical functions of the network.
                </p>
              </div>
            </div>
          </div>

          <div className="p-6 bg-card rounded-lg border border-border">
            <h4 className="font-medium mb-4 text-lg">Satoshi's Perspective</h4>
            <div className="p-5 bg-muted/50 rounded-lg border border-border text-sm text-muted-foreground italic leading-relaxed">
              <p>
                "The original Bitcoin design always had the foresight to allow for layers to be built on top of it. Payment channels and networks like Lightning represent the natural evolution of the system, preserving the core security properties while extending functionality.
              </p>
              <p className="mt-3">
                I always envisioned Bitcoin as digital gold first—a secure store of value and settlement layer—with additional protocols handling the higher velocity transactions. Lightning follows this philosophy perfectly, using Bitcoin's robust security when needed while enabling efficient commerce for everyday use.
              </p>
              <p className="mt-3">
                By offloading smaller transactions to Lightning, we keep the base layer decentralized and accessible, while still scaling Bitcoin to serve humanity's needs. This layered approach is how truly robust systems evolve."
              </p>
            </div>
          </div>

          <div className="mt-6 border-t border-border/40 pt-4">
            <VerifyCheckbox 
              moduleId={moduleId} 
              sectionId={sectionId} 
              verificationId={sectionId}
            />
          </div>

        </div> 
      </ModuleContent>
    </ModuleLayout>
  );
};

export default HowLightningWorks;