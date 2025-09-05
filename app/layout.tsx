import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import { Navbar } from "@/components/navigation/navbar";
import { LanguageProvider } from "@/lib/contexts/language-context";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    template: "%s | Studio - Custom Websites & AI Solutions",
    default: "Studio - High-Impact Web & AI Solutions",
  },
  description: "We build high-performance websites and AI-powered solutions that scale. Custom development, LLM integration, and technical consulting for ambitious projects.",
  keywords: ["web development", "AI solutions", "custom websites", "LLM integration", "technical consulting", "performance optimization"],
  authors: [{ name: "Studio Team" }],
  creator: "Studio",
  publisher: "Studio",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://yourdomain.com",
    title: "Studio - High-Impact Web & AI Solutions",
    description: "We build high-performance websites and AI-powered solutions that scale.",
    siteName: "Studio",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Studio - Custom Websites & AI Solutions",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Studio - High-Impact Web & AI Solutions",
    description: "We build high-performance websites and AI-powered solutions that scale.",
    images: ["/og-image.png"],
    creator: "@yourstudio",
  },
  verification: {
    google: "your-google-verification-code",
  },
  alternates: {
    canonical: "https://yourdomain.com",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body className={`${inter.variable} ${jetbrainsMono.variable} antialiased`}>
        <LanguageProvider>
          <Navbar />
          {children}
        </LanguageProvider>
      </body>
    </html>
  );
}
