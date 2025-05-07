import { GeistMono } from 'geist/font/mono';
import { Inter, Poppins, Exo_2 } from 'next/font/google';

// Import Inter for body text
export const fontSans = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-sans',
});

// Import Poppins for general headings
export const fontDisplay = Poppins({
  weight: ['400', '500', '600', '700'],
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-display',
});

// Import Exo 2 specifically for the Satoshi Station brand name
// This matches the original site's typography
export const fontBrand = Exo_2({
  weight: ['600', '700', '800', '900'],
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-brand',
});

// Use Geist Mono for code blocks
export const fontMono = GeistMono;

export { GeistMono };
