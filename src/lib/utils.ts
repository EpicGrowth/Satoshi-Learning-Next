import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

/**
 * Combines class names with tailwind merge for efficient class generation
 */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

/**
 * Formats a Bitcoin amount (in satoshis) to BTC with 8 decimal places
 */
export function formatBitcoin(satoshis: number, showUnit: boolean = true): string {
  const btc = satoshis / 100000000;
  return `${btc.toFixed(8)}${showUnit ? ' BTC' : ''}`;
}

/**
 * Formats a satoshi amount with thousands separator
 */
export function formatSats(satoshis: number, showUnit: boolean = true): string {
  return `${satoshis.toLocaleString()}${showUnit ? ' sats' : ''}`;
}

/**
 * Truncates text to a specific length with ellipsis
 */
export function truncateText(text: string, maxLength: number): string {
  if (text.length <= maxLength) return text;
  return `${text.slice(0, maxLength)}...`;
}

/**
 * Truncates a Bitcoin address or transaction ID for display
 */
export function truncateHash(hash: string, length: number = 8): string {
  if (!hash || hash.length <= length * 2) return hash;
  return `${hash.slice(0, length)}...${hash.slice(-length)}`;
}

/**
 * Formats a Unix timestamp to a human-readable date
 */
export function formatTimestamp(
  unix: number, 
  options: Intl.DateTimeFormatOptions = { dateStyle: 'medium', timeStyle: 'short' }
): string {
  return new Date(unix * 1000).toLocaleString(undefined, options);
}

/**
 * Provides a human-readable time ago string from a timestamp
 */
export function timeAgo(timestamp: number): string {
  const now = Date.now();
  const secondsAgo = Math.floor((now - timestamp * 1000) / 1000);

  if (secondsAgo < 60) return `${secondsAgo} seconds ago`;
  if (secondsAgo < 3600) return `${Math.floor(secondsAgo / 60)} minutes ago`;
  if (secondsAgo < 86400) return `${Math.floor(secondsAgo / 3600)} hours ago`;
  if (secondsAgo < 2592000) return `${Math.floor(secondsAgo / 86400)} days ago`;
  if (secondsAgo < 31536000) return `${Math.floor(secondsAgo / 2592000)} months ago`;
  return `${Math.floor(secondsAgo / 31536000)} years ago`;
}

/**
 * Converts hex string to bytes
 */
export function hexToBytes(hex: string): Uint8Array {
  if (hex.startsWith('0x')) hex = hex.slice(2);
  if (hex.length % 2 !== 0) throw new Error('Invalid hex string');
  
  const bytes = new Uint8Array(hex.length / 2);
  for (let i = 0; i < hex.length; i += 2) {
    bytes[i / 2] = parseInt(hex.slice(i, i + 2), 16);
  }
  
  return bytes;
}

/**
 * Converts bytes to hex string
 */
export function bytesToHex(bytes: Uint8Array): string {
  return Array.from(bytes)
    .map(byte => byte.toString(16).padStart(2, '0'))
    .join('');
}

/**
 * Calculate block reward based on height (Bitcoin's halving schedule)
 */
export function getBlockReward(height: number): number {
  const halvings = Math.floor(height / 210000);
  if (halvings >= 64) return 0; // After 64 halvings, no more rewards
  
  // Initial reward in satoshis (50 BTC = 5,000,000,000 satoshis)
  return Math.floor(5000000000 / Math.pow(2, halvings));
}
