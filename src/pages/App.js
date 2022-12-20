import React from 'react';

import '../App.css';
import Home from './Home';
import Skills from './Skills';
import About from './About';
import Contact from './Contact';
import Thanks from './Thanks';
import Error from './Error';

// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/thanks" element={<Thanks />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </div>
  );
}

export default App;