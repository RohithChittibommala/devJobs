import React, { useContext } from "react";
import { Store } from "../state/StoreProvider";
import JobListing from "./JobListing";
import { SearchBar } from "./SearchBar";
interface Props {}
const Home: React.FC<Props> = (props) => {
  const { state } = useContext(Store);
  return (
    <div className="jobs__board">
      <SearchBar />
      <div className="job_listings">
        {state.jobs.map((job) => (
          <JobListing job={job} key={job.id} />
        ))}
      </div>
    </div>
  );
};

export default Home;
