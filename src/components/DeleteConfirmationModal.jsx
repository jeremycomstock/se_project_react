import React, { useState } from "react";

const DeleteConfirmationModal = ({
  isOpen,
  card,
  handleCloseClick,
  handleCardDelete,
}) => {
  const handleDeleteConfirm = (e) => {
    e.preventDefault();
    handleCardDelete(card);
  };

  return (
    <div className={`modal ${isOpen ? "modal_opened" : ""}`}>
      <div className="modal__content-delete-confirmation">
        <button
          onClick={handleCloseClick}
          type="button"
          className="modal__close"
        ></button>
        <p className="modal__warning">
          Are you sure you want to delete this item? <br />
          This action is irreversible.
        </p>
        <button
          type="button"
          onClick={handleDeleteConfirm}
          className="modal__delete-confirm-button"
        >
          Yes, delete item
        </button>
        <button
          type="button"
          onClick={handleCloseClick}
          className="modal__delete-cancel"
        >
          Cancel
        </button>
      </div>
    </div>
  );
};

export default DeleteConfirmationModal;
