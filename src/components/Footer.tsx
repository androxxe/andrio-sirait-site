import React from "react";

const Footer = (): JSX.Element => {
  return (
    <footer className="text-center items-center justify-center my-3">
      <div className="text-sm items-center justify-center text-white">
        Andrio © {new Date().getFullYear()} crafted with ❤
      </div>
    </footer>
  );
};

export default Footer;
