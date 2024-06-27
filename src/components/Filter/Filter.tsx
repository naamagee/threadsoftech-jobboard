import { libreCaslonDisplay } from "@/app/fonts/index";
import React from "react";
import { _fetchJobs } from "@/data/index";
import { Job } from "@/types";
import { countTags } from "@/utils/index";

const Filter = async () => {
  const allJobs: Job[] = (await _fetchJobs()) as Job[];

  const tagsCount = countTags(allJobs);

  return (
    <div
      className={` ${libreCaslonDisplay.className} flex gap-4 p-8 justify-center h-full items-center flex-wrap max-w-xl m-auto`}
    >
      {tagsCount.map((category) => (
        <div key={category.name}>
          <span className="font-medium text-xl md:text-3xl hover:underline">
            {category.name}
          </span>
          <span className="align-super text-md md:text-xl">
            {category.count}
          </span>
        </div>
      ))}
    </div>
  );
};

export default Filter;
