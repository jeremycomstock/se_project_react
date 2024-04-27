import React from "react";
import "../blocks/ToggleSwitch.css";
import { CurrentTemperatureUnitContext } from "../contexts/CurrentTemperatureUnitContext";

function ToggleSwitch() {
  const { currentTemperatureUnit, handleToggleSwitchChange } = React.useContext(
    CurrentTemperatureUnitContext
  );

  return (
    <div className="toggle__switch">
      <input
        type="checkbox"
        className="toggle__checkbox"
        onChange={handleToggleSwitchChange}
        id="toggle__switch"
      />
      <label className="toggle__label" htmlFor="toggle__switch">
        <span
          className={
            CurrentTemperatureUnitContext.currentTemperatureUnit === "F"
              ? "toggle__button toggle__button-F"
              : "toggle__button toggle__button-C"
          }
        />
        <p
          className={`toggle__letter toggle__letter_type_f ${
            currentTemperatureUnit === "F" && "toggle__letter_active"
          }`}
        >
          F
        </p>
        <p
          className={`toggle__letter toggle__letter_type_c ${
            currentTemperatureUnit === "celsius" && "toggle__letter_active"
          }`}
        >
          C
        </p>
      </label>
    </div>
  );
}

export default ToggleSwitch;
