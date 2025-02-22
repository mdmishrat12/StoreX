import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import ThemeProviderWrapper from "./themewrapper";
import Navbar from "@/components/shared/navbar/navbar";

const inter = Inter({subsets:['latin']})

export const metadata: Metadata = {
  title: "StoreX",
  description: "Online shop that make you smile",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} antialiased bg-background min-h-screen`}
      >
        <ThemeProviderWrapper>
        <Navbar/>
        {children}
        </ThemeProviderWrapper>
      </body>
    </html>
  );
}

