import React, { useRef, useContext } from "react";
import location from "../desktop/icon-location.svg";
import search from "../desktop/icon-search.svg";
import { toggleIsFullTime } from "../state/State";
import { Store } from "../state/StoreProvider";

interface Props {}

export const SearchBar: React.FC<Props> = (props) => {
  const { dispatch } = useContext(Store);
  const postionRef = useRef<HTMLInputElement>(null);
  const locationRef = useRef<HTMLInputElement>(null);

  const handleJobSearch = () => {
    if (postionRef.current) {
      postionRef.current.value = "";
    }
    if (locationRef.current) {
      locationRef.current.value = "";
    }
  };

  return (
    <div className="search_bar">
      <div className="search_bar_container">
        <div className="search_bar_container_position">
          <input
            ref={postionRef}
            type="text"
            placeholder="Filter by title, expertise..."
          />
          <span className="icon">
            <img src={search} alt="search-icon" />
          </span>
        </div>
        <div className="search_bar_container_location">
          <input
            ref={locationRef}
            type="text"
            placeholder="Filter by location..."
          />
          <span className="icon">
            <img src={location} alt="location-icon" />
          </span>
        </div>
        <div className="search_bar_container_type">
          <input
            type="checkbox"
            onChange={() => dispatch && dispatch(toggleIsFullTime(null))}
          />
          <p>Full Time</p>
        </div>
        <div className="search_bar_container_button">
          <button onClick={handleJobSearch}>search</button>
        </div>
      </div>
    </div>
  );
};
