import React from "react";
import { libreCaslonDisplay, myFont } from "@/app/fonts/index";

function Footer() {
  return (
    <footer className="bg-sky-100 h-auto p-8  w-full mt-10 bottom-0">
      <p
        className={`${libreCaslonDisplay.className} font-medium text-4xl -mt-12`}
      >
        Why Work In Fashion-Tech?
      </p>
      <p className="py-4">
        <span className={`${myFont.className}`}>THREADS OF TECH</span> started
        as a community for fashion creatives and technologists and shifted into
        private events for fashion-tech industry professionals. A legacy
        industry needs reimagined changemakers for innovation within retail,
        ecommerce, manufacturing, supply chain and more!
      </p>
      <p className=" py-2 ">
        Have a job you want featured? Want to give us feedback? DM or email us
        here.{" "}
      </p>
      <div
        className={`${libreCaslonDisplay.className} flex justify-between gap-4 items-center border border-b-1 border-r-0 border-l-0 border-t-0 border-black w-fit`}
      >
        <a
          className="font-medium text-md md:text-lg hover:underline"
          href="https://instagram.com/threadsoftech"
          target="_blank"
          rel="noopener noreferrer"
        >
          Instagram
        </a>
        <a
          className="font-medium text-md md:text-lg hover:underline"
          href="https://threadsoftech.substack.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          Substack
        </a>
        <a
          className="font-medium text-md md:text-lg hover:underline"
          href="https://linkedin.com/company/99120701"
          target="_blank"
          rel="noopener noreferrer"
        >
          LinkedIn
        </a>
        <a
          className="font-medium text-md md:text-lg hover:underline"
          href="mailto:threadsoftechnyc@gmail.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          threadsoftech@gmail.com
        </a>
      </div>
    </footer>
  );
}
export default Footer;
