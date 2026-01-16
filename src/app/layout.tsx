import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navigation from "@/components/Navigation";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Invisible Toolkit | Behavioral Mastery",
  description: "Behavioral mastery, without the binders. NLP & behavioral analysis toolkit for practitioners. Rapidly read people, select the right intervention, and apply techniques ethically.",
  keywords: ["NLP", "behavioral analysis", "coaching", "psychology", "practitioner tools", "neuro-linguistic programming", "rapport building", "hypnosis"],
  authors: [{ name: "Invisible Toolkit" }],
  creator: "Invisible Toolkit",
  metadataBase: new URL("https://invisible-toolkit-app.web.app"),
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://invisible-toolkit-app.web.app",
    title: "Invisible Toolkit | Behavioral Mastery",
    description: "NLP & behavioral analysis toolkit for practitioners. 4 modules, safety-first approach, and practical techniques.",
    siteName: "Invisible Toolkit",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Invisible Toolkit - Behavioral Mastery",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Invisible Toolkit | Behavioral Mastery",
    description: "NLP & behavioral analysis toolkit for practitioners. Rapidly read people and apply techniques ethically.",
    images: ["/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        <Navigation />
        <main style={{ paddingTop: "80px", minHeight: "100vh" }}>
          {children}
        </main>
      </body>
    </html>
  );
}
