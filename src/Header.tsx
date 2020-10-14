import React from "react";
import { Link } from "react-router-dom";
interface Iprops {
  count: number;
}

function Header(props: Iprops) {
  window.addEventListener("scroll", () => {
    const header = document.querySelector(`.header`) as HTMLDivElement;
    header?.classList.toggle("sticky", window.scrollY > 50);
  });
  return (
    <div className="header">
      <div>
        <h2 className="header__title">The Cartoon box</h2>
      </div>
      <div className="header__favourites">
        <Link to="/favourites">
          <i className="fas fa-th-list fa-2x header__icon"></i>
        </Link>

        <span className="header__count">{props.count}</span>
      </div>
    </div>
  );
}

export default Header;
