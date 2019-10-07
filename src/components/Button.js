import React, { memo } from "react";
import styled, { css } from "styled-components";

const outlinedCSS = css`
  border: solid 2px ${({ theme }) => theme.primaryLight};
  color: ${({ theme }) => theme.primaryLight};
  background: transparent;
  box-shadow: none;
`;

const whiteCSS = css`
  background: transparent;
  border-color: ${({ theme }) => theme.text};
  color: ${({ theme }) => theme.text};
  box-shadow: none;
`;

const StyledButton = styled.button`
  background: ${({ theme }) => theme.primaryLight};
  height: 50px;
  line-height: 50px;
  border: 0;
  display: inline-block;
  padding: 0 15px;
  margin: 0 5px;
  border-radius: ${({ theme }) => theme.borderRadius};
  box-shadow: 1px 2px 5px ${({ theme }) => theme.bg};
  cursor: pointer;
  &:hover {
    opacity: 0.9;
  }
  ${({ "data-outline": out }) => (out ? outlinedCSS : "")}
  ${({ "data-white": white }) => (white ? whiteCSS : "")}
`;

const Button = ({ Comp, ...props }) => {
  const Btn = Comp ? StyledButton.withComponent(Comp) : StyledButton;
  return <Btn {...props} />;
};

export default memo(Button);
