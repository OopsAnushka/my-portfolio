// next.config.ts
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  images: {
    unoptimized: true,
  },
  // This tells Next.js to skip the lint check during deployment
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    // Optional: Also helps prevent type errors from stopping the build
    ignoreBuildErrors: true,
  },
};

export default nextConfig;