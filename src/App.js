import { Routes, Route } from "react-router-dom";

import "./App.css";
import { Home, Explore, Bookmarks, LikedPost } from "./pages/utils";
import { Navigation } from "./components/Navigation/Navigation";
import { AsideLeftNav } from "./components/AsideLeft/AsideLeft";

function App() {
  return (
    <div className="App">
      <div className="working-area">
        <div className="header-nav">
          <Navigation />
        </div>
        <div className="main">
          <div className="aside-left">
            <AsideLeftNav />
          </div>
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
