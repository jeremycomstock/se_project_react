import { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";

import "../blocks/App.css";

import Header from "./Header.jsx";
import Main from "./Main.jsx";
import Footer from "./Footer.jsx";
import ItemModal from "./ItemModal.jsx";
import AddItemModal from "./AddItemModal.jsx";
import Profile from "./Profile.jsx";
import { CurrentTemperatureUnitContext } from "../contexts/CurrentTemperatureUnitContext.js";
import { getWeather, filterWeatherData } from "../utils/weatherApi.js";
import { coordinates, APIkey } from "../utils/constants.js";
import { getItems, addItem, deleteItem } from "../utils/api.js";
import DeleteConfirmationModal from "./DeleteConfirmationModal.jsx";

function App() {
  const [weatherData, setWeatherData] = useState({
    type: "cold",
    temp: { F: 999, C: 999 },
    city: "",
  });
  const [activeModal, setActiveModal] = useState("");
  const [selectedCard, setSelectedCard] = useState({});
  const [currentTemperatureUnit, setCurrentTemperatureUnit] = useState("°F");
  const [clothingItems, setClothingItems] = useState([]);

  const handleCardClick = (card) => {
    setActiveModal("preview");
    setSelectedCard(card);
  };

  const onAddItem = (values) => {
    addItem(values)
      .then((newItem) => {
        setClothingItems([newItem, ...clothingItems]);
      })
      .catch(console.error);
    setActiveModal("");
  };

  const handleAddClick = () => {
    setActiveModal("add-garment");
  };

  const handleCloseClick = () => {
    setActiveModal("");
  };

  const openConfirmationModal = () => {
    setActiveModal("");
    setActiveModal("delete-confirmation");
  };

  const handleCardDelete = (card) => {
    deleteItem(card._id)
      .then(() => {
        setClothingItems(clothingItems.filter((item) => item._id !== card._id));
      })
      .catch(console.error);
    setActiveModal("");
  };

  const handleToggleSwitchChange = () => {
    currentTemperatureUnit === "°F"
      ? setCurrentTemperatureUnit("°C")
      : setCurrentTemperatureUnit("°F");
  };

  useEffect(() => {
    getWeather(coordinates, APIkey)
      .then((res) => {
        const filteredData = filterWeatherData(res);
        setWeatherData(filteredData);
      })
      .catch(console.error);
  }, []);

  useEffect(() => {
    getItems()
      .then((data) => {
        const clothingData = data;
        setClothingItems(clothingData);
      })
      .catch(console.error);
  }, []);

  return (
    <div className="page">
      <CurrentTemperatureUnitContext.Provider
        value={{ currentTemperatureUnit, handleToggleSwitchChange }}
      >
        <Header handleAddClick={handleAddClick} weatherData={weatherData} />

        <Routes>
          <Route
            path="/"
            element={
              <Main
                weatherData={weatherData}
                onCardClick={handleCardClick}
                clothingItems={clothingItems}
              />
            }
          />
          <Route
            path="/profile"
            element={
              <Profile
                handleAddClick={handleAddClick}
                onCardClick={handleCardClick}
                clothingItems={clothingItems}
              />
            }
          />
        </Routes>

        <Footer />
        <AddItemModal
          isOpen={activeModal === "add-garment"}
          onAddItem={onAddItem}
          handleCloseClick={handleCloseClick}
        />
        <ItemModal
          isOpen={activeModal === "preview"}
          card={selectedCard}
          handleCloseClick={handleCloseClick}
          openConfirmationModal={openConfirmationModal}
        />
        <DeleteConfirmationModal
          isOpen={activeModal === "delete-confirmation"}
          card={selectedCard}
          handleCloseClick={handleCloseClick}
          handleCardDelete={handleCardDelete}
        />
      </CurrentTemperatureUnitContext.Provider>
    </div>
  );
}

export default App;
