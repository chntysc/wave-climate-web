import React, { useState } from "react";
import "react-pro-sidebar/dist/css/styles.css";
import icon_eddies from "../../../../assets/icon_eddies.svg";
import icon_itb from "../../../../assets/icon_itb.png";
import style from "./Description.module.css";

const Description = () => {
  return (
    <>
      <div className={style.description}>
        <div>
          <p className={style.title}>Tentang Kami</p>
          <p className={style.desc}>
            Visi kami adalah meningkatkan pemahaman dan pemanfaatan gelombang laut yang dapat diakses oleh seluruh lapisan masyarakat dan diimplementasikan dalam bentuk dashboard. Informasi pada dashboard ini merupakan hasil dari penelitian
            kami sebelumnya yang berfokus pada karakteristik gelombang laut di perairan Indonesia dan merupakan salah satu program penelitian yang didukung oleh Institut Teknologi Bandung (ITB). Dashboard ini menyediakan informasi serta
            data terkait karakteristik iklim gelombang serta efek siklon tropis dan Madden-Julian Oscillation (MJO) terhadap tinggi gelombang di perairan Indonesia dan sekitarnya.
          </p>
          <div className={style.partner}>
            <p className={style["partner-text"]}>Partner Kami</p>
            <div>
              <img className={style["partner-img"]} src={icon_eddies} />
              <img className={style["partner-img"]} src={icon_itb} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Description;
