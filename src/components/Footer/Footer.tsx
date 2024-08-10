import React from "react";
import { libreCaslonDisplay, myFont } from "@/app/fonts/index";

function Footer() {
  return (
    <footer className="border border-t-1 border-r-0 border-l-0 border-b-0 border-black h-auto p-8 w-full bottom-0 mt-12">
      <p className={`${libreCaslonDisplay.className} font-medium text-2xl`}>
        Why Work In Fashion-Tech?
      </p>
      <p className="py-3 text-sm">
        <span className={`${myFont.className}`}>THREADS OF TECH</span> is a
        community for fashion creatives and technologists that hosts events for
        fashion-tech industry professionals. The fashion and beauty industry
        attracts creative digital and physical technology projects that tech workers can
        find valuable. Find your next role here to work at the intersection of
        creativity, luxury, art, and technology.
      </p>
      <p className="py-2 text-sm">
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
          href="mailto:info@threadsoftech.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          info@threadsoftech.com
        </a>
      </div>
    </footer>
  );
}
export default Footer;
