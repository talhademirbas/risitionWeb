import type { NextConfig } from "next";

/**
 * Proxy `www.risition.com/riseui/docs/` → standalone RiseUI docs (separate Vercel project).
 * `RISEUI_DOCS_URL` must include the `/riseui/docs` path, e.g. `https://<project>.vercel.app/riseui/docs`.
 * (Repo folder `apps/docs` is only for Vercel Root Directory — not part of this URL.)
 */
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
  async rewrites() {
    const raw = process.env.RISEUI_DOCS_URL;
    if (!raw?.trim()) return [];
    const base = raw.replace(/\/$/, "");
    return [
      { source: "/riseui/docs", destination: base },
      { source: "/riseui/docs/", destination: `${base}/` },
      { source: "/riseui/docs/:path*", destination: `${base}/:path*` },
    ];
  },
  async redirects() {
    return [
      {
        source: "/rise_ui/docs",
        destination: "/riseui/docs",
        permanent: true,
      },
      {
        source: "/rise_ui/docs/:path*",
        destination: "/riseui/docs/:path*",
        permanent: true,
      },
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
