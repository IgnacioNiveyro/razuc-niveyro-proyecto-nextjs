/** @type {import('next').NextConfig} */
// next.config.js

module.exports = {
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
  
