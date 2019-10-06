import React, { memo } from "react";
import styled, { css } from "styled-components";

const OutlinedCSS = css`
  border: solid 2px ${({ theme }) => theme.primaryLight};
  color: ${({ theme }) => theme.primaryLight};
  background: transparent;
`;

const WhiteCSS = css`
  background: transparent;
  border-color: ${({ theme }) => theme.text};
  color: ${({ theme }) => theme.text};
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
  cursor: pointer;
  &:hover {
    opacity: 0.8;
  }
  ${({ Outlined }) => (Outlined ? OutlinedCSS : "")}
  ${({ White }) => (White ? WhiteCSS : "")}
`;

const Button = ({ Comp, ...props }) => {
  const Btn = Comp ? StyledButton.withComponent(Comp) : StyledButton;
  return <Btn {...props} />;
};

export default memo(Button);
