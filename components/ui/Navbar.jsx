import React, { useEffect, useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { IconContext } from "react-icons";
import Image from "next/image";
import NextLink from "next/link";
import styled from "styled-components";

export const Navbar = () => {
  const [showMobileMenu, setShowMobileMenu] = useState(false);
  const [bgNav, setBgNav] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      window.pageYOffset > 50 ? setBgNav(true) : setBgNav(false);
    });
  }, []);

  const reloadPage = (e) => {
    e.preventDefault();
    location.reload();
  };

  return (
    <Container bgNav={bgNav}>
      <Wrapper>
        <IconContext.Provider value={{ style: { fontSize: "2em" } }}>
          <NextLink
            href="/"
            onClick={reloadPage}
            style={{ padding: "0.5rem 1rem" }}
          >
            <Image src="/img/logoCIPA.png" alt="logo" width={60} height={60} />
          </NextLink>
          <MobileIcon
            onClick={() => setShowMobileMenu(!showMobileMenu)}
            open={showMobileMenu}
          >
            {showMobileMenu ? <FaTimes style={{ fill: "#000" }} /> : <FaBars />}
          </MobileIcon>

          <Menu open={showMobileMenu}>
            <MenuItem>
              <MenuItemLink
                href="/productos"
                onClick={() => setShowMobileMenu(!showMobileMenu)}
              >
                <div>Productos</div>
              </MenuItemLink>
            </MenuItem>
            <MenuItem>
              <MenuItemLink
                href="/contacto"
                onClick={() => setShowMobileMenu(!showMobileMenu)}
              >
                <div>Contacto</div>
              </MenuItemLink>
            </MenuItem>
            <MenuItem>
              <MenuItemLink
                href="/acerca-de"
                onClick={() => setShowMobileMenu(!showMobileMenu)}
              >
                <div>Acerca de</div>
              </MenuItemLink>
            </MenuItem>
          </Menu>
        </IconContext.Provider>
      </Wrapper>
    </Container>
  );
};

export const Container = styled.div`
  width: 100%;
  height: 80px;
  background-color: ${({ bgNav }) => (bgNav ? "#fff" : "transparent")};
  position: fixed;
  z-index: 999;
  transition: 0.3s ease;
`;

export const Wrapper = styled.div`
  width: 100%;
  max-width: 1200px;
  height: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  margin: 0 auto;
`;

export const Menu = styled.ul`
  height: 100%;
  display: flex;
  justify-content: space-between;
  list-style: none;

  @media screen and (max-width: 960px) {
    background: #fff;
    position: absolute;
    left: ${({ open }) => (open ? "0" : "-100%")};
    width: 100%;
    height: 100vh;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    transition: 0.3s all ease;
  }
`;

export const MenuItem = styled.li`
  height: 100%;
  background-color: red;

  @media screen and (max-width: 960px) {
    width: 100%;
    height: 70px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

export const MenuItemLink = styled(NextLink)`
  display: flex;
  justify-content: start;
  align-items: center;
  height: 100%;
  padding: 0.5rem 1rem;
  color: #fff;
  font-size: 18px;
  transition: 0.5s all ease;
  text-decoration: none;

  &:hover {
    color: #0073bd;
    transition: 0.5s all ease;
  }

  div {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: blue;
  }

  @media screen and (max-width: 960px) {
    width: 100%;

    div {
      width: 130px;
      justify-content: left;
    }

    &:hover {
      color: #fff;
    }
  }
`;

export const MobileIcon = styled.div`
  display: none;
  margin-right: 15px;
  z-index: 999;
  background: none;

  @media screen and (max-width: 960px) {
    display: flex;
    align-items: center;
    cursor: pointer;

    svg {
      fill: white;
      margin-right: 0.5rem;
    }
  }
`;
