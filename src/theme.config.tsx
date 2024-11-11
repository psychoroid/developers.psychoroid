// imports have to start with "./src" instead of "src"
import { Navbar } from "@/components/navbar";
import { SidebarTitle } from "@/components/sidebar-title";

const themeConfig = {
  useNextSeoProps() {
    return {
      titleTemplate: "%s – lomi. Docs",
      additionalLinkTags: [
        {
          href: "/43.png",
          rel: "icon",
          sizes: "32x32",
          type: "image/png",
        },
        {
          href: "/43.png",
          rel: "apple-touch-icon",
          sizes: "32x32",
          type: "image/png",
        },
      ],
    };
  },
  project: {
    link: "https://github.com/lomiafrica/lomi-docs",
  },
  chat: {
    link: "https://github.com/lomiafrica/lomi-docs",
  },
  docsRepositoryBase: "https://github.com/lomiafrica/lomi-docs/tree/main",
  head: (
    <>
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta property="og:title" content="lomi. Docs" />
      <meta property="og:description" content="The open-source API Client" />
    </>
  ),
  navbar: {
    component: <Navbar />,
  },
  sidebar: {
    toggleButton: true,
    autoCollapse: true,
    defaultMenuCollapseLevel: 1,
  },
  footer: false,
};

export default themeConfig;
