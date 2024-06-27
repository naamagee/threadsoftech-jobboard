import React from "react";
import Grid from "../components/Grid/Grid";
import Card from "../components/Card/Card";
import Header from "../components/Header/Header";
import Filter from "../components/Filter/Filter";
import Footer from "@/components/Footer/Footer";
import { _allJobsByCompanies } from "../data/index";
import { CompanyWithJobs } from "@/types";
import { myFont } from "./fonts";
// import Logo from "@/components/Logo";
import { fetchLogo } from "@/firebase";

export default async function Home() {
  // const Logo = async ({ filename }: { filename: string }) => {
  //   const url = await fetchLogo(filename);
  //   // console.log("urls", url);
  //   return filename !== "" ? <img height={50} src={url} /> : <img />;
  // };
  const allJobs: CompanyWithJobs[] =
    (await _allJobsByCompanies()) as CompanyWithJobs[];

  console.log("allJobs", allJobs);

  return (
    <main className="relative">
      <div className="bg-sky-100 w-full h-auto p-4">
        <Header />
        <Filter />
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
            {/* <Logo filename={j.companyLogoId} /> */}
          </>
        ))}
      </Grid>
      <Footer />
    </main>
  );
}
