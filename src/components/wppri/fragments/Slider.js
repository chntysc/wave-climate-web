import CardSlider from "./CardSlider";
import React, { Component } from "react";
import ReactDOM from "react-dom";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import styles from "./Slider.module.css";
// import icon_left from "../../../assets/icon_left.png";
// import icon_right from "../../../assets/icon_right.png";
import { BsFillArrowLeftCircleFill, BsFillArrowRightCircleFill } from "react-icons/bs";
import data from "./dataslide.json";

function Slider() {
  return (
    <>
      <div className={styles.slider}>
        <Carousel
          showArrows={false}
          showStatus={false}
          showIndicators={false}
          infiniteLoop={true}
          centerMode={true}
          centerSlidePercentage={62.6}
          renderArrowPrev={(clickHandler) => (
            <button className={styles.left} onClick={clickHandler}>
              <BsFillArrowLeftCircleFill className={styles.left} />
            </button>
          )}
          renderArrowNext={(clickHandler) => (
            <button className={styles.right} onClick={clickHandler}>
              <BsFillArrowRightCircleFill />
            </button>
          )}
        >
          <div>
            <CardSlider wpp={data[0].wpp} location={data[0].location} potensial={data[0].potensial} catch={data[0].catch} exploit={data[0].exploit} fish={data[0].fish} />
          </div>
          <div>
            <CardSlider wpp={data[1].wpp} location={data[1].location} potensial={data[1].potensial} catch={data[1].catch} exploit={data[1].exploit} fish={data[1].fish} />
          </div>
          <div>
            <CardSlider wpp={data[2].wpp} location={data[2].location} potensial={data[2].potensial} catch={data[2].catch} exploit={data[2].exploit} fish={data[2].fish} />
          </div>
          <div>
            <CardSlider wpp={data[3].wpp} location={data[3].location} potensial={data[3].potensial} catch={data[3].catch} exploit={data[3].exploit} fish={data[3].fish} />
          </div>
          <div>
            <CardSlider wpp={data[4].wpp} location={data[4].location} potensial={data[4].potensial} catch={data[4].catch} exploit={data[4].exploit} fish={data[4].fish} />
          </div>
          <div>
            <CardSlider wpp={data[5].wpp} location={data[5].location} potensial={data[5].potensial} catch={data[5].catch} exploit={data[5].exploit} fish={data[5].fish} />
          </div>
          <div>
            <CardSlider wpp={data[6].wpp} location={data[6].location} potensial={data[6].potensial} catch={data[6].catch} exploit={data[6].exploit} fish={data[6].fish} />
          </div>
          <div>
            <CardSlider wpp={data[7].wpp} location={data[7].location} potensial={data[7].potensial} catch={data[7].catch} exploit={data[7].exploit} fish={data[7].fish} />
          </div>
          <div>
            <CardSlider wpp={data[8].wpp} location={data[8].location} potensial={data[8].potensial} catch={data[8].catch} exploit={data[8].exploit} fish={data[8].fish} />
          </div>
          <div>
            <CardSlider wpp={data[9].wpp} location={data[9].location} potensial={data[9].potensial} catch={data[9].catch} exploit={data[9].exploit} fish={data[9].fish} />
          </div>
          <div>
            <CardSlider wpp={data[10].wpp} location={data[10].location} potensial={data[10].potensial} catch={data[10].catch} exploit={data[10].exploit} fish={data[10].fish} />
          </div>
        </Carousel>
      </div>
    </>
  );
}

export default Slider;
