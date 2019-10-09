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
  > div {
    display: flex;
    align-items: stretch;
    justify-content: center;
    width: 100%;
    flex: 1;
  }
  .logo {
    margin: 10px 0 15px 30px;
    display: inline-block;
    img {
      height: 50px;
    }
  }
`;

const Entry = () => {
  document.title = "AllJoin | Login or Register";
  return (
    <Div>
      <A href="/" className="logo">
        <img src={logoImg} alt="AllJoin" />
      </A>
      <div>
        <LoginForm />
        <RegisterForm />
      </div>
    </Div>
  );
};

export default Entry;
