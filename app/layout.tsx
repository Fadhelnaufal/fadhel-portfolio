import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { SiteHeader } from "@/components/layout/SiteHeader";
import { SiteFooter } from "@/components/layout/SiteFooter";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000"),
  title: {
    default: "Fadhel Naufal Akbar — Full-Stack Web Developer",
    template: "%s | Fadhel Naufal Akbar",
  },
  description: "Fadhel Naufal Akbar is a Full-Stack Web Developer building thoughtful web systems and applications with modern web technologies like Laravel, Vue, Inertia.js, and Next.js.",
  authors: [{ name: "Fadhel Naufal Akbar" }],
  creator: "Fadhel Naufal Akbar",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "/",
    title: "Fadhel Naufal Akbar — Full-Stack Web Developer",
    description: "Fadhel Naufal Akbar is a Full-Stack Web Developer building thoughtful web systems and applications with modern web technologies.",
    siteName: "Fadhel Naufal Akbar",
  },
  twitter: {
    card: "summary_large_image",
    title: "Fadhel Naufal Akbar — Full-Stack Web Developer",
    description: "Fadhel Naufal Akbar is a Full-Stack Web Developer building thoughtful web systems and applications.",
  },
  alternates: {
    canonical: "/",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
   <html
  lang="en"
  data-scroll-behavior="smooth"
  className={`${geistSans.variable} ${geistMono.variable} h-full antialiased scroll-smooth`}
>
      <body className="min-h-full flex flex-col bg-background text-foreground font-sans">
        <SiteHeader />
        <main className="flex-1">
          {children}
        </main>
        <SiteFooter />
      </body>
    </html>
  );
}
