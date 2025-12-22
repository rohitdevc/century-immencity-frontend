import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  basePath: '',
  turbopack: {
    root: __dirname,
  },
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: 'http',
        hostname: 'localhost',
        port: '2973',
        pathname: '/**'
      },
      {
        protocol: 'http',
        hostname: 'localhost',
        port: '2974',
        pathname: '/**'
      },
      {
        protocol: 'https',
        hostname: 'immencity.centuryrealestate.in',
        port: '',
        pathname: '/**'
      },
    ]
  },
};

export default nextConfig;