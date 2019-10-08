import React from "react";
import styled from "styled-components";
import { GoogleIcon, FacebookIcon } from "components/Icons";

const Div = styled.div`
  margin-top: calc(${({ theme }) => theme.spacing} / 2);
  width: 115px;
  display: flex;
  justify-content: space-between;
  span {
    width: 50px;
    line-height: 50px;
    height: 50px;
    border-radius: ${({ theme }) => theme.borderRadius};
    background: ${({ theme }) => theme.text};
    text-align: center;
    font-size: 20px;
    cursor: pointer;
  }
  span:hover {
    background: ${({ theme }) => theme.darkBg};
  }
`;

const SocialAuth = () => {
  return (
    <Div>
      <span>
        <GoogleIcon />
      </span>
      <span>
        <FacebookIcon />
      </span>
    </Div>
  );
};

export default SocialAuth;
