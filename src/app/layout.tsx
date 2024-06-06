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
import { Suspense } from "react";

import AuthProvider from "@/components/AuthProvider";
import { Toaster } from "@/components/ui/toaster";

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
            <AuthProvider>
              <Suspense fallback="Loading...">
                <Navbar />
                  <main className="min-h-svh">
                    {children}
                  </main>
                <Footer />
                <Toaster />
              </Suspense>
            </AuthProvider>
          </ProgressProvider>
        </ThemeProvider>
      </QueryClientProvider>
      </body>
    </html>
  );
}
