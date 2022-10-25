import React from "react";
import photos_jk from "../../../../assets/photos_jk.jpg";
import style from "./Contributor.module.css";

const Contributor = (props) => {
  return (
    <div className={style.contributor}>
      <img className={style.img} src={props.img}></img>
      <div>
        <p className={style.title}>
          <strong>{props.name}</strong>
        </p>
        <p className={style.desc}>{props.desc}</p>
      </div>
    </div>
  );
};

export default Contributor;
