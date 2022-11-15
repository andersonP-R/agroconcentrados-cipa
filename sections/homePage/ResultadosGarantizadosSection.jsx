import Image from "next/image";
import styled from "styled-components";
import { PrimaryButton } from "../../components/ui";
import { Container } from "../../styles/GlobalStyles";
import pollos from "../../public/img/pollos.jpg";
import gallinas from "../../public/img/gallinas.jpg";
import vacas from "../../public/img/vacas.jpg";
import ganado from "../../public/img/ganado.jpg";
import redWave from "../../public/img/red-wave.png";

export const ResultadosGarantizadosSection = () => {
  return (
    <Container>
      <Wrapper>
        <div className="box-1">
          <div className="box-1__description">
            <h1 className="title">Resultados garantizados</h1>
            <p className="description">
              En CIPA Agroconcentrados trabajamos para brindar los mejores
              productos de la mas alta caldidad con precios accesibles a
              nuestros clientes.
            </p>
            <PrimaryButton href="/productos">Ir a productos</PrimaryButton>
          </div>
          <div className="box-1__images">
            <Image src={pollos} layout="fill" alt="pollos" className="img" />
            <Image
              src={gallinas}
              layout="fill"
              alt="gallinas"
              className="img-2"
            />
          </div>
          <span className="mask-img">
            <Image src={redWave} layout="fill" alt="vector-2" className="img" />
          </span>
        </div>
        <div className="box-2">
          <div className="box-2__description">
            <h1 className="title">¿Necesitas ayuda?</h1>
            <p className="description">
              En CIPA Agroconcentrados nos preocupamos por mejorar día a día en
              la atención a nuestros clientes, otorgar un servicio de calidad y
              responder a cualquier inquietud que tengas.
            </p>
            <PrimaryButton href="/contacto">Ir a contacto</PrimaryButton>
          </div>
          <div className="box-2__images">
            <Image src={ganado} layout="fill" alt="pollos" className="img" />
            <Image src={vacas} layout="fill" alt="gallinas" className="img-2" />
          </div>
        </div>
      </Wrapper>
    </Container>
  );
};

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  padding-top: 20px;

  /* Box-1 and box-2 general styles */
  .box-1,
  .box-2 {
    display: flex;
    flex-direction: column;
    width: 100%;
    height: auto;
    margin-bottom: 100px;
    overflow: hidden;

    .box-1__description,
    .box-2__description {
      display: flex;
      flex-direction: column;
      width: 100%;
      height: max-content;
      gap: 20px;
      margin-bottom: 40px;

      .title {
        font-size: clamp(32px, 5vw, 42px);
      }

      .description {
        font-size: 18px;
        line-height: 30px;
      }
    }
  }

  /* Box-1 styles */
  .box-1 {
    .box-1__images {
      position: relative;
      display: flex;
      width: 300px;
      height: 350px;
      overflow: hidden;

      .img {
        width: 220px;
        height: 350px;

        @media screen and (min-width: 830px) {
          width: 400px;
          height: 615px;
        }
      }

      .img-2 {
        position: absolute;
        right: 0;
        bottom: 90px;
        width: 180px;
        height: 160px;

        @media screen and (min-width: 830px) {
          width: 330px;
          height: 290px;
        }
      }

      @media screen and (min-width: 830px) {
        width: 560px;
        height: 615px;
      }
    }

    .mask-img {
      position: absolute;
      display: block;
      width: 100%;
      height: auto;
      right: 0;
      top: 100px;
      z-index: -1;
      overflow: hidden;

      @media screen and (max-width: 830px) {
        display: none;
      }

      .img {
        width: 100%;
        height: 600px;
      }
    }

    @media screen and (min-width: 830px) {
      flex-direction: row-reverse;
      justify-content: space-between;
      align-items: flex-end;

      .box-1__description {
        padding-left: 50px;
        width: 50%;
        margin-bottom: 100px;
      }
    }
  }
  /* Box-1 styles end */

  /* Box-2 styles */
  .box-2 {
    .box-2__description {
      text-align: right;
      align-items: flex-end;
    }

    .box-2__images {
      display: flex;
    }

    @media screen and (min-width: 830px) {
      flex-direction: row;

      .box-2__description {
        width: 50%;
      }
    }

    .box-2__images {
      position: relative;
      display: flex;
      align-self: flex-end;
      width: 300px;
      height: 350px;
      overflow: hidden;

      .img {
        position: absolute;
        right: 0;
        width: 220px;
        height: 350px;

        @media screen and (min-width: 830px) {
          width: 400px;
          height: 615px;
        }
      }

      .img-2 {
        position: absolute;
        left: 0;
        bottom: 90px;
        width: 180px;
        height: 160px;

        @media screen and (min-width: 830px) {
          width: 330px;
          height: 290px;
        }
      }

      @media screen and (min-width: 830px) {
        width: 560px;
        height: 615px;
      }
    }

    @media screen and (min-width: 830px) {
      justify-content: space-between;
      align-items: flex-end;

      .box-2__description {
        padding-right: 50px;
        width: 50%;
        margin-bottom: 100px;
      }
    }
  }
  /* Box-2 styles end */
`;
