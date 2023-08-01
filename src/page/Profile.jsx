import React, { useState } from "react";
import WebLayout from "../layout/WebLayout";
import Logo from "../images/logo-desa.png";
import { Card } from "../component/Card";
import { ProfileDesa } from "../data/ProfileDesa";

const Profile = () => {
  const [data, setData] = useState(ProfileDesa);

  return (
    <WebLayout>
      <div className="flex flex-col lg:flex-row p-4 xl:px-15 xl:py-10 items-center justify-center lg:items-start gap-5 2xl:gap-0">
        <div className="flex flex-col lg:w-1/4 rounded-2xl px-4 justify-center items-center gap-1 md:w-full lg:sticky lg:top-[125px] h-fit">
          <div className="bg-white rounded-2xl shadow-xl items-center justify-center border border-neutral-200">
            <p className="text-center font-bold h6 bg-primary py-4 rounded-t-2xl w-full text-white">
              DESA BALEREJO
            </p>
            <div className="flex flex-col items-center p-4">
              <img
                className="w-2/5 lg:1/5 mb-6"
                src={Logo}
                alt=""
              />
              <p>Kabupaten Blitar</p>
              <p>Kecamatan Panggungrejo</p>
              <p>Desa Balerejo</p>
              <p className="text-sm">
                Jl. Trisula No. 01 Dsn Balerejo 1 RT. 03 RW. 01
              </p>
            </div>
          </div>
        </div>

        <div className="flex flex-col lg:w-4/5 w-full rounded-2xl shadow-xl">
          <p className="text-center font-bold h5 bg-primary700 py-4 rounded-t-2xl bg-primary text-white">
            PROFIL DESA
          </p>

          <div className="flex flex-col gap-8 p-4">
            {data.map((data) => {
              return (
                <div key={data.judul} className="px-4">
                  <p className="h3 md:h6 font-bold">{data.judul}</p>
                  <p className="h6 md:p1">{data.isi}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </WebLayout>
  );
};

export default Profile;
