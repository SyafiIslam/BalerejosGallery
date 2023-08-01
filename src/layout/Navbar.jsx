import React, { useState } from "react";
import { Link } from "react-router-dom";
import Icon from "../assets/logo.svg";
import { RxHamburgerMenu, RxCross1 } from "react-icons/rx";
import { IconContext } from "react-icons";

const Navbar = () => {

  const [toggle, setToggle] = useState(false)
  return (
    <nav className="sticky top-0 py-4 md:py-6 pr-3 ps-10 md:px-7 xl:px-14 2xl:px-20 h-fit bg-primary text-white z-10 border-none">
      <div className="flex justify-between">
        <Link to={`/`} className="flex md:gap-4 h-full gap-2 font-bold w-3/4">
          <img src={Icon} className="w-10 md:w-12 xl:14 object-contain aspect-square" />
          <p className="self-center h5">Balerejo's Gallery</p>
        </Link>
        <ul className="hidden sm:flex gap-6 items-center w-1/4 sm:w-fit font-semibold text-lg">
          <Link to={`/`}>
            <li>Home</li>
          </Link>
          <Link to={`/karya-desa`}>
            <li>Karya</li>
          </Link>
          <Link to={`/profil-desa`}>
            <li>Profil</li>
          </Link>
        </ul>

        {
          toggle ? 
          <IconContext.Provider
          value={{ size: "1.5em" }}
        >
          <div className="flex items-center sm:hidden" onClick={() => setToggle(!toggle)}>
            <RxCross1 />
          </div>
        </IconContext.Provider>
        :
        <IconContext.Provider
          value={{ size: "1.5em" }}
        >
          <div className="flex items-center sm:hidden" onClick={() => setToggle(!toggle)}>
            <RxHamburgerMenu />
          </div>
        </IconContext.Provider>
        }
      </div>

      {
        toggle &&
        <ul className="flex flex-col mt-4 w-fit gap-3 font-semibold">
          <Link to={`/`}>
            <li>Beranda</li>
          </Link>
          <Link to={`/karya-desa`}>
            <li>Karya</li>
          </Link>
          <Link to={`/profil-desa`}>
            <li>Profil</li>
          </Link>
        </ul>
      }
    </nav>
  );
};

export default Navbar;
