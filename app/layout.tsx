import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Mike Oyesola - Portfolio",
  description: "Service Delivery & Cybersecurity Professional exploring Web & App Development",
  openGraph: {
    title: "Mike Oyesola - Portfolio",
    description: "Service Delivery & Cybersecurity Professional exploring Web & App Development",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Mike Oyesola - Portfolio",
    description: "Service Delivery & Cybersecurity Professional exploring Web & App Development",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={inter.className}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
