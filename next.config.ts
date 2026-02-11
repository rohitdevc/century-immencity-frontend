import type { NextConfig } from "next";

const isProd = process.env.CONTEXT === "production";

const nextConfig: NextConfig = {
  async headers() {
    if (isProd) return [];
    
    return [
      {
        source: "/(.*)",
        headers: [
          {
            key: "X-Robots-Tag",
            value: "noindex, nofollow",
          },
        ],
      },
    ];
  },
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
        hostname: 'www.immencity.co.in',
        port: '',
        pathname: '/**'
      },
    ]
  },
};

export default nextConfig;