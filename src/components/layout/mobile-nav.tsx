'use client';

import { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Bitcoin, Zap, Shield, Menu, X, ExternalLink, Search, FileText, Home, Compass, Droplet } from 'lucide-react';

// Import learning modules for accurate navigation
import { bitcoinModules, lightningModules, liquidModules } from '@/config/learning-modules';

// Generate navigation items dynamically from learning modules
const generateLearningItems = (modules: any[], pathPrefix: string) => {
  return modules.map(module => {
    const href = module.sections && module.sections.length > 0
      ? `/learn/${pathPrefix}/${module.id}/${module.sections[0].id}`
      : `/learn/${pathPrefix}/${module.id}`;
    if (pathPrefix === 'liquid') {
      console.log(`Generated Liquid href: ${href} for module ${module.id}`);
    }
    return {
      title: module.title,
      href: href,
    };
  });
};

// Navigation structure with dynamically generated learning paths
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
    items: generateLearningItems(bitcoinModules, 'bitcoin'),
  },
  {
    title: 'Lightning Learning',
    icon: Zap,
    path: '/learn/lightning',
    items: generateLearningItems(lightningModules, 'lightning'),
  },
  {
    title: 'Liquid Learning',
    icon: Droplet,
    path: '/learn/liquid',
    items: generateLearningItems(liquidModules, 'liquid'),
  },
  {
    title: 'Resources',
    icon: FileText,
    href: '/resources',
  },
  {
    title: 'Explorer',
    icon: Compass,
    href: '/explorer',
  },
];

export function MobileNav() {
  const [isOpen, setIsOpen] = useState(false);
  const [openSection, setOpenSection] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);
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
          <div className="fixed right-0 top-0 h-full w-4/5 max-w-sm bg-white dark:bg-slate-900 border-2 border-red-500 p-6 shadow-xl">
            <div className="flex items-center justify-between mb-8">
              <Link 
                href="/"
                className="flex items-center space-x-2 group"
                onClick={() => {
                  setIsOpen(false);
                  setError(null);
                }}
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
                onClick={() => {
                  setIsOpen(false);
                  setError(null);
                }}
                className="focus-visible:ring-2 focus-visible:ring-bitcoin-orange/30"
                aria-label="Close menu"
              >
                <X className="h-5 w-5" />
              </Button>
            </div>
            
            {error && (
              <div className="mb-4 p-3 bg-red-500/10 border border-red-500/30 rounded-md">
                <p className="text-sm text-red-500">{error}</p>
              </div>
            )}
            
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
                                  className={`flex items-center py-2 px-3 rounded-md text-sm ${
                                    pathname === item.href ? 'bg-muted font-medium' : 'hover:bg-muted/50'
                                  }`}
                                  onClick={(e) => {
                                    try {
                                      setOpenSection(null); // Close the accordion section
                                      setIsOpen(false);    // Explicitly close the entire menu
                                    } catch (err) {
                                      console.error('Navigation error:', err);
                                      setError('Failed to navigate. Please try again.');
                                      e.preventDefault(); // Prevent navigation on error
                                    }
                                  }}
                                >
                                  {item.title}
                                  {pathname === item.href && (
                                    <span className="ml-2 w-1.5 h-1.5 rounded-full bg-primary" />
                                  )}
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
                <Link href="/learn/bitcoin/bitcoin-fundamentals/what-is-bitcoin">
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
