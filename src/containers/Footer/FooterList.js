import React from "react";
import styled from "styled-components";
import { A } from "hookrouter";
import useToggle from "hooks/useToggle";
import { ChevronIcon } from "components/Icons";

const Div = styled.div`
  flex: 1;
  padding: 0 30px;
  h3 {
    margin-bottom: 30px;
    svg {
      display: none;
    }
  }
  @media (max-width: 640px) {
    flex: initial;
    padding: 0;
    h3 {
      margin-top: 30px;
      margin-bottom: 0;
      display: flex;
      justify-content: space-between;
      align-items: center;
      svg {
        display: initial;
        transform: rotate(90deg);
      }
      svg.open {
        transform: rotate(-90deg);
      }
    }
    &:first-child h3 {
      margin: 0;
    }
    ul:not(.open) {
      display: none;
    }
    ul li {
      margin: 10px 0;
    }
  }
`;

const FooterList = ({ title, list }) => {
  const [isOpen, toggle] = useToggle();
  return (
    <Div>
      <h3 onClick={toggle}>
        <span>{title}</span>
        <ChevronIcon className={isOpen ? "open" : undefined} />
      </h3>
      <ul className={isOpen ? "open" : undefined}>
        {list.map(({ label, path, href }) => (
          <li key={label}>
            <A href={path ? `categories/${path}` : href}>{label}</A>
          </li>
        ))}
      </ul>
    </Div>
  );
};

export default FooterList;
