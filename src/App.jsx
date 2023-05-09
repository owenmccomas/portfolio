import "./App.css";
import React from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import Projects from "./components/Projects";
import Home from "./components/Home";
import MorseConverter from "./components/MorseConverter";


function App() {
  return (
    <Router>
      <div className="App">
        <nav>
          <Link className="navLink" to="/">
            home
          </Link>
          <Link className="navLink" to="/Projects">
            projects
          </Link>
          <Link className="navLink" to="#">
            contact
          </Link>
          <Link className="navLink" to="#">
            about
          </Link>
        </nav>
      </div>
      <Routes>
        <Route path="/projects" element={<Projects />}>
          <Route path="morse-converter" element={<MorseConverter />} />
        </Route>
        <Route path="/" element={<Home />} />
      </Routes>
      <footer className="footer">&#169;2023 owen mccomas</footer>
    </Router>
  );
}

export default App;
