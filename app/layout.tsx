import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";

import "./globals.css";
import { SiteHeader } from "@/components/layout/SiteHeader";
import { SiteFooter } from "@/components/layout/SiteFooter";

const siteUrl = (
  process.env.NEXT_PUBLIC_SITE_URL ||
  "https://fadhelnaufal12.vercel.app"
).replace(/\/+$/, "");

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),

  title: {
    default: "Fadhel Naufal Akbar — Full-Stack Web Developer",
    template: "%s | Fadhel Naufal Akbar",
  },

  description:
    "Fadhel Naufal Akbar is a Full-Stack Web Developer building thoughtful web systems and applications with Laravel, Vue, Inertia.js, and Next.js.",

  applicationName: "Fadhel Naufal Akbar Portfolio",
  authors: [{ name: "Fadhel Naufal Akbar" }],
  creator: "Fadhel Naufal Akbar",
  publisher: "Fadhel Naufal Akbar",

  verification: {
    google: "_R9IX7VelQxiuYn4PcqXh1qWl3_35AYUxrtaK0Taz9w",
  },

  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteUrl,
    siteName: "Fadhel Naufal Akbar",
    title: "Fadhel Naufal Akbar — Full-Stack Web Developer",
    description:
      "Explore the portfolio of Fadhel Naufal Akbar, a Full-Stack Web Developer building thoughtful web systems and applications with modern web technologies.",
  },

  twitter: {
    card: "summary_large_image",
    title: "Fadhel Naufal Akbar — Full-Stack Web Developer",
    description:
      "Explore projects and digital solutions by Fadhel Naufal Akbar, a Full-Stack Web Developer.",
  },

  alternates: {
    canonical: "/",
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
};

export default function RootLayout({
  children,
}: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      data-scroll-behavior="smooth"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased scroll-smooth`}
    >
      <body className="flex min-h-full flex-col bg-background font-sans text-foreground">
        <SiteHeader />

        <main className="flex-1">{children}</main>

        <SiteFooter />
      </body>
    </html>
  );
}
