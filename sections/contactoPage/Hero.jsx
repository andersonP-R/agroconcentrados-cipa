import Styles from "./heroStyles.module.css";

export const Hero = () => {
  return (
    <div className={Styles.heroContainer}>
      <div className={Styles.wrapper}>
        <div className={Styles.box}>
          <h2 className={Styles.title}>Cuentanos en que te podemos ayudar</h2>
          <p className={Styles.description}>
            Para nosotros es importante tu opinión
          </p>
        </div>
      </div>
    </div>
  );
};
