import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Suppress hydration warnings - useful for Sanity Studio integration
  reactStrictMode: true,
  images: {
    domains: ['cdn.sanity.io'],
  },
};

export default nextConfig;
