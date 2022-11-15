import styled from "styled-components";
import { CategoriaCard } from "../../../components/ui";
import { Container } from "../../../styles/GlobalStyles";

export const subCategoria = [
  {
    id: 1,
    title: "Pollitas Iniciación",
    image: "pollitas-iniciacion.jpg",
    description:
      "Esta es la descripción de la pagina para pollitas iniciacion. El link de abajo te lleva a su respectiva page. Esta es la descripción de la pagina para ganaderia.",
    url: "avicultura",
  },
  {
    id: 2,
    title: "Pollas Levante",
    image: "levante.jpg",
    description:
      "Esta es la descripción de la pagina para Pollas levante. El link de abajo te lleva a su respectiva page. Esta es la descripción de la pagina para ganaderia.",
    url: "avicultura",
  },
  {
    id: 3,
    title: "Jaula",
    image: "jaula.jpg",
    description:
      "Esta es la descripción de la pagina para Jaula. El link de abajo te lleva a su respectiva page. Esta es la descripción de la pagina para ganaderia.",
    url: "avicultura",
  },
  {
    id: 4,
    title: "Pollos M",
    image: "pollo-m.jpg",
    description:
      "Esta es la descripción de la pagina para Jaula. El link de abajo te lleva a su respectiva page. Esta es la descripción de la pagina para ganaderia.",
    url: "avicultura",
  },
  {
    id: 5,
    title: "Broiler M",
    image: "broiler-m.jpg",
    description:
      "Esta es la descripción de la pagina para Jaula. El link de abajo te lleva a su respectiva page. Esta es la descripción de la pagina para ganaderia.",
    url: "avicultura",
  },
];

export const AviculturaProductSection = () => {
  return (
    <Container>
      <Wrapper>
        <h1 className="title">Concentrados para avicultura</h1>

        <CategoriaCard categorias={subCategoria} />
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
  margin-top: 50px;

  .title {
    align-self: center;
    font-size: clamp(32px, 5vw, 42px);
    margin: 30px 0 40px 0;
    text-align: center;
  }
`;
