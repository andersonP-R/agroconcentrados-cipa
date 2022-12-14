import Image from "next/image";
import Link from "next/link";
import styled from "styled-components";
import { PrimaryButton } from "../../components/ui";

import orangeWave from "../../public/img/orange-wave.png";
import redWave from "../../public/img/red-wave.png";

import { Container } from "../../styles/GlobalStyles";

const productItems = [
  {
    id: 1,
    title: "Maximo rendimiento",
    image: "chiken.png",
    description:
      "Nuestros productos garantizan la mayor productividad en cada etapa de los animales.",
  },
  {
    id: 2,
    title: "Productos de calidad",
    image: "calidad.png",
    description:
      "Nuestros productos son de la mas alta calidad obteniendo así resultados óptimos.",
  },
  {
    id: 3,
    title: "Modificar esta card",
    image: "calidad.png",
    description: "Modificar esta card",
  },
];

export const ProductSection = () => {
  return (
    <Container>
      <Wrapper>
        <h1 className="title">Nuestros productos</h1>
        <p className="description">
          CIPA Agroconcentrados ofrece concentrados para pollos, cerdos y
          bovinos en cada una de sus etapas, desde levante hasta la etapa de
          adultez.
        </p>

        <div className="product-cards">
          {productItems.map((item) => (
            <div key={item.id} className="item">
              <div className="item-title">{item.title}</div>
              <div className="item-image">
                <Image
                  alt={item.image}
                  src={`/img/${item.image}`}
                  width={230}
                  height={230}
                />
              </div>
              <div className="item-description">{item.description}</div>
              <PrimaryButton href="/productos">Ir a productos</PrimaryButton>
            </div>
          ))}
        </div>
        <span className="mask-img">
          <Image
            src={orangeWave}
            layout="fill"
            alt="vector-1"
            className="img"
          />
        </span>
        <span className="mask-img-2">
          <Image src={redWave} layout="fill" alt="vector-2" className="img" />
        </span>
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

  .title {
    color: #000;
    text-align: center;
    font-size: clamp(32px, 5vw, 42px);
    line-height: 40px;
    margin-bottom: 15px;

    @media screen and (min-width: 830px) {
      margin-bottom: 30px;
    }
  }

  .description {
    display: block;
    width: 100%;
    margin: 0 auto;
    line-height: 30px;
    text-align: center;
    font-size: 18px;
    color: #000;
    margin-bottom: 60px;

    @media screen and (min-width: 830px) {
      width: 70%;
      margin-bottom: 80px;
    }
  }

  .product-cards {
    display: flex;
    flex-wrap: wrap;
    width: 100%;
    justify-content: center;

    @media screen and (min-width: 830px) {
      flex-wrap: nowrap;
    }

    .item {
      display: flex;
      flex-direction: column;
      align-items: center;
      text-align: center;
      width: 100%;
      gap: 30px;
      margin: 0px 20px;
      margin-bottom: 80px;
      color: #000;

      .item-title {
        font-weight: bold;
        font-size: 25px;
      }

      .item-description {
        font-size: 18px;
        line-height: 30px;
      }
    }
  }

  .mask-img {
    position: absolute;
    width: 100%;
    height: auto;
    top: 450px;
    left: 0;
    z-index: -1;
    overflow: hidden;

    @media screen and (min-width: 830px) {
      width: 100%;
      height: 600px;
      top: 300px;
    }

    .img {
      width: 100%;
      height: 300px;

      @media screen and (min-width: 830px) {
        width: 100%;
        height: 100%;
      }
    }
  }

  .mask-img-2 {
    position: absolute;
    display: block;
    width: 100%;
    height: auto;
    bottom: 200px;
    left: 0;
    z-index: -1;
    overflow: hidden;

    @media screen and (min-width: 830px) {
      display: none;
    }

    .img {
      width: 100%;
      height: 300px;
    }
  }
`;
