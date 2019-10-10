import React from "react";
import { navigate } from "hookrouter";
import styled from "styled-components";
import SectionTitle from "components/SectionTitle";
import useInput from "hooks/useInput";
import Input from "components/Input";
import Button from "components/Button";
import SocialAuth from "./SocialAuth";

const Div = styled.div`
  flex: 2;
  background: ${({ theme }) => theme.black1};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 30px;
  form {
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
    width: 540px;
    margin-bottom: 30px;
  }
  input {
    margin-bottom: 30px;
  }
  button {
    width: 250px;
    background: ${({ theme }) => theme.accent};
    display: block;
    padding: 0 30px;
  }
  button:hover {
    background: ${({ theme }) => theme.primary1};
  }
  @media (max-width: 640px) {
    padding: 15px;
    form {
      margin-bottom: 15px;
      width: 250px;
    }
    input {
      margin-bottom: 15px;
    }
    button {
      width: 95%;
      background: ${({ theme }) => theme.accent};
      padding: 0 20px;
      margin-bottom: 15px;
    }
  }
`;

const RegisterForm = () => {
  const handleSubmit = ev => {
    ev.preventDefault();
    navigate("/");
  };
  const emailInput = useInput("email");
  const userNameInput = useInput("username");
  const passwordInput = useInput("password");
  const passwordConfirmInput = useInput("password_confirm");
  const isRegister = window.location.pathname === "/register";
  return (
    <Div>
      <SectionTitle>Create Your Account Now</SectionTitle>
      <form onSubmit={handleSubmit}>
        <Input {...emailInput} required autoFocus={isRegister} />
        <Input {...userNameInput} required />
        <Input {...passwordInput} required />
        <Input {...passwordConfirmInput} required />
        <Button>Register as Client</Button>
        <Button>Register as Service Provider</Button>
      </form>
      <p>Or Register with:</p>
      <SocialAuth />
    </Div>
  );
};

export default RegisterForm;
