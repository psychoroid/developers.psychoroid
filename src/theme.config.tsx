// imports have to start with "./src" instead of "src"
import { Navbar } from "@/components/navbar";
import { SidebarTitle } from "@/components/sidebar-title";
import { DocsThemeConfig } from 'nextra-theme-docs'

const config: DocsThemeConfig = {
  head: () => {
    return (
      <>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta property="og:title" content="psychoroid.com | Developer docs" />
        <meta property="og:description" content="Open-source payment orchestration platform for West-Africa" />
        <title>psychoroid.com | Developer docs</title>
        <link rel="canonical" href="https://developers.psychoroid.com" />
        <link rel="icon" href="/psychoroid.png" />
        <link rel="apple-touch-icon" href="/psychoroid.png" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebSite",
              "name": "psychoroid.com | Developer docs",
              "description": "Enterprise-grade 3D asset creation and distribution platform for e-commerce, gaming, manufacturing, and architectural visualization",
              "url": "https://developers.psychoroid.com",
              "publisher": {
                "@type": "Organization",
                "name": "psychoroid.com",
                "logo": {
                  "@type": "ImageObject",
                  "url": "https://developers.psychoroid.com/psychoroid.png"
                }
              }
            })
          }}
        />
      </>
    )
  },
  project: {
    link: "https://github.com/psychoroid/developers.psychoroid",
  },
  chat: {
    link: "https://github.com/psychoroid/developers.psychoroid",
  },
  docsRepositoryBase: "https://github.com/psychoroid/developers.psychoroid/tree/main",
  navbar: {
    component: <Navbar />,
  },
  sidebar: {
    toggleButton: false,
    autoCollapse: true,
    defaultMenuCollapseLevel: 1,
  },
  footer: {
    component: null
  },
  themeSwitch: {
    component: () => null
  },
  darkMode: false,
};

export default config;
