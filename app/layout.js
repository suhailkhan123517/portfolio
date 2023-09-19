import Navbar from "@/components/Navbar";
import "./globals.css";
import { Inter } from "next/font/google";
import { ToasterProvider } from "@/providers/toast-providers";
import { NextAuthProvider } from "./Providers";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Portfolio | Suhail",
  description: "Portfolio Application for Every Developer in Next js 13",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <NextAuthProvider>
          <ToasterProvider />
          <Navbar />
          {children}
        </NextAuthProvider>
      </body>
    </html>
  );
}
