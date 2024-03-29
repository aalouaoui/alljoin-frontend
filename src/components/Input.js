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
  border-radius: 15px;
  border: solid 2px ${({ theme }) => theme.white0};
  color: ${({ theme }) => theme.white0};
  background: transparent;
  margin: 0 5px;
  ::placeholder {
    color: ${({ theme }) => theme.white1};
  }
  ${({ forHeader }) => (forHeader ? altCSS : "")}
  @media(max-width: 640px) {
    padding: 0 15px;
    height: 40px;
    width: 95%;
    line-height: 40px;
    border-width: 1px;
    border-radius: 10px;
  }
`;

export default memo(Input);
