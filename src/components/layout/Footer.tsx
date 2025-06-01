import Link from 'next/link';
import { Bitcoin, Heart, Twitter, Github, ExternalLink } from 'lucide-react';
import { ThemeToggle } from '@/components/theme/theme-toggle';
import { Separator } from '@/components/ui/separator';

const footerLinks = {
  bitcoinLearning: [
    { name: 'What is Bitcoin?', href: '/learn/bitcoin/bitcoin-fundamentals/what-is-bitcoin' },
    { name: 'The Blockchain', href: '/learn/bitcoin/bitcoin-fundamentals/the-blockchain' },
    { name: 'Private Keys & Wallets', href: '/learn/bitcoin/bitcoin-fundamentals/private-keys-wallets' },
    { name: 'Making Transactions', href: '/learn/bitcoin/bitcoin-fundamentals/making-transactions' },
    { name: 'Mining & Consensus', href: '/learn/bitcoin/bitcoin-technical/mining-consensus' },
  ],
  lightningLearning: [
    { name: 'What is Lightning?', href: '/learn/lightning/lightning-fundamentals/what-is-lightning' },
    { name: 'Opening Channels', href: '/learn/lightning/lightning-channel-management/opening-channels' },
    { name: 'Path Finding', href: '/learn/lightning/lightning-routing-operations/path-finding' },
    { name: 'Node Setup', href: '/learn/lightning/lightning-node-operations/node-setup' },
    { name: 'Security', href: '/learn/lightning/lightning-security/node-security' },
  ],
  liquidLearning: [
    { name: 'What is Liquid?', href: '/learn/liquid/liquid-fundamentals/what-is-liquid' },
    { name: 'Federated Sidechains', href: '/learn/liquid/liquid-fundamentals/federated-sidechains' },
    { name: 'Confidential Txns', href: '/learn/liquid/liquid-fundamentals/confidential-transactions' },
    { name: 'Asset Issuance', href: '/learn/liquid/liquid-fundamentals/asset-issuance' },
    { name: 'L-BTC', href: '/learn/liquid/liquid-assets/l-btc' },
  ],
  resources: [
    { name: 'Bitcoin Whitepaper', href: 'https://bitcoin.org/bitcoin.pdf', external: true },
    { name: 'Lightning Network', href: 'https://lightning.network/', external: true },
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
      <div className="container py-8 sm:py-12 px-4">
        <div className="grid grid-cols-2 gap-8 sm:gap-12 md:grid-cols-4">
          {/* Branding and Social Links */}
          <div className="col-span-2 md:col-span-1 space-y-4">
            <Link 
              href="/" 
              className="flex items-center space-x-2 group transition-transform duration-200 hover:scale-105"
              aria-label="Satoshi Station Home"
            >
              <div className="rounded-full p-1.5 bg-bitcoin-orange/15">
                <Bitcoin className="h-5 w-5 text-bitcoin-orange" aria-hidden="true" />
              </div>
              <span className="font-brand tracking-tight text-bitcoin-orange" data-brand-text="true" style={{ fontWeight: 700 }}>Satoshi Station</span>
            </Link>
            <p className="text-sm text-muted-foreground/90 max-w-xs leading-relaxed">
              Your sovereign platform for Bitcoin education and verification.
              Don't trust, verify every claim through direct interaction with the Bitcoin network.
            </p>
            <div className="flex items-center justify-between w-full text-muted-foreground pt-2">
              <div className="flex items-center space-x-4">
                <div className="md:block hidden">
                  <ThemeToggle />
                </div>
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
              <div className="md:hidden block">
                <ThemeToggle />
              </div>
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
          
          {/* Liquid Learning Links */}
          <div>
            <h2 className="font-semibold text-base mb-4 text-foreground">Liquid Network</h2>
            <ul className="space-y-3 text-sm">
              {footerLinks.liquidLearning.map((link) => (
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
                <li key={link.name}>
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
        
        <Separator className="my-6 sm:my-8 opacity-50" />
        
        <div className="flex flex-col sm:flex-row justify-between items-center gap-4 text-sm">
          <div className="flex flex-col sm:flex-row items-center gap-4 sm:space-x-4">
            <p className="text-xs text-muted-foreground/90 text-center sm:text-left">
              &copy; {new Date().getFullYear()} Satoshi Station. All content released under MIT license.
            </p>
            <div className="flex items-center gap-4">
              <a 
                href="https://github.com/satoshi-station/license" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-xs text-muted-foreground/90 hover:text-bitcoin-orange transition-colors"
              >
                License
              </a>
            </div>
          </div>
          <p className="text-xs text-muted-foreground/90 flex items-center flex-wrap justify-center">
            <span className="whitespace-nowrap">Powered by proof-of-work</span>
            <Heart className="mx-1.5 h-3 w-3 text-bitcoin-orange animate-pulse" aria-hidden="true" /> 
            <span className="whitespace-nowrap">from</span>
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
