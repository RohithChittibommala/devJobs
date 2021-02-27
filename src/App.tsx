import React, { useEffect, useContext } from "react";
import Header from "./components/Header";
import Home from "./components/Home";
import { Route, Switch } from "react-router-dom";
import * as request from "./api_request/request";
import { Store } from "./state/StoreProvider";
import { addJobs } from "./state/State";
import DetailsJob from "./components/DetailJob";

interface Props {}
const App: React.FC<Props> = (props) => {
  const { state, dispatch } = useContext(Store);
  useEffect(() => {
    (async () => {
      const { data } = await request.fetchJobPostings(state.params);
      dispatch && dispatch(addJobs(data));
    })();
  }, [state.params.location, state.params.description]);

  return (
    <div>
      <Header />
      <Switch>
        <Route path="/job/:id" exact component={DetailsJob} />
        <Route path="/" exact component={Home} />
      </Switch>
      {/* <Home /> */}
    </div>
  );
};

export default App;
