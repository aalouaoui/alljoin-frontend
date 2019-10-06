import React from "react";
import styled from "styled-components";
import Header from "containers/Header";

const Div = styled.div`
  padding-top: 120px;
`;

const Layout = ({ children }) => (
  <Div>
    <Header />
    {children}
  </Div>
);

export default Layout;
