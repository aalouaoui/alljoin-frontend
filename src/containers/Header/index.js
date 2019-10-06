import React from "react";
import styled from "styled-components";
import TopBar from "./TopBar";
import Nav from "./Nav";

const StyledHeader = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  height: 120px;
  background: ${({ theme }) => theme.bg};
  box-shadow: 0 2px 3px ${({ theme }) => theme.darkBg};
`;

const Header = () => {
  return (
    <StyledHeader>
      <TopBar />
      <Nav />
    </StyledHeader>
  );
};

export default Header;
