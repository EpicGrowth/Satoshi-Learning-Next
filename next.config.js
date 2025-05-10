/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  output: 'standalone', // For containerized deployment to Cloud Run
  images: {
    domains: ['sats.sv', 'staging.sats.sv'],
    formats: ['image/avif', 'image/webp'],
  },
  trailingSlash: true, // Add trailing slashes to all URLs for better compatibility
  
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
