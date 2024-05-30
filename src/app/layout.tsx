import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { shopper } from "@/lib/shopper.config";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: `${shopper.title} - ${shopper.tagline}`,
  description: shopper.description,
  keywords: shopper.keywords
};


import QueryClientProvider from "@/components/QueryClientProvider";
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
      <QueryClientProvider>
        <ThemeProvider>
          <ProgressProvider>
            <Navbar />
              <main className="min-h-svh">
                {children}
              </main>
            <Footer />
          </ProgressProvider>
        </ThemeProvider>
      </QueryClientProvider>
      </body>
    </html>
  );
}
