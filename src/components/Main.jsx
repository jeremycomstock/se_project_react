import "../blocks/Main.css";
import "../blocks/Cards.css";
import WeatherCard from "./WeatherCard.jsx";
import ItemCard from "./ItemCard.jsx";

function Main({ weatherData, onCardClick, clothingItems }) {
  return (
    <main className="content">
      <WeatherCard weatherData={weatherData} />
      <section className="cards">
        <p className="cards__text">
          Today is {weatherData.feelsLike} / You may want to wear:
        </p>

        <ul className="cards__list">
          {clothingItems
            .filter((item) => {
              return item.weather === weatherData.feelsLike;
            })
            .map((item) => {
              return (
                <ItemCard
                  key={item._id}
                  item={item}
                  onCardClick={onCardClick}
                />
              );
            })}
        </ul>
      </section>
    </main>
  );
}

export default Main;
