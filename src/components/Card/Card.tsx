import React from "react";
import Description from "./Description/Description";
import Header from "./Header/Header";
import List from "./List/List";
import ListItem from "./List/ListItem";
import { CompanyWithJobs } from "@/types";

type CardProps = {
  header: string;
  description: string;
  listItems: CompanyWithJobs;
};
const Card = ({ header, description, listItems }: CardProps) => {
  return (
    <div className="bg-zinc-100 gap-4 py-3 px-2 w-auto break-inside-avoid">
      <Header>{header}</Header>
      <Description>{description}</Description>
      {listItems.Jobs.map((item, i) => (
        <List key={i}>
          <ListItem company={listItems} job={item}>
            {item.jobTitle}
          </ListItem>
        </List>
      ))}
    </div>
  );
};
export default Card;
