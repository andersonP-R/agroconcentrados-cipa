import Styles from "./heroStyles.module.css";

export const HeroGanaderia = () => {
  return (
    <div className={Styles.heroContainer}>
      <div className={Styles.wrapper}>
        <div className={Styles.box}>
          <h2 className={Styles.title}>Concentrados para ganaderia</h2>
          <p className={Styles.description}>
            Concentrados para el sector ganaderia "modificar esta card"
          </p>
        </div>
      </div>
    </div>
  );
};
