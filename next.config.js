const withNextra = require('nextra')({
  theme: 'nextra-theme-docs',
  themeConfig: './src/theme.config.tsx',
  defaultShowCopyCode: true
});

const nextConfig = {
  reactStrictMode: true,
  swcMinify: true
};

module.exports = withNextra(nextConfig);
