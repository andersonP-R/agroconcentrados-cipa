import { useState, useEffect } from "react";
import styled from "styled-components";

export const HamburguerButton = ({ open, handleOpen }) => {
  const [bgNav, setBgNav] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      window.pageYOffset > 50 ? setBgNav(true) : setBgNav(false);
    });
  }, []);

  return (
    <Burguer bg={bgNav}>
      <div
        onClick={handleOpen}
        className={`icon nav-icon-5 ${open ? "open" : ""}`}
      >
        <span></span>
        <span></span>
        <span></span>
      </div>
    </Burguer>
  );
};

const Burguer = styled.div`
  .nav-icon-5 {
    width: 32px;
    height: 30px;
    margin: 10px 10px;
    position: relative;
    cursor: pointer;
    display: inline-block;
  }
  .nav-icon-5 span {
    background-color: ${({ bg }) => (bg ? "#000" : "#fff")};
    position: absolute;
    border-radius: 2px;
    transition: 0.3s cubic-bezier(0.8, 0.5, 0.2, 1.4);
    width: 100%;
    height: 3px;
    transition-duration: 300ms;
  }
  .nav-icon-5 span:nth-child(1) {
    top: 0px;
    left: 0px;
  }
  .nav-icon-5 span:nth-child(2) {
    top: 13px;
    left: 0px;
    opacity: 1;
  }
  .nav-icon-5 span:nth-child(3) {
    bottom: 0px;
    left: 0px;
  }

  .nav-icon-5.open span:nth-child(1) {
    transform: rotate(45deg);
    top: 13px;
    background-color: #fb2020;
  }
  .nav-icon-5.open span:nth-child(2) {
    opacity: 0;
  }
  .nav-icon-5.open span:nth-child(3) {
    transform: rotate(-45deg);
    top: 13px;
    background-color: #fb2020;
  }
`;
