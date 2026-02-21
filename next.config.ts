/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env: {
    GITHUB_TOKEN: process.env.GITHUB_TOKEN
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'avatars.githubusercontent.com',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'firstlist.in',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'pbs.twimg.com',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'assets.streamlinehq.com',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'images.seeklogo.com',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'media.licdn.com',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'conar.app',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'icons.duckduckgo.com',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'orpc.dev',
        pathname: '/**',
      }, 
      {
        protocol: 'https',
        hostname: 'wagmi.sh',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'gitbrent.github.io',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'supabase.com',
        pathname: '/**',
      }
    ],
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