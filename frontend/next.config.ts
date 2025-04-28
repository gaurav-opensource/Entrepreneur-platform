/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true, // Enables strict mode for better error detection
  swcMinify: true, // Uses SWC for faster minification
  async rewrites() {
    return [
      {
        source: '/api/:path*',
        destination: 'https://entrepreneur-platform-backend.onrender.com/api/:path*', // Proxy API calls to Render backend
      },
    ];
  },
};

export default nextConfig;