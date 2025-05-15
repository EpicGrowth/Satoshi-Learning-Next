'use client';

import { useState, useEffect } from 'react';
import { Menu, ChevronDown, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { ScrollArea } from '@/components/ui/scroll-area';
import { usePathname } from 'next/navigation';
import Link from 'next/link';

interface MobileNavProps {
  type: 'bitcoin' | 'lightning';
  children: React.ReactNode;
}

export function MobileNav({ type, children }: MobileNavProps) {
  const [open, setOpen] = useState(false);
  const [activeSection, setActiveSection] = useState<string | null>(null);
  const pathname = usePathname();

  // Close sheet when navigating
  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  // Handle body scroll when menu is open
  useEffect(() => {
    if (open) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [open]);

  const toggleSection = (section: string) => {
    setActiveSection(activeSection === section ? null : section);
  };

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <Button
          variant="ghost"
          className="mr-2 px-0 text-base hover:bg-transparent focus-visible:bg-transparent focus-visible:ring-0 focus-visible:ring-offset-0 lg:hidden"
        >
          <Menu className="h-6 w-6" />
          <span className="sr-only">Toggle Menu</span>
        </Button>
      </SheetTrigger>
      <SheetContent side="left" className="w-full max-w-[85vw] pl-1 pr-0 sm:max-w-[350px] p-0">
        <ScrollArea className="h-[calc(100vh-3.5rem)] px-6">
          <div className="flex flex-col space-y-2 py-6">
            {/* Main navigation links */}
            <div className="mb-4">
              <nav className="flex flex-col space-y-2">
                <Link
                  href="/learn/bitcoin/bitcoin-basics/what-is-bitcoin"
                  className="flex items-center py-2 text-base font-medium transition-colors hover:text-accent-foreground"
                >
                  Bitcoin Learning
                </Link>
                <Link
                  href="/learn/lightning/fundamentals/what-is-lightning"
                  className="flex items-center py-2 text-base font-medium transition-colors hover:text-accent-foreground"
                >
                  Lightning Learning
                </Link>
                <Link
                  href="/resources"
                  className="flex items-center py-2 text-base font-medium transition-colors hover:text-accent-foreground"
                >
                  Resources
                </Link>
              </nav>
            </div>

            {/* Divider */}
            <div className="h-px bg-border my-4" />

            {/* Learning path sidebar content */}
            <div className="flex flex-col space-y-2">
              <h4 className="font-medium mb-2">{type === 'bitcoin' ? 'Bitcoin' : 'Lightning'} Path</h4>
              {children}
            </div>
          </div>
        </ScrollArea>
      </SheetContent>
    </Sheet>
  );
}
