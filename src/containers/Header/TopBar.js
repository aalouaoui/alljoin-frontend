import React from "react";
import styled from "styled-components";
import { A } from "hookrouter";
import logoImg from "assets/img/logo.png";
import SearchForm from "./SearchForm";
import Button from "components/Button";

const Div = styled.div`
  height: 70px;
  padding: 10px 30px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  div {
    display: flex;
    align-items: center;
  }

  .logo {
    margin-right: 30px;
    img {
      height: 50px;
    }
  }
`;

const TopBar = () => {
  return (
    <Div>
      <div>
        <A href="/" className="logo">
          <img src={logoImg} alt="AllJoin" />
        </A>
        <SearchForm />
      </div>
      <div>
        <Button href="/login" apply="white">
          LOGIN
        </Button>
        <Button href="/entry" apply="outline">
          SIGN UP
        </Button>
      </div>
    </Div>
  );
};

export default TopBar;
