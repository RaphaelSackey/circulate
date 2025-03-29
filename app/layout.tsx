import type { Metadata } from "next";
import { Imprima, Patrick_Hand } from "next/font/google";
import "./globals.css";
import Navbar from "@/componets/ui/navbar";

const patrick = Patrick_Hand({
  weight: ['400']
});

export const metadata: Metadata = {
  title: "Circulate",
  description: "An easy way to swap and borrow items im your neighborhood",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${patrick.className}`}
      >
        <Navbar />
        {children}
      </body>
    </html>
  );
}
