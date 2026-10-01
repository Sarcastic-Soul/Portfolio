import type React from "react";
import type { Metadata } from "next";
import { JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { Toaster } from "@/components/ui/toaster";
import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";
import { ScrollToTop } from "@/components/scroll-to-top";

const jetbrainsMono = JetBrains_Mono({ subsets: ["latin"] });
const siteUrl = "https://anish-k.vercel.app";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Anish Kumar | Full Stack & Systems Developer",
    template: "%s | Anish Kumar",
  },
  description:
    "Portfolio of Anish Kumar, Full Stack & Systems Developer at IIIT Naya Raipur. Building scalable systems from scratch with minimal third-party dependencies.",
  keywords: [
    "Anish Kumar",
    "Full Stack Developer",
    "Systems Engineer",
    "IIIT Naya Raipur",
    "Java NIO",
    "Spring Boot",
    "Next.js",
    "React",
    "TypeScript",
    "Open Source",
  ],
  authors: [{ name: "Anish Kumar", url: "https://github.com/Sarcastic-Soul" }],
  creator: "Anish Kumar",
  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/icon.png", type: "image/png" },
    ],
    shortcut: "/favicon.ico",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteUrl,
    title: "Anish Kumar | Full Stack & Systems Developer",
    description:
      "Portfolio of Anish Kumar, Full Stack & Systems Developer at IIIT Naya Raipur. Building scalable systems from scratch with minimal third-party dependencies.",
    siteName: "Anish Kumar Portfolio",
    images: [
      {
        url: `https://image.thum.io/get/width/1200/crop/630/${siteUrl}`,
        width: 1200,
        height: 630,
        alt: "Anish Kumar Portfolio Live Preview",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Anish Kumar | Full Stack & Systems Developer",
    description:
      "Portfolio of Anish Kumar, Full Stack & Systems Developer at IIIT Naya Raipur. Building scalable systems from scratch with minimal third-party dependencies.",
    images: [
      `https://image.thum.io/get/width/1200/crop/630/${siteUrl}`,
    ],
    creator: "@Sarcastic_Soul",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" data-scroll-behavior="smooth" suppressHydrationWarning>
      <body className={jetbrainsMono.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <div className="min-h-screen bg-background text-foreground flex flex-col">
            <Navigation />
            <main className="flex-grow">{children}</main>
            <Footer />
            <ScrollToTop />
          </div>
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  );
}
