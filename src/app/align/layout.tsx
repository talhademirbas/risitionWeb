import type { Metadata } from "next";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.risition.com"),
};

export default function AlignLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return children;
}
