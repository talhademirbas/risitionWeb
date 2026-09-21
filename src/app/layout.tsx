import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { SITE_URL } from "@/lib/site";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Risition — Indie App Studio",
    template: "%s | Risition",
  },
  description:
    "Risition is an indie app studio. We make useful iPhone and iPad apps — starting with Align, a daily planner and to-do list.",
  keywords: [
    "Risition",
    "indie app studio",
    "Align daily planner",
    "Align to do list",
    "iPhone apps",
  ],
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    title: "Risition — Indie App Studio",
    description:
      "Indie apps for iPhone and iPad. Align is our daily planner and to-do list.",
    url: SITE_URL,
    siteName: "Risition",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary",
    title: "Risition — Indie App Studio",
    description:
      "Indie apps for iPhone and iPad. Align is our daily planner and to-do list.",
  },
};

const siteJsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      name: "Risition",
      url: SITE_URL,
      description:
        "Indie app studio. Maker of Align, a daily planner and to-do list for iPhone and iPad.",
    },
    {
      "@type": "WebSite",
      name: "Risition",
      url: SITE_URL,
      publisher: { "@type": "Organization", name: "Risition" },
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(siteJsonLd) }}
        />
        {children}
      </body>
    </html>
  );
}
