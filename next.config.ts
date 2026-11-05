import type { NextConfig } from 'next';

// Static export: the site is plain HTML/CSS/JS in `out/`, deployable to Vercel or any static host.
const nextConfig: NextConfig = {
  output: 'export',
  images: { unoptimized: true },
  reactStrictMode: true,
};

export default nextConfig;
