import { NavLink } from "react-router-dom";
import "./Navigation.css";

export const Navigation = () => {
  return (
    <div>
      <nav className="navbar">
        <NavLink to="/" className="header-name">
          <h1>Chitchat</h1>
        </NavLink>

        <input type="text" id="nav-input" />
        <div className="user-nav-info">
          <h1>User</h1>
        </div>
      </nav>
    </div>
  );
};
