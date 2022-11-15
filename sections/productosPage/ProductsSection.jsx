import Image from "next/image";
import styled from "styled-components";
import { PrimaryButton } from "../../components/ui";
import { Container } from "../../styles/GlobalStyles";

export const categorias = [
  {
    id: 1,
    title: "Ganaderia",
    image: "chiken.png",
    description:
      "Esta es la descripción de la pagina para ganaderia. El link de abajo te lleva a su respectiva page. Esta es la descripción de la pagina para ganaderia.",
    url: "ganaderia",
  },
  {
    id: 2,
    title: "Porcicultura",
    image: "chiken.png",
    description:
      "Esta es la descripción de la pagina para porcinos. El link de abajo te lleva a su respectiva page. Esta es la descripción de la pagina para ganaderia.",
    url: "porcicultura",
  },
  {
    id: 3,
    title: "Avicultura",
    image: "chiken.png",
    description:
      "Esta es la descripción de la pagina para porcinos. El link de abajo te lleva a su respectiva page. Esta es la descripción de la pagina para ganaderia.",
    url: "avicultura",
  },
  {
    id: 4,
    title: "Especies Menores",
    image: "chiken.png",
    description:
      "Esta es la descripción de la pagina para porcinos. El link de abajo te lleva a su respectiva page. Esta es la descripción de la pagina para ganaderia.",
    url: "especies-menores",
  },
];

export const ProductsSection = () => {
  return (
    <Container>
      <Wrapper>
        <h1 className="title">Productos disponibles</h1>

        <dir className="categorias">
          {categorias.map((categoria) => (
            <div key={categoria.id} className="categoria-card">
              <h2 className="categoria-card__title">{categoria.title}</h2>
              <div className="categoria-card__info">
                <div className="info-img">
                  <Image
                    src={`/img/${categoria.image}`}
                    alt={categoria.image}
                    width={300}
                    height={300}
                  />
                </div>
                <div className="info-box">
                  <p className="info-box__description">
                    {categoria.description}
                  </p>
                  <PrimaryButton
                    href={`/categorias-de-productos/${categoria.url}`}
                  >
                    Ver más
                  </PrimaryButton>
                </div>
              </div>
            </div>
          ))}
        </dir>
      </Wrapper>
    </Container>
  );
};

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: auto;
  max-width: 1200px;
  margin: 0 auto;

  .title {
    align-self: center;
    font-size: clamp(32px, 5vw, 42px);
    margin: 30px 0 40px 0;
    text-align: center;
  }

  .categorias {
    display: flex;
    flex-direction: column;
    width: 100%;
    min-height: 100vh;
    height: auto;

    /* tarjeta de cada categoria */
    .categoria-card {
      display: flex;
      flex-direction: column;
      width: 100%;
      height: auto;
      padding: 20px;
      overflow: hidden;
      margin-bottom: 50px;
      border: 1px solid #ddd;
      border-radius: 8px;

      @media screen and (min-width: 830px) {
      }

      .categoria-card__title {
        width: 100%;
        height: max-content;
        font-size: 25px;
        margin: 5px 0 30px 0;
        text-align: left;

        @media screen and (min-width: 830px) {
          margin: 10px 0 30px 0;

          text-align: center;
        }
      }

      .categoria-card__info {
        display: flex;
        flex-direction: column;

        @media screen and (min-width: 830px) {
          flex-direction: row;
          justify-content: space-between;
        }

        .info-img {
          width: auto;
          height: 100%;
          margin-bottom: 30px;
        }

        .info-box {
          width: 100%;
          height: auto;
          display: flex;
          flex-direction: column;

          @media screen and (min-width: 830px) {
            width: 60%;
            justify-content: center;
          }

          .info-box__description {
            font-size: 18px;
            line-height: 30px;
            margin-bottom: 30px;
          }
        }
      }
    }
    /* fin tarjeta de cada categoria */
  }
`;
