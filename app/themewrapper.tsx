"use client";

import Navbar from "@/components/shared/navbar/navbar";
import { ThemeProvider } from "next-themes";
import { usePathname } from "next/navigation";

export default function ThemeProviderWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname()
  return (
  <>
{!pathname?.startsWith('/user-dashboard') && <Navbar />}
    <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
      {children}
    </ThemeProvider>
  </>
  );
}
