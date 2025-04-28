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
  // Ensure static export if using Render Static Site (optional, see Step 3)
  output: 'standalone', // Use standalone for Node.js server on Render
};

export default nextConfig;