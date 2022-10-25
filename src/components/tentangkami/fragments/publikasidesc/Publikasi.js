import React from "react";
import icon_publikasi from "../../../../assets/icon_publikasi.png";
import img_nsn from "../../../../assets/img_nsn.png";
import img_titan from "../../../../assets/img_titan.png";
import img_ainun from "../../../../assets/img_ainun.png";
import img_chintya from "../../../../assets/img_chintya.png";
import img_daru from "../../../../assets/img_chintya.png";
import Contributor from "./Contributor";
import style from "./Publikasi.module.css";
import CopyClipboard from "./CopyClipboard";

function Publikasi1(props) {
  return (
    <div className={style.publikasi}>
      <div className={style["publikasi-icon"]}>
        <img className={style["publikasi-img"]} src={icon_publikasi} />
        <p className={style["publikasi-text"]}>Publikasi</p>
      </div>
      <p className={style.year}>{props.year}</p>
      <div className={style.paper}>
        <div>
          <p className={style["paper-title"]}>{props.title}</p>
          <p className={style["paper-writer"]}>
            {props.writer[0]}
            <br />
            {props.writer[1]}
          </p>
          <div className={style.button}>
            <button className={style["button-unduh"]}>
              <p className={style["button-unduh-text"]}>Lihat Publikasi</p>
            </button>
            <CopyClipboard copyText={props.citation} />
          </div>
          <div className={style.abstract}>
            <p className={style["abstract-title"]}>Abstrak</p>
            <p className={style["abstract-desc"]}>{props.abstract}</p>
          </div>
        </div>
        <div>
          <p className={style.contributor}>Contributors</p>
          <Contributor img={img_nsn} name={"Prof. Dr. Eng. Nining Sari Ningsih, M.S."} desc={"Kelompok Keahlian (KK) Oseanografi, Fakultas Ilmu dan Teknologi Kebumian, Institut Teknologi Bandung, Bandung, Indonesia."} />
          <Contributor img={img_titan} name={"Titan Muslim Al-Khan, S.Si"} desc={"Eddies AI, Jakarta, Indonesia. "} />
          <Contributor img={img_ainun} name={"Ainun Azhari, S.Si"} desc={"Program Studi Oseanografi, Fakultas Ilmu dan Teknologi Kebumian, Institut Teknologi Bandung, Bandung, Indonesia."} />
          <Contributor img={img_chintya} name={"Chintya Suci Wardani"} desc={"Program Studi Oseanografi, Fakultas Ilmu dan Teknologi Kebumian, Institut Teknologi Bandung, Bandung, Indonesia."} />
          <Contributor img={img_daru} name={"Daru Pambayun Ramadhanti"} desc={"Program Studi Oseanografi, Fakultas Ilmu dan Teknologi Kebumian, Institut Teknologi Bandung, Bandung, Indonesia."} />
        </div>
      </div>
    </div>
  );
}

export default Publikasi1;
