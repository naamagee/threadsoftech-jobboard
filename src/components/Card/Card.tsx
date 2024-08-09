import React from "react";
import Description from "./Description/Description";
import List from "./List/List";
import ListItem from "./List/ListItem";
import { CompanyWithJobs } from "@/types";
import { myFont } from "@/app/fonts";
import Image from "next/image";

type CardProps = {
  header: string;
  description: string;
  listItems: CompanyWithJobs;
  logo: string;
};

const Card = ({ header, description, listItems, logo }: CardProps) => {
  return (
    <div className="bg-zinc-100 gap-4 p-3 break-inside-avoid rounded-md w-auto">
      {/* <Header>{header}</Header> */}
      <div className="flex justify-center items-center gap-4">
        {header === "Threads of Tech" ? (
          <span className={`${myFont.className} font-bold text-2xl `}>
            {header.toUpperCase()}
          </span>
        ) : (
          <Image
            src={logo}
            alt={header}
            width={100}
            height={100}
            className="justify-self-start self"
          />
        )}
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
