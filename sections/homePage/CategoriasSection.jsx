import Image from "next/image";
import styled from "styled-components";
import { PrimaryButton } from "../../components/ui";
import greenWave from "../../public/img/green-wave.png";

const categorias = [
  {
    id: 1,
    title: "Avicultura",
    img: "chiken.png",
    url: "avicultura",
  },
  {
    id: 2,
    title: "Porcicultura",
    img: "chiken.png",
    url: "porcicultura",
  },
  {
    id: 3,
    title: "Ganaderia",
    img: "chiken.png",
    url: "ganaderia",
  },
  {
    id: 4,
    title: "Especies menores",
    img: "chiken.png",
    url: "especies-menores",
  },
];

export const CategoriasSection = () => {
  return (
    <CategoriasContainer>
      <Wrapper>
        <h1 className="title">Categorias de productos</h1>
        <div className="categories">
          {categorias.map((categoria) => (
            <div key={categoria.id} className="categoria-card">
              <Image
                src={`/img/${categoria.img}`}
                width={250}
                height={250}
                alt={categoria.title}
              />
              <h3 className="card-title">{categoria.title}</h3>
              <PrimaryButton href={`/categorias-de-productos/${categoria.url}`}>
                Ver más
              </PrimaryButton>
            </div>
          ))}
        </div>
        <span className="swipe-indicator">Desliza</span>
        <span className="mask-img">
          <Image src={greenWave} layout="fill" alt="vector-1" className="img" />
        </span>
      </Wrapper>
    </CategoriasContainer>
  );
};

export const CategoriasContainer = styled.section`
  position: relative;
  width: 100%;
  min-height: 100vh;
  height: auto;

  @media screen and (min-width: 830px) {
    padding: 0px 100px;
    margin-bottom: 100px;
  }
`;

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 20px;
  width: 100%;
  max-width: 1200;
  margin: 0 auto;

  .title {
    text-align: center;
    font-size: clamp(32px, 5vw, 42px);
    margin-bottom: 15px;
  }

  .categories {
    display: flex;
    width: 100%;
    max-width: 1200px;
    overflow-x: scroll;
    scroll-snap-type: x mandatory;

    @media screen and (min-width: 1100px) {
      justify-content: center;
      overflow-x: visible;
      flex-wrap: wrap;
    }

    .categoria-card {
      display: flex;
      flex-direction: column;
      align-items: center;
      width: max-content;
      gap: 20px;
      margin: 10px 20px;
      padding: 20px;
      text-align: center;
      scroll-snap-align: center;
      border: 1px solid #000;
      border-radius: 10px;

      .card-title {
        text-transform: capitalize;
        font-size: 28px;
      }
    }
  }

  .swipe-indicator {
    display: block;
    font-size: 18px;

    @media screen and (min-width: 1100px) {
      display: none;
    }
  }

  .mask-img {
    position: absolute;
    width: 100%;
    height: auto;
    top: 200px;
    left: 0;
    z-index: -1;
    overflow: hidden;

    @media screen and (min-width: 830px) {
      width: 100%;
      height: 600px;
      top: 100px;
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
`;
