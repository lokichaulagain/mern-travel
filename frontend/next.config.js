// /** @type {import('next').NextConfig} */
// const nextConfig = {
//   reactStrictMode: true,
//   swcMinify: true,
// }
// module.exports = {
//   experimental: {
//     images: {
//       remotePatterns: [
//         {
//           protocol: 'https',
//           hostname: 'www.ancienthimalayantreks.com',
//         },
//       ],
//     },
//   },
// }, nextConfig

// module.exports = nextConfig




const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
};

(module.exports = {
  images: {
    domains: ["localhost", "res.cloudinary.com","www.ancienthimalayantreks.com"],
    
  },
}),
  nextConfig;
