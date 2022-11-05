import { useState } from "react";
import { FaFacebook, FaInstagram } from "react-icons/fa";

import Link from "next/link";
import styled from "styled-components";
import { HamburguerButton } from "./HamburguerButton";

export const MobileNav = () => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => {
    setOpen(!open);
  };
  return (
    <Container>
      <div className="burguer-button">
        <HamburguerButton open={open} handleOpen={handleOpen} />
      </div>

      <div className={`mask ${open ? "active" : ""}`}></div>

      <ul className={`nav-items ${open ? "active" : ""}`}>
        <span className="nav-title">Menú</span>

        <div className="nav-info">
          <span>¿Necesitas ayuda?</span>
          <span>WhatsApp +57 000222 334 43</span>
        </div>

        <li className="item">
          <Link onClick={handleOpen} href="/" className="link">
            Inicio
          </Link>
        </li>
        <li className="item">
          <Link onClick={handleOpen} href="/productos" className="link">
            Productos
          </Link>
        </li>
        <li className="item">
          <Link onClick={handleOpen} href="/contacto" className="link">
            Contacto
          </Link>
        </li>
        <li className="item">
          <Link onClick={handleOpen} href="/acerca-de" className="link">
            Acerca de
          </Link>
        </li>

        <div className="redes">
          <a href="#" target="_blank" rel="noreferrer">
            <FaFacebook />
          </a>
          <a href="#" target="_blank" rel="noreferrer">
            <FaInstagram />
          </a>
        </div>
      </ul>
    </Container>
  );
};

const Container = styled.div`
  .mask {
    display: none;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100vh;
    background: #0000005a;
    z-index: -1;

    &.active {
      display: block;
    }
  }

  .nav-items {
    position: absolute;
    top: 0;
    width: 75%;
    height: 100vh;
    padding-top: 40px;
    left: -100%;
    transition: 0.3s all ease-in-out;
    background-color: #fff;
    z-index: 10;

    .nav-title {
      display: block;
      width: 100%;
      height: 60px;
      margin: 0 auto;
      text-align: center;
      font-size: 20px;
      text-transform: uppercase;
      border-bottom: 2px solid #000;
    }

    .nav-info {
      display: flex;
      flex-direction: column;
      justify-content: center;
      padding-left: 22px;
      width: 100%;
      height: 100px;
      gap: 10px;
      border-bottom: 2px solid #ddd;
    }

    .item {
      display: flex;
      align-items: center;
      width: 100%;
      height: 70px;
      padding-left: 22px;
      border-bottom: 2px solid #ddd;

      .link {
        text-decoration: none;
        color: #000;
      }
    }

    .redes {
      position: absolute;
      bottom: 0;
      display: flex;
      align-items: center;
      width: 100%;
      height: auto;
      padding: 20px;

      a {
        font-size: 40px;
        margin-right: 20px;

        svg {
          fill: #169bee;
        }

        &:last-child {
          svg {
            fill: #e62121;
          }
        }
      }
    }
  }

  .nav-items.active {
    left: 0;
  }
`;
