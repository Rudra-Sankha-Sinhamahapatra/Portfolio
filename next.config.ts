import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
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
};

export default nextConfig;
