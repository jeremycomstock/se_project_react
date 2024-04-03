import "../blocks/WeatherCard.css";
import { weatherOptions, defaultWeatherOptions } from "../utils/constants.js";

function WeatherCard({ weatherData }) {
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

  return (
    <section className="weather-card">
      <p className="weather-card__info">{weatherData.fahrenheit}°F</p>
      <img
        src={weatherOption?.url}
        alt={weatherOption?.condition}
        className="weather-card__image"
      ></img>
    </section>
  );
}

export default WeatherCard;
