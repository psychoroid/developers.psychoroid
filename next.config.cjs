const nextra = require('nextra');

const withNextra = nextra({
    theme: 'nextra-theme-docs',
    themeConfig: './src/theme.config.tsx',
    defaultShowCopyCode: true,
    flexsearch: {
        codeblocks: true
    },
    staticImage: true
});

const nextConfig = {
    reactStrictMode: true,
    swcMinify: true,
};

module.exports = withNextra(nextConfig); 