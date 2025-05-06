/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  output: 'export', // Export to static HTML files for GCS hosting
  images: {
    unoptimized: true, // Required for static export
    domains: ['sats.sv'],
  },
  trailingSlash: true, // Add trailing slashes to all URLs for better compatibility with static hosting
  
  // Base path if deploying to a subdirectory
  // basePath: '',
  
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
