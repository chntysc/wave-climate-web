import React from "react";
import image_siklon from "../../../../assets/image_siklon.png";
import styles from "./CardArticle.module.css";

function CardArticle(props) {
  return (
    <>
      <div className={styles.card}>
        <div className={styles["card-layout"]}>
          <div>
            <p className={styles.title}>{props.title}</p>
          </div>
          <div>
            <img src={props.image} />
          </div>
          <div>
            <p className={styles.desc}>{props.desc}</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default CardArticle;
