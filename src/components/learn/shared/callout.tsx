import React from 'react';
import { Shield, AlertTriangle, Terminal, Bitcoin, Zap, Info } from 'lucide-react';
import { cn } from '@/lib/utils';

type CalloutType = 'info' | 'warning' | 'danger' | 'bitcoin' | 'lightning' | 'technical';

interface CalloutProps {
  type: CalloutType;
  title?: string;
  children: React.ReactNode;
  className?: string;
}

export function Callout({ type, title, children, className }: CalloutProps) {
  const icons = {
    info: Info,
    warning: AlertTriangle,
    danger: Shield,
    bitcoin: Bitcoin,
    lightning: Zap,
    technical: Terminal,
  };

  const styles = {
    info: 'bg-blue-500/10 border-blue-500/30 text-blue-700 dark:text-blue-300',
    warning: 'bg-bitcoin-orange/10 border-bitcoin-orange/30 text-bitcoin-orange dark:text-bitcoin-orange',
    danger: 'bg-red-500/10 border-red-500/30 text-red-700 dark:text-red-300',
    bitcoin: 'bg-bitcoin-orange/10 border-bitcoin-orange/30 text-bitcoin-orange dark:text-bitcoin-orange',
    lightning: 'bg-lightning-purple/10 border-lightning-purple/30 text-lightning-purple dark:text-lightning-purple',
    technical: 'bg-gray-500/10 border-gray-500/30 text-gray-700 dark:text-gray-300',
  };

  const Icon = icons[type];

  return (
    <div className={cn(
      'my-6 rounded-lg border p-4 shadow-sm',
      styles[type],
      className
    )}>
      <div className="flex items-start">
        <Icon className="mr-3 mt-1 h-5 w-5 flex-shrink-0" />
        <div className="flex-1">
          {title && <h5 className="font-semibold mb-1">{title}</h5>}
          <div className="text-sm">{children}</div>
        </div>
      </div>
    </div>
  );
}
