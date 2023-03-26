/**
 * @type {import('next').NextConfig}
 */
const nextConfig = {
  experimental: { appDir: true },
  optimizeFonts: false,
  images: {
    loader: "akamai",
    path: "",
  },
};

module.exports = nextConfig;
