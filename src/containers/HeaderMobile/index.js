import React from "react";
import styled from "styled-components";
import NavMobile from "./NavMobile";

const StyledHeader = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  z-index: 100;
  background: ${({ theme }) => theme.black1};
  box-shadow: 0 2px 3px ${({ theme }) => theme.black2};
  @media (min-width: 910px) {
    display: none;
  }
`;

const HeaderMobile = () => {
  return (
    <StyledHeader>
      <NavMobile />
    </StyledHeader>
  );
};

export default HeaderMobile;
