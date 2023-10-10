/** @type {import('next').NextConfig} */
const nextConfig = {
  // output: "export",
  output: process.env.NODE_ENV === 'production' ? 'export' : undefined,
  reactStrictMode: false,
  swcMinify: true,
  experimental: {},
};

const withBundleAnalyzer = require("@next/bundle-analyzer")({
  enabled: process.env.ANALYZE === "true",
});

module.exports = withBundleAnalyzer(nextConfig);
