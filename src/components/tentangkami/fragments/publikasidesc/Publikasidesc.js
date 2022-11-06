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
        <Publikasi
          year={data[0].year}
          writer={data[0].writer}
          title={data[0].title}
          abstract={
            <p>
              Tujuan dari <i>blue economy</i> adalah untuk menciptakan ekonomi laut secara berkelanjutan. Namun, kesenjangan pengetahuan masih ada dalam terkait pemahaman kondisi laut. Apalagi <i>platform</i> yang menyediakan informasi yang
              tersedia untuk publik masih langka. Tujuan dari riset ini adalah untuk membuat dasbor informasi yang memvisualisasikan kondisi iklim laut Indonesia. Informasi di dasbor berfokus pada Wilayah Pengelolaan Perikanan (WPP)
              Indonesia. Dasbor ini dimaksudkan agar dapat diakses oleh peneliti maupun masyarakat umum. Menggunakan dasbor ini memungkinkan ahli dan non-ahli untuk menganalisis dan menilai kondisi gelombang laut dengan mempertimbangkan
              faktor-faktor seperti siklon tropis dan Madden-Julian Oscillation (MJO). Dasbor menampilkan informasi tentang kondisi laut dan iklim di Indonesia, khususnya tinggi gelombang signifikan (TGS) dan kecepatan angin. Efek iklim
              juga dipertimbangkan dalam riset ini, seperti siklon tropis dan MJO. <i>Tools open source</i> yang digunakan untuk riset ini, yaitu Dash dari Python. Dasbor menyediakan analisis statistik dan spasial dari kumpulan data yang
              disebutkan di atas.
            </p>
          }
          citation={data[0].citation}
        />
        <div className={style.line}></div>
        <Publikasi
          year={data[1].year}
          writer={data[1].writer}
          title={data[1].title}
          abstract={
            <p>
              Alur pelayaran laut sangat penting di Indonesia dan memiliki nilai strategis dalam pembangunan nasional, antara lain berguna bagi sarana transportasi (manusia dan barang) dan aktivitas nelayan dalam mencari nafkahnya. Dinamika
              gelombang laut sebagai salah satu aspek oseanografi memainkan peranan penting dalam kelancaran kegiatan pelayaran laut tersebut. Berdasarkan kejadian kecelakaan laut di perairan Indonesia yang disebabkan kondisi gelombang laut
              dan cuaca ekstrem diketahui bahwa sebanyak 61,21 % kecelakaan terjadi pada kapal nelayan. Dalam riset ini, iklim gelombang laut dan karakteristik gelombang tinggi di 11 (sebelas) Wilayah Pengelolaan Perikanan (WPP) Indonesia
              diteliti dengan menggunakan data tinggi gelombang signifikan (TGS) dan angin dari the <i></i>European Centre for Medium-Range Weather Forecasts (ECMWF) Reanalysis version 5 (ERA5) dengan interval waktu setiap 3 (tiga) jam
              selama kurun waktu 42 tahun (1979 – 2020). Selain kajian variasi musiman tinggi gelombang laut, pengaruh siklon tropis dan Madden-Julian Oscillation (MJO) terhadap kejadian gelombang tinggi juga dianalisis di WPP tersebut.
              Berdasarkan standar acuan World Meteorological Organization (WMO, 1988), gelombang ekstrem pada penelitian ini diidentifikasi untuk TGS > 2 m. <br />
              Hasil studi menunjukkan bahwa aktivitas pelayaran di WPP yang terletak di Belahan Bumi Selatan (BBS) perlu waspada terhadap kejadian gelombang tinggi pada bulan Juni-Juli-Agustus (JJA), sedangkan WPP di Belahan Bumi Utara
              (BBU) perlu waspada pada bulan Desember-Januari-Februari (DJF). Kewaspadaan ini khususnya diperlukan bagi WPP yang terhubung langsung dengan laut lepas (<i>open sea</i>). Pada bulan JJA, WPP 572 (perairan pantai barat Sumatra)
              dan WPP 573 (perairan selatan Jawa) adalah perairan yang paling rentan terhadap kejadian gelombang tinggi, dengan probabilitas kejadian (PK) TGS > 2 m dapat mencapai 75%. Pada bulan DJF, wilayah paling rentan terhadap kejadian
              gelombang tinggi adalah WPP 711 (perairan utara Natuna; PK 40%), WPP 716 (Laut Sulawesi; PK 30%), dan WPP 573 (PK 30%). <br />
              Selama kejadian siklon tropis di BBU, WPP 572 dan WPP 573 paling rentan terhadap kejadian gelombang tinggi dengan PK masing-masing > 45% dan > 40%, sedangkan untuk kejadian siklon tropis di BBS, WPP 573 paling rentan terhadap
              kejadian gelombang tinggi (PK > 30%). Khusus untuk WPP di perairan Indonesia bagian dalam, kewaspadaan terhadap kejadian gelombang tinggi perlu dilakukan di WPP 714 (Laut Banda) dan WPP 718 (Laut Arafura) pada kejadian MJO
              fase 3, 4, dan 5 (JJA), serta WPP 712 (Laut Jawa), WPP 713 (perairan selatan Sulawesi), WPP 714, dan WPP 718 untuk kejadian MJO fase 5 (DJF). Kapal dengan panjang > 20 m atau <i>Gross Tonnage</i> (GT) > 30 direkomendasikan
              untuk digunakan ketika akan melakukan aktivitas penangkapan ikan di WPP 572 dan 573 (Mei­–Oktober) dan di WPP 711 (Desember–Januari). Informasi kondisi variasi tinggi gelombang laut baik secara spasial maupun temporal yang
              dihasilkan dari penelitian ini penting bagi keselamatan alur pelayaran, khususnya bagi aktivitas nelayan terkait dengan ukuran panjang dan GT kapal yang sebaiknya digunakan.
            </p>
          }
          citation={data[1].citation}
        />
      </>

      {/* <Publikasi year={PublikasiData2021.year} writer={PublikasiData2021.writer} title={PublikasiData2021.title} abstract={PublikasiData2021.abstract} /> */}
    </>
  );
}

export default Publikasidesc;
