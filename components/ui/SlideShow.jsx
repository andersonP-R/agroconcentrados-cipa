import { Slide } from "react-slideshow-image";
import styles from "./Slideshow.module.css";

import "react-slideshow-image/dist/styles.css";

const images = [
  {
    id: 1,
    picture:
      "https://www.bacanika.com/images/4.0_BACANIKA/BIENESTAR/animales_apoyo/ANIMALES2.jpg",
    alt: "imagen1",
  },
  {
    id: 2,
    picture:
      "https://www.republica.com/wp-content/uploads/2022/09/Un-perro-abandonado-en-un-refugio-900x900.jpg",
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
    <button style={{ ...buttonStyle, paddingLeft: "10px" }}>
      <svg
        width="20"
        height="44"
        viewBox="0 0 21 44"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M18.5 42L4 22L18.5 2" stroke="white" strokeWidth="4" />
      </svg>
    </button>
  ),
  nextArrow: (
    <button style={{ ...buttonStyle, paddingRight: "10px" }}>
      <svg
        width="20"
        height="40"
        viewBox="0 0 21 40"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M3 0L17.5 20L3 40" stroke="white" strokeWidth="4" />
      </svg>
    </button>
  ),
};

export const SlideShow = () => {
  return (
    <Slide easing="ease" duration={5000} indicators {...properties}>
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
    </Slide>
  );
};
