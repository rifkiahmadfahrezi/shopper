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
import ThemeProvider from "@/components/ThemeProvider";
import { Suspense } from "react";
import StoreProvider from "@/components/StoreProvider";
import { Toaster } from "@/components/ui/sonner";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <link rel="apple-touch-icon" sizes="180x180" href="/favicon/apple-touch-icon.png"/>
      <link rel="icon" type="image/png" sizes="32x32" href="/favicon/favicon-32x32.png"/>
      <link rel="icon" type="image/png" sizes="16x16" href="/favicon/favicon-16x16.png"></link>
      <link rel="icon" href="/favicon/favicon.ico" sizes="any" />
      <body className={inter.className}>
      <QueryClientProvider>
        <ThemeProvider>
          <ProgressProvider>
            <StoreProvider>
              <Suspense fallback="Loading...">
                  {children}
                <Toaster />
              </Suspense>
            </StoreProvider>
          </ProgressProvider>
        </ThemeProvider>
      </QueryClientProvider>
      </body>
    </html>
  );
}
