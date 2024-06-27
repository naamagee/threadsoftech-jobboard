import React from "react";
import { libreCaslonDisplay, myFont } from "@/app/fonts/index";

function Header() {
  return (
    <header className="flex w-full gap-2 flex-wrap md:flex-nowrap justify-center md:justify-normal p-4">
      <span className={`${myFont.className} font-black text-4xl lg:text-6xl -mb-2`}>THREADS OF TECH</span>
      <div className={`${libreCaslonDisplay.className} flex justify-between gap-4 items-center border border-b-1 border-r-0 border-l-0 border-t-0 border-black mx-2`}>
        <span className="self-end text-lg md:text-2xl lg:text-3xl">JOB BOARD</span>
        <span className="self-end text-xs md:text-md lg:text-lg">Your New Go-To for Fashion-Tech Jobs</span>
      </div>
    </header>
  );
}
export default Header