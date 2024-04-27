import "../blocks/SideBar.css";
import avatar from "../assets/avatar.svg";

function SideBar() {
  return (
    <div className="sidebar">
      <img src={avatar} alt="Default avatar" className="sidebar__avatar" />
      <p className="sidebar__username">Jeremy Comstock</p>
    </div>
  );
}

export default SideBar;
