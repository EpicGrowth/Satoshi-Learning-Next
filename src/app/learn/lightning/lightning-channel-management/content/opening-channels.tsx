import React from 'react';
import { ModuleContent } from '@/components/learn/shared/components/module-content';
import {
  Link,
  ShieldCheck,
  FileCode,
  Workflow,
  AlertCircle,
  Wallet,
  Scale,
  Zap,
  Settings,
  Bitcoin,
  CircleDollarSign,
  Layers,
  Database,
} from 'lucide-react';
import VerifyCheckbox from '@/components/learn/shared/components/verify-checkbox';
import SatoshiQuote from '@/components/learn/shared/components/satoshi-quote';

export default function OpeningChannels() {
  return (
    <ModuleContent
      moduleId="lightning-channel-management"
      moduleTitle="Opening Channels"
      moduleDescription="Learn to open Lightning channels"
      difficulty="Intermediate"
      icon={Link}
    >
      <div className="space-y-8">
        <SatoshiQuote
          quote="The main benefits are privacy, instant confirmation, extremely low fees and the ability to do micropayments."
          source="Joseph Poon and Thaddeus Dryja, Lightning Network Whitepaper"
          date="January 14, 2016"
        />

        <div className="bg-card p-6 rounded-lg border border-border">
          <h4 className="font-medium mb-4 text-lg">A Note from Satoshi</h4>
          <div className="p-5 bg-muted/50 rounded-lg border border-border text-sm text-muted-foreground italic leading-relaxed">
            <p>
              "In Bitcoin's earliest days, the focus was primarily on establishing the core
              protocol—a payment system that could operate without trusted third parties. I designed
              the blockchain as a settlement layer, knowing that scaling would eventually require
              additional layers.
            </p>
            <p className="mt-3">
              Opening a Lightning channel represents the exact moment when a user transitions from
              the base settlement layer to a new paradigm of Bitcoin usage. It's a profound
              technological step—akin to the difference between postal mail and email—moving from a
              store of value system to a genuinely practical payment network capable of nearly
              unlimited transactions.
            </p>
            <p className="mt-3">
              When you open a channel, you're not just creating a connection between two
              nodes—you're establishing your personal corner of a global, decentralized financial
              network. Each channel enhances not only your capabilities but strengthens the network
              as a whole. This cooperative aspect, where individual actions create collective
              benefit, embodies the Bitcoin ethos I envisioned."
            </p>
          </div>
        </div>

        <div className="bg-card p-6 rounded-lg border border-border">
          <h3 className="text-lg font-medium mb-4">Channel Fundamentals</h3>
          <div className="space-y-6">
            <p className="text-muted-foreground leading-relaxed">
              A Lightning channel is a bilateral payment pathway secured by on-chain Bitcoin
              transactions. Understanding the technical foundations of channel creation is essential
              before opening your first channel.
            </p>

            <div className="p-5 bg-background rounded-lg border border-border">
              <h4 className="font-medium mb-4 flex items-center">
                <Layers className="h-5 w-5 text-primary mr-2" />
                The Lightning Channel Architecture
              </h4>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h5 className="font-medium mb-2">What Is a Channel?</h5>
                  <div className="p-4 bg-muted/30 rounded-lg">
                    <p className="text-sm text-muted-foreground mb-3">
                      A Lightning channel is a secured, bilateral financial relationship between two
                      Lightning nodes. It uses a 2-of-2 multisignature Bitcoin output to create an
                      off-chain mechanism for instant, low-cost transactions.
                    </p>
                    <ul className="list-disc pl-5 text-sm text-muted-foreground space-y-2">
                      <li>
                        <span className="font-medium">Funding Transaction:</span> On-chain Bitcoin
                        transaction that creates the channel
                      </li>
                      <li>
                        <span className="font-medium">Commitment Transactions:</span> Off-chain
                        transactions that update channel balances
                      </li>
                      <li>
                        <span className="font-medium">Closing Transaction:</span> On-chain
                        transaction that settles final channel balances
                      </li>
                      <li>
                        <span className="font-medium">Channel Capacity:</span> Total amount of
                        Bitcoin locked in the channel
                      </li>
                      <li>
                        <span className="font-medium">Channel State:</span> The current balance
                        distribution between parties
                      </li>
                    </ul>
                  </div>
                </div>

                <div>
                  <h5 className="font-medium mb-2">Technical Properties</h5>
                  <div className="p-4 bg-muted/30 rounded-lg">
                    <ul className="list-disc pl-5 text-sm text-muted-foreground space-y-2">
                      <li>
                        <span className="font-medium">Multisignature Security:</span> 2-of-2
                        multisig requires both parties to agree on any balance changes
                      </li>
                      <li>
                        <span className="font-medium">Trustless Design:</span> Cryptographic
                        enforcement prevents theft or cheating
                      </li>
                      <li>
                        <span className="font-medium">Bi-directional Flow:</span> Payments can move
                        in either direction within capacity limits
                      </li>
                      <li>
                        <span className="font-medium">Timelock Mechanisms:</span> Penalty systems
                        prevent invalid channel state broadcasts
                      </li>
                      <li>
                        <span className="font-medium">Channel Bandwidth:</span> Defined by the
                        amount of Bitcoin that can flow in each direction
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="mt-6 p-4 bg-amber-50 dark:bg-amber-900/20 rounded-lg">
                <h5 className="font-medium mb-2 flex items-center">
                  <Workflow className="h-5 w-5 text-amber-600 dark:text-amber-400 mr-2" />
                  Technical Insight
                </h5>
                <p className="text-sm text-muted-foreground">
                  "A Lightning channel opening transaction creates a unique type of Bitcoin UTXO—one
                  controlled by a 2-of-2 multisignature script. This script requires signatures from
                  both channel participants to spend funds. What makes Lightning innovative is that
                  this multisig output is complemented by a complex series of pre-signed commitment
                  transactions that allow either party to unilaterally close the channel if needed,
                  while penalizing any party that attempts to broadcast an outdated channel state."
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-card p-6 rounded-lg border border-border">
          <h3 className="text-lg font-medium mb-4">Channel Opening Process</h3>
          <div className="space-y-6">
            <p className="text-muted-foreground leading-relaxed">
              Opening a Lightning channel involves several technical steps and careful planning to
              ensure optimal performance and security.
            </p>

            <div className="relative overflow-hidden rounded-lg bg-background p-6 border border-border">
              <div className="space-y-8">
                {/* Step 1 */}
                <div className="relative flex gap-4">
                  <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-primary text-primary-foreground shadow-md">
                    <span className="text-sm font-bold">1</span>
                  </div>
                  <div className="absolute left-5 top-10 h-[calc(100%-2.5rem)] w-px bg-border" />
                  <div className="pb-8">
                    <h4 className="font-medium mb-2">Node Selection</h4>
                    <div className="space-y-3 text-sm text-muted-foreground">
                      <p>
                        The first step is selecting the right peer node with which to establish a
                        channel. This decision significantly impacts the channel's utility.
                      </p>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="p-3 bg-muted/30 rounded-lg text-xs">
                          <h5 className="font-medium mb-1">Selection Criteria</h5>
                          <ul className="list-disc pl-4 space-y-1">
                            <li>
                              <span className="font-medium">Connectivity:</span> Nodes with many
                              quality channels
                            </li>
                            <li>
                              <span className="font-medium">Reliability:</span> Nodes with high
                              uptime and stability
                            </li>
                            <li>
                              <span className="font-medium">Fees:</span> Reasonable routing fee
                              policies
                            </li>
                            <li>
                              <span className="font-medium">Liquidity:</span> Sufficient outbound
                              capacity
                            </li>
                            <li>
                              <span className="font-medium">Purpose:</span> Merchant node, exchange,
                              or routing node
                            </li>
                          </ul>
                        </div>
                        <div className="p-3 bg-muted/30 rounded-lg text-xs">
                          <h5 className="font-medium mb-1">Finding Quality Peers</h5>
                          <ul className="list-disc pl-4 space-y-1">
                            <li>
                              <span className="font-medium">Network Explorers:</span> 1ML, Amboss,
                              Lightning Terminal
                            </li>
                            <li>
                              <span className="font-medium">Community Resources:</span> Forums, LN
                              Twitter communities
                            </li>
                            <li>
                              <span className="font-medium">Service Providers:</span> Connect
                              directly to services you use
                            </li>
                            <li>
                              <span className="font-medium">Lightning Pool:</span> Marketplace for
                              channel liquidity
                            </li>
                            <li>
                              <span className="font-medium">Node Lists:</span> Curated directories
                              of reliable nodes
                            </li>
                          </ul>
                        </div>
                      </div>

                      <div className="p-2 bg-muted/30 rounded-lg text-xs">
                        <p className="font-medium mb-1">Connection Command</p>
                        <div className="p-2 bg-background rounded-lg border border-border/50 text-xs">
                          <pre className="overflow-x-auto text-[10px]">
                            <code className="text-muted-foreground">
                              # First, establish a peer connection lncli connect
                              02a5fcb1e8fb47318e938e6bb228bae1a589299420c53c7e0bd93428730dff5bfd@35.232.170.67:9735
                              # Verify the connection lncli listpeers | grep -A 5
                              "02a5fcb1e8fb47318e938e6bb228bae1a589299420c53c7e0bd93428730dff5bfd"
                            </code>
                          </pre>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Step 2 */}
                <div className="relative flex gap-4">
                  <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-primary text-primary-foreground shadow-md">
                    <span className="text-sm font-bold">2</span>
                  </div>
                  <div className="absolute left-5 top-10 h-[calc(100%-2.5rem)] w-px bg-border" />
                  <div className="pb-8">
                    <h4 className="font-medium mb-2">Capacity Planning</h4>
                    <div className="space-y-3 text-sm text-muted-foreground">
                      <p>
                        Determining the appropriate channel capacity is a critical decision that
                        balances multiple factors.
                      </p>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="p-3 bg-muted/30 rounded-lg text-xs">
                          <h5 className="font-medium mb-1">Capacity Considerations</h5>
                          <ul className="list-disc pl-4 space-y-1">
                            <li>
                              <span className="font-medium">Intended Usage:</span> Payment, routing,
                              or both
                            </li>
                            <li>
                              <span className="font-medium">Transaction Sizes:</span> Expected
                              payment amounts
                            </li>
                            <li>
                              <span className="font-medium">Capital Allocation:</span>{' '}
                              Diversification across channels
                            </li>
                            <li>
                              <span className="font-medium">Opportunity Cost:</span> Locked vs.
                              liquid funds
                            </li>
                            <li>
                              <span className="font-medium">On-chain Fees:</span> Higher fees for
                              larger channels
                            </li>
                          </ul>
                        </div>
                        <div className="p-3 bg-muted/30 rounded-lg text-xs">
                          <h5 className="font-medium mb-1">Typical Channel Sizes</h5>
                          <ul className="list-disc pl-4 space-y-1">
                            <li>
                              <span className="font-medium">Small (≤1M sats):</span> Testing,
                              micropayments
                            </li>
                            <li>
                              <span className="font-medium">Medium (1-5M sats):</span> Regular user,
                              small routing
                            </li>
                            <li>
                              <span className="font-medium">Large (5-10M sats):</span> Active
                              routing, merchant
                            </li>
                            <li>
                              <span className="font-medium">XL (10M+ sats):</span> Professional
                              routing nodes
                            </li>
                            <li>
                              <span className="font-medium">Wumbo (16.7M+ sats):</span> Requires
                              opt-in from both peers
                            </li>
                          </ul>
                        </div>
                      </div>

                      <div className="p-4 bg-amber-50 dark:bg-amber-900/20 rounded-lg">
                        <h5 className="font-medium mb-2 flex items-center">
                          <FileCode className="h-5 w-5 text-amber-600 dark:text-amber-400 mr-2" />
                          Technical Note
                        </h5>
                        <p className="text-xs text-muted-foreground">
                          "Lightning originally imposed a channel size limit of 16,777,215 satoshis
                          (0.16777215 BTC) to minimize risk during early adoption. With the 'wumbo'
                          channel feature (BOLT PR #596), nodes can opt-in to support larger
                          channels. Today, most major nodes support wumbo channels, but you should
                          verify this capability before attempting to open larger channels."
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Step 3 */}
                <div className="relative flex gap-4">
                  <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-primary text-primary-foreground shadow-md">
                    <span className="text-sm font-bold">3</span>
                  </div>
                  <div className="absolute left-5 top-10 h-[calc(100%-2.5rem)] w-px bg-border" />
                  <div className="pb-8">
                    <h4 className="font-medium mb-2">Fee Consideration</h4>
                    <div className="space-y-3 text-sm text-muted-foreground">
                      <p>
                        Channel opening requires an on-chain Bitcoin transaction, which incurs
                        mining fees that should be carefully considered.
                      </p>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="p-3 bg-muted/30 rounded-lg text-xs">
                          <h5 className="font-medium mb-1">Fee Factors</h5>
                          <ul className="list-disc pl-4 space-y-1">
                            <li>
                              <span className="font-medium">Transaction Size:</span> Channel opening
                              tx is ~250 bytes
                            </li>
                            <li>
                              <span className="font-medium">Mempool Conditions:</span> Current
                              Bitcoin fee market
                            </li>
                            <li>
                              <span className="font-medium">Urgency:</span> How quickly channel is
                              needed
                            </li>
                            <li>
                              <span className="font-medium">Batching:</span> Opening multiple
                              channels in one tx
                            </li>
                            <li>
                              <span className="font-medium">Timing:</span> Fee market cycles and
                              fluctuations
                            </li>
                          </ul>
                        </div>
                        <div className="p-3 bg-muted/30 rounded-lg text-xs">
                          <h5 className="font-medium mb-1">Fee Strategy</h5>
                          <ul className="list-disc pl-4 space-y-1">
                            <li>
                              <span className="font-medium">Fee Rate Selection:</span> Balance speed
                              vs. cost
                            </li>
                            <li>
                              <span className="font-medium">Fee Estimators:</span> mempool.space,
                              node fee estimation
                            </li>
                            <li>
                              <span className="font-medium">Opportunity Windows:</span>{' '}
                              Weekend/night lower fees
                            </li>
                            <li>
                              <span className="font-medium">Fee Bumping:</span> RBF/CPFP if
                              necessary
                            </li>
                            <li>
                              <span className="font-medium">Economic Analysis:</span> Weigh fee
                              against channel value
                            </li>
                          </ul>
                        </div>
                      </div>

                      <div className="p-3 bg-muted/30 rounded-lg text-xs">
                        <h5 className="font-medium mb-1">Fee Rate Commands</h5>
                        <div className="p-2 bg-background rounded-lg border border-border/50 text-xs">
                          <pre className="overflow-x-auto text-[10px]">
                            <code className="text-muted-foreground">
                              # Check current fee estimates bitcoin-cli estimatesmartfee 6 # Open
                              channel with specific fee rate (10 sat/vB) lncli openchannel
                              --sat_per_byte=10 --node_key=[PUBKEY] --local_amt=1000000 # LND with
                              fee limit for auto-estimated fee lncli openchannel --fee_limit=50000
                              --node_key=[PUBKEY] --local_amt=1000000
                            </code>
                          </pre>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Step 4 */}
                <div className="relative flex gap-4">
                  <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-primary text-primary-foreground shadow-md">
                    <span className="text-sm font-bold">4</span>
                  </div>
                  <div className="absolute left-5 top-10 h-[calc(100%-2.5rem)] w-px bg-border" />
                  <div className="pb-8">
                    <h4 className="font-medium mb-2">Channel Opening Execution</h4>
                    <div className="space-y-3 text-sm text-muted-foreground">
                      <p>
                        With planning complete, it's time to execute the channel opening transaction
                        using your Lightning node software.
                      </p>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="p-3 bg-muted/30 rounded-lg text-xs">
                          <h5 className="font-medium mb-1">Implementation Commands</h5>
                          <div className="space-y-2">
                            <div>
                              <p className="font-medium text-[10px]">LND</p>
                              <pre className="overflow-x-auto text-[9px]">
                                <code className="text-muted-foreground">
                                  lncli openchannel --node_key=[PUBKEY] \ --local_amt=1000000 \
                                  --push_amt=100000 \ --sat_per_byte=10
                                </code>
                              </pre>
                            </div>
                            <div>
                              <p className="font-medium text-[10px]">Core Lightning</p>
                              <pre className="overflow-x-auto text-[9px]">
                                <code className="text-muted-foreground">
                                  lightning-cli fundchannel [NODEID] 1000000 \ feerate=10000
                                </code>
                              </pre>
                            </div>
                            <div>
                              <p className="font-medium text-[10px]">Eclair</p>
                              <pre className="overflow-x-auto text-[9px]">
                                <code className="text-muted-foreground">
                                  eclair-cli open --nodeId=[NODEID] \ --fundingSatoshis=1000000 \
                                  --pushMsat=100000000 \ --feerateSatPerByte=10
                                </code>
                              </pre>
                            </div>
                          </div>
                        </div>
                        <div className="p-3 bg-muted/30 rounded-lg text-xs">
                          <h5 className="font-medium mb-1">Parameter Explanation</h5>
                          <ul className="list-disc pl-4 space-y-1">
                            <li>
                              <span className="font-medium">node_key/nodeId:</span> Public key of
                              peer node
                            </li>
                            <li>
                              <span className="font-medium">local_amt/fundingSatoshis:</span> Total
                              channel capacity in satoshis
                            </li>
                            <li>
                              <span className="font-medium">push_amt/pushMsat:</span> Initial amount
                              given to peer (optional)
                            </li>
                            <li>
                              <span className="font-medium">sat_per_byte/feerate:</span> On-chain
                              transaction fee rate
                            </li>
                            <li>
                              <span className="font-medium">private:</span> Flag for creating
                              non-announced private channel
                            </li>
                            <li>
                              <span className="font-medium">min_confs:</span> Minimum confirmations
                              for inputs (default: 1)
                            </li>
                          </ul>
                        </div>
                      </div>

                      <div className="p-3 bg-muted/30 rounded-lg text-xs">
                        <h5 className="font-medium mb-1">Opening Transaction Output</h5>
                        <div className="p-2 bg-background rounded-lg border border-border/50 text-xs">
                          <pre className="overflow-x-auto text-[10px]">
                            <code className="text-muted-foreground">
                              &#123; "funding_txid":
                              "8442c87674acf515082a8c8741a8a197cbc470dc39bd9d96b184ed55b1f5a818",
                              "output_index": 0, "remote_pubkey":
                              "02a5fcb1e8fb47318e938e6bb228bae1a589299420c53c7e0bd93428730dff5bfd",
                              "capacity": "1000000", "local_balance": "900000", "remote_balance":
                              "100000", "status": "pending", "commit_fee": "8525", "commit_weight":
                              "600", "fee_per_kw": "1000" &#125;
                            </code>
                          </pre>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Step 5 */}
                <div className="relative flex gap-4">
                  <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-primary text-primary-foreground shadow-md">
                    <span className="text-sm font-bold">5</span>
                  </div>
                  <div className="pb-8">
                    <h4 className="font-medium mb-2">Confirmation and Activation</h4>
                    <div className="space-y-3 text-sm text-muted-foreground">
                      <p>
                        After broadcasting the channel opening transaction, it must be confirmed on
                        the Bitcoin blockchain before the channel becomes operational.
                      </p>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="p-3 bg-muted/30 rounded-lg text-xs">
                          <h5 className="font-medium mb-1">Confirmation Process</h5>
                          <ul className="list-disc pl-4 space-y-1">
                            <li>
                              <span className="font-medium">Funding Transaction:</span> Must be
                              confirmed on-chain
                            </li>
                            <li>
                              <span className="font-medium">Confirmation Depth:</span> Typically 3+
                              confirmations needed
                            </li>
                            <li>
                              <span className="font-medium">Channel States:</span> pending_open →
                              open
                            </li>
                            <li>
                              <span className="font-medium">Communication:</span> Protocol messages
                              exchanged
                            </li>
                            <li>
                              <span className="font-medium">Announcement:</span> Public channels
                              advertised to network
                            </li>
                          </ul>
                        </div>
                        <div className="p-3 bg-muted/30 rounded-lg text-xs">
                          <h5 className="font-medium mb-1">Monitoring Commands</h5>
                          <div className="space-y-2">
                            <div>
                              <p className="font-medium text-[10px]">Check Pending Channels</p>
                              <pre className="overflow-x-auto text-[9px]">
                                <code className="text-muted-foreground">lncli pendingchannels</code>
                              </pre>
                            </div>
                            <div>
                              <p className="font-medium text-[10px]">Check Active Channels</p>
                              <pre className="overflow-x-auto text-[9px]">
                                <code className="text-muted-foreground">lncli listchannels</code>
                              </pre>
                            </div>
                            <div>
                              <p className="font-medium text-[10px]">Check Channel Details</p>
                              <pre className="overflow-x-auto text-[9px]">
                                <code className="text-muted-foreground">
                                  lncli getchaninfo [CHANNEL_ID]
                                </code>
                              </pre>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-card p-6 rounded-lg border border-border">
          <h3 className="text-lg font-medium mb-4">Channel Types & Special Considerations</h3>
          <div className="space-y-6">
            <p className="text-muted-foreground leading-relaxed">
              Beyond basic channels, various channel types and considerations can enhance your
              Lightning Network experience.
            </p>

            <div className="overflow-hidden rounded-lg border border-border">
              <div className="p-4 bg-primary-foreground border-b border-border">
                <h4 className="font-medium">Lightning Channel Types</h4>
              </div>
              <div className="divide-y divide-border">
                <div className="p-4 bg-background">
                  <div className="flex flex-col md:flex-row gap-4">
                    <div className="flex-shrink-0 w-full md:w-1/4">
                      <div className="flex items-center mb-2">
                        <ShieldCheck className="h-5 w-5 text-blue-500 mr-2" />
                        <h5 className="font-medium">Private Channels</h5>
                      </div>
                      <div className="p-1.5 bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-400 rounded text-xs inline-block">
                        Enhanced Privacy
                      </div>
                    </div>
                    <div className="flex-grow space-y-3">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                          <h6 className="text-xs font-medium mb-1">Characteristics</h6>
                          <ul className="list-disc pl-4 text-xs text-muted-foreground space-y-1">
                            <li>Not announced to the broader network</li>
                            <li>Only visible to the two channel partners</li>
                            <li>Cannot be used for routing by others</li>
                            <li>Still can send/receive payments through other channels</li>
                            <li>Requires routing hints in invoices</li>
                          </ul>
                        </div>
                        <div>
                          <h6 className="text-xs font-medium mb-1">Creation Command</h6>
                          <pre className="overflow-x-auto text-[10px]">
                            <code className="text-muted-foreground">
                              # LND lncli openchannel --private --node_key=[PUBKEY] \
                              --local_amt=1000000 # Core Lightning lightning-cli fundchannel
                              [NODEID] 1000000 \ announce=false
                            </code>
                          </pre>
                          <p className="text-xs text-muted-foreground mt-1">
                            Best for personal channels, increased privacy, or for avoiding DOS
                            targeting.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="p-4 bg-background">
                  <div className="flex flex-col md:flex-row gap-4">
                    <div className="flex-shrink-0 w-full md:w-1/4">
                      <div className="flex items-center mb-2">
                        <Bitcoin className="h-5 w-5 text-purple-500 mr-2" />
                        <h5 className="font-medium">Zero-Conf Channels</h5>
                      </div>
                      <div className="p-1.5 bg-purple-100 dark:bg-purple-900/30 text-purple-800 dark:text-purple-400 rounded text-xs inline-block">
                        Instant Activation
                      </div>
                    </div>
                    <div className="flex-grow space-y-3">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                          <h6 className="text-xs font-medium mb-1">Characteristics</h6>
                          <ul className="list-disc pl-4 text-xs text-muted-foreground space-y-1">
                            <li>Available for use immediately before confirmations</li>
                            <li>Based on trust relationship with the peer</li>
                            <li>Limited to smaller amounts (typically)</li>
                            <li>Provider assumes temporary confirmation risk</li>
                            <li>Usually initiated by channel services rather than users</li>
                          </ul>
                        </div>
                        <div>
                          <h6 className="text-xs font-medium mb-1">Typical Use Cases</h6>
                          <ul className="list-disc pl-4 text-xs text-muted-foreground space-y-1">
                            <li>Quick onboarding of new Lightning users</li>
                            <li>Exchange withdrawals to Lightning</li>
                            <li>Merchant payment channels with trusted providers</li>
                            <li>Instant channel services (like LNBIG)</li>
                            <li>Channels within custodial services</li>
                          </ul>
                          <p className="text-xs text-muted-foreground mt-2">
                            Best for situations needing immediate Lightning access without waiting
                            for Bitcoin confirmations.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="p-4 bg-background">
                  <div className="flex flex-col md:flex-row gap-4">
                    <div className="flex-shrink-0 w-full md:w-1/4">
                      <div className="flex items-center mb-2">
                        <CircleDollarSign className="h-5 w-5 text-green-500 mr-2" />
                        <h5 className="font-medium">Dual-Funded Channels</h5>
                      </div>
                      <div className="p-1.5 bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-400 rounded text-xs inline-block">
                        Balanced Liquidity
                      </div>
                    </div>
                    <div className="flex-grow space-y-3">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                          <h6 className="text-xs font-medium mb-1">Characteristics</h6>
                          <ul className="list-disc pl-4 text-xs text-muted-foreground space-y-1">
                            <li>Both parties contribute funds to the channel</li>
                            <li>Creates balanced bidirectional liquidity</li>
                            <li>More complex opening negotiation</li>
                            <li>Implemented in Core Lightning and Eclair</li>
                            <li>Coming soon to LND (in development)</li>
                          </ul>
                        </div>
                        <div>
                          <h6 className="text-xs font-medium mb-1">Example Usage (CLN)</h6>
                          <pre className="overflow-x-auto text-[10px]">
                            <code className="text-muted-foreground">
                              # Initiate dual-funded channel lightning-cli fundchannel id=[NODE_ID]
                              \ amount=1000000 \ feerate=10000 \ announce=true \ request_amt=1000000
                            </code>
                          </pre>
                          <p className="text-xs text-muted-foreground mt-1">
                            Best for creating channels with balanced liquidity from the start, ideal
                            for routing or peer-to-peer relationships.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="p-4 bg-background">
                  <div className="flex flex-col md:flex-row gap-4">
                    <div className="flex-shrink-0 w-full md:w-1/4">
                      <div className="flex items-center mb-2">
                        <Database className="h-5 w-5 text-red-500 mr-2" />
                        <h5 className="font-medium">Channel Leases / LSPs</h5>
                      </div>
                      <div className="p-1.5 bg-red-100 dark:bg-red-900/30 text-red-800 dark:text-red-400 rounded text-xs inline-block">
                        Inbound Liquidity
                      </div>
                    </div>
                    <div className="flex-grow space-y-3">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                          <h6 className="text-xs font-medium mb-1">Characteristics</h6>
                          <ul className="list-disc pl-4 text-xs text-muted-foreground space-y-1">
                            <li>Service provider opens channel to your node</li>
                            <li>Creates inbound capacity for receiving payments</li>
                            <li>Usually requires payment or commitment</li>
                            <li>May involve time-based contract</li>
                            <li>Available through services like Lightning Pool, LNBIG</li>
                          </ul>
                        </div>
                        <div>
                          <h6 className="text-xs font-medium mb-1">LSP Services</h6>
                          <ul className="list-disc pl-4 text-xs text-muted-foreground space-y-1">
                            <li>Lightning Pool by Lightning Labs</li>
                            <li>LNBIG.com channels</li>
                            <li>Voltage Flow</li>
                            <li>Magma by Amboss</li>
                            <li>Bitrefill Thor channels</li>
                          </ul>
                          <p className="text-xs text-muted-foreground mt-1">
                            Best for merchants or services that need to receive payments but lack
                            initial inbound capacity.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="p-5 bg-background rounded-lg border border-border">
              <h4 className="font-medium mb-4 flex items-center">
                <AlertCircle className="h-5 w-5 text-primary mr-2" />
                Advanced Considerations
              </h4>

              <div className="space-y-4">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                  <div className="p-4 bg-muted/30 rounded-lg">
                    <div className="flex items-center mb-3">
                      <Wallet className="h-5 w-5 text-primary mr-2" />
                      <h5 className="font-medium">UTXO Management</h5>
                    </div>

                    <div className="space-y-3 text-xs text-muted-foreground">
                      <p>
                        Careful management of Bitcoin UTXOs can optimize channel opening efficiency
                        and costs.
                      </p>
                      <ul className="list-disc pl-4 space-y-1">
                        <li>
                          <span className="font-medium">UTXO Selection:</span> Choose appropriate
                          inputs for channel funding
                        </li>
                        <li>
                          <span className="font-medium">Input Consolidation:</span> Consolidate
                          smaller UTXOs during low-fee periods
                        </li>
                        <li>
                          <span className="font-medium">Coin Control:</span> Some implementations
                          allow manual UTXO selection
                        </li>
                        <li>
                          <span className="font-medium">Batched Opens:</span> Open multiple channels
                          in a single transaction
                        </li>
                      </ul>
                      <div className="p-2 bg-background rounded-lg border border-border/50 text-[10px]">
                        <pre className="overflow-x-auto">
                          <code className="text-muted-foreground">
                            # LND coin control for channel opening lncli openchannel
                            --node_key=[PUBKEY] \ --local_amt=1000000 \ --utxos=[txid]:[vout]
                          </code>
                        </pre>
                      </div>
                    </div>
                  </div>

                  <div className="p-4 bg-muted/30 rounded-lg">
                    <div className="flex items-center mb-3">
                      <Scale className="h-5 w-5 text-primary mr-2" />
                      <h5 className="font-medium">Channel Balance</h5>
                    </div>

                    <div className="space-y-3 text-xs text-muted-foreground">
                      <p>Initial channel balance distribution affects immediate usability.</p>
                      <ul className="list-disc pl-4 space-y-1">
                        <li>
                          <span className="font-medium">Push Amount:</span> Option to give some
                          capacity to the other side
                        </li>
                        <li>
                          <span className="font-medium">Inbound Capacity:</span> Dictates how much
                          you can receive
                        </li>
                        <li>
                          <span className="font-medium">Outbound Capacity:</span> Dictates how much
                          you can send
                        </li>
                        <li>
                          <span className="font-medium">Balance Ratios:</span> Different for
                          merchant, customer, or routing node
                        </li>
                      </ul>
                      <div className="grid grid-cols-3 gap-2 p-2 bg-background rounded-lg">
                        <div className="text-center p-1 border border-border rounded-lg">
                          <p className="font-medium text-[9px]">Sending Node</p>
                          <div className="h-4 w-full bg-muted rounded-lg overflow-hidden mt-1">
                            <div className="h-full bg-blue-500" style={{ width: '100%' }}></div>
                          </div>
                          <p className="text-[8px] mt-1">100% Outbound</p>
                        </div>
                        <div className="text-center p-1 border border-border rounded-lg">
                          <p className="font-medium text-[9px]">Routing Node</p>
                          <div className="h-4 w-full bg-muted rounded-lg overflow-hidden mt-1">
                            <div className="h-full bg-blue-500" style={{ width: '50%' }}></div>
                          </div>
                          <p className="text-[8px] mt-1">50/50 Balance</p>
                        </div>
                        <div className="text-center p-1 border border-border rounded-lg">
                          <p className="font-medium text-[9px]">Receiving Node</p>
                          <div className="h-4 w-full bg-muted rounded-lg overflow-hidden mt-1">
                            <div className="h-full bg-blue-500" style={{ width: '0%' }}></div>
                          </div>
                          <p className="text-[8px] mt-1">100% Inbound</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                  <div className="p-4 bg-muted/30 rounded-lg">
                    <div className="flex items-center mb-3">
                      <Settings className="h-5 w-5 text-primary mr-2" />
                      <h5 className="font-medium">Channel Parameters</h5>
                    </div>

                    <div className="space-y-3 text-xs text-muted-foreground">
                      <p>
                        Additional parameters can fine-tune channel behavior for specific needs.
                      </p>
                      <ul className="list-disc pl-4 space-y-1">
                        <li>
                          <span className="font-medium">CLTV Delta:</span> Timelock buffer between
                          hops (default: 40 blocks)
                        </li>
                        <li>
                          <span className="font-medium">Max HTLC Value:</span> Largest payment
                          amount allowed
                        </li>
                        <li>
                          <span className="font-medium">Min HTLC Value:</span> Smallest payment
                          amount allowed
                        </li>
                        <li>
                          <span className="font-medium">Base Fee / Fee Rate:</span> Fees for routing
                          payments
                        </li>
                        <li>
                          <span className="font-medium">Max Pending HTLCs:</span> Number of
                          concurrent payments
                        </li>
                      </ul>
                      <div className="p-2 bg-background rounded-lg border border-border/50 text-[10px]">
                        <pre className="overflow-x-auto">
                          <code className="text-muted-foreground">
                            # LND channel parameters example lncli updatechanpolicy
                            --base_fee_msat=1000 \ --fee_rate=0.000001 --time_lock_delta=40 \
                            --min_htlc_msat=1000 --max_htlc_msat=100000000 \
                            --chan_point=[funding_txid]:[output_index]
                          </code>
                        </pre>
                      </div>
                    </div>
                  </div>

                  <div className="p-4 bg-muted/30 rounded-lg">
                    <div className="flex items-center mb-3">
                      <Zap className="h-5 w-5 text-primary mr-2" />
                      <h5 className="font-medium">Channel Testing</h5>
                    </div>

                    <div className="space-y-3 text-xs text-muted-foreground">
                      <p>Verify channel functionality before relying on it for actual usage.</p>
                      <ul className="list-disc pl-4 space-y-1">
                        <li>
                          <span className="font-medium">Self-Payment:</span> Send a payment to
                          yourself through the channel
                        </li>
                        <li>
                          <span className="font-medium">Keysend:</span> Direct payment without
                          invoice (if supported)
                        </li>
                        <li>
                          <span className="font-medium">Small Test Payments:</span> To verify
                          routing capability
                        </li>
                        <li>
                          <span className="font-medium">Circular Rebalance:</span> Test payment in a
                          loop through the network
                        </li>
                      </ul>
                      <div className="p-2 bg-background rounded-lg border border-border/50 text-[10px]">
                        <pre className="overflow-x-auto">
                          <code className="text-muted-foreground">
                            # LND keysend test payment (direct push payment) lncli sendpayment
                            --keysend --dest=[NODE_PUBKEY] \ --amt=1000 # Create and pay a test
                            invoice to yourself INVOICE=$(lncli addinvoice --amt=1000 | jq -r
                            '.payment_request') lncli payinvoice $INVOICE
                          </code>
                        </pre>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="p-4 bg-amber-50 dark:bg-amber-900/20 rounded-lg">
                  <h5 className="font-medium mb-2 flex items-center">
                    <FileCode className="h-5 w-5 text-amber-600 dark:text-amber-400 mr-2" />
                    Future Developments
                  </h5>
                  <p className="text-sm text-muted-foreground">
                    "Channel opening technology continues to evolve, with several promising
                    enhancements on the horizon. These include 'Taproot channels' that leverage
                    Bitcoin's Taproot capabilities for enhanced privacy and efficiency, 'Liquidity
                    Advertisements' that allow automated discovery of available channel liquidity,
                    and 'Channel Factories' that could enable multiple channels to be created from a
                    single on-chain transaction, dramatically reducing the per-channel cost."
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="p-6 bg-card rounded-lg border border-border">
          <h4 className="font-medium mb-4 text-lg">Satoshi's Perspective</h4>
          <div className="p-5 bg-muted/50 rounded-lg border border-border text-sm text-muted-foreground italic leading-relaxed">
            <p>
              "Opening a Lightning channel represents a fascinating evolution of the Bitcoin vision.
              While Bitcoin's blockchain handles final settlement with uncompromising security,
              Lightning channels provide the instant, high-frequency interactions needed for
              everyday payments.
            </p>
            <p className="mt-3">
              The beauty of this design is its complementary nature. The base layer's robust
              security and the Lightning layer's speed and efficiency work together without
              compromising each other. For users, this creates a seamless experience—they gain the
              benefits of Bitcoin's fundamental properties while transcending its limitations.
            </p>
            <p className="mt-3">
              When you open a channel, you're not just creating a payment pathway—you're
              participating in a new form of financial infrastructure that maintains Bitcoin's core
              principles of self-sovereignty and censorship resistance. Each channel contributes to
              a global, decentralized network that bypasses traditional financial gatekeepers. This
              is precisely the kind of layered, scalable system I envisioned when I wrote about
              Bitcoin's future potential."
            </p>
          </div>
        </div>

        <div className="mt-6 border-t border-border/40 pt-4">
          <VerifyCheckbox
            moduleId="lightning-channel-management"
            verificationId="opening-channels"
            label="I understand how to open Lightning channels"
          />
        </div>
      </div>
    </ModuleContent>
  );
}
