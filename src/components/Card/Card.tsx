import React from "react";
import Description from "./Description/Description";
import List from "./List/List";
import ListItem from "./List/ListItem";
import { CompanyWithJobs } from "@/types";

import Image from "next/image";

type CardProps = {
  header: string;
  description: string;
  listItems: CompanyWithJobs;
  logo: string;
};

const Card = ({ header, description, listItems, logo }: CardProps) => {
  return (
    <div className="bg-zinc-100 gap-4 py-3 px-3 break-inside-avoid rounded-md w-auto">
      {/* <Header>{header}</Header> */}
      <div className="flex justify-center items-center gap-4">
        <Image
          src={logo}
          alt="logo"
          width={50}
          height={50}
          className="justify-self-start self"
        />
        <p className="text-4xl font-bold text-center ">{header}</p>
      </div>

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
