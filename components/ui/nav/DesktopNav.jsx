import { useEffect, useState } from "react";

import Link from "next/link";
import styled from "styled-components";

export const DesktopNav = () => {
  const [bgNav, setBgNav] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      window.pageYOffset > 50 ? setBgNav(true) : setBgNav(false);
    });
  }, []);

  return (
    <Container scroll={bgNav}>
      <li className="nav-item">
        <Link href="/productos" className="link">
          Productos
        </Link>
      </li>
      <li className="nav-item">
        <Link href="/contacto" className="link">
          Contacto
        </Link>
      </li>
      <li className="nav-item">
        <Link href="/acerca-de" className="link">
          Acerca de
        </Link>
      </li>
    </Container>
  );
};

const Container = styled.ul`
  display: flex;
  width: 100%;
  height: 100%;

  .nav-item {
    padding: 10px;
    list-style: none;

    .link {
      color: ${({ scroll }) => (scroll ? "#000" : "#fff")};
      text-decoration: none;
      transition: 0.3s color ease;

      &:hover {
        color: #0073bd;
      }
    }
  }
`;
