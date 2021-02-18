import React from "react";
import { SearchBar } from "./SearchBar";
interface Props {}
const Home: React.FC<Props> = (props) => {
  return (
    <div className="jobs__board">
      <SearchBar />
    </div>
  );
};

export default Home;
