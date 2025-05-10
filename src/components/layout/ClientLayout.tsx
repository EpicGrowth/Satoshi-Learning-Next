'use client';

import React from 'react';
import { Header } from './Header';
import { Footer } from './Footer';

interface ClientLayoutProps {
  children: React.ReactNode;
}

/**
 * ClientLayout component
 * This serves as a client-side wrapper for our server components
 * It includes the Header and Footer components
 */
const ClientLayout: React.FC<ClientLayoutProps> = ({ children }) => {
  return (
    <div className="relative min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default ClientLayout;
