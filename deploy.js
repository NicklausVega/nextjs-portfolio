// Simple deployment helper for Cloudflare Pages
const fs = require('fs');
const path = require('path');

// Ensure _app directory exists for Cloudflare Pages
const appDir = path.join(__dirname, '.vercel', 'output', 'static', '_app');
if (!fs.existsSync(appDir)) {
  fs.mkdirSync(appDir, { recursive: true });
}

console.log('✅ Deployment preparation complete!');
console.log('Ready to deploy to Cloudflare Pages'); 