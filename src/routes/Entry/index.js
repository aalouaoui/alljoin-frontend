import React from "react";
import styled from "styled-components";
import { A } from "hookrouter";
import logoImg from "assets/img/logo.png";
import LoginForm from "./LoginForm";
import RegisterForm from "./RegisterForm";

const Div = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: stretch;
  align-items: flex-start;
  height: 100vh;
  .wrapper {
    display: flex;
    align-items: stretch;
    justify-content: center;
    flex-direction: row-reverse;
    width: 100%;
    flex: 1;
  }
  .logo {
    padding: 10px 0 15px 30px;
    img {
      height: 50px;
    }
  }
  @media (max-width: 910px) {
    height: auto;
    min-height: 100vh;
    padding-top: 60px;
    .wrapper {
      flex-direction: ${({ isLogin }) => (isLogin ? "column-reverse" : "column")};
    }
    .logo {
      background: ${({ theme }) => theme.black0};
      padding: 10px 30px;
      position: fixed;
      top: 0;
      left: 0;
      right: 0;
      z-index: 10;
      text-align: center;
      img {
        height: 50px;
      }
    }
  }
  @media (max-width: 640px) {
    .logo img {
      height: 40px;
    }
  }
`;

const Entry = () => {
  document.title = "AllJoin | Login or Register";
  const isLogin = window.location.pathname === "/login";
  return (
    <Div isLogin={isLogin}>
      <div className="logo">
        <A href="/">
          <img src={logoImg} alt="AllJoin" />
        </A>
      </div>
      <div className="wrapper">
        <RegisterForm />
        <LoginForm />
      </div>
    </Div>
  );
};

export default Entry;
