import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Enable Next.js compiler support for styled-components.
  // This improves generated class names and server-side rendering behavior.
  compiler: {
    styledComponents: true,
  },
};

export default nextConfig;
