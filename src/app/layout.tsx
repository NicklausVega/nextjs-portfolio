import type { Metadata } from "next";
import { GeistSans } from 'geist/font/sans';
import "./globals.css";


export const metadata: Metadata = {
  title: {
    template: '%s | Nicklaus Vega',
    default: 'Home | Nicklaus Vega', // a default is required when creating a template
  },
  description: "I’m Nicklaus Vega, an aspiring entrepreneur and computer science student with over 5 years of experience in the tech world. With a passion for machine learning, frontend/backend development, and graphic design, I’m committed to learning, growing, and applying my skills to impactful projects.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${GeistSans.className} dark text-white`}>{children}</body>
    </html>
  );
}
