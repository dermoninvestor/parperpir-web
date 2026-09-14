import type { NextConfig } from 'next';

const nextConfig: NextConfig = process.env.PARPERPIR_STATIC_EXPORT === '1'
  ? { output: 'export', assetPrefix: process.env.NEXT_PUBLIC_BASE_PATH || '', images: { unoptimized: true } }
  : {};

export default nextConfig;
