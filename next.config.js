/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  output: 'standalone',
  images: {
    domains: ['sats.sv', 'staging.sats.sv'],
    formats: ['image/avif', 'image/webp'],
    unoptimized: true,
  },
  // Important: Don't use trailing slash with React Server Components
  trailingSlash: false,
  
  // Fix static asset loading
  assetPrefix: '',
  poweredByHeader: false,
  
  // Relax build constraints
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  
  // Enable CSS handling improvements
  experimental: {
    optimizeCss: true,
    // Make sure App Router features are enabled
    serverActions: true,
    serverComponentsExternalPackages: [],
    // Remove any runtime setting that was causing build errors
  },
  
  // Fix webpack handling of CSS
  webpack: (config, { dev, isServer }) => {
    // Force CSS to be included in the client build
    if (!isServer && !dev) {
      config.optimization.splitChunks.cacheGroups.styles = {
        name: 'styles',
        test: /\.css$/,
        chunks: 'all',
        enforce: true,
      };
    }
    return config;
  },
};

module.exports = nextConfig;
