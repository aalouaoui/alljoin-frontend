import React from "react";
import styled from "styled-components";
import SectionTitle from "components/SectionTitle";
import useInput from "hooks/useInput";
import Input from "components/Input";
import Button from "components/Button";
import SocialAuth from "./SocialAuth";

const Div = styled.div`
  flex: 2;
  background: ${({ theme }) => theme.bg};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  form {
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
    width: 540px;
    margin-bottom: ${({ theme }) => theme.spacing};
  }
  input {
    margin-bottom: ${({ theme }) => theme.spacing};
  }
  button {
    width: 250px;
    background: ${({ theme }) => theme.accent};
    display: block;
    padding: 0 ${({ theme }) => theme.spacing};
  }
  button:hover {
    background: ${({ theme }) => theme.primaryDark};
  }
`;

const RegisterForm = () => {
  const handleSubmit = ev => ev.preventDefault();
  const emailInput = useInput("email");
  const userNameInput = useInput("username");
  const passwordInput = useInput("password");
  const passwordConfirmInput = useInput("password_confirm");
  return (
    <Div>
      <SectionTitle>Create Your Account Now</SectionTitle>
      <form onSubmit={handleSubmit}>
        <Input {...emailInput} required />
        <Input {...userNameInput} required />
        <Input {...passwordInput} required />
        <Input {...passwordConfirmInput} required />
        <Button type="submit">Register as Client</Button>
        <Button type="submit">Register as Service Provider</Button>
      </form>
      <p>Or Register with:</p>
      <SocialAuth />
    </Div>
  );
};

export default RegisterForm;
