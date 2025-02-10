import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import ColorGlow from "@/components/ui/GlowEffect";
import { FloatingNav } from "@/components/floating-nav";
import ThemeProvider from "@/components/setTheme";
import SpaceWarpCanvas from "@/components/SpaceWrapCanvas";
import CometCanvas from "@/components/CometCanvas";
import Script from "next/script";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Rudra Sankha Sinhamahapatra | Full Stack Developer",
  description:
    "I'm a Full Stack Developer skilled in React, Next.js, TypeScript,AWS, Node js. Check out my portfolio!",
  openGraph: {
    title: "Rudra Sankha Sinhamahapatra  | Full Stack Developer",
    description:
      "Explore my projects, blog, and experience in full stack development,web3,devops",
    url: "https://rudrasankha.com",
    siteName: "Your Portfolio",
    images: [
      {
        url: "https://avatars.githubusercontent.com/u/101992909?v=4",
        width: 1200,
        height: 630,
        alt: "Rudra Sankha",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Rudra Sankha Sinhamahapatra | Full Stack Developer",
    description: "Explore my projects and fullstack development journey",
    site: "@RudraSankha",
    images: ["https://avatars.githubusercontent.com/u/101992909?v=4"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark" suppressHydrationWarning>
      <head>
        <Script
          id="structured-data"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              name: "Rudra Sankha Sinhamahapatra",
              url: "https://rudrasankha.com",
              sameAs: [
                "https://www.linkedin.com/in/rudra-sankha-sinhamahapatra-6311aa1bb/",
                "https://github.com/Rudra-Sankha-Sinhamahapatra",
                "https://x.com/RudraSankha",
              ],
            }),
          }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <SpaceWarpCanvas />
        <CometCanvas />
        <ColorGlow />
        <FloatingNav addClass="fixed inset-x-0 bottom-0 border border-[#D14309]" />
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
