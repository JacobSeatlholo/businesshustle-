import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";
import { SessionProvider } from "@/components/providers/session-provider";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "BusinessHustle - Real-Time Social Platform",
  description: "Next-generation real-time social platform with gamified economy, virtual gifting, and Discord integration. Powered by businesshustle.co.za",
  keywords: [
    "BusinessHustle", 
    "Social Platform", 
    "Discord Integration", 
    "Virtual Economy", 
    "Real-time Chat",
    "Gifting",
    "South Africa"
  ],
  authors: [{ name: "BusinessHustle Team" }],
  icons: {
    icon: "/favicon.ico",
  },
  openGraph: {
    title: "BusinessHustle - Real-Time Social Platform",
    description: "Connect, gift, and thrive in our gamified social ecosystem",
    url: "https://www.businesshustle.co.za",
    siteName: "BusinessHustle",
    type: "website",
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
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-slate-950 text-white`}
      >
        <SessionProvider>
          {children}
          <Toaster />
        </SessionProvider>
      </body>
    </html>
  );
}
