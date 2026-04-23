import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    formats: ["image/avif", "image/webp"],
    deviceSizes: [360, 414, 512, 640, 768, 1024, 1280, 1536, 1920],
    imageSizes: [64, 96, 128, 256, 384],
    qualities: [65, 75, 85],
  },
  experimental: {
    inlineCss: true,
  },
};

export default nextConfig;
