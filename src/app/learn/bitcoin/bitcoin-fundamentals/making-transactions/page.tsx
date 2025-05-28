'use client';

import { useState } from 'react';
import { ModuleLayout } from '@/components/learn/shared/module-layout';
import { ModuleContent } from '@/components/learn/shared/module-content';
import {
  ArrowRightLeft,
  Wallet,
  Bitcoin,
  Code,
  Clock,
  Hexagon,
  ArrowRight,
  Layers,
  Lock,
  Landmark,
  Cpu,
  FileCode,
  PenTool,
  BarChart,
  RefreshCw,
  Info,
  AlertCircle,
  ShieldCheck,
  Search,
} from 'lucide-react';
import VerifyCheckbox from '@/components/learn/shared/verify-checkbox';
import SatoshiQuote from '@/components/learn/shared/satoshi-quote';

// --- TransactionVisualizer Component (Integrated) ---
const TransactionVisualizer = () => {
  const [detailsVisible, setDetailsVisible] = useState(false);

  return (
    <div className="space-y-4">
      <div className="flex flex-col md:flex-row items-center justify-center gap-4 p-4 bg-background rounded-lg border border-border">
        <div className="flex flex-col items-center p-4">
          <Wallet className="h-10 w-10 text-primary mb-2" />
          <span className="text-sm font-medium">Input (UTXO)</span>
          <span className="text-xs text-muted-foreground">1.5 BTC</span>
          <div className="mt-2 text-xs text-muted-foreground">
            <span className="font-mono">3a4b...7f9d:2</span>
          </div>
        </div>
        <ArrowRightLeft className="h-8 w-8 text-primary my-4 md:mx-4" />
        <div className="flex flex-col gap-2">
          <div className="flex flex-col items-center p-4 bg-card rounded-lg border border-border">
            <span className="text-sm font-medium">Output 1 (Recipient)</span>
            <span className="text-xs text-muted-foreground">1.0 BTC</span>
            <div className="mt-2 text-xs text-muted-foreground">
              <span className="font-mono">bc1qxy...wlh</span>
            </div>
          </div>
          <div className="flex flex-col items-center p-4 bg-card rounded-lg border border-border">
            <span className="text-sm font-medium">Output 2 (Change)</span>
            <span className="text-xs text-muted-foreground">0.49 BTC</span>
            <div className="mt-2 text-xs text-muted-foreground">
              <span className="font-mono">bc1qz9...h3j</span>
            </div>
          </div>
          <div className="flex flex-col items-center p-2 bg-amber-50 dark:bg-amber-900/20 rounded-lg">
            <span className="text-xs text-amber-800 dark:text-amber-400">
              Fee: 0.01 BTC (Miner Reward)
            </span>
          </div>
        </div>
      </div>

      <button
        onClick={() => setDetailsVisible(!detailsVisible)}
        className="w-full py-2 px-4 bg-primary/5 hover:bg-primary/10 rounded-md flex items-center justify-center text-sm text-primary transition-colors"
      >
        {detailsVisible ? 'Hide Technical Details' : 'Show Technical Details'}
      </button>

      {detailsVisible && (
        <div className="p-4 bg-muted rounded-lg border border-border">
          <h6 className="text-sm font-medium mb-2">Raw Transaction Structure</h6>
          <pre className="text-xs font-mono bg-background p-3 rounded-md overflow-x-auto">
            {`{
  "txid": "7a6d7bd3e65fe70b97f0cab72663d5fb4dae3861814a7aaf358c286dca0c9bb1",
  "version": 1,
  "locktime": 0,
  "vin": [                           // Inputs
    {
      "txid": "3a4bc92f5...42ce7f9d", // Previous transaction ID
      "vout": 2,                     // Output index from previous tx
      "scriptSig": "...",            // Unlocking script
      "sequence": 4294967295
    }
  ],
  "vout": [                          // Outputs
    {
      "value": 1.00000000,           // Amount in BTC
      "n": 0,                        // Output index
      "scriptPubKey": {              // Locking script
        "asm": "0 4c1a...e789",
        "hex": "0014...789",
        "reqSigs": 1,
        "type": "witness_v0_keyhash",
        "addresses": ["bc1qxy...wlh"]
      }
    },
    {
      "value": 0.49000000,           // Change amount
      "n": 1,
      "scriptPubKey": {
        "asm": "0 87f2...3a54",
        "hex": "0014...a54",
        "reqSigs": 1,
        "type": "witness_v0_keyhash",
        "addresses": ["bc1qz9...h3j"]
      }
    }
  ]
}`}
          </pre>
          <p className="mt-3 text-xs text-muted-foreground">
            This represents the JSON structure of a typical Bitcoin transaction. The actual
            transaction is encoded in a binary format and typically ranges from a few hundred to a
            few thousand bytes depending on the number of inputs and outputs.
          </p>
        </div>
      )}
    </div>
  );
};

