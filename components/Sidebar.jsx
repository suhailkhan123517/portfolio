"use client";
import { sidebarLinks } from "@/utils/data";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";

const Sidebar = () => {
  const router = useRouter();
  const pathname = usePathname();
  return (
    <>
      <section className="sticky left-0 top-0 z-20 flex h-screen  flex-col bg-[#edf2f8] justify-between overflow-auto   pb-5 pt-28 max-md:hidden">
        <div className="flex w-full flex-1 flex-col gap-6 px-6">
          {sidebarLinks.map((link) => {
            const isActive = pathname === link.url;

            return (
              <Link
                href={link.url}
                key={link.id}
                className={`px-4 py-2 transition-all duration-200 rounded-lg  hover:bg-white hover:shadow-xl ${
                  isActive && "bg-white shadow-xl"
                }`}
              >
                <p className="text-light-1 ">{link.label}</p>
              </Link>
            );
          })}
        </div>
      </section>
    </>
  );
};

export default Sidebar;
