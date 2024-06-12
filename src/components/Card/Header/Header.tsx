import React from "react";

const Header = ({ children }: { children: React.ReactNode }) => {
  return <div className="text-4xl font-bold text-center ">{children}</div>;
};

export default Header;
