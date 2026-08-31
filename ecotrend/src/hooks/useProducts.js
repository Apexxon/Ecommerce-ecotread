import { useState, useEffect } from 'react';
 
const PRODUCTS_URL = '/src/data/products.json';
 
export function useProducts() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
 
  useEffect(() => {
    async function loadProducts() {
      try {
        setLoading(true);
        const response = await fetch(PRODUCTS_URL);
        if (!response.ok) throw new Error('Erro ao carregar produtos');
        const data = await response.json();
        setProducts(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    }
    loadProducts();
  }, []);
 
  return { products, loading, error };
}