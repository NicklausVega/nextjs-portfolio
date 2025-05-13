/** @type {import('next').NextConfig} */
const nextConfig = {
  // Use export output for Cloudflare Pages
  output: 'export',
  
  // Enable the transpilePackages option for better compatibility
  transpilePackages: [],
  
  // Add Cloudflare-specific optimizations
  experimental: {
    // Disable CSS optimization that's causing issues
    optimizeCss: false,
    optimizeServerReact: true,
  },

  // Ignore ESLint during production build
  eslint: {
    // Only run ESLint in development, not during builds
    ignoreDuringBuilds: true,
  },

  // Ignore TypeScript errors during build as well
  typescript: {
    // Still generate types but don't fail the build
    ignoreBuildErrors: true,
  },
};

export default nextConfig;
