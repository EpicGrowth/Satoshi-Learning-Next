'use client';

import React, { useState } from 'react';
import { ArrowLeft, Shield, CheckCircle, XCircle, Copy, RefreshCw } from 'lucide-react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Textarea } from '@/components/ui/textarea';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import Link from 'next/link';

// Import bitcoinjs-lib for signature verification
// Note: This is a client-side only import
import * as bitcoin from 'bitcoinjs-lib';
import * as ecc from 'tiny-secp256k1';

// Initialize the library with the elliptic curve implementation
bitcoin.initEccLib(ecc);

export default function VerifySignaturesPage() {
  // State for the verify signature tab
  const [address, setAddress] = useState('');
  const [message, setMessage] = useState('');
  const [signature, setSignature] = useState('');
  const [verificationResult, setVerificationResult] = useState<boolean | null>(null);
  const [verifying, setVerifying] = useState(false);
  const [verificationError, setVerificationError] = useState('');

  // State for the create signature tab
  const [privateKey, setPrivateKey] = useState('');
  const [messageToSign, setMessageToSign] = useState('');
  const [generatedSignature, setGeneratedSignature] = useState('');
  const [generatedAddress, setGeneratedAddress] = useState('');
  const [signing, setSigning] = useState(false);
  const [signingError, setSigningError] = useState('');

  // Function to verify a Bitcoin message signature
  const verifySignature = async () => {
    if (!address || !message || !signature) {
      setVerificationError('Please fill in all fields');
      return;
    }

    setVerifying(true);
    setVerificationResult(null);
    setVerificationError('');

    try {
      // Use bitcoinjs-lib to verify the signature
      // This is a simplified implementation - in a real app, you'd want more robust validation
      const messageBuffer = Buffer.from(message);
      const signatureBuffer = Buffer.from(signature, 'base64');
      const addressObj = bitcoin.address.fromBase58Check(address);
      
      // Extract the public key hash
      const pubKeyHash = addressObj.hash;
      
      // Create a verification script
      const script = bitcoin.script.pubKeyHash.output.encode(pubKeyHash);
      
      // Verify the signature
      const valid = bitcoin.script.signature.verify(
        messageBuffer,
        signatureBuffer,
        script
      );
      
      setVerificationResult(valid);
    } catch (error) {
      console.error('Verification error:', error);
      setVerificationError('Invalid signature or address format');
      setVerificationResult(false);
    } finally {
      setVerifying(false);
    }
  };

  // Function to generate a Bitcoin message signature
  const generateSignature = async () => {
    if (!privateKey || !messageToSign) {
      setSigningError('Please fill in all fields');
      return;
    }

    setSigning(true);
    setGeneratedSignature('');
    setGeneratedAddress('');
    setSigningError('');

    try {
      // Use bitcoinjs-lib to generate the signature
      // This is a simplified implementation - in a real app, you'd want more robust validation
      const keyPair = bitcoin.ECPair.fromWIF(privateKey);
      const messageBuffer = Buffer.from(messageToSign);
      
      // Sign the message
      const signature = keyPair.sign(bitcoin.crypto.sha256(messageBuffer));
      const signatureBase64 = signature.toString('base64');
      
      // Get the address from the public key
      const { address } = bitcoin.payments.p2pkh({ 
        pubkey: keyPair.publicKey 
      });
      
      setGeneratedSignature(signatureBase64);
      setGeneratedAddress(address || '');
    } catch (error) {
      console.error('Signing error:', error);
      setSigningError('Invalid private key format');
    } finally {
      setSigning(false);
    }
  };

  // Function to copy text to clipboard
  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
    // You could add a toast notification here
  };

  return (
    <div className="container py-10">
      <div className="flex items-center mb-6">
        <Button variant="ghost" asChild className="mr-4">
          <Link href="/verify">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Verification Tools
          </Link>
        </Button>
      </div>

      <div className="text-center mb-10">
        <Badge variant="outline" className="mb-4">
          <Shield className="mr-1 h-3 w-3" />
          Signature Verification
        </Badge>
        <h1 className="text-4xl font-bold mb-4">Verify Bitcoin Signatures</h1>
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
          Verify cryptographic signatures to confirm message authenticity and ownership.
          Create signatures to prove you control a Bitcoin address.
        </p>
      </div>

      <Tabs defaultValue="verify" className="mb-10">
        <TabsList className="grid w-full grid-cols-2">
          <TabsTrigger value="verify">Verify Signature</TabsTrigger>
          <TabsTrigger value="create">Create Signature</TabsTrigger>
        </TabsList>
        
        <TabsContent value="verify">
          <Card>
            <CardHeader>
              <CardTitle>Verify a Message Signature</CardTitle>
              <CardDescription>
                Enter a Bitcoin address, message, and signature to verify authenticity
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <label className="text-sm font-medium mb-1 block">Bitcoin Address</label>
                <Input
                  placeholder="Enter Bitcoin address"
                  value={address}
                  onChange={(e) => setAddress(e.target.value)}
                />
              </div>
              <div>
                <label className="text-sm font-medium mb-1 block">Message</label>
                <Textarea
                  placeholder="Enter the message that was signed"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  rows={3}
                />
              </div>
              <div>
                <label className="text-sm font-medium mb-1 block">Signature</label>
                <Textarea
                  placeholder="Enter the cryptographic signature"
                  value={signature}
                  onChange={(e) => setSignature(e.target.value)}
                  rows={2}
                />
              </div>
              
              {verificationError && (
                <p className="text-red-500 text-sm">{verificationError}</p>
              )}
              
              <Button 
                onClick={verifySignature} 
                disabled={verifying}
                className="w-full button-search"
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
                <div className={`p-4 rounded-md ${verificationResult ? 'bg-green-100 dark:bg-green-900/20' : 'bg-red-100 dark:bg-red-900/20'}`}>
                  <div className="flex items-center">
                    {verificationResult ? (
                      <>
                        <CheckCircle className="h-5 w-5 text-green-600 dark:text-green-400 mr-2" />
                        <span className="font-medium">Valid signature! The message was signed by the owner of this address.</span>
                      </>
                    ) : (
                      <>
                        <XCircle className="h-5 w-5 text-red-600 dark:text-red-400 mr-2" />
                        <span className="font-medium">Invalid signature. Verification failed.</span>
                      </>
                    )}
                  </div>
                </div>
              )}
            </CardContent>
            <CardFooter className="flex justify-between text-sm text-muted-foreground">
              <p>
                Verify that a message was signed by the owner of a specific Bitcoin address.
              </p>
            </CardFooter>
          </Card>
        </TabsContent>
        
        <TabsContent value="create">
          <Card>
            <CardHeader>
              <CardTitle>Create a Message Signature</CardTitle>
              <CardDescription>
                Sign a message with your private key to prove ownership of an address
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="bg-yellow-100 dark:bg-yellow-900/20 p-4 rounded-md mb-4">
                <p className="text-sm text-yellow-800 dark:text-yellow-200">
                  <strong>Security Warning:</strong> This tool runs entirely in your browser. 
                  Never share your private key with anyone or enter it on untrusted websites.
                  For maximum security, use this tool on an offline computer.
                </p>
              </div>
              
              <div>
                <label className="text-sm font-medium mb-1 block">Private Key (WIF format)</label>
                <Input
                  type="password"
                  placeholder="Enter your private key"
                  value={privateKey}
                  onChange={(e) => setPrivateKey(e.target.value)}
                />
              </div>
              <div>
                <label className="text-sm font-medium mb-1 block">Message to Sign</label>
                <Textarea
                  placeholder="Enter a message to sign"
                  value={messageToSign}
                  onChange={(e) => setMessageToSign(e.target.value)}
                  rows={3}
                />
              </div>
              
              {signingError && (
                <p className="text-red-500 text-sm">{signingError}</p>
              )}
              
              <Button 
                onClick={generateSignature} 
                disabled={signing}
                className="w-full button-search"
              >
                {signing ? (
                  <>
                    <RefreshCw className="mr-2 h-4 w-4 animate-spin" />
                    Signing...
                  </>
                ) : (
                  <>
                    <Shield className="mr-2 h-4 w-4" />
                    Sign Message
                  </>
                )}
              </Button>
              
              {generatedSignature && (
                <div className="border rounded-md p-4 space-y-3">
                  <div>
                    <label className="text-sm font-medium block mb-1">Bitcoin Address</label>
                    <div className="flex items-center">
                      <Input value={generatedAddress} readOnly />
                      <Button 
                        variant="ghost" 
                        size="icon" 
                        className="ml-2"
                        onClick={() => copyToClipboard(generatedAddress)}
                      >
                        <Copy className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                  <div>
                    <label className="text-sm font-medium block mb-1">Signature</label>
                    <div className="flex items-center">
                      <Textarea value={generatedSignature} readOnly rows={2} />
                      <Button 
                        variant="ghost" 
                        size="icon" 
                        className="ml-2"
                        onClick={() => copyToClipboard(generatedSignature)}
                      >
                        <Copy className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                </div>
              )}
            </CardContent>
            <CardFooter className="flex justify-between text-sm text-muted-foreground">
              <p>
                Create a cryptographic signature to prove you own a Bitcoin address without revealing your private key.
              </p>
            </CardFooter>
          </Card>
        </TabsContent>
      </Tabs>
      
      <Card className="mb-10">
        <CardHeader>
          <CardTitle>How Bitcoin Signatures Work</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <p>
            Bitcoin uses the Elliptic Curve Digital Signature Algorithm (ECDSA) to create and verify signatures.
            Here's how the process works:
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="border rounded-md p-4">
              <h3 className="text-lg font-medium mb-2">Creating a Signature</h3>
              <ol className="list-decimal list-inside space-y-2 text-sm">
                <li>A message is hashed using SHA-256</li>
                <li>The private key signs the hash</li>
                <li>The signature is created along with the public key</li>
                <li>The signature proves ownership without revealing the private key</li>
              </ol>
            </div>
            
            <div className="border rounded-md p-4">
              <h3 className="text-lg font-medium mb-2">Verifying a Signature</h3>
              <ol className="list-decimal list-inside space-y-2 text-sm">
                <li>The verifier has the message, signature, and Bitcoin address</li>
                <li>The message is hashed using the same algorithm</li>
                <li>The signature is verified against the Bitcoin address</li>
                <li>If valid, it proves the message was signed by the address owner</li>
              </ol>
            </div>
          </div>
          
          <p className="text-sm text-muted-foreground">
            Signatures are essential for Bitcoin transactions, proving that only the rightful owner of funds can spend them.
            The same cryptographic principles are used to sign arbitrary messages, proving ownership of an address.
          </p>
        </CardContent>
      </Card>
    </div>
  );
}
