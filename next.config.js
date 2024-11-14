const withNextra = require("nextra")({
  theme: "nextra-theme-docs",
  themeConfig: "./src/theme.config.tsx",
});

/** @type {import('next').NextConfig} */
const nextConfig = {
  webpack: (config, { isServer }) => {
    // Add custom webpack config here if needed
    return config;
  },
  // Add any other Next.js config options here
};

module.exports = withNextra(nextConfig);
