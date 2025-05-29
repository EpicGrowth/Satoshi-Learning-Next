'use client';

import React from 'react';
import { Bitcoin, Zap } from 'lucide-react';

interface SatoshiNoteProps {
  content: React.ReactNode;
  pathType?: 'bitcoin' | 'lightning';
}

const SatoshiNote: React.FC<SatoshiNoteProps> = ({
  content,
  pathType = 'bitcoin',
}) => {
  const Icon = pathType === 'bitcoin' ? Bitcoin : Zap;
  const iconColor = pathType === 'bitcoin' ? 'bg-bitcoin-orange' : 'bg-lightning-purple';
  const borderColor = pathType === 'bitcoin' ? 'border-bitcoin-orange/20' : 'border-lightning-purple/20';

  return (
    <div className={`bg-card p-4 sm:p-6 rounded-lg border ${borderColor} mb-6 w-full overflow-hidden`}>
      <h4 className="font-medium mb-4 text-base sm:text-lg flex items-center gap-2">
        <Icon className={`h-5 w-5 ${pathType === 'bitcoin' ? 'text-bitcoin-orange' : 'text-lightning-purple'}`} />
        A Note from Satoshi
      </h4>
      <div className="p-4 sm:p-5 bg-muted/50 rounded-lg border border-border text-sm text-muted-foreground italic leading-relaxed overflow-x-auto">
        {content}
      </div>
    </div>
  );
};

export default SatoshiNote;
