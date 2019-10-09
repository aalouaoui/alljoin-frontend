import React from "react";
import Layout from "containers/Layout";
import Hero from "./Hero";
import FeaturedJobs from "./FeaturedJobs";
import RegisterReminder from "./RegisterReminder";
import PopularServices from "./PopularServices";

const Home = () => {
  document.title = "AllJoin | Freelance and Management Services for Events";
  return (
    <Layout>
      <Hero />
      <PopularServices />
      <FeaturedJobs />
      <RegisterReminder />
    </Layout>
  );
};

export default Home;
