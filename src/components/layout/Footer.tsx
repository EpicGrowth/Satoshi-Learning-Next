import Link from 'next/link';
import { Bitcoin, Heart, Twitter, Github, ExternalLink, Moon, Sun } from 'lucide-react';
import { ThemeToggle } from '@/components/theme/theme-toggle';

export function Footer() {
  return (
    <footer className="border-t bg-background/50 backdrop-blur-sm">
      <div className="container py-8">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
          <div className="space-y-3">
            <Link href="/" className="flex items-center space-x-2 group transition-transform duration-200 hover:scale-105">
              <Bitcoin className="h-5 w-5 text-[var(--primary-light)]" />
              <span className="font-bold font-brand" style={{color: 'var(--primary-light)', fontWeight: 700}}>Satoshi Station</span>
            </Link>
            <p className="text-sm text-muted-foreground max-w-xs">
              Your sovereign platform for Bitcoin education and verification.
              Don't trust, verify every claim through direct interaction with the Bitcoin network.
            </p>
            <div className="flex items-center space-x-3 text-muted-foreground">
              <a href="https://twitter.com/satoshistation" target="_blank" rel="noopener noreferrer" className="hover:text-foreground transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="https://github.com/satoshi-station" target="_blank" rel="noopener noreferrer" className="hover:text-foreground transition-colors">
                <Github className="h-5 w-5" />
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="font-medium mb-3 text-foreground/90">Bitcoin Learning</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/learn/bitcoin/bitcoin-basics/what-is-bitcoin" className="text-muted-foreground hover:text-[var(--primary-light)] transition-colors">
                  What is Bitcoin
                </Link>
              </li>
              <li>
                <Link href="/learn/bitcoin/bitcoin-basics/private-keys-wallets" className="text-muted-foreground hover:text-[var(--primary-light)] transition-colors">
                  Keys & Wallets
                </Link>
              </li>
              <li>
                <Link href="/learn/bitcoin/bitcoin-basics/bitcoin-network" className="text-muted-foreground hover:text-[var(--primary-light)] transition-colors">
                  Bitcoin Network
                </Link>
              </li>
              <li>
                <Link href="/learn/bitcoin/transactions" className="text-muted-foreground hover:text-[var(--primary-light)] transition-colors">
                  Transactions
                </Link>
              </li>
              <li>
                <Link href="/learn/bitcoin/mining" className="text-muted-foreground hover:text-[var(--primary-light)] transition-colors">
                  Mining
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-medium mb-3 text-foreground/90">Lightning Network</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/learn/lightning/fundamentals" className="text-muted-foreground hover:text-[var(--primary-light)] transition-colors">
                  Fundamentals
                </Link>
              </li>
              <li>
                <Link href="/learn/lightning/channels" className="text-muted-foreground hover:text-[var(--primary-light)] transition-colors">
                  Lightning Channels
                </Link>
              </li>
              <li>
                <Link href="/learn/lightning/routing" className="text-muted-foreground hover:text-[var(--primary-light)] transition-colors">
                  Routing & Pathfinding
                </Link>
              </li>
              <li>
                <Link href="/learn/lightning/implementations" className="text-muted-foreground hover:text-[var(--primary-light)] transition-colors">
                  Implementations
                </Link>
              </li>
              <li>
                <Link href="/learn/lightning/applications" className="text-muted-foreground hover:text-[var(--primary-light)] transition-colors">
                  Applications
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-medium mb-3 text-foreground/90">Resources</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/resources" className="text-muted-foreground hover:text-[var(--primary-light)] transition-colors">
                  Technical Resources
                </Link>
              </li>
              <li>
                <Link href="/contact-explorer" className="text-muted-foreground hover:text-[var(--primary-light)] transition-colors">
                  Contact Explorer
                </Link>
              </li>
              <li>
                <a href="https://mempool.space" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-[var(--primary-light)] transition-colors flex items-center">
                  Mempool Explorer <ExternalLink className="ml-1 h-3 w-3" />
                </a>
              </li>
              <li>
                <a href="https://www.blockchain.com/explorer" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-[var(--primary-light)] transition-colors flex items-center">
                  Blockchain Explorer <ExternalLink className="ml-1 h-3 w-3" />
                </a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="mt-8 pt-6 border-t flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="flex items-center space-x-3">
            <p className="text-xs text-muted-foreground">
              &copy; {new Date().getFullYear()} Satoshi Station. All content released under MIT license.
            </p>
            <a 
              href="https://github.com/satoshi-station" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center text-muted-foreground hover:text-foreground transition-colors"
              aria-label="GitHub Repository"
            >
              <Github className="h-4 w-4" />
            </a>
            <div>
              <ThemeToggle />
            </div>
          </div>
          <p className="text-xs text-muted-foreground flex items-center">
            Powered by proof-of-work & 
            <Heart className="mx-1.5 h-3 w-3 text-[var(--primary-light)] animate-pulse-slow" /> from 
            <a href="https://bitcoin.org" target="_blank" rel="noopener noreferrer" className="ml-1.5 text-[var(--primary-light)] hover:underline">
              Bitcoiners
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
