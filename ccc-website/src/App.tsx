import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// components
import PageWrapper from './components/PageWrapper';

// pages
import Home from './pages/Home';
import About from './pages/About';
import Recruitment from './pages/Recruitment';
import Work from './pages/Work';

function App() {
  return (
    <Router>
      <PageWrapper>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/work" element={<Work />} />
          <Route path="/recruitment" element={<Recruitment />} />
        </Routes>
      </PageWrapper>
    </Router>
  );
}

export default App;
