import React from "react";
import { Job, CompanyWithJobs } from "@/types";
import Modal from "@/components/Modal/Modal";
import Button from "@/design/Button/Button";

const ListItem = ({
  children,
  company,
  job,
}: {
  children: React.ReactNode;
  company: CompanyWithJobs;
  job: Job;
}) => {
  return (
    <>
      <p className="text-black font-bold truncate hover:overflow-visible hover:whitespace-normal hover:h-auto">{children}</p>
      <div className="gap-2 flex">
         <Modal company={company} job={job}>
          INFO
        </Modal>
        <Button asLink href={job.applicationLinks}>APPLY</Button>
       
      </div>
    </>
  );
};
export default ListItem;
