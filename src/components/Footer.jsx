import React from "react";
import styled from "styled-components";
import { BsFacebook } from "react-icons/bs";
import { AiFillInstagram } from "react-icons/ai";

const Footer = () => {
  return (
    <FooterContainer>
      <span>Copyright &copy; 2022 Fly high company. All rights reserved.</span>
      <ul className="links">
        <li>
          {" "}
          <a href="#hero">Home</a>
        </li>
        <li>
          {" "}
          <a href="#services">Services and payment methods</a>
        </li>
        <li>
          {" "}
          <a href="#recommend">Recommended section</a>
        </li>
      </ul>
      <ul className="social__links">
        <li>
          <BsFacebook />
        </li>
        <li>
          <AiFillInstagram />
        </li>
      </ul>
    </FooterContainer>
  );
};



const FooterContainer = styled.footer`
  display: flex;
  justify-content: space-evenly;
  background-color: #759bcc;
  padding: 2.5rem;
  border-radius: 0.5rem;
  ul {
    display: flex;
    list-style-type: none;
    gap: 2rem;
    li {
      a {
        text-decoration: none;
        color: #000;
        transition: 0.5s ease-in-out;
        &:hover {
          color: #ffffff;
        }
      }
      svg {
        font-size: 1.6rem;
        transition: 0.5s ease-in-out;
      }
      &:hover {
        color: #ffffff;
      }
    }
  }
`;

export default Footer;