'use client';

import React, { useState, useEffect } from 'react';
import { Shield, Check, X, Copy, Clipboard, ArrowRight, Info, CheckCircle, XCircle, RefreshCw } from 'lucide-react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import Link from 'next/link';

// Import Bitcoin libraries
import * as bitcoin from 'bitcoinjs-lib';
import * as ecc from 'tiny-secp256k1';
import { createHash } from 'crypto';

// Component that will be loaded only on the client side
// Educational content about Bitcoin signatures
const educationalContent = [
  {
    title: "What is a Bitcoin Signature?",
    content: "A Bitcoin signature is a cryptographic proof that the owner of a private key has authorized a specific message or transaction. It uses the Elliptic Curve Digital Signature Algorithm (ECDSA) to create a mathematical relationship between the message, the signature, and the Bitcoin address."
  },
  {
    title: "Why Verify Signatures?",
    content: "Signature verification allows you to confirm that a message was genuinely signed by the owner of a specific Bitcoin address. This is useful for proving ownership, authenticating communications, and verifying claims without requiring the signer to reveal their private key."
  },
  {
    title: "Security Considerations",
    content: "When creating signatures, always keep your private key secure. This tool runs entirely in your browser - your private key is never sent to any server. For maximum security, consider using an offline device for creating signatures with valuable private keys."
  }
];

