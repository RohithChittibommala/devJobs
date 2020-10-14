import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { BrowserRouter, Route, Link, Switch } from "react-router-dom";
import { StoreProvider } from "./Store";
// import FavouriteEpisode from "./FavoriteEpisode";
import Favourites from "./../src/Favourites";
ReactDOM.render(
  <BrowserRouter>
    <React.StrictMode>
      <StoreProvider>
        <Switch>
          <Route path="/" exact component={App} />
          <Route path="/favourites" exact component={Favourites} />
        </Switch>
      </StoreProvider>
    </React.StrictMode>
  </BrowserRouter>,
  document.getElementById("root")
);
