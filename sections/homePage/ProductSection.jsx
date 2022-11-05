import Image from "next/image";
import Link from "next/link";
import styled from "styled-components";

import vector from "../../public/img/Vector1.png";

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
    <SectionContainer>
      <div className="wrapper">
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
              <Link href="/productos" className="item-link">
                Ir a productos
              </Link>
            </div>
          ))}
        </div>
        <span className="mask-img">
          <Image
            src={vector}
            // width={1400}
            // height={800}
            layout="fill"
            alt="vector-1"
            className="img"
          />
        </span>
      </div>
    </SectionContainer>
  );
};

const SectionContainer = styled.section`
  position: relative;
  width: 100%;
  min-height: 100vh;
  height: auto;
  padding: 25px 25px;
  /* border: 1px solid red; */

  @media screen and (min-width: 830px) {
    padding: 0px 100px;
  }

  .wrapper {
    display: flex;
    flex-direction: column;
    width: 100%;
    justify-content: center;

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
        gap: 50px;
        margin: 0px 20px;
        margin-bottom: 80px;
        color: #000;
        /* border: 1px solid red; */

        .item-title {
          font-weight: bold;
          font-size: 24px;
        }

        .item-description {
          font-size: 18px;
          line-height: 30px;
        }

        .item-link {
          display: block;
          font-size: 18px;
          padding: 15px;
          border: 1px solid #000;
          color: #000;
          text-decoration: none;
          border-radius: 30px;

          &:hover {
            border-color: #0073bd;
            color: #0073bd;
          }
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
        height: 500px;
        top: 400px;
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
  }
`;
