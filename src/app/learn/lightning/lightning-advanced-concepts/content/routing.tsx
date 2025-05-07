import React from 'react';
import { ContentSection } from '../../../../shared/types/learning.types';
import { ModuleContent } from '../../../../shared/components/module-content';

const content: ContentSection[] = [
  {
    id: 'routing',
    title: 'Lightning Network Routing',
    content: 'Understanding how payments are routed through the Lightning Network...',
    subsections: [
      {
        title: 'Routing Fundamentals',
        points: [
          'Path finding algorithms',
          'Fee calculation',
          'Route optimization',
          'Failure handling'
        ],
        technicalDetails: 'Routing uses source-based onion routing...',
        practicalExample: 'Example of a payment finding its way through multiple nodes...'
      }
    ]
  }
];

import SEO from '@/components/SEO';

export default function Routing() {
  return (
    <>
      <SEO
        title="Lightning Routing | Lightning Advanced Concepts | Satoshi Learning Path"
        description="Explore how routing works in the Lightning Network."
      />
      <ModuleContent sections={content} />;
    </>
  );
}
