import { Job } from "@/types";

type TagCount = {
  [key: string]: number;
};
export function countTags(jobs: Job[]) {
  const tagCounts: TagCount = {};

  // Iterate through each job
  jobs.forEach((job) => {
    if (job.tags) {
      // Split tags by comma and trim whitespace
      const tags = job.tags.split(",").map((tag) => tag.trim());

      // Increment count for each tag
      tags.forEach((tag) => {
        if (tagCounts[tag]) {
          tagCounts[tag]++;
        } else {
          tagCounts[tag] = 1;
        }
      });
    }
  });

  // Convert the counts object into an array of objects with name and count
  const result = Object.keys(tagCounts).map((tag) => ({
    name: tag,
    count: tagCounts[tag],
  }));

  return result;
}
