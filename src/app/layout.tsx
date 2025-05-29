import type { Metadata } from 'next';
import { fontSans, fontMono, fontDisplay, fontBrand } from './fonts';
import { ThemeProvider } from '@/components/theme/theme-provider';
import { DarkModeEnhancer } from '@/components/theme/dark-mode-enhancer';
import { EnhancedBackground } from '@/components/ui/enhanced-background';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { LearningProgressProvider } from '@/contexts/learning-progress-context';
import "./globals.css";

export const metadata: Metadata = {
  title: 'Satoshi Station | Bitcoin & Lightning Education',
  description: 'Your sovereign platform for Bitcoin education and verification. No trust required.',
  keywords: 'Bitcoin, Lightning Network, cryptocurrency, blockchain, education, verification, learning',
  authors: [{ name: 'Satoshi Station' }],
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://satoshistation.org',
    title: 'Satoshi Station | Bitcoin & Lightning Education',
    description: 'Your sovereign platform for Bitcoin education and verification. No trust required.',
    siteName: 'Satoshi Station',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Satoshi Station | Bitcoin & Lightning Education',
    description: 'Your sovereign platform for Bitcoin education and verification. No trust required.',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${fontSans.variable} ${fontMono.variable} ${fontDisplay.variable} ${fontBrand.variable}`}
    >
      <head>
        {/* Add direct CSS links for more reliable loading */}
      </head>
      <body className="min-h-screen font-sans antialiased" suppressHydrationWarning>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <LearningProgressProvider>
            <DarkModeEnhancer />
            <EnhancedBackground />
            <div className="relative flex min-h-screen flex-col">
              <Header />
              <main className="flex-1">{children}</main>
              <Footer />
            </div>
          </LearningProgressProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
