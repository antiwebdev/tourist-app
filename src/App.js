import React from 'react';
import { BrowserRouter as Router, Route, Routes} from "react-router-dom";
import './App.css';
import Navbar from './components/Navbar/Navbar';
import Services from './components/Servises/Services';
import About from './components/About/About';
import Contact from './components/Contact/Contact';


function App() {
  return (
    <>
      <Router>
        <div>
          <Navbar />
          <Routes>
          <Route path="/" element={<About />} />
          <Route path="/services" element={<Services />} />          
          <Route path="/contact" element={<Contact />} />
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;
