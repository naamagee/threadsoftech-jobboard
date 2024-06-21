import { libreCaslonDisplay } from "@/app/layout";
import React from "react";

const mockCategories = [
  { name: "Engineering", count: 12 },
  { name: "Design", count: 5 },
  { name: "Product Management", count: 4 },
  { name: "Marketing", count: 33 },
  { name: "Operations", count: 2 },
  { name: "Sales", count: 3 },
  { name: "Data", count: 22 },
];

const Filter = () => {
  return (
    <div className={` ${libreCaslonDisplay.className} flex gap-4 p-8 justify-center h-full items-center flex-wrap max-w-xl m-auto`}>
    {mockCategories.map((category) => (
      <div key={category.name}>
        <span className="font-medium text-xl md:text-3xl hover:underline">{category.name}</span>
        <span className="align-super text-md md:text-xl">{category.count}</span>
    </div>
  ))}
  </div>
  )
};

export default Filter;
