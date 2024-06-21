// "use client";
import React from "react";
import { _allJobsByCompanies } from "../../data/index";
import Grid from "../../components/Grid/Grid";
import Card from "../../components/Card/Card";

export default async function Page() {
  const allJobs = await _allJobsByCompanies();

  // const allJobsMapped = allJobs.map((j) => {
  //   return {

  //   }})

  return (
    <div>
      {allJobs.length > 0 ? (
        allJobs.map((j, i) => (
          //  <Grid key={i}>
          //   <Card
          //     header={j.title}
          //     description={j.subtitle}
          //     listItems={j.Jobs.map((job) => job.jobTitle)}
          //   />
          //   </Grid>
          <div>{JSON.stringify(j)}</div>
        ))
      ) : (
        <div>No jobs available</div>
      )}
    </div>
  );
}
