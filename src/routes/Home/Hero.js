import React, { memo } from "react";
import styled from "styled-components";
import heroBg from "assets/img/home_hero.jpg";
import Button from "components/Button";

const Div = styled.div`
  height: calc(100vh - 120px);
  background: linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)), url(${heroBg});
  background-size: cover;
  background-position: center;
  background-attachment: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  h1 {
    line-height: 1.5;
    font-weight: 300;
  }
  a {
    margin-top: 15px;
  }
`;

const Hero = () => (
  <Div>
    <div>
      <h1>One Place to manage, publish, join, work in...</h1>
      <h1>All types of events</h1>
      <Button href="/entry">Get Started Now</Button>
    </div>
  </Div>
);

export default memo(Hero);
