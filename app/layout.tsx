import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";


import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

import { ThemeProvider } from "@/providers/Theme";

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
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
            <div className="min-h-screen flex flex-col bg-gray-50 text-gray-800 dark:bg-gray-950 dark:text-gray-100 transition-colors duration-300">
              <Navbar />
              <main className="flex-1">{children}</main>
              <Footer />
            </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
