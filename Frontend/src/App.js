import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AboutPage from "./AboutPage";
import RegistrationForm from "./RegistrationForm";

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
  );
};

export default App;
