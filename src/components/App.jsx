import { useEffect, useState } from "react";

import "../blocks/App.css";

import Header from "./Header.jsx";
import Main from "./Main.jsx";
import Footer from "./Footer.jsx";
import ModalWithForm from "./ModalWithForm.jsx";
import ItemModal from "./ItemModal.jsx";
import { getWeather, filterWeatherData } from "../utils/weatherApi.js";
import { coordinates, APIkey } from "../utils/constants.js";

function App() {
  const [weatherData, setWeatherData] = useState({
    type: "cold",
    temp: { F: 999, C: 999 },
    city: "",
  });
  const [activeModal, setActiveModal] = useState("");
  const [selectedCard, setSelectedCard] = useState({});
  const [isOpen, setIsOpen] = useState(false);

  const handleCardClick = (card) => {
    setActiveModal("preview");
    setSelectedCard(card);
  };

  const handleAddClick = () => {
    setActiveModal("add-garment");
    setIsOpen(true);
  };

  const handleCloseClick = () => {
    setActiveModal("");
    setIsOpen(false);
  };

  useEffect(() => {
    getWeather(coordinates, APIkey)
      .then((res) => {
        const filteredData = filterWeatherData(res);
        setWeatherData(filteredData);
      })
      .catch(console.error);
  }, []);

  return (
    <div className="page">
      <Header handleAddClick={handleAddClick} weatherData={weatherData} />
      <Main weatherData={weatherData} handleCardClick={handleCardClick} />
      <Footer />
      <ModalWithForm
        isOpen={isOpen}
        title="New garment"
        buttonText="Add garment"
        activeModal={activeModal}
        handleCloseClick={handleCloseClick}
      >
        <fieldset className="modal__inputs">
          <label className="modal__label">
            Name
            <input
              type="text"
              className="modal__input modal__input_type_text"
              id="name"
              placeholder="Name"
              required
            ></input>
          </label>
          <label className="modal__label">
            Image
            <input
              type="url"
              className="modal__input  modal__input_type_text"
              id="imageUrl"
              placeholder="Image URL"
              required
            ></input>
          </label>
        </fieldset>

        <fieldset className="modal__radio-buttons">
          <legend className="modal__legend">Select the weather type:</legend>
          <label className="modal__label modal__label_type_radio">
            <input
              type="radio"
              className="modal__input modal__radio-input"
              id="hot"
              name="temperature"
            />
            Hot
          </label>
          <label className="modal__label modal__label_type_radio">
            <input
              type="radio"
              className="modal__input modal__radio-input"
              id="warm"
              name="temperature"
            />
            Warm
          </label>
          <label className="modal__label modal__label_type_radio">
            <input
              type="radio"
              className="modal__input modal__radio-input"
              id="cold"
              name="temperature"
            />
            Cold
          </label>
        </fieldset>
      </ModalWithForm>
      <ItemModal
        activeModal={activeModal}
        card={selectedCard}
        handleCloseClick={handleCloseClick}
      />
      {/*
      <WeatherCard />
      <ItemCard /> */}
    </div>
  );
}

export default App;
