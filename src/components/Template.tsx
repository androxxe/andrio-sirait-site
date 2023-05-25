import React from "react";
import Menu from "./Menu";

type TemplateType = {
  children: any;
  menu: string;
};

const Template = ({ children, menu }: TemplateType) => {
  return (
    <div className="ml-auto w-full h-full relative">
      <Menu active={menu} />
      <div className="px-7 md:px-14 py-5 flex justify-start items-center flex-col h-full overflow-auto relative w-full">
        {children}
      </div>
    </div>
  );
};

export default Template;
