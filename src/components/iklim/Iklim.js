import React from "react";
import CollapsedArticle from "./fragments/CollapsedArticle";
import image_siklon_iklim from "./../../assets/image_siklon_iklim.png";
import image_muson_iklim from "./../../assets/image_monsun_iklim.png";
import image_mjo_iklim from "./../../assets/image_mjo_iklim.png";
import image_mjo_open from "./../../assets/image_mjo_open.jpg";
import image_wave from "./../../assets/image_wave.png";

import styles from "./Iklim.module.css";
import { motion } from "framer-motion";
function Iklim() {
  const desc_open_mjo =
    "Terdapat delapan fase MJO, tiga diantaranya melewati wilayah Indonesia, yakni fase 3, 4, dan 5. MJO fase 3 berada disekitar barat Sumatra, fase 4 berada di wilayah Indonesia bagian tengah, dan fase 5 berada di sekitar wilayah Indonesia bagian timur. MJO berpotensi untuk meningkatkan kecepatan angin dan berpotensi menaikkan tinggi gelombang di perairan yang dilewatinya. ";
  const desc_open_monsun =
    "Indonesia dipengaruhi kuat oleh monsun Asia-Australia. Angin dari benua Asia menuju Australia akan bertiup kuat pada Desember-Januari-Februari (DJF) yang umumnya disebut sebagai “angin monsun baratan”, sedangkan angin dari benua Australia menuju Asia akan bertiup kuat pada Juni-Juli-Agustus (JJA) yang dikenal sebagai “angin monsun timuran”. Pada periode DJF, angin akan bertiup dari utara dan bergerak menuju selatan Indonesia dengan arah yang  Angin monsun Asia (DJF) umumnya dikenal sebagai “angin monsun baratan” Periode Maret- April-Mei (MAM) merupakan periode transisi antara angin monsun ";
  const desc_open_siklon = "Siklon tropis adalah fenomena cuaca regional berupa sirkulasi perputaran angin tertutup (closed circulation warm core) akibat terbentuknya daerah bertekanan rendah dan diikuti dengan kenaikan kecepatan angin.";

  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.5 }}>
      <div>
        <p className={styles.title}>Iklim</p>
      </div>
      <div>
        <p className={styles.desc}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
          consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
        </p>
      </div>
      <div>
        <CollapsedArticle
          title={"Angin Monsun"}
          desc={"Angin monsun adalah fenomena iklim yang terjadi di seluruh belahan bumi, ditandai dengan perubahan musim, arah dan kecepatan angin, serta curah hujan sebagai akibat dari gerak semu tahunan matahari. "}
          img={image_muson_iklim}
        />
        <CollapsedArticle
          title={"Madden-Julian Oscillation (MJO)"}
          desc={"Madden-Julian Oscillation (MJO) adalah fenomena atmosfer berupa perambatan awan konveksi yang membawa curah hujan di sekitar ekuator dan bergerak ke arah timur dengan periode osilasi sekitar 30-60 hari. "}
          img={image_mjo_iklim}
          imgopen={image_mjo_open}
          descopen={desc_open_mjo}
          imgsource={"http://www.bom.gov.au/climate/mjo/"}
          reference={
            <p>
              http://www.bom.gov.au/climate/mjo/#tabs=Phase <br />
              https://www.severe-weather.eu/global-weather/july-2022-weather-forecast-usa-europe-fa/ <br />
              http://www.bom.gov.au/climate/mjo/ <br />
              Hilmi, I., Ningsih, N.S., Sofian, I., Hanifah, F. and Rizal, A.M., 2018, June. The study of MJO impact on wave height and wind speed in Indonesian Seas. In IOP Conference Series: Earth and Environmental Science (Vol. 162, No.
              1, p. 012004). IOP Publishing.
            </p>
          }
        />
        <CollapsedArticle
          title={"Siklon"}
          desc={"Siklon tropis adalah fenomena cuaca regional berupa sirkulasi perputaran angin tertutup (closed circulation warm core) akibat terbentuknya daerah bertekanan rendah dan diikuti dengan kenaikan kecepatan angin."}
          img={image_siklon_iklim}
        />
      </div>
      <div></div>
      <div></div>
      <div>
        <p className={styles.eksplor}>Eksplor lebih lanjut tentang kondisi laut Indonesia.</p>
      </div>
      <img className={styles.img} src={image_wave} />
      <div className={styles["div-button"]}>
        <button className={styles.button}>Menuju Dashboard</button>
      </div>

      <div></div>
    </motion.div>
  );
}

export default Iklim;