// --- FeeEstimator Component (Integrated) ---
type FeePriority = 'low' | 'medium' | 'high';
type FeeDetails = { sat: number; usd: number; time: string };

const FeeEstimator = () => {
  const [priority, setPriority] = useState<FeePriority>('medium');

  const fees: Record<FeePriority, FeeDetails> = {
    low: { sat: 5, usd: 0.3, time: '1 hour' },
    medium: { sat: 15, usd: 0.9, time: '10-20 minutes' },
    high: { sat: 30, usd: 1.8, time: '~10 minutes' },
  };

  return (
    <div className="p-4 bg-background rounded-lg border border-border">
      <h5 className="font-medium mb-3">Transaction Fee Estimator</h5>
      <div className="space-y-4">
        <div className="grid grid-cols-3 gap-2">
          <button
            className={`p-2 rounded-md text-sm text-center transition-colors ${
              priority === 'low'
                ? 'bg-green-100 text-green-800 border border-green-200 dark:bg-green-900/30 dark:text-green-400 dark:border-green-900'
                : 'bg-muted hover:bg-muted/80 text-muted-foreground'
            }`}
            onClick={() => setPriority('low')}
          >
            Low Priority
          </button>
          <button
            className={`p-2 rounded-md text-sm text-center transition-colors ${
              priority === 'medium'
                ? 'bg-amber-100 text-amber-800 border border-amber-200 dark:bg-amber-900/30 dark:text-amber-400 dark:border-amber-900'
                : 'bg-muted hover:bg-muted/80 text-muted-foreground'
            }`}
            onClick={() => setPriority('medium')}
          >
            Medium Priority
          </button>
          <button
            className={`p-2 rounded-md text-sm text-center transition-colors ${
              priority === 'high'
                ? 'bg-red-100 text-red-800 border border-red-200 dark:bg-red-900/30 dark:text-red-400 dark:border-red-900'
                : 'bg-muted hover:bg-muted/80 text-muted-foreground'
            }`}
            onClick={() => setPriority('high')}
          >
            High Priority
          </button>
        </div>

        <div className="p-3 bg-muted/50 rounded-md">
          <div className="grid grid-cols-2 gap-4">
            <div className="text-center">
              <p className="text-xs text-muted-foreground mb-1">Fee Rate (sat/vB)</p>
              <p className="text-xl font-medium text-foreground">{fees[priority].sat}</p>
            </div>
            <div className="text-center">
              <p className="text-xs text-muted-foreground mb-1">Est. Cost (250 bytes)</p>
              <p className="text-sm font-medium text-foreground">${fees[priority].usd}</p>
            </div>
          </div>
          <div className="mt-3 text-center">
            <p className="text-xs text-muted-foreground mb-1">Estimated Time to Confirmation</p>
            <p className="text-sm font-medium text-primary">{fees[priority].time}</p>
          </div>
        </div>

        <div className="text-xs text-muted-foreground">
          <p>
            <Info className="inline h-3 w-3 mr-1" />
            Fee estimations are based on current network conditions and vary over time.
          </p>
        </div>
      </div>
    </div>
  );
};

