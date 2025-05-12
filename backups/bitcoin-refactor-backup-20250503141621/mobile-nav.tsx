'use client';

import { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Bitcoin, Zap, Shield, Menu, X, ExternalLink, Search, FileText, Home } from 'lucide-react';

// Navigation structure
const navigationItems = [
  {
    title: 'Home',
    icon: Home,
    href: '/',
  },
  {
    title: 'Bitcoin Learning',
    icon: Bitcoin,
    path: '/learn/bitcoin',
    items: [
      { title: 'What is Bitcoin', href: '/learn/bitcoin/fundamentals/what-is-bitcoin' },
      { title: 'The Blockchain', href: '/learn/bitcoin/fundamentals/the-blockchain' },
      { title: 'Keys & Wallets', href: '/learn/bitcoin/fundamentals/private-keys-wallets' },
      { title: 'Making Transactions', href: '/learn/bitcoin/fundamentals/making-transactions' },
    ],
  },
  {
    title: 'Lightning Learning',
    icon: Zap,
    path: '/learn/lightning',
    items: [
      { title: 'Fundamentals', href: '/learn/lightning/fundamentals' },
      { title: 'Payment Channels', href: '/learn/lightning/channels' },
      { title: 'Routing', href: '/learn/lightning/routing' },
      { title: 'Implementations', href: '/learn/lightning/implementations' },
      { title: 'Applications', href: '/learn/lightning/applications' },
    ],
  },
  {
    title: 'Resources',
    icon: FileText,
    href: '/resources',
  },
  {
    title: 'Explorer',
    icon: Search,
    href: '/contact-explorer',
  },
];

export function MobileNav() {
  const [isOpen, setIsOpen] = useState(false);
  const [openSection, setOpenSection] = useState<string | null>(null);
  const pathname = usePathname();

  // Close the mobile menu when navigating
  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  // Toggle section open/closed
  const toggleSection = (title: string) => {
    if (openSection === title) {
      setOpenSection(null);
    } else {
      setOpenSection(title);
    }
  };

  return (
    <>
      <Button
        variant="ghost"
        className="px-0 hover:bg-transparent"
        onClick={() => setIsOpen(!isOpen)}
      >
        <Menu className="h-6 w-6" />
      </Button>
      
      {/* Mobile menu overlay */}
      {isOpen && (
        <div className="fixed inset-0 z-50 flex lg:hidden">
          {/* Backdrop */}
          <div 
            className="fixed inset-0 bg-black/50 backdrop-blur-sm" 
            onClick={() => setIsOpen(false)}
          />
          
          {/* Menu panel */}
          <div className="fixed right-0 top-0 h-full w-4/5 max-w-sm bg-background p-6 shadow-xl">
            <div className="flex items-center justify-between mb-8">
              <div className="flex items-center">
                <Bitcoin className="h-6 w-6 text-bitcoin-orange mr-2" />
                <span className="font-bold">Satoshi Station</span>
              </div>
              <Button 
                variant="ghost" 
                size="icon"
                onClick={() => setIsOpen(false)}
              >
                <X className="h-5 w-5" />
              </Button>
            </div>
            
            <nav className="flex flex-col space-y-6">
              {navigationItems.map((section) => {
                // For simple links without dropdown
                if (!section.items) {
                  const isActive = pathname === section.href;
                  return (
                    <Link
                      key={section.title}
                      href={section.href}
                      className={`flex items-center py-2 ${
                        isActive
                          ? 'text-bitcoin-orange font-medium'
                          : 'text-foreground hover:text-bitcoin-orange'
                      }`}
                    >
                      <section.icon className="mr-3 h-5 w-5" />
                      {section.title}
                    </Link>
                  );
                }
                
                // For sections with dropdown items
                const isActive = pathname.startsWith(section.path);
                const isSectionOpen = openSection === section.title || isActive;
                
                return (
                  <div key={section.title}>
                    <button
                      onClick={() => toggleSection(section.title)}
                      className={`flex items-center justify-between w-full py-2 ${
                        isActive
                          ? 'text-bitcoin-orange font-medium'
                          : 'text-foreground hover:text-bitcoin-orange'
                      }`}
                    >
                      <div className="flex items-center">
                        <section.icon className="mr-3 h-5 w-5" />
                        {section.title}
                      </div>
                      <div className={`transform transition-transform ${isSectionOpen ? 'rotate-180' : ''}`}>
                        <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M2 4L6 8L10 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                      </div>
                    </button>
                    
                    {isSectionOpen && (
                      <div className="pl-8 mt-2 space-y-2">
                        {section.items.map((item) => {
                          const isItemActive = pathname === item.href;
                          const isExternal = 'external' in item && item.external;
                          
                          return (
                            <div key={item.href} className="py-1">
                              {isExternal ? (
                                <a
                                  href={item.href}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className="flex items-center text-muted-foreground hover:text-foreground"
                                >
                                  {item.title}
                                  <ExternalLink className="ml-1.5 h-3 w-3" />
                                </a>
                              ) : (
                                <Link
                                  href={item.href}
                                  className={`flex items-center ${
                                    isItemActive
                                      ? 'text-bitcoin-orange font-medium'
                                      : 'text-muted-foreground hover:text-foreground'
                                  }`}
                                >
                                  {item.title}
                                </Link>
                              )}
                            </div>
                          );
                        })}
                      </div>
                    )}
                  </div>
                );
              })}
            </nav>
            
            {/* Start Learning Button */}
            <div className="mt-8 pt-6 border-t">
              <Button 
                className="w-full bg-bitcoin-orange hover:bg-bitcoin-hover" 
                asChild
              >
                <Link href="/learn/bitcoin/bitcoin-basics/what-is-bitcoin">
                  <Bitcoin className="mr-2 h-4 w-4" />
                  Start Learning
                </Link>
              </Button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
