import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/navbar";
import ThemeProvider from "@/components/setTheme";
import Script from "next/script";
import { Analytics } from "@vercel/analytics/react"
import Link from "next/link";

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
    "I'm a Full Stack Developer skilled in React, Next.js, TypeScript, AWS, Docker, Redis and Node.js. Check out my projects, resume, and portfolio!",
  keywords: ["Rudra Sankha", "Rudra Sankha Sinhamahapatra", "Full Stack Developer"],
  openGraph: {
    title: "Rudra Sankha Sinhamahapatra  | Full Stack Developer",
    description:
      "Explore my projects, blog, and experience in full stack development,web3,devops",
    url: "https://rudrasankha.com",
    siteName: "Rudra Sankha Sinhamahapatra",
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
    creator: "Rudra Sankha Sinhamahapatra",
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

          <footer className="py-4 text-center border-t border-white/5">
            <nav className="flex justify-center gap-6 text-sm text-gray-500" aria-label="Footer">
              <Link href="/" className="hover:text-white transition-colors">Home</Link>
              <Link href="/projects" className="hover:text-white transition-colors">Projects</Link>
              <Link href="/resume" className="hover:text-white transition-colors">Resume</Link>
            </nav>
          </footer>
          <Analytics />
        </ThemeProvider>
      </body>
    </html>
  );
}
