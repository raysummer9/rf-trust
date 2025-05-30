/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'standalone',
  images: {
    domains: ['images.unsplash.com'],
    unoptimized: true,
  },
  // Enable static exports
  trailingSlash: true,
  // Ensure proper routing in production
  basePath: '',
  // Enable strict mode
  reactStrictMode: true,
}

module.exports = nextConfig 