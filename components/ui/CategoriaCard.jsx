import Image from "next/image";
import styled from "styled-components";
import { PrimaryButton } from "../../components/ui";

export const CategoriaCard = ({ categorias }) => {
  return (
    <Wrapper>
      <dir className="categorias">
        {categorias.map((categoria) => (
          <div key={categoria.id} className="categoria-card">
            <h2 className="categoria-card__title">{categoria.title}</h2>
            <div className="categoria-card__info">
              <div className="info-img">
                <Image
                  src={`/img/${categoria.image}`}
                  alt={categoria.image}
                  width={250}
                  height={300}
                />
              </div>
              <div className="info-box">
                <p className="info-box__description">{categoria.description}</p>
                <PrimaryButton href={`/contanto`}>LLamar</PrimaryButton>
              </div>
            </div>
          </div>
        ))}
      </dir>
    </Wrapper>
  );
};

const Wrapper = styled.div`
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
        margin: 5px 0 0 0;
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
          display: flex;
          align-items: center;
          justify-content: center;
          width: auto;
          height: 100%;
          margin-bottom: 30px;
          overflow: hidden;
          border: 1px solid red;

          @media screen and (min-width: 830px) {
            width: 40%;
          }
        }

        .info-box {
          display: flex;
          width: 100%;
          height: auto;
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
