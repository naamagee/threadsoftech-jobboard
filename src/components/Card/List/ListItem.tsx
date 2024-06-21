import React from "react";
import { Job, CompanyWithJobs } from "@/types";
import Modal from "@/components/Modal/Modal";

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
      <p className="text-black font-bold">{children}</p>
      <div className="gap-2 flex">
        <Modal company={company} job={job}>
          APPLY
        </Modal>
      </div>
    </>
  );
};
export default ListItem;
