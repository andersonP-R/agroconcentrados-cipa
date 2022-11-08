import Image from "next/image";
import styled from "styled-components";
import { PrimaryButton } from "../../components/ui";
import { Container } from "../../styles/GlobalStyles";
import pollos from "../../public/img/pollos.jpg";
import gallinas from "../../public/img/gallinas.jpg";

export const ResultadosGarantizadosSection = () => {
  return (
    <Container>
      <Wrapper>
        <div className="box box-1">
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
        </div>
        <div className="box box-2">
          <div className="box-2__description">
            <h1 className="title">¿Necesitas ayuda?</h1>
            <p className="description">
              En CIPA Agroconcentrados nos preocupamos por mejorar día a día en
              la atención a nuestros clientes, otorgar un servicio de calidad y
              responder a cualquier inquietud que tengas.
            </p>
            <PrimaryButton href="/contacto">Ir a contacto</PrimaryButton>
          </div>
          <div className="box-2__images">imagenes</div>
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

  .box-1,
  .box-2 {
    display: flex;
    flex-direction: column;
    width: 100%;
    height: auto;
    margin-bottom: 50px;

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

  .box-1 {
    .box-1__images {
      position: relative;
      display: flex;
      width: 90%;
      height: 350px;
      overflow: hidden;
      border: 1px solid red;

      .img {
        width: 220px;
        height: 350px;
      }

      .img-2 {
        position: absolute;
        right: 0;
        bottom: 60px;
        width: 190px;
        height: 160px;
      }
    }
    @media screen and (min-width: 830px) {
      flex-direction: row-reverse;

      .box-1__description {
        width: 50%;
      }
    }
  }

  .box-2 {
    .box-2__description {
      text-align: right;
      align-items: flex-end;
    }

    .box-2__images {
      display: flex;
      /* width: 100%; */
    }

    @media screen and (min-width: 830px) {
      flex-direction: row;

      .box-2__description {
        width: 50%;
      }
    }
  }
`;
