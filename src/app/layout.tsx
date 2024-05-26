import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Shopper - a shadcn/ui online shop template",
  description: "Shopper is a shadcn/ui template for online shop ",
};

import ProgressProvider from "@/components/progress-bar";
import Navbar from "@/components/fragment/Navbar";
import Footer from "@/components/fragment/Footer";
import ThemeProvider from "@/components/ThemeProvider";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider>
          <ProgressProvider>
            <Navbar />
              <main className="min-h-svh">
                {children}
              </main>
            <Footer />
          </ProgressProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
