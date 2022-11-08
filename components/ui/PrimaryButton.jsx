import Link from "next/link";
import styled from "styled-components";

export const PrimaryButton = ({ children, href }) => {
  return <LinkButton href={href}>{children}</LinkButton>;
};

const LinkButton = styled(Link)`
  display: block;
  width: max-content;
  padding: 15px;
  border: 1px solid #000;
  border-radius: 25px;
  font-size: 18px;
  color: #000;
  text-decoration: none;

  @media screen and (min-width: 830px) {
    &:hover {
      border-color: #0073bd;
      color: #0073bd;
    }
  }
`;
