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
  metadataBase: new URL("https://risition.vercel.app"),
  title: "Risition | Ultra-Modern Tech App Platform",
  description:
    "Risition helps product teams build and scale intelligent app experiences with cinematic speed, precision, and enterprise-grade reliability.",
  keywords: [
    "Risition",
    "tech app platform",
    "product infrastructure",
    "AI workflow",
    "SaaS platform",
  ],
  openGraph: {
    title: "Risition | Ultra-Modern Tech App Platform",
    description:
      "Design, deploy, and scale high-performance app experiences from one elegant command center.",
    url: "https://risition.vercel.app",
    siteName: "Risition",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Risition | Ultra-Modern Tech App Platform",
    description:
      "The command center for intelligent products, modern infrastructure, and global scale.",
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
