import React from "react";
import image_article from "../../../assets/image_article.png";
import styles from "./OpenArticle.module.css";

function OpenArticle(props) {
  return (
    <div className={styles.article}>
      {/* <div className={styles.upper}>
        <div>
          <p className={styles.text}>
            The Madden–Julian oscillation (MJO) is the largest element of the intraseasonal (30- to 90-day) variability in the tropical atmosphere. It was discovered in 1971 by Roland Madden and Paul Julian of the American National Center
            for Atmospheric Research (NCAR).[1] It is a large-scale coupling between atmospheric circulation and tropical deep atmospheric convection.[2][3] Unlike a standing pattern like the El Niño–Southern Oscillation (ENSO), the
            Madden–Julian oscillation is a traveling pattern that propagates eastward, at approximately 4 to 8 m/s (14 to 29 km/h; 9 to 18 mph), through the atmosphere above the warm parts of the Indian and Pacific oceans. This overall
            circulation pattern manifests itself most clearly as anomalous rainfall. The Madden–Julian oscillation is characterized by an eastward progression of large regions of both enhanced and suppressed tropical rainfall, observed
            mainly over the Indian and Pacific Ocean. The anomalous rainfall is usually first evident over the western Indian Ocean, and remains evident as it propagates over the very warm ocean waters of the western and central tropical
            Pacific. This pattern of tropical rainfall generally becomes nondescript as it moves over the primarily cooler ocean waters of the eastern Pacific, but reappears when passing over the warmer waters over the Pacific Coast of
            Central America. The pattern may also occasionally reappear at low amplitude over the tropical Atlantic and higher amplitude over the Indian Ocean. The wet phase of enhanced convection and precipitation is followed by a dry
            phase where thunderstorm activity is suppressed. Each cycle lasts approximately 30–60 days. Because of this pattern, the Madden–Julian oscillation is also known as the 30- to 60-day oscillation, 30- to 60-day wave, or
            intraseasonal oscillation.
          </p>
          <p className={styles.text}>
            Distinct patterns of lower-level and upper-level atmospheric circulation anomalies accompany the MJO-related pattern of enhanced or decreased tropical rainfall across the tropics. These circulation features extend around the
            globe and are not confined to only the eastern hemisphere. The Madden–Julian oscillation moves eastward at between 4 m/s (14 km/h, 9 mph) and 8 m/s (29 km/h, 18 mph) across the tropics, crossing the Earth's tropics in 30 to 60
            days—with the active phase of the MJO tracked by the degree of outgoing long wave radiation, which is measured by infrared-sensing geostationary weather satellites. The lower the amount of outgoing long wave radiation, the
            stronger the thunderstorm complexes, or convection, is within that region.[4]
          </p>
        </div>
        <div className={styles.image}>
          <div className={styles["image-position"]}>
            <img src={image_article} />
            <p className={styles["image-text"]}>
              A Hovmöller diagram of the 5-day running mean of outgoing longwave radiation showing the MJO. Time increases from top to bottom in the figure, so contours that are oriented from upper-left to lower-right represent movement
              from west to east.
            </p>
          </div>
        </div>
      </div> */}
      <div className={styles["article-desc"]}>
        <div className={styles.imgopen}>
          <img className={styles["imgopen-img"]} src={props.img} />
          <small className={styles["small-text"]}>sumber : {props.imgsource}</small>
        </div>
        <p className={styles["text-bottom"]}>{props.desc}</p>
      </div>
      <div className={styles.ref}>
        <p className={styles["ref-text"]}>Referensi :</p>
        <p className={styles["ref-text"]}>{props.reference}</p>
      </div>
    </div>
  );
}

export default OpenArticle;
