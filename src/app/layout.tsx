import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { ThemeProvider } from "next-themes";
import { Toaster } from "@/components/ui/toaster";
import { I18nProvider } from "@/lib/i18n";
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
  title: "Business Hustle | AI Solutions for African Enterprises",
  icons: {
    icon: [
      { url: "/icon.svg", type: "image/svg+xml" },
    ],
  },
  description:
    "Business Hustle transforms African businesses with AI-powered automation, intelligent agents, and data platforms. From your first idea to your first AI-powered revenue — we build the infrastructure that makes AI work.",
  keywords: [
    "Business Hustle",
    "AI solutions",
    "African enterprises",
    "AI automation",
    "machine learning",
    "intelligent agents",
    "data platform",
    "South Africa",
    "enterprise AI",
    "digital transformation",
  ],
  authors: [{ name: "Business Hustle Ltd" }],
  openGraph: {
    title: "Business Hustle | AI Solutions for African Enterprises",
    description:
      "Transform your business with AI-powered automation, intelligent agents, and enterprise-grade data platforms.",
    siteName: "Business Hustle",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Business Hustle | AI Solutions for African Enterprises",
    description:
      "Transform your business with AI-powered automation, intelligent agents, and enterprise-grade data platforms.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
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
            <Toaster />
          </I18nProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}