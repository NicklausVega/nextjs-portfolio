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
};

export default nextConfig;
