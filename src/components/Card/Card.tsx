import React from "react";
import Description from "./Description/Description";
import Header from "./Header/Header";
import List from "./List/List";
import ListItem from "./List/ListItem";

type CardProps = {
  header: string;
  description: string;
  listItems: Array<string>;
};

const Card = ({ header, description, listItems }: CardProps) => {
  return (
    <div className="bg-zinc-100 gap-4 py-3 px-2 w-auto break-inside-avoid">
      <Header>{header}</Header>
      <Description>{description}</Description>
      {listItems.map((item) => (
        <List>
          <ListItem>{item}</ListItem>
        </List>
      ))}
    </div>
  );
};
export default Card;
