// src/context/ProductContext.js

import React, { createContext, useContext, useState, useEffect } from 'react';

// Create context
const ProductContext = createContext();

// Provider component
export const ProductProvider = ({ children }) => {
  const [productData, setProductData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  // Fetch product data from API
  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      setError(null);
      try {
        const response = await fetch('https://dummyjson.com/products');
        if (!response.ok) throw new Error('Failed to fetch products');
        const data = await response.json();
        setProductData(data.products);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []); // Empty dependency array to only run once on mount

  return (
    <ProductContext.Provider value={{ productData, loading, error, setProductData }}>
      {children}
    </ProductContext.Provider>
  );
};

// Custom hook to use product context
export const useProduct = () => {
  return useContext(ProductContext);
};
