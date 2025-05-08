/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  output: 'standalone', // For containerized deployment to Cloud Run
  images: {
    domains: ['sats.sv', 'staging.sats.sv'],
    formats: ['image/avif', 'image/webp'],
    unoptimized: true, // Disable image optimization to avoid issues in production
  },
  trailingSlash: true, // Add trailing slashes to all URLs for better compatibility
  
  // Asset handling configuration
  // Using relative paths and ensuring cross-origin resources load correctly
  assetPrefix: '',
  crossOrigin: 'anonymous',
  
  // Disable the powered by header for security
  poweredByHeader: false,
  
  // ESLint configuration - ignore errors during build
  eslint: {
    // Warning instead of error during build
    ignoreDuringBuilds: true,
  },
  
  // TypeScript configuration - ignore errors during build
  typescript: {
    // Warning instead of error during build
    ignoreBuildErrors: true,
  },
  
  // Additional experimental features can be added here
  experimental: {
    // Server components are enabled by default in Next.js 13+
  },
};

module.exports = nextConfig;
