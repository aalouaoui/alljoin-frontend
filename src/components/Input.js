import { memo } from "react";
import styled, { css } from "styled-components";

const altCSS = css`
  background: ${({ theme }) => theme.grey};
  border: 0;
`;

const Input = styled.input`
  height: 50px;
  width: 250px;
  padding: 0 20px;
  line-height: 50px;
  border-radius: ${({ theme }) => theme.borderRadius};
  border: solid 2px ${({ theme }) => theme.text};
  color: ${({ theme }) => theme.text};
  background: transparent;
  margin: 0 5px;
  ::placeholder {
    color: ${({ theme }) => theme.dimText};
  }
  ${({ forHeader }) => (forHeader ? altCSS : "")}
`;

export default memo(Input);
