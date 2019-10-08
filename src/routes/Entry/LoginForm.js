import React from "react";
import styled from "styled-components";
import SectionTitle from "components/SectionTitle";
import Input from "components/Input";
import Button from "components/Button";
import useInput from "hooks/useInput";
import SocialAuth from "./SocialAuth";

const Div = styled.div`
  flex: 1;
  background: ${({ theme }) => theme.primaryLight};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  form {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    width: 250px;
    margin-bottom: ${({ theme }) => theme.spacing};
  }
  input {
    margin-bottom: ${({ theme }) => theme.spacing};
  }
  button {
    background: ${({ theme }) => theme.accent};
    padding: 0 ${({ theme }) => theme.spacing};
  }
  button:hover {
    background: ${({ theme }) => theme.darkBg};
  }
`;

const LoginForm = () => {
  const handleSubmit = ev => ev.preventDefault();
  const userNameInput = useInput("username");
  const passwordInput = useInput("password");
  return (
    <Div>
      <SectionTitle>Already A User</SectionTitle>
      <form onSubmit={handleSubmit}>
        <Input {...userNameInput} placeholder="Email or Username" required />
        <Input {...passwordInput} required />
        <Button Comp="button" type="submit">
          Login
        </Button>
      </form>
      <p>Or Login with:</p>
      <SocialAuth />
    </Div>
  );
};

export default LoginForm;
