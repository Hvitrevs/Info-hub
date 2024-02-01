import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import StarsCanvas from "@/components/main/Stars";
import Hero from "@/components/main/Hero";
import Navbar from "@/components/main/Navbar";

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
      <body className={`${inter.className} bg-[#030213] overflow-y-scroll-hidden overflow-x-hidden select-none  mx-auto tracking-[.12em]`}>
        <StarsCanvas />
        <Hero />
        <Navbar />
        {children}
      </body>
    </html>
  );
}
