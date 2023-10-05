import "../globals.css";
import { ToasterProvider } from "@/providers/toast-providers";
import { NextAuthProvider } from "../Providers";

export const metadata = {
  title: "Portfolio | Authentication",
  description: "Portfolio Application for Every Developer in Next js 13",
};

export default function AuthLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <NextAuthProvider>
          <ToasterProvider />

          <div className="w-full min-h-screen flex items-center justify-center bg-[#edf2f8]">
            {children}
          </div>
        </NextAuthProvider>
      </body>
    </html>
  );
}
