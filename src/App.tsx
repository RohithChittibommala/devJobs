import React, { useContext, useEffect } from "react";
import Episode from "./Episodes";
import { Store } from "./Store";
import "./App.css";
import "react-toastify/dist/ReactToastify.css";
import Header from "./Header";
import ToastContainerElement from "./ToastContainer";

function App(): JSX.Element {
  const [state, dispatch] = useContext(Store);
  const url: string = `https://api.tvmaze.com/singlesearch/shows?q=rick-&-morty&embed=episodes`;
  useEffect(() => {
    fetch(url).then(async (data) => {
      const { _embedded } = await data.json();
      const { episodes } = _embedded;
      dispatch({ type: "ADD_EPISODE", payload: episodes });
    });
  }, [url]);
  const { episodes, favourites } = state;
  return (
    <div>
      {<Header count={favourites.length} />}
      <ToastContainerElement />
      <div className="app">
        {episodes.map((episode: any) => (
          <Episode key={episode.id * Math.random()} episode={episode} />
        ))}
      </div>
    </div>
  );
}

export default App;
