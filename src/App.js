import "./App.css";
import { Routes, Route, NavLink } from "react-router-dom";
import { Home } from "./pages/Home/Home";
import { Explore } from "./pages/Explore/Explore";
import { Bookmarks } from "./pages/Bookmarks/Bookmarks";
import { LikedPost } from "./pages/LikedPost/LikedPost";

function App() {
  return (
    <div className="App">
      <NavLink to="/">Home</NavLink>||
      <NavLink to="/explore">Explore</NavLink>||
      <NavLink to="/bookmarks">BookMarks</NavLink>||
      <NavLink to="/likedPost">Likes</NavLink>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/explore" element={<Explore />} />
        <Route path="/bookmarks" element={<Bookmarks />} />
        <Route path="/likedPost" element={<LikedPost />} />
      </Routes>
    </div>
  );
}

export default App;
