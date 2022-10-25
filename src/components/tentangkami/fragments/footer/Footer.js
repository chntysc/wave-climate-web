import React from "react";
import { Link } from "react-router-dom";
import icon_itb from "../../../../assets/icon_itb.svg";
import style from "./Footer.module.css";

const Footer = () => {
  return (
    <>
      <div className={style.footer}>
        <div>
          <img className={style.img} src={icon_itb} />
        </div>
        <div className={style.text}>
          <p className={style["text-kk"]}>Kelompok Keahlian Oseanografi Fakultas Ilmu dan Teknologi Kebumian</p>
          <p className={style["text-itb"]}>Institut Teknologi Bandung </p>
          <p className={style["text-alamat"]}>Jl. Ganesa No.10, Lb. Siliwangi, Kecamatan Coblong, Kota Bandung, Jawa Barat 40132</p>
        </div>
        <div className={style.line}></div>
        <div className={style["text-link-main"]}>
          <div className={style["link"]}>
            <Link className={style["text-link"]} to="/">
              <p>Halaman Utama</p>
            </Link>
            <Link className={style["text-link"]} to="/wpp-ri">
              <p>WPP RI</p>
            </Link>
            <Link className={style["text-link"]} to="/iklim">
              <p>Artikel Iklim Laut</p>
            </Link>
          </div>
          <div className={style["link"]}>
            <Link className={style["text-link"]} to="/data">
              <p>Informasi Data</p>
            </Link>
            <Link className={style["text-link"]}>
              <p>Dashboard</p>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
