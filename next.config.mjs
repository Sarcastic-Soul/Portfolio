/** @type {import('next').NextConfig} */
const nextConfig = {
  // basePath: "/Portfolio", // Uncomment for production deployment
  output: "export",
  distDir: "dist",
  reactStrictMode: true,
  experimental: {
    optimizePackageImports: ['framer-motion', 'lucide-react'],
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    domains: ['placeholder.svg'],
    formats: ['image/webp', 'image/avif'],
    unoptimized: true,
  },
}

export default nextConfig
