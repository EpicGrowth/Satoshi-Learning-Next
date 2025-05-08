'use client';

import React from 'react';
import { ArrowLeft } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

// Force CSS loading for this client component
import '@/app/globals.css';

export default function SignatureVerificationPage() {
  return (
    <div className="container py-12 max-w-4xl mx-auto">
      <Link href="/verify">
        <Button variant="ghost" className="mb-8 flex items-center gap-2">
          <ArrowLeft className="h-4 w-4" />
          Back to Verification Tools
        </Button>
      </Link>
      
      <h1 className="text-3xl font-bold mb-6">Digital Signature Verification</h1>
      <p className="text-muted-foreground mb-8">
        Verify message signatures and create signed messages using your Bitcoin keys.
      </p>

      <div className="p-6 border rounded-lg bg-card text-card-foreground">
        <h2 className="text-xl font-semibold mb-4">Signature Tools</h2>
        <p className="mb-4">This feature is currently in development.</p>
        <p className="text-muted-foreground">
          The Signature Verification tool will allow you to verify message signatures, create signed messages, validate key pairs, and generate Bitcoin addresses.
        </p>
      </div>
    </div>
  );
}
