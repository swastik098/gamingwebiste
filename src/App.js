import { useRef } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./components/Home/Home";
import GameDevelopment from "./components/GameDevelopement/GameDevelopment";
import GameArt from "./components/GameArt/GameArt";
import Publishing from "./components/Publishing/Publishing";
import Footer from "./components/Footer";
import Navigation from "./components/Headers";
import ContactPage from "./components/Home/ContactPage";
import VirtualTechnology from "./components/VirtualTechnology/VirtualTechnology";

function App() {
  const resultRef = useRef(null);
  return (
    <Router>
      <Navigation resultRef={resultRef} />
      <Routes>
        <Route path="/" element={<Home ref={resultRef} />} />
        <Route path="/gamedevelopment" element={<GameDevelopment />} />
        <Route path="/gameart" element={<GameArt />} />
        <Route path="/virtualtechnology" element={<VirtualTechnology />} />
        <Route path="/publishing" element={<Publishing />} />
        <Route path="/academy" element={<Home />} />
        <Route path="/contact" element={<ContactPage />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
