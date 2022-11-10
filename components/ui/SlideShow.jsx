import { Fade } from "react-slideshow-image";
import styles from "./Slideshow.module.css";

import "react-slideshow-image/dist/styles.css";
import styled from "styled-components";
import Image from "next/image";
import wave from "../../public/img/wave.png";

const images = [
  {
    id: 1,
    picture: "/img/gallina-3.jpg",
    alt: "imagen1",
  },
  {
    id: 2,
    picture: "/img/pastoreo-3.jpg",
    alt: "imagen2",
  },
];

const buttonStyle = {
  width: "30px",
  background: "none",
  border: "0px",
  zIndex: "5",
};

const properties = {
  prevArrow: (
    <button style={{ ...buttonStyle, paddingLeft: "0px" }}>
      <svg
        width="40"
        height="40"
        viewBox="0 0 50 50"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M30.8334 12.8242L19.1667 25.5003L30.8334 37.8242"
          stroke="white"
          strokeWidth="3"
        />
      </svg>
    </button>
  ),
  nextArrow: (
    <button style={{ ...buttonStyle, paddingRight: "40px" }}>
      <svg
        width="40"
        height="40"
        viewBox="0 0 50 50"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M19.1663 37.5L30.833 24.8239L19.1663 12.5"
          stroke="white"
          strokeWidth="3"
        />
      </svg>
    </button>
  ),
};

export const SlideShow = () => {
  return (
    <SlideContainer>
      <Fade easing="ease" duration={5000} {...properties}>
        {images.map((image) => {
          return (
            <div key={image.id} className={styles["each-slide"]}>
              <div
                style={{
                  backgroundImage: `url(${image.picture})`,
                  backgroundSize: "cover",
                }}
              ></div>
            </div>
          );
        })}
      </Fade>

      {/* mask */}
      <span className="mask-img">
        <Image
          src={wave}
          // width={1400}
          // height={800}
          layout="fill"
          alt="wave-1"
          className="img"
        />
      </span>
    </SlideContainer>
  );
};

const SlideContainer = styled.div`
  position: relative;
  overflow: hidden;

  .mask-img {
    position: absolute;
    width: 100%;
    height: auto;
    bottom: -10px;
    z-index: 5;
    overflow: hidden;

    @media screen and (min-width: 575px) {
      width: 100%;
      height: auto;
    }

    .img {
      width: 100%;
      height: 100px;

      @media screen and (min-width: 575px) {
        height: 150px;
      }
    }
  }
`;
