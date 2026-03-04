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
    <html lang="en" data-wf-domain="www.serviceplan-agents.com" data-wf-site="6990b006d2c582acd039bf7e">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="shortcut icon" href="/images/sp-logo.png" type="image/x-icon" />
        <link href="/styles/webflow.css" rel="stylesheet" type="text/css" />
      </head>
      <body>{children}</body>
    </html>
  );
}
