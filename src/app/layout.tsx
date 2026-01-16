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
  description: "Behavioral mastery, without the binders. NLP & behavioral analysis toolkit for practitioners.",
  keywords: ["NLP", "behavioral analysis", "coaching", "psychology", "practitioner tools"],
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
