import React from "react";
import Grid from "../components/Grid/Grid";
import Card from "../components/Card/Card";
import Header from "../components/Header/Header";
import Filter from "../components/Filter/Filter";
import Footer from "@/components/Footer/Footer";
import { _allJobsByCompanies } from "../data/index";
import { CompanyWithJobs } from "@/types";
import { Tab } from "../components/Header/Tab";

export default async function Home() {

  const allJobs: CompanyWithJobs[] =
    (await _allJobsByCompanies()) as CompanyWithJobs[];
  const filteredJobs = allJobs
    .filter(company => company.title !== "Threads of Tech")
    .map(company => ({
      ...company,
      Jobs: company.Jobs.filter(job => job.isActive !== false),
      mostRecentJobDate: Math.max(...company.Jobs.filter(job => job.isActive !== false).map(job => new Date(job.postedDate).getTime()))
    }))
    .filter(company => company.Jobs.length > 0)
    .sort((a, b) => b.mostRecentJobDate - a.mostRecentJobDate);

  return (
    <>
      <main className="relative h-screen">
        <div className="bg-sky-100 w-full h-auto p-4">
          <Header />
          {/* <Filter /> */}
        </div>
        <Tab/>
        <Grid>
          {filteredJobs.map((j, i) => (
            // <>
              <Card
                key={i}
                header={j.title}
                description={j.subtitle}
                logo={j.companyLogoUrl}
                listItems={j}
              />
            // </>
          ))}
        </Grid>
        <Footer />
      </main>
    </>
  );
}
