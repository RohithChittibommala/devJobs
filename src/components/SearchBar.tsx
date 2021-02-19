import React from "react";
import location from "../desktop/icon-location.svg";
import search from "../desktop/icon-search.svg";

interface Props {}

export const SearchBar: React.FC<Props> = (props) => {
  return (
    <div className="search_bar">
      <div className="search_bar_container">
        <div className="search_bar_container_position">
          <input type="text" placeholder="Filter by title, expertise..." />
          <span className="icon">
            <img src={search} alt="search-icon" />
          </span>
        </div>
        <div className="search_bar_container_location">
          <input type="text" placeholder="Filter by location..." />
          <span className="icon">
            <img src={location} alt="location-icon" />
          </span>
        </div>
        <div className="search_bar_container_type">
          <input type="checkbox" />
          <p>Full Time</p>
        </div>
      </div>
    </div>
  );
};
