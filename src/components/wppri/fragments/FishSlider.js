import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import image_fish from "../../../assets/image_fish.png";
import { BiChevronLeftCircle, BiChevronRightCircle } from "react-icons/bi";
import styles from "./FishSlider.module.css";

function FishSlider() {
  return (
    <>
      <div className={styles.slide}>
        <Carousel
          showArrows={false}
          showStatus={false}
          showThumbs={false}
          showIndicators={false}
          infiniteLoop={true}
          centerMode={true}
          centerSlidePercentage={30}
          useKeyboardArrows={true}
          renderArrowPrev={(clickHandler) => (
            <button onClick={clickHandler}>
              <BiChevronLeftCircle />
            </button>
          )}
          renderArrowNext={(clickHandler) => (
            <button onClick={clickHandler}>
              <BiChevronRightCircle />
            </button>
          )}
        >
          <img style={{ width: "5vw" }} src={image_fish} />
          <img style={{ width: "5vw" }} src={image_fish} />
          <img style={{ width: "5vw" }} src={image_fish} />
          <img style={{ width: "5vw" }} src={image_fish} />
          <img style={{ width: "5vw" }} src={image_fish} />
          <img style={{ width: "5vw" }} src={image_fish} />
          <img style={{ width: "5vw" }} src={image_fish} />
          <img style={{ width: "5vw" }} src={image_fish} />
          <img style={{ width: "5vw" }} src={image_fish} />
          <img style={{ width: "5vw" }} src={image_fish} />
          <img style={{ width: "5vw" }} src={image_fish} />
          <img style={{ width: "5vw" }} src={image_fish} />
          <img style={{ width: "5vw" }} src={image_fish} />
          <img style={{ width: "5vw" }} src={image_fish} />
          <img style={{ width: "5vw" }} src={image_fish} />
        </Carousel>
      </div>
    </>
  );
}

export default FishSlider;
