import Grid from "../components/Grid/Grid";
import Card from "../components/Card/Card";

export default function Home() {
  return (
    <main>
      <Grid>
        <Card
          header="Threads of Tech"
          description="An events initiative for fashion creatives and technologists"
          listItems={[
            "Head of Product",
            "Head of Engineering", 
            "Backend Intern", 
            "Software Engineering Intern"
          ]}
        />
         <Card
          header="Threads of Tech"
          description="An events initiative for fashion creatives and technologists"
          listItems={[
            "Backend Intern", 
            "Software Engineering Intern"
          ]}
        />
         <Card
          header="Threads of Tech"
          description="An events initiative for fashion creatives and technologists"
          listItems={[
            "Head of Product",
          ]}
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