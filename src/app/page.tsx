import React from "react";
import Grid from "../components/Grid/Grid";
import Card from "../components/Card/Card";
import Modal from "../components/Modal/Modal";
import Header from "../components/Header/Header";
import Filter from "../components/Filter/Filter";
export default function Home() {
  return (
    <main>
      <div className="bg-sky-100 w-full h-auto p-4">
        <Header />
        <Filter />
      </div>
      {/* <div className="px-8 pt-4">
        <p className="font-medium text-4xl">OPEN JOBS for you</p>
        <Modal/>
      </div> */}
      <Grid>
        <Card
          header="Threads of Tech"
          description="An events initiative for fashion creatives and technologists"
          listItems={[
            "Head of Product",
            "Head of Engineering",
            "Backend Intern",
            "Software Engineering Intern",
          ]}
        />
        <Card
          header="Threads of Tech"
          description="An events initiative for fashion creatives and technologists"
          listItems={["Backend Intern", "Software Engineering Intern"]}
        />
        <Card
          header="Threads of Tech"
          description="An events initiative for fashion creatives and technologists"
          listItems={["Head of Product"]}
        />
        <Card
          header="Threads of Tech"
          description="An events initiative for fashion creatives and technologists"
          listItems={[
            "Head of Product",
            "Head of Engineering",
            "Backend Intern",
          ]}
        />
      </Grid>
    </main>
  );
}
