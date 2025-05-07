import React from 'react';
import { ModuleContent } from '@/components/learn/shared/components/module-content';
import { Shield } from 'lucide-react';
import type { ContentSection } from '@/components/learn/shared/types/learning.types';

const sections: ContentSection[] = [
  {
    id: 'security',
    title: 'Security Best Practices',
    icon: Shield,
    content: 'Learn advanced security practices for Lightning Network nodes.',
    subsections: [
      {
        title: 'Advanced Security Measures',
        points: [
          'Node hardening techniques',
          'Key management practices',
          'Channel security policies',
          'Backup strategies',
        ],
        technicalDetails:
          'Implementing comprehensive security measures protects against both remote attacks and channel-based attacks while ensuring funds remain safe.',
        practicalExample:
          'Setting up a hardened Lightning node with automated backups and monitoring.',
      },
    ],
  },
];

import SEO from '@/components/SEO';

export default function SecurityPractices() {
  return (
    <>
      <SEO
        title="Security Practices | Lightning Advanced Concepts | Satoshi Learning Path"
        description="Best practices for securing Lightning Network operations."
      />
      <ModuleContent
        moduleId="advanced-concepts"
        title="Security Best Practices"
        description="Learn advanced security measures for Lightning Network operations."
        sections={sections}
      />
    </>
  );
}
