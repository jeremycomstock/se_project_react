import headerLogo from "../assets/logo.svg";
import headerAvatar from "../assets/avatar.svg";
import "../blocks/Header.css";

function Header({ handleAddClick, weatherData }) {
  const currentDate = new Date().toLocaleString("default", {
    month: "long",
    day: "numeric",
  });

  return (
    <header className="header">
      <div className="header__greeting">
        {" "}
        <img className="header__logo" src={headerLogo} alt="WTWR Logo" />
        <p className="header__date-and-location">
          {currentDate}, {weatherData.city}
        </p>
      </div>

      <div className="header__menu">
        <button
          onClick={handleAddClick}
          type="button"
          className="header__button__add_clothes"
        >
          + Add Clothes
        </button>
        <div className="header__profile">
          {" "}
          <p className="header__name">Jeremy Comstock</p>
          <img className="header__avatar" src={headerAvatar} alt="Avatar" />
        </div>
      </div>
    </header>
  );
}

export default Header;
