import React from "react";
import styled from "styled-components";
import { A } from "hookrouter";
import Button from "components/Button";

const Div = styled.div`
  margin: ${({ theme }) => theme.spacing};
  padding: ${({ theme }) => theme.spacing};
  background: ${({ theme }) => theme.gradient};
  border-radius: ${({ theme }) => theme.borderRadius};
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const RegisterReminder = () => (
  <Div>
    <h2>Ready to Join us?</h2>
    <Button data-white data-outline Comp={A} href="/entry">
      SIGN UP NOW
    </Button>
  </Div>
);

export default RegisterReminder;
