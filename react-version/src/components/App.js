import '../styles/sass/styles.css';
import React from "react"
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Menu from "./Menu.js";
import Footer from "./Footer.js";
import Home from "../pages/Home";
import About from "../pages/About";
import Writing from "../pages/Writing";

function App() {
  return (
    <BrowserRouter>
      <Routes>
          <Route path="/" element={<Menu />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="writing" element={<Writing />} />
        </Route>
      </Routes>
      < Footer />
    </BrowserRouter>
    
  );
}

export default App;
