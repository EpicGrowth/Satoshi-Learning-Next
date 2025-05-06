'use client';

import React from 'react';
import { Bitcoin, Zap, Heart } from 'lucide-react';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import BitcoinDonation from '@/components/bitcoin/BitcoinDonation';

export default function DonatePage() {
  return (
    <div className="container py-10">
      <div className="text-center mb-16">
        <Badge variant="outline" className="mb-4 border-red-500/20 text-red-500">
          <Heart className="mr-1 h-3 w-3" />
          Support Our Mission
        </Badge>
        <h1 className="text-4xl font-bold mb-4">Support Bitcoin Education</h1>
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
          Help us continue providing high-quality Bitcoin education and verification tools.
          Your support makes a difference.
        </p>
      </div>

      <div className="max-w-3xl mx-auto">
        <Card className="mb-8">
          <CardHeader>
            <div className="flex items-center gap-2 mb-2">
              <Bitcoin className="h-5 w-5 text-orange-500" />
              <CardTitle>Bitcoin Donation</CardTitle>
            </div>
            <CardDescription>
              Support us with a Bitcoin on-chain donation. Every satoshi helps!
            </CardDescription>
          </CardHeader>
          <CardContent>
            <BitcoinDonation />
          </CardContent>
        </Card>

        <Card className="mb-8">
          <CardHeader>
            <div className="flex items-center gap-2 mb-2">
              <Zap className="h-5 w-5 text-yellow-500" />
              <CardTitle>Lightning Network</CardTitle>
            </div>
            <CardDescription>
              Make an instant, low-fee donation using the Lightning Network.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="text-center text-muted-foreground py-8">
              Lightning Network donations coming soon...
            </div>
          </CardContent>
        </Card>

        <div className="text-center text-sm text-muted-foreground mt-8">
          <p>
            Your donations help us maintain and improve our educational resources,
            develop new verification tools, and keep our content free for everyone.
          </p>
          <p className="mt-2">
            Thank you for supporting Bitcoin education and the principles of
            verification and decentralization.
          </p>
        </div>
      </div>
    </div>
  );
}
