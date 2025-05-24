import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "standalone",
  images: {
    domains: ["storage.googleapis.com"]
  }
};

export default nextConfig;
