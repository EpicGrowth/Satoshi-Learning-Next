'use client';

import React from 'react';
import { Bitcoin } from 'lucide-react';

interface SatoshiQuoteProps {
  quote: string;
  date?: string;
  source?: string;
  sourceUrl?: string;
  children?: React.ReactNode;
}

const SatoshiQuote: React.FC<SatoshiQuoteProps> = ({
  quote,
  date,
  source,
  sourceUrl,
  children,
}) => {
  return (
    <div className="bg-muted/30 border border-border p-6 rounded-lg my-6 relative">
      <div className="absolute -left-2 -top-2 bg-bitcoin-orange text-white p-1 rounded-full">
        <Bitcoin className="h-4 w-4" />
      </div>
      <p className="italic text-lg text-foreground/90 leading-relaxed">"{quote}"</p>
      <div className="mt-2 flex flex-wrap items-center gap-2 text-sm text-muted-foreground">
        {source && (
          <span className="font-medium">
            {sourceUrl ? (
              <a
                href={sourceUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-bitcoin-orange hover:underline"
              >
                {source}
              </a>
            ) : (
              source
            )}
          </span>
        )}
        {date && <span>— {date}</span>}
      </div>

      {children && <div className="mt-4">{children}</div>}
    </div>
  );
};

export default SatoshiQuote;
