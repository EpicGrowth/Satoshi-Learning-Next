'use client';

import React, { useState } from 'react';
import { ModuleContent } from '@/components/learn/shared/module-content';
import {
  Key,
  Shield,
  Bitcoin,
  HardDrive,
  Smartphone,
  Repeat,
  Fingerprint,
  Copy,
  BookCopy,
  AlarmClock,
  CircleDashed,
  Wallet,
  KeyRound,
  ArrowRight,
  Lock,
} from 'lucide-react';
import SatoshiQuote from '@/components/learn/shared/satoshi-quote';
import VerifyCheckbox from '@/components/learn/shared/verify-checkbox';

// KeyPairVisualizer component
const KeyPairVisualizer = () => {
  const [isRevealed, setIsRevealed] = useState(false);

  return (
    <div className="space-y-4">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 relative">
        <div
          className={`p-6 rounded-lg border-2 transition-all duration-300 cursor-pointer shadow-sm
            ${
              isRevealed
                ? 'border-red-500 bg-red-50 dark:bg-red-950/20'
                : 'border-border bg-background'
            }`}
          onClick={() => setIsRevealed(!isRevealed)}
        >
          <div className="flex items-center gap-3 mb-3">
            <Key className={`h-5 w-5 ${isRevealed ? 'text-red-500' : 'text-primary'}`} />
            <h3 className="font-medium">Private Key</h3>
          </div>

          <div className="p-3 bg-muted/50 rounded-md">
            <div className="font-mono text-sm text-muted-foreground break-all">
              {isRevealed ? 'L3h5Bz4Xd8Q9W7A6Z1P2Y5T8X0R3F6V9' : '********************************'}
            </div>
            {isRevealed && (
              <div className="mt-2 p-2 bg-red-100 dark:bg-red-950/30 rounded-md text-xs text-red-700 dark:text-red-400">
                <div className="flex items-center">
                  <Shield className="h-3.5 w-3.5 mr-1.5" />
                  <span className="font-medium">Warning:</span>
                </div>
                <p className="mt-0.5">
                  This is an example key only. Never share real private keys!
                </p>
              </div>
            )}
          </div>

          <div className="mt-3 text-xs">
            <h4 className="font-medium mb-1 text-foreground">Properties:</h4>
            <ul className="list-disc list-inside space-y-1 text-muted-foreground">
              <li>256-bit random number</li>
              <li>Mathematically linked to public key</li>
              <li>
                Must remain <span className="text-red-500 font-medium">secret</span>
              </li>
              <li>Grants complete control over funds</li>
            </ul>
          </div>

          <p className="text-xs text-muted-foreground mt-3 italic">
            {isRevealed
              ? 'Keep this completely private'
              : 'Click to reveal example (not a real key)'}
          </p>
        </div>

        <div className="relative">
          <div className="p-6 rounded-lg border-2 border-border bg-background shadow-sm h-full">
            <div className="flex items-center gap-3 mb-3">
              <KeyRound className="h-5 w-5 text-primary" />
              <h3 className="font-medium">Public Key / Address</h3>
            </div>

            <div className="space-y-4">
              <div className="p-3 bg-muted/50 rounded-md">
                <p className="text-xs text-muted-foreground mb-1">Public Key (compressed):</p>
                <div className="font-mono text-sm text-muted-foreground break-all">
                  03a7bd1c9154950188d56616e1ad80d5046c3d63fe32b8594c0603c3f3a01a6835
                </div>
              </div>

              <div className="p-3 bg-muted/50 rounded-md">
                <p className="text-xs text-muted-foreground mb-1">Bitcoin Address (P2WPKH):</p>
                <div className="font-mono text-sm text-foreground break-all">
                  bc1qxy2kgdygjrsqtzq2n0yrf2493p83kkfjhx0wlh
                </div>
              </div>
            </div>

            <div className="mt-3 text-xs">
              <h4 className="font-medium mb-1 text-foreground">Properties:</h4>
              <ul className="list-disc list-inside space-y-1 text-muted-foreground">
                <li>Derived from private key using elliptic curve mathematics</li>
                <li>Address is a hash of the public key</li>
                <li>
                  Can be{' '}
                  <span className="text-green-600 dark:text-green-400 font-medium">
                    shared freely
                  </span>
                </li>
                <li>Used to receive bitcoin</li>
              </ul>
            </div>
          </div>
          <div className="hidden md:flex absolute left-0 top-1/2 -translate-x-1/2 -translate-y-1/2 h-10 w-10 items-center justify-center rounded-full bg-background shadow-md border border-border z-10">
            <ArrowRight className="h-6 w-6 text-primary" />
          </div>
        </div>
      </div>

      <div className="p-4 bg-amber-50 dark:bg-amber-900/20 rounded-lg text-sm text-muted-foreground">
        <p className="italic">
          "The mathematical relationship between private and public keys is one-way - it's
          computationally impossible to derive a private key from its corresponding public key. This
          asymmetry is the fundamental principle that enables Bitcoin's security model."
        </p>
      </div>
    </div>
  );
};