// --- Main Page Component ---
export default function MakingTransactionsPage() {
  const moduleId = 'bitcoin-fundamentals';
  const sectionId = 'making-transactions';

  return (
    <ModuleLayout>
      <ModuleContent
        moduleId={moduleId}
        sectionId={sectionId}
        moduleTitle="Making Transactions"
        moduleDescription="Understand how Bitcoin transactions work, including inputs, outputs, and fees."
        difficulty="Beginner"
        icon={ArrowRightLeft}
        checkpoints={5} // Estimated based on content sections
      >
        <div className="space-y-8">
          <SatoshiQuote
            quote="A purely peer-to-peer version of electronic cash would allow online payments to be sent directly from one party to another without going through a financial institution."
            source="Bitcoin Whitepaper (Abstract)"
            date="October 2008"
          />

          <div className="bg-card p-6 rounded-lg border border-border">
            <h4 className="font-medium mb-4 text-lg">How Bitcoin Transactions Work</h4>
            <div className="space-y-4">
              <p className="text-muted-foreground leading-relaxed">
                Unlike traditional bank accounts that track balances, Bitcoin operates on a model
                of Unspent Transaction Outputs (UTXOs). Think of UTXOs as digital 'coins' or
                'notes' of varying amounts stored on the blockchain, locked to specific addresses.
              </p>
              <div className="p-4 bg-muted/50 rounded-lg border border-border/50">
                <h5 className="font-medium mb-2 flex items-center">
                  <Bitcoin className="h-5 w-5 text-primary mr-2" />
                  UTXO Model Explained
                </h5>
                <p className="text-sm text-muted-foreground">
                  When you want to send Bitcoin, your wallet selects available UTXOs you own that
                  add up to at least the amount you want to send. It then creates a new transaction
                  that 'spends' these UTXOs and creates new UTXOs:
                </p>
                <ul className="list-disc list-inside text-sm text-muted-foreground mt-2 space-y-1">
                  <li>One or more UTXOs for the recipient(s).</li>
                  <li>One UTXO back to you as 'change' if the input UTXOs exceeded the payment amount + fee.</li>
                </ul>
                <p className="text-sm text-muted-foreground mt-2">
                  The difference between the total value of input UTXOs and output UTXOs is the
                  transaction fee, collected by miners.
                </p>
              </div>
            </div>
          </div>

          <div className="bg-card p-6 rounded-lg border border-border">
            <h4 className="font-medium mb-4 text-lg">Visualizing a Transaction</h4>
            <p className="text-muted-foreground mb-4 leading-relaxed">
              Let's illustrate a simple transaction where Alice sends 1 BTC to Bob. Alice has a UTXO
              worth 1.5 BTC.
            </p>
            <TransactionVisualizer />
          </div>

          <div className="bg-card p-6 rounded-lg border border-border">
            <h4 className="font-medium mb-4 text-lg">The Life Cycle of a Transaction</h4>
            <div className="relative pl-6 space-y-6 before:absolute before:left-[11px] before:top-0 before:h-full before:w-0.5 before:bg-border">
              <div className="relative">
                <div className="absolute left-[-11px] top-0 h-6 w-6 rounded-full bg-primary flex items-center justify-center">
                  <PenTool className="h-3 w-3 text-primary-foreground" />
                </div>
                <h5 className="font-medium mb-1 ml-4">1. Creation</h5>
                <p className="text-sm text-muted-foreground ml-4">
                  Your wallet software constructs the transaction, specifying inputs (UTXOs to
                  spend), outputs (recipient address and amount, change address and amount), and
                  signs it using your private key.
                </p>
              </div>

              <div className="relative">
                <div className="absolute left-[-11px] top-0 h-6 w-6 rounded-full bg-primary flex items-center justify-center">
                  <RefreshCw className="h-3 w-3 text-primary-foreground" />
                </div>
                <h5 className="font-medium mb-1 ml-4">2. Broadcasting</h5>
                <p className="text-sm text-muted-foreground ml-4">
                  The signed transaction is sent to several nodes in the Bitcoin network. These
                  nodes validate the transaction against the protocol rules.
                </p>
              </div>

              <div className="relative">
                <div className="absolute left-[-11px] top-0 h-6 w-6 rounded-full bg-primary flex items-center justify-center">
                  <Search className="h-3 w-3 text-primary-foreground" />
                </div>
                <h5 className="font-medium mb-1 ml-4">3. Propagation (Mempool)</h5>
                <p className="text-sm text-muted-foreground ml-4">
                  Valid transactions are relayed across the network and stored in each node's memory
                  pool (mempool), waiting to be included in a block.
                </p>
              </div>

              <div className="relative">
                <div className="absolute left-[-11px] top-0 h-6 w-6 rounded-full bg-primary flex items-center justify-center">
                  <Cpu className="h-3 w-3 text-primary-foreground" />
                </div>
                <h5 className="font-medium mb-1 ml-4">4. Mining & Confirmation</h5>
                <p className="text-sm text-muted-foreground ml-4">
                  Miners select transactions from the mempool (prioritizing those with higher fees)
                  and include them in a new block they are attempting to solve (mine).
                </p>
              </div>

              <div className="relative">
                <div className="absolute left-[-11px] top-0 h-6 w-6 rounded-full bg-primary flex items-center justify-center">
                  <Layers className="h-3 w-3 text-primary-foreground" />
                </div>
                <h5 className="font-medium mb-1 ml-4">5. Block Inclusion</h5>
                <p className="text-sm text-muted-foreground ml-4">
                  Once a miner successfully mines a block containing your transaction, it's added to
                  the blockchain. This is the first confirmation.
                </p>
              </div>

              <div className="relative">
                <div className="absolute left-[-11px] top-0 h-6 w-6 rounded-full bg-primary flex items-center justify-center">
                  <ShieldCheck className="h-3 w-3 text-primary-foreground" />
                </div>
                <h5 className="font-medium mb-1 ml-4">6. Further Confirmations</h5>
                <p className="text-sm text-muted-foreground ml-4">
                  As subsequent blocks are mined and added to the chain *after* the block
                  containing your transaction, the number of confirmations increases. Each
                  confirmation makes the transaction exponentially harder to reverse. Six
                  confirmations (roughly 1 hour) is often considered highly secure.
                </p>
              </div>
            </div>
          </div>

          <div className="bg-card p-6 rounded-lg border border-border">
            <h4 className="font-medium mb-4 text-lg">Transaction Fees</h4>
            <div className="space-y-4">
              <p className="text-muted-foreground leading-relaxed">
                Transaction fees are crucial for network security and incentive alignment. They serve
                two purposes:
              </p>
              <ul className="list-disc list-inside text-sm text-muted-foreground space-y-1">
                <li>Reward miners for the computational work required to secure the network.</li>
                <li>Act as a mechanism to prioritize transactions during periods of high network
                  congestion.</li>
              </ul>
              <p className="text-muted-foreground leading-relaxed">
                Fees are typically measured in satoshis per virtual byte (sat/vB). The higher the
                fee rate you attach, the more likely miners are to include your transaction in the
                next block.
              </p>
              <FeeEstimator />
              <div className="p-4 bg-amber-50 dark:bg-amber-900/20 rounded-lg border border-amber-200 dark:border-amber-900">
                <h5 className="font-medium mb-2 flex items-center text-amber-700 dark:text-amber-300">
                  <AlertCircle className="h-5 w-5 mr-2" />
                  Why Fees Fluctuate
                </h5>
                <p className="text-sm text-amber-800 dark:text-amber-400">
                  Bitcoin block space is limited (approx. 1MB per 10 minutes). When many users want
                  to transact simultaneously, they compete for this limited space by bidding with
                  higher fees. During low-demand periods, fees can be very low.
                </p>
              </div>
            </div>
          </div>

          <div className="bg-card p-6 rounded-lg border border-border">
            <h4 className="font-medium mb-4 text-lg">Satoshi's Insight on Transactions</h4>
            <div className="p-5 bg-muted/50 rounded-lg border border-border text-sm text-muted-foreground italic leading-relaxed">
              <p>
                "The necessity of transaction fees wasn't just about miner incentive; it was about
                preventing network spam. Without a cost associated with creating transactions, malicious
                actors could flood the network with insignificant data, hindering legitimate use.
              </p>
              <p className="mt-3">
                The UTXO model itself was a deliberate design choice. While account-based systems
                might seem simpler, the UTXO approach offers better privacy (as addresses aren't
                directly linked unless reused) and facilitates simpler parallel processing of
                transactions during validation. It provides a clear chain of ownership for every
                satoshi.
              </p>
              <p className="mt-3">
                The concept of confirmations is vital. A transaction isn't truly 'final' the moment
                it's broadcast. It gains security and irreversibility as more proof-of-work is built
                on top of the block containing it. This probabilistic finality is fundamental to
                decentralized consensus."
              </p>
            </div>
          </div>

          <div className="mt-6 border-t border-border/40 pt-4">
            <VerifyCheckbox
              moduleId={moduleId}
              sectionId={sectionId}
              verificationId={sectionId} // Use sectionId for consistency
              label="I understand the basics of making Bitcoin transactions"
            />
          </div>
        </div>
      </ModuleContent>
    </ModuleLayout>
  );
}
