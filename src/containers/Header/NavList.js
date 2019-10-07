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
`;

const Div = styled.div`
  position: relative;
  svg {
    position: absolute;
    right: 10px;
    top: 20px;
    height: 10px;
  }
`;

const NavList = ({ label, path, content }) => {
  const notEmpty = content && content.length > 0;
  const href = `/categories/${path}`;
  return (
    <li>
      <Div>
        <Link href={href}>{label}</Link>
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
