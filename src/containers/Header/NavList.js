import React from "react";
import styled from "styled-components";
import { A } from "hookrouter";
import { ChevronIcon } from "components/Icons";

const styledLabel = styled.span`
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

const NavList = ({ label, cat_id, content }) => {
  const notEmpty = content && content.length > 0;
  const Comp = cat_id ? A : "span",
    href = cat_id ? `/categories/${cat_id}` : undefined;

  const Label = styledLabel.withComponent(Comp);
  return (
    <li>
      <Div>
        <Label href={href}>{label}</Label>
        {notEmpty && <ChevronIcon />}
      </Div>

      {notEmpty ? (
        <ul>
          {content.map(item => (
            <NavList key={item.cat_id} {...item} />
          ))}
        </ul>
      ) : null}
    </li>
  );
};

export default NavList;
