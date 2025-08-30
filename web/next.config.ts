import type { NextConfig } from "next";

const nextConfig = {

  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'utfs.io',
      },
      {
        protocol: 'https',
        hostname: '0iw7abmji4.ufs.sh',
      },
    ],
  },
};

module.exports = nextConfig;