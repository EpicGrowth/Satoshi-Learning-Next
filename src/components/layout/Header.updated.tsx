'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';
import { Bitcoin, Zap, Shield, Menu, Search, Github } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { ThemeToggle } from '@/components/theme/theme-toggle';
import { MobileNav } from './mobile-nav';
import { Input } from '@/components/ui/input';

// Enhanced navigation items with better organization
const navigationItems = [
  { 
    name: 'Bitcoin Learning', 
    href: '/learn/bitcoin', 
    icon: Bitcoin,
    description: 'Explore fundamentals, economics, and technical aspects of Bitcoin'
  },
  { 
    name: 'Lightning Learning', 
    href: '/learn/lightning', 
    icon: Zap,
    description: 'Dive into Lightning Network concepts, operations, and channel management'
  },
  { 
    name: 'Resources', 
    href: '/resources', 
    icon: Shield,
    description: 'Reference materials, tools, and additional learning resources'
  },
  { 
    name: 'Explorer', 
    href: '/contact-explorer', 
    icon: Search,
    description: 'Interactive tools to explore Bitcoin concepts'
  },
];

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();
  const [mounted, setMounted] = useState(false);

  // Prevent hydration issues
  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <header className={`sticky top-0 z-50 w-full transition-all duration-300 ${
      isScrolled 
        ? 'backdrop-blur-md bg-background/80 border-b border-border/40 supports-[backdrop-filter]:bg-background/60 shadow-sm' 
        : ''
    }`}>
      <div className="container mx-auto px-4">
        <div className="flex h-16 lg:h-20 items-center justify-between">
          {/* Logo with consistent Bitcoin orange styling */}
          <Link href="/" className="flex items-center space-x-3 group relative">
            <div className="relative flex items-center">
              <div className="relative z-10 mr-2 transition-all duration-300 group-hover:translate-y-[-2px]">
                <div className="rounded-full p-1.5 bg-gradient-to-br from-bitcoin-orange/10 to-bitcoin-orange/5">
                  <Bitcoin className="h-6 w-6 text-bitcoin-orange" />
                </div>
              </div>
              <div className="font-bold text-xl md:text-2xl tracking-tight font-brand">
                <span style={{
                  background: "linear-gradient(90deg, #F7931A 0%, #E87D18 100%)", 
                  WebkitBackgroundClip: "text", 
                  WebkitTextFillColor: "transparent",
                  textShadow: "0 1px 2px rgba(0,0,0,0.05)"
                }}>
                  Satoshi Station
                </span>
              </div>
            </div>
            {/* Subtle hover effect */}
            <div className="absolute inset-0 rounded-full bg-bitcoin-orange/5 scale-0 group-hover:scale-100 transition-all duration-300 blur-xl"></div>
          </Link>
          
          <nav className="flex items-center gap-2 md:gap-6">
            {/* Desktop navigation with animated underline and consistent styling */}
            <div className="hidden lg:flex items-center space-x-2 xl:space-x-6">
              {navigationItems.map((item) => {
                const basePath = pathname.split('/').slice(0, 3).join('/'); // get /learn/bitcoin or /learn/lightning
                const isActive = item.href.includes(basePath) || pathname === item.href;
                
                return (
                  <Link 
                    key={item.name}
                    href={item.href}
                    className={`relative px-3 py-2 text-sm font-medium transition-all duration-200 
                    ${isActive
                      ? 'text-bitcoin-orange'
                      : 'text-muted-foreground hover:text-foreground'
                    }`}
                  >
                    <span className="flex items-center">
                      <item.icon className="h-4 w-4 mr-1.5" />
                      {item.name}
                    </span>
                    
                    {/* Animated underline effect for active state */}
                    {isActive && (
                      <span className="absolute bottom-0 left-0 w-full h-0.5 bg-bitcoin-orange"></span>
                    )}
                    
                    {/* Hover indicator */}
                    <span className="absolute bottom-0 left-0 w-full h-0.5 bg-bitcoin-orange/30 scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></span>
                  </Link>
                );
              })}
            </div>

            {/* Search input - desktop only with improved styling */}
            <div className="relative hidden lg:flex items-center">
              <Input
                type="text"
                placeholder="Search..."
                className="w-64 pl-10 pr-4 py-2 rounded-md border border-border/40 bg-background/50 
                         text-sm focus:border-bitcoin-orange/50 focus:ring-2 focus:ring-bitcoin-orange/20 transition-all duration-200"
              />
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            </div>
            
            {/* Action buttons with consistent Bitcoin orange */}
            <Button 
              variant="default"
              size="sm"
              className="hidden lg:inline-flex bg-bitcoin-orange text-white hover:bg-bitcoin-hover
                       transition-all duration-200 hover:scale-105 shadow-md hover:shadow-bitcoin-orange/20"
              asChild
            >
              <Link href="/learn/bitcoin">
                <Bitcoin className="mr-1.5 h-4 w-4" />
                Start Learning
              </Link>
            </Button>

            {/* GitHub link */}
            <a 
              href="https://github.com/satoshi-station" 
              target="_blank" 
              rel="noopener noreferrer"
              className="hidden md:flex items-center text-muted-foreground hover:text-bitcoin-orange transition-colors"
              aria-label="GitHub Repository"
            >
              <Github className="h-5 w-5" />
            </a>
            
            {/* Theme toggle with consistent styling */}
            <ThemeToggle />
            
            {/* Mobile menu button with improved hover effect */}
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