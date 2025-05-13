// Simple deployment helper for Cloudflare Pages
const fs = require('fs');
const path = require('path');

// Ensure the "out" directory exists
const outDir = path.join(__dirname, 'out');
if (!fs.existsSync(outDir)) {
  fs.mkdirSync(outDir, { recursive: true });
}

// Add a simple _headers file for Cloudflare Pages
const headersPath = path.join(outDir, '_headers');
const headersContent = `
# Cloudflare Pages Headers
/*
  X-Frame-Options: DENY
  X-Content-Type-Options: nosniff
  Referrer-Policy: strict-origin-when-cross-origin
  Permissions-Policy: camera=(), microphone=(), geolocation=()
`;

fs.writeFileSync(headersPath, headersContent);

console.log('✅ Deployment preparation complete!');
console.log('Ready to deploy to Cloudflare Pages'); 