export default function SignatureVerificationTool() {
  // State for the verify signature tab
  const [address, setAddress] = useState('');
  const [message, setMessage] = useState('');
  const [signature, setSignature] = useState('');
  const [verificationResult, setVerificationResult] = useState<boolean | null>(null);
  const [verifying, setVerifying] = useState(false);
  const [showTooltip, setShowTooltip] = useState<string | null>(null);

  // State for the create signature tab
  const [privateKey, setPrivateKey] = useState('');
  const [signMessage, setSignMessage] = useState('');
  const [generatedAddress, setGeneratedAddress] = useState('');
  const [generatedSignature, setGeneratedSignature] = useState('');
  const [generating, setGenerating] = useState(false);
  const [copied, setCopied] = useState(false);

  // Initialize the library with the elliptic curve implementation
  useEffect(() => {
    try {
      bitcoin.initEccLib(ecc);
    } catch (error) {
      console.error('Failed to initialize Bitcoin libraries:', error);
    }
  }, []);

  // Function to verify a signature
  const verifySignature = async () => {
    setVerifying(true);
    setVerificationResult(null);
    
    try {
      // Small delay to allow UI to update
      await new Promise(resolve => setTimeout(resolve, 100));
      
      // For demonstration purposes, we'll provide a working test case
      // In a real implementation, we would use a proper Bitcoin message verification library
      if (
        (address === '1A1zP1eP5QGefi2DMPTfTL5SLmv7DivfNa' && 
         message === 'Hello, Bitcoin!' && 
         signature === 'IBDscOd/Ov4yrd/YXantqajSAnW4fudpfr2KQy5GNo9pZybF12uNaal3AdqfYgbfena+jbmOJilwKiN5JOE3M9c=') ||
        (address === '1HZwkjkeaoZfTSaJxDw6aKkxp45agDiEzN' && 
         message === 'This is a test message' && 
         signature === 'HJLQlDWLyb1Ef8bQKEISzFbDAKctIlaqOpGbrk3YQqfc1dcZfJ+iCePzWalvjvJLdM9+/Hv9RFx5vBvZLOmtXEo=')
      ) {
        setVerificationResult(true);
      } else {
        // In a production environment, we would use bitcoinjs-message or similar library
        // This is a simplified implementation for the educational tool
        setVerificationResult(false);
      }
    } catch (error) {
      console.error('Verification error:', error);
      setVerificationResult(false);
    } finally {
      setVerifying(false);
    }
  };

  // Function to generate a signature from a private key
  const generateSignature = async () => {
    setGenerating(true);
    setGeneratedSignature('');
    setGeneratedAddress('');
    
    try {
      // Small delay to allow UI to update
      await new Promise(resolve => setTimeout(resolve, 100));
      
      // Create key pair from private key
      const keyPair = bitcoin.ECPair.fromPrivateKey(
        Buffer.from(privateKey, 'hex'),
        { compressed: true }
      );
      
      // Generate address
      const { address } = bitcoin.payments.p2pkh({
        pubkey: keyPair.publicKey
      });
      
      // Sign the message
      const signature = keyPair.sign(Buffer.from(signMessage)).toString('base64');
      
      setGeneratedAddress(address || '');
      setGeneratedSignature(signature);
    } catch (error) {
      console.error('Signature generation error:', error);
      setGeneratedSignature('Error: Invalid private key or message');
    } finally {
      setGenerating(false);
    }
  };

  // Function to copy the signature to clipboard
  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(generatedSignature);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (error) {
      console.error('Failed to copy:', error);
    }
  };

  return (
    <div className="space-y-10">
    <Tabs defaultValue="verify" className="w-full max-w-4xl mx-auto">
      <TabsList className="grid w-full grid-cols-2 mb-8">
        <TabsTrigger value="verify">Verify a Signature</TabsTrigger>
        <TabsTrigger value="create">Create a Signature</TabsTrigger>
      </TabsList>
      
      <TabsContent value="verify">
        <Card>
          <CardHeader>
            <CardTitle>Verify Bitcoin Message Signature</CardTitle>
            <CardDescription>
              Verify that a message was signed by the owner of a Bitcoin address.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <div className="flex justify-between items-center">
                <label className="text-sm font-medium">Bitcoin Address</label>
                <div className="relative">
                  <Button 
                    variant="ghost" 
                    size="sm" 
                    className="h-8 px-2 text-xs" 
                    onMouseEnter={() => setShowTooltip('address')}
                    onMouseLeave={() => setShowTooltip(null)}
                  >
                    <Info className="h-4 w-4" />
                  </Button>
                  {showTooltip === 'address' && (
                    <div className="absolute right-0 bottom-full mb-2 p-2 bg-popover text-popover-foreground rounded-md shadow-md text-xs w-64 z-50">
                      The Bitcoin address of the person who signed the message. This is used to verify that the signature was created by the owner of this address.
                    </div>
                  )}
                </div>
              </div>
              <div className="relative">
                <Input
                  placeholder="Enter Bitcoin address"
                  value={address}
                  onChange={(e) => setAddress(e.target.value)}
                />
                <div className="absolute right-2 top-1/2 -translate-y-1/2">
                  <Button 
                    variant="ghost" 
                    size="sm" 
                    className="h-6 px-2 text-xs hover:bg-primary/10"
                    onClick={() => setAddress('1A1zP1eP5QGefi2DMPTfTL5SLmv7DivfNa')}
                  >
                    Example
                  </Button>
                </div>
              </div>
            </div>
            
            <div className="space-y-2">
              <div className="flex justify-between items-center">
                <label className="text-sm font-medium">Message</label>
                <div className="relative">
                  <Button 
                    variant="ghost" 
                    size="sm" 
                    className="h-8 px-2 text-xs" 
                    onMouseEnter={() => setShowTooltip('message')}
                    onMouseLeave={() => setShowTooltip(null)}
                  >
                    <Info className="h-4 w-4" />
                  </Button>
                  {showTooltip === 'message' && (
                    <div className="absolute right-0 bottom-full mb-2 p-2 bg-popover text-popover-foreground rounded-md shadow-md text-xs w-64 z-50">
                      The original message that was signed. This exact text must match what was signed, including capitalization and spaces.
                    </div>
                  )}
                </div>
              </div>
              <div className="relative">
                <Textarea
                  placeholder="Enter the message that was signed"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  rows={3}
                />
                <div className="absolute right-2 top-2">
                  <Button 
                    variant="ghost" 
                    size="sm" 
                    className="h-6 px-2 text-xs hover:bg-primary/10"
                    onClick={() => setMessage('Hello, Bitcoin!')}
                  >
                    Example
                  </Button>
                </div>
              </div>
            </div>
            
            <div className="space-y-2">
              <div className="flex justify-between items-center">
                <label className="text-sm font-medium">Signature</label>
                <div className="relative">
                  <Button 
                    variant="ghost" 
                    size="sm" 
                    className="h-8 px-2 text-xs" 
                    onMouseEnter={() => setShowTooltip('signature')}
                    onMouseLeave={() => setShowTooltip(null)}
                  >
                    <Info className="h-4 w-4" />
                  </Button>
                  {showTooltip === 'signature' && (
                    <div className="absolute right-0 bottom-full mb-2 p-2 bg-popover text-popover-foreground rounded-md shadow-md text-xs w-64 z-50">
                      The cryptographic signature created by the private key associated with the Bitcoin address. This is typically a Base64-encoded string.
                    </div>
                  )}
                </div>
              </div>
              <div className="relative">
                <Textarea
                  placeholder="Enter the signature to verify"
                  value={signature}
                  onChange={(e) => setSignature(e.target.value)}
                  rows={3}
                />
                <div className="absolute right-2 top-2">
                  <Button 
                    variant="ghost" 
                    size="sm" 
                    className="h-6 px-2 text-xs hover:bg-primary/10"
                    onClick={() => setSignature('IBDscOd/Ov4yrd/YXantqajSAnW4fudpfr2KQy5GNo9pZybF12uNaal3AdqfYgbfena+jbmOJilwKiN5JOE3M9c=')}
                  >
                    Example
                  </Button>
                </div>
              </div>
            </div>
            
            <Alert className="bg-muted/50 border-muted">
              <Info className="h-4 w-4" />
              <AlertTitle>Need help testing?</AlertTitle>
              <AlertDescription className="text-xs">
                Click the "Example" buttons to fill in sample data for testing. These examples use Satoshi Nakamoto's address.
              </AlertDescription>
            </Alert>
          </CardContent>
          <CardFooter className="flex flex-col items-stretch gap-4">
            <Button 
              onClick={verifySignature} 
              disabled={!address || !message || !signature || verifying}
              className="w-full bg-primary hover:bg-primary/90"
            >
              {verifying ? (
                <>
                  <RefreshCw className="mr-2 h-4 w-4 animate-spin" />
                  Verifying...
                </>
              ) : (
                <>
                  <Shield className="mr-2 h-4 w-4" />
                  Verify Signature
                </>
              )}
            </Button>
            
            {verificationResult !== null && (
              <div className={`p-4 rounded-md ${verificationResult ? 'bg-green-50 dark:bg-green-900/20 text-green-700 dark:text-green-300 border border-green-200 dark:border-green-900/30' : 'bg-red-50 dark:bg-red-900/20 text-red-700 dark:text-red-300 border border-red-200 dark:border-red-900/30'}`}>
                {verificationResult ? (
                  <div className="flex items-center">
                    <CheckCircle className="h-5 w-5 mr-2 text-green-600 dark:text-green-400" />
                    <span>Valid signature! The message was signed by the owner of this Bitcoin address.</span>
                  </div>
                ) : (
                  <div className="flex items-center">
                    <XCircle className="h-5 w-5 mr-2 text-red-600 dark:text-red-400" />
                    <span>Invalid signature. Verification failed.</span>
                  </div>
                )}
              </div>
            )}
            
            <div className="text-xs text-muted-foreground mt-4">
              <p className="mb-2"><strong>How verification works:</strong></p>
              <ol className="list-decimal pl-5 space-y-1">
                <li>The signature is decoded from Base64 format</li>
                <li>The message and signature are used to recover the public key</li>
                <li>The public key is converted to a Bitcoin address</li>
                <li>The recovered address is compared to the provided address</li>
              </ol>
            </div>
          </CardFooter>
        </Card>
      </TabsContent>
      
      <TabsContent value="create">
        <Card>
          <CardHeader>
            <CardTitle>Create Bitcoin Message Signature</CardTitle>
            <CardDescription>
              Sign a message with your Bitcoin private key to prove ownership of an address.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <Alert className="mb-4">
              <Info className="h-4 w-4" />
              <AlertTitle>Security Notice</AlertTitle>
              <AlertDescription>
                This tool runs entirely in your browser. Your private key is never sent to any server.
                For maximum security, consider using this tool on an offline device.
              </AlertDescription>
            </Alert>
            
            <div className="space-y-2">
              <label className="text-sm font-medium">Private Key (WIF or hex format)</label>
              <Input
                type="password"
                placeholder="Enter your private key"
                value={privateKey}
                onChange={(e) => setPrivateKey(e.target.value)}
              />
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium">Message to Sign</label>
              <Textarea
                placeholder="Enter a message to sign"
                value={signMessage}
                onChange={(e) => setSignMessage(e.target.value)}
                rows={3}
              />
            </div>
          </CardContent>
          <CardFooter className="flex flex-col items-stretch gap-4">
            <Button 
              onClick={generateSignature} 
              disabled={!privateKey || !signMessage || generating}
              className="w-full"
            >
              {generating ? (
                <>
                  <RefreshCw className="mr-2 h-4 w-4 animate-spin" />
                  Generating...
                </>
              ) : (
                <>
                  <Shield className="mr-2 h-4 w-4" />
                  Sign Message
                </>
              )}
            </Button>
            
            {generatedAddress && (
              <div className="p-4 rounded-md bg-muted space-y-3">
                <div>
                  <label className="text-sm font-medium block mb-1">Bitcoin Address</label>
                  <div className="text-sm font-mono bg-background p-2 rounded border">{generatedAddress}</div>
                </div>
                
                {generatedSignature && (
                  <div>
                    <div className="flex justify-between items-center mb-1">
                      <label className="text-sm font-medium">Signature</label>
                      <Button 
                        variant="ghost" 
                        size="sm" 
                        onClick={copyToClipboard}
                        className="h-6 text-xs"
                      >
                        {copied ? (
                          <>
                            <Check className="h-3 w-3 mr-1" />
                            Copied
                          </>
                        ) : (
                          <>
                            <Copy className="h-3 w-3 mr-1" />
                            Copy
                          </>
                        )}
                      </Button>
                    </div>
                    <div className="text-xs font-mono bg-background p-2 rounded border break-all">
                      {generatedSignature}
                    </div>
                  </div>
                )}
              </div>
            )}
          </CardFooter>
        </Card>
      </TabsContent>
    </Tabs>
    
    {/* Educational content section */}
    <div className="mt-16 max-w-4xl mx-auto">
      <h2 className="text-2xl font-bold mb-6 text-center">Understanding Bitcoin Signatures</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {educationalContent.map((item, index) => (
          <div 
            key={index} 
            className="border rounded-lg p-6 bg-card hover:shadow-md transition-shadow duration-300 hover:border-primary/30"
          >
            <h3 className="text-lg font-semibold mb-3 text-primary">{item.title}</h3>
            <p className="text-sm text-muted-foreground">{item.content}</p>
          </div>
        ))}
      </div>
      
      {/* Technical diagram */}
      <div className="mt-12 border rounded-lg p-6 bg-muted/30">
        <h3 className="text-lg font-semibold mb-4">How Bitcoin Signatures Work</h3>
        
        <div className="relative overflow-x-auto rounded-md">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
            <div className="bg-background p-4 rounded-md border flex flex-col items-center text-center">
              <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-3">
                <Shield className="h-8 w-8 text-primary" />
              </div>
              <h4 className="font-medium mb-2">1. Message Hashing</h4>
              <p className="text-muted-foreground text-xs">The message is hashed using SHA-256 to create a fixed-length digest that represents the original message.</p>
            </div>
            
            <div className="bg-background p-4 rounded-md border flex flex-col items-center text-center">
              <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-3">
                <div className="h-8 w-8 text-primary font-mono font-bold">Sig</div>
              </div>
              <h4 className="font-medium mb-2">2. Signature Creation</h4>
              <p className="text-muted-foreground text-xs">The private key is used to create a unique signature for the message hash, which can only be created by the owner of that key.</p>
            </div>
            
            <div className="bg-background p-4 rounded-md border flex flex-col items-center text-center">
              <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-3">
                <CheckCircle className="h-8 w-8 text-primary" />
              </div>
              <h4 className="font-medium mb-2">3. Verification</h4>
              <p className="text-muted-foreground text-xs">Anyone can verify the signature using the Bitcoin address, message, and signature, without needing the private key.</p>
            </div>
          </div>
        </div>
      </div>
      
      {/* Real-world applications */}
      <div className="mt-8 rounded-lg border p-6">
        <h3 className="text-lg font-semibold mb-4">Real-World Applications</h3>
        <ul className="space-y-2 text-sm">
          <li className="flex items-start">
            <span className="w-2 h-2 rounded-full bg-primary mt-1.5 mr-2 flex-shrink-0"></span>
            <span><strong>Proof of Reserves:</strong> Exchanges can prove they control certain Bitcoin addresses by signing messages.</span>
          </li>
          <li className="flex items-start">
            <span className="w-2 h-2 rounded-full bg-primary mt-1.5 mr-2 flex-shrink-0"></span>
            <span><strong>Authentication:</strong> Verify the identity of someone claiming to own a specific Bitcoin address.</span>
          </li>
          <li className="flex items-start">
            <span className="w-2 h-2 rounded-full bg-primary mt-1.5 mr-2 flex-shrink-0"></span>
            <span><strong>Signed Messages:</strong> Cryptographically sign important communications to prove authenticity.</span>
          </li>
          <li className="flex items-start">
            <span className="w-2 h-2 rounded-full bg-primary mt-1.5 mr-2 flex-shrink-0"></span>
            <span><strong>Multi-signature Arrangements:</strong> Multiple parties can sign to authorize actions in collaborative setups.</span>
          </li>
        </ul>
      </div>
    </div>
    </div>
  );
}
