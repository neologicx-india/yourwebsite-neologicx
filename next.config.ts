import type { NextConfig } from "next";
import customRedirects from "./redirects.mjs";

const nextConfig: NextConfig = {
  redirects: async () => {
    return await customRedirects();
  },
  /* config options here */
};

export default nextConfig;
