import React from "react";
import image_location from "../../../assets/image_location.png";
import image_fish from "../../../assets/image_fish.png";
import image_lobster from "../../../assets/image_lobster.png";
import image_kepiting from "../../../assets/image_kepiting.png";
import image_karang from "../../../assets/image_karang.png";
import image_pelagisb from "../../../assets/image_pelagisb.png";
import image_demersal from "../../../assets/image_demersal.png";
import image_cumicumi from "../../../assets/image_cumicumi.png";
import image_rajungan from "../../../assets/image_rajungan.png";
import style from "./CardSlider.module.css";
import FishSlider from "./FishSlider";
function CardSlider(props) {
  return (
    <>
      <div className={style.card}>
        <div className={style.upper}>
          {/* <div>
            <img className={style.image} src={image_location} />
          </div> */}
          <div className={style.text}>
            <div style={{ display: "flex", flexDirection: "row", columnGap: "20px" }}>
              <p className={style.title}>{props.wpp}</p>
              <p className={style.loc}>{props.location}</p>
            </div>

            <table className={style.desc}>
              <tr>
                <td className={style.td}>Potensi perikanan</td>
                <td className={style.td}> : </td>
                <td className={style.td}>{props.potensial}</td>
              </tr>

              <tr>
                <td className={style.td}>Jumlah tangkapan yang diperbolehkan (JBT)</td>
                <td className={style.td}> : </td>
                <td className={style.td}>{props.catch}</td>
              </tr>
              <tr>
                <td className={style.td}>Tingkat pemanfaatan</td>
                <td className={style.td}> : </td>
                <td className={style.td}>{props.exploit}</td>
              </tr>
              <tr>
                <td className={style.td}>Biota</td>
                {/* <td className={style.td}> : </td>
                <td className={style.td}>{props.fish}</td> */}
              </tr>
            </table>
            <div style={{ display: "flex", flexDirection: "row", columnGap: "13px", paddingTop: "5px" }}>
              <a href="https://food.detik.com/info-kuliner/d-4272541/5-daerah-di-indonesia-ini-punya-lobster-enak-berdaging-tebal">
                <img style={{ width: "5vw" }} src={image_lobster} />
              </a>
              <a href="https://news.unair.ac.id/2022/01/25/penilaian-risiko-kesehatan-terhadap-logam-yang-terkandung-dalam-kepiting-bakau/?lang=id">
                <img style={{ width: "5vw" }} src={image_kepiting} />
              </a>
              <a href="https://www.popmama.com/big-kid/10-12-years-old/jemima/fakta-cumi-cumi-ciri-khusus-habitat-dan-berkembang-biak">
                <img style={{ width: "5vw" }} src={image_cumicumi} />
              </a>
              <a href="https://sangiangsea.wordpress.com/2013/05/28/ikan-demersal-disekitar-laut-sangiang/">
                <img style={{ width: "5vw" }} src={image_demersal} />
              </a>
              <a href="https://perikanan38.blogspot.com/2017/09/nama-nama-ikan-laut.html">
                <img style={{ width: "5vw" }} src={image_pelagisb} />
              </a>
              <a href="https://www.cnnindonesia.com/teknologi/20200702103116-199-519919/ikan-napoleon-raksasa-penjaga-terumbu-karang-muncul-di-riau">
                <img style={{ width: "5vw" }} src={image_karang} />
              </a>
              <a href="https://www.kompas.com/food/read/2022/05/12/210800075/cara-simpan-rajungan-segar-sebelum-diolah-biarkan-hidup-di-kolam-air-asin?page=all">
                <img style={{ width: "5vw" }} src={image_rajungan} />
              </a>
            </div>

            {/* <div className={style["text-col"]}>
              <div>
                <p className={style.desc}>Potensi perikanan : </p>
                <p className={style.desc}>Jumlah tangkapan yang diperbolehkan (JBT) : </p>
                <p className={style.desc}>Tingkat pemanfaatan: </p>
                <p className={style.desc}>Kategori: </p>
              </div>
              <div>
                <p className={style.desc}>{props.potensial}</p>
                <p className={style.desc}>{props.catch}</p>
                <p className={style.desc}>{props.exploit}</p>
                <p className={style.desc}>{props.fish}</p>
              </div>
            </div> */}
          </div>
        </div>
      </div>
    </>
  );
}

export default CardSlider;
