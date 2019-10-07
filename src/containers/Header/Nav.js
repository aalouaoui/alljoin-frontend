import React from "react";
import styled from "styled-components";
import categories from "utils/categories";
import NavList from "./NavList";

const StyledNav = styled.nav`
  li {
    position: relative;
  }

  ul {
    position: absolute;
  }

  ul.topLevel {
    display: flex;
    align-items: stretch;
  }

  ul.topLevel > li > ul {
    top: 50px;
    left: 0;
    min-width: 100%;
    background: ${({ theme }) => theme.primaryLight};
  }

  ul:not(.topLevel) > li > ul {
    top: 0;
    left: calc(100% + 1px);
    min-width: 100%;
    background: ${({ theme }) => theme.primaryLight};
  }

  ul:not(.topLevel) {
    display: none;
  }

  li:hover > ul {
    display: block;
  }

  li:hover {
    background: ${({ theme }) => theme.primaryDark};
  }

  ul.topLevel > li > div > svg {
    transform: rotate(90deg);
  }

  ul.topLevel > li:hover > div > svg {
    transform: rotate(-90deg);
  }

  ul:not(.topLevel) > li:hover > div > svg {
    transform: rotate(180deg);
  }
`;

const Nav = () => {
  return (
    <StyledNav>
      <ul className="topLevel">
        {categories.map(item => (
          <NavList key={item.path} {...item} />
        ))}
      </ul>
    </StyledNav>
  );
};

export default Nav;
