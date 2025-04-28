/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  async rewrites() {
    return [
      {
        source: '/api/:path*',
        destination: 'https://entrepreneur-platform-backend.onrender.com/api/:path*',
      },
    ];
  },
  output: 'standalone',
};

export default nextConfig;