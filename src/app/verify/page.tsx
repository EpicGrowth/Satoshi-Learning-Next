'use client';

import React from 'react';
import { Network, Shield, Bitcoin, FileCheck, ArrowRight } from 'lucide-react';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Link from 'next/link';
import { Button } from '@/components/ui/button';

const verificationTools = [
  {
    title: 'Block Explorer',
    description: 'Verify transactions and explore the blockchain. Search blocks, transactions, and addresses.',
    icon: Network,
    href: '/verify/blocks',
    features: [
      'Transaction verification',
      'Block inspection',
      'Address history',
      'Real-time updates',
    ],
  },
  {
    title: 'Digital Signatures',
    description: 'Verify message signatures and create signed messages using your Bitcoin keys.',
    icon: Shield,
    href: '/verify/signatures',
    features: [
      'Message signing',
      'Signature verification',
      'Key pair validation',
      'Address generation',
    ],
  },
  {
    title: 'Merkle Proofs',
    description: 'Verify transaction inclusion in blocks using Merkle proofs.',
    icon: FileCheck,
    href: '/verify/merkle',
    features: [
      'Merkle tree visualization',
      'Proof generation',
      'Proof verification',
      'SPV validation',
    ],
  },
];

export default function VerifyPage() {
  return (
    <div className="container py-10">
      <div className="text-center mb-16">
        <Badge variant="outline" className="mb-4">
          <Shield className="mr-1 h-3 w-3" />
          Verification Tools
        </Badge>
        <h1 className="text-4xl font-bold mb-4">Don't Trust, Verify</h1>
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
          Use these tools to verify transactions, signatures, and blockchain data. Take control of your Bitcoin journey.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {verificationTools.map((tool) => (
          <Link href={tool.href} key={tool.title}>
            <Card className="p-6 hover:shadow-lg transition-all duration-300 hover:-translate-y-1 hover:border-primary/40 h-full flex flex-col">
              <div className="flex items-center gap-4 mb-4">
                <div className="p-2 rounded-lg bg-primary/10">
                  <tool.icon className="h-6 w-6 text-primary" />
                </div>
                <h2 className="text-xl font-semibold">{tool.title}</h2>
              </div>
              <p className="text-muted-foreground mb-6">{tool.description}</p>
              <div className="space-y-2 flex-grow">
                <h3 className="font-medium mb-2">Features:</h3>
                <ul className="space-y-1">
                  {tool.features.map((feature) => (
                    <li key={feature} className="text-sm text-muted-foreground flex items-center">
                      <span className="w-1.5 h-1.5 rounded-full bg-primary/60 mr-2" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="mt-6 pt-4 border-t border-border/40">
                <Button variant="ghost" className="w-full justify-between hover:bg-primary/5">
                  Open Tool
                  <ArrowRight className="h-4 w-4 ml-2" />
                </Button>
              </div>
            </Card>
          </Link>
        ))}
      </div>
    </div>
  );
}
