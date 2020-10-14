import React, { useContext } from "react";
import { useHistory } from "react-router-dom";
import Episode from "./Episodes";

import { Store } from "./Store";

function Favourites() {
  const [state, dispatch] = useContext(Store);
  const history = useHistory();
  const { favourites } = state;
  return (
    <div>
      <button className="app__goback" onClick={() => history.goBack()}>
        <i className="fas fa-long-arrow-alt-left fa-2x" />
        <span className="app__goback__span">Go back</span>
      </button>
      <div className="app">
        {favourites.map((favourite: any) => (
          <Episode key={favourite?.name} episode={favourite} favourite={true} />
        ))}
      </div>
    </div>
  );
}

export default Favourites;
