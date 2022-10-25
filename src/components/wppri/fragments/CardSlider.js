import React from "react";
import image_location from "../../../assets/image_location.png";
import image_fish from "../../../assets/image_fish.png";
import style from "./CardSlider.module.css";
function CardSlider(props) {
  return (
    <>
      <div className={style.card}>
        <div className={style.upper}>
          {/* <div>
            <img className={style.image} src={image_location} />
          </div> */}
          <div className={style.text}>
            <p className={style.title}>{props.wpp}</p>
            <p className={style.loc}>{props.location}</p>
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
                <td className={style.td}>Kategori</td>
                <td className={style.td}> : </td>
                <td className={style.td}>{props.fish}</td>
              </tr>
            </table>
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
