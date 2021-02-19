import React, { useEffect, useContext } from "react";
import Header from "./components/Header";
import Home from "./components/Home";
import * as request from "./api_request/request";
import { Store } from "./state/StoreProvider";
import { addJobs } from "./state/State";

interface Props {}
const App: React.FC<Props> = (props) => {
  const { state, dispatch } = useContext(Store);
  useEffect(() => {
    (async () => {
      const { data } = await request.getJobPostings();
      dispatch && dispatch(addJobs(data));
    })();
  }, [dispatch]);

  return (
    <div>
      <Header />
      <Home />
    </div>
  );
};

export default App;
