import React from 'react';
import { ModuleContent } from '@/components/learn/shared/components/module-content';
import { GitBranch } from 'lucide-react';
import type { ContentSection } from '@/components/learn/shared/types/learning.types';

const sections: ContentSection[] = [
  {
    id: 'multipaths',
    title: 'Multi-path Payments',
    icon: GitBranch,
    content: 'Understanding multi-path payments in the Lightning Network.',
    subsections: [
      {
        title: 'Multi-path Payment Concepts',
        points: [
          'Payment splitting',
          'Route diversity',
          'Success probability',
          'Channel capacity optimization',
        ],
        technicalDetails:
          'Multi-path payments (MPP) split a single payment across multiple Lightning Network routes, improving payment reliability and allowing larger payments.',
        practicalExample:
          'Sending a 1 BTC payment by splitting it across multiple smaller channels.',
      },
    ],
  },
];

import SEO from '@/components/SEO';

export default function MultipathPayments() {
  return (
    <>
      <SEO
        title="Multipath Payments | Lightning Advanced Concepts | Satoshi Learning Path"
        description="Learn about multipath payments and their advantages in Lightning Network."
      />
      <ModuleContent
        moduleId="advanced-concepts"
        moduleTitle="Multi-path Payments"
        moduleDescription="Explore how Lightning Network enables more efficient payments."
        icon={GitBranch}
      >
        <div className="space-y-4">
          {sections.map((section) => (
            <div key={section.id} className="bg-card p-6 rounded-lg border border-border">
              <h2 className="text-xl font-bold mb-4">{section.title}</h2>
              <p>{section.content}</p>
            </div>
          ))}
        </div>
      </ModuleContent>
    </>
  );
}
