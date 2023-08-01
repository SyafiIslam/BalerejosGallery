import React from "react";
import WebLayout from "../layout/WebLayout";
import jumbo1 from "../images/jumbo1.png";
import jumbo2 from "../images/jumbo2.png";
import jumbo3 from "../images/jumbo3.png";
import sapi from "../images/gaduh-sapi.png";
import logo from "../images/logo-desa.png";
import jainul from "../images/jainul.png";
import doa from "../images/doa.jpg";
import sedekah from "../images/sedekah_bumi.jpg";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <WebLayout>
      <div className="bg-primary text-white px-10 xl:px-16 2xl:px-20 py-8 flex flex-col xl:flex-row xl:justify-between xl:pt-8 2xl:pt-0">
        <div className="flex flex-col items-center xl:items-start justify-center gap-4 md:gap-5 xl:basis-1/2">
          <p className="h1 font-bold">Balerejo's Gallery</p>
          <p className="h5 xl:h6 font-normal text-center xl:text-left">
            Balerejo's Gallery adalah etalase digital bagi UMKM dan pelaku
            bisnis unik berpotensi dari desa Balerejo, Blitar, Jawa Timur
          </p>
        </div>

        <div className="flex flex-col items-center justify-center mt-8 gap-6">
          <img className="rounded-xl md:rounded-none" src={jumbo1} alt="" />

          <div className="hidden md:flex gap-6">
            <img src={jumbo2} alt="" />
            <img src={jumbo3} alt="" />
          </div>
        </div>
      </div>

      <div className="text-primary mt-4 lg:mt-9 px-10 xl:px-16 2xl:px-20">
        <p className="h2 font-bold text-center 2xl:ml-36">Desa Balerejo</p>
        <div className="flex flex-col 2xl:flex-row 2xl:gap-20 items-center mt-3">
          <img
            className="w-1/3 md:w-1/5 lg:w-1/6 xl:w-[13%]"
            src={logo}
            alt=""
          />

          <div className="flex flex-col items-center  font-semibold mt-3">
            <p className="text-justify mt-2 md:p1 lg:text-[18px] xl:h4">
              Desa Balerejo merupakan desa yang terletak di Kabupaten Blitar,
              Kecamatan Panggungrejo. Desa Balerejo memiliki luas wilayah
              sebesar 144.657,000000 Ha. Desa Balerejo terdiri dari dua dusun
              yakni Balerejo I dan Balerejo II dengan total keseluruhan terdapat
              10 RW dan 37 RT. Desa Balerejo memiliki jumlah penduduk sebanyak
              3.564 jiwa yang terdiri dari 1.834 laki-laki dan 1.730 perempuan
              dengan 3.486 banyaknya total kepala keluarga.
            </p>
          </div>
        </div>
      </div>

      <div className="bg-primary text-white px-10 xl:px-16 2xl:px-20 py-8 mt-4 lg:mt-9">
        <p className="h2 lg:h3 font-bold text-center">Penggerak Ekonomi Desa</p>

        <div className="flex flex-col w-fit xl:flex-row-reverse items-center gap-8 xl:justify-evenly xl:mt-6">
          <img
            className="w-3/4 md:w-2/5 lg:w-1/4 rounded-xl"
            src={jainul}
            alt=""
          />

          <div className="flex flex-col basis-1/2">
            <p className="text-left xl:self-end h5 font-semibold w-fit">
              Seniman Lokal Go Internasional
            </p>

            <p className="mt-3 h5 lg:text-[18px] 2xl:text-[22px] xl:text-end">
              Mas Jainul adalah pemuda asli Balerejo yang mempunyai skill unik.
              Mas Jaiunul dapat memahat kayu yang menghasilkan karya yang
              bernilai tinggi
            </p>

            <Link to={`/karya-desa`}>
              <button className="h5 lg:text-[18px] self-start xl:self-end mt-6 bg-white font-semibold rounded-lg text-primary px-3 py-1 hover:bg-slate-300 duration-300">
                Lihat Karya
              </button>
            </Link>
          </div>
        </div>
      </div>

      <div className="flex text-primary flex-col px-10 xl:px-16 2xl:px-20 py-8 mt-4 lg:mt-9">
        <p className="h2 lg:h3 font-bold text-center mb-4 2xl:mb-16">
          Gaduh Sapi
        </p>

        <div className="flex flex-col xl:flex-row items-center justify-center">
          <div className="flex justify-center md:gap-6 basis-2/4 self-center">
            <img className="hidden md:block" src={jumbo3} alt="" />
            <img
              className="rounded-xl md:rounded-none w-2/3 lg:w-2/5"
              src={sapi}
              alt=""
            />
          </div>

          <div className="mt-4 basis-2/4">
            <p className="mt-3 h5 xl:h6 text-justify font-semibold lg:text-[18px] 2xl:text-[22px]">
              Rata-rata penduduk Desa Balerejo mempunyai sapi. Tetapi, tahukah
              anda jika sapi yang dipelihaa bukan milik sendiri melainkan
              titipan orang. Transaksi ini disebut “Gaduh Sapi”. Hasil sapi ini
              akan dibagi oleh pemilik dan pemelihara sapi
            </p>
          </div>
        </div>
      </div>

      <div className="bg-primary text-white px-10 xl:px-16 2xl:px-20 py-8 mt-4 lg:mt-9">
        <p className="h2 lg:h3 font-bold text-center">3 Pantai Desa Balerejo</p>

        <div className="flex flex-col w-fit xl:flex-row-reverse items-center gap-8 xl:justify-evenly xl:mt-6">
          <img
            className="w-3/4 md:w-2/5 lg:w-1/4 rounded-xl"
            src={jainul}
            alt=""
          />

          <div className="flex flex-col basis-1/2">
            <p className="mt-3 h5 lg:text-[18px] 2xl:text-[22px] xl:text-end">
              Pada Desa Balerejo terdepat 3 pantai yang dapat dikunjungi, yaitu
              Pantai Jabon sekargadung, Pantai Jabalan dan Pantai Gledakan
            </p>

            <button className="h5 lg:text-[18px] self-start xl:self-end mt-6 bg-white font-semibold rounded-lg text-primary px-3 py-1 hover:bg-slate-300 duration-300">
              Lihat Karya
            </button>
          </div>
        </div>
      </div>

      <div className="flex flex-col px-10 xl:px-16 2xl:px-20 py-8 mt-4 lg:mt-9">
        <p className="h2 lg:h3 font-bold text-center mb-4 2xl:mb-16">
          Rutunitas Warga
        </p>
        <p className="mt-3 2xl:mt-1 h5 xl:h6 text-center font-semibold lg:text-[18px] 2xl:text-[22px]">
          Desa Balerejo memiliki tradisi rutinan yang dapat anda saksikan dan
          nikmati pengalaman menyenangkan
        </p>

        <div className="flex flex-col md:flex-row md:items-center justify-center mt-8 md:mt-16 text-primary w-[300px]md:w-full">
          <div className="flex flex-col items-center justify-center h-fit">
            <img
              className="rounded-3xl w-4/5 md:w-3/5 lg:w-2/5 shadow-lg aspect-square object-cover"
              src={doa}
              alt=""
            />
            <p className="h2 lg:h4 font-bold text-center mt-2">Doa Bersama</p>
          </div>

          <div className="flex flex-col items-center mt-8 md:mt-0">
            <img
              className="rounded-3xl w-4/5 md:w-3/5 lg:w-2/5 shadow-lg aspect-square object-cover"
              src={sedekah}
              alt=""
            />
            <p className="h2 lg:h4 font-bold text-center mt-2">Sedekah Bumi</p>
          </div>
        </div>
      </div>

      <div className="text-primary mt-4 lg:mt-9 px-10 xl:px-16 2xl:px-20">
        <p className="h2 font-bold text-center">Peta Desa Balerejo</p>
        <div className="flex justify-center mt-4">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d39973.80402920702!2d112.272866!3d-8.2998104!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e78b9256237a4a1%3A0xb896002d4e5f27e2!2sBalerejo%2C%20Panggungrejo%2C%20Blitar%20Regency%2C%20East%20Java!5e1!3m2!1sen!2sid!4v1690682325634!5m2!1sen!2sid"
            width={1000}
            height={500}
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            tabIndex={0}
          ></iframe>
        </div>
      </div>
    </WebLayout>
  );
};

export default Home;
