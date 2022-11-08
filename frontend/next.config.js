/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
}
module.exports = {
  experimental: {
    images: {
      remotePatterns: [
        {
          protocol: 'https',
          hostname: 'www.ancienthimalayantreks.com',
        },
      ],
    },
  },
}, nextConfig

// module.exports = nextConfig
