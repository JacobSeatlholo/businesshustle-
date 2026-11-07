import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { ThemeProvider } from "next-themes";
import { Toaster } from "@/components/ui/toaster";
import { I18nProvider } from "@/lib/i18n";
import { CookieConsent } from "@/components/cookie-consent";
import Script from "next/script";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Business Hustle | Websites, Directories and AI Automation for South African Businesses",
  icons: {
    icon: [
      { url: "/icon.svg", type: "image/svg+xml" },
    ],
  },
  description:
    "Business Hustle builds websites, online directories, and AI automation for South African businesses. You own everything we build. We follow the Batho Pele principle: People First.",
  keywords: [
    "Business Hustle",
    "websites for South African businesses",
    "online directories",
    "AI automation",
    "AI search visibility",
    "local business directories",
    "Batho Pele",
    "Mafikeng Innovation Hub",
    "KloofStreet",
    "HustlePortal",
    "South Africa",
  ],
  authors: [{ name: "Tselakgosi Jacob Seatlholo" }, { name: "Business Hustle Ltd" }],
  openGraph: {
    title: "Business Hustle | Websites, Directories and AI Automation for South African Businesses",
    description:
      "Websites, online directories, and AI automation for South African businesses. You own everything we build.",
    siteName: "Business Hustle",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Business Hustle | Websites, Directories and AI Automation for South African Businesses",
    description:
      "Websites, online directories, and AI automation for South African businesses. You own everything we build.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <Script
          defer
          data-domain="businesshustle.co.za"
          src="https://plausible-production-63a6.up.railway.app/js/script.hash.outbound-links.js"
          strategy="afterInteractive"
        />
        <Script id="plausible-init" strategy="afterInteractive">
          {`window.plausible = window.plausible || function() { (window.plausible.q = window.plausible.q || []).push(arguments) }`}
        </Script>
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} font-sans antialiased bg-background text-foreground`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <I18nProvider>
            {children}
            <CookieConsent />
            <Toaster />
          </I18nProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}