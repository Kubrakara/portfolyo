import type { Metadata } from "next";
import { Rubik } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { Navbar } from "./components/Navbar";

// 🌟 Yeni font: Rubik
const rubik = Rubik({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-rubik",
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
        className={`${rubik.variable} font-sans antialiased bg-[#DCCFED] dark:bg-[#0f0b15] text-black dark:text-white transition-colors duration-300`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Navbar />
          <main className="pt-24">{children}</main>
        </ThemeProvider>
      </body>
    </html>
  );
}
