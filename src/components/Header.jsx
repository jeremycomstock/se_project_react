import headerLogo from "../assets/logo.svg";
import headerAvatar from "../assets/avatar.svg";
import "../blocks/Header.css";
import ToggleSwitch from "./ToggleSwitch.jsx";
import { Link } from "react-router-dom";

function Header({ handleAddClick, weatherData }) {
  const currentDate = new Date().toLocaleString("default", {
    month: "long",
    day: "numeric",
  });

  return (
    <header className="header">
      <div className="header__greeting">
        {" "}
        <Link to="/se_project_wtwr/">
          {" "}
          <img className="header__logo" src={headerLogo} alt="WTWR Logo" />
        </Link>
        <p className="header__date-and-location">
          {currentDate}, {weatherData.city}
        </p>
      </div>

      <div className="header__menu">
        <ToggleSwitch />
        <button
          onClick={handleAddClick}
          type="button"
          className="header__button__add_clothes"
        >
          + Add Clothes
        </button>
        <div className="header__profile">
          {" "}
          <Link to="/se_project_wtwr/profile" className="header__link">
            {" "}
            <p className="header__name">Jeremy Comstock</p>
            <img className="header__avatar" src={headerAvatar} alt="Avatar" />
          </Link>
        </div>
      </div>
    </header>
  );
}

export default Header;
