import React, { useState } from "react";
import styled from "styled-components";
import topLogo from "../assets/toTop.png";

const ScrollToTop = () => {
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
  bottom: 2rem;
  right: 2rem;
  img {
    height: 3.7rem;
    border-radius: 1.6rem;
  }
`;

export default ScrollToTop;