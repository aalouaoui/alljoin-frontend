import React from "react";
import styled from "styled-components";
import { A } from "hookrouter";
import logoImg from "assets/img/logo.png";
import { MenuIcon } from "components/Icons";
import Button from "components/Button";

const Nav = styled.nav`
  height: 100%;
  max-width: 100vw;
  padding: 10px 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  .centner {
    width: 50px;
    flex: 1 1;
    flex-basis: 50px;
    min-width: 0;
  }
  .logo img {
    height: 50px;
  }
  @media (max-width: 640px) {
    padding: 10px 10px;
    .logo img {
      height: 40px;
    }
  }
  @media (max-width: 375px) {
    .centner:first-child {
      flex: initial;
      width: auto;
      flex-basis: auto;
      margin-right: 10px;
    }
  }
`;

const NavMobile = () => {
  return (
    <Nav>
      <div className="centner">
        <MenuIcon height="30px" />
      </div>
      <A href="/" className="logo">
        <img src={logoImg} alt="AllJoin" />
      </A>
      <div className="centner" style={{ textAlign: "right" }}>
        <Button href="/register" apply="outline">
          SIGN UP
        </Button>
      </div>
    </Nav>
  );
};

export default NavMobile;
