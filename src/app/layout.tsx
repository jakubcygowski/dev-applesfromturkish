import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import WhatsAppButton from "@/components/WhatsAppButton";

const SITE_URL = "https://applesfromturkey.com";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Apples from Turkey — Premium Apple Export for Wholesalers",
    template: "%s — Apples from Turkey",
  },
  description:
    "Premium quality Turkish apples for small and medium wholesalers globally. Fuji, Gala, Red, Golden Delicious & Granny Smith — export-grade, fresh from orchards in Isparta.",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: SITE_URL,
    siteName: "Apples from Turkey",
    title: "Apples from Turkey — Premium Apple Export for Wholesalers",
    description:
      "Premium quality Turkish apples for wholesalers globally. Five varieties, export-grade packaging, reliable delivery.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Apples from Turkey — Premium Apple Export",
    description:
      "Premium quality Turkish apples for wholesalers globally. Five varieties, export-grade packaging, reliable delivery.",
  },
  alternates: {
    canonical: SITE_URL,
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: [{ url: "/favicon.ico", type: "image/x-icon" }],
    shortcut: "/favicon.ico",
    apple: "/favicon.jpeg",
  },
};

const websiteJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "Apples from Turkey",
  url: SITE_URL,
  description:
    "Premium quality Turkish apples for small and medium wholesalers globally.",
  potentialAction: {
    "@type": "SearchAction",
    target: `${SITE_URL}/?q={search_term_string}`,
    "query-input": "required name=search_term_string",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col font-sans text-foreground bg-background">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteJsonLd) }}
        />
        {children}
        <WhatsAppButton />
      </body>
    </html>
  );
}
