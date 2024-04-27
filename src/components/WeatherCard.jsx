import React from "react";
import "../blocks/WeatherCard.css";
import { CurrentTemperatureUnitContext } from "../contexts/CurrentTemperatureUnitContext.js";
import { weatherOptions, defaultWeatherOptions } from "../utils/constants.js";

function WeatherCard({ weatherData }) {
  const { currentTemperatureUnit } = React.useContext(
    CurrentTemperatureUnitContext
  );

  const filteredWeatherOptions = weatherOptions.filter((option) => {
    return (
      option.day === weatherData.isDay &&
      option.condition === weatherData.condition
    );
  });

  let weatherOption;
  if (filteredWeatherOptions.length === 0) {
    weatherOption = defaultWeatherOptions[weatherData.isDay ? "day" : "night"];
    weatherOption.condition = weatherData.isDay ? "day" : "night";
  } else {
    weatherOption = filteredWeatherOptions[0];
  }

  let currentTemp;
  if (currentTemperatureUnit === "°F") {
    currentTemp = weatherData.fahrenheit;
  } else if (currentTemperatureUnit === "°C") {
    currentTemp = weatherData.celsius;
  }

  return (
    <section className="weather-card">
      <p className="weather-card__info">
        {currentTemp}
        {currentTemperatureUnit}
      </p>
      <img
        src={weatherOption?.url}
        alt={weatherOption?.condition}
        className="weather-card__image"
      ></img>
    </section>
  );
}

export default WeatherCard;
