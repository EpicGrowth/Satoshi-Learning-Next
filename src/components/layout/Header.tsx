'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';
import { Bitcoin, Zap, Shield, Menu, Search, Github } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { ThemeToggle } from '@/components/theme/theme-toggle';
import { MobileNav } from './mobile-nav';
import { Input } from '@/components/ui/input';

const navigationItems = [
  { name: 'Bitcoin Learning', href: '/learn/bitcoin', icon: Bitcoin },
  { name: 'Lightning Learning', href: '/learn/lightning', icon: Zap },
  { name: 'Resources', href: '/resources', icon: Shield },
  { name: 'Explorer', href: '/contact-explorer', icon: Search },
];

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header 
      className={`sticky top-0 z-50 w-full transition-all duration-200 ${
        isScrolled ? 'backdrop-blur-md bg-background/95 border-b border-border/40 supports-[backdrop-filter]:bg-background/90 shadow-md' : ''
      }`}
      role="banner"
    >
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between gap-8">
          <Link 
            href="/" 
            className="flex items-center space-x-1 group relative overflow-hidden py-2 flex-shrink-0"
            aria-label="Satoshi Station Home"
          >
            <div className="absolute -inset-1 bg-bitcoin-orange/15 rounded-full blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <div className="relative flex items-center">
              <div className="relative z-10 mr-1.5 transition-all duration-300 group-hover:translate-y-[-2px]">
                <div className="relative rounded-full p-1.5 bg-bitcoin-orange/15">
                  <Bitcoin className="h-5 w-5 text-bitcoin-orange" aria-hidden="true" />
                </div>
              </div>
              <div className="relative z-10">
                <span className="text-xl md:text-2xl whitespace-nowrap text-bitcoin-orange font-bold brand-text break-all" 
                  data-brand-text="true">
                  Satoshi Station
                </span>
              </div>
            </div>
          </Link>
          
          <nav className="flex items-center space-x-3 md:space-x-6 flex-wrap" role="navigation">
            <div className="hidden lg:flex items-center space-x-8 mr-2 flex-wrap">
              {navigationItems.map((item) => {
                const basePath = '/learn/' + pathname.split('/')[2];
                const isActive = item.href.includes(basePath) || pathname === item.href;
                
                return (
                  <Link 
                    key={item.name}
                    href={item.href}
                    className={`text-sm font-medium transition-all duration-200 hover:scale-105 ${
                      isActive
                        ? 'text-bitcoin-orange font-semibold'
                        : 'text-muted-foreground hover:text-foreground'
                    }`}
                    aria-current={isActive ? 'page' : undefined}
                  >
                    <span className="flex items-center">
                      <item.icon className="h-4 w-4 mr-1.5" aria-hidden="true" />
                      {item.name}
                    </span>
                  </Link>
                );
              })}
            </div>

            <div className="relative hidden lg:flex items-center">
              <Input
                type="search"
                placeholder="Search..."
                className="w-64 pl-10 pr-4 py-2 rounded-md border border-border/50 bg-background/60 backdrop-blur-sm 
                         text-sm focus:border-bitcoin-orange/40 focus:ring-bitcoin-orange/30 transition-all duration-200"
                aria-label="Search content"
              />
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" aria-hidden="true" />
            </div>
            
            <Button 
              variant="default"
              size="sm"
              className="bg-bitcoin-orange text-white hover:bg-bitcoin-orange/90 hidden lg:inline-flex ml-2
                       transition-all duration-200 hover:scale-105 shadow-md hover:shadow-bitcoin-orange/20"
              asChild
            >
              <Link href="/learn/bitcoin">
                Start Learning
              </Link>
            </Button>

            <a 
              href="https://github.com/satoshi-station" 
              target="_blank" 
              rel="noopener noreferrer"
              className="hidden md:flex items-center text-muted-foreground hover:text-foreground transition-colors"
              aria-label="Visit our GitHub repository"
            >
              <Github className="h-5 w-5" aria-hidden="true" />
            </a>
            
            <div className="ml-1" aria-label="Toggle theme">
              <ThemeToggle />
            </div>
            
            <div className="lg:hidden ml-1">
              <MobileNav />
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
}

export default Header;
