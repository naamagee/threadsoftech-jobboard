"use client";
import React from "react";
import {
  Description,
  Dialog,
  DialogPanel,
  DialogTitle,
  Input,
  Label,
  Field,
} from "@headlessui/react";
import Button from "../../design/Button/Button";
import { useState } from "react";
import { Job, CompanyWithJobs } from "@/types";
import Markdown from "react-markdown";

function Modal({
  children,
  company,
  job,
}: {
  children: React.ReactNode;
  company?: CompanyWithJobs;
  job: Job;
}) {
  let [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <Button secondary onClick={() => setIsOpen(true)}>
        {children}
      </Button>
      <Dialog
        open={isOpen}
        onClose={() => setIsOpen(false)}
        className="relative z-50"
      >
        <div className="fixed inset-0 bg-black/60" aria-hidden="true" />

        <div className="fixed inset-0 w-screen overflow-y-auto pt-28">
          <div className="flex justify-center">
            <div className=" mt-0 bg-white w-fit p-4 -m-4 rounded font-bold text-5xl">
              <p className="-mb-6 relative">{company?.title}</p>
            </div>
          </div>
          <div className="flex items-center justify-center ">
            <DialogPanel className="min-w-full space-y-8 rounded-xl bg-white p-16 lg:p-24">
              <button
                onClick={() => setIsOpen(false)}
                className="self-end bg-slate-200 rounded-full p-2 w-11  font-bold flex justify-center text-xl float-end -mt-8 -mr-8 lg:-mt-16 lg:-mr-16"
              >
                <p className="text-slate-400">X</p>
              </button>

              <Description>{company?.subtitle}</Description>
              <Description>
                <DialogTitle className="font-bold">{job?.jobTitle}</DialogTitle>
                <span>
                  {job.tags.replace(/,/g, ", ").toUpperCase()} | {job.jobType} |{" "}
                  {job?.salary} | {job.locationType} | {company?.hqLocation} |{" "}
                  {job?.postedDate.split(" ").slice(0, 4).join(" ")}
                </span>
                <span></span>
              </Description>
              <Description>
                <Markdown className="prose">{job?.postContent}</Markdown>
              </Description>
              {job.embedApplication && (
              <>
                <Field>
                  <Label className="font-medium">Resume</Label>
                  <br />
                  <Input
                    name="full_name"
                    type="file"
                    className="w-fit file:py-16 file:px-20
      file:rounded-md file:border-2
      file:text-sm file:font-semibold
      file:bg-blue-100
      hover:file:bg-blue-50 file:border-dashed file:border-blue-300"
                  />
                </Field>
                <Field>
                  <Label>Name</Label>
                  <Input
                    name="full_name"
                    type="text"
                    className="w-full border rounded"
                  />
                </Field>
                <Field>
                  <Label>Email</Label>
                  <Input
                    name="email"
                    type="text"
                    className="w-full border rounded"
                  />
                </Field>
                <Field>
                  <Label>LinkedIn</Label>
                  <Input
                    name="linkedin"
                    type="text"
                    className="w-full border rounded"
                    required
                  />
                </Field>
                <fieldset>
                  <legend className="text-sm font-semibold leading-6 text-gray-900">
                    By Email
                  </legend>
                  <div className="mt-6 space-y-6">
                    <div className="relative flex gap-x-3">
                      <div className="flex h-6 items-center">
                        <Input
                          id="comments"
                          name="comments"
                          type="checkbox"
                          className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
                        />
                      </div>
                      <div className="text-sm leading-6">
                        <label
                          htmlFor="comments"
                          className="font-medium text-gray-900"
                        >
                          Comments
                        </label>
                        <p className="text-gray-500">
                          Get notified when someones posts a comment on a
                          posting.
                        </p>
                      </div>
                    </div>
                    <div className="relative flex gap-x-3">
                      <div className="flex h-6 items-center">
                        <input
                          id="candidates"
                          name="candidates"
                          type="checkbox"
                          className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
                        />
                      </div>
                      <div className="text-sm leading-6">
                        <label
                          htmlFor="candidates"
                          className="font-medium text-gray-900"
                        >
                          Candidates
                        </label>
                        <p className="text-gray-500">
                          Get notified when a candidate applies for a job.
                        </p>
                      </div>
                    </div>
                    <div className="relative flex gap-x-3">
                      <div className="flex h-6 items-center">
                        <input
                          id="offers"
                          name="offers"
                          type="checkbox"
                          className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
                        />
                      </div>
                      <div className="text-sm leading-6">
                        <label
                          htmlFor="offers"
                          className="font-medium text-gray-900"
                        >
                          Offers
                        </label>
                        <p className="text-gray-500">
                          Get notified when a candidate accepts or rejects an
                          offer.
                        </p>
                      </div>
                    </div>
                  </div>
                </fieldset>
                {job.embedApplication ? (
                  <Button onSubmit={handleSubmit}>APPLY</Button>
                ) : (
                  <Button asLink href={job.applicationLinks}>
                    APPLY
                  </Button>
                )}
              </>
              )}
            </DialogPanel>
          </div>
        </div>
      </Dialog>
    </>
  );
}
export default Modal;
