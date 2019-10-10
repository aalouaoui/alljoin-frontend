import React from "react";
import styled from "styled-components";
import Button from "components/Button";

const Div = styled.div`
  margin: 30px;
  padding: 30px;
  background: ${({ theme }) => theme.gradient};
  border-radius: 15px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const RegisterReminder = () => (
  <Div>
    <h2>Ready to Join us?</h2>
    <Button apply="outline, white" href="/register">
      SIGN UP NOW
    </Button>
  </Div>
);

export default RegisterReminder;
