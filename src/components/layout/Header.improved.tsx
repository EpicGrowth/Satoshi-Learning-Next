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
  { name: 'Bitcoin Learning', href: '/learn/bitcoin/bitcoin-basics/what-is-bitcoin', icon: Bitcoin },
  { name: 'Lightning Learning', href: '/learn/lightning/fundamentals', icon: Zap },
  { name: 'Resources', href: '/technical-resources', icon: Shield },
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
    <header className={`sticky top-0 z-50 w-full transition-all duration-200 ${
      isScrolled ? 'backdrop-blur-md bg-background/80 border-b border-border/40 supports-[backdrop-filter]:bg-background/60' : ''
    }`}>
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          <Link href="/" className="flex items-center space-x-3 group">
            <Bitcoin className="h-7 w-7 text-bitcoin-orange transition-transform duration-300 group-hover:scale-110" />
            <span className="font-bold text-lg md:text-xl">Satoshi Station</span>
          </Link>
          
          <nav className="flex items-center space-x-6">
            {/* Desktop navigation */}
            <div className="hidden lg:flex items-center space-x-6">
              {navigationItems.map((item) => {
                const basePath = '/learn/' + pathname.split('/')[2]; // get /learn/bitcoin or /learn/lightning
                const isActive = item.href.includes(basePath) || pathname === item.href;
                
                return (
                  <Link 
                    key={item.name}
                    href={item.href}
                    className={`text-sm font-medium transition-all duration-200 ${
                      isActive
                        ? 'text-bitcoin-orange'
                        : 'text-muted-foreground hover:text-foreground'
                    }`}
                  >
                    <span className="flex items-center">
                      <item.icon className="h-4 w-4 mr-1.5" />
                      {item.name}
                    </span>
                  </Link>
                );
              })}
            </div>

            {/* Search input - desktop only */}
            <div className="relative hidden lg:flex items-center">
              <Input
                type="text"
                placeholder="Search..."
                className="w-64 pl-10 pr-4 py-2 rounded-md border border-border/40 bg-background/50 backdrop-blur-sm 
                         text-sm focus:border-primary/50 focus:ring-primary/50 transition-all duration-200"
              />
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-muted-foreground" />
            </div>
            
            {/* Action buttons */}
            <Button 
              variant="default"
              size="sm"
              className="bg-bitcoin-orange text-white hover:bg-bitcoin-hover hidden lg:inline-flex
                       transition-all duration-200 hover:scale-105 shadow-lg hover:shadow-bitcoin-orange/20"
              asChild
            >
              <Link href="/learn/bitcoin/bitcoin-basics/what-is-bitcoin">
                Start Learning
              </Link>
            </Button>

            {/* GitHub link */}
            <a 
              href="https://github.com/satoshi-station" 
              target="_blank" 
              rel="noopener noreferrer"
              className="hidden md:flex items-center text-muted-foreground hover:text-foreground transition-colors"
            >
              <Github className="h-5 w-5" />
            </a>
            
            {/* Theme toggle */}
            <ThemeToggle />
            
            {/* Mobile menu button */}
            <div className="lg:hidden">
              <MobileNav />
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
}

export default Header;
