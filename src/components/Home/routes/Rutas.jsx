// En Rutas.jsx
import React from 'react';
import { Routes, Route, Link, BrowserRouter } from 'react-router-dom';
import Home from '../home';
import About from '../about';
import Contact from '../contact';
import Projects from '../proyects';

const Rutas = () => {
  return (
    <BrowserRouter>
    
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/proyects" element={<Projects />} />
        <Route path='*' element={( <><h1> Erorr 404</h1> <strong>Esta página no existe</strong></>)}/>
      </Routes>
    </BrowserRouter>
  );
};

export default Rutas;
