import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
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
  metadataBase: new URL("https://www.risition.com"),
  title: "Risition — Indie App Studio",
  description:
    "Risition is an indie app studio. We make useful iPhone and iPad apps — starting with Align, a daily planner and to-do list.",
  keywords: [
    "Risition",
    "indie app studio",
    "Align",
    "daily planner",
    "to do list",
    "iPhone apps",
  ],
  openGraph: {
    title: "Risition — Indie App Studio",
    description:
      "Indie apps for iPhone and iPad. Align helps you organise your day without the clutter.",
    url: "https://www.risition.com",
    siteName: "Risition",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "Risition — Indie App Studio",
    description:
      "Indie apps for iPhone and iPad. Align helps you organise your day without the clutter.",
  },
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
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
