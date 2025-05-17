'use client';

import SectionContent from './section-content';

export default function SectionPage({ params }: { params: { path: string, module: string, section: string } }) {
  return <SectionContent />;
}