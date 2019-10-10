import React, { memo } from "react";
import { A } from "hookrouter";
import styled, { css } from "styled-components";

const customStyles = {
  outline: css`
    border: solid 2px ${({ theme }) => theme.primary0};
    color: ${({ theme }) => theme.primary0};
    background: transparent;
    box-shadow: none;
  `,
  white: css`
    background: transparent;
    border-color: ${({ theme }) => theme.white0};
    color: ${({ theme }) => theme.white0};
    box-shadow: none;
  `
};

const applyToCSS = applyString =>
  typeof applyString !== "string"
    ? ""
    : applyString
        .replace(/\s/, "")
        .split(",")
        .map(c => customStyles[c]);

const StyledButton = styled.button`
  background: ${({ theme }) => theme.primary0};
  height: 50px;
  line-height: 50px;
  border: 0;
  display: inline-block;
  padding: 0 15px;
  margin: 0 5px;
  border-radius: 15px;
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
  cursor: pointer;
  &:hover {
    opacity: 0.9;
  }
  ${({ apply }) => applyToCSS(apply)}
  @media(max-width: 640px) {
    height: 40px;
    line-height: 40px;
    padding: 0 10px;
    border-radius: 10px;
  }
`;

const Button = ({ Comp, ...props }) => {
  if (!Comp && props.href) Comp = A;
  const Btn = Comp ? StyledButton.withComponent(Comp) : StyledButton;
  return <Btn type="submit" {...props} />;
};

export default memo(Button);
