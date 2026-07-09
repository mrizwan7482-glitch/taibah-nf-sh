import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Strict mode catches double-invoke bugs in development
  reactStrictMode: true,

  // Enable AVIF + WebP for all Next.js Image components (Vercel serves these automatically)
  images: {
    formats: ["image/avif", "image/webp"],
    // Vercel Image Optimization — limit to sensible sizes for a mobile-first invitation app
    deviceSizes: [390, 768, 1024, 1280],
    imageSizes: [64, 128, 256, 384],
  },

  // Disable X-Powered-By header for security
  poweredByHeader: false,

  // Compress responses (Vercel handles this at CDN level but good for self-hosted)
  compress: true,
};

export default nextConfig;
