import React from "react";
import WebLayout from "../layout/WebLayout";
import { foto } from "../data/KaryaDesa";
import jainul from "../images/jainul.png";
import { RiWhatsappFill } from "react-icons/ri";
import { IconContext } from "react-icons";

const Karya = () => {
  return (
    <WebLayout>
      {/* <ul>
        {foto.map((foto) => {
          return (
            <img src={foto} alt="" />
          )
        })}
      </ul> */}
      <div className="flex flex-col lg:flex-row p-4 xl:px-15 xl:py-10 items-center justify-center lg:items-start gap-5 2xl:gap-0">
        <div className="flex flex-col lg:w-1/4 rounded-2xl px-4 justify-center items-center gap-1 md:w-full lg:sticky lg:top-[125px] h-fit">
          <div className="bg-white rounded-2xl shadow-md shadow-primary items-center justify-center border border-neutral-200">
            <p className="text-center font-bold h6 bg-primary py-4 rounded-t-2xl w-full text-white tracking-widest">
              SENIMAN
            </p>
            <div className="flex flex-col items-center p-4">
              <img
                className="w-4/5 md:w-3/5 lg:w-11/12 2xl:w-3/4 mb-6"
                src={jainul}
                alt=""
              />
              <p className="h2 lg:h5 md:h3 font-bold">Jainul Arifin</p>
              <div className="flex items-center h3 lg:h5 font-bold gap-1">
                <IconContext.Provider value={{ size: "1.5em", color: "#4FCE5D" }}>
                  <RiWhatsappFill />
                </IconContext.Provider>
                081233560576
              </div>
              <a href="tel:+6281233560576" className="px-4 py-2 text-white font-bold h5 lg:h6 bg-primary rounded-xl w-fit mt-2">
                Tambah Kontak
              </a>
            </div>
          </div>
        </div>

        <div className="flex flex-col lg:w-4/5 w-full rounded-2xl shadow-md shadow-primary">
          <p className="text-center font-bold h5 bg-primary700 py-4 rounded-t-2xl bg-primary text-white tracking-wider">
            GALLERY
          </p>

          <div className="flex flex-wrap justify-center gap-8 px-4 py-8">
            {foto.map((foto) => {
              return (
                <img
                  key={foto}
                  className="w-4/6 md:w-1/3 lg:w-1/3 xl:w-1/5 rounded-xl"
                  src={foto}
                  alt=""
                />
              );
            })}
          </div>
        </div>
      </div>
    </WebLayout>
  );
};

export default Karya;
