import React, { useContext } from "react";
import PulseLoader from "react-spinners/PropagateLoader";
import { fetchMoreJobs } from "../api_request/request";
import { setLoadingStatus } from "../state/State";
import { Store } from "../state/StoreProvider";
import { filterJobs } from "../utils/jobFilter";
import JobListing from "./JobListing";
import { SearchBar } from "./SearchBar";
interface Props {}
const Home: React.FC<Props> = (props) => {
  const { state, dispatch } = useContext(Store);
  const jobs = state.isFullTime ? filterJobs(state.jobs) : state.jobs;
  const { isDarkMode, isLoading } = state;

  const renderLoadMoreBtn = () => (
    <div
      className={`load-more ${state.isDarkMode ? `dark` : ``}`}
      onClick={handleLoadMoreBtnClick}
    >
      Load More
    </div>
  );

  const handleLoadMoreBtnClick = () => {
    dispatch && dispatch(setLoadingStatus());
    fetchMoreJobs(state.params, dispatch);
  };

  return (
    <div className={`jobs__board ${isDarkMode ? `dark` : ``}`}>
      <SearchBar />
      {!isLoading && (
        <h1>
          Total of {state.jobs.length} results found related to your queries
        </h1>
      )}
      <div className="job_listings">
        {jobs.map((job) => (
          <JobListing job={job} key={job.id} isDarkMode={state.isDarkMode} />
        ))}
      </div>
      {state.jobs.length % 50 === 0 && jobs.length !== 0
        ? !isLoading && renderLoadMoreBtn()
        : !isLoading && <h1>Yay! you have seen all</h1>}
      {isLoading && (
        <div className="loader">
          <PulseLoader color="#F5A623" size={20} loading={isLoading} />
        </div>
      )}
    </div>
  );
};

export default Home;
