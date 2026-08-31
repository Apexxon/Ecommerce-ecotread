import { useProducts } from '../hooks/useProducts';
import { Spinner } from './Spinner';
import { ProductCard } from './ProductCard';

export function ProductList() {
  const { products, loading, error } = useProducts();

  if (loading) return <Spinner />;
  if (error) return <p>Erro ao carregar produtos: {error}</p>;

  return (
    <div className="product-grid">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
}