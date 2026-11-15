import type { Metadata } from "next";
import "./globals.css";
import { Providers } from "@/components/site/Providers";
import { SiteNav } from "@/components/site/SiteNav";
import { SiteFooter } from "@/components/site/SiteFooter";

export const metadata: Metadata = {
  title: {
    template: "%s | Nicklaus Vega",
    default: "Nicklaus Vega | Fintech Lead at IronClad, founder of Rynvo",
  },
  description:
    "Nicklaus Vega is the Financial Technology Lead at IronClad Consulting Services and founder of Rynvo in Austin, Texas. He builds, secures and runs the systems businesses rely on: platform and security engineering, identity and access management, and web development.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <Providers>
          <a className="skip-link" href="#main">
            Skip to content
          </a>
          <SiteNav />
          <main id="main">{children}</main>
          <SiteFooter />
        </Providers>
      </body>
    </html>
  );
}
