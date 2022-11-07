import Link from "next/link";
import styled from "styled-components";
import { Container } from "../../styles/GlobalStyles";
import Styles from "./cotizacionStyles.module.css";

export const CotizacionSection = () => {
  return (
    <section className={Styles.container}>
      <div className={Styles.wrapper}>
        <div className={Styles.infoBox}>
          <h1 className={Styles.BoxTitle}>¿Necesitas una contización?</h1>
          <Link href="/contacto" className={Styles.link}>
            Click aqui
          </Link>
        </div>
      </div>
      <span className={Styles.mask}></span>
    </section>
  );
};
