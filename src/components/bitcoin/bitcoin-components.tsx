import React from 'react';
import { Bitcoin, Zap, ArrowRight } from 'lucide-react';
import { cn } from '@/lib/utils';
import Link from 'next/link';
import { formatBitcoin, formatSats } from '@/lib/utils';

// Bitcoin-themed card with orange accents
export function BitcoinCard({
  children,
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn(
        "relative overflow-hidden rounded-xl border border-bitcoin-orange/20 bg-bitcoin-orange/5 p-6 shadow-sm transition-all hover:shadow-bitcoin",
        className
      )}
      {...props}
    >
      <div className="absolute -top-12 -right-12 h-24 w-24 rounded-full bg-bitcoin-orange/10 blur-xl"></div>
      {children}
    </div>
  );
}

// Lightning-themed card with purple accents
export function LightningCard({
  children,
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn(
        "relative overflow-hidden rounded-xl border border-lightning-purple/20 bg-lightning-purple/5 p-6 shadow-sm transition-all",
        className
      )}
      {...props}
    >
      <div className="absolute -top-12 -right-12 h-24 w-24 rounded-full bg-lightning-purple/10 blur-xl"></div>
      {children}
    </div>
  );
}

// Bitcoin amount display with formatting
interface BitcoinAmountProps {
  amount: number; // Amount in satoshis
  showSymbol?: boolean;
  showUnit?: boolean;
  className?: string;
  displayAsSats?: boolean;
}

export function BitcoinAmount({
  amount,
  showSymbol = true,
  showUnit = true,
  className,
  displayAsSats = false,
}: BitcoinAmountProps) {
  const formattedAmount = displayAsSats
    ? formatSats(amount, showUnit)
    : formatBitcoin(amount, showUnit);

  return (
    <span className={cn("font-mono", className)}>
      {showSymbol && !displayAsSats && <Bitcoin className="inline mr-1 h-3 w-3" />}
      {formattedAmount}
    </span>
  );
}

// Lightning Payment button
interface LightningPayButtonProps {
  paymentRequest: string;
  amount?: number; // Optional amount in sats
  label?: string;
  className?: string;
  size?: 'sm' | 'md' | 'lg';
}

export function LightningPayButton({
  paymentRequest,
  amount,
  label = "Pay with Lightning",
  className,
  size = 'md',
}: LightningPayButtonProps) {
  const handleClick = () => {
    window.open(`lightning:${paymentRequest}`, '_blank');
  };

  const sizeClasses = {
    sm: "text-xs px-3 py-1.5",
    md: "text-sm px-4 py-2",
    lg: "text-base px-5 py-2.5",
  };

  return (
    <button
      onClick={handleClick}
      className={cn(
        "inline-flex items-center justify-center rounded-md font-medium",
        "bg-lightning-purple text-white hover:bg-lightning-purple/90",
        "transition-colors shadow-sm",
        sizeClasses[size],
        className
      )}
    >
      <Zap className="mr-2 h-4 w-4" />
      {label}
      {amount && (
        <span className="ml-2 font-mono">{amount.toLocaleString()} sats</span>
      )}
    </button>
  );
}

// Bitcoin resource card for educational resources
interface BitcoinResourceProps {
  title: string;
  description: string;
  href: string;
  icon?: React.ReactNode;
  external?: boolean;
}

export function BitcoinResource({
  title,
  description,
  href,
  icon,
  external = false,
}: BitcoinResourceProps) {
  const LinkComponent = external ? 'a' : Link;
  const linkProps = external ? { target: "_blank", rel: "noopener noreferrer" } : {};

  return (
    <LinkComponent
      href={href}
      className="group block rounded-lg border border-border/40 bg-card p-6 transition-all hover:border-bitcoin-orange/30 hover:shadow-sm"
      {...linkProps}
    >
      <div className="flex items-start gap-4">
        {icon && (
          <div className="mt-1 rounded-md bg-bitcoin-orange/10 p-2.5 text-bitcoin-orange">
            {icon}
          </div>
        )}
        <div>
          <h3 className="text-lg font-semibold group-hover:text-bitcoin-orange transition-colors">
            {title}
          </h3>
          <p className="mt-2 text-sm text-muted-foreground">{description}</p>
          <div className="mt-4 flex items-center text-sm font-medium text-bitcoin-orange">
            <span>Learn More</span>
            <ArrowRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" />
          </div>
        </div>
      </div>
    </LinkComponent>
  );
}
