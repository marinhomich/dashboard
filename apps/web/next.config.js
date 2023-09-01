/** @type {import('next').NextConfig} */

const nextConfig = {
  experimental: {
    serverActions: true,
  },
  reactStrictMode: true,
  output: "standalone"
}

module.exports = nextConfig
