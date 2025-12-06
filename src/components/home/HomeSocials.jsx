import React from "react";
import { FaGithub } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
function HomeSocials() {
  return (
    // home_socials
    <div className="hidden flex justify-between w-[25%] mt-10 ml-9 sm:flex  gap-[0.8rem] items-center
    ">
      <a
        className="transition-(--transition) text-(--color-primary) hover:text-(--color-white) text-[23px]"
        href="#"
        target="_blank"
      >
        <FaGithub className="text-[40px]"/>
      </a>
      <a
        className="transition-(--transition) text-(--color-primary) hover:text-(--color-white) text-[23px]"
        href="#"
        target="_blank"
      >
        <FaFacebook className="text-[40px]" />
      </a>
      <a
        className="transition-(--transition) text-(--color-primary) hover:text-(--color-white) text-[23px] "
        href="#"
        target="_blank"
      >
        <FaInstagramSquare className="text-[40px]"/>
      </a>
    </div>
  );
}
export default HomeSocials;
