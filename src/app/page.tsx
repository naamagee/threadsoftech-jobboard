import React from "react";
import Grid from "../components/Grid/Grid";
import Card from "../components/Card/Card";
import Header from "../components/Header/Header";
import Filter from "../components/Filter/Filter";
import { _allJobsByCompanies } from "../data/index";
import { CompanyWithJobs } from "@/types";

export default async function Home() {
  const allJobs: CompanyWithJobs[] =
    (await _allJobsByCompanies()) as CompanyWithJobs[];

  return (
    <main>
      <div className="bg-sky-100 w-full h-auto p-4">
        <Header />
        <Filter />
      </div>
      <div className="px-8 pt-4">
        <p className="font-medium text-4xl">OPEN JOBS for you</p>
      </div>
      {allJobs.map((j, i) => (
        <Grid key={i}>
          <Card
            key={i}
            header={j.title}
            description={j.subtitle}
            listItems={j}
          />
        </Grid>
      ))}
    </main>
  );
}
