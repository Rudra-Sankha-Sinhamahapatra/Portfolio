import type { Metadata } from "next";
import Script from "next/script";

export const metadata: Metadata = {
  title: "Rudra Sankha Resume",
  description:
    "Download Rudra Sankha's resume and CV. Full Stack Developer skilled in React, Next.js, TypeScript, AWS, Node.js. View experience, skills, and projects.",
  keywords: [
    "Rudra Sankha Resume",
    "Rudra Sankha CV",
    "Rudra Sankha Sinhamahapatra Resume",
    "Rudra Sankha Sinhamahapatra CV",
    "Rudra Resume",
    "Rudra CV",
    "Full Stack Developer Resume",
  ],
  openGraph: {
    title: "Rudra Sankha Resume | Full Stack Developer CV",
    description:
      "Download Rudra Sankha's resume. Full Stack Developer with expertise in React, Next.js, TypeScript, AWS, Docker, Redis and Node.js.",
    url: "https://rudrasankha.com/resume",
    type: "website",
    images: [
      {
        url: "https://avatars.githubusercontent.com/u/101992909?v=4",
        width: 1200,
        height: 630,
        alt: "Rudra Sankha Sinhamahapatra - Full Stack Developer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Rudra Sankha Resume | Full Stack Developer",
    description: "Download Rudra Sankha's resume and CV. Full Stack Developer portfolio.",
    images: ["https://avatars.githubusercontent.com/u/101992909?v=4"],
  },
  alternates: {
    canonical: "https://rudrasankha.com/resume",
  },
};

export default function ResumeLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Script
        id="resume-structured-data"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebPage",
            name: "Rudra Sankha Resume",
            description:
              "Rudra Sankha Sinhamahapatra - Full Stack Developer Resume and CV. Download PDF.",
            url: "https://rudrasankha.com/resume",
            image: "https://avatars.githubusercontent.com/u/101992909?v=4",
            mainEntity: {
              "@type": "Person",
              name: "Rudra Sankha Sinhamahapatra",
              jobTitle: "Full Stack Developer",
              image: "https://avatars.githubusercontent.com/u/101992909?v=4",
              url: "https://rudrasankha.com",
            },
          }),
        }}
      />
      {children}
    </>
  );
}
