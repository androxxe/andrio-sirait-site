import React from "react";
import Link from "next/link";
import { TMenuList } from "@/types";

const menuList: TMenuList[] = [
  {
    name: "Home",
    route: "/",
  },
  {
    name: "Profile",
    route: "/profile",
  },
  {
    name: "Resume",
    route: "/resume",
  },
  {
    name: "Portfolio",
    route: "/portfolio",
  },
  {
    name: "Contact",
    route: "/contact",
  },
];

type ActiveType = (typeof menuList)[number]["route"];

const Menu = ({ active }: { active: ActiveType }) => {
  return (
    <div className="flex lg:justify-center space-x-2 p-5 bg-gray-100 shadow-sm overflow-x-auto rounded-xl">
      {menuList.map((item, index) => (
        <Link key={`menu_${index}`} href={item.route}>
          {active === item.route ? (
            <div
              data-umami-event={`[BUTTON] ${item.name}`}
              className="cursor-pointer px-3 py-2 flex justify-center items-center gap-x-3 text-slate-700 text-sm lg:text-base hover:text-slate-900 border-b-2 border-b-primary-500"
            >
              <div className="font-bold text-primary-500">{item.name}</div>
            </div>
          ) : (
            <div className="cursor-pointer px-3 py-2 flex justify-center items-center gap-x-3 text-slate-700 text-sm lg:text-base transition-transform hover:text-slate-900 hover:border-b-2 border-b-primary-500 duration-300">
              <div className="font-medium">{item.name}</div>
            </div>
          )}
        </Link>
      ))}
    </div>
  );
};

export default Menu;
