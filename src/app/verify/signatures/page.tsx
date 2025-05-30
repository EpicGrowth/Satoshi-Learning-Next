'use client';

import React from 'react';
import { Shield, Info, ArrowLeft } from 'lucide-react';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import dynamic from 'next/dynamic';

// Dynamically import the signature verification tool with client-side only flag
const SignatureVerificationTool = dynamic(
  () => import('./signature-verification-tool'),
  {
    ssr: false,
    loading: () => (
      <div className="flex items-center justify-center h-[400px]">
        <div className="flex flex-col items-center gap-4">
          <Shield className="h-12 w-12 text-muted-foreground animate-pulse" />
          <p className="text-muted-foreground">Loading signature verification tool...</p>
        </div>
      </div>
    ),
  }
);

export default function VerifySignaturesPage() {
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
      <div className="text-center mb-12">
        <Badge variant="outline" className="mb-4">
          <Shield className="mr-1 h-3 w-3" />
          Verification Tool
        </Badge>
        <h1 className="text-4xl font-bold mb-4">Bitcoin Signature Verification</h1>
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
          Verify message signatures or create signed messages using Bitcoin keys.
        </p>
      </div>
      <SignatureVerificationTool />
      <div className="mt-16">
        <Alert>
          <Info className="h-4 w-4" />
          <AlertTitle>About Bitcoin Signatures</AlertTitle>
          <AlertDescription>
            Bitcoin uses the Elliptic Curve Digital Signature Algorithm (ECDSA) to create and verify signatures.
            Signatures prove ownership of a private key without revealing it, allowing you to verify messages
            from Bitcoin addresses. All signature operations happen in your browser - no private keys are ever sent to servers.
          </AlertDescription>
        </Alert>
      </div>
      
      <div className="mt-12 border rounded-md p-6 bg-card text-card-foreground shadow-sm">
        <div className="flex flex-col space-y-1.5 pb-4 border-b mb-4">
          <h3 className="text-xl font-semibold">How Bitcoin Signatures Work</h3>
        </div>
        <div className="space-y-4">
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
        </div>
      </div>
    </div>
  );
}
