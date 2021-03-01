import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import backgroundsvg from "../desktop/bg-pattern-header.svg";
import mobilesvg from "../desktop/mobile.svg";
import logo from "../desktop/logo.svg";
import sun from "../desktop/icon-sun.svg";
import moon from "../desktop/icon-moon.svg";
import { Store } from "../state/StoreProvider";
import { toggleDarkMode } from "../state/State";
interface Props {}
const Header: React.FC<Props> = (props) => {
  const { dispatch, state } = useContext(Store);
  const handleThemeToggle = () => {
    dispatch && dispatch(toggleDarkMode(null));
  };
  const darkTheme = state.isDarkMode;

  return (
    <div className="header">
      <div className={`header__backgrounds ${darkTheme ? `dark` : ``}`}>
        <img src={backgroundsvg} alt="background desktop" className="desktop" />
        <img src={mobilesvg} alt="background mobile" className="mobile" />
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
