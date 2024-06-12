import React from "react";

const Grid = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="columns-3 space-y-4 gap-4">
      {children}
    </div>
  );
};
export default Grid