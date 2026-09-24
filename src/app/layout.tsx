import type { Metadata } from "next";
import { Inter, Playfair_Display, Nothing_You_Could_Do } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter", weight: ['300', '400', '500', '600'] });
const playfair = Playfair_Display({ subsets: ["latin"], variable: "--font-playfair", style: ['normal', 'italic'] });
const nothingYouCouldDo = Nothing_You_Could_Do({ weight: "400", subsets: ["latin"], variable: "--font-accent" });

export const metadata: Metadata = {
  title: "Parka Bakehouse",
  description: "~ roll in dough with us ~",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${playfair.variable} ${nothingYouCouldDo.variable} font-sans bg-parka-cream text-parka-text flex flex-col min-h-screen`}>
        <Navbar />
        <main className="flex-grow">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
