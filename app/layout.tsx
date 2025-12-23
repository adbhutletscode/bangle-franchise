import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Bangle Store Franchise - Start Your Own Ethnic Retail Business",
  description:
    "Join our proven bangle franchise model with low investment, high demand, and complete business support. Perfect for entrepreneurs in India.",
  keywords:
    "bangle franchise, ethnic business franchise, retail franchise India, low investment business, bangle store",
  viewport: "width=device-width, initial-scale=1",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="font-sans text-gray-800 bg-white">
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
