"use client";
import React from "react";
import {
  Dialog,
  DialogPanel,
  DialogTitle,
} from "@headlessui/react";
import Button from "@/design/Button/Button";

export default function AlertModal({
  open,
  close,
}: {
  open: boolean;
  close: () => void;
}) {
  return (
    <>
      <Dialog
        open={open}
        as="div"
        className="relative z-10 focus:outline-none"
        onClose={close}
      >
      <div className="fixed inset-0 bg-black/30" aria-hidden="true" />

        <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
          <div className="flex min-h-full items-center justify-center p-4">
            <DialogPanel
              transition
              className="w-full max-w-md rounded-xl bg-white border-2 border-sky-100 p-6 backdrop-blur-2xl duration-300 ease-out data-[closed]:transform-[scale(95%)] data-[closed]:opacity-0 shadow-lg"
            >
              <DialogTitle
                as="h3"
                className="text-base/7 font-medium text-black"
              >
                Application submitted
              </DialogTitle>
              <p className="mt-2 text-sm/6 text-black">
                Your application has been successfully submitted.
              </p>
              <div className="mt-4">
                <Button secondary onClick={close}>
                  Close
                </Button>
              </div>
            </DialogPanel>
          </div>
        </div>
      </Dialog>
    </>
  );
}
