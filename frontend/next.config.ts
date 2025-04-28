/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  async rewrites() {
    return [
      {
        source: '/api/:path*',
        destination: 'https://entrepreneur-platform-backend.onrender.com/api/:path*',
      },
    ];
  },
};

export default nextConfig;