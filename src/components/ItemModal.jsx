import "../blocks/ItemModal.css";

function ItemModal({ isOpen, card, handleCloseClick, openConfirmationModal }) {
  return (
    <div className={`modal ${isOpen ? "modal_opened" : ""}`}>
      <div className="modal__content modal__content_type_image">
        <button
          onClick={handleCloseClick}
          type="button"
          className="modal__close modal__close_type_image"
        ></button>
        <div className="modal__image-wrapper">
          <img src={card.imageUrl} alt={card.name} className="modal__image" />
        </div>

        <div className="modal__footer">
          <h2 className="modal__caption">{card.name}</h2>
          <button
            type="button"
            className="modal__delete-item-button"
            onClick={openConfirmationModal}
          >
            Delete item
          </button>
          <p className="modal__weather">Weather: {card.weather}</p>
        </div>
      </div>
    </div>
  );
}

export default ItemModal;
