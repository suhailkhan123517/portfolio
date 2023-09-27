import Navbar from "@/components/Navbar";
import "./globals.css";
import { ToasterProvider } from "@/providers/toast-providers";
import { NextAuthProvider } from "./Providers";

export const metadata = {
  title: "Portfolio | Suhail",
  description: "Portfolio Application for Every Developer in Next js 13",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <NextAuthProvider>
          <ToasterProvider />
          <Navbar />
          {children}
        </NextAuthProvider>
      </body>
    </html>
  );
}
