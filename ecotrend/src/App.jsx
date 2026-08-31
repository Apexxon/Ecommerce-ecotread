import { useState } from 'react';
import { ProductFilters } from './components/ProductFilters';
import { ProductList } from './components/ProductList';
import { Cart } from './components/Cart';

function App() {
  const [category, setCategory] = useState('todos');
  const [maxPrice, setMaxPrice] = useState(500);

  return (
    <div className="app">
      <ProductFilters
        category={category}
        setCategory={setCategory}
        maxPrice={maxPrice}
        setMaxPrice={setMaxPrice}
      />
      <ProductList category={category} maxPrice={maxPrice} />
      <Cart />
    </div>
  );
}

export default App;
