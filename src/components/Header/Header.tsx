import React from "react";
import { libreCaslonDisplay, myFont } from "@/app/layout";

function Header() {
  return (
    <header className="flex w-full gap-2 flex-wrap md:flex-nowrap justify-center md:justify-normal">
      <span className={`${myFont.className} font-black text-4xl lg:text-6xl -mb-2`}>THREADS OF TECH</span>
      <div className={`${libreCaslonDisplay.className} flex justify-between gap-4 items-center border border-b-1 border-r-0 border-l-0 border-t-0 border-black`}>
        <span className="text-xl self-end md:text-2xl lg:text-4xl">JOB BOARD</span>
        <span className="self-end text-sm md:text-lg lg:text-xl">Bringing Top Tech Talent to Fashion</span>
      </div>
    </header>
  );
}
export default Header