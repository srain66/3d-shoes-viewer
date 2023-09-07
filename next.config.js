/** @type {import('next').NextConfig} */

const isProduction = process.env.NODE_ENV === "production";

const nextConfig = {
  reactStrictMode: true,
  output: "export",
  assetPrefix: isProduction ? process.env.PUBLIC_ASSET_URL : "",
};

module.exports = nextConfig;
