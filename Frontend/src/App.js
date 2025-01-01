import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import uiuxPage from "./Components/uiuxPage";
import FendDevPage from "./Components/FendDevPage";
import BendDevPage from "./Components/BendDevPage";
import PCBDesPage from "./Components/PCBDesPage";
import RegistrationForm from "./RegistrationForm";
import React from "react";
import Navigation from "./Components/Navigation";
import First from "./Components/First";
import Services from "./Components/Services";
import ChooseUs from "./Components/ChooseUs";
import Invest from "./Components/Invest";
import AboutPage from "./Components/AboutPage";
import Footer from "./Components/Footer";

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/registration" element={<RegistrationForm />} />
          <Route path="/aboutpage" element={<AboutPage />} />
          <Route path="/services" element={<Services />} />
          <Route path="/chooseus" element={<ChooseUs />} />
          <Route path="/invest" element={<Invest />} />
        </Routes>
      </div>
    </Router>
  );
}

const HomePage = () => {
  return (
    <div>
      <div style={{ overflowX: "hidden" }}>
        <Navigation />
        <First />
        <Services />
        <ChooseUs />
        <Invest />
        {/* <Footer /> */}
      </div>
    </div>
  );
};

export default App;
