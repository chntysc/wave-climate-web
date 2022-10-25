import React from "react";
import Form from "./fragments/form/Form";
import style from "./Data.module.css";
import { motion } from "framer-motion";
function Data() {
  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.5 }}>
      <div>
        <p className={style.title}>Data</p>
        <p className={style.desc}>
          Data yang digunakan adalah data angin, gelombang, kejadian siklon tropis, dan MJO selama 42 tahun (1979 - 2020). Data angin dan gelombang berasal dari European Centre for Medium-Range Weather Forecast (ECMWF), yakni ECMWF
          Reanalysis v5 (ERA5) dengan resolusi temporal adalah setiap 1 jam. Resolusi spasial data angin adalah 0,25&deg; x 0,25&deg;, sedangkan data gelombang adalah 0,5&deg;x 0,5&deg;. Data kejadian siklon tropis berasal dari
          International Best Track Archive for Climate Stewardship (IBTrACS) yang tersedia di National Centers for Environmental Information (NCEI). Data MJO yang digunakan adalah kejadian MJO pada fase 3, 4, dan 5 dengan indeks MJO ≥ 1.
          berasal dari International Research Institute/Lamont-Doherty Earth Observatory (IRI/LDEO) Climate Data Library.
        </p>
      </div>
      <div className={style.data}>
        <div>
          <table className={style.table}>
            <tr>
              <th>Data Type</th>
              <th>Data Type</th>
              <th>Description</th>
            </tr>
            <tr>
              <td>10 m u-component of wind</td>
              <td>nc</td>
              <td>Parameter ini merupakan komponen kecepatan angin yang bergerak dalam arah barat-timur pada ketinggian 10 m diatas permukaan bumi.</td>
            </tr>
            <tr>
              <td>10 m v-component of wind</td>
              <td>-</td>
              <td>Parameter ini merupakan komponen kecepatan angin yang bergerak dalam arah utara-selatan pada ketinggian 10 m diatas permukaan bumi.</td>
            </tr>
            <tr>
              <td>Significant height of combined wind waves and swell</td>
              <td>nc</td>
              <td>Parameter ini merupakan tinggi gelombang signifikan yang diakibatkan angin dan swell</td>
            </tr>
            <tr>
              <td>Mean Wave Direction </td>
              <td>nc</td>
              <td>Parameter ini merupakan rata-rata arah penjalaran gelombang. Nilai 0o menginterpretasikan bahwa arah gelombang berasal dari utara, sedangkan nilai 90o menginterpretasikan bahwa arah gelombang berasal dari timur. </td>
            </tr>
            <tr>
              <td>Kejadian siklon tropis</td>
              <td>csv</td>
              <td>Data ini menginformasikan setiap kejadian siklon tropis, seperti: nama siklon, lokasi, waktu, dan kecepatan angin</td>
            </tr>
            <tr>
              <td>Kejadian MJO</td>
              <td>csv</td>
              <td>Data ini menginformasikan indeks setiap fase MJO, diantaranya adalah: waktu, fase, RMM1, RMM2, dan amplitudo.</td>
            </tr>
          </table>
        </div>
        <div>
          <Form />
        </div>
      </div>
    </motion.div>
  );
}

export default Data;
