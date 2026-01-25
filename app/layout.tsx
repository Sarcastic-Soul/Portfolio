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
const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";

export const metadata: Metadata = {
  title: "Anish Kumar - Full Stack Developer",
  description:
    "Portfolio of Anish Kumar, a passionate full-stack developer specializing in React, Node.js, and modern web technologies.",
  keywords: [
    "Full Stack Developer",
    "React",
    "Node.js",
    "JavaScript",
    "TypeScript",
    "Web Development",
  ],
  authors: [{ name: "Anish Kumar" }],
  creator: "Anish Kumar",
  icons: {
    icon: [
      { url: `${basePath}/favicon.ico` },
      { url: `${basePath}/icon.png`, type: "image/png" },
    ],
    shortcut: `${basePath}/favicon.ico`,
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://anishkumar.dev",
    title: "Anish Kumar - Full Stack Developer",
    description:
      "Portfolio of Anish Kumar, a passionate full-stack developer specializing in React, Node.js, and modern web technologies.",
    siteName: "Anish Kumar Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Anish Kumar - Full Stack Developer",
    description:
      "Portfolio of Anish Kumar, a passionate full-stack developer specializing in React, Node.js, and modern web technologies.",
    creator: "@anishkumar",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={jetbrainsMono.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
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
