// imports have to start with "./src" instead of "src"
import { Navbar } from "@/components/navbar";
import { SidebarTitle } from "@/components/sidebar-title";

const themeConfig = {
  useNextSeoProps() {
    return {
      titleTemplate: "%s – psychoroid.com Docs",
      additionalLinkTags: [
        {
          href: "/psychoroid.png",
          rel: "icon",
          sizes: "32x32",
          type: "image/png",
        },
        {
          href: "/psychoroid.png",
          rel: "apple-touch-icon",
          sizes: "32x32",
          type: "image/png",
        },
      ],
    };
  },
  project: {
    link: "https://github.com/psychoroid/developers.psychoroid",
  },
  chat: {
    link: "https://github.com/psychoroid/developers.psychoroid",
  },
  docsRepositoryBase: "https://github.com/psychoroid/developers.psychoroid/tree/main",
  head: (
    <>
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta property="og:title" content="psychoroid.com Docs" />
      <meta property="og:description" content="Open-source payment orchestration platform for West-Africa" />
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
