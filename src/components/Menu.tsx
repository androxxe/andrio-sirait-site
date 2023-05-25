import React from "react";
import Link from "next/link";
import {
  FaAddressBook,
  FaBriefcase,
  FaFile,
  FaHome,
  FaUser,
} from "react-icons/fa";

type MenuType = {
  active: string;
};

const menuList = [
  {
    name: "Home",
    route: "/",
    icon: FaHome,
  },
  {
    name: "Profile",
    route: "/profile",
    icon: FaUser,
  },
  {
    name: "Resume",
    route: "/resume",
    icon: FaFile,
  },
  {
    name: "Portfolio",
    route: "/portfolio",
    icon: FaBriefcase,
  },
  {
    name: "Contact",
    route: "/contact",
    icon: FaAddressBook,
  },
];

const Menu: React.FC<MenuType> = ({ active }) => {
  return (
    <div className="flex lg:justify-center space-x-4 p-5 bg-gray-100 shadow-sm overflow-x-auto rounded-xl">
      {menuList.map((item, index) => (
        <Link key={`menu_${index}`} href={item.route}>
          {active == item.route ? (
            <div className="cursor-pointer rounded-lg px-3 py-2 flex justify-center items-center gap-x-3 text-slate-700 text-sm lg:text-base bg-slate-200 hover:bg-slate-200 hover:text-slate-900">
              {/* <FontAwesomeIcon className='text-primary-500 text-xs' icon={item.icon} /> */}
              <div className="font-bold text-primary-500">{item.name}</div>
            </div>
          ) : (
            <div className="cursor-pointer rounded-lg px-3 py-2 flex justify-center items-center gap-x-3 text-slate-700 text-sm lg:text-base hover:bg-slate-200 hover:text-slate-900">
              {/* <FontAwesomeIcon icon={item.icon} className="text-xs" /> */}
              <div className="font-medium">{item.name}</div>
            </div>
          )}
        </Link>
      ))}
    </div>
  );
};

export default Menu;
