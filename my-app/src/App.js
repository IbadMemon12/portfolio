// App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './component/features/Navbar';
import Home from './component/features/Home';
import About from './component/features/About';
import Contact from './component/features/Contact';
import Custom from './component/features/Custom';
import './App.css';

const App = () => {
  return (
    <Router>
      <div>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/custom" element={<Custom />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
