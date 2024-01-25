import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Cool site name",
  description: "SEO PUT HERE",
};

export default function RootLayout({
  
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-[#020014] overflow-y-scroll-hidden overflow-x-hidden select-none max-w-[1555px] max-h-[100px] mx-auto`}>
        {children}
      </body>
    </html>
  );
}
