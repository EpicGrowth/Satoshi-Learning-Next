'use client';

import { useState } from 'react';
import { Menu } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { ScrollArea } from '@/components/ui/scroll-area';

interface MobileNavProps {
  type: 'bitcoin' | 'lightning';
  children: React.ReactNode;
}

export function MobileNav({ type, children }: MobileNavProps) {
  const [open, setOpen] = useState(false);

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
      <SheetContent side="left" className="w-full max-w-[85vw] pl-1 pr-0 sm:max-w-[350px]">
        <ScrollArea className="h-[calc(100vh-3.5rem)]">
          <div className="px-7">
            <div className="flex flex-col space-y-4">
              {children}
            </div>
          </div>
        </ScrollArea>
      </SheetContent>
    </Sheet>
  );
}
