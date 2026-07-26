import type { NextConfig } from "next";

// Set NEXT_PUBLIC_BASE_PATH (e.g. "/cadence-ai") only if you deploy to
// GitHub Pages as a project site (username.github.io/repo-name).
// Leave it unset for Vercel, a custom domain, or a GitHub user/org page.
const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";

const nextConfig: NextConfig = {
  output: "export",
  basePath,
  assetPrefix: basePath || undefined,
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
  env: {
    NEXT_PUBLIC_BASE_PATH: basePath,
  },
};

export default nextConfig;
