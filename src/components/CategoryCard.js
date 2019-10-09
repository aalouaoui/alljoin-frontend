import React, { memo } from "react";
import styled from "styled-components";
import { A } from "hookrouter";
import { ChevronIcon } from "./Icons";

const Div = styled.div`
  background: linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)), url(${({ img }) => img});
  background-position: center;
  background-size: cover;
  border-radius: 15px;
  padding: 15px;
  margin-right: 30px;
  box-shadow: 0 2px 10px ${({ theme }) => theme.black2};
  min-width: 250px;
  height: 250px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
  a {
    white-space: nowrap;
    text-overflow: ellipsis;
    border-bottom: dashed 1px rgba(255, 255, 255, 0);
    text-decoration-color: ${({ theme }) => theme.accent};
  }
  a:hover {
    text-decoration: underline wavy ${({ theme }) => theme.accent};
    text-decoration-skip-ink: none;
  }
`;

const CategoryCard = ({ label, img, path, content }) => (
  <Div img={img}>
    <h3>
      <A href={`/categories/${path}`}>{label.toUpperCase()}</A>
    </h3>
    <ul>
      {content.map(({ path, label }) => (
        <li key={path}>
          <A href={`/categories/${path}`}>
            <ChevronIcon height=".5em" /> <span>{label}</span>
          </A>
        </li>
      ))}
    </ul>
  </Div>
);

export default memo(CategoryCard);
