import { NavLink } from "react-router-dom";
import "./AsideLeft.css";
export const AsideLeftNav = () => {
  return (
    <div className="aside-left-nav">
      <NavLink to="/">
        <i class="fa-solid fa-house"></i>Home
      </NavLink>
      <NavLink to="/explore">
        <i class="fa-sharp fa-solid fa-compass"></i>Explore
      </NavLink>
      <NavLink to="/bookmarks">
        <i class="fa-solid fa-bookmark"></i>Bookmarks
      </NavLink>
      <NavLink to="/likedPost">
        <i class="fa-solid fa-heart"></i>Liked Post
      </NavLink>
    </div>
  );
};
