import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// components
import PageWrapper from "./components/PageWrapper";

// pages
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Portfolio from "./pages/Portfolio";
import Recruitment from "./pages/Recruitment";
import Services from "./pages/Services";
import Team from "./pages/Team";


function App() {
  return (
    <Router>
        <PageWrapper>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/portfolio" element={<Portfolio />} />
            <Route path="/recruitment" element={<Recruitment />} />
            <Route path="/services" element={<Services />} />
            <Route path="/team" element={<Team />} />
          </Routes>
        </PageWrapper>
    </Router>
  );
}

export default App;
