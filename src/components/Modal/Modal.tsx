"use client";
import React from "react";
import {
  Description,
  Dialog,
  DialogPanel,
  DialogTitle,
} from "@headlessui/react";
import { useState } from "react";

function Modal() {
  let [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <button onClick={() => setIsOpen(true)}>Open dialog</button>
      <Dialog
        open={isOpen}
        onClose={() => setIsOpen(false)}
        className="relative z-50"
      >
        <div className="fixed inset-0 bg-black/60" aria-hidden="true" />

        <div className="fixed inset-0 w-screen overflow-y-auto pt-28">
          <div className="flex justify-center">
            <div className=" mt-0 bg-white w-fit p-4 -m-4 rounded font-bold text-5xl">
              <p className="-mb-6 relative">THREDX</p>
            </div>
          </div>
          <div className="flex items-center justify-center ">
            <DialogPanel className="max-w-full space-y-8 rounded-xl bg-white p-24">
              <button
                onClick={() => setIsOpen(false)}
                className="self-end bg-slate-200 rounded-full p-2 w-11  font-bold flex justify-center text-xl float-end -mt-16 -mr-16"
              >
                <p className="text-slate-400">X</p>
              </button>

              <Description>
                Rediscover your wardrobe and get dressed with confidence. The
                ThredX app will help to inspire all people to see, feel and
                claim their power.
              </Description>
              <Description>
                <DialogTitle className="font-bold">
                  Senior Content Designer
                </DialogTitle>
                Marketing | Part Time | 90K | Los Angeles, CA | Jun 17, 2024
              </Description>
              <Description className="underline underline-offset-4">
                About
              </Description>
              <Description>
                description description description description description
                description description description description description
                description description description description description
                description description description
              </Description>
              <Description className="underline underline-offset-4">
                Role
              </Description>
              <Description>
                description description description description description
                description description description description description
                description description description description description
                description description description
              </Description>
              <Description className="underline underline-offset-4">
                Who You Are
              </Description>
              <Description>
                description description description description description
                description description description description description
                description description description description description
                description description description
              </Description>
              <Description className="underline underline-offset-4">
                Qualifications
              </Description>
              <Description>
                description description description description description
                description description description description
              </Description>
              <Description className="underline underline-offset-4">
                Apply
              </Description>
            </DialogPanel>
          </div>
        </div>
      </Dialog>
    </>
  );
}
export default Modal;
