import type { Metadata } from "next";
import { Orbitron } from "next/font/google";
import "./globals.css";

const orbitron = Orbitron({
  variable: "--font-orbitron",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "SamosaTech - Robotics Competition",
  description: "Join SamosaTech's off-season robotics competition - where innovation meets engineering excellence",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${orbitron.variable} font-orbitron antialiased bg-black text-white`}
      >
        {children}
      </body>
    </html>
  );
}
