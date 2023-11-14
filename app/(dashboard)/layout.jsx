import "../globals.css";
import { ToasterProvider } from "@/providers/toast-providers";
import { NextAuthProvider } from "../Providers";
import TopBar from "@/components/TopBar";
import Sidebar from "@/components/Sidebar";

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
          <div className="flex bg-[#f8f9fa]">
            <div className="sidebar p-5 min-h-screen ">
              <Sidebar />
            </div>
            <div className="content p-5">
              <TopBar />
              {children}
            </div>
          </div>
        </NextAuthProvider>
      </body>
    </html>
  );
}
