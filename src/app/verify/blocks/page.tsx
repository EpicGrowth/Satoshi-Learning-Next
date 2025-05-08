'use client';

import React from 'react';
import { ArrowLeft } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

// Force CSS loading for this client component
import '@/app/globals.css';

export default function BlockVerificationPage() {
  return (
    <div className="container py-12 max-w-4xl mx-auto">
      <Link href="/verify">
        <Button variant="ghost" className="mb-8 flex items-center gap-2">
          <ArrowLeft className="h-4 w-4" />
          Back to Verification Tools
        </Button>
      </Link>
      
      <h1 className="text-3xl font-bold mb-6">Bitcoin Block Explorer</h1>
      <p className="text-muted-foreground mb-8">
        Verify transactions and explore the blockchain directly. Search for blocks, transactions, and addresses to view their details.
      </p>

      <div className="p-6 border rounded-lg bg-card text-card-foreground">
        <h2 className="text-xl font-semibold mb-4">Block Explorer</h2>
        <p className="mb-4">This feature is currently in development.</p>
        <p className="text-muted-foreground">
          The Block Explorer will allow you to verify transactions, check block information, inspect address history, and track real-time updates to the Bitcoin blockchain.
        </p>
      </div>
    </div>
  );
}
