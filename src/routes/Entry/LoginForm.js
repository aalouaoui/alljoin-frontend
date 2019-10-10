import React from "react";
import { navigate } from "hookrouter";
import styled from "styled-components";
import SectionTitle from "components/SectionTitle";
import Input from "components/Input";
import Button from "components/Button";
import useInput from "hooks/useInput";
import SocialAuth from "./SocialAuth";

const Div = styled.div`
  flex: 1;
  background: ${({ theme }) => theme.primary0};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 30px;
  form {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    width: 250px;
    margin-bottom: 30px;
  }
  input {
    margin-bottom: 30px;
  }
  button {
    background: ${({ theme }) => theme.accent};
    padding: 0 30px;
  }
  button:hover {
    background: ${({ theme }) => theme.black2};
  }
  @media (max-width: 640px) {
    padding: 15px;
    form {
      margin-bottom: 15px;
    }
    input {
      margin-bottom: 15px;
    }
    button {
      background: ${({ theme }) => theme.accent};
      padding: 0 20px;
    }
  }
`;

const LoginForm = () => {
  const handleSubmit = ev => {
    ev.preventDefault();
    navigate("/");
  };
  const userNameInput = useInput("username");
  const passwordInput = useInput("password");
  return (
    <Div id="login">
      <SectionTitle>Already A User</SectionTitle>
      <form onSubmit={handleSubmit}>
        <Input {...userNameInput} placeholder="Email or Username" required />
        <Input {...passwordInput} required />
        <Button>Login</Button>
      </form>
      <p>Or Login with:</p>
      <SocialAuth />
    </Div>
  );
};

export default LoginForm;
