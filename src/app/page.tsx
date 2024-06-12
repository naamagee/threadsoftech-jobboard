import React from "react";
import Grid from "../components/Grid/Grid";
import Card from "../components/Card/Card";

export default function Home() {
  return (
    <main>
      <div className="bg-sky-200 w-full h-auto p-4">
        <div className="flex w-full gap-2">
          <span className="font-black text-6xl -mb-2">THREADS OF TECH</span>
          <div className="flex justify-between gap-4 items-center border border-b-1 border-r-0 border-l-0 border-t-0 border-black">
            <span className="text-4xl self-end">JOB BOARD</span>
            <span className="self-end">
              Bringing Top Tech Talent to Fashion
            </span>
          </div>
        </div>
        <div className="flex gap-4 p-8 justify-center h-full items-center flex-wrap max-w-xl m-auto">
          <div>
            <span className="font-medium text-3xl">Engineering</span>
            <span className="align-super text-xl">12</span>
          </div>
          <div>
            <span className="font-medium text-3xl">Design</span>
            <span className="align-super text-xl">5</span>
          </div>
          <div>
            <span className="font-medium text-3xl">Product Management</span>
            <span className="align-super text-xl">4</span>
          </div>
          <div>
            <span className="font-medium text-3xl">Marketing</span>
            <span className="align-super text-xl">33</span>
          </div>
          <div>
            <span className="font-medium text-3xl">Operations</span>
            <span className="align-super text-xl">2</span>
          </div>
          <div>
            <span className="font-medium text-3xl">Sales</span>
            <span className="align-super text-xl">3</span>
          </div>
          <div>
            <span className="font-medium text-3xl">Data</span>
            <span className="align-super text-xl">22</span>
          </div>
        </div>
      </div>
      <div className="px-8 pt-4">
        <p className="font-medium text-4xl">OPEN JOBS for you</p>
      </div>
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
