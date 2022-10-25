import React from "react";
import image_wppri from "../../../assets/image_petawpp.jpeg";
import image_ikan from "../../../assets/image_ikan.png";
import icon_petik from "../../../assets/icon_petik.png";
import styles from "./Page.module.css";
import Slider from "./Slider";
function Page() {
  return (
    <>
      <div className={styles.page}>
        <div>
          <p className={styles.title}>WPP RI </p>
        </div>
        <div>
          <p className={styles.desc}>
            Indonesia memiliki 11 Wilayah Pengelolaan Perikanan (WPP) yang merupakan area kegiatan perikanan, seperti: penangkapan ikan, pembudidayaan ikan, konservasi, penelitian, dan pengembangan perikanan yang meliputi perairan
            pedalaman, perairan kepulauan, laut teritorial, zona tambahan, dan zona ekonomi eksklusif Indonesia (Peraturan Pemerintah No.18 Tahun 2014).
          </p>
        </div>
        <div>
          <img className={styles.image} src={image_wppri} />
        </div>
        <div>
          <Slider />
        </div>
        <div className={styles.bottom}>
          <img src={image_ikan} />
          <div className={styles.keterangan}>
            <img src={icon_petik} />
            <p className={styles["keterangan-text"]}>
              Perikanan Indonesia memiliki <strong>kepentingan global. </strong> Perairan negara ini mendukung lebih dari <strong>3.000 spesies</strong> ikan bertulang dan lebih dari 850 hiu, pari, dan chimaera.
            </p>
            <img className={styles["petik-bawah"]} src={icon_petik} />
            <p className={styles.nature}>nature.org</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Page;
