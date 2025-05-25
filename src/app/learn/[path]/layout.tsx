'use client';

import { useParams } from 'next/navigation';
import { BitcoinSidebar } from '@/components/learn/bitcoin/bitcoin-sidebar';
import { LightningSidebar } from '@/components/learn/lightning/lightning-sidebar';
// Removed: Button, Menu, useState, MobileNav imports

export default function PathLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const params = useParams();
  const path = params.path as 'bitcoin' | 'lightning'; // Keep type assertion

  return (
    <div className="container mx-auto flex min-h-screen">
      {/* Desktop Sidebar */}
      <div className="hidden lg:block w-80 border-r">
        {path === 'bitcoin' ? <BitcoinSidebar /> : (path === 'lightning' ? <LightningSidebar /> : null)}
      </div>
      
      {/* Content Area */}
      <div className="flex-1">
        {/* Removed mobile menu button */}
        {children}
      </div>
    </div>
  );
}
