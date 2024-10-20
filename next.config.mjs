/** @type {import('next').NextConfig} */

const nextConfig = {
    images: {
      domains: ['assets.aceternity.com'],
      unoptimized: true,
    },
    output: 'export',
    typescript: {
      ignoreBuildErrors: true,
    },
  };
export default nextConfig;
