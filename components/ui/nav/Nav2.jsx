import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";

import styled from "styled-components";
import { DesktopNav } from "./DesktopNav";
import { MobileNav } from "./MobileNav";

export const Nav2 = () => {
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
    <NavContainer bg={bgNav}>
      <Wrapper>
        <Link href="/" onClick={reloadPage}>
          <Image src="/img/logoCIPA.png" alt="logo" width={60} height={60} />
        </Link>

        <nav>
          <div className="mobile-nav">
            <MobileNav />
          </div>
          <div className="desktop-nav">
            <DesktopNav />
          </div>
        </nav>
      </Wrapper>
    </NavContainer>
  );
};

const NavContainer = styled.header`
  position: fixed;
  width: 100%;
  height: 80px;
  transition: 0.3s all ease;
  background-color: ${({ bg }) => (bg ? "#fff" : "transparent")};
  z-index: 10;
`;

const Wrapper = styled.div`
  height: auto;
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 25px;

  .mobile-nav {
    display: none;
    @media screen and (max-width: 700px) {
      display: block;
    }
  }

  .desktop-nav {
    display: block;

    @media screen and (max-width: 700px) {
      display: none;
    }
  }
`;
