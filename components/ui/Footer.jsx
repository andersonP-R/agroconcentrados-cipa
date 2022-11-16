import Link from "next/link";
import Image from "next/image";
import styled from "styled-components";
import { FaFacebook, FaInstagram } from "react-icons/fa";

export const Footer = () => {
  return (
    <FooterContainer>
      <Wrapper>
        <div className="footer-section-1">
          <h2 className="title">Conectate con nosotros</h2>
          <p className="description">
            Síguenos en nuestras redes sociales para que te enteres de todas la
            novedades.
          </p>
          <div className="redes">
            <Link
              href="https://www.facebook.com/people/Agroconcentrados-Cipa/100067381966824/"
              target="_blank"
              legacyBehavior
            >
              <a>
                <FaFacebook />
              </a>
            </Link>
            <Link href="#" target="_blank" legacyBehavior>
              <a>
                <FaInstagram />
              </a>
            </Link>
          </div>
        </div>
        <div className="footer-section-2">
          <div className="info">
            <span className="derechos-info">
              Todos los derechos reservados{" "}
              <strong>CIPA Agroconcentrados</strong>{" "}
            </span>
            <span className="politicas-link">
              <Link href="/politica-privacidad" className="link">
                Politica de privacidad
              </Link>
            </span>
            <span className="llamanos-link">
              <Link href="/contacto" className="link">
                Llamanos
              </Link>
            </span>
            <span className="direccion-info">
              Calle n No n-n La PLata Huila
            </span>
          </div>

          <Link href="/" className="logo">
            <Image
              src="/img/logoCIPA.png"
              alt="logo"
              width={100}
              height={100}
            />
          </Link>
        </div>
      </Wrapper>
    </FooterContainer>
  );
};

const FooterContainer = styled.footer`
  position: relative;
  width: 100%;
  height: auto;
  background-color: #0073bd;
`;

const Wrapper = styled.div`
  width: 100%;
  height: auto;

  .footer-section-1 {
    display: flex;
    flex-direction: column;
    gap: 25px;
    text-align: center;
    padding: 40px 25px;
    color: #fff;

    .title {
      font-size: clamp(30px, 5vw, 42px);
    }

    .description {
      font-size: 18px;
      line-height: 30px;
    }

    .redes {
      font-size: 2rem;

      a {
        margin-right: 30px;

        &:last-child {
          margin-right: 0px;
        }

        svg {
          fill: #fff;
        }
      }
    }
  }

  .footer-section-2 {
    width: 100%;
    display: flex;
    flex-direction: column-reverse;
    align-items: center;
    justify-content: center;
    background-color: #fff;

    @media screen and (min-width: 830px) {
      flex-direction: row;
      justify-content: space-between;
      padding: 30px 30px;
    }

    .info {
      display: flex;
      flex-direction: column;
      align-items: center;
      text-align: center;
      gap: 25px;
      padding: 20px 25px;
      margin-bottom: 30px;
      color: #000;

      @media screen and (min-width: 830px) {
        align-items: flex-start;
        text-align: left;
        justify-content: space-between;
        margin-bottom: 0px;
      }

      .derechos-info {
        font-size: 16px;
        line-height: 25px;
      }

      .politicas-link {
        .link {
          text-decoration: none;
          color: #000;
        }
      }

      .llamanos-link {
        .link {
          text-decoration: none;
          color: #000;
        }
      }
    }

    .logo {
      padding-top: 30px;

      @media screen and (min-width: 830px) {
        padding-top: 0px;
      }
    }
  }
`;
