/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  output: 'standalone',
  images: {
    domains: ['sats.sv', 'staging.sats.sv'],
    formats: ['image/avif', 'image/webp'],
  },
  trailingSlash: true,
  
  // ESLint configuration
  eslint: {
    ignoreDuringBuilds: true,
  },
  
  // TypeScript configuration
  typescript: {
    ignoreBuildErrors: true,
  },
  
  // Additional features
  experimental: {
    serverActions: {
      bodySizeLimit: '2mb'
    }
  },
  
  // External packages that can be used by Server Components
  serverExternalPackages: [],
  
  // Configure webpack to handle WebAssembly files
  webpack: (config) => {
    // Add WebAssembly file loader
    config.experiments = {
      ...config.experiments,
      asyncWebAssembly: true,
    };
    
    // Add rule for WebAssembly files
    config.module.rules.push({
      test: /\.wasm$/,
      type: 'webassembly/async',
    });
    
    return config;
  }
};

module.exports = nextConfig;
