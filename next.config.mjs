/** @type {import('next').NextConfig} */

// GitHub Pages serves the site from /Portfolio; Vercel and local dev serve it
// from the root. The workflow sets GITHUB_PAGES=true for the Pages build only.
const basePath = process.env.GITHUB_PAGES === "true" ? "/Portfolio" : "";

const nextConfig = {
  basePath: basePath,
  output: "export",
  reactStrictMode: true,
  experimental: {
    optimizePackageImports: ["lucide-react", "@radix-ui/react-dialog", "@radix-ui/react-toast"],
  },
  env: {
    NEXT_PUBLIC_BASE_PATH: basePath,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
