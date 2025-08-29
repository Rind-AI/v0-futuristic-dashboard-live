/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  
  // GitHub Pages Configuration
  trailingSlash: true,
  basePath: process.env.NODE_ENV === 'production' ? '/v0-futuristic-dashboard-live' : '',
  assetPrefix: process.env.NODE_ENV === 'production' ? '/v0-futuristic-dashboard-live/' : '',
  
  // Static export for GitHub Pages
  output: 'export',
  distDir: 'out',
  images: {
    unoptimized: true
  },
  
  // Environment variables for client-side
  env: {
    STRIPE_PUBLISHABLE_KEY: process.env.STRIPE_PUBLISHABLE_KEY,
    APP_NAME: process.env.APP_NAME || 'v0-Futuristic Dashboard Pro',
    APP_URL: process.env.APP_URL || 'http://localhost:3000',
    GITHUB_PAGES_URL: process.env.GITHUB_PAGES_URL
  },
  
  // GitHub Pages doesn't support API routes, so we disable them
  experimental: {
    // Remove invalid options for Next.js 14
  }
}

module.exports = nextConfig