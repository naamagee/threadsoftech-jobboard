import React from "react";
import ListItem from "./ListItem";

const List = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="border border-gray-400 rounded-xl py-1.5 px-6 justify-between gap-4 items-center align-middle flex">
      {children}
    </div>
  );
};

export default List;
