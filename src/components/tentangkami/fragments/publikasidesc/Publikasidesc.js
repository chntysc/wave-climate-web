import React from "react";
import Publikasi from "./Publikasi";
//import { PublikasiData } from "./PublikasiData2021";
// import { PublikasiData } from "./PublikasiData2022";
import data from "./datapublikasi.json";
import style from "./Publikasidesc.module.css";

function Publikasidesc() {
  return (
    <>
      <>
        {/* {data.map((data2022, key) => {
          return <Publikasi key={key} year={data2022.year} writer={data2022.writer} title={data2022.title} abstract={data2022.abstract} />;
        })} */}
        <Publikasi year={data[0].year} writer={data[0].writer} title={data[0].title} abstract={data[0].abstract} citation={data[0].citation} />
        <div className={style.line}></div>
        <Publikasi year={data[1].year} writer={data[1].writer} title={data[1].title} abstract={data[1].abstract} citation={data[1].citation} />
      </>

      {/* <Publikasi year={PublikasiData2021.year} writer={PublikasiData2021.writer} title={PublikasiData2021.title} abstract={PublikasiData2021.abstract} /> */}
    </>
  );
}

export default Publikasidesc;
