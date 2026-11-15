"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";
import { ThemeProvider } from "next-themes";
import { installReferenceReveals } from "./reveal";

function Reveals() {
  const pathname = usePathname();
  useEffect(() => installReferenceReveals(document), [pathname]);
  return null;
}

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider attribute="class" defaultTheme="light" enableSystem={false} disableTransitionOnChange>
      {children}
      <Reveals />
    </ThemeProvider>
  );
}
