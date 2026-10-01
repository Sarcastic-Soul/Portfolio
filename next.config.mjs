import { execSync } from "node:child_process";

/** @type {import('next').NextConfig} */

// "Last updated" in the footer is the date of the latest commit, read once at
// build time. Vercel builds on every push, so it moves on its own. Falls back
// to the build time if git history is not available.
function lastCommitDate() {
  try {
    return execSync("git log -1 --format=%cI", { stdio: ["ignore", "pipe", "ignore"] })
      .toString()
      .trim();
  } catch {
    return new Date().toISOString();
  }
}

const nextConfig = {
  output: "export",
  reactStrictMode: true,
  experimental: {
    optimizePackageImports: ["@phosphor-icons/react", "@radix-ui/react-dialog", "@radix-ui/react-toast"],
  },
  env: {
    NEXT_PUBLIC_LAST_UPDATED: lastCommitDate(),
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
