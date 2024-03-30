import { Inter } from "next/font/google";

import type { Metadata } from "next";
import "./globals.css";
import Navop from "@/components/header/Nav";

import Header from "@/components/header/Header";
import Footer from "@/components/footer/footer";
import { ClerkProvider } from "@clerk/nextjs";
import { cn } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Aspire App",
  description: "Multipurpose Website Templates That boost your sales",
};

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body className={cn(inter.className)}>
          <Header />
          <>{children}</>
        </body>
      </html>
    </ClerkProvider>
  );
}
