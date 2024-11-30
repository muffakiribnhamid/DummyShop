// src/App.jsx

import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; // Correctly import BrowserRouter
import { ProductProvider } from './context/ProductContext';
import Home from './pages/Home';
import ProductDetails from './pages/ProductDetails';

function App() {
  return (
    <ProductProvider>
      <Router> {/* Wrap your routes with Router */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/product/:id" element={<ProductDetails />} />
        </Routes>
      </Router>
    </ProductProvider>
  );
}

export default App;
