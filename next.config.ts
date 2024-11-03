
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // output: "export",
  output: process.env.NODE_ENV === 'production' ? 'export' : undefined,
  reactStrictMode: false,
  experimental: {},
  
  typescript: {
    ignoreBuildErrors: true,
  },
  eslint: {
    ignoreDuringBuilds: true
  }
};

// const withBundleAnalyzer = require("@next/bundle-analyzer")({
//   enabled: process.env.ANALYZE === "true",
// });

module.exports = nextConfig;
