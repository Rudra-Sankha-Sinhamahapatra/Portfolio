import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/navbar";
import ThemeProvider from "@/components/setTheme";
import Script from "next/script";
import { Analytics } from "@vercel/analytics/react"

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://rudrasankha.com"),
  title: {
    default: "Rudra Sankha Sinhamahapatra",
    template: "%s | Full Stack Developer",
  },
  description:
    "I'm a Full Stack Developer skilled in React, Next.js, TypeScript,AWS, Node js. Check out my portfolio!",
  openGraph: {
    title: "Rudra Sankha Sinhamahapatra  | Full Stack Developer",
    description:
      "Explore my projects, blog, and experience in full stack development,web3,devops",
    url: "https://rudrasankha.com",
    siteName: "Rudra Sankha Portfolio",
    locale: "en_US",
    images: [
      {
        url: "https://avatars.githubusercontent.com/u/101992909?v=4",
        width: 1200,
        height: 630,
        alt: "Rudra Sankha Sinhamahapatra",
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
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
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
        <ThemeProvider>
          <Navbar />
          <main className="relative z-10">
            {children}
          </main>
          <Analytics />
        </ThemeProvider>
      </body>
    </html>
  );
}
