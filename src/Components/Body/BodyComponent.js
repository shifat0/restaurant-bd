import React from "react";
import Menu from "./Menu";
import { Navigate, Route, Routes } from "react-router-dom";
import Home from "../../Pages/Home";
import About from "../../Pages/About";
import Contact from "../../Pages/Contact";

const BodyComponent = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Navigate to="/home" />} />
        <Route path="/home" element={<Home />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </div>
  );
};

export default BodyComponent;
