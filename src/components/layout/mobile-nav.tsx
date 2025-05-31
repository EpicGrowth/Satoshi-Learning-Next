'use client';

import { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Bitcoin, Zap, Shield, Menu, X, ExternalLink, Search, FileText, Home } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
// Removed BitcoinSidebar, LightningSidebar, ErrorBoundary imports

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
      { title: 'What is Bitcoin', href: '/learn/bitcoin/bitcoin-fundamentals/what-is-bitcoin' },
      { title: 'The Blockchain', href: '/learn/bitcoin/bitcoin-fundamentals/the-blockchain' },
      { title: 'Keys & Wallets', href: '/learn/bitcoin/bitcoin-fundamentals/private-keys-wallets' },
      { title: 'Making Transactions', href: '/learn/bitcoin/bitcoin-fundamentals/making-transactions' },
    ],
  },
  {
    title: 'Lightning Learning',
    icon: Zap,
    path: '/learn/lightning',
    items: [
      { title: 'Fundamentals', href: '/learn/lightning/lightning-fundamentals/what-is-lightning' },
      { title: 'Node Operations', href: '/learn/lightning/lightning-node-operations/node-setup' },
      { title: 'Channel Management', href: '/learn/lightning/lightning-channel-management/opening-channels' },
      { title: 'Routing Operations', href: '/learn/lightning/lightning-routing-operations/path-finding' },
      { title: 'Security', href: '/learn/lightning/lightning-security/node-security' },
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

  // Removed isOnBitcoinPath and isOnLightningPath

  // Close the mobile menu when navigating
  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  // Handle body scroll when menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

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
        className="px-0 hover:bg-transparent focus-visible:ring-2 focus-visible:ring-bitcoin-orange/30"
        onClick={() => setIsOpen(!isOpen)}
        aria-label={isOpen ? "Close menu" : "Open menu"}
        aria-expanded={isOpen}
        aria-controls="mobile-menu"
      >
        <Menu className="h-6 w-6" />
      </Button>
      
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop */}
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="fixed inset-0 z-50 bg-black/50 backdrop-blur-sm lg:hidden"
              onClick={() => setIsOpen(false)}
              aria-hidden="true"
            />
            
            {/* Menu panel */}
            <motion.div 
              id="mobile-menu"
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              className="fixed right-0 top-0 z-50 h-full w-[85%] max-w-sm bg-background p-6 shadow-xl lg:hidden flex flex-col"
            >
              <div className="flex items-center justify-between mb-8">
                <Link 
                  href="/"
                  className="flex items-center space-x-2 group"
                  onClick={() => setIsOpen(false)}
                >
                  <div className="relative">
                    <div className="absolute -inset-1 rounded-full bg-bitcoin-orange/10 opacity-0 group-hover:opacity-100 transition-opacity" />
                    <Bitcoin className="h-6 w-6 text-bitcoin-orange relative" />
                  </div>
                  <span className="text-lg font-brand tracking-tight text-bitcoin-orange" style={{ fontWeight: 700 }}>Satoshi Station</span>
                </Link>
                <Button 
                  variant="ghost" 
                  size="icon"
                  onClick={() => setIsOpen(false)}
                  className="focus-visible:ring-2 focus-visible:ring-bitcoin-orange/30"
                  aria-label="Close menu"
                >
                  <X className="h-5 w-5" />
                </Button>
              </div>
              
              <nav className="flex flex-col space-y-1 mobile-nav-content flex-1 overflow-y-auto">
                {navigationItems.map((section) => {
                  // For simple links without dropdown
                  if (!section.items) {
                    const isActive = pathname === section.href;
                    return (
                      <Link
                        key={section.title}
                        href={section.href}
                        className={`flex items-center py-2.5 px-3 rounded-md transition-colors ${
                          isActive
                            ? 'text-bitcoin-orange font-medium bg-bitcoin-orange/10'
                            : 'text-foreground hover:text-bitcoin-orange hover:bg-bitcoin-orange/5'
                        }`}
                        onClick={() => setIsOpen(false)}
                      >
                        <section.icon className="mr-3 h-5 w-5" aria-hidden="true" />
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
                        className={`flex items-center justify-between w-full py-2.5 px-3 rounded-md transition-colors ${
                          isActive
                            ? 'text-bitcoin-orange font-medium bg-bitcoin-orange/10'
                            : 'text-foreground hover:text-bitcoin-orange hover:bg-bitcoin-orange/5'
                        }`}
                        aria-expanded={isSectionOpen}
                        aria-controls={`section-${section.title}`}
                      >
                        <div className="flex items-center">
                          <section.icon className="mr-3 h-5 w-5" aria-hidden="true" />
                          {section.title}
                        </div>
                        <motion.div
                          animate={{ rotate: isSectionOpen ? 180 : 0 }}
                          transition={{ duration: 0.2 }}
                        >
                          <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                            <path d="M2 4L6 8L10 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                          </svg>
                        </motion.div>
                      </button>
                      
                      <AnimatePresence>
                        {isSectionOpen && (
                          <motion.div
                            id={`section-${section.title}`}
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: 'auto', opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.2 }}
                            className="overflow-hidden"
                          >
                            <div className="pl-8 py-1 space-y-1">
                              {section.items.map((item) => {
                                const isItemActive = pathname === item.href;
                                const isExternal = 'external' in item && item.external;
                                
                                return (
                                  <div key={item.href}>
                                    {isExternal ? (
                                      <a
                                        href={item.href}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex items-center py-2 px-3 rounded-md text-muted-foreground hover:text-foreground hover:bg-bitcoin-orange/5 transition-colors"
                                      >
                                        {item.title}
                                        <ExternalLink className="ml-1.5 h-3 w-3" aria-hidden="true" />
                                      </a>
                                    ) : (
                                      <Link
                                        href={item.href}
                                        onClick={() => setIsOpen(false)}
                                        className={`flex items-center py-2 px-3 rounded-md transition-colors ${
                                          isItemActive
                                            ? 'text-bitcoin-orange font-medium bg-bitcoin-orange/10'
                                            : 'text-muted-foreground hover:text-foreground hover:bg-bitcoin-orange/5'
                                        }`}
                                      >
                                        {item.title}
                                      </Link>
                                    )}
                                  </div>
                                );
                              })}
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  );
                })}

                {/* CONDITIONAL LEARNING PATH SIDEBAR SECTION - REMOVED */}
              </nav>
              
              {/* Start Learning Button */}
              <div className="mt-8 pt-6 border-t border-border/50">
                <Button 
                  className="w-full bg-bitcoin-orange hover:bg-bitcoin-orange/90 text-white font-medium shadow-lg hover:shadow-xl transition-all hover:-translate-y-0.5"
                  asChild
                >
                  <Link href="/learn/bitcoin/bitcoin-fundamentals/what-is-bitcoin">
                    <Bitcoin className="mr-2 h-4 w-4" aria-hidden="true" />
                    Start Learning
                  </Link>
                </Button>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
