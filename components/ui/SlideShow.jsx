import { Fade } from "react-slideshow-image";
import styles from "./Slideshow.module.css";

import "react-slideshow-image/dist/styles.css";
import styled from "styled-components";

const images = [
  {
    id: 1,
    picture:
      "https://actualidadganadera.com/wp-content/uploads/2019/10/GANADO-CAMPECHE.jpg",
    alt: "imagen1",
  },
  {
    id: 2,
    picture:
      "https://agrotendencia.tv/agropedia/wp-content/uploads/2019/02/pollosengorde1.jpg",
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
      <svg
        className="wave"
        viewBox="0 0 1440 195"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M268.047 110.547C85.3123 110.547 -14 146.017 -14 214L1451 212.818V0C1451 88.0829 1256.88 110.547 1055.37 110.547H268.047Z"
          fill="#fff"
        />
      </svg>
    </SlideContainer>
  );
};

const SlideContainer = styled.div`
  position: relative;
  overflow: hidden;

  .wave {
    width: 1440px;
    height: 195px;
    position: absolute;
    bottom: 0;
    z-index: 5;

    @media screen and (max-width: 450px) {
      width: 100%;
      bottom: -75px;
    }

    @media screen and (max-width: 300px) {
      bottom: -85px;
    }
  }
`;
