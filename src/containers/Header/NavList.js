import React from "react";
import styled from "styled-components";
import { A } from "hookrouter";
import { ChevronIcon } from "components/Icons";

const Link = styled(A)`
  padding: 0 30px 0 10px;
  display: block;
  line-height: 50px;
  width: 100%;
  cursor: pointer;
  white-space: nowrap;
  @media (max-width: 1200px) {
    padding: 0 20px 0 5px;
  }
`;

const Div = styled.div`
  position: relative;
  svg {
    position: absolute;
    right: 10px;
    top: 20px;
    height: 10px;
  }
  @media (max-width: 1200px) {
    svg {
      right: 5px;
    }
  }
`;

const NavList = ({ label, path, content }) => {
  const notEmpty = content && content.length > 0;
  const href = `/categories/${path}`;
  const Anchor = notEmpty ? Link.withComponent("span") : Link;
  return (
    <li>
      <Div>
        <Anchor href={href}>{label}</Anchor>
        {notEmpty && <ChevronIcon />}
      </Div>

      {notEmpty ? (
        <ul>
          {content.map(item => (
            <NavList key={item.path} {...item} />
          ))}
        </ul>
      ) : null}
    </li>
  );
};

export default NavList;
