import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  turbopack: {
    root: __dirname,
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
        pathname: "/**",
      },
    ],
  },
  async redirects() {
    return [
      { source: "/terms", destination: "/align/terms", permanent: true },
      { source: "/privacy", destination: "/align/privacy", permanent: true },
      {
        source: "/blog/on-device-models-will-split-the-app-store-in-two",
        destination: "/blog/ai-agents-rewired-how-we-build-mobile-apps",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
