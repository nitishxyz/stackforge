import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/providers/theme-provider";
import { AuthProvider } from "@/providers/auth-provider";
import { Navbar } from "@/components/navbar";
import Script from "next/script";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "StackForge - SST Template Stack",
  description:
    "A comprehensive monorepo template for building modern full-stack applications with SST, Next.js, Expo, and Bun.",
  keywords: [
    "SST",
    "serverless",
    "Next.js",
    "Expo",
    "Bun",
    "Drizzle ORM",
    "OpenAuth",
    "Polar",
    "monorepo",
    "AWS",
  ],
  authors: [{ name: "StackForge" }],
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://stackforge.com",
    title: "StackForge - Build. Deploy. Scale.",
    description:
      "A comprehensive monorepo template for building modern full-stack applications with SST, Next.js, Expo, and Bun.",
    siteName: "StackForge",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "StackForge - SST Template Stack",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "StackForge - Build. Deploy. Scale.",
    description:
      "A comprehensive monorepo template for building modern full-stack applications with SST, Next.js, Expo, and Bun.",
    images: ["/og-image.jpg"],
  },
  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
    ],
    shortcut: "/favicon.ico",
    apple: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <Script defer src="https://assets.onedollarstats.com/stonks.js" />
      <body
        className={`${geistSans.variable} ${geistMono.variable}  antialiased`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <AuthProvider>
            <div className="relative flex min-h-screen flex-col overflow-x-hidden">
              <Navbar />
              <main className="flex-1">{children}</main>
            </div>
          </AuthProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
