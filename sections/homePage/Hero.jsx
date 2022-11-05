import styled from "styled-components";
import { SlideShow } from "../../components/ui";
export const Hero = () => {
  return (
    <HeroContainer>
      <SlideShow />
    </HeroContainer>
  );
};

const HeroContainer = styled.div`
  width: 100%;
  height: auto;
`;
