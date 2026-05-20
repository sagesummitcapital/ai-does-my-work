import type { Metadata, Viewport } from "next";
import { Inter, Instrument_Serif, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
  weight: ["400", "500", "600", "700", "800"],
});

const serif = Instrument_Serif({
  subsets: ["latin"],
  variable: "--font-serif",
  display: "swap",
  weight: ["400"],
});

const mono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
  weight: ["400", "500", "600"],
});

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://aidoesmywork.com";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "AI Does My Work — Replace repetitive work with intelligent systems",
  description:
    "AI-native portfolio transformation for private equity firms and middle-market businesses. Replace repetitive operational labor with intelligent systems and AI-native workflows.",
  applicationName: "AI Does My Work",
  authors: [{ name: "AI Does My Work" }],
  keywords: [
    "AI-native operations",
    "portfolio transformation",
    "private equity AI",
    "operational intelligence",
    "AI infrastructure audit",
    "workflow transformation",
    "middle market",
  ],
  openGraph: {
    type: "website",
    url: siteUrl,
    title: "AI Does My Work — AI-Native Portfolio Transformation",
    description:
      "Replace repetitive work with intelligent systems. AI-native operational transformation for PE firms and middle-market businesses.",
    siteName: "AI Does My Work",
    images: ["/assets/aidmw-mark.png"],
  },
  twitter: {
    card: "summary_large_image",
    title: "AI Does My Work",
    description:
      "AI-native portfolio transformation for private equity and middle-market businesses.",
  },
  robots: { index: true, follow: true },
  icons: {
    icon: [
      { url: "/assets/favicon-32.png", sizes: "32x32", type: "image/png" },
      { url: "/assets/favicon-192.png", sizes: "192x192", type: "image/png" },
      { url: "/assets/favicon-512.png", sizes: "512x512", type: "image/png" },
    ],
    apple: "/assets/favicon-192.png",
  },
};

export const viewport: Viewport = {
  themeColor: "#FFFFFF",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${serif.variable} ${mono.variable}`}
    >
      <body>
        <div className="bg" aria-hidden="true">
          <div className="bg-grid" />
          <div className="bg-glow bg-glow--a" />
          <div className="bg-glow bg-glow--b" />
        </div>
        {children}
      </body>
    </html>
  );
}
