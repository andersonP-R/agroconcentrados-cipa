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
        <Link href="/" className="link">
          Inicio
        </Link>
      </li>
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
      padding: 10px;
    }

    .link {
      background: linear-gradient(to right, #000000, #000000),
        linear-gradient(to right, #fff, #0073bd, #54a9dd);
      background-size: 0% 3px, 0 3px;
      background-position: 100% 100%, 0 100%;
      background-repeat: no-repeat;
      transition: background-size 400ms;
    }

    .link:hover {
      background-size: 0 3px, 100% 3px;
    }
  }
`;
