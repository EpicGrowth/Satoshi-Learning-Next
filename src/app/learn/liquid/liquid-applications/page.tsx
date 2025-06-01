import React from 'react';
import Link from 'next/link';
import { Card } from '@/components/ui/card';
import { ArrowRight } from 'lucide-react';

const moduleDetails = {
  title: 'Applications & Use Cases',
  description: 'Real-world applications of Liquid',
  sections: [
    { id: 'token-issuance', title: 'Token Issuance' },
    { id: 'exchanges', title: 'Exchange Integration' },
    { id: 'defi', title: 'DeFi on Liquid' },
    { id: 'security-tokens', title: 'Security Tokens' },
  ]
};
const moduleId = 'liquid-applications';

export default function LiquidApplicationsPage() {
  return (
    <div className="container py-8 px-4 sm:px-6 lg:px-8">
      <div className="mb-8">
        <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl lg:text-6xl mb-4">
          {moduleDetails.title}
        </h1>
        <p className="text-lg text-muted-foreground sm:text-xl max-w-3xl">
          {moduleDetails.description}
        </p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {moduleDetails.sections.map((section) => (
          <Card key={section.id} className="p-6 flex flex-col justify-between hover:shadow-lg transition-shadow duration-200">
            <div>
              <h2 className="text-xl font-semibold mb-2 text-foreground">{section.title}</h2>
              {/* You can add section.description here if available and desired */}
            </div>
            <Link
              href={`/learn/liquid/${moduleId}/${section.id}`}
              className="mt-4 inline-flex items-center text-bitcoin-orange hover:underline group"
            >
              Go to section
              <ArrowRight className="ml-2 h-4 w-4 transform group-hover:translate-x-1 transition-transform duration-200" />
            </Link>
          </Card>
        ))}
      </div>
    </div>
  );
}
