import "../blocks/Profile.css";
import SideBar from "./SideBar.jsx";
import ClothesSection from "./ClothesSection.jsx";

function Profile({ onCardClick, handleAddClick, clothingItems }) {
  return (
    <div className="profile">
      <section className="profile__sidebar">
        <SideBar />
      </section>
      <section className="profile__clothes-section">
        <ClothesSection
          handleAddClick={handleAddClick}
          onCardClick={onCardClick}
          clothingItems={clothingItems}
        />
      </section>
    </div>
  );
}

export default Profile;
