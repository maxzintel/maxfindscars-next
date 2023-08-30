/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
}

module.exports = {
  async rewrites() {
    return [
      {
        source: '/robots.txt',
        destination: '/api/robots', // Proxy to API route
      },
    ]
  },
  // async redirects() {
  //   return [
  //     {
  //       source: '/posts/:slug/:id',
  //       destination: '/posts/:slug',
  //       permanent: true,
  //     },
  //   ];
  // },
};