import React from "react";
import SectionTitle from "components/SectionTitle";
import useFetch from "utils/useFetch";
import LongCard from "components/LongCard";

const FeaturedJobs = () => {
  const [loading, data, error] = useFetch("_api/latest_jobs.json");
  return (
    <div>
      <SectionTitle>Featured Jobs</SectionTitle>
      {data ? data.map(job => <LongCard key={job.id} {...job} />) : null}
      {loading ? "..." : null}
      {error ? error.message : null}
    </div>
  );
};

export default FeaturedJobs;
