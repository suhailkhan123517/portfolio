"use client";
import Image from "next/image";
import {
  MdDashboard,
  MdSupervisedUserCircle,
  MdShoppingBag,
  MdAttachMoney,
  MdWork,
  MdAnalytics,
  MdPeople,
  MdOutlineSettings,
  MdHelpCenter,
  MdLogout,
} from "react-icons/md";
import MenuLink from "./MenuLink";

const menuItems = [
  {
    title: "Pages",
    list: [
      {
        title: "Dashboard",
        path: "/dashboard",
        icon: <MdDashboard size={30} />,
      },
      {
        title: "Users",
        path: "/dashboard/users",
        icon: <MdSupervisedUserCircle size={30} />,
      },
      {
        title: "Products",
        path: "/dashboard/products",
        icon: <MdShoppingBag size={30} />,
      },
      {
        title: "Transactions",
        path: "/dashboard/transactions",
        icon: <MdAttachMoney size={30} />,
      },
    ],
  },
  {
    title: "Analytics",
    list: [
      {
        title: "Revenue",
        path: "/dashboard/revenue",
        icon: <MdWork size={30} />,
      },
      {
        title: "Reports",
        path: "/dashboard/reports",
        icon: <MdAnalytics size={30} />,
      },
      {
        title: "Teams",
        path: "/dashboard/teams",
        icon: <MdPeople size={30} />,
      },
    ],
  },
  {
    title: "User",
    list: [
      {
        title: "Settings",
        path: "/dashboard/settings",
        icon: <MdOutlineSettings size={30} />,
      },
      {
        title: "Help",
        path: "/dashboard/help",
        icon: <MdHelpCenter size={30} />,
      },
    ],
  },
];

const Sidebar = () => {
  return (
    <>
      <div className="sticky top-10">
        <div className="flex items-center gap-5 mb-5">
          <Image
            className="rounded-full object-cover"
            src={"/noavatar.png"}
            alt=""
            width="50"
            height="50"
          />
          <div className="flex flex-col">
            <span className="font-medium">Jhone</span>
            <span className="text-xs">Administrator</span>
          </div>
        </div>
        <ul className="list-none">
          {menuItems.map((cat) => (
            <li key={cat.title}>
              <span className="font-bold text-xs my-2">{cat.title}</span>
              {cat.list.map((item) => (
                <MenuLink item={item} key={item.title} />
              ))}
            </li>
          ))}
        </ul>
        <form>
          <button className="p-5 my-1 flex items-center gap-2 cursor-pointer rounded-lg bg-none border-none w-full">
            <MdLogout />
            Logout
          </button>
        </form>
      </div>
    </>
  );
};

export default Sidebar;
