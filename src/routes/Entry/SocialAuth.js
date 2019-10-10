import React from "react";
import styled from "styled-components";
import { GoogleIcon, FacebookIcon } from "components/Icons";

const Div = styled.div`
  margin-top: 15px;
  width: 115px;
  display: flex;
  justify-content: space-between;
  span {
    width: 50px;
    line-height: 50px;
    height: 50px;
    border-radius: 15px;
    background: ${({ theme }) => theme.white0};
    text-align: center;
    font-size: 20px;
    cursor: pointer;
  }
  span:hover {
    background: ${({ theme }) => theme.black2};
  }
  @media (max-width: 640px) {
    margin-top: 15px;
    width: 95px;
    span {
      width: 40px;
      line-height: 40px;
      height: 40px;
      border-radius: 10px;
      font-size: 16px;
    }
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
