import React from "react";
import "../blocks/WeatherCard.css";
import { CurrentTemperatureUnitContext } from "../contexts/CurrentTemperatureUnitContext.js";
import { weatherOptions, defaultWeatherOptions } from "../utils/constants.js";

function WeatherCard({ weatherData }) {
  const { currentTemperatureUnit } = React.useContext(
    CurrentTemperatureUnitContext
  );

  const filteredWeatherOptions = weatherOptions.find((option) => {
    weatherData
      ? option.day === weatherData.isDay &&
        option.condition === weatherData.condition
      : option.isDay === "day" && option.condition === "clear";
    return option.isDay, option.condition;
  });

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
        src={filteredWeatherOptions?.url}
        alt={filteredWeatherOptions?.condition}
        className="weather-card__image"
      ></img>
    </section>
  );
}

export default WeatherCard;
