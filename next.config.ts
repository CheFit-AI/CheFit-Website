import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Enable static export for GitHub Pages
  output: "export",

  // GitHub Pages base path (repo name) — default to repo path for Pages, but allow override via env
  basePath: process.env.NEXT_PUBLIC_BASEPATH === undefined ? "/CheFit-Website" : (process.env.NEXT_PUBLIC_BASEPATH || ""),

  // Image optimization settings
  images: {
    unoptimized: true, // Required for static export
    formats: ["image/webp", "image/avif"],
  },

  // Trailing slashes for better static exports
  trailingSlash: false,

  // Minify JavaScript
  compress: true,

  // Generate source maps for production
  productionBrowserSourceMaps: false,

  // Environment variables
  env: {
    NEXT_PUBLIC_SITE_URL: process.env.NEXT_PUBLIC_SITE_URL || "https://cheflink.in",
  },
};

export default nextConfig;
