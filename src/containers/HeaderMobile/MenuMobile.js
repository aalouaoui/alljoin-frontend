import React from "react";
import styled, { createGlobalStyle } from "styled-components";
import Button from "components/Button";
import MenuListItem from "./MenuListItem";
import categories from "utils/categories";
import SearchFormMobile from "./SearchFormMobile";

const Div = styled.div`
  display: none;
  &.open {
    display: block;
  }
  right: 0;
  &,
  .menuWrapper {
    position: fixed;
    top: 0;
    left: 0;
    bottom: 0;
    z-index: 100;
  }
  .hider {
    backdrop-filter: blur(15px) saturate(125%);
    background: rgba(0, 0, 0, 0.8);
    width: 100%;
    height: 100%;
  }
  .menuWrapper {
    z-index: 101;
    background: ${({ theme }) => theme.black0};
    max-width: 300px;
    width: 90%;
    padding: 15px 10px;
    overflow-y: auto;
    > ul {
      width: 100%;
      padding: 15px 5px;
    }
  }
  @media (max-width: 375px) {
    .menuWrapper {
      max-width: 270px;
    }
  }
`;

const NoScrollModal = createGlobalStyle`
  body {
    overflow: hidden;
  }
`;

const MenuMobile = ({ isOpen, toggle }) => {
  return (
    <Div className={isOpen ? "open" : undefined}>
      {isOpen && <NoScrollModal />}
      <div className="hider" onClick={toggle} />
      <div className="menuWrapper">
        <Button href="/register">SIGN UP</Button>
        <SearchFormMobile />
        <ul>
          <MenuListItem label="Sign In" href="/login" />
          {categories.map(item => (
            <MenuListItem key={item.path} {...item} />
          ))}
        </ul>
      </div>
    </Div>
  );
};

export default MenuMobile;
