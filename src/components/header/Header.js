import React, { useState } from "react";
import "react-pro-sidebar/dist/css/styles.css";
import icon_itb from "../../assets/icon_itb.png";
import style from "./Header.module.css";

const Header = () => {
  return (
    <>
      <div className={style.header}>
        <img src={icon_itb} className={style["header-img"]} />
        <div className={style["header-text"]}>
          <p className={style["header-text1"]}> Iklim Gelombang Laut di Wilayah Pengelolaan Perikanan (WPP) Indonesia</p>
          <p className={style["header-text2"]}>Kelompok Keahlian Oseanografi - Fakultas Ilmu dan Teknologi Kebumian </p>
          <p className={style["header-text3"]}>
            Institut Teknologi Bandung <br />
            Jl. Ganesa No. 10, Lb. Siliwangi, Kota Bandung, Jawa Barat 40132
          </p>
        </div>
      </div>
    </>
  );
};

export default Header;
