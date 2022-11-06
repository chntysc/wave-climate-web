import React from "react";
import CollapsedArticle from "./fragments/CollapsedArticle";
import image_siklon_iklim from "./../../assets/image_siklon_iklim.png";
import image_muson_iklim from "./../../assets/image_monsun_iklim.png";
import image_mjo_iklim from "./../../assets/image_mjo_iklim.png";
import image_mjo_open from "./../../assets/image_mjo_open.jpg";
import image_munson_open from "./../../assets/image_munson_open.png";
import image_siklon_open from "./../../assets/image_siklon_open.jpeg";
import image_wave from "./../../assets/image_wave.png";

import styles from "./Iklim.module.css";
import { motion } from "framer-motion";
function Iklim() {
  const desc_open_mjo =
    "Terdapat delapan fase MJO, tiga diantaranya melewati wilayah Indonesia, yakni fase 3, 4, dan 5. MJO fase 3 berada disekitar barat Sumatra, fase 4 berada di wilayah Indonesia bagian tengah, dan fase 5 berada di sekitar wilayah Indonesia bagian timur. MJO berpotensi untuk meningkatkan kecepatan angin dan berpotensi menaikkan tinggi gelombang di perairan yang dilewatinya. ";
  const desc_open_monsun =
    "Pola angin di Indonesia dipengaruhi kuat oleh sistem angin monsun Asia-Australia. Pada periode Desember-Januari-Februari (DJF), angin di Indonesia akan bertiup dari arah utara menuju selatan dengan kecepatan sekitar 5-6 m/s. Pada bulan Maret-April-Mei (MAM), kecepatan angin di Indonesia lebih rendah daripada periode DJF dengan arah angin yang mulai berhembus dari arah selatan menuju utara Indonesia. Pola angin di Indonesia sepenuhnya akan berhembus dari arah selatan menuju utara Indonesia pada bulan Juni-Juli-Agustus (JJA) dengan kecepatan sekitar 6-8 m/s. Kecepatan angin di Indonesia mulai melemah pada periode September-Oktober-November (SON) dengan arah angin yang sama seperti periode JJA. Periode DJF umumnya dikenal juga sebagai “angin monsun baratan”, periode JJA dikenal sebagai “angin monsun timuran”. ";
  const desc_open_siklon =
    "Siklon tropis umumnya terbentuk di daerah sekitar ekuator (lintang rendah) dan menjalar menuju daerah lintang tinggi. Terdapat empat area pembentukan dan penjalaran siklon tropis di sekitar wilayah Indonesia, yakni di Teluk Benggala, Samudra Pasifik bagian barat, Samudra Hindia bagian timur laut, dan perairan barat Australia. Perubahan arah dan kecepatan angin saat kejadian siklon tropis yang terjadi di empat area tesebut dapat memengaruhi tinggi gelombang di perairan Indonesia. ";

  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.5 }}>
      <div>
        <p className={styles.title}>Iklim</p>
      </div>
      {/* <div>
        <p className={styles.desc}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
          consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
        </p>
      </div> */}
      <div>
        <CollapsedArticle
          title={"Angin Monsun"}
          desc={"Angin monsun adalah fenomena iklim yang terjadi di seluruh belahan bumi, ditandai dengan perubahan musim, arah dan kecepatan angin, serta curah hujan sebagai akibat dari gerak semu tahunan matahari. "}
          img={image_muson_iklim}
          imgopen={image_munson_open}
          descopen={desc_open_monsun}
          imgsource={"dokumentasi pribadi"}
          reference={
            <p>
              <ol>
                <li>Geen, R., Bordoni, S., Battisti, D. S., dan Hui, K., 2020, Monsoons, ITCZs, and the Concept of the Global Monsoon, Reviews of Geophysics, 58(4):1-60.</li>
                <li> Kasih, B. T. H., Gernowo, R., Harijono, S. W. B., and Djunaidi, I.: The character of rainfall in the Indonesian monsoon, in: The international symposium on equatorial monsoon system, Yogyakarta, Indonesia, 2008.</li>
                <li>
                  Ningsih, N.S., Rachmayani, R., Abdullah, F.A.R., Al-Khan, T.M., dan Azhari, A., 2021, Pemetaan zonasi dan waktu pelayaran, serta rekomendasi ukuran kapal nelayan di perairan Indonesia sebagai upaya mitigasi dan adaptasi
                  dalam menghadapi kejadian gelombang tinggi, Laporan Akhir Program Riset ITB 2021, No. Kontrak: 138/IT1.B07.1/TA.00/2021.
                </li>
                <li>Slingo, J., 2003. Monsoon : overview. In: Encyclopedia of Atmospheric Sciences, second ed. Elsevier. https://doi.org/10.1016/B978-0-12-382225-3.00235-8. 2nd Edition.</li>
              </ol>
            </p>
          }
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
              <ol>
                <li>
                  Hilmi, I., Ningsih, N.S., Sofian, I., Hanifah, F. and Rizal, A.M., 2018, June. The study of MJO impact on wave height and wind speed in Indonesian Seas. In IOP Conference Series: Earth and Environmental Science (Vol. 162,
                  No. 1, p. 012004). IOP Publishing.
                </li>
                <li> http://www.bom.gov.au/climate/mjo/#tabs=Phase</li>
                <li> https://www.severe-weather.eu/global-weather/july-2022-weather-forecast-usa-europe-fa/ </li>
                <li> http://www.bom.gov.au/climate/mjo/</li>
              </ol>
            </p>
          }
        />
        <CollapsedArticle
          title={"Siklon"}
          desc={
            <p>
              Siklon tropis adalah fenomena cuaca regional berupa sirkulasi perputaran angin tertutup (<i>closed circulation warm core</i>) akibat terbentuknya daerah bertekanan rendah dan diikuti dengan kenaikan kecepatan angin.
            </p>
          }
          img={image_siklon_iklim}
          imgopen={image_siklon_open}
          descopen={desc_open_siklon}
          imgsource={"https://interestingengineering.com/science/tropical-cyclones-circular-storms"}
          reference={
            <p>
              <ol>
                <li>Gray, W. M., 1975, Tropical cyclone genesis, Disertasi, Colorado State University Libraries.</li>
                <li>Wannawong, W., dan Ekkawatpanit, C., 2012, Tropical Cyclone Wind-Wave, Storm Surge and Current in Meteorological Prediction, dalam Sorin Cheval (Eds.) Natural Disasters (hal 65-86), IntechOpen, Kroasia, 156 p.</li>
                <li>Zhender, J A., 2021, Tropical Cyclone, Encyclopedia Britannica, (https://www.britannica. com/science/tropical-cyclone, diakses 27 Oktober 2021).</li>
              </ol>
            </p>
          }
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
