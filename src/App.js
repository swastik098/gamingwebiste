import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Headers from "./components/Headers";
import Home from "./components/Home/Home";
import GameDevelopment from "./components/GameDevelopement/GameDevelopment";
import GameArt from "./components/GameArt/GameArt";
import Publishing from "./components/Publishing/Publishing";
import Academy from "./components/Academy/Academy";
import Footer from "./components/Footer";

function App() {
  return (
    <Router>
      <Headers />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/gamedevelopment" element={<GameDevelopment />} />
        <Route path="/gameart" element={<GameArt />} />
        <Route path="/publishing" element={<Publishing />} />
        <Route path="/academy" element={<Academy />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
