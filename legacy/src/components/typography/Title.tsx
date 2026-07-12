import React from "react";

const Title = ({ children }: { children: any }) => {
  return <h2 className="my-5 border-b-2 py-3 text-primary-500 font-extrabold text-xl text-center">{children}</h2>;
};

export default Title;
