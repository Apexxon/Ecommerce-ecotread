import { useProducts } from '../hooks/useProducts';
import { Spinner } from './Spinner';
 
export function ProductList() {
  const { products, loading, error } = useProducts();
 
  if (loading) return <Spinner />;
  if (error) return <p>Erro ao carregar produtos: {error}</p>;
 
  return (
    <div className="product-grid">
      {products.map((product) => (
        <div key={product.id} className="product-card">
          <h3>{product.name}</h3>
          <p>R$ {product.price.toFixed(2)}</p>
        </div>
      ))}
    </div>
  );
}
