import Link from 'next/link';
import { Bitcoin, Heart, Twitter, Github, ExternalLink } from 'lucide-react';
import { ThemeToggle } from '@/components/theme/theme-toggle';
import { Separator } from '@/components/ui/separator';

const footerLinks = {
  bitcoinLearning: [
    { name: 'What is Bitcoin', href: '/learn/bitcoin/bitcoin-basics/what-is-bitcoin' },
    { name: 'Keys & Wallets', href: '/learn/bitcoin/bitcoin-basics/private-keys-wallets' },
    { name: 'Bitcoin Network', href: '/learn/bitcoin/bitcoin-basics/bitcoin-network' },
    { name: 'Transactions', href: '/learn/bitcoin/transactions' },
    { name: 'Mining', href: '/learn/bitcoin/mining' },
    { name: 'Node Setup', href: '/learn/bitcoin/node-setup' },
  ],
  lightningLearning: [
    { name: 'Fundamentals', href: '/learn/lightning/fundamentals' },
    { name: 'Lightning Channels', href: '/learn/lightning/channels' },
    { name: 'Routing & Pathfinding', href: '/learn/lightning/routing' },
    { name: 'Node Management', href: '/learn/lightning/node-management' },
    { name: 'Channel Management', href: '/learn/lightning/channel-management' },
    { name: 'Applications', href: '/learn/lightning/applications' },
  ],
  resources: [
    { name: 'Technical Resources', href: '/resources' },
    { name: 'Contact Explorer', href: '/contact-explorer' },
    { name: 'Developer Tools', href: '/resources/developer-tools' },
    { name: 'Node Dashboard', href: '/resources/node-dashboard' },
    { 
      name: 'Mempool Explorer',
      href: 'https://mempool.space',
      external: true 
    },
    { 
      name: 'Block Explorer',
      href: 'https://mempool.space/blocks',
      external: true 
    },
  ]
};

export function Footer() {
  return (
    <footer className="border-t bg-background/50 backdrop-blur-sm" role="contentinfo">
      <div className="container py-12 px-4">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-4">
          {/* Branding and Social Links */}
          <div className="space-y-4">
            <Link 
              href="/" 
              className="flex items-center space-x-2 group transition-transform duration-200 hover:scale-105"
              aria-label="Satoshi Station Home"
            >
              <div className="rounded-full p-1.5 bg-bitcoin-orange/15">
                <Bitcoin className="h-5 w-5 text-bitcoin-orange" aria-hidden="true" />
              </div>
              <span className="font-bold" data-brand-text="true">Satoshi Station</span>
            </Link>
            <p className="text-sm text-muted-foreground/90 max-w-xs leading-relaxed">
              Your sovereign platform for Bitcoin education and verification.
              Don't trust, verify every claim through direct interaction with the Bitcoin network.
            </p>
            <div className="flex items-center space-x-4 text-muted-foreground pt-2">
              <a 
                href="https://twitter.com/satoshistation" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="hover:text-foreground transition-colors hover:scale-110 transform"
                aria-label="Follow us on Twitter"
              >
                <Twitter className="h-5 w-5" aria-hidden="true" />
              </a>
              <a 
                href="https://github.com/satoshi-station" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="hover:text-foreground transition-colors hover:scale-110 transform"
                aria-label="Visit our GitHub repository"
              >
                <Github className="h-5 w-5" aria-hidden="true" />
              </a>
            </div>
          </div>
          
          {/* Bitcoin Learning Links */}
          <div>
            <h2 className="font-semibold text-base mb-4 text-foreground">Bitcoin Learning</h2>
            <ul className="space-y-3 text-sm">
              {footerLinks.bitcoinLearning.map((link) => (
                <li key={link.href}>
                  <Link 
                    href={link.href}
                    className="text-muted-foreground/90 hover:text-bitcoin-orange transition-colors inline-flex items-center"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Lightning Learning Links */}
          <div>
            <h2 className="font-semibold text-base mb-4 text-foreground">Lightning Network</h2>
            <ul className="space-y-3 text-sm">
              {footerLinks.lightningLearning.map((link) => (
                <li key={link.href}>
                  <Link 
                    href={link.href}
                    className="text-muted-foreground/90 hover:text-bitcoin-orange transition-colors inline-flex items-center"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Resources Links */}
          <div>
            <h2 className="font-semibold text-base mb-4 text-foreground">Resources</h2>
            <ul className="space-y-3 text-sm">
              {footerLinks.resources.map((link) => (
                <li key={link.href}>
                  {link.external ? (
                    <a 
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-muted-foreground/90 hover:text-bitcoin-orange transition-colors inline-flex items-center"
                    >
                      {link.name}
                      <ExternalLink className="ml-1 h-3 w-3" aria-hidden="true" />
                    </a>
                  ) : (
                    <Link 
                      href={link.href}
                      className="text-muted-foreground/90 hover:text-bitcoin-orange transition-colors inline-flex items-center"
                    >
                      {link.name}
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </div>
        </div>
        
        <Separator className="my-8 opacity-50" />
        
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm">
          <div className="flex items-center space-x-4">
            <p className="text-xs text-muted-foreground/90">
              &copy; {new Date().getFullYear()} Satoshi Station. All content released under MIT license.
            </p>
            <a 
              href="https://github.com/satoshi-station/license" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-xs text-muted-foreground/90 hover:text-bitcoin-orange transition-colors"
            >
              License
            </a>
            <ThemeToggle />
          </div>
          <p className="text-xs text-muted-foreground/90 flex items-center">
            Powered by proof-of-work & 
            <Heart className="mx-1.5 h-3 w-3 text-bitcoin-orange animate-pulse" aria-hidden="true" /> 
            from 
            <a 
              href="https://bitcoin.org" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="ml-1.5 text-bitcoin-orange hover:underline"
            >
              Bitcoiners
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
