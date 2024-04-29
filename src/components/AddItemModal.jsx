import "../blocks/AddItemModal.css";
import React, { useState, useEffect } from "react";
import ModalWithForm from "./ModalWithForm.jsx";

const AddItemModal = ({ isOpen, onAddItem, handleCloseClick }) => {
  const [name, setName] = useState("");
  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const [link, setLink] = useState("");
  const handleLinkChange = (e) => {
    setLink(e.target.value);
  };

  const [temperature, setTemperature] = useState("");
  const handleTemperatureChange = (e) => {
    setTemperature(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onAddItem({ name, link, temperature });
    setName("");
    setLink("");
    setTemperature("");
  };

  useEffect(() => {
    if (isOpen) {
      setName("");
      setLink("");
      setTemperature("");
    }
  }, [isOpen]);

  return (
    <ModalWithForm
      isOpen={isOpen}
      title="New garment"
      buttonText="Add garment"
      handleCloseClick={handleCloseClick}
      onSubmit={handleSubmit}
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
            value={name}
            onChange={handleNameChange}
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
            value={link}
            onChange={handleLinkChange}
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
            value="hot"
            onChange={handleTemperatureChange}
            required
          />
          Hot
        </label>
        <label className="modal__label modal__label_type_radio">
          <input
            type="radio"
            className="modal__input modal__radio-input"
            id="warm"
            name="temperature"
            value="warm"
            onChange={handleTemperatureChange}
            required
          />
          Warm
        </label>
        <label className="modal__label modal__label_type_radio">
          <input
            type="radio"
            className="modal__input modal__radio-input"
            id="cold"
            name="temperature"
            value="cold"
            onChange={handleTemperatureChange}
            required
          />
          Cold
        </label>
      </fieldset>
    </ModalWithForm>
  );
};

export default AddItemModal;
