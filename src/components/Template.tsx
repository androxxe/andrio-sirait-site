import React from "react";
import Menu from "./Menu";

type TemplateType = {
  children: any;
  menu: string;
};

const Template = ({ children, menu }: TemplateType) => {
  return (
    <div className="ml-auto w-full h-full relative flex flex-col">
      <Menu active={menu} />
      <div className="px-7 md:px-14 py-5 flex-1 overflow-x-hidden overflow-y-auto relative">
        {children}
      </div>
    </div>
  );
};

export default Template;
