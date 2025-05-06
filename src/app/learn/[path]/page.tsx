import React from 'react';
import { bitcoinModules, lightningModules } from '@/config/learning-modules';
import Link from 'next/link';
import PathContent from './path-content';

// This function is required for static site generation with dynamic routes
export function generateStaticParams() {
  return [
    { path: 'bitcoin' },
    { path: 'lightning' }
  ];
}

export default function PathPage({ params }: { params: { path: string } }) {
  // Server component that renders the client component
  // This approach allows us to use generateStaticParams at build time
  // while still using client-side functionality in the UI
  return <PathContent />;
}
