import React, { useState } from "react";
import styled from "styled-components";
import topLogo from "../assets/toTop.png";
export default function ScrollToTop() {
  const [scrollState, setScrollState] = useState(false);
  const toTop = () => {
    window.scrollTo({ top: 0 });
  };
  window.addEventListener("scroll", () => {
    window.pageYOffset > 200 ? setScrollState(true) : setScrollState(false);
  });
  return (
    <ToTop onClick={toTop} scrollState={scrollState}>
      <img src={topLogo} alt="" />
    </ToTop>
  );
}

const ToTop = styled.div`
  display: ${({ scrollState }) => (scrollState ? "block" : "none")};
  position: fixed;
  cursor: pointer;
  z-index: 10;
  bottom: 1.3rem;
  right: 1.9rem;
  img {
    height: 2.8rem;
    border-radius: 1.4rem;
  }
  border-radius: 2rem;
  background-color: #000000;
  padding: 1rem;
`;
