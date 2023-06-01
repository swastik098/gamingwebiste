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
import Academy from "./components/Academy/Academy";
import PrivacyPolicy from "./components/PrivacyPolicy";
import TermsAndCondtions from "./components/TermsAndCondtions";

function App() {
  const resultRef = useRef(null);
  return (
    <Router>
      <Navigation resultRef={resultRef} />
      <Routes className="min-h-screen">
        <Route path="/" element={<Home ref={resultRef} />} />
        <Route path="/gamedevelopment" element={<GameDevelopment />} />
        <Route path="/gameart" element={<GameArt />} />
        <Route path="/virtualtechnology" element={<VirtualTechnology />} />
        <Route path="/publishing" element={<Publishing />} />
        <Route path="/academy" element={<Academy />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/terms-and-conditions" element={<TermsAndCondtions />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
