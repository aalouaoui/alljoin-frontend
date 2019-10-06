import React from "react";
import Layout from "containers/Layout";
import Hero from "./Hero";
import SectionTitle from "components/SectionTitle";

const Home = () => {
  document.title = "AllJoin Home";
  return (
    <Layout>
      <Hero />
      <SectionTitle>Popular Professional Services</SectionTitle>
      <SectionTitle>Featured Jobs</SectionTitle>
    </Layout>
  );
};

export default Home;
