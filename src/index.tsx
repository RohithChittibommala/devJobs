import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "./styles/app.scss";
import { BrowserRouter } from "react-router-dom";
import StoreProvider from "./state/StoreProvider";
ReactDOM.render(
  <BrowserRouter>
    <StoreProvider>
      <App />
    </StoreProvider>
  </BrowserRouter>,
  document.querySelector(`#root`)
);
