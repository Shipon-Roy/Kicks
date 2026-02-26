import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navber from "@/components/layout/Navber";
import Footer from "@/components/layout/Footer";
import { CartProvider } from "@/context/CartContext";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Kicks",
  description:
    "kicks is a sneaker store built with Next.js 13, Tailwind CSS, and TypeScript. It features a clean and modern design, responsive layout, and a user-friendly interface for browsing and purchasing sneakers.",
  icons: "/vercel.png",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-[#E7E7E3]`}
      >
        <CartProvider>
          <Navber />
          {children}
          <Footer />
        </CartProvider>
      </body>
    </html>
  );
}
