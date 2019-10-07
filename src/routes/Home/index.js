import React from "react";
import Layout from "containers/Layout";
import Hero from "./Hero";
import SectionTitle from "components/SectionTitle";
import FeaturedJobs from "./FeaturedJobs";

const Home = () => {
  document.title = "AllJoin Home";
  return (
    <Layout>
      <Hero />
      <SectionTitle>Popular Professional Services</SectionTitle>
      <FeaturedJobs />
    </Layout>
  );
};

export default Home;
