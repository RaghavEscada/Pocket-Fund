/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    images: {
      domains: ['assets.aceternity.com'],
      // If you already have other domains, add to the existing array
      // domains: ['existing-domain.com', 'assets.aceternity.com'],
    },
  };
  
  module.exports = nextConfig;