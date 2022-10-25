import React from "react";
import CardArticle from "../card/CardArticle";
import styles from "./ArticleSection.module.css";
import image_siklon from "../../../../assets/image_siklon.png";
import image_mjo from "../../../../assets/image_mjo.png";
import image_muson from "../../../../assets/image_monsun.png";

function ArticleSection() {
  const desc_mjo = "Madden-Julian Oscillation (MJO) adalah fenomena atmosfer berupa perambatan awan konveksi yang membawa curah hujan di sekitar ekuator dan bergerak ke arah timur dengan periode osilasi sekitar 30-60 hari. ";
  const desc_muson = "Angin monsun adalah fenomena iklim yang terjadi di seluruh belahan bumi, ditandai dengan perubahan musim, arah dan kecepatan angin, serta curah hujan sebagai akibat dari gerak semu tahunan matahari. ";
  const desc_siklon = "Siklon tropis adalah fenomena cuaca regional berupa sirkulasi perputaran angin tertutup (closed circulation warm core) akibat terbentuknya daerah bertekanan rendah dan diikuti dengan kenaikan kecepatan angin. ";
  return (
    <div className={styles.article}>
      <div className={styles["article-content"]}>
        <div>
          <p className={styles.title}>
            Indonesia merupakan negara kepulauan yang memiliki area lautan seluas <strong>3.257.357 km².</strong>{" "}
          </p>
        </div>
        <div>
          <p className={styles.subtitle}>Kenali beberapa fenomena berikut dalam memengaruhi kondisi kelautan di Indonesia</p>
        </div>
        <div className={styles.card}>
          <CardArticle title={"Siklon Di Indonesia"} desc={desc_siklon} image={image_siklon}></CardArticle>
          <CardArticle title={"Monsun"} desc={desc_muson} image={image_muson}></CardArticle>
          <CardArticle title={"Madden Jullian Oscillation"} desc={desc_mjo} image={image_mjo}></CardArticle>
        </div>
      </div>
    </div>
  );
}

export default ArticleSection;
