import React from 'react';
import { ModuleContent } from '@/components/learn/shared/components/module-content';
import { Eye } from 'lucide-react';
import type { ContentSection } from '@/components/learn/shared/types/learning.types';

const sections: ContentSection[] = [
  {
    id: 'watchtowers',
    title: 'Lightning Watchtowers',
    icon: Eye,
    content: 'Understanding the role and implementation of Lightning Network watchtowers.',
    subsections: [
      {
        title: 'Watchtower Fundamentals',
        points: [
          'Purpose and functionality',
          'Channel state monitoring',
          'Breach protection',
          'Penalty transaction enforcement',
        ],
        technicalDetails:
          'Watchtowers monitor the blockchain for outdated channel states and protect against malicious channel closures by broadcasting penalty transactions.',
        practicalExample: 'Setting up a watchtower to protect your channels while offline.',
      },
    ],
  },
];

import SEO from '@/components/SEO';

export default function Watchtowers() {
  return (
    <>
      <SEO
        title="Watchtowers | Lightning Advanced Concepts | Satoshi Learning Path"
        description="Understand the role of watchtowers in Lightning Network security."
      />
      <ModuleContent
        moduleId="advanced-concepts"
        moduleTitle="Lightning Watchtowers"
        moduleDescription="Learn about Lightning Network's trustless security mechanism."
        icon={Eye}
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
