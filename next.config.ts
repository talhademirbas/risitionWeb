import path from "node:path";
import { fileURLToPath } from "node:url";

import type { NextConfig } from "next";
import { createMDX } from "fumadocs-mdx/next";

const configDir = path.dirname(fileURLToPath(import.meta.url));
/** Parent of risitionWeb + riseUI (e.g. …/projects) for monorepo resolution */
const workspaceRoot = path.join(configDir, "..");

const withMDX = createMDX();

const nextConfig: NextConfig = {
  turbopack: {
    root: workspaceRoot,
  },
  transpilePackages: ["@rise-ui/docs", "fumadocs-ui", "fumadocs-core", "fumadocs-mdx"],
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

export default withMDX(nextConfig);
