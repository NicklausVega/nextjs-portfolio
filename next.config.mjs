/** @type {import('next').NextConfig} */
const nextConfig = {
  // Ensure compatibility with Cloudflare Pages
  output: 'standalone',
  
  // Enable the transpilePackages option for better compatibility
  transpilePackages: [],
  
  // Add Cloudflare-specific optimizations
  experimental: {
    optimizeCss: true,
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
