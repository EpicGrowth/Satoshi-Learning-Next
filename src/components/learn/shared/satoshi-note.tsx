'use client';

import React from 'react';
import { Bitcoin, Zap, Droplet } from 'lucide-react';

interface SatoshiNoteProps {
  content?: React.ReactNode;
  note?: string;
  children?: React.ReactNode;
  className?: string;
  pathType?: 'bitcoin' | 'lightning' | 'liquid';
}

const SatoshiNote: React.FC<SatoshiNoteProps> = ({
  content,
  note,
  children,
  className = '',
  pathType = 'bitcoin',
}) => {
  // Determine which icon to use based on the path type
  let Icon;
  let iconColorClass;
  let borderColorClass;

  switch (pathType) {
    case 'lightning':
      Icon = Zap;
      iconColorClass = 'text-lightning-purple';
      borderColorClass = 'border-lightning-purple/20';
      break;
    case 'liquid':
      Icon = Droplet;
      iconColorClass = 'text-cyan-500';
      borderColorClass = 'border-cyan-500/20';
      break;
    default: // bitcoin
      Icon = Bitcoin;
      iconColorClass = 'text-bitcoin-orange';
      borderColorClass = 'border-bitcoin-orange/20';
  }

  // Use content, note, or children in that order of precedence
  const noteContent = content || note || children;

  return (
    <div className={`bg-card p-4 sm:p-6 rounded-lg border ${borderColorClass} ${className} overflow-hidden`}>
      <h4 className="font-medium mb-4 text-base sm:text-lg flex items-center gap-2">
        <Icon className={`h-5 w-5 ${iconColorClass}`} />
        A Note from Satoshi
      </h4>
      <div className="p-4 sm:p-5 bg-muted/50 rounded-lg border border-border text-sm text-muted-foreground italic leading-relaxed overflow-x-auto">
        {noteContent}
      </div>
    </div>
  );
};

export default SatoshiNote;
