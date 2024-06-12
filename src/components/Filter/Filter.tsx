import React from "react";

const Filter = ({ children }: { children: React.ReactNode }) => {
  return <div className="flex justify-center gap-4">{children}</div>;
};

export default Filter;
