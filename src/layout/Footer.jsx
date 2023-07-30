import React from "react";
import { IconContext } from "react-icons";
import { AiFillInstagram, AiFillMail } from "react-icons/ai";
import { RiFacebookBoxFill, RiWhatsappFill } from "react-icons/ri";
import Cloud from "../assets/idcloudhost.svg"

const Footer = () => {
  return (
    <div className="bg-primary flex flex-col mt-8 items-center gap-3 md:gap-6 pt-4 md:pt-8 text-white">
      <p className="h4 font-bold text-center tracking-wider">Balerejo's Gallery</p>
      <div className="hidden md:flex justify-center gap-14 text-[2.8em]">
        <a href="https://www.instagram.com/desa_balerejo86/">
          <AiFillInstagram />
        </a>

        <a href="tel:+6282330691997">
          <RiWhatsappFill />
        </a>

        <a href="mailto:desabalerejo1@gmail.com">
          <AiFillMail />
        </a>

        <a href="https://www.facebook.com/desaku.balerejo.1">
          <RiFacebookBoxFill />
        </a>
      </div>

      <div className="flex md:hidden justify-center gap-14 text-[2.8em]">
        <IconContext.Provider value={{ size: ".7em" }}>
          <a href="https://www.instagram.com/desa_balerejo86/">
            <AiFillInstagram />
          </a>

          <a href="tel:+6282330691997">
            <RiWhatsappFill />
          </a>

          <a href="mailto:desabalerejo1@gmail.com">
            <AiFillMail />
          </a>

          <a href="https://www.facebook.com/desaku.balerejo.1">
            <RiFacebookBoxFill />
          </a>
        </IconContext.Provider>
      </div>

      <img className="w-1/4 md:w-1/4 -mt-4 md:-mt-14 lg:w-1/6" src={Cloud} alt="" />
    </div>
  );
};

export default Footer;
