import type { Metadata } from "next";
import Script from "next/script";

export const metadata: Metadata = {
  title: "Rudra Sankha Projects",
  description:
    "Explore Rudra Sankha's projects - full-stack applications, AI integrations, web3, and innovative solutions. Encorp AI, BetterUptime, W8W, Adda AI and more.",
  keywords: [
    "Rudra Sankha Projects",
    "Rudra Sankha Portfolio",
    "Rudra Sankha Sinhamahapatra Projects",
    "Rudra Projects",
    "Rudra Portfolio",
    "Full Stack Developer Projects",
  ],
  openGraph: {
    title: "Rudra Sankha Projects | Full Stack Developer Portfolio",
    description:
      "Rudra Sankha's project portfolio - full-stack apps, AI, web3. Encorp AI, BetterUptime, W8W, Adda AI, TradingPro, and more.",
    url: "https://rudrasankha.com/projects",
    type: "website",
    images: [
      {
        url: "https://avatars.githubusercontent.com/u/101992909?v=4",
        width: 1200,
        height: 630,
        alt: "Rudra Sankha Sinhamahapatra - Full Stack Developer Projects",
      },
    ],
    siteName: "Rudra Sankha Sinhamahapatra",
  },
  twitter: {
    card: "summary_large_image",
    title: "Rudra Sankha Projects | Portfolio",
    description: "Explore Rudra Sankha's full-stack development projects.",
    images: ["https://avatars.githubusercontent.com/u/101992909?v=4"],
    creator: "Rudra Sankha Sinhamahapatra",
  },
  alternates: {
    canonical: "https://rudrasankha.com/projects",
  },
};

export default function ProjectsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Script
        id="projects-structured-data"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "CollectionPage",
            name: "Rudra Sankha Projects",
            description:
              "Portfolio of Rudra Sankha Sinhamahapatra - Full Stack Developer projects including Encorp AI, BetterUptime, W8W, Adda AI, and more.",
            url: "https://rudrasankha.com/projects",
            mainEntity: {
              "@type": "Person",
              name: "Rudra Sankha Sinhamahapatra",
              jobTitle: "Full Stack Developer",
              url: "https://rudrasankha.com",
            },
          }),
        }}
      />
      {children}
    </>
  );
}
