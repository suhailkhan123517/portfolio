"use client";
import { usePathname, useRouter } from "next/navigation";
import {
  MdNotifications,
  MdOutlineChat,
  MdPublic,
  MdSearch,
} from "react-icons/md";

const TopBar = () => {
  const pathname = usePathname();
  const router = useRouter();

  return (
    <>
      <div className="p-5 rounded-lg bg-white shadow-lg flex items-center justify-between">
        <div className="font-bold capitalize text-2xl">
          {pathname.split("/").pop()}
        </div>
        <div className="flex items-center gap-5">
          <div className="flex items-center gap-5 bg-gray-100 p-2 rounded-lg">
            <MdSearch />
            <input
              type="text"
              placeholder="Search..."
              className="bg-transparent border-none outline-none"
            />
          </div>
          <div className="flex gap-5">
            <MdOutlineChat size={20} />
            <MdNotifications size={20} />
            <MdPublic
              onClick={router.push("/")}
              className="cursor-pointer"
              size={20}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default TopBar;
