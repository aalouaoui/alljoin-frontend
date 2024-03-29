import React, { memo } from "react";
import styled from "styled-components";
import categories from "utils/categories";
import NavList from "./NavList";

const StyledNav = styled.nav`
  height: 50px;
  li {
    position: relative;
  }

  ul:not(.topLevel) {
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
    background: ${({ theme }) => theme.primary0};
  }

  ul:not(.topLevel) > li > ul {
    top: 0;
    left: calc(100% + 1px);
    min-width: 100%;
    background: ${({ theme }) => theme.primary0};
  }

  ul:not(.topLevel) {
    display: none;
  }

  li:hover > ul {
    display: block;
  }

  li:hover {
    background: ${({ theme }) => theme.primary1};
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

export default memo(Nav);
