import React from "react";
import styled from "styled-components";
import TopBar from "./TopBar";
import Nav from "./Nav";

const StyledHeader = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 10;
  background: ${({ theme }) => theme.black1};
  box-shadow: 0 2px 3px ${({ theme }) => theme.black2};
  @media (max-width: 970px) {
    display: none;
  }
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
