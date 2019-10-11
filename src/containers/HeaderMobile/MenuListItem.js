import React from "react";
import styled from "styled-components";
import { A } from "hookrouter";
import { ChevronIcon } from "components/Icons";
import useToggle from "hooks/useToggle";

const Div = styled.div`
  margin: 10px 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  &:hover {
    color: ${({ theme }) => theme.primary0};
  }
  svg {
    transform: rotate(${({ isOpen }) => (isOpen ? "-" : "")}90deg);
  }
`;

const Ul = styled.ul`
  margin-left: 10px;
  display: ${({ isOpen }) => (isOpen ? "block" : "none")};
`;

const MenuListItem = ({ label, path, href, content }) => {
  const notEmpty = content && content.length > 0;
  const to = path ? `/categories/${path}` : href;
  const Anchor = notEmpty ? "span" : A;
  const [isOpen, toggle] = useToggle();
  return (
    <li>
      <Div onClick={toggle} isOpen={isOpen}>
        <Anchor href={to}>{label}</Anchor>
        {notEmpty && <ChevronIcon height="10px" />}
      </Div>

      {notEmpty ? (
        <Ul isOpen={isOpen}>
          {content.map(item => (
            <MenuListItem key={item.path} {...item} />
          ))}
        </Ul>
      ) : null}
    </li>
  );
};

export default MenuListItem;
