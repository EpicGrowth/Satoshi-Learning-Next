'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Bitcoin, ChevronRight } from 'lucide-react';

export default function RootNotFoundClient() {
  const [isMounted, setIsMounted] = useState(false);
  
  useEffect(() => {
    setIsMounted(true);
    return () => setIsMounted(false);
  }, []);

  if (!isMounted) {
    return null;
  }

  return (
    <div className="min-h-screen bg-background">
      <div className="container flex flex-col items-center justify-center gap-8 py-24">
        <div className="text-center space-y-3">
          <h1 className="text-4xl font-bold">404 - Page Not Found</h1>
          <p className="text-lg text-muted-foreground">
            The page you're looking for doesn't exist or has been moved.
          </p>
        </div>

        <div className="flex flex-col items-center gap-4">
          <Link href="/">
            <Button className="flex items-center gap-2">
              <Bitcoin className="h-4 w-4" />
              Return Home
            </Button>
          </Link>
          <Link href="/learn/bitcoin">
            <Button variant="outline" className="flex items-center gap-2">
              Start Learning Bitcoin
              <ChevronRight className="h-4 w-4" />
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}