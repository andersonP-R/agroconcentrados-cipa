import Styles from "./heroStyles.module.css";

export const HeroAvicultura = () => {
  return (
    <div className={Styles.heroContainer}>
      <div className={Styles.wrapper}>
        <div className={Styles.box}>
          <h2 className={Styles.title}>Concentrados para avicultura</h2>
          <p className={Styles.description}>
            Concentrados para el sector avicola "modificar esta card"
          </p>
        </div>
      </div>
    </div>
  );
};
