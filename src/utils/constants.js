export const weatherOptions = [
  {
    day: true,
    condition: "clear",
    url: new URL("../assets/weather-cards/day/clear_day.svg", import.meta.url)
      .href,
  },
  {
    day: true,
    condition: "cloudy",
    url: new URL("../assets/weather-cards/day/cloudy_day.svg", import.meta.url)
      .href,
  },
  {
    day: true,
    condition: "foggy",
    url: new URL("../assets/weather-cards/day/foggy_day.svg", import.meta.url)
      .href,
  },
  {
    day: true,
    condition: "rainy",
    url: new URL("../assets/weather-cards/day/rainy_day.svg", import.meta.url)
      .href,
  },
  {
    day: true,
    condition: "snowy",
    url: new URL("../assets/weather-cards/day/snowy_day.svg", import.meta.url)
      .href,
  },
  {
    day: true,
    condition: "stormy",
    url: new URL("../assets/weather-cards/day/stormy_day.svg", import.meta.url)
      .href,
  },
  {
    day: false,
    condition: "clear",
    url: new URL(
      "../assets/weather-cards/night/clear_night.svg",
      import.meta.url
    ).href,
  },
  {
    day: false,
    condition: "cloudy",
    url: new URL(
      "../assets/weather-cards/night/cloudy_night.svg",
      import.meta.url
    ).href,
  },
  {
    day: false,
    condition: "foggy",
    url: new URL(
      "../assets/weather-cards/night/foggy_night.svg",
      import.meta.url
    ).href,
  },
  {
    day: false,
    condition: "rainy",
    url: new URL(
      "../assets/weather-cards/night/rainy_night.svg",
      import.meta.url
    ).href,
  },
  {
    day: false,
    condition: "snowy",
    url: new URL(
      "../assets/weather-cards/night/snowy_night.svg",
      import.meta.url
    ).href,
  },
  {
    day: false,
    condition: "stormy",
    url: new URL(
      "../assets/weather-cards/night/stormy_night.svg",
      import.meta.url
    ).href,
  },
];

export const defaultWeatherOptions = {
  day: {
    url: new URL("../assets/weather-cards/day/default.svg", import.meta.url)
      .href,
    alt: "day",
  },
  night: {
    url: new URL("../assets/weather-cards/night/default.svg", import.meta.url)
      .href,
    alt: "night",
  },
};

export const defaultClothingItems = [
  {
    _id: 0,
    name: "Cap",
    weather: "hot",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/wtwr-project/Cap.png?etag=f3dad389b22909cafa73cff9f9a3d591",
  },
  {
    _id: 1,
    name: "Hoodie",
    weather: "warm",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/wtwr-project/Hoodie.png?etag=5f52451d0958ccb1016c78a45603a4e8",
  },
  {
    _id: 2,
    name: "Jacket",
    weather: "cold",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/wtwr-project/Jacket.png?etag=f4bb188deaa25ac84ce2338be2d404ad",
  },
  {
    _id: 3,
    name: "Sneakers",
    weather: "cold",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/wtwr-project/Sneakers.png?etag=3efeec41c1c78b8afe26859ca7fa7b6f",
  },
  {
    _id: 4,
    name: "T-Shirt",
    weather: "hot",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/wtwr-project/T-Shirt.png?etag=44ed1963c44ab19cd2f5011522c5fc09",
  },
  {
    _id: 5,
    name: "Coat",
    weather: "cold",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/wtwr-project/Coat.png?etag=298717ed89d5e40b1954a1831ae0bdd4",
  },
];

export const coordinates = {
  latitude: 40.61631,
  longitude: -111.810516,
};

export const APIkey = "8fa469a643800c8e49e7ae0c01be7dc9";
