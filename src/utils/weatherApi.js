const processRequest = (res) => {
  if (res.ok) {
    return res.json();
  } else {
    return Promise.reject(`Error: ${res.status}`);
  }
};

export const getWeather = ({ longitude, latitude }, APIkey) => {
  return fetch(
    `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&units=imperial&appid=${APIkey}`
  ).then(processRequest);
};

export const filterWeatherData = (data) => {
  const result = {};
  const tempNumber = Number(data.main.temp);
  result.coordinates = {
    longitude: data.coord.lon,
    latidude: data.coord.lat,
  };
  result.city = data.name;
  result.fahrenheit = Math.round(tempNumber);
  result.celsius = Math.round((tempNumber - 32) * (5 / 9));
  result.feelsLike = getWeatherType(result.fahrenheit);
  result.condition = data.weather[0].main.toLowerCase();
  result.isDay = isDay(data.sys, Date.now());
  return result;
};

const isDay = ({ sunrise, sunset }, now) => {
  return sunrise * 1000 < now && now < sunset * 1000;
};

const getWeatherType = (temperature) => {
  if (temperature > 86) {
    return "hot";
  } else if (temperature >= 66 && temperature < 85) {
    return "warm";
  } else if (temperature <= 65) {
    return "cold";
  }
};
