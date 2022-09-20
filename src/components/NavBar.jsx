import React from "react";
import styled from "styled-components";
import logo from "../assets/logo.png";

const NavBar = () => {
  return (
    <Nav>
      <div className="brand">
        <div className="container">
          <img src={logo} alt="logo-fly-high" />
        </div>
        <div className="toggle"></div>
      </div>
      <ul>
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
      <button>Login</button>
    </Nav>
  );
};



const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  .brand {
    .container {
      cursor: pointer;
      display: flex;
      justify-content: center;
      align-items: center;
      gap: 0.4rem;
    }
    .toggle {
      display: none;
    }
  }
  ul {
    display: flex;
    list-style-type: none;
    gap: 1rem;
    li {
      a {
        font-size: 1.4rem;
        text-decoration: none;
        color: #000000;
        transition: 0ms ease-in-out;
        &:hover {
          color: #1717e8;
        }
      }
    }
  }
  button {
    padding: 1.7rem 2.5rem;
    cursor: pointer;
    border-radius: 1rem;
    border: none;
    color: white;
    background-color: #000000;
    text-transform: uppercase;
    font-size: 1.3 rem;
    letter-spacing: 0.1rem;
    transition: 0.3s ease-in-out;
    &:hover {
      background-color: #759bcc;
    }
  }
  img {
    width: 125px;
    height: 130px;
  }
`;

export default NavBar;