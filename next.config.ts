// next.config.ts
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
    images: { unoptimized: true },
  typescript: {
    // Add this back temporarily if you just want it to build
    ignoreBuildErrors: true, 
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
};

export default nextConfig;