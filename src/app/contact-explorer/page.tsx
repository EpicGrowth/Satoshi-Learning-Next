'use client';

import React from 'react';
import { ArrowLeft } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

// Force CSS loading for this client component
import '@/app/globals.css';

export default function ContactExplorerPage() {
  return (
    <div className="container py-12 max-w-4xl mx-auto">
      <Link href="/">
        <Button variant="ghost" className="mb-8 flex items-center gap-2">
          <ArrowLeft className="h-4 w-4" />
          Back to Home
        </Button>
      </Link>
      
      <h1 className="text-3xl font-bold mb-6">Contact Explorer</h1>
      <p className="text-muted-foreground mb-8">
        Explore Bitcoin contacts and address information.
      </p>

      <div className="p-6 border rounded-lg bg-card text-card-foreground">
        <h2 className="text-xl font-semibold mb-4">Contact Explorer</h2>
        <p className="mb-4">This feature is currently in development.</p>
        <p className="text-muted-foreground">
          The Contact Explorer will allow you to search, browse, and manage Bitcoin contacts and addresses.
        </p>
      </div>
    </div>
  );
}
