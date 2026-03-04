import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title:
    "AI Marketing Agents by Serviceplan | Research, Strategy & Project Management",
  description:
    "AI coworkers built by Serviceplan - Europe's leading agency. Get competitive research, market analysis & project plans delivered to your inbox. Try Hannah free.",
  openGraph: {
    title:
      "AI Marketing Agents by Serviceplan | Research, Strategy & Project Management",
    description:
      "AI coworkers built by Serviceplan - Europe's leading agency. Get competitive research, market analysis & project plans delivered to your inbox. Try Hannah free.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title:
      "AI Marketing Agents by Serviceplan | Research, Strategy & Project Management",
    description:
      "AI coworkers built by Serviceplan - Europe's leading agency. Get competitive research, market analysis & project plans delivered to your inbox. Try Hannah free.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/images/sp-logo.png" type="image/png" />
      </head>
      <body className="antialiased">{children}</body>
    </html>
  );
}
