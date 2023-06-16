import { Routes, Route } from "react-router-dom";

import "./App.css";
import { Home } from "./pages/Home/Home";
import { Explore } from "./pages/Explore/Explore";
import { Bookmarks } from "./pages/Bookmarks/Bookmarks";
import { LikedPost } from "./pages/LikedPost/LikedPost";
import { Navigation } from "./components/Navigation/Navigation";

function App() {
  return (
    <div className="App">
      <div className="working-area">
        <div className="header-nav">
          <Navigation />
        </div>
        <div className="below-navigation">
          <div className="aside-left"></div>
          <div className="center">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/explore" element={<Explore />} />
              <Route path="/bookmarks" element={<Bookmarks />} />
              <Route path="/likedPost" element={<LikedPost />} />
            </Routes>
          </div>
          <div className="aside-right"></div>
        </div>
      </div>
    </div>
  );
}

export default App;
