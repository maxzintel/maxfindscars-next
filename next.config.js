/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
}

module.exports = {
  async redirects() {
    return [
      {
        source: '/posts/:slug/:id',
        destination: '/posts/:slug',
        permanent: true,
      },
    ];
  },
};