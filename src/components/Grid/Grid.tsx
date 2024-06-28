import React from "react";

const Grid = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="container mx-auto columns-1 md:columns-2 lg:columns-3  space-y-4 gap-4 p-4 ">
      {children}
    </div>
  );
};
export default Grid;
