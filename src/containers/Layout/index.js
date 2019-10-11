import React from "react";
import styled from "styled-components";
import Header from "containers/Header";
import Footer from "../Footer/Footer";
import HeaderMobile from "containers/HeaderMobile";

const Div = styled.div`
  padding-top: 120px;
  @media (max-width: 970px) {
    padding-top: 70px;
  }
  @media (max-width: 640px) {
    padding-top: 60px;
  }
`;

const Layout = ({ children }) => (
  <Div>
    <Header />
    <HeaderMobile />
    {children}
    <Footer />
  </Div>
);

export default Layout;
