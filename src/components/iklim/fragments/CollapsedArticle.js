import React, { useState } from "react";
import { BiChevronDown, BiX } from "react-icons/bi";
import image_mjo_iklim from "../../../assets/image_mjo_iklim.png";
import icon_chevdown from "../../../assets/icon_chevdown.png";
import icon_close from "../../../assets/icon_close.png";
import styles from "./CollapsedArticle.module.css";
import OpenArticle from "./OpenArticle";
import { CSSTransition } from "react-transition-group";
import "./CollapsedArticle.css";
function CollapsedArticle(props) {
  //create initial menuCollapse state using useState hook
  const [menuCollapse, setMenuCollapse] = useState(false);

  //create a custom function that will change menucollapse state from false to true and true to false
  const menuIconClick = () => {
    //condition checking to change state from true to false and vice versa
    menuCollapse ? setMenuCollapse(false) : setMenuCollapse(true);
  };
  return (
    <>
      <div>
        <div>
          <img className={styles["image-mjo"]} src={props.img} />
          <div className={styles["text-position"]}>
            <div className={styles["mjo-text-bg"]}>
              <p className={styles.title}>{props.title}</p>
              <p className={styles.desc}>{props.desc}</p>
              <div className={menuCollapse ? styles["button-baca-collapsed"] : ""}>
                <div className={styles["button-position"]}>
                  <button onClick={menuIconClick} className={styles.button}>
                    <p className={styles["button-text"]}>Baca Lebih Lanjut</p>
                    <img src={icon_chevdown} />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <CSSTransition in={menuCollapse} timeout={200} classNames="my-node" unmountOnExit appear>
          <OpenArticle desc={props.descopen} img={props.imgopen} imgsource={props.imgsource} reference={props.reference} />
        </CSSTransition>
        <div className={!menuCollapse ? styles["button-close-collapsed"] : styles["button-close"]}>
          <div className={styles["button-position"]}>
            <button className={styles["button-tutup"]} onClick={menuIconClick}>
              <img src={icon_close} />
              <p className={styles["button-tutup-text"]}>Tutup</p>
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default CollapsedArticle;
