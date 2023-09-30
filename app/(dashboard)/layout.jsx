import "../globals.css";
import { ToasterProvider } from "@/providers/toast-providers";
import { NextAuthProvider } from "../Providers";

export const metadata = {
  title: "Portfolio | Dashboard",
  description: "Portfolio Application for Every Developer in Next js 13",
};

export default function dashboardLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <NextAuthProvider>
          <ToasterProvider />
          {children}
        </NextAuthProvider>
      </body>
    </html>
  );
}
