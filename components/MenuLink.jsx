"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

const MenuLink = ({ item }) => {
  const pathname = usePathname();
  return (
    <>
      <Link
        href={item.path}
        className={`p-5 flex items-center gap-5 my-1 rounded-lg hover:bg-white  ${
          pathname === item.path &&
          "bg-white text-[#17c1e8] font-semibold shadow-lg"
        } `}
      >
        {item.icon}
        {item.title}
      </Link>
    </>
  );
};

export default MenuLink;
