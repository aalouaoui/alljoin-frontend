import React from "react";
import styled from "styled-components";
import { A } from "hookrouter";

const StyledNav = styled.nav`
  height: 50px;
  background: #1faced;
`;

const Nav = () => {
  return (
    <StyledNav>
      Nav
      <A href="/about" />
    </StyledNav>
  );
};

export default Nav;
