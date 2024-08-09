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
  Textarea,
} from "@headlessui/react";
import Button from "../../design/Button/Button";
import { useState, useRef } from "react";
import { Job, CompanyWithJobs } from "@/types";
import Markdown from "react-markdown";
import LinkButton from "@/design/Button/LinkButton";
import { ref, uploadBytes, getStorage } from "firebase/storage";
import { collection, doc, setDoc } from "firebase/firestore";
import {
  APPLICATIONS_COLLECTION_NAME,
  STORAGE_BUCKET_APPS_DIR,
} from "../../constants";
import { db } from "../../firebase";
import AlertModal from "./AlertModal";

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
  const [openAlert, setOpenAlert] = useState(false);
  const initialFormState = {
    resumeName: "",
    name: "",
    email: "",
    linkedin: "",
    number: "",
    instagram: "",
    background: "",
    interest: "",
    portfolio: "",
  };
  const [formData, setFormData] = useState(initialFormState);
  const [resumeData, setResumeData] = useState(null);
  const formRef = useRef<HTMLFormElement>(null);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };
  const handleFileChange = (e) => {
    setResumeData(e.target.files[0]);
    setFormData({
      ...formData,
      resumeName: e.target.files[0].name,
    });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();

    const form = formRef.current;
    // Check form validity
    if (form && !form.checkValidity()) {
      // Report validity to show native browser validation messages
      form.reportValidity();

      // Find the first invalid field
      const firstInvalidElement = form.querySelector(":invalid");

      // Scroll to the first invalid field
      if (firstInvalidElement) {
        firstInvalidElement.scrollIntoView({
          behavior: "smooth",
          block: "center",
        });
        firstInvalidElement.focus(); // Focus on the invalid field
      }

      return;
    }
    const storage = getStorage();
    const applicationRef = collection(db, APPLICATIONS_COLLECTION_NAME);

    try {
      // Upload file
      if (resumeData) {
        const storageRef = ref(
          storage,
          `${STORAGE_BUCKET_APPS_DIR}${formData.resumeName}`
        );
        await uploadBytes(storageRef, resumeData);
        await setDoc(doc(applicationRef), {
          ...formData,
          company: company?.title,
          job: job?.jobTitle,
        });
      }
    } catch (error) {
      console.error("Error uploading file:", error);
      return;
    } finally {
      setIsOpen(false);
      setOpenAlert(true);
      setFormData(initialFormState);
    }
  };

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
                <form
                  ref={formRef}
                  onSubmit={handleSubmit}
                  className="space-y-8"
                >
                  <Field>
                    <div className="col-span-full">
                      <Label htmlFor="resume">Resume</Label>
                      <Label className="text-red-500 px-1">*</Label>

                      <div className="mt-2 flex justify-center rounded-lg border border-gray-900/25 px-6 py-10 bg-blue-100 hover:bg-blue-50 border-dashed border-blue-300">
                        <div className="text-center">
                          <div className="mt-4 flex text-sm leading-6 text-gray-600">
                            <label
                              htmlFor="resume"
                              className="relative cursor-pointer rounded-md  font-semibold text-black focus-within:outline-none focus-within:ring-2 focus-within:ring-indigo-600 focus-within:ring-offset-2 hover:text-blue-500"
                            >
                              <span>Upload a file</span>
                              <Input
                                id="resume"
                                name="resume"
                                type="file"
                                className="sr-only"
                                accept=".pdf,.doc,.docx,.rtf,.txt"
                                onChange={handleFileChange}
                                required
                              />
                            </label>
                            <p className="pl-1">or drag and drop</p>
                          </div>
                          <p className="text-xs leading-5 text-gray-600">
                            PDF, DOCX, DOC, up to 5MB
                          </p>
                        </div>
                      </div>
                    </div>
                  </Field>
                  <Field>
                    <Label>Name</Label>
                    <Label className="text-red-500 px-1">*</Label>

                    <Input
                      name="name"
                      id="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      type="text"
                      placeholder="Your name here"
                      className="block w-full rounded-md border-0 py-1.5 pl-4 shadow-sm ring-1 ring-inset ring-slate-300 placeholder:text-gray-400 focus:ring-1 focus:ring-inset focus:ring-blue-700 sm:text-sm sm:leading-6 mt-2"
                      required
                    />
                  </Field>
                  <Field>
                    <Label>Email</Label>
                    <Label className="text-red-500 px-1">*</Label>

                    <Input
                      name="email"
                      id="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      type="text"
                      placeholder="Your email here"
                      className="block w-full rounded-md border-0 py-1.5 pl-4 shadow-sm ring-1 ring-inset ring-slate-300 placeholder:text-gray-400 focus:ring-1 focus:ring-inset focus:ring-blue-700 sm:text-sm sm:leading-6 mt-2"
                      required
                    />
                  </Field>
                  <Field>
                    <Label>LinkedIn</Label>
                    <Label className="text-red-500 px-1">*</Label>

                    <Input
                      name="linkedin"
                      id="linkedin"
                      value={formData.linkedin}
                      onChange={handleInputChange}
                      type="text"
                      placeholder="https://linkedin.com/in/"
                      className="block w-full rounded-md border-0 py-1.5 pl-4 shadow-sm ring-1 ring-inset ring-slate-300 placeholder:text-gray-400 focus:ring-1 focus:ring-inset focus:ring-blue-700 sm:text-sm sm:leading-6 mt-2"
                      required
                    />
                  </Field>
                  <Field>
                    <Label>Phone Number</Label>
                    <Label className="text-red-500 px-1">*</Label>

                    <Input
                      name="number"
                      id="number"
                      value={formData.number}
                      onChange={handleInputChange}
                      type="text"
                      placeholder="111-111-1111"
                      className="block w-full rounded-md border-0 py-1.5 pl-4 shadow-sm ring-1 ring-inset ring-slate-300 placeholder:text-gray-400 focus:ring-1 focus:ring-inset focus:ring-blue-700 sm:text-sm sm:leading-6 mt-2"
                      required
                    />
                  </Field>
                  <Field>
                    <Label>Instagram</Label>
                    <Label className="text-red-500 px-1">*</Label>
                    <Input
                      name="instagram"
                      id="instagram"
                      value={formData.instagram}
                      onChange={handleInputChange}
                      type="text"
                      placeholder="@"
                      className="block w-full rounded-md border-0 py-1.5 pl-4 shadow-sm ring-1 ring-inset ring-slate-300 placeholder:text-gray-400 focus:ring-1 focus:ring-inset focus:ring-blue-700 sm:text-sm sm:leading-6 mt-2"
                      required
                    />
                  </Field>
                  <Field>
                    <Label>
                      What is your background in fashion and/or technology?
                    </Label>
                    <Textarea
                      name="background"
                      id="background"
                      value={formData.background}
                      onChange={handleInputChange}
                      placeholder="Your answer here"
                      className="block w-full rounded-md border-0 py-1.5 pl-4 shadow-sm ring-1 ring-inset ring-slate-300 placeholder:text-gray-400 focus:ring-1 focus:ring-inset focus:ring-blue-700 sm:text-sm sm:leading-6 mt-2"
                      rows={3}
                    />
                  </Field>
                  <Field>
                    <Label>Why are you interested in this role?</Label>
                    <Textarea
                      name="interest"
                      id="interest"
                      value={formData.interest}
                      onChange={handleInputChange}
                      placeholder="Your answer here"
                      className="block w-full rounded-md border-0 py-1.5 pl-4 shadow-sm ring-1 ring-inset ring-slate-300 placeholder:text-gray-400 focus:ring-1 focus:ring-inset focus:ring-blue-700 sm:text-sm sm:leading-6 mt-2"
                      rows={3}
                    />
                  </Field>
                  <Field>
                    <Label>
                      Portfolio/CV/Relevant work links (required for Graphic
                      Designer and Content Creator position)
                    </Label>
                    <Input
                      name="portfolio"
                      id="portfolio"
                      value={formData.portfolio}
                      onChange={handleInputChange}
                      type="text"
                      className="block w-full rounded-md border-0 py-1.5 pl-4 shadow-sm ring-1 ring-inset ring-slate-300 placeholder:text-gray-400 focus:ring-1 focus:ring-inset focus:ring-blue-700 sm:text-sm sm:leading-6 mt-2"
                    />
                  </Field>
                  <Button type="submit">SUBMIT</Button>
                </form>
              )}

              {!job.embedApplication && (
                <LinkButton href={job.applicationLinks}>APPLY</LinkButton>
              )}
            </DialogPanel>
          </div>
        </div>
      </Dialog>
      <AlertModal open={openAlert} close={() => setOpenAlert(false)} />
    </>
  );
}
export default Modal;
