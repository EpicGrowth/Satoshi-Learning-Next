/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  output: 'standalone',
  distDir: '.next',
  
  images: {
    domains: ['sats.sv', 'staging.sats.sv'],
    formats: ['image/avif', 'image/webp'],
    unoptimized: true,
  },
  
  // Use trailing slash for consistency
  trailingSlash: true,
  
  // Fix static asset loading
  // This is critical - providing a specific prefix if needed
  assetPrefix: process.env.NODE_ENV === 'production' ? '' : '',
  
  // Other configurations
  poweredByHeader: false,
  generateBuildId: async () => {
    // Use a consistent build ID to prevent asset path changes
    return 'sats-staging-build'
  },
  
  // Relax build constraints
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  
  // Simplify experimental options
  experimental: {
    // Disable CSS optimization that might cause issues
    optimizeCss: false,
    // Make sure App Router features are enabled
    serverActions: { allowedOrigins: ['localhost:3000'] },
  },
  
  // Override webpack configuration to fix asset loading
  webpack: (config, { dev, isServer }) => {
    // Ensure static files are properly copied and referenced
    if (!isServer) {
      // Make sure splitChunks and cacheGroups exist before modifying
      if (!config.optimization) config.optimization = {};
      if (!config.optimization.splitChunks) config.optimization.splitChunks = {};
      if (!config.optimization.splitChunks.cacheGroups) config.optimization.splitChunks.cacheGroups = {};
      
      // Prevent chunk splitting for CSS to keep it simpler
      config.optimization.splitChunks.cacheGroups.styles = {
        name: 'styles',
        test: /\.css$/,
        chunks: 'all',
        enforce: true,
      };
      
      // Ensure consistent chunk IDs
      config.optimization.chunkIds = 'deterministic';
    }
    
    return config;
  },
};

module.exports = nextConfig;
