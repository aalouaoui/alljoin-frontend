import React from "react";
import styled from "styled-components";
import Header from "containers/Header";
import Footer from "../Footer/Footer";

const Div = styled.div`
  padding-top: 120px;
`;

const Layout = ({ children }) => (
  <Div>
    <Header />
    {children}
    <Footer />
  </Div>
);

export default Layout;
