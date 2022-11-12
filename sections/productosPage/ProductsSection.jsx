import styled from "styled-components";
import { Container } from "../../styles/GlobalStyles";

export const ProductsSection = () => {
  return (
    <Container>
      <Wrapper>
        <h1 className="title">Productos disponibles</h1>
      </Wrapper>
    </Container>
  );
};

const Wrapper = styled.div`
  width: 100%;
  height: auto;
  max-width: 1200px;
  margin: 0 auto;

  .title {
    font-size: clamp(32px, 5vw, 42px);
  }
`;
