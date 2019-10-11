import React from "react";
import styled from "styled-components";
import SectionTitle from "components/SectionTitle";
import useFetch from "utils/useFetch";
import LongCard from "components/LongCard";

const Div = styled.div`
  @media (max-width: 640px) {
    > div {
      display: flex;
      justify-content: flex-start;
      align-items: stretch;
      flex-wrap: wrap;
      > div {
        flex-basis: calc(50% - 10px);
      }
    }
  }
`;

const FeaturedJobs = () => {
  const [loading, data, error] = useFetch("_api/latest_jobs.json");
  return (
    <Div>
      <SectionTitle>Featured Jobs</SectionTitle>
      <div>
        {data ? data.map(job => <LongCard key={job.id} {...job} />) : null}
        {loading ? "..." : null}
        {error ? error.message : null}
      </div>
    </Div>
  );
};

export default FeaturedJobs;
