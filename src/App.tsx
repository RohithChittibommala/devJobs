import React from "react";
import Header from "./components/Header";
import Home from "./components/Home";

interface Props {}
const App: React.FC<Props> = (props) => {
  return (
    <div>
      <Header />
      <Home />
    </div>
  );
};

export default App;
