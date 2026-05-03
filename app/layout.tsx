import type { Metadata } from "next";
import type { ReactNode } from "react";

import { profile } from "@/data/portfolio";

import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(`https://${profile.domain}`),
  title: profile.name,
  description:
    "Mahdi Alsalami is a computer science graduate from California State University, Long Beach.",
  keywords: [
    "Mahdi Alsalami",
    "software engineer",
    "full-stack developer",
    "CSULB computer science",
    "developer portfolio"
  ],
  openGraph: {
    title: profile.name,
    description:
      "Computer science graduate interested in software engineering, practical tools, and learning from strong engineers.",
    url: `https://${profile.domain}`,
    siteName: profile.name,
    images: [
      {
        url: "/og-image.svg",
        width: 1200,
        height: 630,
        alt: `${profile.name} portfolio preview`
      }
    ],
    locale: "en_US",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: profile.name,
    description:
      "Computer science graduate interested in software engineering, practical tools, and learning from strong engineers.",
    images: ["/og-image.svg"]
  },
  alternates: {
    canonical: `https://${profile.domain}`
  }
};

export default function RootLayout({ children }: Readonly<{ children: ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
