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
  title: "Business Hustle | Digital Infrastructure & AI Operations for South Africa",
  icons: {
    icon: [
      { url: "/icon.svg", type: "image/svg+xml" },
    ],
  },
  description:
    "Business Hustle builds street-level digital infrastructure and AI operations for South African entrepreneurs. Grounded in Batho Pele principles — from local directories and GEO optimisation to open-source AI workflow automation.",
  keywords: [
    "Business Hustle",
    "digital infrastructure",
    "AI operations",
    "GEO optimisation",
    "South African business",
    "Batho Pele",
    "S2S automation",
    "local digital directories",
    "AI operators",
    "Mafikeng Innovation Hub",
    "KloofStreet",
    "open-source AI",
    "South Africa",
  ],
  authors: [{ name: "Tselakgosi Jacob Seatlholo" }, { name: "Business Hustle Ltd" }],
  openGraph: {
    title: "Business Hustle | Digital Infrastructure & AI Operations for South Africa",
    description:
      "Street-level digital infrastructure and AI operations for South African entrepreneurs. Grounded in Batho Pele principles.",
    siteName: "Business Hustle",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Business Hustle | Digital Infrastructure & AI Operations for South Africa",
    description:
      "Street-level digital infrastructure and AI operations for South African entrepreneurs. Grounded in Batho Pele principles.",
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
          src="https://plausible-production-63a6.up.railway.app/js/script.js"
          strategy="afterInteractive"
        />
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