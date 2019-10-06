import React from "react";
import { A } from "hookrouter";
import Layout from "components/Layout";

const Home = () => {
  document.title = "AllJoin Home";
  return (
    <Layout>
      <h1>Home</h1>
      <A href="/about">About</A>
    </Layout>
  );
};

export default Home;
