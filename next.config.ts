/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env: {
    GITHUB_TOKEN: process.env.GITHUB_TOKEN
  },
  images: {
    domains: ["avatars.githubusercontent.com","firstlist.in"],
  },
  async rewrites() {
    return [
      {
        source: '/Resume.pdf',
        destination: '/Resume.pdf',
      },
    ];
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
};

export default nextConfig;
