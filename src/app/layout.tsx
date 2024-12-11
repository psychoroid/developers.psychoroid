import type { Metadata } from "next";
import { Inter as FontSans } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import React from "react";
import { ThemeProvider } from "@/components/theme-provider";
import { Navbar } from "@/components/navbar";
import { Analytics } from "@vercel/analytics/react";

const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
  display: 'swap',
});

export const metadata: Metadata = {
  metadataBase: new URL('https://developers.psychoroid.com'),
  title: {
    default: "psychoroid.com | Developer Documentation",
    template: "%s | psychoroid.com | Developer docs"
  },
  description: "Official documentation for psychoroid.com - Enterprise-grade 3D asset creation and distribution platform for e-commerce, gaming, manufacturing, and architectural visualization",
  keywords: ["3D assets", "e-commerce visualization", "product visualization", "3D conversion", "enterprise 3D platform", "architectural visualization", "manufacturing visualization"],
  authors: [{ name: "psychoroid.com" }],
  creator: "psychoroid.com",
  publisher: "psychoroid.com",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://developers.psychoroid.com',
    title: 'psychoroid.com Developer Documentation',
    description: 'Enterprise-grade 3D asset creation and distribution platform for e-commerce, gaming, manufacturing, and architectural visualization',
    siteName: 'psychoroid.com | Developer docs',
    images: [{
      url: '/og-image.png',
      width: 1200,
      height: 630,
      alt: 'psychoroid.com Documentation'
    }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'psychoroid.com Developer Documentation',
    description: 'Enterprise-grade 3D asset creation and distribution platform for e-commerce, gaming, manufacturing, and architectural visualization',
    images: ['/og-image.png'],
    creator: '@psychoroid',
  },
  icons: {
    icon: [
      {
        url: "/psychoroid.png",
        href: "/psychoroid.png",
        sizes: "32x32",
        type: "image/png",
      },
      {
        url: "/psychoroid.png",
        href: "/psychoroid.png",
        sizes: "192x192",
        type: "image/png",
      },
    ],
    apple: [
      {
        url: "/psychoroid.png",
        sizes: "180x180",
        type: "image/png",
      },
    ],
    other: [
      {
        rel: "mask-icon",
        url: "/psychoroid.png",
      },
    ],
  },
  manifest: '/manifest.json',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={cn(
          "min-h-screen bg-background font-sans antialiased",
          fontSans.variable,
        )}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Navbar />
          <main>{children}</main>
        </ThemeProvider>
        <Analytics />
      </body>
    </html>
  );
}
