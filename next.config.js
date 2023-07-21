/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
}
// next.config.js
module.exports = {
  // Disable client-side JavaScript
  experimental: {
    reactRoot: true,
    hybrid: false
  }
}
module.exports = nextConfig
