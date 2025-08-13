/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
  webpack: (config) => {
    config.resolve.alias = {
      ...config.resolve.alias,
      "~": require("path").resolve(__dirname, "src"),
      "~/app": require("path").resolve(__dirname, "src/app"),
      "~/pages": require("path").resolve(__dirname, "src/pages"),
      "~/widgets": require("path").resolve(__dirname, "src/widgets"),
      "~/features": require("path").resolve(__dirname, "src/features"),
      "~/entities": require("path").resolve(__dirname, "src/entities"),
      "~/shared": require("path").resolve(__dirname, "src/shared"),
    }
    return config
  },
}

module.exports = nextConfig
