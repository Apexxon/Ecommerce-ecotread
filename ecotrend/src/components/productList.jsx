import { useProducts } from '../hooks/useProducts';
import { Spinner } from './Spinner';
import { ProductCard } from './ProductCard';

export function ProductList({ category, maxPrice }) {
  const { products, loading, error } = useProducts();

  if (loading) return <Spinner />;
  if (error) return <p>Erro ao carregar produtos: {error}</p>;

  const filtered = products.filter(
    (p) => (category === 'todos' || p.category === category) && p.price <= maxPrice
  );

  return (
    <div className="product-grid">
      {filtered.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
}
