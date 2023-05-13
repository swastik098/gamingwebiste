import React from "react";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./components/Home/Home";
import GameDevelopment from "./components/GameDevelopement/GameDevelopment";
import GameArt from "./components/GameArt/GameArt";
import Publishing from "./components/Publishing/Publishing";
import Animation from "./components/Animation/Animation";
import Academy from "./components/Academy/Academy";
import Footer from "./components/Footer";
import Navigation from "./components/Headers";
import Contact from "./components/Home/Contact";
import ContactPage from "./components/Home/ContactPage";

function App() {
  return (
    <Router>
      <Navigation />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/gamedevelopment" element={<GameDevelopment />} />
        <Route path="/gameart" element={<GameArt />} />
        <Route path="/animation" element={<Home />} />
        <Route path="/publishing" element={<Publishing />} />
        <Route path="/academy" element={<Home />} />
        <Route exact path="/contact" element={<ContactPage />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
