
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AboutPage from "./AboutPage";
import RegistrationForm from "./RegistrationForm";
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
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
        </Routes>
      </div>
    </Router>
  );
}

const HomePage = () => {
  return (
    <div>
      <h1>Gokul N</h1>
    </div>
      <div style={{ overflowX: "hidden" }}>
        <Navigation />

        <Routes>
          {/* Update the path for the home page to "/" */}
          <Route
            path="/"
            element={
              <>
                <First />
                <Services />
                <ChooseUs />
                <Invest />
              </>
            }
          />
          {/* Define routes for other pages */}
          <Route path="/aboutpage" element={<AboutPage />} />
          <Route path="/services" element={<Services />} />
          <Route path="/chooseus" element={<ChooseUs />} />
          <Route path="/invest" element={<Invest />} />
        </Routes>

        {/* <Footer /> */}
      </div>
    </Router>
  );
};

export default App;
