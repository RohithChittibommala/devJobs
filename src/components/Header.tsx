import React, { useState } from "react";
import { Link } from "react-router-dom";
import backgroundsvg from "../desktop/bg-pattern-header.svg";
import logo from "../desktop/logo.svg";
import sun from "../desktop/icon-sun.svg";
import moon from "../desktop/icon-moon.svg";
interface Props {}
const Header: React.FC<Props> = (props) => {
  const [darkTheme, setDarkTheme] = useState(false);
  const handleThemeToggle = () => {
    setDarkTheme((prev) => !prev);
  };

  return (
    <div className="header">
      <div className="header__backgrounds">
        <img src={backgroundsvg} alt="background" />
      </div>
      <div className="header__inner">
        <Link className="link" to="/">
          <img src={logo} alt="company__logo" />
        </Link>
        <div className={` theme_toggle_btn `}>
          <img src={sun} alt="" />
          <button
            className={`${!darkTheme ? `` : `active`}`}
            onClick={handleThemeToggle}
          >
            <span className={`slider`}></span>
          </button>
          <img src={moon} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Header;
