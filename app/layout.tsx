import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { Navbar } from "./components/Navbar";
import { Cursor } from "./components/Cursor";
import { Analytics } from "@vercel/analytics/react";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Kübra Kara | Full Stack Developer",
  description: "Modern ve yaratıcı web uygulamaları geliştiriyorum.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning className="scroll-smooth">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-[#DCCFED] dark:bg-[#0f0b15] text-black dark:text-white transition-colors duration-300`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Analytics></Analytics>
          <Navbar />
          <Cursor />

          <main className="pt-24">{children}</main>
        </ThemeProvider>
      </body>
    </html>
  );
}
