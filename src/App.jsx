import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Practice from "./components/Practice";
import Works from "./components/Works";

const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Hero />} /> 
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default App;
