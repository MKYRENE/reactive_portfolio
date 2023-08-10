import { useState } from 'react';
import { Routes, Route } from 'react-router-dom'
import React from 'react';
import 'bootstrap/dist/css/bootstrap.css'; // Import Bootstrap CSS

// Component Imports
import Header from './components/Header';
import Footer from './components/Footer';

// Page imports
import Main from './pages/Main';
import About from './pages/About';
import Contact from './pages/Contact';
import Portfolio from './pages/Portfolio';

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/portfolio" element={<Portfolio />} />

      </Routes>


      <Footer />
    </>
  );
}

export default App;