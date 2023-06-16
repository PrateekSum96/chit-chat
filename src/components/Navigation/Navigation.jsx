import { NavLink } from "react-router-dom";
import "./Navigation.css";

export const Navigation = () => {
  return (
    <div>
      <header>
        <nav>
          <NavLink to="/">chitchat</NavLink>
        </nav>
        <div>
          <input type="text" id="nav-input" />
        </div>
        <nav>user</nav>
      </header>
    </div>
  );
};
