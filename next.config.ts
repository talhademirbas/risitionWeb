import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  turbopack: {
    root: __dirname,
  },
  async redirects() {
    return [
      { source: "/terms", destination: "/align/terms", permanent: true },
      { source: "/privacy", destination: "/align/privacy", permanent: true },
    ];
  },
};

export default nextConfig;
