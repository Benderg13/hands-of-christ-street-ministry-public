import defaultTheme from 'tailwindcss/defaultTheme'; // Keep this import if you're using it
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  output: 'export',
  images: {
    unoptimized: true, // Recommended for GitHub Pages if you use next/image
  },
};

export default nextConfig;
