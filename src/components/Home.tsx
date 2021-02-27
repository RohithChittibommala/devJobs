import React, { useContext } from "react";
import { fetchMoreJobs } from "../api_request/request";
import { Store } from "../state/StoreProvider";
import { filterJobs } from "../utils/jobFilter";
import JobListing from "./JobListing";
import { SearchBar } from "./SearchBar";
interface Props {}
const Home: React.FC<Props> = (props) => {
  const { state, dispatch } = useContext(Store);
  const jobs = state.isFullTime ? filterJobs(state.jobs) : state.jobs;
  console.log(jobs);

  const renderLoadMoreBtn = () => (
    <div
      className="load-more"
      onClick={() => fetchMoreJobs(state.params, dispatch)}
    >
      Load More
    </div>
  );

  return (
    <div className="jobs__board">
      <SearchBar />
      <h1>
        Total of {state.jobs.length} results found related to your queries
      </h1>
      <div className="job_listings">
        {jobs.map((job) => (
          <JobListing job={job} key={job.id} />
        ))}
      </div>
      {state.jobs.length % 50 === 0 ? (
        renderLoadMoreBtn()
      ) : (
        <h1>Yay! you have seen all</h1>
      )}
    </div>
  );
};

export default Home;
