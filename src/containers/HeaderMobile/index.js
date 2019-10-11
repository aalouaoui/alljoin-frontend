import React from "react";
import styled from "styled-components";
import NavMobile from "./NavMobile";
import useToggle from "hooks/useToggle";
import MenuMobile from "./MenuMobile";

const StyledHeader = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  z-index: 10;
  background: ${({ theme }) => theme.black1};
  box-shadow: 0 2px 3px ${({ theme }) => theme.black2};
  @media (min-width: 971px) {
    display: none;
  }
`;

const HeaderMobile = () => {
  const [isOpen, toggle] = useToggle();
  return (
    <StyledHeader>
      <NavMobile toggle={toggle} />
      <MenuMobile isOpen={isOpen} toggle={toggle} />
    </StyledHeader>
  );
};

export default HeaderMobile;
