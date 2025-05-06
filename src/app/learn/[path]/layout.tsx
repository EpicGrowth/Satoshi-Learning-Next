'use client';

import { useParams } from 'next/navigation';
import { BitcoinSidebar } from '@/components/learn/bitcoin/bitcoin-sidebar';
import { LightningSidebar } from '@/components/learn/lightning/lightning-sidebar';

export default function PathLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const params = useParams();
  const path = params.path as string;

  return (
    <div className="container mx-auto flex min-h-screen">
      <div className="w-80 border-r">
        {path === 'bitcoin' ? <BitcoinSidebar /> : <LightningSidebar />}
      </div>
      <div className="flex-1">{children}</div>
    </div>
  );
}
