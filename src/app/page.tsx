import React from "react";
import Grid from "../components/Grid/Grid";
import Card from "../components/Card/Card";
import Header from "../components/Header/Header";
import Filter from "../components/Filter/Filter";
import Footer from "@/components/Footer/Footer";
import { _allJobsByCompanies } from "../data/index";
import { CompanyWithJobs } from "@/types";

export default async function Home() {

  const allJobs: CompanyWithJobs[] =
    (await _allJobsByCompanies()) as CompanyWithJobs[];

  return (
    <>
      <main className="relative h-screen">
        <div className="bg-sky-100 w-full h-auto p-4">
          <Header />
          {/* <Filter /> */}
        </div>
        <Grid>
          {allJobs.map((j, i) => (
            <>
              <Card
                key={i}
                header={j.title}
                description={j.subtitle}
                logo={j.companyLogoUrl}
                listItems={j}
              />
            </>
          ))}
        </Grid>
        <Footer />
      </main>
    </>
  );
}
