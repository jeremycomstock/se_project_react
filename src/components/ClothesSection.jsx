import "../blocks/ClothesSection.css";
import ItemCard from "./ItemCard";

function ClothesSection({ onCardClick, handleAddClick, clothingItems }) {
  return (
    <div className="clothes-section">
      <section className="clothes-section__header">
        {" "}
        <p className="clothes-section__title">Your items</p>
        <button
          type="button"
          className="clothes-section__button"
          onClick={handleAddClick}
        >
          + Add new
        </button>
      </section>
      <section className="clothes-section__gallery">
        <ul className="clothes-section__cards">
          {clothingItems.map((item) => {
            return (
              <ItemCard key={item._id} item={item} onCardClick={onCardClick} />
            );
          })}
        </ul>
      </section>
    </div>
  );
}

export default ClothesSection;
