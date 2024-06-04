/** @type {import('next').NextConfig} */
// next.config.js

module.exports = {
  images: {
    domains: ['storage.googleapis.com'],
  },
  async redirects() {
    return [
      {
        source: '/',
        destination: '/home',
        permanent: true,
      },
    ];
  },
};

