import React from "react";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./components/jsx/home.jsx";
import About from "./components/jsx/about.jsx";
import Navbar from "./components/jsx/navbar.jsx";
import Portfolios from "./components/jsx/portfolios.jsx";
import CursorFollower from "./components/jsx/cursorFollower.jsx";
import Skills from "./components/jsx/skills.jsx";
import Contact from "./components/jsx/contact";
function App() {
  
  return ( 
    <div>
    <Navbar />
    <CursorFollower />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About/>} />
      <Route path="/portfolio" element={<Portfolios/>} />
      <Route path='/skills' element={<Skills/>} />
      <Route path="*" element={<h1>404 Not Found</h1>} />
      <Route path="/contact" element={<Contact/>} />
    </Routes>
    </div>
  );
}

export default App;
