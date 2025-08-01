import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import { Toaster } from "@/components/ui/toaster"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Anish Kumar - Full Stack Developer",
  description:
    "Portfolio of Anish Kumar, a passionate full-stack developer specializing in React, Node.js, and modern web technologies.",
  keywords: ["Full Stack Developer", "React", "Node.js", "JavaScript", "TypeScript", "Web Development"],
  authors: [{ name: "Anish Kumar" }],
  creator: "Anish Kumar",
  icons: {
    icon: [
      { url: '/favicon.ico' },
      { url: '/icon.png', type: 'image/png' },
    ],
    shortcut: '/favicon.ico',
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
  generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem disableTransitionOnChange>
          {children}
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  )
}
