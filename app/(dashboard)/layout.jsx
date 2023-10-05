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
          <TopBar />
          <main className="flex flex-row ">
            <Sidebar />
            <section className="flex min-h-screen flex-1 flex-col items-center  border-l px-6 pb-10 pt-28 max-md:pb-32 sm:px-5">
              <div className="w-full max-w-5xl">{children}</div>
            </section>
          </main>
        </NextAuthProvider>
      </body>
    </html>
  );
}
