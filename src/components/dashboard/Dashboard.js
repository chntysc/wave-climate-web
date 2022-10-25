import React from "react";
import styles from "./Dashboard.module.css";
import background_dashboard from "./../../assets/background_dashboard.png";

function Dashboard() {
  return (
    <>
      <div className={styles.dashboard}>
        <p className={styles.title}>Dashboard</p>
        {/* <img className={styles["img-bg"]} src={background_dashboard} /> */}
        <div className={styles["kotak-position"]}>
          <div className={styles.kotak}>
            <p className={styles.text}>Klik tombol dibawah untuk mengakses laman dashboard</p>
            <div className={styles["div-button"]}>
              <button className={styles.button}>Menuju Dashboard</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Dashboard;
