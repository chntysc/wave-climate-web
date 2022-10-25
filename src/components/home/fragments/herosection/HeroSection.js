import React from "react";
import icon_search from "../../../../assets/icon_search.png";
import style from "./HeroSection.module.css";
function HeroSection() {
  return (
    <>
      <div className={style.hero}>
        {/* <div className={style.search}>
          <div className={style["search-top"]}>
            <p className={style["search-text"]}>Pencarian...</p>
            <img className={style["search-icon"]} src={icon_search} />
          </div>
          <div className={style["search-line"]}></div>
        </div> */}
        <div className={style.title}>
          <button className={style["title-button"]}>Program Riset</button>
          <p className={style["title-paper"]}>Dasbor Monitoring Berbasis Data Science untuk Mitigasi dan Adaptasi Kejadian Gelombang Tinggi di Wilayah Pengelolaan Perikanan (WPP) Indonesia</p>
          <p className={style["title-writer"]}>Ningsih, N.S., Rachmayani, R., Al-Khan, T.M., Azhari, A., dan Wardani, C. S., 2022</p>
        </div>
        <div className={style.bottom}>
          <button className={style.button}>Menuju Dashboard</button>
        </div>
      </div>
    </>
  );
}

export default HeroSection;
