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
      flex-direction: column-reverse;
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
        height: 40px;
      }
    }
  }
`;

const Entry = () => {
  document.title = "AllJoin | Login or Register";
  return (
    <Div>
      <div className="logo">
        <A href="/">
          <img src={logoImg} alt="AllJoin" />
        </A>
      </div>
      <div className="wrapper">
        <LoginForm />
        <RegisterForm />
      </div>
    </Div>
  );
};

export default Entry;
