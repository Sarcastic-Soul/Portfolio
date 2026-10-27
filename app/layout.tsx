import type React from "react";
import type { Metadata } from "next";
import { GeistSans } from "geist/font/sans";
import { JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";
import { ScrollToTop } from "@/components/scroll-to-top";
import { ogImage } from "@/lib/og-image";
import { SITE_URL } from "@/lib/data";

const jetbrainsMono = JetBrains_Mono({ subsets: ["latin"], variable: "--font-mono" });

const title = "Anish Kumar | Backend & Full-Stack Developer";
const description =
  "Anish Kumar, B.Tech student at IIIT Naya Raipur and backend & full-stack developer. Two internships (Samsung PRISM, Aparsoft), a Redis-compatible server in Java, a Kubernetes-scaled URL shortener and a terminal coding agent.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title,
  description,
  keywords: [
    "Anish Kumar",
    "Backend Developer",
    "Full Stack Developer",
    "Software Engineer",
    "IIIT Naya Raipur",
    "Java",
    "Spring Boot",
    "Next.js",
    "React",
    "TypeScript",
    "Python",
  ],
  authors: [{ name: "Anish Kumar", url: SITE_URL }],
  creator: "Anish Kumar",
  alternates: { canonical: "/" },
  robots: { index: true, follow: true },
  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/icon.png", type: "image/png" },
    ],
    shortcut: "/favicon.ico",
  },
  openGraph: {
    type: "profile",
    locale: "en_US",
    url: SITE_URL,
    title,
    description,
    siteName: "Anish Kumar",
    firstName: "Anish",
    lastName: "Kumar",
    images: [ogImage],
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: [ogImage],
    creator: "@Sarcastic_Soul",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      data-scroll-behavior="smooth"
      className={`${GeistSans.variable} ${jetbrainsMono.variable}`}
      suppressHydrationWarning
    >
      <body className="font-sans">
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <a
            href="#main"
            className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[60] focus:rounded-md focus:bg-foreground focus:px-3 focus:py-2 focus:text-background"
          >
            Skip to content
          </a>
          <Navigation />
          <main id="main" className="mx-auto max-w-5xl px-4 sm:px-6">
            {children}
          </main>
          <Footer />
          <ScrollToTop />
        </ThemeProvider>
      </body>
    </html>
  );
}