// Main page component
export default function PrivateKeysWallets() {
  return (
    <ModuleContent
      moduleId="fundamentals"
      sectionId="private-keys-wallets"
      moduleTitle="Private Keys & Wallets"
      moduleDescription="Managing Bitcoin securely"
      difficulty="Beginner"
      checkpoints={1}
    >
      <div className="space-y-8">
        <SatoshiQuote
          quote="Lost coins only make everyone else's coins worth slightly more. Think of it as a donation to everyone."
          date="June 21, 2010"
          source="BitcoinTalk Forum"
        />

        <div className="bg-card p-6 rounded-lg border border-border">
          <h4 className="font-medium mb-4 text-lg">A Note from Satoshi</h4>
          <div className="p-5 bg-muted/50 rounded-lg border border-border text-sm text-muted-foreground italic leading-relaxed">
            <p>
              "I wanted Bitcoin to give individuals complete control over their money. Private
              keys are the essence of this control—they represent the fundamental shift from
              trust-based systems to cryptographic proof. With traditional banking, you rely on
              the institution to secure your funds. With Bitcoin, you alone secure your keys, and
              thus, your money.
            </p>
            <p className="mt-3">
              This direct ownership creates both freedom and responsibility. There are no password
              reset mechanisms in Bitcoin, no customer service representatives to call if you
              forget your key. This was an intentional design choice—true ownership means no
              backdoors, no exceptions, no third-party control.
            </p>
            <p className="mt-3">
              I recognized from the beginning that key management would be one of the most
              significant challenges for users. This is why I emphasized the importance of
              security practices and why the ecosystem has evolved sophisticated solutions like
              hierarchical deterministic wallets and hardware security devices. The future of
              money is self-sovereign, but that sovereignty requires careful stewardship."
            </p>
          </div>
        </div>

        <div className="bg-card p-6 rounded-lg border border-border">
          <h4 className="font-medium mb-4 text-lg">
            Cryptographic Keys: The Foundation of Ownership
          </h4>
          <div className="space-y-4">
            <p className="text-muted-foreground leading-relaxed">
              In Bitcoin's trustless system, ownership is not determined by a central database of
              accounts but through cryptographic proof. Your private key is the root of this
              ownership—essentially a very large random number that, through mathematics, gives
              you exclusive control over your bitcoin.
            </p>

            <div className="p-5 bg-background rounded-lg border border-border">
              <h5 className="font-medium mb-4">The Cryptographic Key Pair</h5>
              <KeyPairVisualizer />
            </div>

            <div className="p-5 bg-background rounded-lg border border-border">
              <h5 className="font-medium mb-4">The Technical Details</h5>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="p-4 bg-muted/30 rounded-lg">
                  <h6 className="font-medium mb-3 flex items-center">
                    <Fingerprint className="h-5 w-5 text-primary mr-2" />
                    Elliptic Curve Digital Signatures
                  </h6>
                  <p className="text-sm text-muted-foreground">
                    Bitcoin uses the secp256k1 elliptic curve for its cryptographic operations.
                    This mathematical function allows:
                  </p>
                  <ul className="mt-2 text-sm text-muted-foreground list-disc pl-5 space-y-1">
                    <li>Generation of a public key from a private key</li>
                    <li>Creation of digital signatures to authorize transactions</li>
                    <li>Verification of signatures without revealing the private key</li>
                  </ul>
                  <p className="text-xs text-muted-foreground mt-3">
                    The curve equation is{' '}
                    <span className="font-mono bg-background/80 px-1.5 py-0.5 rounded">
                      y² = x³ + 7
                    </span>{' '}
                    over a finite field.
                  </p>
                </div>

                <div className="p-4 bg-muted/30 rounded-lg">
                  <h6 className="font-medium mb-3 flex items-center">
                    <CircleDashed className="h-5 w-5 text-primary mr-2" />
                    Address Derivation
                  </h6>
                  <p className="text-sm text-muted-foreground">
                    A Bitcoin address is derived from the public key through multiple hashing
                    steps:
                  </p>
                  <ol className="mt-2 text-sm text-muted-foreground list-decimal pl-5 space-y-2">
                    <li>Public key is hashed with SHA-256</li>
                    <li>Result is hashed with RIPEMD-160</li>
                    <li>Version byte is added (different for different address types)</li>
                    <li>Checksum is calculated and appended</li>
                    <li>Result is encoded in Base58 or Bech32 format</li>
                  </ol>
                  <p className="text-xs text-amber-600 dark:text-amber-400 mt-3">
                    This multi-stage process adds security and error-detection capabilities.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-card p-6 rounded-lg border border-border">
          <h4 className="font-medium mb-4 text-lg">The Evolution of Bitcoin Wallets</h4>
          <div className="space-y-4">
            <p className="text-muted-foreground leading-relaxed">
              A Bitcoin wallet is not a physical container that holds coins, but rather a software
              application that manages your keys and interfaces with the Bitcoin network. Wallets
              have evolved from simple key storage to sophisticated tools with multiple security
              features.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="p-4 bg-background rounded-lg border border-border shadow-sm h-full">
                <div className="flex items-center mb-3">
                  <BookCopy className="h-5 w-5 text-primary mr-2 flex-shrink-0" />
                  <h5 className="font-medium">HD Wallets</h5>
                </div>
                <p className="text-sm text-muted-foreground mb-3">
                  Hierarchical Deterministic (HD) wallets generate a tree of keys from a single
                  seed phrase, typically 12-24 words.
                </p>
                <div className="bg-muted/30 p-3 rounded-md text-xs space-y-2 mb-3">
                  <p className="font-medium">Benefits:</p>
                  <ul className="list-disc pl-4 space-y-1 text-muted-foreground">
                    <li>Backup all keys with a single seed phrase</li>
                    <li>Generate unlimited addresses</li>
                    <li>Enhanced privacy through address rotation</li>
                    <li>Supports account hierarchies (BIP44)</li>
                  </ul>
                </div>
                <p className="text-xs text-muted-foreground italic">
                  The seed phrase creates a deterministic wallet structure defined by BIP32/39/44
                  standards.
                </p>
              </div>

              <div className="p-4 bg-background rounded-lg border border-border shadow-sm h-full">
                <div className="flex items-center mb-3">
                  <HardDrive className="h-5 w-5 text-primary mr-2 flex-shrink-0" />
                  <h5 className="font-medium">Hardware Wallets</h5>
                </div>
                <p className="text-sm text-muted-foreground mb-3">
                  Special-purpose devices that store private keys offline and sign transactions
                  without exposing private keys to connected computers.
                </p>
                <div className="bg-muted/30 p-3 rounded-md text-xs space-y-2 mb-3">
                  <p className="font-medium">Key Security Features:</p>
                  <ul className="list-disc pl-4 space-y-1 text-muted-foreground">
                    <li>Private keys never leave the device</li>
                    <li>Physical button confirmation for transactions</li>
                    <li>Secure element chips resistant to tampering</li>
                    <li>PIN protection and device encryption</li>
                  </ul>
                </div>
                <p className="text-xs text-muted-foreground italic">
                  Examples include Ledger, Trezor, and ColdCard devices.
                </p>
              </div>

              <div className="p-4 bg-background rounded-lg border border-border shadow-sm h-full">
                <div className="flex items-center mb-3">
                  <Smartphone className="h-5 w-5 text-primary mr-2 flex-shrink-0" />
                  <h5 className="font-medium">Mobile & Software Wallets</h5>
                </div>
                <p className="text-sm text-muted-foreground mb-3">
                  Applications that run on general-purpose devices like smartphones and computers,
                  offering convenience with varying security models.
                </p>
                <div className="bg-muted/30 p-3 rounded-md text-xs space-y-2 mb-3">
                  <p className="font-medium">Types:</p>
                  <ul className="list-disc pl-4 space-y-1 text-muted-foreground">
                    <li>
                      <strong>Custodial:</strong> Service holds keys (not recommended)
                    </li>
                    <li>
                      <strong>Self-Custodial:</strong> You control keys on your device
                    </li>
                    <li>
                      <strong>Light Wallets:</strong> Don't store full blockchain
                    </li>
                    <li>
                      <strong>Full Node Wallets:</strong> Validate all transactions
                    </li>
                  </ul>
                </div>
                <p className="text-xs text-muted-foreground italic">
                  Examples include Blue Wallet, Muun, Electrum, and Bitcoin Core.
                </p>
              </div>
            </div>

            <div className="p-4 bg-amber-50 dark:bg-amber-900/20 rounded-lg">
              <h5 className="font-medium mb-2 flex items-center">
                <Lock className="h-5 w-5 text-amber-600 dark:text-amber-400 mr-2" />
                Security Trade-offs
              </h5>
              <p className="text-sm text-muted-foreground">
                "There's always a balance between security and usability. Hardware wallets provide
                excellent security for large holdings, while mobile wallets offer convenience for
                everyday transactions. A sensible approach is to use multiple wallet types -
                hardware wallets for savings and mobile wallets for spending, similar to how you
                might use a bank account and a physical wallet for different purposes."
              </p>
            </div>
          </div>
        </div>

        <div className="bg-card p-6 rounded-lg border border-border">
          <h4 className="font-medium mb-4 text-lg">Best Practices for Key Management</h4>
          <div className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                {
                  icon: Shield,
                  title: 'Never Share Private Keys',
                  description:
                    'Keep your private keys and seed phrases completely private - never share them with anyone, including support staff or services. Legitimate Bitcoin services will never ask for your private keys.',
                },
                {
                  icon: Copy,
                  title: 'Create Secure Backups',
                  description:
                    'Store seed phrase backups in multiple secure locations. Consider using metal backups that are resistant to fire, water, and other physical damage. Keep backups away from potential threats like theft or natural disasters.',
                },
                {
                  icon: Repeat,
                  title: 'Test Recovery Processes',
                  description:
                    'Regularly verify that you can restore access to your funds using your backups. Practice the recovery process with small amounts before entrusting large holdings to a new wallet system.',
                },
                {
                  icon: AlarmClock,
                  title: 'Use Time-Locked Security',
                  description:
                    'For large holdings, consider multisignature wallets that require multiple keys to authorize transactions, or time-locked contracts that delay withdrawals to give you time to respond to unauthorized access attempts.',
                },
              ].map((item, i) => (
                <div
                  key={i}
                  className="flex items-start gap-4 p-5 bg-background rounded-lg shadow-sm border border-border"
                >
                  <div className="bg-primary/10 p-2 rounded-md">
                    <item.icon className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h5 className="font-medium mb-1">{item.title}</h5>
                    <p className="text-sm text-muted-foreground">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="p-5 bg-red-50 dark:bg-red-950/20 rounded-lg border border-red-200 dark:border-red-900/30">
              <h5 className="font-medium text-red-700 dark:text-red-400 mb-3 flex items-center">
                <Shield className="h-5 w-5 mr-2" />
                Critical Security Warnings
              </h5>
              <div className="space-y-3">
                <p className="text-sm text-red-700/80 dark:text-red-400/80">
                  <strong>Your keys = your bitcoin.</strong> If someone gains access to your
                  private keys, they can take your funds irreversibly. There are no chargebacks or
                  recovery mechanisms in Bitcoin.
                </p>
                <p className="text-sm text-red-700/80 dark:text-red-400/80">
                  <strong>Lost keys = lost bitcoin.</strong> If you lose access to your keys with
                  no backup, your funds are permanently inaccessible. There is no "forgot
                  password" feature in Bitcoin.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-card p-6 rounded-lg border border-border">
          <h4 className="font-medium mb-4 text-lg">Advanced Wallet Concepts</h4>
          <div className="space-y-4">
            <div className="p-5 bg-background rounded-lg border border-border">
              <h5 className="font-medium mb-3 flex items-center">
                <Wallet className="h-5 w-5 text-primary mr-2" />
                Multisignature Wallets
              </h5>
              <p className="text-sm text-muted-foreground mb-3">
                Multisignature (multisig) wallets require multiple private keys to authorize a
                transaction. For example, a 2-of-3 multisig requires any 2 of 3 designated keys to
                sign.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-3">
                <div className="p-3 bg-muted/30 rounded-md text-xs">
                  <p className="font-medium mb-1">Use Cases:</p>
                  <ul className="list-disc pl-4 space-y-1 text-muted-foreground">
                    <li>Business treasury management</li>
                    <li>Inheritance planning</li>
                    <li>Protection against single points of failure</li>
                    <li>Threshold security for high-value holdings</li>
                  </ul>
                </div>
                <div className="p-3 bg-muted/30 rounded-md text-xs">
                  <p className="font-medium mb-1">Implementation:</p>
                  <ul className="list-disc pl-4 space-y-1 text-muted-foreground">
                    <li>P2SH and P2WSH Bitcoin script formats</li>
                    <li>Distributed key storage across different locations</li>
                    <li>Can combine hardware and software wallets</li>
                    <li>Compatible with coordinator services like Sparrow</li>
                  </ul>
                </div>
              </div>
              <p className="text-xs text-muted-foreground italic">
                Multisignature provides security through distribution, making theft significantly
                more difficult while protecting against the loss of a single key.
              </p>
            </div>

            <div className="p-5 bg-gradient-to-b from-background to-muted/30 rounded-lg border border-border">
              <h5 className="font-medium mb-3">
                A Historical Timeline of Bitcoin Wallet Development
              </h5>
              <div className="relative pl-8 space-y-6">
                <div className="absolute left-0 top-1.5 h-4 w-4 rounded-full border-2 border-primary bg-background" />
                <div className="absolute left-[9px] top-[24px] bottom-0 w-0.5 bg-border h-[calc(100%-25px)]" />

                <div>
                  <div className="flex flex-col sm:flex-row sm:items-center gap-2 mb-2">
                    <h6 className="font-medium">Bitcoin Core (Bitcoin-Qt)</h6>
                    <span className="text-sm text-muted-foreground">2009</span>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    The original wallet implementation, built into the full node software.
                    Generated random keys with no backup mechanism other than manual file copies.
                  </p>
                </div>

                <div>
                  <div className="relative">
                    <div className="absolute -left-8 top-1.5 h-4 w-4 rounded-full border-2 border-primary bg-background" />
                  </div>
                  <div className="flex flex-col sm:flex-row sm:items-center gap-2 mb-2">
                    <h6 className="font-medium">BIP32: Hierarchical Deterministic Wallets</h6>
                    <span className="text-sm text-muted-foreground">2012</span>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Introduced key derivation trees, allowing a single seed to generate countless
                    keys in a deterministic manner, simplifying backups.
                  </p>
                </div>

                <div>
                  <div className="relative">
                    <div className="absolute -left-8 top-1.5 h-4 w-4 rounded-full border-2 border-primary bg-background" />
                  </div>
                  <div className="flex flex-col sm:flex-row sm:items-center gap-2 mb-2">
                    <h6 className="font-medium">BIP39: Mnemonic Seed Phrases</h6>
                    <span className="text-sm text-muted-foreground">2013</span>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Created human-readable seed backups using word lists, allowing people to write
                    down and restore their wallets using memorable phrases.
                  </p>
                </div>

                <div>
                  <div className="relative">
                    <div className="absolute -left-8 top-1.5 h-4 w-4 rounded-full border-2 border-primary bg-background" />
                  </div>
                  <div className="flex flex-col sm:flex-row sm:items-center gap-2 mb-2">
                    <h6 className="font-medium">First Hardware Wallets</h6>
                    <span className="text-sm text-muted-foreground">2014</span>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Trezor and Ledger introduced the first consumer hardware wallets, bringing
                    air-gapped key storage to everyday Bitcoin users.
                  </p>
                </div>

                <div>
                  <div className="relative">
                    <div className="absolute -left-8 top-1.5 h-4 w-4 rounded-full border-2 border-primary bg-background" />
                  </div>
                  <div className="flex flex-col sm:flex-row sm:items-center gap-2 mb-2">
                    <h6 className="font-medium">Modern Wallet Ecosystem</h6>
                    <span className="text-sm text-muted-foreground">Present</span>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Today's wallets feature sophisticated security models, Lightning Network
                    integration, coin control features, and specialized interfaces for different
                    user needs.
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
              "When I developed Bitcoin, I was acutely aware that we were creating a system where
              security was entirely the user's responsibility. This was a fundamental departure
              from traditional financial systems where trusted institutions safeguard your assets.
            </p>
            <p className="mt-3">
              The beauty of this approach is that it gives individuals complete sovereignty over
              their money—no one can freeze your assets, no authority can devalue your holdings
              through inflation, and no institution stands between you and your wealth. The
              challenge, of course, is that this sovereignty comes with the responsibility of
              securing your own keys.
            </p>
            <p className="mt-3">
              I'm pleased to see how wallet technology has evolved to make this responsibility
              more manageable for everyday users. The development of seed phrases, hardware
              wallets, and multisignature setups has made Bitcoin security more accessible without
              compromising its trustless nature. This balance of security and usability is
              essential for Bitcoin's long-term adoption."
            </p>
          </div>
        </div>

        <div className="mt-6 border-t border-border/40 pt-4">
          <VerifyCheckbox
            moduleId="fundamentals"
            sectionId="private-keys-wallets"
            verificationId="private-keys-wallets"
            label="I understand how to manage Bitcoin keys and wallets securely"
          />
        </div>
      </div>
    </ModuleContent>
  );
}
